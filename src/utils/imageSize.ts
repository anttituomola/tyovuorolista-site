import sizes from 'virtual:public-image-sizes'

/** Intrinsic width/height of an image in public/, for attributes that prevent layout shift. */
export function publicImageSize(src: string | undefined): { width?: number; height?: number } {
    if (!src || !src.startsWith('/')) return {}
    const clean = src.split(/[?#]/)[0]
    let key = clean
    try {
        key = decodeURIComponent(clean)
    } catch {
        // Keep the raw path
    }
    const size = sizes[key] || sizes[clean]
    return size ? { width: size[0], height: size[1] } : {}
}
