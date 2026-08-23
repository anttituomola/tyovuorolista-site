import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { COMPANY } from './company.ts'
import { buildOrganizationJsonLd, buildSoftwareApplicationJsonLd, buildWebSiteJsonLd } from './jsonLd.ts'

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

describe('WebSite JSON-LD', () => {
  it('names the product, with the company only as publisher', () => {
    const site = buildWebSiteJsonLd()
    assert.equal(site['@type'], 'WebSite')
    assert.equal(site.name, COMPANY.brandName)
    assert.ok(!JSON.stringify(site.alternateName).includes(COMPANY.legalName))
    assert.equal((site.publisher as Record<string, string>).name, COMPANY.legalName)
  })
})
