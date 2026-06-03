export type FeatureCategory = 'planning' | 'publishing' | 'reporting' | 'teams'

export type FeatureItem = {
  id: string
  category: FeatureCategory
  blogSlug: string
  highlight?: boolean
}

export type ResourceType = 'tool' | 'template' | 'guide' | 'reference'

export type ResourceSection = 'templates' | 'guides' | 'reference'

export type ResourceItem = {
  id: string
  section: ResourceSection
  type: ResourceType
  href?: string
  blogSlug?: string
}

export const features: FeatureItem[] = [
  {
    id: 'recurring-shifts',
    category: 'planning',
    blogSlug: '/posts/toistuvat_tyovuorot',
    highlight: true,
  },
  {
    id: 'templates',
    category: 'planning',
    blogSlug: '/posts/templates_eli_mallinteiden_kaytto_tyovuorolista_pohjana',
    highlight: true,
  },
  {
    id: 'multi-select',
    category: 'planning',
    blogSlug: '/posts/monivalinta_vuorot',
    highlight: true,
  },
  {
    id: 'resource-scheduling',
    category: 'planning',
    blogSlug: '/posts/resurssien_aikataulutus_ominaisuus',
    highlight: true,
  },
  {
    id: 'day-notes',
    category: 'planning',
    blogSlug: '/posts/tyovuorolistan_paivakohtaiset_muistiinpanot_eli_koko_paivan_tapahtumat',
  },
  {
    id: 'email-publish',
    category: 'publishing',
    blogSlug: '/posts/tyovuorolistojen_julkaisu_ja_lahettaminen_tyontekijoille',
    highlight: true,
  },
  {
    id: 'email-preview',
    category: 'publishing',
    blogSlug: '/posts/sahkopostin_esikatselutoiminto_tyovuorolistojen_lahettamisessa',
  },
  {
    id: 'personal-print',
    category: 'publishing',
    blogSlug: '/posts/henkilokohtaisten_tyovuorolistojen_tulostus',
  },
  {
    id: 'vacation-planning',
    category: 'planning',
    blogSlug: '/posts/lomasuunnittelu',
    highlight: true,
  },
  {
    id: 'hours-recording',
    category: 'reporting',
    blogSlug: '/posts/tuntien_kirjaus_opas',
    highlight: true,
  },
  {
    id: 'payroll-report',
    category: 'reporting',
    blogSlug: '/posts/palkkaraportti_ominaisuus',
    highlight: true,
  },
  {
    id: 'teams',
    category: 'teams',
    blogSlug: '/posts/tiimit_eli_osastot_monen_eri_tiimin_tyovuorosuunnittelu',
    highlight: true,
  },
  {
    id: 'mobile-manager',
    category: 'planning',
    blogSlug: '/posts/tyovuorolista_sovellus_nyt_kaytettavissa_mobiililaitteilla',
    highlight: true,
  },
]

export const resources: ResourceItem[] = [
  {
    id: 'pohja-tool',
    section: 'templates',
    type: 'tool',
    href: '/pohja',
  },
  {
    id: 'pohja-printable',
    section: 'templates',
    type: 'template',
    blogSlug: '/posts/tyovuorolista-pohja-tulostettava',
  },
  {
    id: 'pohja-oo',
    section: 'templates',
    type: 'template',
    blogSlug: '/posts/tyovuorolista_pohja',
  },
  {
    id: 'pohja-pdf',
    section: 'templates',
    type: 'template',
    blogSlug: '/posts/tyovuorolista_pohja_pdf',
  },
  {
    id: 'getting-started',
    section: 'guides',
    type: 'guide',
    blogSlug: '/posts/nain_paaset_alkuun_tyovuorolistassa',
  },
  {
    id: 'hours-guide',
    section: 'guides',
    type: 'guide',
    blogSlug: '/posts/tuntien_kirjaus_opas',
  },
  {
    id: 'scheduling-software',
    section: 'guides',
    type: 'guide',
    blogSlug: '/posts/työvuorosuunnittelu_ohjelma',
  },
  {
    id: 'min-shift-length',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/tyovuoron_minimipituus_ravintola-alalla',
  },
  {
    id: 'max-shift-length',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/tyovuoron_maksimipituus_ravintola-alalla',
  },
  {
    id: 'longest-workday',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/pisin_sallittu_tyopaiva_ravintola-alalla',
  },
  {
    id: 'break-between-shifts',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/kuinka_pitka_tauko_tyovuorojen_valilla',
  },
  {
    id: 'shift-abbreviations',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/tyovuorolista_lyhenteet',
  },
  {
    id: 'v-day-meaning',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/mita_tarkoittaa_v-paiva_tyovuorolistassa',
  },
  {
    id: 'x-v-marking',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/x_ja_v-paivien_merkkaus_tyovuorolistaan',
  },
  {
    id: 'annual-leave-marking',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/vuosiloman_merkkaaminen_tyovuorolistaan',
  },
  {
    id: 'tracked-missing-hours',
    section: 'reference',
    type: 'reference',
    blogSlug: '/posts/merkattujen_ja_puuttuvien_tyotuntien_laskeminen',
  },
]

export const featureCategories: FeatureCategory[] = [
  'planning',
  'publishing',
  'reporting',
  'teams',
]

export const resourceSections: ResourceSection[] = [
  'templates',
  'guides',
  'reference',
]

export function getHighlightedFeatures() {
  return features.filter((f) => f.highlight)
}

/** Screenshots for resource hub cards (paths match blog post `image.url`). */
export const resourceImages: Record<string, string> = {
  'pohja-tool': '/blogPostImages/pohja-tulostettava/pohja-esimerkki.png',
  'pohja-printable': '/blogPostImages/pohja-tulostettava/pohja-esimerkki.png',
  'pohja-oo': '/blogPostImages/tyovuorolista_pohja.png',
  'pohja-pdf': '/blogPostImages/tyovuorolista_pohja_pdf/publish-view.png',
  'getting-started': '/blogPostImages/aloitus_opas/aloitus-checklist.png',
  'hours-guide': '/blogPostImages/tuntien_kirjaus_opas/yleiskuva.png',
  'scheduling-software': '/blogPostImages/tyovuorolista_hero.png',
  'min-shift-length': '/blogPostImages/tyovuoron_minimipituus_4h-min.png',
  'max-shift-length': '/blogPostImages/tyovuoron_minimipituus_4h-min.png',
  'longest-workday': '/blogPostImages/tyovuorolista-varoitukset.png',
  'break-between-shifts': '/blogPostImages/tyovuoron_minimipituus_4h-min.png',
  'shift-abbreviations': '/blogPostImages/tyovuorolista_lyhenteet.png',
  'v-day-meaning': '/blogPostImages/v-vuoro-tyovuorolistassa.png',
  'x-v-marking': '/blogPostImages/x_ja_v_paivien_merkkaaminen_tyovuorolistaan.png',
  'annual-leave-marking': '/blogPostImages/vuosiloma_tyovuorolista.png',
  'tracked-missing-hours': '/blogPostImages/tuntilaskuri.png',
}

/** Iconify names (@iconify-json/ic) — used on feature cards */
export const featureIcons: Record<string, string> = {
  'recurring-shifts': 'ic:baseline-autorenew',
  templates: 'ic:baseline-layers',
  'multi-select': 'ic:baseline-check-box',
  'resource-scheduling': 'ic:baseline-category',
  'day-notes': 'ic:baseline-event-note',
  'email-publish': 'ic:baseline-send',
  'email-preview': 'ic:baseline-preview',
  'personal-print': 'ic:baseline-print',
  'vacation-planning': 'ic:baseline-wb-sunny',
  'hours-recording': 'ic:baseline-schedule',
  'payroll-report': 'ic:baseline-bar-chart',
  teams: 'ic:baseline-groups',
  'mobile-manager': 'ic:baseline-smartphone',
}
