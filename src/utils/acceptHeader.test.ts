import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { appendVaryAccept, preferredType } from './acceptHeader.ts'

describe('preferredType (acceptmarkdown.com Accept parsing)', () => {
  it('serves markdown when Accept is text/markdown', () => {
    assert.equal(preferredType('text/markdown'), 'text/markdown')
  })

  it('serves markdown when markdown is listed before html', () => {
    assert.equal(preferredType('text/markdown, text/html;q=0.8'), 'text/markdown')
  })

  it('serves html when Accept is text/html', () => {
    assert.equal(preferredType('text/html'), 'text/html')
  })

  it('serves html when markdown is q=0', () => {
    assert.equal(preferredType('text/markdown;q=0, text/html'), 'text/html')
  })

  it('returns 406 (null) when the only offered type is rejected', () => {
    assert.equal(preferredType('text/markdown;q=0'), null)
  })

  it('defaults to html when Accept is missing', () => {
    assert.equal(preferredType(null), 'text/html')
  })

  it('defaults to html for */*', () => {
    assert.equal(preferredType('*/*'), 'text/html')
  })

  it('returns 406 for an unsupported exclusive type', () => {
    assert.equal(preferredType('application/xml'), null)
  })
})

describe('appendVaryAccept', () => {
  it('sets Vary: Accept, Accept-Encoding when missing', () => {
    const headers = new Headers()
    appendVaryAccept(headers)
    assert.equal(headers.get('Vary'), 'Accept, Accept-Encoding')
  })

  it('appends Accept without duplicating an existing token', () => {
    const headers = new Headers({ Vary: 'Accept-Encoding' })
    appendVaryAccept(headers)
    assert.match(headers.get('Vary') || '', /Accept/i)
    assert.match(headers.get('Vary') || '', /Accept-Encoding/i)
    assert.equal((headers.get('Vary') || '').split(',').filter((t) => t.trim().toLowerCase() === 'accept').length, 1)
  })
})
