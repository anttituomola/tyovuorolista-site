# TES-apuri as the marketing highpoint — site update plan

Written 2026-08-07. TES-apuri (beta) is live in production for every venue
(app-side launch done; in-app announcement sent). This plan makes free TES
the site's headline differentiator — the sisäänheitto-ominaisuus — per
`docs/GROWTH_PLAN_2026-07.md` Pillar 2 in the app repo.

**The claim we own:** every Finnish competitor sells TES interpretation
behind sales calls and implementation projects; we include it in every
plan, even the free one, self-serve. Nobody else can say this.

**Decisions (Antti, 2026-08-07):** index gets a hero badge + dedicated TES
section (headline stays universal); Kaupan ala + hoiva segment pages get
CREATED (4 presets, but pages existed for only 2); one TES demo video +
reusable screenshots (no per-segment videos).

**Copy rules (apply everywhere):**
- Always "TES-apuri (beta)" on first mention; beta is a feature promise
  ("kerro eroista, korjaamme"), not an apology.
- Market as *TES-tuki/varoitukset*, never a compliance guarantee — claims
  must stay consistent with the käyttöehdot disclaimer ("neuvoa-antavat…
  eivät korvaa työehtosopimuksen omaa tulkintaa").
- Brand is **Tyovuorolista.fi** (ASCII — työvuorolista.fi is HRSuunti's).
- esihenkilö, never esimies.
- The free/paid boundary, stated the same way everywhere: varoitukset,
  saldonäkymät ja vuosivapaaseuranta kaikissa paketeissa (myös Mini);
  palkkaraportti TES-luokitteluineen maksullisissa.

---

## 1. Asset shot list (Antti films today)

**Video — one, 30–60 s, for the index TES section.** Follow the existing
pattern (`public/blogPostImages/tyovuorolista-demo.webm`: webm + poster
png, `<video controls preload="metadata">`). Suggested flow, MaRa venue:

1. TES-asetukset: valitse MaRa (näytä että valikossa on 4 TESiä) — ~10 s
2. Kalenteri: suunnittele vuoro joka rikkoo lepoaikaa → varoitusbadge
   ilmestyy → avaa selitys paneelista — ~20 s
3. Työntekijäkortti/palkkaraportti: lisät ja ylityöt valmiiksi riveinä — ~15 s

Save as `public/blogPostImages/tes-apuri-demo.webm` + poster
`tes-apuri-demo-poster.png`. Target < 5 MB (the current demo video sets
the precedent). Also export an mp4 if easy — Safari fallback.

**Screenshots** (marketing-quality, ~1200 px wide, png, into
`public/featureImages/tes/`):

| # | Shot | Used on |
|---|---|---|
| 1 | Kalenteri TES-varoituksella (MaRa) | index TES section fallback, ravintolat, hotellit, tapahtumat |
| 2 | TES-asetukset: 4 sopimuksen valikko | tes-apuri feature page, index |
| 3 | CompliancePanel auki (law/tes/info-löydökset) | tes-apuri feature page |
| 4 | Palkkaraportti TES-riveillä | tes-apuri, hinnoittelu context |
| 5 | Kaupan venue: arkipyhäviikon varoitus tai tasoittumissaldo | uusi kauppa-sivu |
| 6 | SOSTES jaksotyö: jaksosaldo + ylityöerittely | uusi hoiva-sivu |
| 7 | Kipa venue: viikkoylityö/lauantailisä | siivous-ja-kiinteistopalvelut |

Existing blog screenshots (`blogPostImages/tes-tuki/`, `kaupan-tes/`,
`sostes-tes/`) can stand in wherever a new shot isn't ready — don't block
pages on assets.

## 2. Index page (~half day)

1. **Hero badge** (`src/components/mainPage/Hero.astro` + i18n
   `fi/en/sv.json`): eyebrow line above or under the subtitle, linked to
   `/ominaisuudet/tes-apuri`.
   - fi: `Ainoana Suomessa: TES-apuri kaikissa paketeissa – myös ilmaisessa`
   - en: `Built-in Finnish collective agreement (TES) checks — in every plan`
   - sv: `Inbyggt kollektivavtalsstöd (TES) — i alla paket`
2. **New `TesHighlight.astro` section** (new component in
   `src/components/mainPage/`, placed right after `<FeatureHighlights />`
   in `index.astro`): the demo video, three bullets (varoitukset
   suunnitellessa · tunnit valmiiksi palkkakategorioihin · MaRa, Kaupan
   ala, KipaTES ja SOSTES), the free/paid boundary sentence, beta note,
   CTA → register + secondary link → feature page. i18n-driven; fi gets
   full copy, en/sv the same structure with shorter text.
3. **FeatureHighlights**: TES-apuri card to position 1 with the existing
   `betaBadge` ("Uusi") treatment.
4. **Faq.astro / i18n**: add 2 entries — "Mitä TES-apuri maksaa?"
   (sisältyy kaikkiin paketteihin, myös ilmaiseen) and "Mitkä
   työehtosopimukset ovat tuettuina?" (4 TESiä + toivelista-osoite).
5. **Meta description** (fi): work "ilmainen TES-apuri" in.

## 3. Existing segment pages (5 × ~30 min, fi versions)

Shared pattern per page: one TES paragraph + screenshot after
"Avainominaisuudet", one bullet added to the key-features list, meta/og
description updated. Segment-correct TES only — never promise a preset
that doesn't exist:

| Page | TES angle |
|---|---|
| `ravintolat-ja-kahvilat.astro` | MaRa: lepoajat, jaksotunnit, VV-saldo, kahdennetut su-lisät. Link `posts/tes_tuki_tyovuorosuunnittelussa` + MaRa cluster |
| `hotellit-ja-majatalot.astro` | MaRa, hotel wording (yövuorot, vastaanotto 24/7) |
| `siivous-ja-kiinteistopalvelut.astro` | KipaTES: viikkoylityö, nimetyt lauantait, jaksotilitys. Link KIPA cluster (julkaistaan 9.–13.8. — linkitä vasta kun postit ovat ulkona) |
| `tapahtumat-ja-sesonkityo.astro` | MaRa + **tasoittumisjärjestelmä** (sesonkiyrityksen paras TES-koukku: pitkät kesäviikot tasoittuvat). Link `posts/tasoittumisjarjestelma_ravintola-alalla` |
| `taksiyritykset-ja-kuljetus.astro` | **Ei TES-lupausta** (kuljetusalan sopimuksille ei ole presettiä). Angle: työaikalain rajat valvottuina (lepoajat, 30 § julkaisusääntö) + "TES-valikoima laajenee — kerro tarpeestasi" |

en/sv segment variants: one added feature bullet only ("Finnish TES
compliance warnings included in every plan" / sv equivalent), no full
section.

## 4. New segment pages (2 × ~half day, fi first)

Follow the existing segment-page pattern (hero + video/screenshot +
problem/solution + key features + testimonial-or-quote + pricing + CTA).

1. **Kaupan ala** — `src/pages/kaupan-ala.astro`
   (H1: "Myymälän työvuorolistat ja Kaupan alan TES").
   Content hooks: arkipyhäjärjestelmä vai vuosivapaa, su/aattolisät,
   osa-aikaisten lisätyö, tasoittumisjakso. Screenshot #5. Link the 5
   Kaupan posts. SEO targets: "kaupan alan työvuorosuunnittelu",
   "myymälän työvuorolista".
2. **Hoiva-ala** — `src/pages/hoivakodit-ja-palveluasuminen.astro`
   (H1: "Hoivakodin työvuorolistat ja SOSTES jaksotyö").
   Content hooks: jaksotyön ylityöt, 3/6 vk listat, vapaapäivä- ja
   viikkoleposäännöt, yövuorot. Screenshot #6. Link the SOSTES cluster.
   **NOTE:** do NOT target päiväkodit on this page — the SOSTES 2026–2028
   round removed the varhaiskasvatus liite; daycares follow the new
   Vaka-TES which has no preset yet (app repo
   `docs/VAKA_TES_SELVITYS_2026-08.md`).
3. Both pages: add to wherever segment pages are cross-linked (footer /
   nav / other segment pages' link lists — grep for
   `ravintolat-ja-kahvilat` to find every listing spot). Sitemap picks
   them up automatically. en/sv versions: thin translations in the same
   PR only if the Layout's hreflang expects them; otherwise fast-follow.

## 5. Other touchpoints (~1–2 h)

1. **hinnoittelu.astro / pricing i18n**: add TES-apuri (beta) to the
   feature lists of ALL tiers including Mini — it's the only feature the
   free tier shares with paid, that's the whole sisäänheitto point. FAQ
   entry on the pricing page too.
2. **ominaisuudet.astro** listing: TES-apuri card first + Uusi badge.
3. **`/ominaisuudet/tes-apuri.astro`**: embed the new demo video, swap in
   screenshots #2–4, keep betaNote.
4. Blog cross-links already done (launch commit) — no action.

## 6. Follow-ups outside this repo (noted, not in scope)

- Google Ads (app repo `docs/GOOGLE_ADS_PLAN.md`): add RSA headlines
  "TES-apuri kaikissa paketeissa" / "Ilmainen TES-tulkinta" to ad groups
  1–2, and a TES sitelink → `/ominaisuudet/tes-apuri`.
- The January pricing page redesign must keep the TES-in-every-tier row.

## 7. Order of work

1. **Today:** film the video + screenshots (§1 shot list).
2. Index badge + TesHighlight + FAQ (§2).
3. hinnoittelu + ominaisuudet listing (§5) — small, ships with §2.
4. Five existing segment pages (§3).
5. Kauppa page, then hoiva page (§4) — kauppa first (larger market,
   content cluster already fully live).
6. en/sv light mentions last.

Everything ships as normal PRs; no coordination with the app repo needed.
