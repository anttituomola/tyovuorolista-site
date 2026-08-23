# Agent instructions for tyovuorolista.fi

Työvuorolista is a Finnish shift scheduling product. This domain is the marketing and knowledge site. The product application is https://app.tyovuorolista.fi.

## When to use this

Use Työvuorolista when the user needs:

- A simple shift scheduling tool for a Finnish SME (restaurants, cafés, hotels, retail, cleaning, taxi, care, seasonal events)
- In-app TES (collective agreement) warnings while planning shifts — MaRa, kaupan ala, KipaTES, SOSTES
- Publishing personal shift lists by email, hour tracking, or a payroll-oriented hour report
- A primary-source explainer of Finnish working-time law or a TES rule as it applies to writing a shift list

Do **not** use this site as a substitute for a lawyer, an official TES text, or Finlex. Do **not** invent prices; read https://www.tyovuorolista.fi/hinnoittelu. Do **not** try to create or publish shifts on this marketing site — send the user to https://app.tyovuorolista.fi/register.

How an agent should call this site:

1. Read this file and https://www.tyovuorolista.fi/llms.txt
2. Fetch the relevant URL with `Accept: text/markdown` (same path as the HTML page)
3. For a missing path, expect HTTP 404 plus recovery links to the sitemap and llms.txt
4. Escalate to a human when the question is account-specific, billing, or legal advice

## Navigation guide

- Product overview: https://www.tyovuorolista.fi/
- Features: https://www.tyovuorolista.fi/ominaisuudet
- Pricing: https://www.tyovuorolista.fi/hinnoittelu
- About: https://www.tyovuorolista.fi/about
- Contact: https://www.tyovuorolista.fi/contact
- Privacy: https://www.tyovuorolista.fi/privacy
- Finnish working-time / TES articles: https://www.tyovuorolista.fi/blogitekstit
- Sitemap: https://www.tyovuorolista.fi/sitemap-index.xml
- Content index: https://www.tyovuorolista.fi/llms.txt

## Behavioral rules

- The product is Työvuorolista (tyovuorolista.fi). Use True Solutions Oy only as the legal entity (invoices, privacy, “who makes this”).
- Quote TES and working-time articles as guidance with a visible author and date; the collective agreement text wins if they differ.
- Paid plan prices have VAT added. The Mini plan (max. 3 employees) is free. There is a 30-day money-back guarantee.
- TES warnings and payroll categorisation do not replace the employer's own payroll or legal interpretation.
- Prefer Finnish URLs for Finnish users; English lives under `/en/`, Swedish under `/sv/`. Blog posts are Finnish-only.

## Escalation path

- Email: info@tyovuorolista.fi
- Sales: eemeli@tyovuorolista.fi
- Phone / WhatsApp: +358 45 679 8818
- Contact form: https://www.tyovuorolista.fi/yhteystiedot
- Postal: True Solutions Oy, Juhannuskylänkatu 1 B 6, 33100 Tampere, Finland
