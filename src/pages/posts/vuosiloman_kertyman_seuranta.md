---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Vuosiloman kertymä: näin otat seurannan käyttöön'
pubDate: 2026-08-20
description: 'Näin otat vuosilomapäivien seurannan käyttöön: valitse työntekijän ansaintasääntö, syötä aiempi saldo ja tarkista kertyneet ja jäljellä olevat päivät.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/vuosiloman-kertyman-seuranta/hero.png'
    alt: 'Työntekijäkortin vuosilomapaneeli: 14 päivän sääntö, ansaittu 13 pv, pidetty 6 pv, jäljellä 21 pv.'
    layout: narrow
tags: ['TES', 'vuosiloma', 'käyttöönotto', 'opas', 'uudet ominaisuudet']
---

**Lyhyesti:** Kun toimipaikalle on
[valittu työehtosopimus](/posts/tes_n_valinta_tyovuorosuunnittelussa),
voit seurata työntekijöiden kertyneitä lomapäiviä. Valitse ensin
jokaiselle työntekijälle ansaintasääntö. Syötä aiempi saldo, jos
työsuhde alkoi ennen seurannan käyttöönottoa. Tämän jälkeen näet
ansaitut, pidetyt ja jäljellä olevat päivät työntekijäkortilta.

Sovellus seuraa lomapäiviä, mutta ei laske lomapalkkaa, lomakorvausta
eikä lomarahaa. Rahamäärät lasketaan palkanlaskennassa. Seuranta on
esihenkilön suunnittelutyökalu, eikä saldo näy
[Oma-portaalissa](/posts/oma_portaali_ohje).

## Edellytykset

1. Toimipaikalle on valittu TES: MaRa, Kaupan ala, KipaTES tai SOSTES.
   Ilman TES-valintaa voit merkitä lomat listalle, mutta sovellus ei
   laske niiden kertymää.
2. Työntekijälle on valittu
   [työsuhteen tyyppi](/posts/tyontekijan_tes_tiedot), eli kokoaikainen
   tai osa-aikainen.
3. Työsuhteen alkupäivä on täytetty. Sovellus tarvitsee sitä kertymän
   laskemiseen.

TES-apurin muut asetukset käydään läpi ohjeessa
[Näin otat TES-tuen käyttöön](/posts/nain_otat_tes-tuen_kayttoon).

## 1. Valitse ansaintasääntö

Avaa **Hallinta → Työntekijät**, valitse työntekijä ja paina
**Muokkaa**. Avaa **Työsuhde**-osio. Valinta **Vuosiloman
ansaintasääntö** löytyy TES-tietojen alta.

Sääntö määräytyy työsopimuksen perusteella. Jos työajasta ei ole
sovittu, ratkaisevaa on vakiintunut työaika. Yksittäisen kuukauden
toteutuneet tunnit eivät määrää sääntöä. Jos et ole varma oikeasta
valinnasta, tarkista se palkanlaskijalta.

<img src="/blogPostImages/vuosiloman-kertyman-seuranta/saanto-valikko.png" alt="Työntekijän muokkaus: Vuosiloman ansaintasääntö -valikko auki, vaihtoehtoina Ei valittu, 14 päivän sääntö, 35 tunnin sääntö, Vapaajärjestelmä ja Ei seurata" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Neljä vaihtoehtoa:

- **14 päivän sääntö:** Työsopimuksen mukaan työntekijä työskentelee
  vähintään 14 päivänä joka kuukausi. Tämä on tavallinen valinta
  kokoaikaiselle työntekijälle.
- **35 tunnin sääntö:** 14 päivän sääntö ei täyty kaikkina kuukausina.
  Kuukausi kerryttää lomaa, jos työtunteja kertyy vähintään 35.
- **Vapaajärjestelmä:** Työsopimuksen mukainen työaika ei täytä
  kumpaakaan rajaa. Tämä voi koskea esimerkiksi extratyöntekijää.
- **Ei seurata:** Työntekijän vuosilomapäiviä ei lasketa sovelluksessa.
  Valinta sopii esimerkiksi yrittäjälle.

Sovellus ehdottaa sääntöä työsuhteen tyypin perusteella. Ehdotus ei
tallennu ennen kuin vahvistat valinnan. Jos sääntöä ei ole valittu,
sovellus ei näytä lomasaldoa.

Jos työsopimus muuttuu kesken vuoden, valitse uusi sääntö ja täytä
**Sääntö voimassa alkaen**. Sovellus säilyttää aiemman säännön
edellisen kuukauden loppuun asti.

<img src="/blogPostImages/vuosiloman-kertyman-seuranta/saanto-ja-alkusaldo.png" alt="Työsuhde-osion vuosilomakentät: 14 päivän sääntö valittuna, voimassa 1.3.2023 alkaen, ja alkusaldo LMV 2025–26: 14 pv käyttämättä" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

## 2. Syötä aiempi lomasaldo

Lomanmääräytymisvuosi alkaa 1.4. ja päättyy 31.3. Sovelluksessa siitä
käytetään lyhennettä **LMV**.

Jos työsuhde alkoi kuluvan lomanmääräytymisvuoden aikana, aiempaa
saldoa ei tarvita. Sovellus laskee kertymän järjestelmään merkityistä
työvuoroista.

Jos työsuhde alkoi aiemmin, syötä edellisen lomanmääräytymisvuoden
käyttämättömät lomapäivät. Ilman tätä tietoa sovellus ei voi laskea
jäljellä olevien päivien määrää. Paina **Syötä vuosiloman alkusaldo**.

<img src="/blogPostImages/vuosiloman-kertyman-seuranta/alkusaldo-wizard.png" alt="Vuosiloman alkusaldo -ikkuna: LMV 2025–26, käyttämättömät päivät 14, ansaittu 30, saldo laskettu 31.3.2026" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Täytä ainakin **Käyttämättömät päivät**. Merkitse 0, jos päiviä ei
ollut jäljellä. **Ansaittu** on vapaaehtoinen tieto. Saldopäivä on
yleensä 31.3.

Tarkista saldo palkkaohjelmasta tai edellisen vuoden lomalaskelmasta.
Älä arvioi lukua, jos oikea saldo on saatavilla. Virheellinen
alkusaldo ei korjaannu myöhemmästä kertymästä.

Uusi lomanmääräytymisvuosi alkaa 1.4. Sovellus muistuttaa silloin
syöttämään edellisen vuoden käyttämättömät päivät.

## 3. Lue saldo työntekijäkortilta

Avaa **Hallinta → Tuntien kirjaus** ja valitse työntekijä. Saldo näkyy
työntekijäkortin **Vuosiloma**-osiossa. Kortilla voi näkyä myös
[vuosivapaa](/posts/vuosivapaa_ravintola-alalla). Vuosiloma ja
vuosivapaa ovat eri asioita.

<img src="/blogPostImages/vuosiloman-kertyman-seuranta/kortti-kertymä.png" alt="Vuosiloma-paneeli: 14 päivän sääntö, ansaittu LMV 2026–27 13 pv, pidetty 6 pv, jäljellä 21 pv" width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

Kortilla näkyy kolme lukua:

- **Ansaittu LMV 2026–27:** Kuluvan lomanmääräytymisvuoden aikana
  ansaitut päivät. Ne pidetään tavallisesti vasta seuraavalla
  lomakaudella.
- **Pidetty LMV 2025–26:n oikeudesta:** Edellisen
  lomanmääräytymisvuoden saldosta pidetyt päivät.
- **Jäljellä:** Kaikkien seurattujen vuosien yhteissaldo. Kuvan
  esimerkissä alkusaldo on 14 päivää, lomaa on pidetty 6 päivää ja
  uutta lomaa on kertynyt 13 päivää. Jäljellä on siis 21 päivää.

Muissa kuin SOSTES-toimipaikoissa lomaa kertyy 2 päivää kuukaudessa,
jos työsuhde on lomanmääräytymisvuoden loppuun mennessä kestänyt alle
vuoden. Muussa tapauksessa lomaa kertyy 2,5 päivää kuukaudessa.
Puolikas päivä pyöristetään lopuksi ylöspäin.

Jos sääntöä ei ole valittu, kortti pyytää tekemään valinnan:

<img src="/blogPostImages/vuosiloman-kertyman-seuranta/kortti-saanto-valitsematta.png" alt="Vuosiloma-paneeli tilassa Sääntö valitsematta ja painike Aseta vuosilomasääntö" width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

## 4. Extratyöntekijän vapaajärjestelmä

Jos työsopimuksen mukainen työaika ei täytä 14 päivän eikä 35 tunnin
sääntöä, valitse **Vapaajärjestelmä**. Työntekijälle ei kerry
palkallista vuosilomaa. Hänellä on kuitenkin oikeus kahteen
palkattomaan arkipäivään jokaiselta työsuhteen
voimassaolokuukaudelta. Myös vajaa kuukausi lasketaan mukaan.
Lomakorvaus maksetaan palkanmaksun yhteydessä.

<img src="/blogPostImages/vuosiloman-kertyman-seuranta/kortti-vapaajarjestelma.png" alt="Vapaajärjestelmä-paneeli: palkatonta vapaata 2 arkipäivää kuukaudessa, vapaaoikeus työsuhteen ajalta 16 pv" width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

Sovellus näyttää vapaapäivät, mutta ei laske lomakorvauksen rahamäärää.
Jos extratyöntekijän työaika vakiintuu, tarkista, pitääkö
ansaintasääntö vaihtaa. Merkitse myös uuden säännön alkamispäivä.

## 5. Lomaraportti

Lomaraportti löytyy sivun **Hallinta → Lomasuunnittelu** alaosasta.
TES-toimipaikalla taulukko näyttää valitun lomanmääräytymisvuoden
**Ansaitun oikeuden**.

**Pidetty**-sarakkeessa lomapäivät lasketaan vuosilomalain
arkipäivinä. Lauantai lasketaan tavallisesti lomapäiväksi. Sunnuntaita,
pyhäpäiviä, jouluaattoa, juhannusaattoa, pääsiäislauantaita, vappua ja
itsenäisyyspäivää ei lasketa.

Ansaittu oikeus ja pidetyt päivät koskevat tavallisesti eri
lomanmääräytymisvuosia. Älä siis vähennä saman rivin pidettyjä päiviä
ansaitusta oikeudesta.

<img src="/blogPostImages/vuosiloman-kertyman-seuranta/lomaraportti.png" alt="Lomaraportti: Emma Virtasella 6 pidettyä arkipäivää ja 13 päivää ansaittua oikeutta. Sofialla 10 päivää ansaittua oikeutta. Jussilla ja Ainolla ansaittu oikeus on viiva." width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Lomien merkitseminen listalle toimii kuten ennen. Katso tarvittaessa
ohjeet [vuosiloman merkitsemiseen](/posts/vuosiloman_merkkaaminen_tyovuorolistaan)
ja [lomasuunnitteluun](/posts/lomasuunnittelu).

## Mitä tämä ei tee

- Sovellus ei laske lomapalkkaa, lomakorvausta tai lomarahaa euroina.
- Työntekijä ei näe lomasaldoa Oma-portaalissa.
- Sovellus ei tarkista loman ajankohtaa, yhdenjaksoisuutta tai
  ilmoitusaikoja.
- Perhevapaille ja lomautuksille ei ole omia merkintätyyppejä.
  Sovellus ei laske niiden vaikutusta kertymään automaattisesti.

SOSTES-toimipaikoilla sovellus käyttää sopimuksen omia
kertymätaulukoita ja viisipäiväistä lomaviikkoa. Työntekijälle
valitaan silti 14 päivän sääntö, 35 tunnin sääntö tai
vapaajärjestelmä.

## Lue myös

- [Lomapäivien kertyminen: 14 päivän ja 35 tunnin säännöt](/posts/lomapaivien_kertyminen_14_paivan_ja_35_tunnin_saannot)
- [Extratyöntekijän vuosiloma ja lomakorvaus](/posts/extratyontekijan_vuosiloma_ja_lomakorvaus)
- [Vuosivapaa vai vuosiloma: mikä ero?](/posts/vuosivapaa_vs_vuosiloma)

---

*Lähteet: [vuosilomalaki 162/2005](https://finlex.fi/fi/lainsaadanto/2005/162) (erityisesti 4–8 §, 14 § ja 29 §), [Työsuojeluhallinto: Vuosiloma](https://tyosuojelu.fi/tyosuhde/vuosiloma).*

*Huom: Tämä artikkeli kuvaa Työvuorolistan toimintaa eikä ole oikeudellista neuvontaa. Työsopimus ja TES ratkaisevat, mikä ansaintasääntö ketäkin koskee.*
