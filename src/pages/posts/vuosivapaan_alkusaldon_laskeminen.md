---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Vuosivapaan alkusaldo: näin lasket sen oikein käyttöönotossa'
pubDate: 2026-07-23
description: 'Kun otat TES-tuen käyttöön toimipaikassa, jossa työntekijöillä on jo työhistoriaa, vuosivapaan alkusaldo pitää laskea käsin kertaalleen. Vaihe vaiheelta -laskuesimerkki ja asiat, jotka kannattaa muistaa seuraavana vuonna.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tyotunnit-tyosopimuksessa/tyosuhde-tyotunnit.png'
    alt: 'Työntekijämodaalin Työsuhde-osio, jossa työtunnit työsopimuksessa ja TES-kentät.'
tags: ['TES', 'vuosivapaa', 'käyttöönotto', 'opas', 'ravintola-ala']
---

**Lyhyesti:** [Vuosivapaa](/posts/vuosivapaa_ravintola-alalla) kertyy
kalenterivuosittain toteutuneista työtunneista. Kun otat TES-tuen käyttöön
toimipaikassa, jossa työntekijät ovat tehneet töitä jo pitkään, sovellus ei
tiedä tätä vuotta edeltäviä eikä alkuvuoden tunteja — ne pitää tuoda mukaan
kertaalleen **Vuosivapaan alkusaldo (pv)** -kenttään, jotta kertymä jatkuu
oikeasta kohdasta sen sijaan, että se alkaisi virheellisesti nollasta.

## Mistä kentät löytyvät

Alkusaldo syötetään työntekijäkohtaisesti: **Hallinta → Työntekijät →
valitse työntekijä → Muokkaa → Työsuhde**-osio. Kun toimipaikan TES käyttää
vuosivapaajärjestelmää (MaRa, Kaupan ala), osiosta löytyy
työtuntikentän alta kaksi lisäkenttää:

- **Vuosivapaan alkusaldo (pv)** — kertynyt, vielä antamatta oleva
  vuosivapaapäivien määrä
- **Saldo laskettu** — päivämäärä, jolle alkusaldo pätee

<img src="/blogPostImages/tyotunnit-tyosopimuksessa/tyosuhde-tyotunnit.png" alt="Työsuhde-osio työntekijämodaalissa: työtunnit työsopimuksessa -kenttä, jonka alle vuosivapaan alkusaldo ja saldon päivämäärä sijoittuvat" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Kentät ovat henkilökohtaisia — jokaiselle työntekijälle lasketaan oma
alkusaldonsa erikseen, koska työhistoria ja jo annetut vapaat vaihtelevat
työntekijästä toiseen.

## Vaihe vaiheelta: näin lasket alkusaldon

1. **Valitse saldopäivä.** Käytännöllisin valinta on päivä, jolta
   viimeisin oma tuntitietosi on luotettava — usein tämä on "tänään", eli
   päivä jolloin otat TES-tuen käyttöön, tai viimeisimmän päättyneen
   palkkajakson loppupäivä.
2. **Hae toteutuneet työtunnit tältä kalenterivuodelta saldopäivään asti.**
   Vuosivapaa kertyy **toteutuneista**, ei suunnitelluista tunneista, ja
   aina 1.1. alkaen — hae luku omasta palkanlaskennastasi tai muusta
   seurannastasi.
3. **Muunna tunnit ansaituiksi päiviksi kertymäportaikolla.** Käytä sitä
   porrasta, joka on juuri **saavutettu** — älä pyöristä ylöspäin
   seuraavaan:

   | Toteutuneet työtunnit | Vuosivapaiden lukumäärä |
   | --- | --- |
   | 200 | 1 |
   | 400 | 2 |
   | 600 | 3 |
   | 800 | 4 |
   | 1000 | 5 |
   | 1200 | 6 |
   | 1400 | 7 |
   | 1540 | 8 |
   | 1640 | 9 |

   (MaRa-TES:n portaikko — muilla vuosivapaajärjestelmää käyttävillä
   TES:eillä kannattaa tarkistaa oma porrastus.)
4. **Vähennä tänä vuonna jo annetut vuosivapaat.** Katso vanhoista
   työvuorolistoistasi tai palkanlaskennastasi, montako vuosivapaapäivää
   työntekijä on **saanut pidettäväkseen** tämän kalenterivuoden aikana
   ennen saldopäivää, ja vähennä se edellisen kohdan tuloksesta.
5. **Syötä tulos alkusaldoksi.** Vaiheen 3 tulos miinus vaiheen 4 tulos on
   se, mitä kirjaat kenttään **Vuosivapaan alkusaldo (pv)** — ja vaiheen 1
   päivämäärä kenttään **Saldo laskettu**.

## Laskuesimerkki

Kokoaikainen työntekijä, ei karenssia. Otat TES-tuen käyttöön 15.7.2026.

- Toteutuneet työtunnit 1.1.–15.7.2026: **1050 h**
- Kertymäportaikolla saavutettu porras: **1000 h → 5 päivää** (1200 h eli
  6. päivä ei ole vielä täynnä)
- Tänä vuonna jo annettu: **2 vuosivapaapäivää**
- Alkusaldo: 5 − 2 = **3 päivää**

Kenttiin syötetään: Vuosivapaan alkusaldo = **3**, Saldo laskettu =
**15.7.2026**. Tästä eteenpäin sovellus laskee uudet ansaitut päivät
16.7.2026 alkaen toteutuneista, listalle merkityistä tunneista — sinun ei
tarvitse enää päivittää lukua käsin.

## Erikoistapauksia

- **Uusi työntekijä, karenssi kesken.** Vuosivapaata alkaa kertyä vasta
  kahden kuukauden työsuhteen jälkeen. Jos työsuhde on alkanut alle kaksi
  kuukautta ennen saldopäivää, alkusaldo on **0** — sovellus laskee
  karenssin itse jatkossa työsuhteen alkupäivän perusteella.
- **Vuodenvaihteen yli menevä käyttöönotto.** Kertymäportaikko ja
  9 päivän kalenterivuosikatto koskevat vain **kuluvaa** vuotta. Jos
  työntekijällä on **edellisenä vuonna** ansaittuja, vielä antamatta olevia
  vapaita — joiden antamiselle on aikaa seuraavan kalenterivuoden loppuun —
  pidä niistä kirjaa erikseen omassa seurannassasi. Alkusaldo-kenttä
  kuvaa kuluvan vuoden kertymää; se ei erottele, mihin vuoteen mikä
  antamatta oleva päivä liittyy, joten kahden eri vuoden saldoja ei
  kannata laskea suoraan yhteen samaan kenttään.
- **Etkä tiedä tarkkoja tunteja.** Jos tarkkaa tuntimäärää ei ole
  helposti saatavilla, käytä parasta arviotasi ja pyöristä mieluummin
  alaspäin — liian pieni alkusaldo korjaantuu itse muutaman viikon
  kuluessa uusista tunneista, liian suuri saldo taas voi näyttää
  virheellisesti liian suurta jäljellä olevaa vapaamäärää.

## Muista tämä seuraavana vuonna

Alkusaldo ja saldopäivä jäävät työntekijän tietoihin, kunnes ne
muutetaan. Kun käyttöönottovuosi on takana ja kalenterivuosi vaihtuu,
**tyhjennä alkusaldo-kenttä** (jätä se tyhjäksi) — muuten se lasketaan
mukaan yhä uudelleen myös tulevina vuosina, mikä vääristää kertymää
vuodesta toiseen. Tämä on helppo unohtaa, koska kenttä ei tyhjene
automaattisesti: se on hyvä lisätä oman vuodenvaihteen
muistilistalle, [TES-käyttöönoton](/posts/nain_otat_tes-tuen_kayttoon)
muiden vuosittaisten tarkistusten (esim. jaksorytmin ja palkkalajikoodien
tarkistus) yhteyteen.

## Näin sovellus käyttää alkusaldoa

Kun alkusaldo ja saldopäivä on syötetty, tyovuorolista.fi laskee
työntekijän jäljellä olevan vuosivapaasaldon jatkossa automaattisesti:
saldopäivän jälkeiset toteutuneet tunnit lisäävät uusia ansaittuja
päiviä, ja listalle merkityt vuosivapaapäivät vähentävät saldoa. Saldo
näkyy sekä Tuntien kirjaus -sivulla työnantajalle että
[Oma-portaalissa](/posts/oma_portaali_ohje) työntekijälle itselleen —
kertymä on siis kaikilla sama luku heti käyttöönotosta lähtien, eikä
kenenkään tarvitse laskea sitä uudelleen käsin.

---

*Lähteet: [MaRa-TES, vuosivapaajärjestelmä, 11 § (tes.mara.fi)](https://tes.mara.fi/matkailu-ravintola-ja-vapaa-ajan-palveluita-koskeva-tyontekijoiden-tyoehtosopimus/tyoaika.html), [PAM: Työajan lyhennykset](https://www.pam.fi/tyoelamaopas/tyoelamassa/tyoelamatietoa/tyoaika/tyoajan-lyhennykset/)*
