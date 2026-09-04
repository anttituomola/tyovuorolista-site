---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Näin viet työtunnit Netvisoriin'
pubDate: 2026-09-04
description: 'Lähetä TES-tulkitut työtunnit ja lisät suoraan Netvisoriin ilman tiedostoja. Kytke rajapintatunnukset kerran, sen jälkeen vienti on yksi nappi palkkaraportissa.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/netvisor-vienti/hero.png'
    alt: 'Palkkaraportti-modali Lähetä Netvisoriin -muoto valittuna.'
tags: ['palkkaraportti', 'Netvisor', 'vienti', 'palkanlaskenta', 'integraatio']
---

*Päivitetty 4.9.2026: ennen ensimmäistä testiä integraatio pitää hakea Netvisorissa käyttöoikeusavaimella. Avaimen saat meiltä.*

Jos palkanlaskenta pyörii Netvisorissa, tuntien siirtäminen käsin on turhaa työtä. tyovuorolista.fi lähettää **työtunnit ja lisät suoraan Netvisoriin** rajapintaa pitkin: ei CSV-tiedostoja, ei sisäänlukua. Tunnit ilmestyvät Netvisorin Työajan kirjaukseen ja nousevat sieltä automaattisesti palkanlaskentaan.

Tämä ohje käy asetukset läpi kerran, ja sen jälkeen viennin kuukausirutiinina.

## Mitä tarvitset ennen ensimmäistä vientiä

### 1. Valitse palkkaohjelmaksi Netvisor

1. Avaa **Asetukset** ja vieritä kohtaan **Palkanlaskenta**
2. Valitse palkkaohjelmaksi **Netvisor**

<img src="/blogPostImages/netvisor-vienti/asetukset-palkanlaskenta.png" alt="Asetusten Palkanlaskenta-osio, palkkaohjelmaksi valittu Netvisor" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

### 2. Salli integraatio Netvisorissa

Integraatio ei ole vielä Netvisorin Marketplacessa, joten se haetaan räätälöitynä. Siihen tarvitaan käyttöoikeusavain. Laita viesti **info@tyovuorolista.fi**, niin lähetän sen.

1. Avaa Netvisorissa **Yritysvalikko → Rajapintaresurssien käyttöoikeudet**
2. Valitse **Räätälöidyt integraatiot** ja syötä avain
3. Salli tyovuorolista.fi:lle palkansaajat, kirjauslajit ja työajan tuonti

Ilman tätä Testaa yhteys ja vienti kaatuvat. Virheviesti kertoo puuttuvan resurssin.

### 3. Luo rajapintatunnukset Netvisorissa ja kytke ne

Vienti tehdään **sinun omilla Netvisor-rajapintatunnuksillasi**. Ne luodaan Netvisorissa minuutissa:

1. Kirjaudu Netvisoriin ja avaa **Yritysvalikko → Ohjelmistorajapintatunnukset**
2. Paina **Luo uusi rajapintatunnus**. Uusi tunnus ilmestyy listan ensimmäiseksi
3. Kopioi rivin **käyttäjätunniste** ja **avain**

Syötä sitten tyovuorolista.fi:n Palkanlaskenta-osiossa **y-tunnus, käyttäjätunniste ja avain**, ja paina **Tallenna**. Avainta ei näytetä tallennuksen jälkeen uudelleen, ja se säilytetään salattuna.

Paina lopuksi **Testaa yhteys**. Testi hakee Netvisorin palkansaajat ja näyttää samalla, ketkä työntekijöistäsi täsmäävät niihin henkilönumerolla, ja keneltä numero puuttuu.

<img src="/blogPostImages/netvisor-vienti/testaa-yhteys.png" alt="Testaa yhteys -tulos: palkansaajat ja työntekijöiden täsmäytys" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

### 4. Henkilönumero jokaiselle työntekijälle

Netvisor tunnistaa tunnit **palkansaajan numerolla**. Sama numero asetetaan molempiin päihin:

- Netvisorissa: palkansaajalistaus → avaa palkansaaja → **Palkansaajan numero**
- tyovuorolista.fi:ssä: **Hallinta → Työntekijät** → avaa työntekijä → **Muokkaa** → **Työsuhde**-osio → **Henkilönumero (palkanlaskenta)**

Ilman numeroa työntekijä ohitetaan viennissä, ja näet siitä ilmoituksen tuloksissa.

### 5. Numeroi kirjauslajit ja kohdista ne

Netvisorissa tunnit kohdistuvat **kirjauslajeihin** niiden numerolla. Numero asetetaan Netvisorissa kohdassa **Palkat → Palkanlaskennan asetukset → Kirjauslajit** klikkaamalla kirjauslajin nimeä.

Kohdistus tehdään tyovuorolista.fi:n puolella:

1. Avaa **Asetukset → TES-apuri** → **Palkkalajikoodit**
2. Valitse jokaiselle riville (työtunnit, iltalisä, sunnuntailisä…) vastaava Netvisorin kirjauslaji — valintalista hakee kirjauslajit suoraan Netvisoristasi

<img src="/blogPostImages/netvisor-vienti/palkkalajikoodit-netvisor.png" alt="Palkkalajikoodit-näkymä, Netvisor-kirjauslajin valinta valintalistasta" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Ilman kohdistusta rivi jätetään viennistä pois, ja näet sen tuloksissa syyn kanssa.

## Vienti kuukausirutiinina

### 1. Valitse jakso ja työntekijät

Siirry **Hallinta → Tuntien kirjaus**. Valitse palkkajaksoa vastaava päivämääräväli ja työntekijät.

### 2. Lähetä Netvisoriin

Klikkaa **Luo palkkaraportti…** ja valitse muodoksi **Lähetä Netvisoriin**. Vienti käy työntekijät läpi yksi kerrallaan ja näyttää etenemisen. Lopuksi näet yhteenvedon: viedyt päivät, ohitetut rivit syineen ja mahdolliset virheet.

<img src="/blogPostImages/netvisor-vienti/vienti-tulokset.png" alt="Viennin tulokset: viedyt päivät ja ohitetut rivit työntekijöittäin" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

### 3. Hyväksy tunnit Netvisorissa

Tunnit näkyvät Netvisorissa kohdassa **Työaika → Työajan kirjaus** tilassa *kuitattu*, päivä- ja kirjauslajikohtaisina riveinä. Palkanlaskija hyväksyy ne normaaliin tapaansa, ja ne nousevat palkkalaskelmalle automaattisesti.

## Mitä viedään

Jokainen vienti lähettää päiväkohtaiset rivit:

- työtunnit ja sairauspoissaolotunnit
- ilta-, yö- ja sunnuntailisät sekä arkipyhä- ja aattokorvaukset
- TES-apuria käyttäville rivit ovat TES-tulkittuja; ilman TES-apuria lisät lasketaan tuntiasetustesi mukaan

Kaksi poikkeusta:

- **Jakson lisä- ja ylityökorotukset** eivät siirry automaattisesti vielä — ne lasketaan koko palkkajaksosta, ja näet määrät palkkaraportista käsin kirjattavaksi.
- Jos työntekijällä [lisät sisältyvät sopimuspalkkaan](/posts/sopimuspalkka_ilta_ja_yolisa), lisärivit jäävät pois myös Netvisor-viennistä.

## Voinko lähettää saman jakson uudelleen?

Voit. Vienti **korvaa** saman päivän aiemmat rivit, kunhan ne ovat Netvisorissa tilassa *avoin* tai *kuitattu* — eli korjattu lista on turvallista lähettää uudestaan. Jos päivän tunnit on jo *hyväksytty* tai *maksettu*, Netvisor ei anna korvata niitä, ja vienti kertoo tämän tuloksissa päiväkohtaisesti.

## Ero Procountor-vientiin

Procountor-vienti tuottaa CSV-tiedoston, joka luetaan sisään käsin. Netvisor-vienti ei tuota tiedostoa lainkaan: tunnit siirtyvät suoraan rajapintaa pitkin ja odottavat palkanlaskijaa Netvisorissa. Sama tuntidata, yksi askel vähemmän.

Jos jokin kohta jumiutuu (tunnukset, kirjauslajit, henkilönumerot), laita viestiä: **info@tyovuorolista.fi**.
