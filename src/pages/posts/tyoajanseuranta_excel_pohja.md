---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Työajanseuranta Excelissä: lataa ilmainen tuntilistapohja'
pubDate: 2026-08-30
description: 'Lataa ilmainen työajanseurannan Excel-pohja: tuntilista, joka laskee tunnit, tauot ja yövuorot automaattisesti ja vertaa toteumaa sopimustunteihin. Lisäksi: mitä työaikalaki vaatii työaikakirjanpidolta.'
reviewedDate: 2026-08-30
infoBasis: 'Pohja tehty ja testattu elokuussa 2026 (Excel ja LibreOffice). Lakiviittaukset perustuvat työaikalakiin 872/2019 (30 § työvuoroluettelo ja 32 § työaikakirjanpito).'
ctaText: 'Kirjaa tunnit ilman Exceliä'
ctaHref: '/ominaisuudet/tuntien-kirjaus'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tyoajanseuranta-pohja/tuntilista-pohja.png'
    alt: 'Excel-tuntilistapohja, jossa päivämäärät, vuorojen ajat, tauot ja lasketut tunnit syyskuulta 2026.'
tags: ['työajanseuranta', 'tuntilista', 'excel', 'pohja', 'ilmainen']
---

**Lyhyesti:** Tältä sivulta voit ladata ilmaisen työajanseurannan
Excel-pohjan eli tuntilistan. Syötä vuoron alku, loppu ja tauko, niin
pohja laskee päivän tunnit (myös yövuoroille), summaa kuukauden ja
vertaa toteumaa sopimustunteihin. Ei rekisteröitymistä eikä makroja.
Muista, että tehtyjen tuntien kirjaaminen on työnantajalle
lakisääteinen velvollisuus, joten jonkinlainen tuntilista pitää joka
tapauksessa olla.

## Lataa ilmainen pohja

<div style="background: rgba(45, 58, 53, 0.06); border-left: 4px solid #2d3a35; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 4px 4px 0;">
<strong><a href="/lataukset/tyoajanseuranta_pohja.xlsx">Lataa työajanseurannan pohja (.xlsx)</a></strong>, ilmainen, ei sähköpostia, ei makroja. Toimii Excelissä, LibreOfficessa ja Google Sheetsissä.
</div>

Pohja tekee puolestasi seuraavat asiat:

- **Päivämäärät ja viikonpäivät automaattisesti**: syötä vain vuosi ja
  kuukausi, ja pohja täyttää päivät oikein myös helmikuulle.
- **Tuntien laskenta tauko vähennettynä**, esimerkiksi 8:00–16:00 ja
  0,5 tunnin tauko on 7,50 tuntia.
- **Yövuorot toimivat suoraan**: vuoro 18:00–02:00 lasketaan oikein,
  vaikka se päättyy seuraavan vuorokauden puolella.
- **Kuukauden summa ja vertailu sopimustunteihin**: näet yhdellä
  silmäyksellä, paljonko tunteja on kertynyt ja mikä on erotus.
- **Viikonloput korostettuna**, jotta rivit on helppo lukea.

<img src="/blogPostImages/tyoajanseuranta-pohja/tuntilista-pohja.png" alt="Tuntilistapohjan taulukko, jossa esimerkkivuorot ja automaattisesti lasketut tunnit" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

## Näin käytät pohjaa

1. Avaa **Tuntilista**-välilehti ja täytä keltaiset solut: työntekijän
   nimi, vuosi, kuukausi ja halutessasi sopimustunnit.
2. Kirjaa jokaiselle työpäivälle vuoron alku, loppu ja palkaton tauko
   tunteina (0,5 tarkoittaa 30 minuuttia). Tyhjennä ensin kaksi
   esimerkkiriviä.
3. Merkintä-sarakkeeseen voit kirjata esimerkiksi sairausloman,
   [vuosiloman](/posts/vuosiloman_merkkaaminen_tyovuorolistaan) tai
   arkipyhän.
4. Kopioi välilehti jokaiselle kuukaudelle ja työntekijälle: klikkaa
   välilehden nimeä hiiren oikealla ja valitse **Siirrä tai kopioi**.

## Työajanseuranta on lakisääteistä

Työaikalain 32 §:n mukaan työnantajan on pidettävä
**työaikakirjanpitoa**: tehdyt työtunnit ja
niistä suoritetut korvaukset on kirjattava työntekijöittäin, ja
kirjanpito on säilytettävä vähintään kanneajan päättymiseen asti.
Puutteellisesta kirjanpidosta voi seurata
[laiminlyöntimaksu](/posts/laiminlyontimaksu_tyovuoroluettelosta_ja_tyoaikakirjanpidosta),
ja riitatilanteessa kirjanpidon puuttuminen kääntyy helposti
työnantajaa vastaan.

Huomaa ero kahden lakisääteisen dokumentin välillä:

| Dokumentti | Mitä se on | Milloin tehdään |
|---|---|---|
| [Työvuoroluettelo](/posts/tyovuorolistan_julkaiseminen) | Suunnitelma tulevista vuoroista | Etukäteen, tiedoksi viimeistään viikkoa ennen |
| Työaikakirjanpito | Toteutuneet tunnit ja korvaukset | Jälkikäteen, jokaiselta työntekijältä |

Tämän sivun pohja on jälkimmäistä varten. Jos etsit pohjaa vuorojen
**suunnitteluun**, katso [tulostettava työvuorolistapohja](/pohja) tai
[työvuorolistan taulukkopohja](/posts/tyovuorolista_pohja).

Pohja kattaa tunnit, mutta korvausten erittely jää käsityöksi:
esimerkiksi [sunnuntailisät](/posts/sunnuntailisa_ravintola-alalla) ja
[iltalisät](/posts/iltalisa_yolisa_ja_aattolisa_ravintola-alalla) on
laskettava ja kirjattava erikseen oman TES:n mukaan.

## Missä Excel-seuranta loppuu kesken?

Pohja riittää hyvin yhdelle tai parille työntekijälle. Isommalla
porukalla vastaan tulevat tutut ongelmat: jokainen työntekijä ja
kuukausi on oma välilehtensä, tunnit syötetään käsin kahteen kertaan
(ensin listalta tuntilistaan, sitten palkanlaskentaan), lisät lasketaan
laskimella ja kaavat hajoavat, kun joku muokkaa väärää solua.

Tyovuorolista.fi:ssä sama työ tapahtuu yhdessä paikassa:

- [Tuntien kirjaus](/posts/tuntien_kirjaus_opas): suunnitellut vuorot
  ovat valmiina pohjana, ja merkitset vain poikkeamat.
- Työntekijä voi [ilmoittaa toteutuneet tuntinsa
  itse](/posts/oma_portaali_ohje) puhelimella, tai tunnit voi leimata
  työpaikan yhteisellä laitteella [leimaustilassa](/posts/leimaustila).
- [Palkkaraportti](/posts/palkkaraportti_ominaisuus) laskee tunnit ja
  TES:n mukaiset lisät valmiiksi palkanlaskentaa varten.

<img src="/blogPostImages/tuntien_kirjaus_opas/yleiskuva.png" alt="Tuntien kirjaus -näkymä, jossa toteutuneet tunnit merkitään suoraan suunniteltujen vuorojen päälle" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Käyttö on ilmaista enintään kolmen työntekijän listoille, joten pohjan
ja sovelluksen vertailu ei maksa mitään. Katso myös laajempi vertailu
[Excel vs. työvuorolistaohjelma](/posts/excel_vs_tyovuorolista_ohjelma).

---

*Lähteet: [Työaikalaki 872/2019, 30 § työvuoroluettelo ja 32 § työaikakirjanpito (Finlex)](https://www.finlex.fi/fi/laki/ajantasa/2019/20190872), [Työaika (tyosuojelu.fi)](https://tyosuojelu.fi/tyosuhde/tyoaika)*
