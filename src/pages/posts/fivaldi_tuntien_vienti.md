---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Näin viet työtunnit Fivaldiin'
pubDate: 2026-09-12
description: 'Näin lähetät työtunnit ja lisät Fivaldiin tyovuorolista.fi:stä. Ohje käyttöönottoon ja kuukausittaiseen vientiin.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/fivaldi-vienti/hero.png'
    alt: 'Palkkaraportti-modali Lähetä Fivaldiin -muoto valittuna.'
tags: ['palkkaraportti', 'Fivaldi', 'vienti', 'palkanlaskenta', 'integraatio']
---

Työtunnit ja lisät voi lähettää Fivaldiin suoraan tyovuorolista.fi:stä. Rivit odottavat Fivaldissa Tietojen tuontia. Palkanlaskija noutaa ne palkkalaskelmalle samaan tapaan kuin ennenkin.

Tämä ohje käy asetukset läpi kerran. Sen jälkeen vienti on kuukausirutiini. Käyttöönotto vaatii Fivaldin pääkäyttäjän oikeudet. Usein tilitoimisto hoitaa Fivaldi-puolen. Esihenkilö hoitaa tyovuorolista.fi-puolen.

## Mitä tarvitset ennen ensimmäistä vientiä

### 1. Aktivoi integraatio Fivaldissa

Tilitoimiston pääkäyttäjä antaa tyovuorolista.fi:lle oikeuden yritykseen Fivaldissa:

1. Avaa Fivaldin **Sovellusikkuna**
2. Siirry kohtaan **Muut → Asetukset → Palvelunhallinta**
3. Avaa vasemmalta **Kumppanikäyttäjät**
4. Valitse listalta **tyovuorolista.fi**
5. Valitse yritys, jossa integraatio otetaan käyttöön
6. Anna seuraavat oikeudet:
   - **Palkanlaskenta – käyttö**
   - **Palkanlaskenta – lisäys**
7. Tallenna muutokset

Jos integraatio otetaan käyttöön usealle yritykselle, oikeudet annetaan jokaiselle yritykselle erikseen. Fivaldin oma ohje Palvelunhallintaan: [Käyttöoikeuksien määrittäminen Palvelunhallinnassa](https://support.fivaldi.fi/fi/support/solutions/articles/77000566430).

### 2. Valitse palkkaohjelmaksi Fivaldi ja yhdistä yritys

1. Avaa tyovuorolista.fi:ssä **Asetukset** ja vieritä kohtaan **Palkanlaskenta**
2. Valitse palkkaohjelmaksi **Fivaldi**
3. Syötä yrityksen **Y-tunnus** ja paina **Hae Fivaldista**
4. Jos yrityksiä on useita, valitse oikea. Paina **Tallenna yritys**

Jos haku ei löydä yritystä, Fivaldin Kumppanikäyttäjät-oikeus (kohta 1) ei ole vielä voimassa.

<img src="/blogPostImages/fivaldi-vienti/asetukset-palkanlaskenta.png" alt="Asetusten Palkanlaskenta-osio, palkkaohjelmaksi valittu Fivaldi ja yritys yhdistettynä" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Paina lopuksi **Testaa yhteys**. Testi näyttää, ketkä työntekijöistäsi löytyvät Fivaldista samalla nimellä. Henkilönumeron pitää silti olla sama molemmissa päissä. Väärä numero paljastuu vasta viennissä.

<img src="/blogPostImages/fivaldi-vienti/testaa-yhteys.png" alt="Testaa yhteys -tulos: työntekijät ja Fivaldin palkansaajat nimellä" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

### 3. Yhdistä työntekijät henkilönumerolla

Fivaldi tunnistaa rivit palkansaajan **ulkoisen järjestelmän tunnuksella**. Sama arvo asetetaan molempiin päihin.

**tyovuorolista.fi:ssä:** **Hallinta → Työntekijät** → avaa työntekijä → **Muokkaa** → **Työsuhde**-osio → **Henkilönumero (palkanlaskenta)**.

**Fivaldissa:**

1. Avaa **Palkat → Palkansaajat**
2. Valitse työntekijä
3. Syötä **Henkilön perustiedot** -välilehden kenttään **Ulkoisen järj. tunnus** sama henkilönumero kuin tyovuorolista.fi:ssä
4. Tarkista **Työsuhteet**-välilehdeltä, että työsuhteella on alkupäivä ja että työsuhde on voimassa siirrettävien vuorojen päivinä
5. Tallenna

Esimerkiksi tyovuorolista.fi:n henkilönumero `12` syötetään Fivaldiin muodossa `12`. Ilman numeroa työntekijä ohitetaan viennissä.

### 4. Valitse palkkalajikoodit

Fivaldin palkkalajit ovat yrityskohtaisia. Älä kopioi koodeja toisesta Fivaldi-yrityksestä tarkistamatta niitä.

Fivaldissa tunnukset löytyvät kohdasta **Palkat → Asetukset → Palkkalajit**. Hae tarvittava palkkalaji nimellä ja merkitse sen tunnus tyovuorolista.fi:ssä:

1. Avaa **Asetukset → Palkanlaskenta → Palkkalajikoodit**
2. Syötä jokaiselle riville (työtunnit, iltalisä, sunnuntailisä, lisätyö…) Fivaldin palkkalajin tunnus

<img src="/blogPostImages/fivaldi-vienti/palkkalajikoodit-fivaldi.png" alt="Palkkalajikoodit-näkymä, Fivaldi-tunnuksen syöttö Iltavuorolisä-riville" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Ilman tunnusta rivi jää viennistä pois. Näet sen tuloksissa syyn kanssa. Koodeille ei ole valmiita oletuksia. tyovuorolista.fi lähettää vain tunnit ja kappaleet. Hinnat tulevat Fivaldista.

## Vienti kuukausirutiinina

### 1. Varmista avoin palkkakausi Fivaldissa

Fivaldissa pitää olla avoin palkkakausi, joka kattaa siirrettävien tapahtumien päivämäärät. Ilman kautta rivit eivät näy laskelmalla. Kausi perustetaan kohdassa **Palkanlaskenta → Perustiedot → Palkkakaudet**.

### 2. Valitse jakso ja työntekijät

Siirry **Hallinta → Tuntien kirjaus**. Valitse palkkajaksoa vastaava päivämääräväli ja työntekijät.

### 3. Lähetä Fivaldiin

Klikkaa **Luo palkkaraportti…** ja valitse muodoksi **Lähetä Fivaldiin**. Vienti käy työntekijät läpi yksi kerrallaan. Lopuksi näet yhteenvedon: viedyt rivit, ohitetut rivit syineen ja mahdolliset virheet.

<img src="/blogPostImages/fivaldi-vienti/vienti-tulokset.png" alt="Viennin tulokset: lähetetyt rivit ja ohitettu rivi ilman palkkalajikoodia" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

### 4. Nouda rivit Fivaldissa

Lähetys ei vie rivejä suoraan palkkalaskelmalle. Palkanlaskija noutaa ne:

1. Avaa Fivaldissa **Palkat → Palkanlaskenta**
2. Valitse ylävalikosta **Palkanlaskenta → Tietojen tuonti**
3. Jos Fivaldi pyytää valitsemaan palkkakauden, valitse tapahtumien päivämäärää vastaava kausi
4. Tarkista tuodut rivit työntekijän palkkalaskelmalta

## Mitä viedään

Jokainen vienti lähettää jakson rivit palkkatapahtumina:

- työtunnit ja sairausajan palkka
- ilta-, yö- ja sunnuntailisät sekä arkipyhä- ja aattokorvaukset
- lisä- ja ylityöt, kun TES-apuri on käytössä ja koodi on asetettu
- TES-apuria käyttäville rivit ovat TES-tulkittuja. Ilman TES-apuria lisät lasketaan tuntiasetustesi mukaan

Muutama poikkeus:

- **Osaamistunnit** eivät siirry toistaiseksi
- [Palkattoman ruokatauon](/posts/palkaton_ruokatauko) tietorivi ei lähde viennin mukaan. Työtunnit ovat jo nettona
- Jos työntekijällä [lisät sisältyvät sopimuspalkkaan](/posts/sopimuspalkka_ilta_ja_yolisa), lisärivit jäävät pois myös Fivaldi-viennistä

## Voinko lähettää saman jakson uudelleen?

Voit, mutta Fivaldin tuonti **lisää** rivit eikä korvaa niitä. Jos tunnit muuttuivat viennin jälkeen, tyovuorolista.fi näyttää työntekijän kohdalla aiemman viennin ja pyytää vahvistamaan **Lähetä korjauksena**. Poista vanhat tuodut rivit Fivaldin palkkalaskelmalta ennen uutta Tietojen tuontia. Muuten palkat tuplaantuvat.

## Tavallisimmat virheet

**“Fivaldi ei löytänyt palkansaajaa tällä henkilönumerolla”**

Tarkista, että Fivaldin **Ulkoisen järj. tunnus** vastaa täsmälleen tyovuorolista.fi:n henkilönumeroa ja että työntekijällä on Fivaldissa voimassa oleva työsuhde tapahtuman päivänä.

**“ei palkkalajikoodia”**

Valitse kyseiselle tuntityypille tai lisälle Fivaldissa käytössä oleva palkkalajin tunnus tyovuorolista.fi:n Palkkalajikoodit-asetuksissa.

**Lähetetyt tiedot eivät näy palkkalaskelmalla**

Suorita **Palkanlaskenta → Tietojen tuonti** ja tarkista, että oikea palkkakausi on avoinna.

**“Tilitoimisto ei ole vielä antanut tyovuorolista.fi:lle oikeutta tähän yritykseen”**

Kumppanikäyttäjän oikeudet puuttuvat tai koskevat väärää yritystä. Palaa kohtaan 1.

## Ero Procountor- ja Netvisor-vientiin

Procountor-vienti tekee tiedoston, joka luetaan Procountoriin käsin. Netvisor-vienti vie tunnit suoraan Työajan kirjaukseen. Fivaldiin tunnit lähtevät suoraan, mutta palkanlaskija noutaa ne vielä Tietojen tuonnilla.

Jos jokin kohta jumiutuu (oikeudet, henkilönumerot, palkkalajit), laita viestiä: **info@tyovuorolista.fi**.
