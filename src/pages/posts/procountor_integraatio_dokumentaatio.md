---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'tyovuorolista.fi ↔ Finago Procountor: integraation dokumentaatio'
pubDate: 2026-07-24
description: 'Tekninen kuvaus palkka-aineiston CSV-viennistä: erittelytietueen muoto, kentät, käyttöönotto ja tyypilliset käyttötapaukset. Linkki myös Procountorin omaan sisäänlukuohjeeseen.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/procountor-vienti/hero.png'
    alt: 'Palkkaraportti-modali Procountor-muoto valittuna tyovuorolista.fi:ssä.'
tags: ['Procountor', 'integraatio', 'palkka-aineisto', 'dokumentaatio', 'CSV']
---

Tämä sivu on **integraation dokumentaatio** Finago Procountor Store
-hakemusta ja käyttöönottoa varten: tekninen yhteensopivuus,
käyttöönotto tyovuorolista.fi:ssä sekä yleisimmät käyttötapaukset.

Käyttäjäystävällinen askel-askeleelta -ohje (kuvineen):
[Näin viet palkka-aineiston Procountoriin](/posts/procountor_palkka_vienti).

Procountorin oma ohje aineiston sisäänluvusta:
[Palkka-aineiston sisäänluku Procountoriin](https://help.procountor.fi/fi/articles/531549-palkka-aineiston-sisaanluku-procountoriin).

## Integraation tyyppi

| | |
|---|---|
| **Malli** | Tiedostopohjainen *siirtotiedosto* (ei reaaliaikainen API) |
| **Suunta** | tyovuorolista.fi → Finago Procountor |
| **Aineisto** | Palkka-aineisto, erittelytietue (`E`) |
| **Tiedostomuoto** | CSV, puolipiste-erotin, **ei otsikkoriviä**, UTF-8 BOM |
| **Procountorissa** | *Palkat → Uusi palkkalista* → aineiston sisäänluku |

Sama malli on käytössä monella Store-kumppanilla (esim. Otta, HRSuunti
Net, Nepton siirtotiedostolla).

## Mitä tietoja siirtyy

Jokainen CSV-rivi on yksi palkkalajirivi yhdelle palkansaajalle:

- **Henkilönumero** (tai Procountorin tunnistama palkansaajatunniste)
- **Palkkalajin koodi** (Procountorin palkkalajirekisteri)
- **Määrä** (enintään 2 desimaalia, desimaalierotin piste)
- **Yksikköhinta** jätetään tyhjäksi → Procountor käyttää palkansaajan
  palkkaperustetta

Tyypillisiä rivejä: työtunnit, ilta-/yö-/lauantai-/sunnuntailisät,
aattoiltalisä, sairausajan palkka, vuosivapaa sekä TES-tulkitut
lisätyö- ja ylityörivit (kun TES-apuri on käytössä ja koodit on
mapattu).

**Ei siirretä** tällä integraatiolla: myyntilaskuja, maksatustietoja,
palkansaajarekisterin perustietoja eikä projektikohdennuksia.
Henkilöt luodaan ja ylläpidetään erikseen kummassakin järjestelmässä;
henkilönumeron on täsmättävä.

## Tiedoston tekninen rakenne

Procountorin erittelytietueen vaatimusten mukaisesti
([Procountor Help](https://help.procountor.fi/fi/articles/531549-palkka-aineiston-sisaanluku-procountoriin)):

1. Rivityyppi `E` (erittely)
2. Henkilönumero
3. Palkkalajin koodi
4. Palkkalajin nimi (tyovuorolista.fi jättää tyhjäksi → nimi Procountorista)
5. Lukumäärä
6. Yksikköhinta (tyhjä)
7. Loput sarakkeet (dimensiot, päivämäärät, kommentti) tyhjinä

Esimerkkirivi (havainnollistus):

```text
E;1001;1004;;37.5;;;;;;;;;
E;1001;1447;;6;;;;;;;;;
```

Kentissä ei saa olla puolipistettä. Tiedostoa ei tarvitse muokata
Excelissä ennen sisäänlukua — tyovuorolista.fi tuottaa valmiin CSV:n.

## Käyttöönotto tyovuorolista.fi:ssä

1. **Henkilönumerot** — *Hallinta → Työntekijät → Muokkaa* → kenttä
   *Henkilönumero (palkanlaskenta)* sama arvo kuin Procountorin
   palkansaajalla.
2. **Palkkalajikoodit** — *Asetukset → TES-apuri → Palkkalajikoodit*.
   Oletuksena Procountorin vakiorekisterin koodeja (esim. tuntipalkka
   1004, iltalisä 1447). Omat koodit voi ylikirjoittaa.
3. **Vienti** — *Hallinta → Tuntien kirjaus* → valitse jakso ja
   työntekijät → *Luo palkkaraportti…* → muoto
   **Procountor (palkka-aineisto)** → *Luo raportti*.
4. **Sisäänluku** — Procountorissa *Palkat → Uusi palkkalista* → lue
   ladattu CSV.

<img src="/blogPostImages/procountor-vienti/procountor-modaali.png" alt="tyovuorolista.fi: palkkaraportti, Procountor-muoto valittuna" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Jos henkilönumero puuttuu, vienti varoittaa ja käyttää sisäistä
tunnusta — Procountor ei tällöin yleensä löydä palkansaajaa. Jos
palkkalajikoodi puuttuu (esim. ylityö ilman vrk/vko-valintaa), kyseinen
kategoria jätetään pois aineistosta.

## Yleisimmät käyttötapaukset

### 1. Kuukausittainen tuntipalkkalaisten palkka-aineisto

Esimies kirjaa toteutuneet tunnit palkkajaksolta, vie Procountor-CSV:n
ja lukee sen uuteen palkkalistaan. Tilitoimisto / palkanlaskija tarkastaa
listan Procountorissa ennen maksatusta.

### 2. TES-lisät mukana samassa tiedostossa

Kun TES-apuri on päällä, ilta-, yö-, lauantai- ja sunnuntailisät sekä
mahdolliset lisä-/ylityöt menevät omille palkkalajiriveilleen — ei
erillistä Excel-laskentaa.

### 3. Tarkistus ennen sisäänlukua

Sama jakso voidaan ensin ladata tavallisena CSV-/PDF-raporttina
ihmislukuiseen tarkistukseen ja vasta sitten Procountor-muodossa
sisäänluettavaksi.

### 4. Useita tiimejä / toimipisteitä

Vie kerralla valitut työntekijät ja jakso. Vie mieluiten **yksi
palkkajakso kerrallaan** — sama aineisto kahdesti Procountoriin tuplaa
rivit.

## Roolit yhteiskäytössä

| Järjestelmä | Rooli |
|---|---|
| **tyovuorolista.fi** | Työvuorosuunnittelu, tuntikirjaus, TES-luokittelu, CSV-vienti |
| **Finago Procountor** | Palkansaajarekisteri, palkkalajit, palkkalistat, maksatus |

## Rajoitteet (tietoinen rajaus)

- Ei API-synkronointia henkilö- tai palkkalajirekistereihin
- Ei automaattista siirtoa taustalla — käyttäjä lataa ja lukee tiedoston
- Ylityökoodit (vrk/vko) on valittava TES-apurissa, koska Procountor
  erottaa ne eri palkkalajeiksi
- Integraatio ei korvaa Procountorin palkkalaskelman tarkastusta

## Tuki

- Ohje ja kuvakaappaukset:
  [procountor_palkka_vienti](/posts/procountor_palkka_vienti)
- Sähköposti: **info@tyovuorolista.fi**
- Procountorin sisäänluku:
  [help.procountor.fi — palkka-aineisto](https://help.procountor.fi/fi/articles/531549-palkka-aineiston-sisaanluku-procountoriin)
  · [aineiston sisäänluku yleisesti](https://help.procountor.fi/fi/articles/531566-aineiston-sisaanluku)

*Lähteet: [Palkka-aineiston sisäänluku Procountoriin (Procountor Help)](https://help.procountor.fi/fi/articles/531549-palkka-aineiston-sisaanluku-procountoriin); tyovuorolista.fi Procountor-vienti (erittelytietue CSV).*
