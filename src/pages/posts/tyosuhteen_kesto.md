---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Työsuhteen alkupäivä ja lopetuspäivä työntekijälle'
pubDate: 2026-06-24
description: 'Voit nyt merkitä kesä- ja määräaikaistyöntekijöille työsuhteen keston. Kalenteri näyttää päättyneet työntekijät selkeästi, ja saat varoituksen jos vuoro osuu työsuhteen ulkopuolelle.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tyosuhteen-kesto/hero-image.png'
    alt: 'Työntekijät-näkymä, jossa näkyy Työsuhde-sarake'
tags: ["päivitykset", "uudet ominaisuudet", "työntekijät", "kalenteri"]
---

Kesä- ja määräaikaisille työntekijöille on nyt helppo määrittää työsuhteen kesto. Voit merkitä työntekijälle valinnaisen alkupäivän ja lopetuspäivän, ja Työvuorolista ottaa ne huomioon suunnittelussa.

Vakituisille työntekijöille mitään ei muutu — jätät päivämäärät tyhjiksi, ja he toimivat kuten ennenkin.

## Työsuhteen päivät työntekijän tiedoissa

Työntekijän muokkaus- ja lisäyslomakkeella löydät **Työsuhde**-osion. Siellä voit valita:

- **Työsuhteen alkupäivän** — ensimmäinen työpäivä
- **Työsuhteen lopetuspäivän** — viimeinen työpäivä

Päivämäärät ovat valinnaisia. Voit tyhjentää valitun päivän X-painikkeella, jos haluat poistaa sen.

![Työntekijän työsuhteen päivämäärät muokkauslomakkeella](/blogPostImages/tyosuhteen-kesto/worker-modal-dates.png)

## Työntekijät-listauksessa näet keston yhdellä silmäyksellä

Työntekijät-taulukossa on uusi **Työsuhde**-sarake. Jos päivät on määritetty, näet ne muodossa *1.6.–20.6.2026*. Tyhjät kentät näkyvät viivana (—).

![Työntekijät-näkymä Työsuhde-sarakkeella](/blogPostImages/tyosuhteen-kesto/workers-table-with-dates.png)

Työntekijät-listaa **ei suodateta** työsuhteen perusteella — kaikki työntekijät näkyvät edelleen hallinnassa. Pysyvä poisto tapahtuu kuten ennenkin työntekijän poistotoiminnolla.

## Miten kalenteri käyttäytyy?

Kalenterin suunnittelunäkymässä työntekijät jaotellaan nykyisen listan aikaväliin verrattuna:

| Tilanne | Mitä tapahtuu |
|---------|---------------|
| Päiviä ei ole asetettu | Ei muutosta — työntekijä on raahattavissa normaalisti |
| Lista osuu työsuhteeseen | Työntekijä on aktiivinen ja raahattavissa |
| Työsuhde on juuri päättynyt | Työntekijä näkyy sivupalkissa harmaana, ei raahattavissa. Alla lukee esim. *Työsuhde päättynyt 20.6.2026* |
| Työsuhde päättynyt jo aikaa sitten | Työntekijä poistuu suunnittelunäkymästä (ei häiritse uusien listojen tekoa) |

Päättyneen työntekijän jälkeen on lyhyt **siirtymäaika** (7 päivää), jolloin hänet näkee vielä sivupalkissa mutta ei voi raahata kalenteriin. Tämä auttaa viimeistelemään juuri päättyneen kauden listoja.

Jos työntekijällä on vielä vuoroja nykyisessä listassa, hän näkyy sivupalkissa silti — vuoroja voi muokata, mutta uusia vuoroja ei voi raahata helposti vahingossa.

![Kalenteri, jossa päättynyt työntekijä näkyy sivupalkissa](/blogPostImages/tyosuhteen-kesto/calendar-ended-worker.png)

## Varoitus vuoron ollessa työsuhteen ulkopuolella

Jos yrität tallentaa vuoron päivälle, joka on työntekijän työsuhteen ulkopuolella, saat **varoitusviestin**:

> *Vuoro on työntekijän [nimi] työsuhteen ulkopuolella.*

Varoitus ei estä tallennusta — voit silti tallentaa vuoron tarvittaessa. Tämä on tarkoituksella: joskus vuoro pitää merkitä esimerkiksi korvaus- tai siirtotilanteessa, mutta haluat silti huomautuksen.

Varoitus toimii vuoron luonnissa, muokkauksessa, raahauksessa ja monessa muussa toiminnossa, jossa vuoroja käsitellään.

## Kenelle tästä on hyötyä?

- **Kesätyöntekijät** — työntekijä katoaa suunnittelusta automaattisesti kauden jälkeen
- **Määräaikaiset sopimukset** — näet heti, kuka on vielä töissä ja kuka ei
- **Useita listoja** — seuraavan kauden listalla edellisen kauden työntekijät eivät täytä sivupalkkia turhaan

## Yhteenveto

Työsuhteen kesto on valinnainen kenttä, joka tekee kausityöntekijöiden hallinnasta selkeämpää. Hallinnassa näet kaikki työntekijät, kalenterissa näet vain relevantit — ja saat varoituksen, jos vuoro menee väärälle päivälle.

Kuten aina, otamme mielellämme vastaan palautetta. Voit lähettää sen suoraan sovelluksen [Ohje ja tuki -chatista](/posts/ohje_ja_tuki_chat).
