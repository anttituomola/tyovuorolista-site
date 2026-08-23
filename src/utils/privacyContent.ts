export type PrivacyLocale = 'fi' | 'en' | 'sv'

export type PrivacySection = {
  heading: string
  paragraphs: string[]
}

export type PrivacyPageContent = {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  sections: PrivacySection[]
}

const fi: PrivacyPageContent = {
  metaTitle: 'Tietosuojaseloste | tyovuorolista.fi',
  metaDescription:
    'True Solutions Oy:n tietosuojaseloste Työvuorolista-palvelulle: mitä tietoja keräämme, miksi, missä niitä säilytetään ja mitkä ovat oikeutesi.',
  title: 'Tietosuojaseloste',
  intro:
    'Tämän tietosuojaselosteen antaa True Solutions Oy (Y-tunnus 3431534-2), joka tarjoaa Työvuorolista-palvelun osoitteessa tyovuorolista.fi ja app.tyovuorolista.fi. Rekisterinpitäjä on True Solutions Oy, Juhannuskylänkatu 1 B 6, 33100 Tampere. Yhteydenotot: info@tyovuorolista.fi tai +358 45 679 8818.',
  sections: [
    {
      heading: 'Mitä henkilötietoja keräämme',
      paragraphs: [
        'Keräämme yrityksen nimen, käyttäjän sähköpostiosoitteen ja tarvittaessa puhelinnumeron sekä työntekijöiden nimet ja sähköpostiosoitteet. Keräämme myös työvuorojen tiedot, kuten päivämäärät, kellonajat, tauot ja työntekijöiden nimet, jotta vuorolistat voidaan suunnitella ja julkaista.',
        'Jos otat meihin yhteyttä lomakkeella, sähköpostilla, puhelimella tai WhatsAppilla, käsittelemme yhteydenoton sisällön ja yhteystietosi vastataksemme. Jos käytät sovelluksen AI-tukichatia, keskustelun sisältö tallennetaan tukipalvelua, ongelmien selvittämistä ja palvelun kehittämistä varten. Jos lähetät keskustelun tuelle, sisältö ja mahdollinen kuvakaappaus toimitetaan asiakastukeen sähköpostitse.'
      ]
    },
    {
      heading: 'Miksi käsittelemme tietoja ja millä perusteella',
      paragraphs: [
        'Käsittelemme tietoja palvelun tuottamiseksi (työvuorolistojen suunnittelu, julkaisu sähköpostilla, tuntikirjaus ja palkkaraportit), laskutukseen, asiakastukeen ja palvelun turvalliseen ylläpitoon. Oikeusperuste on sopimuksen täyttäminen sekä oikeutettu etu palvelun kehittämiseen ja tukeen. Maksutiedot käsittelee Stripe; me emme tallenna täydellisiä korttitietoja.'
      ]
    },
    {
      heading: 'Säilytys, suojaus ja luovutukset',
      paragraphs: [
        'Tiedot säilytetään Supabasen tietokannassa, joka on suojattu rivitason turvatoimilla (row-level security). Emme myy henkilötietoja. Tietoja luovutetaan vain palvelun tuottamiseen tarvittaville käsittelijöille (esimerkiksi tietokanta, sähköpostitoimitus ja Stripe-maksut) sekä lain edellyttämissä tilanteissa.',
        'Säilytämme tilin tiedot niin kauan kuin tili on käytössä ja sen jälkeen niin kauan kuin kirjanpito, takuuajat tai oikeudelliset velvoitteet sitä edellyttävät. Evästeitä käytetään kävijämäärien mittaamiseen ja markkinointiin vain suostumuksen jälkeen; välttämättömät evästeet pitävät sivuston toimivana.'
      ]
    },
    {
      heading: 'Oikeutesi',
      paragraphs: [
        'Sinulla on oikeus tarkastaa, korjata ja poistaa omia tietojasi sekä vastustaa käsittelyä lain sallimissa rajoissa. Voit pyytää tietojasi tai tilin poistoa osoitteesta info@tyovuorolista.fi. Voit myös poistaa tilin sovelluksesta. Jos olet tyytymätön, voit tehdä valituksen tietosuojavaltuutetulle (tietosuoja.fi).'
      ]
    }
  ]
}

const en: PrivacyPageContent = {
  metaTitle: 'Privacy policy | tyovuorolista.fi',
  metaDescription:
    'Privacy policy of True Solutions Oy for the Työvuorolista service: what data we collect, why, where it is stored, and your rights.',
  title: 'Privacy policy',
  intro:
    'This privacy policy is issued by True Solutions Oy (Finnish business ID 3431534-2), the company that provides Työvuorolista at tyovuorolista.fi and app.tyovuorolista.fi. The data controller is True Solutions Oy, Juhannuskylänkatu 1 B 6, 33100 Tampere, Finland. Contact: info@tyovuorolista.fi or +358 45 679 8818.',
  sections: [
    {
      heading: 'What personal data we collect',
      paragraphs: [
        'We collect the company name, the user’s email address and, when needed, a phone number, as well as employee names and email addresses. We also collect shift data such as dates, times, breaks and employee names so that schedules can be planned and published.',
        'If you contact us via the form, email, phone or WhatsApp, we process the message content and your contact details to reply. If you use the in-app AI support chat, the conversation is stored to provide support, investigate issues and improve the service. If you send a conversation to support, the content and any screenshot are delivered to customer support by email.'
      ]
    },
    {
      heading: 'Why we process data and on what basis',
      paragraphs: [
        'We process data to provide the service (planning shift lists, publishing by email, hour tracking and payroll reports), for billing, customer support and secure operation. The legal basis is performance of a contract and legitimate interest in support and product improvement. Payment details are processed by Stripe; we do not store full card numbers.'
      ]
    },
    {
      heading: 'Storage, security and sharing',
      paragraphs: [
        'Data is stored in a Supabase database protected with row-level security. We do not sell personal data. We share data only with processors needed to run the service (database, email delivery and Stripe payments) and where the law requires it.',
        'We keep account data while the account is active and afterwards as long as bookkeeping, warranty periods or legal obligations require. Cookies for traffic measurement and marketing load only after consent; essential cookies keep the site working.'
      ]
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'You have the right to access, correct and delete your data and to object to processing where the law allows. Ask for a copy of your data or account deletion at info@tyovuorolista.fi. You can also delete your account in the app. You may lodge a complaint with the Finnish Data Protection Ombudsman (tietosuoja.fi).'
      ]
    }
  ]
}

const sv: PrivacyPageContent = {
  metaTitle: 'Integritetspolicy | tyovuorolista.fi',
  metaDescription:
    'True Solutions Oy:s integritetspolicy för Työvuorolista: vilka uppgifter vi samlar in, varför, var de lagras och vilka rättigheter du har.',
  title: 'Integritetspolicy',
  intro:
    'Denna integritetspolicy ges av True Solutions Oy (FO-nummer 3431534-2), bolaget bakom Työvuorolista på tyovuorolista.fi och app.tyovuorolista.fi. Personuppgiftsansvarig är True Solutions Oy, Juhannuskylänkatu 1 B 6, 33100 Tammerfors, Finland. Kontakt: info@tyovuorolista.fi eller +358 45 679 8818.',
  sections: [
    {
      heading: 'Vilka personuppgifter vi samlar in',
      paragraphs: [
        'Vi samlar in företagsnamn, användarens e-postadress och vid behov telefonnummer samt anställdas namn och e-postadresser. Vi samlar också in skiftdata såsom datum, tider, raster och namn så att scheman kan planeras och publiceras.',
        'Om du kontaktar oss via formulär, e-post, telefon eller WhatsApp behandlar vi meddelandet och dina kontaktuppgifter för att svara. Om du använder AI-supportchatten i appen lagras samtalet för support, felsökning och produktutveckling. Om du skickar samtalet till support levereras innehållet och eventuell skärmdump till kundtjänst via e-post.'
      ]
    },
    {
      heading: 'Varför vi behandlar uppgifter och på vilken grund',
      paragraphs: [
        'Vi behandlar uppgifter för att tillhandahålla tjänsten (planera scheman, publicera via e-post, timregistrering och lönerapporter), för fakturering, kundsupport och säker drift. Rättslig grund är avtalets fullgörande och berättigat intresse av support och produktförbättring. Betalningsuppgifter behandlas av Stripe; vi lagrar inte fullständiga kortnummer.'
      ]
    },
    {
      heading: 'Lagring, skydd och utlämnande',
      paragraphs: [
        'Uppgifterna lagras i en Supabase-databas skyddad med row-level security. Vi säljer inte personuppgifter. Vi lämnar bara ut uppgifter till behandlare som behövs för tjänsten (databas, e-postleverans och Stripe-betalningar) och när lagen kräver det.',
        'Vi behåller kontouppgifter så länge kontot är aktivt och därefter så länge bokföring, garantitider eller rättsliga skyldigheter kräver. Cookies för mätning och marknadsföring laddas först efter samtycke; nödvändiga cookies håller sajten fungerande.'
      ]
    },
    {
      heading: 'Dina rättigheter',
      paragraphs: [
        'Du har rätt att ta del av, rätta och radera dina uppgifter samt invända mot behandling när lagen tillåter. Begär en kopia eller radering via info@tyovuorolista.fi. Du kan också radera kontot i appen. Du kan klaga hos dataombudsmannen i Finland (tietosuoja.fi).'
      ]
    }
  ]
}

const byLocale: Record<PrivacyLocale, PrivacyPageContent> = { fi, en, sv }

export function getPrivacyContent(locale: PrivacyLocale = 'en'): PrivacyPageContent {
  return byLocale[locale] || en
}

export function privacyPlainText(locale: PrivacyLocale = 'en'): string {
  const page = getPrivacyContent(locale)
  const parts = [page.title, page.intro]
  for (const section of page.sections) {
    parts.push(section.heading, ...section.paragraphs)
  }
  return parts.join('\n\n')
}

export function privacyMarkdown(locale: PrivacyLocale = 'en'): string {
  const page = getPrivacyContent(locale)
  const lines = [`# ${page.title}`, '', page.intro, '']
  for (const section of page.sections) {
    lines.push(`## ${section.heading}`, '', ...section.paragraphs.map((p) => `${p}\n`))
  }
  return lines.join('\n').trim() + '\n'
}
