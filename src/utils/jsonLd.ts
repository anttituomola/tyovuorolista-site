import {
  APP_ORIGIN,
  COMPANY,
  ORGANIZATION_DESCRIPTION,
  SITE_ORIGIN,
  SOFTWARE_DESCRIPTION
} from './company.ts'

export type JsonLd = Record<string, unknown>

export function buildOrganizationJsonLd(siteUrl = SITE_ORIGIN, logoUrl?: string): JsonLd {
  const organization: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: COMPANY.legalName,
    legalName: COMPANY.legalName,
    alternateName: [COMPANY.brandName, ...COMPANY.alternateNames],
    description: ORGANIZATION_DESCRIPTION,
    url: siteUrl,
    email: COMPANY.email,
    telephone: COMPANY.telephone,
    vatID: COMPANY.businessId,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Finnish business ID',
      value: COMPANY.businessId
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: COMPANY.email,
        telephone: COMPANY.telephone,
        availableLanguage: ['Finnish', 'English', 'Swedish']
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: COMPANY.salesEmail,
        telephone: COMPANY.telephone,
        availableLanguage: ['Finnish', 'English', 'Swedish']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.addressLocality,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.addressCountry
    },
    sameAs: [...COMPANY.sameAs]
  }

  if (logoUrl) {
    organization.logo = {
      '@type': 'ImageObject',
      url: logoUrl
    }
  }

  return organization
}

export function buildSoftwareApplicationJsonLd(siteUrl = SITE_ORIGIN): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: COMPANY.brandName,
    alternateName: ['tyovuorolista.fi', 'Tyovuorolista'],
    description: SOFTWARE_DESCRIPTION,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: APP_ORIGIN,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '0',
      highPrice: '60',
      url: `${siteUrl}/hinnoittelu`
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: COMPANY.legalName,
      url: siteUrl
    }
  }
}

type FaqQuestionCopy = {
  question: string
  answer: string
  tiers?: readonly string[]
  yearlyNote?: string
  vat?: string
  points?: readonly string[]
}

export type FaqCopy = { questions: Record<string, FaqQuestionCopy> }

const sentenceList = (items?: readonly string[]) =>
  items && items.length > 0 ? `${items.join('; ')}.` : undefined

/**
 * FAQPage node for the homepage FAQ. Built from the same translation object the
 * visible section renders, so the markup and the schema cannot drift apart.
 */
export function buildFaqPageJsonLd(faq: FaqCopy): JsonLd {
  const mainEntity = Object.values(faq?.questions ?? {})
    .filter((q) => typeof q?.question === 'string' && typeof q?.answer === 'string')
    .map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: [q.answer, sentenceList(q.tiers), q.yearlyNote, q.vat, ...(q.points ?? [])]
          .filter((part): part is string => typeof part === 'string' && part.trim().length > 0)
          .join(' ')
      }
    }))

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity
  }
}

export function buildWebSiteJsonLd(siteUrl = SITE_ORIGIN): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.brandName,
    alternateName: [...COMPANY.alternateNames],
    description: SOFTWARE_DESCRIPTION,
    url: siteUrl,
    inLanguage: ['fi', 'en', 'sv'],
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: COMPANY.legalName
    }
  }
}
