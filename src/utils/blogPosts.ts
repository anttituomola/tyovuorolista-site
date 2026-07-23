import { isPublishedPubDate } from './blogPublishDate.mjs'

export { isPublishedPubDate, toPubDateString, getHelsinkiDateString } from './blogPublishDate.mjs'

/** Markdown post module from `import.meta.glob('.../posts/*.md', { eager: true })` */
export type BlogPostModule = {
  url: string
  frontmatter: {
    title: string
    pubDate: string | Date
    description?: string
    image?: { url: string; alt?: string }
    tags?: string[]
  }
}

export function sortBlogPostsByDate(posts: BlogPostModule[]): BlogPostModule[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).getTime() -
      new Date(a.frontmatter.pubDate).getTime()
  )
}

/** Posts whose pubDate is today or earlier (Europe/Helsinki), newest first. */
export function getPublishedPosts(posts: BlogPostModule[]): BlogPostModule[] {
  return sortBlogPostsByDate(
    posts.filter((post) => isPublishedPubDate(post.frontmatter.pubDate))
  )
}
