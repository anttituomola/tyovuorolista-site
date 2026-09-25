import { isPublishedPubDate } from './blogPublishDate.mjs'

export { isPublishedPubDate, toPubDateString, getHelsinkiDateString } from './blogPublishDate.mjs'

/** Markdown post module from `import.meta.glob('.../posts/*.md', { eager: true })` */
export type BlogPostModule = {
  url: string
  frontmatter: {
    title: string
    pubDate: string | Date
    /** When set, the index sorts and labels the card by this date. */
    updatedDate?: string | Date
    description?: string
    image?: { url: string; alt?: string }
    tags?: string[]
  }
}

function listingTime(post: BlogPostModule): number {
  const date = post.frontmatter.updatedDate || post.frontmatter.pubDate
  return new Date(date).getTime()
}

export function sortBlogPostsByDate(posts: BlogPostModule[]): BlogPostModule[] {
  return [...posts].sort((a, b) => listingTime(b) - listingTime(a))
}

/** Posts whose pubDate is today or earlier (Europe/Helsinki), newest first. */
export function getPublishedPosts(posts: BlogPostModule[]): BlogPostModule[] {
  return sortBlogPostsByDate(
    posts.filter((post) => isPublishedPubDate(post.frontmatter.pubDate))
  )
}
