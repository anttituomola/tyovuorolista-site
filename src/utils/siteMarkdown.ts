import fi from '../i18n/fi.json' with { type: 'json' }
import en from '../i18n/en.json' with { type: 'json' }
import sv from '../i18n/sv.json' with { type: 'json' }
import { APP_ORIGIN, COMPANY, SITE_ORIGIN, SOFTWARE_DESCRIPTION } from './company.ts'
import { MARKDOWN_CONTENT_TYPE, VARY_ACCEPT } from './acceptHeader.ts'
import { privacyMarkdown } from './privacyContent.ts'
import { getLocaleFromPath } from './translations.ts'

type Locale = 'fi' | 'en' | 'sv'

const i18n = { fi, en, sv } as const

const blogRawModules = (
  typeof import.meta.glob === 'function'
    ? import.meta.glob('../pages/posts/*.md', {
        query: '?raw',
        import: 'default',
        eager: true
      })
    : {}
) as Record<string, string>

function translations(locale: Locale) {
  return i18n[locale]
}

export function normalizePathname(pathname: string): string {
  const noQuery = pathname.split('?')[0].split('#')[0]
  if (!noQuery || noQuery === '/') return '/'
  return noQuery.endsWith('/') ? noQuery.slice(0, -1) : noQuery
}

export function getNotFoundMarkdown(): string {
  return `# Page not found

This URL does not exist on tyovuorolista.fi.

## Where to look next

- [Sitemap](${SITE_ORIGIN}/sitemap-index.xml)
- [llms.txt](${SITE_ORIGIN}/llms.txt)
- [Agent instructions](${SITE_ORIGIN}/agent-instructions.md)
- [Home](${SITE_ORIGIN}/)
- [About](${SITE_ORIGIN}/about)
- [Contact](${SITE_ORIGIN}/contact)
- [Privacy](${SITE_ORIGIN}/privacy)
- [Pricing](${SITE_ORIGIN}/hinnoittelu)
- [Finnish working-time articles](${SITE_ORIGIN}/blogitekstit)
`
}

export function markdownHeaders(extra?: HeadersInit): Headers {
  const headers = new Headers(extra)
  headers.set('Content-Type', MARKDOWN_CONTENT_TYPE)
  headers.set('Vary', VARY_ACCEPT)
  return headers
}

export function markdownResponse(body: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: markdownHeaders()
  })
}

function homeMarkdown(locale: Locale): string {
  const t = translations(locale)
  const hero = t.hero
  const tes = t.tesHighlight
  return `# ${COMPANY.brandName}

${SOFTWARE_DESCRIPTION}

## ${hero.title}

${hero.tagline}

${hero.subtitle}

## ${tes.title}

${tes.lead}

- ${tes.bullet1}
- ${tes.bullet2}
- ${tes.bullet3}

## Product app

The scheduling app itself is at ${APP_ORIGIN} — this site is marketing, documentation, and Finnish working-time / TES articles.

## Next reads

- [Features](${SITE_ORIGIN}/ominaisuudet)
- [Pricing](${SITE_ORIGIN}/hinnoittelu)
- [About](${SITE_ORIGIN}/meista)
- [Contact](${SITE_ORIGIN}/yhteystiedot)
- [Privacy](${SITE_ORIGIN}/tietosuoja)
- [llms.txt](${SITE_ORIGIN}/llms.txt)
- [Agent instructions](${SITE_ORIGIN}/agent-instructions.md)
`
}

function aboutMarkdown(locale: Locale): string {
  const about = translations(locale).pages.about
  const people = (about.people || []) as Array<{
    name: string
    role: string
    paragraphs: string[]
  }>
  const company = 'company' in about ? String((about as { company?: string }).company || '') : ''
  const lines = [`# ${about.title}`, '', company || `${COMPANY.brandName} at tyovuorolista.fi.`, '']
  for (const person of people) {
    lines.push(`## ${person.name}`, '', `*${person.role}*`, '', ...(person.paragraphs || []), '')
  }
  lines.push(
    `Contact: ${COMPANY.email}, ${COMPANY.telephoneDisplay}`,
    '',
    `[Contact page](${SITE_ORIGIN}/yhteystiedot) · [Privacy](${SITE_ORIGIN}/tietosuoja)`
  )
  return lines.join('\n')
}

function contactMarkdown(locale: Locale): string {
  const t = translations(locale)
  const contact = t.pages.contact
  const about = t.pages.about
  const companyIntro =
    'company' in about ? String((about as { company?: string }).company || '') : ''
  return `# ${contact.title}

${COMPANY.brandName} contact details. The scheduling app is at ${APP_ORIGIN}.

${companyIntro}

- ${contact.company}
- ${contact.businessId}
- ${contact.address}
- ${contact.sales} ${COMPANY.salesEmail}
- ${contact.info}
- Phone / WhatsApp: ${COMPANY.telephoneDisplay}

Use this page to reach a human (sales, support, or press). For product signup go to ${APP_ORIGIN}/register. Privacy policy: ${SITE_ORIGIN}/privacy.

[About](${SITE_ORIGIN}/meista) · [Privacy](${SITE_ORIGIN}/tietosuoja) · [llms.txt](${SITE_ORIGIN}/llms.txt)
`
}

function pricingMarkdown(locale: Locale): string {
  const pricing = translations(locale).pages.pricing
  return `# ${pricing.title}

${pricing.subtitle}

${pricing.priceNote}

VAT is added to paid plans. The Mini plan (max. 3 employees) is free.

See live prices: ${SITE_ORIGIN}/hinnoittelu
`
}

function featuresMarkdown(locale: Locale): string {
  const features = translations(locale).pages.features
  return `# ${features.heroTitle}

${features.subtitle}

${features.ctaNote}

Feature index: ${SITE_ORIGIN}/ominaisuudet

${SOFTWARE_DESCRIPTION}
`
}

function termsMarkdown(locale: Locale): string {
  const title = translations(locale).pages.terms.title
  return `# ${title}

${COMPANY.brandName} is a web application by ${COMPANY.legalName} (business ID ${COMPANY.businessId}) for planning and publishing shift schedules for small and medium-sized businesses.

Disputes are resolved in the Tampere District Court. Advisory TES warnings do not replace the collective agreement or the employer's own payroll and legal assessment.

Full terms: ${SITE_ORIGIN}/kayttoehdot

Privacy (dedicated page): ${SITE_ORIGIN}/tietosuoja
`
}

function getRawMarkdownPost(pathname: string): string | null {
  const slug = normalizePathname(pathname).split('/').pop()
  if (!slug) return null
  const key = Object.keys(blogRawModules).find((filePath) => filePath.endsWith(`/${slug}.md`))
  return key ? blogRawModules[key] : null
}

const PAGE_HANDLERS: Record<string, (locale: Locale) => string> = {
  '/': () => homeMarkdown('fi'),
  '/en': () => homeMarkdown('en'),
  '/sv': () => homeMarkdown('sv'),
  '/meista': () => aboutMarkdown('fi'),
  '/about': () => aboutMarkdown('en'),
  '/en/about': () => aboutMarkdown('en'),
  '/sv/om-oss': () => aboutMarkdown('sv'),
  '/yhteystiedot': () => contactMarkdown('fi'),
  '/contact': () => contactMarkdown('en'),
  '/en/contact': () => contactMarkdown('en'),
  '/sv/kontakt': () => contactMarkdown('sv'),
  '/tietosuoja': () => privacyMarkdown('fi'),
  '/privacy': () => privacyMarkdown('en'),
  '/en/privacy': () => privacyMarkdown('en'),
  '/sv/integritet': () => privacyMarkdown('sv'),
  '/hinnoittelu': () => pricingMarkdown('fi'),
  '/en/pricing': () => pricingMarkdown('en'),
  '/sv/prissattning': () => pricingMarkdown('sv'),
  '/ominaisuudet': () => featuresMarkdown('fi'),
  '/en/features': () => featuresMarkdown('en'),
  '/sv/funktioner': () => featuresMarkdown('sv'),
  '/kayttoehdot': () => termsMarkdown('fi'),
  '/en/terms': () => termsMarkdown('en'),
  '/sv/villkor': () => termsMarkdown('sv')
}

export function getMarkdownForPath(pathname: string): string | null {
  const path = normalizePathname(pathname)
  if (PAGE_HANDLERS[path]) {
    return PAGE_HANDLERS[path](getLocaleFromPath(path))
  }
  if (path.startsWith('/posts/')) {
    return getRawMarkdownPost(path)
  }
  return null
}

export function fallbackPageMarkdown(pathname: string): string {
  const path = normalizePathname(pathname)
  return `# ${COMPANY.brandName}

This page exists at ${SITE_ORIGIN}${path}.

${SOFTWARE_DESCRIPTION}

## Where to look next

- [llms.txt](${SITE_ORIGIN}/llms.txt)
- [Agent instructions](${SITE_ORIGIN}/agent-instructions.md)
- [Sitemap](${SITE_ORIGIN}/sitemap-index.xml)
- [Home](${SITE_ORIGIN}/)
`
}

/** Paths that should be left to the static/asset handler (no HTML↔markdown negotiation). */
export function shouldSkipNegotiation(pathname: string): boolean {
  const path = normalizePathname(pathname)
  if (path.startsWith('/api/') || path === '/api') return true
  if (path.startsWith('/_image') || path.startsWith('/_astro')) return true
  return /\.(txt|xml|json|md|png|jpe?g|webp|gif|svg|ico|css|js|mjs|woff2?|map)$/i.test(path)
}
