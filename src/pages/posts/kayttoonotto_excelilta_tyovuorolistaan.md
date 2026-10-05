---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Exceliltä Työvuorolistaan: käyttöönotto vaihe vaiheelta'
metaTitle: 'Käyttöönotto: Exceliltä Työvuorolistaan'
pubDate: 2026-10-05
description: 'Käyttöönotto-opas Excelistä siirtyvälle: mitä tietoja tarvitaan, työntekijät, TES ja jaksot, saldot, ensimmäinen lista, tuntien kirjaus ja palkkaraportti.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tes-tuki/tes-asetukset.png'
    alt: 'Työehtosopimusasetukset: MaRa valittuna, kolmiviikkoisjakson alkumaanantai ja tulevien jaksojen esikatselu.'
tags: ['käyttöönotto', 'aloittaminen', 'opas', 'excel', 'tuntien kirjaus', 'TES']
---

**Lyhyesti:** Tämä opas on tarkoitettu esihenkilölle, joka on tähän asti
tehnyt vuorot, tunnit ja tasoitukset Excelissä. Opas käy läpi asetukset
siinä järjestyksessä, jossa ne kannattaa tehdä. Esimerkkinä on MaRa-TES.
Samat vaiheet sopivat myös Kaupan alalle, KipaTES:iin ja SOSTES:iin.

Videolla sama polku lyhyesti:

<video controls muted playsinline preload="metadata" poster="/videos/kayttoonotto-poster.jpg" style="width: 100%; max-width: 900px; aspect-ratio: 16 / 9; display: block; margin: 20px auto;">
  <source src="/videos/kayttoonotto.mp4" type="video/mp4">
  Selaimesi ei tue video-elementtiä.
</video>

Voimme käydä käyttöönoton läpi myös yhdessä etäpalaverissa. Kirjoita
osoitteeseen [info@tyovuorolista.fi](mailto:info@tyovuorolista.fi), niin
sovitaan aika.

## 0. Kerää tarvittavat tiedot

### Työntekijät

Tarvitset jokaisesta työntekijästä nimen, sähköpostiosoitteen ja
puhelinnumeron. Sähköpostiin työntekijä saa oman työvuorolistansa.
Puhelinnumeroon sovellus lähettää tekstiviestin, kun haet
[sijaista](/posts/sijaisen_haku) esimerkiksi sairastuneen työntekijän
tilalle.

Kirjaa lisäksi jokaisesta:

- onko hän kokoaikainen vai osa-aikainen
- osa-aikaisen [sopimustunnit](/posts/tyotunnit_tyosopimuksessa)
- työsuhteen alkupäivä

### Toteutuneet vuorot taaksepäin

Sovellus laskee vuosilomat, vuosivapaat ja tasoittumisen toteutuneista
vuoroista. Siksi vuorot tarvitaan myös ajalta ennen käyttöönottoa:

- **Vähintään kuluvan vuoden alusta (1.1.).** Vuosivapaa kertyy
  kalenterivuoden aikana tehdyistä tunneista.
- **Tammi–maaliskuussa edellisen vuoden 1.4. alkaen.** Vuosiloma kertyy
  lomanmääräytymisvuoden aikana, ja se alkaa aina 1.4.
- **Tasoittumiskauden alusta**, jos teillä on
  [tasoittumisjärjestelmä](/posts/tasoittumisjarjestelma_ravintola-alalla)
  ja kausi alkoi aiemmin kuin edellä mainitut päivät.

Vuoroista tarvitaan päivä, alkamis- ja päättymisaika sekä merkinnät
lomista, sairauspoissaoloista ja vapaapäivistä (V, X, VV, TS).

### Saldot, joita vuoroista ei voi laskea

Osa saldoista on syntynyt ennen sitä aikaa, jonka vuorot kattavat. Ne
täytyy ottaa palkanlaskennasta tai edellisestä lomalaskelmasta:

- **Pitämättömät vuosilomapäivät** edelliseltä lomanmääräytymisvuodelta
  (tilanne 31.3.)
- **Antamatta olevat vuosivapaat** edelliseltä vuodelta
- **Työaikapankin saldo**, jos teillä on
  [työaikapankki](/posts/tyoaikapankki)

Vaikka vuoroja olisi pitkältä ajalta, näitä lukuja ei kannata päätellä
niistä. Pitämättömään lomaan vaikuttavat esimerkiksi aiemmilta vuosilta
siirtyneet lomat ja sovitut poikkeukset, joita vuorolistassa ei näy.
Oikea luku löytyy palkanlaskennasta.

**Siirrän vuorot ja saldot puolestasi veloituksetta.** Lähetä tiedot
osoitteeseen [info@tyovuorolista.fi](mailto:info@tyovuorolista.fi), niin
sovitaan aikataulu. Jos teet siirron itse, saldot syötetään vaiheessa 4.

## 1. Luo tili

Luo tili osoitteessa
[app.tyovuorolista.fi/register](https://app.tyovuorolista.fi/register).
Ensimmäiset kaksi viikkoa tilillä on automaattisesti ilmainen
kokeilutilaus. Sen aikana voit lisätä kaikki työntekijät ja käyttää
maksullisten pakettien ominaisuuksia.

Kokeilun jälkeen tili siirtyy ilmaiseen Mini-pakettiin, jossa voi olla
enintään kolme työntekijää. Jos työntekijöitä on enemmän, valitse
maksullinen paketti [Tilaus-sivulla](https://app.tyovuorolista.fi/admin/subscription).
Esimerkiksi Normi-pakettiin mahtuu 20 työntekijää.
[Hinnat](/hinnoittelu).

**Jos kokeilit sovellusta aiemmin samalla tilillä, poista testivuorot.**
Muuten ne sekoittavat tunnit ja saldot, kun oikeat vuorot ja historia
tulevat samoille päiville. Helpoin tapa on poistaa koko testilista
[Työvuorolistat-sivulla](https://app.tyovuorolista.fi/admin/lists).
Lista ja kaikki sen vuorot poistuvat kerralla.

## 2. Tuo työntekijät Excelistä

Avaa [Työntekijät-sivu](https://app.tyovuorolista.fi/admin/workers) ja
paina **Tuo työntekijät**.

1. Kopioi Excelistä sarakkeet, joissa ovat nimet, sähköpostit ja
   puhelinnumerot.
2. Liitä ne tekstikenttään ja paina **Jäsennä lista**.
3. Tarkista taulukko ja korjaa virheet.
4. Paina **Tuo X työntekijää**.

<img src="/blogPostImages/tyontekijoiden_hallinta/tuo_tyontekijat_tarkistus.png" alt="Tuonnin tarkistustaulukko: etunimi, sukunimi ja sähköposti" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Lisää ohjeita: [Työntekijöiden hallinta](/posts/tyontekijoiden_hallinta).

## 3. Valitse työehtosopimus ja jaksot

Avaa [Työehtosopimus-sivu](https://app.tyovuorolista.fi/admin/tes).

1. Valitse työehtosopimus.
2. Valitse päivä, jona nykyinen
   [kolmiviikkoisjakso](/posts/kolmiviikkoisjakso_ravintola-alalla)
   alkoi. Päivä on aina maanantai.
3. Tarkista **Seuraavat jaksot** -kohdasta, että jaksot alkavat samoina
   päivinä kuin teillä.
4. Jos teillä on tasoittumisjärjestelmä, ota se käyttöön samalla sivulla
   ja valitse kauden pituus ja ensimmäinen jakso.

<img src="/blogPostImages/tes-tuki/tes-asetukset.png" alt="TES-asetukset: MaRa valittuna ja jakson alkumaanantai asetettuna, alla tulevien jaksojen esikatselu" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Jaksot ratkaisevat, miten sovellus laskee lisä- ja ylityön. Siksi tämä
kohta kannattaa tarkistaa huolella. Lisää ohjeita:
[Näin otat TES-tuen käyttöön](/posts/nain_otat_tes-tuen_kayttoon).

## 4. Täydennä työntekijöiden tiedot ja saldot

[Työehtosopimus-sivun](https://app.tyovuorolista.fi/admin/tes)
tarkistuslista näyttää, keneltä tietoja puuttuu. Klikkaa riviä ja
täydennä:

- kokoaikainen vai osa-aikainen
- osa-aikaisen sopimustunnit
- työsuhteen alkupäivä
- vuosiloman ansaintasääntö (useimmiten 14 päivän sääntö)

<img src="/blogPostImages/tes-tuki/tyontekijoiden-tarkistuslista.png" alt="Tarkistuslista: yhdeltä työntekijältä puuttuu työsuhteen tyyppi" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Syötä sitten palkanlaskennasta saadut saldot:

- **Vuosivapaat:** [Työehtosopimus-sivulla](https://app.tyovuorolista.fi/admin/tes)
  kohdassa **Vuosivapaasaldot**.
  [Ohje](/posts/vuosivapaan_alkusaldon_laskeminen).
- **Vuosilomat:** [Työntekijät-sivulla](https://app.tyovuorolista.fi/admin/workers)
  työntekijän tiedoissa kohdassa **Syötä vuosiloman alkusaldo**.
  [Ohje](/posts/vuosiloman_kertyman_seuranta).

## 5. Tarkista tuntien laskenta

Avaa [Asetukset-sivu](https://app.tyovuorolista.fi/admin/profile) ja
osio **Tuntien laskenta**. Tarkista, mistä kellonajasta ilta- ja yölisä
alkavat. Jos ruokatauko on teillä palkaton, ota
[palkaton ruokatauko](/posts/palkaton_ruokatauko) käyttöön täällä.

## 6. Tee ensimmäinen lista

[Luo uusi lista](https://app.tyovuorolista.fi/createNewList). Sovellus
ehdottaa listalle jakson alku- ja loppupäivää. Pidä listat jaksojen
mittaisina (21 päivää), koska lisä- ja ylityö lasketaan kokonaisista
jaksoista.

Lisää vuoro raahaamalla työntekijän nimi kalenteriin. Tarkista ajat ja
tallenna.

<img src="/blogPostImages/aloitus_opas/raahaa-tyontekija-kalenteriin.png" alt="Työntekijäkortti raahataan kalenterin aikaruudukkoon" width="100%" style="max-width: 800px; display: block; margin: 20px auto;" />

Jos vuorot ovat viikosta toiseen samanlaiset, tallenna tyypillinen
viikko [mallipohjaksi](/posts/templates_eli_mallinteiden_kaytto_tyovuorolista_pohjana).
Seuraavan listan saat sen avulla valmiiksi muutamalla klikkauksella.

Kalenteri varoittaa, jos vuoro rikkoo työaikalakia tai
työehtosopimusta, esimerkiksi liian lyhyestä lepoajasta.

## 7. Julkaise lista

Kun lista on valmis, avaa
[Julkaise-sivu](https://app.tyovuorolista.fi/publishList). Tarkista
esikatselu ja lähetä työntekijöille heidän omat listansa sähköpostilla.
Halutessasi voit tulostaa listan myös seinälle.
[Ohje](/posts/tyovuorolistojen_julkaisu_ja_lahettaminen_tyontekijoille).

<img src="/blogPostImages/aloitus_opas/julkaise-nakyma.png" alt="Julkaise-näkymä työvuorolistan esikatselulla" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

## 8. Kirjaa toteutuneet tunnit

Avaa [Tuntien kirjaus -sivu](https://app.tyovuorolista.fi/admin/LogHours).

1. Valitse jakso, esimerkiksi juuri päättynyt lista.
2. Valitse työntekijät.
3. Muuta alkamis- tai päättymisaikaa niissä vuoroissa, jotka eivät
   menneet suunnitellusti. Muutos tallentuu itsestään.
4. Merkitse sairauspoissaolot **Sairaana?**-ruutuun.

<img src="/blogPostImages/tuntien_kirjaus_opas/vuorotaulukko.png" alt="Vuorotaulukko suunnitelluilla ja toteutuneilla ajoilla" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Suunnitellusti menneisiin vuoroihin ei tarvitse koskea. Sovellus laskee
niistä suunnitellut tunnit.
[Ohje](/posts/tuntien_kirjaus_opas).

## 9. Seuraa tasoituksia ja saldoja

[Tuntien kirjaus -sivulla](https://app.tyovuorolista.fi/admin/LogHours)
näet jokaisesta työntekijästä:

- jakson tunnit sekä [lisä- ja ylityöt](/posts/lisatyo_ja_ylityo_ravintola-alalla)
- tasoittumiskauden saldon ja annetut tasoitusvapaat (TS)
- vuosivapaat ja vuosilomat

<img src="/blogPostImages/tes-tuki/tasoittumisjaksot-useampi-kausi.png" alt="Tuntilaskenta: kaksi tasoittumiskautta allekkain, työntekijän jaksotunnit ja kertyvä saldo sekä TS-suhde 0/3" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Jos saldo näyttää kesken jakson miinusta, jakson loppua ei ole yleensä
vielä suunniteltu.

## 10. Tee palkkaraportti

Paina [Tuntien kirjaus -sivulla](https://app.tyovuorolista.fi/admin/LogHours)
**Luo palkkaraportti...** ja valitse Excel, CSV tai PDF. Raportissa
näkyvät jokaisen työntekijän työtunnit, lisät, sairausajan palkka,
vuosivapaat, tasoitusvapaat sekä lisä- ja ylityöt.
[Ohje](/posts/palkkaraportti_ominaisuus).

Jos palkat lasketaan Procountorissa, Netvisorissa tai Fivaldissa, voit
viedä tunnit suoraan sinne:
[Procountor](/posts/procountor_palkka_vienti),
[Netvisor](/posts/netvisor_tuntien_vienti),
[Fivaldi](/posts/fivaldi_tuntien_vienti).

## Ensimmäiset viikot: pidä Excel rinnalla

Pidä Excel käytössä vielä yhden tai kahden jakson ajan. Kun ensimmäinen
kokonainen jakso on kirjattu, vertaa sovelluksen tunteja ja saldoja
Exceliin. Jos jokin luku eroaa, lähetä minulle viesti, niin selvitetään
syy yhdessä.

## Tarkistuslista

| Vaihe | Sivu | Valmis, kun |
|---|---|---|
| Testivuorot pois | [Työvuorolistat](https://app.tyovuorolista.fi/admin/lists) | Tilillä ei ole testilistoja |
| Paketti | [Tilaus](https://app.tyovuorolista.fi/admin/subscription) | Kaikki työntekijät mahtuvat mukaan |
| Työntekijät | [Työntekijät](https://app.tyovuorolista.fi/admin/workers) | Kaikilla nimi, sähköposti ja puhelinnumero |
| TES ja jaksot | [Työehtosopimus](https://app.tyovuorolista.fi/admin/tes) | Jaksot alkavat oikeina päivinä |
| Työntekijöiden tiedot | [Työehtosopimus](https://app.tyovuorolista.fi/admin/tes) | Tarkistuslista on tyhjä |
| Historia ja saldot | [Työehtosopimus](https://app.tyovuorolista.fi/admin/tes), [Työntekijät](https://app.tyovuorolista.fi/admin/workers) | Saldot vastaavat palkanlaskentaa |
| Tuntien laskenta | [Asetukset](https://app.tyovuorolista.fi/admin/profile) | Ilta- ja yölisän ajat ovat oikein |
| Ensimmäinen lista | [Uusi lista](https://app.tyovuorolista.fi/createNewList) | Lista on jakson mittainen |
| Julkaisu | [Julkaise](https://app.tyovuorolista.fi/publishList) | Työntekijät saivat listan |
| Tunnit | [Tuntien kirjaus](https://app.tyovuorolista.fi/admin/LogHours) | Poikkeamat on kirjattu |
| Palkkaraportti | [Tuntien kirjaus](https://app.tyovuorolista.fi/admin/LogHours) | Luvut täsmäävät Exceliin |

Kysyttävää? Sovelluksen [Ohje ja tuki -chat](/posts/ohje_ja_tuki_chat)
vastaa heti, ja minut tavoittaa osoitteesta
[info@tyovuorolista.fi](mailto:info@tyovuorolista.fi).
