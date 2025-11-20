---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Palkkaraportti-ominaisuus: joustava raporttigeneraattori CSV- ja PDF-muodoissa'
pubDate: 2025-11-24
description: 'Uusi palkkaraportti-ominaisuus mahdollistaa palkkatietojen vientiä CSV- tai PDF-muodossa valittavien sarakkeiden kanssa. Raportti generoidaan valittujen työntekijöiden ja päivämäärien perusteella.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/payroll-report/tuntiraportti_pdf.png'
    alt: 'Palkkaraportin PDF-esimerkki työntekijän tuntien ja lisien erittelyllä.'
tags: ["palkkaraportti", "raportit", "CSV", "PDF", "vienti", "työtuntien laskenta"]
---

Työvuorolista-sovellukseen on nyt lisätty joustava palkkaraportti-ominaisuus, joka mahdollistaa palkkatietojen vientiä CSV- tai PDF-muodossa. Voit valita haluamasi sarakkeet ja generoida raportin valittujen työntekijöiden ja päivämäärien perusteella.

## Mitä palkkaraportti-ominaisuus tarjoaa?

Palkkaraportti-ominaisuus on modaalipohjainen raporttigeneraattori, joka:

- ✅ Mahdollistaa CSV- tai PDF-muotoisen raportin luomisen
- ✅ Tarjoaa joustavat sarakevalinnat (työntekijän nimi, sähköposti, ID, tyyppi, määrä)
- ✅ Generoi yhden rivin per tuntityyppi/etu työntekijää kohti
- ✅ Käyttää samaa tuntien laskentalogiikkaa kuin sovelluksen muutkin osat
- ✅ Tukee useimpia suomalaisia työtuntikategorioita ja -lisiä

## Miten käytät palkkaraportti-ominaisuutta?

Palkkaraportin luominen on yksinkertaista:

**1. Valitse työntekijät ja päivämääräväli**

Siirry [Tuntikirjaus-sivulle](https://app.tyovuorolista.fi/admin/LogHours) (**Hallinta → Tuntikirjaus**) ja valitse työntekijät sekä päivämääräväli, jolta tiedot kerätään.

<img src="/blogPostImages/payroll-report/tuntiraportti_tuntien_kirjaus_nakyma.png" alt="Tuntikirjaus-sivu työntekijöiden ja päivämäärävälin valinnalla" width="100%" style="max-width: 800px; display: block; margin: 20px auto;" />

**2. Avaa palkkaraportti-modali**

Klikkaa **"Luo palkkaraportti..."** -painiketta. Modaali avautuu valittujen työntekijöiden ja päivämäärien kanssa.

<img src="/blogPostImages/payroll-report/tuntiraportti_luo_palkkaraportti_modaali.png" alt="Palkkaraportti-modali CSV- ja PDF-vaihtoehdoilla sekä sarakevalinnoilla" width="100%" style="max-width: 600px; display: block; margin: 20px auto;" />

**3. Valitse raportin asetukset**

Modaalissa voit valita:

**Formaatti:**
- **CSV**: Jos haluat avata raportin Excelissä tai muokata sitä
- **PDF**: Jos haluat tulostaa raportin tai jakaa sen suoraan

**Sarakkeet:**
Voit valita seuraavat sarakkeet raporttiin:
- **Työntekijän nimi**: Työntekijän koko nimi
- **Työntekijän sähköposti**: Työntekijän sähköpostiosoite
- **Työntekijän ID**: Työntekijän yksilöllinen tunniste (UUID)
- **Tyyppi**: Tuntityyppi tai etu (esim. "Työtunnit", "Lauantailisä")
- **Määrä**: Tuntien määrä tai lukumäärä

Vähintään yksi sarake on valittava. Tyyppi- ja määräsarakkeet ovat tyypillisesti aina mukana, jotta raportti on merkityksellinen.

**4. Generoi ja lataa raportti**

Kun olet valinnut asetukset, klikkaa **"Luo raportti"** -painiketta:
- **CSV**: Raportti generoidaan selaimessa ja ladataan välittömästi
- **PDF**: Raportti generoidaan palvelimella ja ladataan muutaman sekunnin kuluttua

Raportti ladataan automaattisesti selaimen latauskansioon.

## Raportissa näkyvät tiedot

Raportti sisältää seuraavat tiedot valittujen työntekijöiden ja päivämäärien perusteella:

### Työtunnit

- **Työtunnit**: Työtuntien kokonaismäärä (ei sisällä sairauslomaa)
- **Sairausajan palkka**: Sairausloman tuntien määrä

### Lisät

- **Lauantailisä**: Lauantain työtuntien määrä
- **Sunnuntailisä**: Sunnuntain työtuntien määrä
- **Arkipyhälisä**: Arkipyhien työtuntien määrä
- **Aattolisä**: Aattopäivien erityislisä (jos käytössä)
- **Iltalisä**: Iltalisän tuntien määrä (oletusarvoisesti 18-24)
- **Yölisä**: Yölisän tuntien määrä (oletusarvoisesti 00-06)
- **Ruokaetu**: Ruokaedun lukumäärä (jos käytössä)

### Koko päivän vuorot

- **Vuosivapaa**: Vuosivapaapäivien lukumäärä
- **Vuosiloma**: Vuosilomapäivien lukumäärä
- **Tasoitusvapaa**: Tasoitusvapaapäivien lukumäärä
- **Vapaa**: Vapaapäivien lukumäärä
- **Ylimääräinen vapaapäivä**: Ylimääräisten vapaapäivien lukumäärä

## Raportin rakenne

Raportti generoi yhden rivin per tuntityyppi/etu työntekijää kohti. Tämä tarkoittaa, että:

- Jokainen työntekijä voi olla useassa rivissä
- Jokainen rivi edustaa yhtä tuntityyppiä tai etua per työntekijä
- Vain nollasta poikkeavat arvot sisällytetään raporttiin

Esimerkki raportin rakenteesta:

```
Työntekijän nimi | Tyyppi | Määrä
Matti Meikäläinen | Työtunnit | 120
Matti Meikäläinen | Lauantailisä | 8
Matti Meikäläinen | Sunnuntailisä | 4
Maija Esimerkki | Työtunnit | 100
Maija Esimerkki | Iltalisä | 10
```

## CSV-muoto

CSV-raportti generoidaan selaimessa ja ladataan välittömästi:

- **Muoto**: Välilyöntierotin (pilkku)
- **Koodaus**: UTF-8 BOM (Excel-yhteensopivuus)
- **Erikoismerkit**: Oikein käsitelty pilkut ja lainausmerkit
- **Otsikkorivi**: Sisältää valitut sarakkeet

CSV-muoto on ihanteellinen, jos haluat:
- Avata raportin Excelissä tai muussa taulukkolaskentaohjelmassa
- Muokata tietoja ennen käyttöä
- Integroida tietoja muihin järjestelmiin

<img src="/blogPostImages/payroll-report/tuntiraportti_csv.png" alt="CSV-raportin esimerkki Excelissä" width="100%" style="max-width: 800px; display: block; margin: 20px auto;" />

## PDF-muoto

PDF-raportti generoidaan palvelimella ja ladataan selaimessa:

- **Muoto**: PDF-tiedosto
- **Laatu**: Korkealaatuinen taulukko
- **Yhteensopivuus**: Toimii kaikissa PDF-lukijoissa
- **Tulostus**: Sopii suoraan tulostamiseen

PDF-muoto on ihanteellinen, jos haluat:
- Tulostaa raportin suoraan
- Jakaa raportin muille osapuolille
- Säilyttää raportti arkistossa

<img src="/blogPostImages/payroll-report/tuntiraportti_pdf.png" alt="PDF-raportin esimerkki" width="100%" style="max-width: 800px; display: block; margin: 20px auto;" />

## Tuntien laskentalogiikka

Palkkaraportti käyttää samaa tuntien laskentalogiikkaa kuin sovelluksen muutkin osat, mikä varmistaa, että raportti vastaa täsmälleen sitä, mitä näet sovelluksen käyttöliittymässä yksittäisen työntekijän yhteenvedossa.

Laskentalogiikka:
- **Perustunnit**: Kokonaistunnit miinus sairausloman tunnit = työtunnit
- **Lisät**: Lasketaan erikseen (lauantai, sunnuntai, arkipyhät, jne.)
- **Bonukset**: Iltalisä ja yölisä ovat tuntipohjaisia
- **Koko päivän vuorot**: Lasketaan päivinä, ei tunteina

## Tuntilaskennan asetukset

Palkkaraportin laskelmat perustuvat paikkakohtaisiin tuntilaskennan asetuksiin. Nämä asetukset määrittävät, miten työtunnit, lisät ja edut lasketaan, ja vaikuttavat suoraan siihen, mitä tiedot näkyvät generoiduissa raporteissa.

### Asetusten sijainti

Asetukset löytyvät **Hallinta → Profiili** -sivulta (<a href="https://app.tyovuorolista.fi/admin/profile" target="_blank">avaa profiiliasetukset</a>) osiosta **"Tuntilaskennan asetukset"**.

<img src="/blogPostImages/payroll-report/tuntiraportti_tuntien_laskenta_asetukset.png" alt="Tuntilaskennan asetukset profiilisivulla" width="100%" style="max-width: 800px; display: block; margin: 20px auto;" />

### Saatavilla olevat asetukset

#### Aikarajat

Nämä asetukset määrittävät, milloin eri aikajaksot (päivä, ilta, yö) alkavat, mikä vaikuttaa lisien laskentaan:

**Päivän alkamisaika**
- Oletusarvo: **06:00**
- Määrittää, milloin tavallinen työpäivä alkaa
- Käytetään yölisän päättymisajan määrittämiseen (yölisä pätee yön alkamisajasta päivän alkamisaikaan)

**Illan alkamisaika**
- Oletusarvo: **18:00**
- Määrittää, milloin iltalisän tunnit alkavat
- Iltalisän tunnit lasketaan illan alkamisajasta yön alkamisaikaan asti

**Yön alkamisaika**
- Oletusarvo: **00:00**
- Määrittää, milloin yölisän tunnit alkavat
- Yölisän tunnit lasketaan yön alkamisajasta päivän alkamisaikaan

**Vaikutus raportteihin**: Nämä asetukset vaikuttavat suoraan **Iltalisä**- ja **Yölisä**-riveihin palkkaraportissa. Aikarajojen muuttaminen muuttaa, mitkä tunnit oikeuttavat lisään.

#### Aattopäivän asetukset

**Aattopäivän raja-aika**
- Oletusarvo: **15:00** tai poistettu käytöstä
- Määrittää raja-ajan aattopäivien erityislisille
- Aattopäivien juhlapyhien jälkeen (esim. Juhannusaatto) tämän ajan jälkeen tehdyt tunnit lasketaan **Aattolisäksi**
- Voidaan poistaa käytöstä kokonaan

**Vaikutus raportteihin**: Kun asetus on käytössä, raportti sisältää **Aattolisä**-rivin oikeuttaville tunneille. Kun asetus on poistettu käytöstä, erityislisärivejä ei näy raportissa.

#### Ruokaedun asetukset

**Ruokaedun vähimmäistunnit**
- Oletusarvo: **6,0 tuntia** tai poistettu käytöstä
- Vähimmäisvuoron pituus ruokaedun oikeuttamiseksi
- Vähintään tämän pituiset vuorot lasketaan ruokaedun määrään
- Voidaan poistaa käytöstä

**Vaikutus raportteihin**: Kun asetus on käytössä, raportti sisältää **Ruokaetu**-rivin, joka näyttää oikeuttavien vuorojen lukumäärän. Kun asetus on poistettu käytöstä, ruokaedun rivejä ei näy raportissa.

### Oletusarvot

Jos paikalle ei ole määritelty asetuksia, järjestelmä käyttää suomalaisten lakien mukaisia oletusarvoja:

- **Päivän alkamisaika**: 06:00
- **Illan alkamisaika**: 18:00
- **Yön alkamisaika**: 00:00
- **Aattopäivän raja-aika**: 15:00 (käytössä oletusarvoisesti)
- **Ruokaedun vähimmäistunnit**: 6,0 tuntia (käytössä oletusarvoisesti)

### Miten asetukset vaikuttavat raportteihin

- **Aikarajat** → Vaikuttavat Iltalisän ja Yölisän laskentaan
- **Aattopäivän raja-aika** → Kontrolloi, näkyykö Aattolisä raporteissa
- **Ruokaedun kynnysarvo** → Kontrolloi, näkyykö Ruokaetu raporteissa ja mitkä vuorot oikeuttavat siihen

**Tärkeää**: Asetusten muutokset astuvat voimaan välittömästi kaikille uusille laskelmille. Olemassa olevia raportteja ei päivitetä jälkikäteen - vain asetusten muutosten jälkeen generoidut uudet raportit heijastavat uusia arvoja.

## Käytännön hyödyt

- 📊 **Joustavuus**: Valitse haluamasi sarakkeet ja muoto
- ⚡ **Nopeus**: Raportti generoidaan muutamassa sekunnissa
- ✅ **Tarkkuus**: Raportti käyttää samaa laskentalogiikkaa kuin sovellus
- 📄 **Muotoilu**: CSV Excel-yhteensopiva, PDF tulostusvalmis
- 🔄 **Yhdenmukaisuus**: Raportti vastaa sovelluksen näkymiä

## Yhteenveto

Uusi palkkaraportti-ominaisuus tekee palkkatietojen vientiä helpommaksi:

- Valitse työntekijät ja päivämääräväli
- Valitse CSV- tai PDF-muoto
- Valitse haluamasi sarakkeet
- Generoi ja lataa raportti muutamassa sekunnissa

Aloita käyttö siirtymällä [Tuntikirjaus-sivulle](https://app.tyovuorolista.fi/admin/LogHours) ja klikkaamalla "Luo palkkaraportti..." -painiketta!


