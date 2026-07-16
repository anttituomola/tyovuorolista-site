---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Vuosivapaan alkusaldo: näin asetat sen käyttöönotossa'
pubDate: 2026-07-23
description: 'Kun otat TES-tuen käyttöön toimipaikassa, jossa työntekijöillä on jo työhistoriaa, vuosivapaa-saldot asetetaan ohjatulla syötöllä: aloita nollasta, anna arvio päivissä tai syötä tarkat tunnit. Näin teet sen oikein.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tes-tuki/vuosivapaa-ohjattu-syotto.png'
    alt: 'Ohjattu vuosivapaan alkusaldon syöttö: arvio päivissä kuluvalle vuodelle.'
tags: ['TES', 'vuosivapaa', 'käyttöönotto', 'opas', 'ravintola-ala']
---

**Lyhyesti:** [Vuosivapaa](/posts/vuosivapaa_ravintola-alalla) kertyy
kalenterivuosittain toteutuneista työtunneista. Kun otat TES-tuen käyttöön
toimipaikassa, jossa työntekijät ovat tehneet töitä jo pitkään, sovellus ei
tiedä aiempia tunteja. Ne tuodaan mukaan kertaalleen, jotta kertymä jatkuu
oikeasta kohdasta eikä ala virheellisesti nollasta. Homma hoituu **ohjatulla
syötöllä**, jossa voit joko aloittaa nollasta, antaa karkean arvion päivissä
tai — jos data löytyy — syöttää tarkat tunnit.

## Mistä saldot asetetaan

Saldot löytyvät kahdesta paikasta, ja molemmat avaavat saman ohjatun näkymän:

- **Hallinta →**
  <a href="https://app.tyovuorolista.fi/admin/tes" target="_blank" rel="noopener noreferrer">Työehtosopimus</a>
  **→ Vuosivapaasaldot.** Tämä on suositeltu paikka käyttöönotossa: näet
  koko henkilöstön listana ja jokaisen työntekijän tilan yhdellä silmäyksellä
  (*Tarkistamatta* tai *OK*).
- **Hallinta → Työntekijät → valitse työntekijä → Muokkaa → Työsuhde →
  Muokkaa vuosivapaasaldoa.** Kätevä, kun korjaat yhtä työntekijää.

Kun avaat Vuosivapaasaldot ensimmäistä kertaa, sovellus kysyy vain yhden
kysymyksen: **onko työntekijöillä kertyneitä vuosivapaita jo ennestään?**
Jos ei ole (tai et ole varma), yksi klikkaus — *Ei, aloita kaikki
nollasta* — ja käyttöönotto on valmis: kertymä lähtee käyntiin tästä
päivästä eteenpäin. Saldoja voi aina täydentää myöhemmin työntekijän
tiedoista.

<img src="/blogPostImages/tes-tuki/vuosivapaasaldot-roster.png" alt="Vuosivapaasaldot-lista Työehtosopimus-sivulla: jokaisella työntekijällä tila ja saldo, ylhäällä Aloita loput nollasta -painike" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Jos osalla työntekijöistä on kertymää ja osalla ei, syötä saldot niille
joilla on, ja paina lopuksi **Aloita loput nollasta** — se vahvistaa
nollasaldon kerralla kaikille vielä tarkistamattomille.

## Ohjattu syöttö: kolme tapaa

Kun avaat työntekijän saldon, valitset kuluvalle vuodelle yhden kolmesta
tavasta. Oletuksena näytetään vain **kuluva vuosi** — aiemmat vuodet saat
esiin *Lisää aiempi vuosi* -painikkeella, jos siirtymää on.

<img src="/blogPostImages/tes-tuki/vuosivapaa-ohjattu-syotto.png" alt="Ohjattu vuosivapaan syöttö: valittuna Arvio päivissä, kentät Kertynyt vuosivapaa ja Vielä antamatta" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

### 1. Ei tietoa / aloitetaan nollasta

Valitse tämä, jos aiempaa kertymää ei tarvitse huomioida tai sitä ei ole
saatavilla. Saldo lähtee nollasta, ja sovellus laskee uudet vuosivapaat
toteutuneista tunneista tästä eteenpäin.

### 2. Arvio päivissä (suositeltu)

Tämä riittää useimmiten. Syötät kaksi lukua päivinä:

- **Kertynyt vuosivapaa (pv)** — suunnilleen montako vuosivapaapäivää on
  kertynyt tänä vuonna tähän mennessä
- **Vielä antamatta (pv)** — montako niistä on vielä pitämättä

Esimerkiksi "tälle on kertynyt tänä vuonna noin 6 päivää, joista 2 on vielä
antamatta". Sovellus muuntaa arviot tunneiksi puolestasi. Et voi vahingossa
antaa enempää kuin on kertynyt — jos vielä antamatta -luku on suurempi kuin
kertynyt, ohjelma huomauttaa eikä anna tallentaa.

### 3. Tarkat tunnit tiedossa

Käytä tätä vain, jos sinulla on tarkat kertymätunnit palkkaohjelmasta tai
aiemmasta järjestelmästä. Syötät:

- **Kertymätunnit saldopäivänä** — toteutuneet työtunnit, joihin
  kertymäportaikko perustuu
- **Käyttämättömät oikeustunnit (h)** — vielä antamatta oleva vuosivapaa
  tunteina

Tarkat tunnit pitävät kertymäportaikon oikeassa kohdassa: 1050 h ≠ 1200 h,
vaikka molemmat näyttäisivät "5 päivää ansaittuna", koska kuudes päivä täyttyy
vasta 1200 tunnissa.

## Laskuesimerkki (tarkat tunnit)

Kokoaikainen työntekijä, ei karenssia. Otat TES-tuen käyttöön 15.7.2026.

- Toteutuneet työtunnit 1.1.–15.7.2026: **1050 h**
- Kertymäportaikolla: **1000 h → 5 päivää** (1200 h / 6. päivä ei vielä täynnä)
- Tänä vuonna jo annettu: **2 vuosivapaapäivää**
- Vielä antamatta: 5 − 2 = 3 päivää → **22,5 h** (3 × 7,5 h)

Saldo laskettu **15.7.2026**, Kertymätunnit **1050**, Käyttämättömät
oikeustunnit **22,5**. Tästä eteenpäin sovellus laskee uudet ansaitut oikeudet
16.7.2026 alkaen toteutuneista tunneista.

MaRa-TES:n kertymäportaikko:

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

(Muilla vuosivapaajärjestelmää käyttävillä TES:eillä kannattaa tarkistaa oma
porrastus.)

## Erikoistapauksia

- **Uusi työntekijä, karenssi kesken.** Vuosivapaata alkaa kertyä vasta
  kahden kuukauden (MaRa) tai kuuden kuukauden (Kaupan/Kipa) työsuhteen
  jälkeen. Jos karenssi ei ole vielä täyttynyt, valitse *aloitetaan nollasta*.
- **Edelliseltä vuodelta siirtynyt vuosivapaa.** Avaa ohjattu syöttö, paina
  *Lisää aiempi vuosi* ja anna edellisen vuoden vielä antamatta olevat päivät.
  Sovellus näyttää siirtymän erikseen omalla määräpäivällään (MaRa: seuraavan
  vuoden loppuun; Kaupan/Kipa: pääsääntöisesti seuraavan huhtikuun loppuun).
- **Etkä tiedä tarkkoja lukuja.** Käytä *arvio päivissä* -tapaa ja pyöristä
  mieluummin alaspäin — liian pieni saldo korjaantuu uusista tunneista, liian
  suuri voi näyttää virheellisesti suuren jäljellä olevan määrän.

## Vuodenvaihteen jälkeen

Sinun **ei tarvitse tyhjentää** saldoa käsin uuden vuoden alussa. Jokainen
kertymävuosi vaikuttaa vain oman vuotensa kertymään, ja edellisen vuoden
antamatta jäänyt oikeus säilyy erillisenä siirtymänä, kunnes se on annettu tai
määräaika umpeutuu. Tarkista vuodenvaihteessa silti, että siirtymäsaldot ja
määräajat näyttävät oikeilta.

## Näin sovellus näyttää saldon

Tyovuorolista.fi erottaa toisistaan:

- **Kuluvan vuoden kertymä** (ansaitut päivät ja tunnit),
- **Käytettävissä oleva oikeus** (kaikki kertymävuodet yhteensä),
- **Käytetty** (jo pidetyt) ja **suunniteltu** (listalle merkityt tulevat)
  vuosivapaat erikseen.

Saldo näkyy Tuntien kirjaus -sivulla työnantajalle ja
[Oma-portaalissa](/posts/oma_portaali_ohje) työntekijälle. Näytetty
"kertynyt" tarkoittaa kuluvaa vuotta — se **ei** ole koko käytettävissä oleva
saldo, jos edelliseltä vuodelta on siirtymää.

---

*Lähteet: [MaRa-TES, vuosivapaajärjestelmä, 11 § (tes.mara.fi)](https://tes.mara.fi/matkailu-ravintola-ja-vapaa-ajan-palveluita-koskeva-tyontekijoiden-tyoehtosopimus/tyoaika.html), [PAM: Työajan lyhennykset](https://www.pam.fi/tyoelamaopas/tyoelamassa/tyoelamatietoa/tyoaika/tyoajan-lyhennykset/)*

*Huom: Tämä artikkeli kuvaa Työvuorolistan toimintaa eikä ole oikeudellista neuvontaa.*
