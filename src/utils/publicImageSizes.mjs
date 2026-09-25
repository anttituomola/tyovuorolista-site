// Build-time lookup of intrinsic sizes for images under public/.
// Images served straight from public/ have no width/height in the markup,
// which Lighthouse reports as layout shift (CLS). This scans public/ once per
// build and feeds both the markdown plugin (post images) and the
// `virtual:public-image-sizes` module used by .astro components.
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i

let scanPromise

function listImages(dir, base = dir) {
    const files = []
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) files.push(...listImages(full, base))
        else if (IMAGE_EXT.test(entry.name)) files.push(full)
    }
    return files
}

/** @returns {Promise<Record<string, [number, number]>>} "/path/in/public.png" -> [width, height] */
export function scanPublicImageSizes(publicDir) {
    scanPromise ??= (async () => {
        const sizes = {}
        await Promise.all(
            listImages(publicDir).map(async (file) => {
                try {
                    const { width, height } = await sharp(file).metadata()
                    if (width && height) {
                        const key = '/' + path.relative(publicDir, file).split(path.sep).join('/')
                        sizes[key] = [width, height]
                    }
                } catch {
                    // Unreadable image: leave it without dimensions
                }
            })
        )
        return sizes
    })()
    return scanPromise
}

export function lookupSize(sizes, src) {
    if (typeof src !== 'string' || !src.startsWith('/')) return undefined
    const clean = src.split(/[?#]/)[0]
    let key = clean
    try {
        key = decodeURIComponent(clean)
    } catch {
        // Keep the raw path
    }
    return sizes[key] || sizes[clean]
}

/** Vite plugin exposing the scan as `virtual:public-image-sizes`. */
export function publicImageSizesVitePlugin(publicDir) {
    const id = 'virtual:public-image-sizes'
    const resolved = '\0' + id
    return {
        name: 'public-image-sizes',
        resolveId(source) {
            return source === id ? resolved : undefined
        },
        async load(loadId) {
            if (loadId !== resolved) return undefined
            const sizes = await scanPublicImageSizes(publicDir)
            return `export default ${JSON.stringify(sizes)}`
        },
    }
}

function walk(node, visit) {
    visit(node)
    if (node.children) for (const child of node.children) walk(child, visit)
}

/** Rehype plugin: adds width/height to <img> (and <video poster>) in markdown posts. */
export function rehypePublicImageSizes({ publicDir }) {
    return async (tree) => {
        const sizes = await scanPublicImageSizes(publicDir)
        walk(tree, (node) => {
            if (node.type !== 'element') return
            const props = node.properties || {}
            if (props.width || props.height) return
            const src = node.tagName === 'img' ? props.src : node.tagName === 'video' ? props.poster : undefined
            const size = lookupSize(sizes, src)
            if (!size) return
            props.width = size[0]
            props.height = size[1]
            node.properties = props
        })
    }
}

/** Remark plugin: copies the hero image size into frontmatter.image.width/height. */
export function remarkHeroImageSize({ publicDir }) {
    return async (_tree, file) => {
        const image = file.data?.astro?.frontmatter?.image
        if (!image?.url || image.width) return
        const size = lookupSize(await scanPublicImageSizes(publicDir), image.url)
        if (!size) return
        image.width = size[0]
        image.height = size[1]
    }
}
