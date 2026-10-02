import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { COMPANY } from './company.ts'
import fi from '../i18n/fi.json' with { type: 'json' }
import {
  buildFaqPageJsonLd,
  buildOrganizationJsonLd,
  buildSoftwareApplicationJsonLd,
  buildWebSiteJsonLd
} from './jsonLd.ts'

describe('Organization JSON-LD', () => {
  const org = buildOrganizationJsonLd('https://www.tyovuorolista.fi', 'https://www.tyovuorolista.fi/logo.png')

  it('includes name and description', () => {
    assert.equal(org['@type'], 'Organization')
    assert.equal(org.name, COMPANY.legalName)
    assert.equal(typeof org.description, 'string')
    assert.ok(String(org.description).length > 40)
    assert.equal(org.url, 'https://www.tyovuorolista.fi')
  })

  it('includes contactPoint with email, phone and contactType', () => {
    const points = org.contactPoint as Array<Record<string, string>>
    assert.ok(Array.isArray(points) && points.length >= 1)
    assert.ok(points.some((p) => p.email && p.telephone && p.contactType))
  })

  it('includes PostalAddress', () => {
    const address = org.address as Record<string, string>
    assert.equal(address['@type'], 'PostalAddress')
    assert.equal(address.streetAddress, COMPANY.streetAddress)
    assert.equal(address.addressLocality, COMPANY.addressLocality)
    assert.equal(address.postalCode, COMPANY.postalCode)
    assert.equal(address.addressCountry, COMPANY.addressCountry)
  })
})

describe('SoftwareApplication JSON-LD', () => {
  it('includes name, description, url and offers', () => {
    const app = buildSoftwareApplicationJsonLd()
    assert.equal(app['@type'], 'SoftwareApplication')
    assert.equal(app.name, COMPANY.brandName)
    assert.ok(String(app.description).length > 40)
    assert.equal(app.url, 'https://app.tyovuorolista.fi')
    assert.equal((app.offers as Record<string, string>)['@type'], 'AggregateOffer')
  })
})

describe('FAQPage JSON-LD', () => {
  const faq = buildFaqPageJsonLd(fi.faq)
  const entity = faq.mainEntity as Array<{
    '@type': string
    name: string
    acceptedAnswer: { '@type': string; text: string }
  }>

  it('has one Question per translated FAQ entry', () => {
    assert.equal(faq['@type'], 'FAQPage')
    assert.equal(entity.length, Object.keys(fi.faq.questions).length)
    for (const q of entity) {
      assert.equal(q['@type'], 'Question')
      assert.ok(q.name.length > 5)
      assert.equal(q.acceptedAnswer['@type'], 'Answer')
      assert.ok(q.acceptedAnswer.text.length > 20)
      assert.ok(!q.acceptedAnswer.text.includes('undefined'))
    }
  })

  it('folds price tiers and comparison points into the answer text', () => {
    const cost = entity.find((q) => q.name === fi.faq.questions.cost.question)
    assert.ok(cost?.acceptedAnswer.text.includes(fi.faq.questions.cost.tiers[0]))
    assert.ok(cost?.acceptedAnswer.text.includes(fi.faq.questions.cost.vat))
    const diff = entity.find((q) => q.name === fi.faq.questions.difference.question)
    assert.ok(diff?.acceptedAnswer.text.includes(fi.faq.questions.difference.points[0]))
  })

  it('skips entries without a string question and answer', () => {
    const faqWithGap = buildFaqPageJsonLd({
      questions: { ok: { question: 'Kysymys?', answer: 'Vastaus.' }, broken: { question: 'X?' } as never }
    })
    assert.equal((faqWithGap.mainEntity as unknown[]).length, 1)
  })
})

describe('WebSite JSON-LD', () => {
  it('names the product, with the company only as publisher', () => {
    const site = buildWebSiteJsonLd()
    assert.equal(site['@type'], 'WebSite')
    assert.equal(site.name, COMPANY.brandName)
    assert.ok(!JSON.stringify(site.alternateName).includes(COMPANY.legalName))
    assert.equal((site.publisher as Record<string, string>).name, COMPANY.legalName)
  })
})
