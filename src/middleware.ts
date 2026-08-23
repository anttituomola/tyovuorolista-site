import { defineMiddleware } from 'astro:middleware'
import { appendVaryAccept, preferredType } from './utils/acceptHeader.ts'
import {
  fallbackPageMarkdown,
  getMarkdownForPath,
  getNotFoundMarkdown,
  markdownResponse,
  shouldSkipNegotiation
} from './utils/siteMarkdown.ts'

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname
  const accept = context.request.headers.get('accept')
  const chosen = shouldSkipNegotiation(pathname) ? 'text/html' : preferredType(accept)

  context.locals.prefersMarkdown = chosen === 'text/markdown'

  if (!shouldSkipNegotiation(pathname) && chosen === null) {
    const headers = new Headers({ 'Content-Type': 'text/plain; charset=utf-8' })
    appendVaryAccept(headers)
    return new Response('Not Acceptable', { status: 406, headers })
  }

  if (chosen === 'text/markdown') {
    const known = getMarkdownForPath(pathname)
    if (known) {
      return markdownResponse(known, 200)
    }
  }

  const response = await next()

  if (!shouldSkipNegotiation(pathname)) {
    appendVaryAccept(response.headers)
  }

  if (chosen === 'text/markdown') {
    if (response.status === 404) {
      return markdownResponse(getNotFoundMarkdown(), 404)
    }
    const contentType = response.headers.get('content-type') || ''
    if (response.ok && contentType.includes('text/html')) {
      return markdownResponse(fallbackPageMarkdown(pathname), response.status)
    }
  }

  return response
})
