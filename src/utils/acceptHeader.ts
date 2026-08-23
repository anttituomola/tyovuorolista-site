/**
 * Accept: text/markdown negotiation helpers.
 * Parser follows acceptmarkdown.com / RFC 9110 §12.5.1 (q-values, specificity, q=0).
 */
export const PRODUCES = ['text/html', 'text/markdown'] as const

export type ProducedType = (typeof PRODUCES)[number]

type AcceptEntry = { type: string; q: number; specificity: number }

export function parseAccept(header: string): AcceptEntry[] {
  return header.split(',').map((raw) => {
    const parts = raw
      .trim()
      .split(';')
      .map((s) => s.trim())
    const type = (parts[0] || '').toLowerCase()
    let q = 1
    for (const param of parts.slice(1)) {
      const [name, value] = param.split('=').map((s) => s.trim())
      if (name === 'q') {
        const parsed = Number(value)
        if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed))
      }
    }
    const specificity = type === '*/*' ? 0 : type.endsWith('/*') ? 1 : 2
    return { type, q, specificity }
  })
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === '*/*') return true
  if (entry.type.endsWith('/*')) return candidate.startsWith(entry.type.slice(0, -1))
  return entry.type === candidate
}

/** Best type we can produce, or null → 406 Not Acceptable. Missing Accept → HTML. */
export function preferredType(header: string | null): ProducedType | null {
  if (!header) return PRODUCES[0]
  const entries = parseAccept(header)
  if (entries.length === 0) return PRODUCES[0]

  let best: ProducedType | null = null
  let bestQ = -1
  let bestPosition = Infinity

  for (const candidate of PRODUCES) {
    let matched: AcceptEntry | null = null
    let matchedPosition = Infinity
    for (let idx = 0; idx < entries.length; idx++) {
      const e = entries[idx]
      if (!matches(e, candidate)) continue
      if (
        matched === null ||
        e.specificity > matched.specificity ||
        (e.specificity === matched.specificity && idx < matchedPosition)
      ) {
        matched = e
        matchedPosition = idx
      }
    }
    if (matched === null) continue
    if (matched.q <= 0) continue

    if (matched.q > bestQ || (matched.q === bestQ && matchedPosition < bestPosition)) {
      bestQ = matched.q
      bestPosition = matchedPosition
      best = candidate
    }
  }

  return best
}

export function appendVaryAccept(headers: Headers): void {
  const existing = headers.get('Vary')
  if (!existing) {
    headers.set('Vary', 'Accept, Accept-Encoding')
    return
  }
  const tokens = existing.split(',').map((s) => s.trim().toLowerCase())
  const additions: string[] = []
  if (!tokens.includes('accept')) additions.push('Accept')
  if (!tokens.includes('accept-encoding')) additions.push('Accept-Encoding')
  if (additions.length > 0) {
    headers.set('Vary', `${existing}, ${additions.join(', ')}`)
  }
}

export const MARKDOWN_CONTENT_TYPE = 'text/markdown; charset=utf-8'
export const VARY_ACCEPT = 'Accept, Accept-Encoding'
