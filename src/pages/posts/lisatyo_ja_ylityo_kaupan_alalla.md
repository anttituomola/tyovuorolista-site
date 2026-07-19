---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Lisätyö ja ylityö kaupan alalla'
pubDate: 2026-07-22
description: 'Kaupan TES: korotettu palkka +50 % yli 10 tunnin päivästä tai yli 37,5 tunnin viikosta, logistiikassa +100 % yli 12 tunnin päivästä. Osa-aikaisen lisätyö on oma lukunsa.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/kaupan-tes/kaupan-huomautukset-paneeli.png'
    alt: 'TES-huomautuspaneeli: viikon tunnit 42 h ylittävät säännöllisen enimmäismäärän 37,5 h.'
tags: ['TES', 'kaupan ala', 'lisätyö', 'ylityö', 'palkanlaskenta']
---

**Lyhyesti:** Kaupan alalla korotettu palkka lasketaan kahdella
rinnakkaisella rajalla: **+50 % palkka maksetaan yli 10 tunnin
työpäivästä TAI yli 37,5 tunnin viikosta** (TES 12 § 6).
Logistiikkatyöntekijällä on lisäksi oma porras: 10 tunnin jälkeen
+50 % ja **12 tunnin jälkeen +100 %** (12 § 7). Osa-aikaisella
työntekijällä sovittujen tuntien ja 37,5 tunnin väli on
yksinkertaisella palkalla korvattavaa lisätyötä.

Sama aihe ravintola-alan säännöillä:
[Lisätyö ja ylityö ravintola-alalla](/posts/lisatyo_ja_ylityo_ravintola-alalla).

## Käsitteet: lisätyö, ylityö ja korotettu palkka

Kaupan TES käyttää kolmea käsitettä (12 §):

- **Lisätyö** on sovitun työajan lisäksi tehtyä työtä enintään
  40 tuntiin viikossa saakka.
- **Ylityö** on 40 tuntia viikossa ylittävää työtä (työaikalain raja).
- **Korotettu palkka** on se, mikä palkkalaskelmalla lopulta näkyy:
  +50 % kaikesta yli 10 h/pv tai yli 37,5 h/vk tehdystä työstä.

Käytännön palkanlaskennassa ratkaiseva raja on siis **37,5 tuntia
viikossa** (ja 10 tuntia päivässä) — ei työaikalain 40 tuntia.

## Kokoaikainen: esimerkki 42 tunnin viikosta

Kokoaikainen myyjä tekee kuutena päivänä yhteensä 42 tuntia, ei yhtään
yli 10 tunnin päivää:

| Tunnit | Korvaus |
|---|---|
| 37,5 h | yksinkertainen palkka |
| 4,5 h | +50 % |

Jos samalla viikolla olisi ollut yksi 12 tunnin päivä, siitä olisi
erotettu ensin 2 tuntia päiväkohtaista +50 % -työtä, ja vasta loput
tunnit olisi verrattu viikkorajaan — samat tunnit eivät koskaan
korotu kahdesti.

Viikon työaikaan lasketaan myös viikon aikana annettu **vuosivapaa**
(12 § 6) — vuosivapaapäivä ei siis siirrä korotusrajaa kauemmas.

## Osa-aikainen: sovitut tunnit ratkaisevat

Osa-aikaisen työntekijän sopimustuntien ja 37,5 tunnin väli on
**lisätyötä, joka korvataan yksinkertaisella palkalla**. Vasta 37,5
tunnin viikkorajan (tai 10 tunnin päivärajan) ylitys tuo korotuksen.

Esimerkki: sopimuksessa 30 h/viikko, toteuma 40 h, ei pitkiä päiviä:

| Tunnit | Korvaus |
|---|---|
| 30 h | yksinkertainen palkka (sopimustunnit) |
| 7,5 h | yksinkertainen palkka (lisätyö) |
| 2,5 h | +50 % |

Siksi [työsopimuksen tuntimäärän kirjaaminen
sovellukseen](/posts/tyotunnit_tyosopimuksessa) kannattaa: ilman sitä
osa-aikaisen lisätyöraja ei ole laskettavissa.

## Logistiikkatyöntekijän 12 tunnin porras

Logistiikkatyöntekijälle maksetaan vuorokaudessa 10 tunnin jälkeen
+50 % ja **12 tunnin jälkeen +100 %** korotettu palkka (12 § 7).
Esimerkiksi 13 tunnin päivästä: 10 h yksinkertaisena, 2 h +50 % ja
1 h +100 %. Myymälätyöntekijällä vastaavasta päivästä kaikki 3
ylimenevää tuntia olisivat +50 %.

Tämän takia sovelluksessa työntekijälle valitaan työntekijäryhmä
(myyjä / logistiikka / toimihenkilö / siivooja) — sama tuntimäärä voi
luokittua eri tavalla eri ryhmissä.

## Tasoittumisjaksossa lasketaan jakson lopussa

Jos käytössä on tasoittumisjärjestelmä, yli 10 tunnin päivät korvataan
heti ja loput tunnit verrataan jakson lopussa viikkojen
enimmäistyöaikaan (viikot × 37,5 h). Erotuksesta maksetaan +50 %
(12 § 9).

## Sovellus laskee rajat puolestasi

TES-tuki vertaa suunniteltuja ja toteutuneita tunteja sekä päivä- että
viikkorajaan, huomioi työntekijäryhmän ja sopimustunnit, ja varoittaa
jo suunnitteluvaiheessa, kun viikko on kasvamassa yli 37,5 tunnin:

<img src="/blogPostImages/kaupan-tes/kaupan-huomautukset-paneeli.png" alt="TES-huomautukset: 42 tunnin viikko ylittää 37,5 tunnin enimmäismäärän, 9 työvuoroa ilman vapaapäivää" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Palkkaraporteissa tunnit jaotellaan valmiiksi: työtunnit, lisätyö,
ylityö +50 % ja +100 % omille riveilleen, palkkalajikoodit
mapattavissa omaan palkanlaskentaan. Varoitukset eivät estä
tallentamista — paikallinen sopiminen on kaupan alalla laajaa, ja
sovellus jättää tulkinnan sinulle.

TES-tuki on beta-vaiheessa ja aktivoidaan erikseen — laita viesti
(info@tyovuorolista.fi) niin laitan sen päälle.
