---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Näin viet palkka-aineiston Procountoriin'
pubDate: 2026-07-23
description: 'Vie TES-tulkitut työtunnit ja lisät Procountoriin valmiina palkka-aineistona. Aseta henkilönumerot, valitse rivit ja lataa CSV suoraan sisäänluettavaksi.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/procountor-vienti/hero.png'
    alt: 'Palkkaraportti-modali Procountor-muoto valittuna.'
tags: ['palkkaraportti', 'Procountor', 'vienti', 'palkanlaskenta', 'integraatio']
---

Jos palkanlaskenta pyörii Procountorissa, tuntien siirtäminen käsin Exceliin on turhaa työtä. Työvuorolistasta saat nyt **Procountor-muotoisen palkka-aineiston**: CSV, jonka voit lukea suoraan sisään Procountoriin (*Palkat → Uusi palkkalista*).

Tämä ohje käy läpi asetukset kerran, ja sen jälkeen viennin kuukausirutiinina.

## Mitä tarvitset ennen ensimmäistä vientiä

### 1. Henkilönumero jokaiselle työntekijälle

Procountor tunnistaa rivit **henkilönumerolla** (tai henkilötunnuksella). Aseta sama numero Työvuorolistaan:

1. Avaa **Hallinta → Työntekijät**
2. Avaa työntekijä → **Muokkaa**
3. Täytä kenttä **Henkilönumero (palkanlaskenta)** samalla arvolla kuin Procountorissa

<img src="/blogPostImages/procountor-vienti/tyontekija-henkilonumero.png" alt="Työntekijäkortti muokkaustilassa, henkilönumero-kenttä täytettynä" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Jos numero puuttuu, vienti käyttää sisäistä tunnusta ja saat siitä varoituksen — Procountor ei tällöin yleensä löydä henkilöä.

### 2. Palkkalajikoodit (TES-apuri)

Procountor-rivillä on palkkalajin koodi (esim. tuntipalkka 1004, iltalisä 1447). Oletukset tulevat Procountorin vakiorekisteristä. Jos teillä on omat koodit:

1. Avaa **Asetukset → TES-apuri**
2. Kohdassa **Palkkalajikoodit** säädä koodit vastaamaan omaa Procountor-ympäristöäsi

Ilman koodia rivi jätetään pois viennistä (esim. ylityö 50/100 %, jos et ole valinnut vrk/vko-koodia).

## Vienti askel askeleelta

### 1. Valitse jakso ja työntekijät

Siirry **Hallinta → Tuntien kirjaus**. Valitse palkkajaksoa vastaava lista tai päivämääräväli ja ne työntekijät, joiden tunnit kuuluvat mukaan.

<img src="/blogPostImages/procountor-vienti/tuntien-kirjaus.png" alt="Tuntien kirjaus -sivu työntekijöillä ja päivämäärävälillä" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

### 2. Avaa palkkaraportti ja valitse Procountor

Klikkaa **Luo palkkaraportti…**. Valitse muodoksi **Procountor (palkka-aineisto)**. Sarakevalintaa ei näytetä — Procountorin siirtotiedoston rakenne on kiinteä.

<img src="/blogPostImages/procountor-vienti/procountor-modaali.png" alt="Palkkaraportti-modali Procountor-vaihtoehto valittuna" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Valitse vielä, mitkä rivit (työtunnit, lisät, poissaolot…) kuuluvat mukaan, ja paina **Luo raportti**. Tiedosto latautuu selaimen latauskansioon.

### 3. Lue aineisto Procountoriin

1. Avaa Procountor → **Palkat → Uusi palkkalista**
2. Käytä palkka-aineiston sisäänlukua
3. Valitse juuri lataamasi CSV

Tiedosto on puolipisteellä eroteltu, ilman otsikkoriviä — juuri Procountorin virallinen erittelytietue-muoto.

## Mitä tiedostoon tulee

Jokainen rivi on yksi palkkalaji yhdelle henkilölle, esimerkiksi:

- työtunnit
- ilta- / yö- / sunnuntailisät
- TES-tulkitut lisätyöt ja päivätyökorvaukset (kun TES-apuri on käytössä ja jakso on tasoittumisjakson mukainen)

Yksikköhinta jätetään tyhjäksi: Procountor käyttää palkansaajan palkkaperustetta.

## Ero tavalliseen CSV-/PDF-raporttiin

| | CSV / PDF | Procountor |
| --- | --- | --- |
| Käyttö | Excel, tuloste, kirjanpitäjän luettava raportti | Suora sisäänluku Procountoriin |
| Tunniste | Nimi / sisäinen ID | Henkilönumero |
| Rivin tyyppi | Suomeksi (“Työtunnit”) | Palkkalajikoodi |
| Muoto | Pilkku, otsikot | Puolipiste, ei otsikkoa |

Sama tuntidata, eri pakkaus. Tavallinen palkkaraportti on edelleen kätevä tarkistukseen — Procountor-vienti on se, jonka tilitoimisto tai palkanlaskija lukee järjestelmään.

## Vinkkejä ensimmäiseen kerran jälkeen

- Pidä henkilönumerot ajan tasalla, kun Procountoriin tulee uusi palkansaaja
- Jos jokin lisä puuttuu aineistosta, tarkista TES-apurin palkkalajikoodi ja modaalin rivivalinnat
- Vie yksi jakso kerrallaan — sama aineisto kahdesti Procountoriin tuplaa rivit

Jos jokin kohtaa jumiutuu (koodit, henkilönumerot, sisäänluku), laita viestiä: **info@tyovuorolista.fi**.
