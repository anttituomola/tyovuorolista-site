---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Näin otat TES-tuen käyttöön — opas nykyisille käyttäjille'
pubDate: 2026-07-19
description: 'TES-tuki on pilottivaiheessa ja avataan pyynnöstä. Tämä opas käy läpi käyttöönoton vaihe vaiheelta nykyiselle tyovuorolista.fi-käyttäjälle: TES-valinta, jaksorytmi, työntekijätiedot, palkkalajikoodit — ja miten saat ominaisuudesta eniten irti.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tes-tuki/tes-asetukset.png'
    alt: 'Työehtosopimusasetukset: TES-valinta ja kolmiviikkoisjakson alkupäivä.'
tags: ['TES', 'MaRa', 'käyttöönotto', 'opas', 'uudet ominaisuudet']
---

**Lyhyesti:** [TES-tuen](/posts/tes_tuki_tyovuorosuunnittelussa)
käyttöönotto vie nykyiseltä käyttäjältä noin vartin: pyydä ominaisuus
käyttöön, valitse työehtosopimus ja jaksorytmi, täydennä
työntekijöiden tiedot ja jatka suunnittelua kuten ennenkin. Suurin hyöty
tulee, kun ensimmäisen kokonaisen jakson tuntierittelyä verrataan omaan
palkanlaskentaan.

## Vaihe 1: Pyydä ominaisuus käyttöön

TES-tuki on pilottivaiheessa, ja laitan sen päälle toimipaikoille
pyynnöstä. Lähetä viesti osoitteeseen
[info@tyovuorolista.fi](mailto:info@tyovuorolista.fi) — viesti tulee
suoraan minulle, ja ominaisuus on käytössäsi yleensä saman päivän
aikana. Mikään ei muutu ennen kuin teet seuraavan vaiheen valinnat, joten
aktivointi on riskitön.

## Vaihe 2: Valitse TES ja jaksorytmi

Kun ominaisuus on päällä, avaa **Hallinta →**
<a href="https://app.tyovuorolista.fi/admin/tes" target="_blank" rel="noopener noreferrer">Työehtosopimus</a>.
Valitse
sopimuksesi (MaRa on pilotissa pisimmällä) ja aseta
[kolmiviikkoisjakson](/posts/kolmiviikkoisjakso_ravintola-alalla)
alkumaanantai:

<img src="/blogPostImages/tes-tuki/tes-asetukset.png" alt="TES-asetukset: MaRa valittuna ja jakson alkumaanantai asetettuna, alla tulevien jaksojen esikatselu" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Sovellus ehdottaa maanantaita olemassa olevien listojesi perusteella.
Tarkista **Seuraavat jaksot** -esikatselusta, että rytmi vastaa sitä,
miten jaksot teillä oikeasti kulkevat — koko lisä- ja ylityölaskenta
nojaa tähän. Jos ette käytä palkanlaskennassa jaksoja vaan olette
sopineet paikallisesti toisin, kirjaa poikkeamat samalta sivulta
(**Paikalliset sopimukset** — jokainen poikkeama vaatii perustelun, joka
jää muutoshistoriaan).

## Vaihe 3: Täydennä työntekijöiden tiedot

TES-laskenta tarvitsee jokaiselta työntekijältä **työsuhteen tyypin**
(kokoaikainen / osa-aikainen) ja osa-aikaisilta
[työsopimuksen tuntimäärän](/posts/tyotunnit_tyosopimuksessa).
Työehtosopimus-sivun tarkistuslista näyttää suoraan, keneltä tietoja
puuttuu — riviä klikkaamalla pääset täydentämään:

<img src="/blogPostImages/tes-tuki/tyontekijoiden-tarkistuslista.png" alt="Tarkistuslista: yhdeltä työntekijältä puuttuu työsuhteen tyyppi; alla palkkalajikoodien asetukset" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Kaksi asiaa kannattaa täydentää samalla:

- **Vuosivapaan alkusaldo**: jos työntekijöille on kertynyt
  [vuosivapaita](/posts/vuosivapaa_ravintola-alalla) jo ennen tätä,
  syötä kertyneet, vielä antamatta olevat päivät työntekijän
  Työsuhde-osioon (Vuosivapaan alkusaldo + saldon päivämäärä) —
  kertymä jatkuu siitä mihin se jäi
- **Palkkalajikoodit**: jos viet raportit palkanlaskentaan, lisää
  uusille riveille palkkalajikoodit samalta sivulta. Ilman koodia rivi
  jätetään Procountor-viennistä pois, joten puuttuvat koodit näkyvät
  sivulla selvästi.

Procountorissa palkkalajit ovat kiinteitä nelinumeroisia koodeja
([virallinen lista](https://help.procountor.fi/fi/articles/531621-palkkalajirekisteri)).
TES-riveille löytyvät suoraan sopivat palkkalajit — MaRa:n V- ja
X-päivätyölle on jopa omat koodinsa:

| Rivi sovelluksessa | Procountor-koodi | Procountorin palkkalaji |
| --- | --- | --- |
| Työtunnit | 1004 | Tuntipalkka |
| Lisätyö | 1201 | Lisätyökorvaus (tunteina) |
| Ylityö 50 % | 1230 / 1232 | Ylityö, vrk / vko 50 % |
| Ylityö 100 % | 1231 / 1233 | Ylityö, vrk / vko 100 % |
| V-päivätyökorvaus (+100 %) | 1239 | V-ylityö 100 % |
| X/VV-päivätyökorvaus (+50 %) | 1238 | X-ylityö 50 % |
| Sunnuntailisä | 1410 | Sunnuntaityökorvaus |
| Iltavuorolisä | 1447 | Iltavuorolisä |
| Yövuorolisä | 1448 | Yövuorolisä |
| Iltalisä su/pyhä (2×) | 1450 | Sunnuntai-iltavuorolisä |
| Yölisä su/pyhä (2×) | 1451 | Sunnuntaiyövuorolisä |
| Aattolisä (+50 %) | 1492 | Aattotyö 50 % |
| Vuosivapaa | 2340 | Arkipyhäkorvaus |

Tarkista silti mappaus palkanlaskijaltasi ennen ensimmäistä vientiä —
erityisesti ylityörivien osalta, sillä osa palkanlaskennoista käyttää
perusosa + korotusosa -mallia (perusosa 1220 erikseen) ja osa
yhdistettyä palkkalajia. Sovelluksen rivit sisältävät tuntimäärät
kategorioittain, joten kumpikin malli on mahdollinen.

## Vaihe 4: Kohdista listat jaksoihin

Varoitukset toimivat heti, olivat listasi minkä mittaisia tahansa. Sen
sijaan **lisä- ja ylityöerittely lasketaan vain kokonaisilta
kolmiviikkoisjaksoilta** — siksi uudet listat kannattaa tästä eteenpäin
tehdä jakson rajoille (21 päivää, maanantaista sunnuntaihin). Uusi
lista ehdottaa jakson rajoja automaattisesti, kun TES on valittu.
Vanhoja listoja ei tarvitse muuttaa.

## Vaihe 5: Suunnittele kuten ennenkin — ja lue varoitukset

Tästä eteenpäin kalenteri tarkistaa vuorot suunnitellessasi:
lepoajat, vuorojen pituudet, vapaapäivät, jakson tuntirajat ja
[listan julkaisun määräajan](/posts/koska_tyovuorolista_pitaa_julkaista).
Punainen on lakiasia, oranssi TES-asia, sininen huomio — eikä mikään
niistä koskaan estä tallentamista.

<img src="/blogPostImages/tes-tuki/tes-huomautukset-paneeli.png" alt="TES-huomautukset-paneeli kertoo työntekijäkohtaisesti, mistä säännöstä varoitus tulee" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Tuntien kirjaus -sivulle ilmestyy jaksojen pikavalinta, ja työntekijän
kortti erittelee
[lisä- ja ylityöt](/posts/lisatyo_ja_ylityo_ravintola-alalla),
[kahdennetut sunnuntailisät](/posts/sunnuntailisa_ravintola-alalla) ja
vuosivapaasaldon automaattisesti.

## Näin saat eniten irti pilotista

1. **Aja rinnakkain yksi kokonainen jakso.** Vertaa sovelluksen
   tuntierittelyä palkanlaskentasi omaan laskentaan ensimmäisen täyden
   kolmiviikkoisjakson jälkeen. Jos yksikin luku eroaa, kerro minulle —
   jokainen ero selvitetään juurta myöten.
2. **Kerro työntekijöille.** [Oma-portaalissa](/posts/oma_portaali_ohje)
   työntekijä näkee oman jaksosaldonsa ja vuosivapaansa — kysymykset
   vähenevät, kun tieto on kaikilla sama.
3. **Anna palautetta suoraan.** Puuttuva sääntö, väärältä tuntuva
   varoitus tai turha hälytys — kaikki palaute menee suoraan minulle ja
   vaikuttaa siihen, mitä rakennan seuraavaksi.

TES-apuri seuraa näitä säädöksiä puolestasi joka päivä tästä eteenpäin —
mutta sinä tunnet työpaikkasi. Varoitukset ovat apuväline, päätökset
ovat sinun. Tervetuloa pilottiin:
[info@tyovuorolista.fi](mailto:info@tyovuorolista.fi).
