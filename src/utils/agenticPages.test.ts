import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import en from '../i18n/en.json' with { type: 'json' }
import { privacyPlainText } from './privacyContent.ts'
import { getMarkdownForPath, getNotFoundMarkdown } from './siteMarkdown.ts'
import { getLocaleFromPath } from './translations.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')

describe('agent-friendly 404 markdown', () => {
  const body = getNotFoundMarkdown()

  it('is markdown with recovery links', () => {
    assert.match(body, /^# /)
    assert.match(body, /sitemap-index\.xml/)
    assert.match(body, /llms\.txt/)
    assert.match(body, /agent-instructions\.md/)
    assert.match(body, /\/about/)
    assert.match(body, /\/contact/)
    assert.match(body, /\/privacy/)
  })
})

describe('markdown content negotiation bodies', () => {
  it('serves a homepage markdown document', () => {
    const home = getMarkdownForPath('/')
    assert.ok(home)
    assert.match(home, /^# /)
    assert.match(home, /Työvuorolista/)
    assert.match(home, /llms\.txt/)
  })

  it('serves markdown for about, contact and privacy', () => {
    for (const path of ['/about', '/en/about', '/contact', '/privacy', '/en/privacy']) {
      const md = getMarkdownForPath(path)
      assert.ok(md && md.length >= 500, `${path} markdown should be at least 500 characters`)
    }
  })
})

describe('trust anchor page copy', () => {
  it('has 500+ characters on About (en)', () => {
    const about = en.pages.about
    const text = [about.company, ...about.people.flatMap((p) => p.paragraphs)].join('\n')
    assert.ok(text.length >= 500, `about text was ${text.length} chars`)
  })

  it('has 500+ characters on Privacy (en/fi/sv)', () => {
    for (const locale of ['en', 'fi', 'sv'] as const) {
      const text = privacyPlainText(locale)
      assert.ok(text.length >= 500, `${locale} privacy was ${text.length} chars`)
    }
  })
})

describe('agent instruction / when-to-use', () => {
  it('adds when-to-use guidance to llms.txt', () => {
    const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8')
    assert.match(llms, /^# /)
    assert.match(llms, /When to use this/i)
    assert.match(llms, /app\.tyovuorolista\.fi/)
    assert.match(llms, /agent-instructions\.md/)
  })

  it('publishes /agent-instructions.md with when-to-use, navigation and escalation', () => {
    const instructions = readFileSync(join(root, 'public/agent-instructions.md'), 'utf8')
    assert.match(instructions, /When to use this/i)
    assert.match(instructions, /Navigation guide/i)
    assert.match(instructions, /Escalation path/i)
    assert.match(instructions, /info@tyovuorolista\.fi/)
    assert.ok(instructions.length >= 500)
  })
})

describe('English root trust paths', () => {
  it('treats /about, /contact and /privacy as English', () => {
    assert.equal(getLocaleFromPath('/about'), 'en')
    assert.equal(getLocaleFromPath('/contact'), 'en')
    assert.equal(getLocaleFromPath('/privacy'), 'en')
    assert.equal(getLocaleFromPath('/meista'), 'fi')
  })
})
