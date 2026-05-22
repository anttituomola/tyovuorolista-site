---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Työntekijöiden hallinta: lisääminen, muokkaus ja poisto'
pubDate: 2026-05-22
description: 'Opas työntekijöiden lisäämiseen, tietojen muokkaamiseen ja pysyvään poistoon – sekä mitä tapahtuu julkaistuille ja julkaisemattomille vuoroille.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tyontekijoiden_hallinta/yleiskuva.png'
    alt: 'Työntekijät-sivu työntekijälistauksella.'
tags: ["työntekijät", "hallinta", "onboarding", "työsopimus"]
---

Työntekijät ovat työvuorosuunnittelun perusta. Tässä oppaassa käymme läpi, miten lisäät uuden työntekijän, muokkaat hänen tietojaan ja poistat työntekijän pysyvästi – sekä mitä nämä toimet tarkoittavat julkaistuille ja julkaisemattomille työvuoroille.

## Työntekijät-sivu

Siirry **Hallinta → Työntekijät** -valikkoon. Näet kaikki aktiiviset työntekijät taulukossa tiimeineen.

<img src="/blogPostImages/tyontekijoiden_hallinta/yleiskuva.png" alt="Hallinta → Työntekijät -sivu" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Paina **Lisää työntekijä** -painiketta uuden henkilön luomiseen tai klikkaa työntekijän riviä avataksesi hänen tietonsa.

## Uuden työntekijän lisääminen

Lisää työntekijä -modaalissa täytät vähintään etu- ja sukunimen. Muut kentät ovat valinnaisia mutta suositeltavia:

| Kenttä | Miksi se kannattaa täyttää |
|--------|---------------------------|
| **Sähköposti** | Työvuorolistojen lähetys sähköpostilla ([lue lisää](/posts/tyontekijan_lisaaminen_ilman_sahkopostiosoitetta)) |
| **Työtunnit työsopimuksessa** | Tavoitetuntien laskenta kalenterissa ja [Tuntien kirjaus](/posts/tuntien_kirjaus_opas) -näkymässä |
| **Oletustyövuoron pituus** | Uusien vuorojen oletuspituus; jätä tyhjäksi käyttääksesi tiimin oletusta |
| **Väri** | Erottaa työntekijän kalenterissa muista |

Uusi työntekijä liitetään automaattisesti **valittuun tiimiin**. Jos työntekijä työskentelee useassa tiimissä, lisää hänet muihin tiimeihin **Hallinta → Tiimit** -sivulta ([tiimit ja saman työntekijän käyttö eri tiimeissä](/posts/tiimit_ja_tyotekijoiden_kaytto_eri_tiimeissa)).

<img src="/blogPostImages/tyontekijoiden_hallinta/lisaa_tyontekija_modaali.png" alt="Lisää työntekijä -modaali" width="100%" style="max-width: 600px; display: block; margin: 20px auto;" />

## Työntekijän tietojen muokkaus

Klikkaa työntekijän riviä **Työntekijät**- tai **Suunnittele**-näkymässä. Modaalissa paina **Muokkaa** ja päivitä tarvittavat tiedot.

Tärkeimmät kentät päivittäessä:

- **Sähköposti** – tarvitaan henkilökohtaisten työvuorolistojen lähettämiseen
- **Työtunnit työsopimuksessa** – täysaikaisilla tyypillisesti 150 h/kk ([tavoitetuntien laskenta](/posts/merkattujen_ja_puuttuvien_tyotuntien_laskeminen))
- **Oletustyövuoron pituus** – yksilöllinen oletus vuorojen luonnissa
- **Oletusresurssi** – näkyy vain, jos resurssiaikataulutus on käytössä ([resurssien aikataulutus](/posts/resurssien_aikataulutus_ominaisuus))

Voit muokata työntekijän tietoja myös suoraan kalenterin vasemmalta puolelta – katso [työntekijälistauksen muokkaus kalenterinäkymässä](/posts/tyontekijalistauksen_muokkaus_kalenterinakymassa).

## Työntekijän poisto

**Poista työntekijä** -painike poistaa työntekijän pysyvästi. Ennen vahvistusta sovellus varoittaa:

> Olet poistamassa työntekijää. Tämä poistaa myös kaikki hänen julkaisemattomat työvuoronsa.

Poiston vaikutukset:

| | Julkaisemattomat listat | Julkaistut listat |
|---|------------------------|-------------------|
| Työntekijän vuorot | **Poistetaan** | **Säilyvät** (historiadata) |
| Työntekijä itse | Poistuu pysyvästi | – |
| Palautus | **Ei mahdollista** | – |

Poistettua työntekijää tai hänen mukanaan poistettuja vuoroja ei voi palauttaa. Käytä poistoa vain, kun työntekijä ei enää työskentele yrityksessäsi.

<img src="/blogPostImages/tyontekijoiden_hallinta/poista_varoitus.png" alt="Työntekijän poiston vahvistusmodaali" width="100%" style="max-width: 600px; display: block; margin: 20px auto;" />

## Julkaistu lista ja työntekijän poisto

Kun lista on merkitty julkaistuksi, sen vuorot säilyvät ennallaan vaikka poistaisit työntekijän. Tämä pitää historiadatan eheänä palkka- ja raportointitarpeita varten.

Jos haluat muokata julkaistua listaa, palauta se ensin muokattavaksi **Hallinta → Työvuorolistat** -näkymästä. Lue lisää [työvuorolistojen julkaisusta](/posts/tyovuorolistojen_julkaisu_ja_lahettaminen_tyontekijoille).

## Työntekijämäärän raja

Jos yrityksesi työntekijämäärä ylittää tilauksesi rajan, uuden työntekijän lisääminen estyy ja sovellus ehdottaa tilauksen päivittämistä. Katso [hinnoittelu ja tilaustyypit](/posts/hinnoittelun_uudistus_maaliskuu_2026).

## Yhteenveto

1. **Lisää** työntekijä Hallinta → Työntekijät -sivulta ja täytä vähintään nimi + sopimustunnit
2. **Muokkaa** tietoja tarvittaessa – erityisesti sähköposti ennen listojen lähettämistä
3. **Poista** vain, kun työntekijä poistuu pysyvästi – muista julkaisemattomien vuorojen katoaminen

Hyvin ylläpidetty työntekijärekisteri tekee sekä suunnittelusta että [tuntien kirjauksesta](/posts/tuntien_kirjaus_opas) sujuvampaa.
