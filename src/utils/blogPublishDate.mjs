import fs from 'node:fs'
import path from 'node:path'

/** Today's calendar date in Finland as YYYY-MM-DD. */
export function getHelsinkiDateString(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Helsinki',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

/**
 * Normalize frontmatter pubDate to YYYY-MM-DD.
 * YAML dates become UTC midnight Dates — use UTC parts so the intended calendar day is kept.
 */
export function toPubDateString(pubDate) {
  if (typeof pubDate === 'string') {
    return pubDate.slice(0, 10)
  }
  if (pubDate instanceof Date && !Number.isNaN(pubDate.getTime())) {
    const y = pubDate.getUTCFullYear()
    const m = String(pubDate.getUTCMonth() + 1).padStart(2, '0')
    const d = String(pubDate.getUTCDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }
  return ''
}

/** True when pubDate is today or earlier in Europe/Helsinki. */
export function isPublishedPubDate(pubDate, now = new Date()) {
  const pub = toPubDateString(pubDate)
  if (!pub) return false
  return pub <= getHelsinkiDateString(now)
}

/**
 * Pathnames of posts whose pubDate is still in the future (e.g. `/posts/slug`).
 * Used at build time for sitemap filtering.
 */
export function getFutureBlogPostPathnames(postsDir) {
  const today = getHelsinkiDateString()
  const pathnames = new Set()

  if (!fs.existsSync(postsDir)) return pathnames

  for (const file of fs.readdirSync(postsDir)) {
    if (!file.endsWith('.md')) continue

    const content = fs.readFileSync(path.join(postsDir, file), 'utf8')
    const match = content.match(/^pubDate:\s*['"]?(\d{4}-\d{2}-\d{2})['"]?/m)
    if (!match) continue

    if (match[1] > today) {
      pathnames.add(`/posts/${file.replace(/\.md$/, '')}`)
    }
  }

  return pathnames
}
