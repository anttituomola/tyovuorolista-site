---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Palkkaraportti: työntekijäkohtaiset tunnit jaksolta'
metaTitle: 'Näin teet palkkaraportin'
pubDate: 2025-11-24
description: 'Palkkaraportti listaa valitun jakson tunnit työntekijöittäin. Tiedoston saa Excel-, CSV- tai PDF-muodossa Tuntien kirjaus -sivulta.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/payroll-report/tuntiraportti_tuntien_kirjaus_nakyma.png'
    alt: 'Tuntien kirjaus: päivämäärät, työntekijät Emma Virtanen, Jussi Mäkelä ja Sofia Niemi, sekä nappi Luo palkkaraportti valitsimen vieressä.'
tags: ["palkkaraportti", "ohjeet", "työtunnit"]
---

*Päivitetty 1.10.2026: raportin saa myös Excel-tiedostona. Luo palkkaraportti -nappi on työntekijävalitsimen vieressä.*

*Päivitetty 12.9.2026: tunnit voi lähettää suoraan [Fivaldiin](/posts/fivaldi_tuntien_vienti).*

Palkkaraportti kokoaa valitsemasi jakson tunnit työntekijöittäin. Jokaisesta tuntityypistä tulee oma rivinsä, esimerkiksi työtunnit, iltavuorolisä tai sairausajan palkka. Nollarivejä ei tule mukaan.

## Näin teet raportin

1. Avaa **Hallinta → Tuntien kirjaus** tai suoraan [app.tyovuorolista.fi/admin/LogHours](https://app.tyovuorolista.fi/admin/LogHours).
2. Valitse aloitus- ja lopetuspäivä. Kuukauden saat pikavalinnalla **Tämä kuukausi** tai **Viime kuukausi**.
3. Valitse työntekijät. **Luo palkkaraportti...** on valitsimen vieressä.

Nappi pysyy harmaana, kunnes valitulla jaksolla on vähintään yksi tuntirivi. Vie hiiri napin päälle, niin näet syyn. Tavallisimmin työntekijää ei ole valittu, tai valituilla työntekijöillä ei ole vuoroja kyseiseltä jaksolta.

<img src="/blogPostImages/payroll-report/tuntiraportti_tuntien_kirjaus_nakyma.png" alt="Tuntien kirjaus -sivu. Luo palkkaraportti -nappi on työntekijävalitsimen oikealla puolella." width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

4. Paina **Luo palkkaraportti...**
5. Valitse muoto: Excel, CSV tai PDF.
6. Rastita rivit, jotka haluat mukaan. Oletuksena mukana ovat työtunnit, lisät, sairausajan palkka, vuosivapaa, lomapalkka ja tasoitusvapaa.
7. Valitse sarakkeet. Oletuksena mukana ovat työntekijän nimi, tunnustyyppi ja määrä. Sähköpostin ja työntekijän ID:n voi ottaa mukaan, jos tarvitset ne.
8. Paina **Luo raportti**. Tiedosto latautuu selaimeen.

<img src="/blogPostImages/payroll-report/tuntiraportti_luo_palkkaraportti_modaali.png" alt="Luo palkkaraportti -ikkuna. Muodoksi on valittu Excel. Rivivalinnoissa ovat työtunnit, lisät ja sairausajan palkka." width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Jos toimipaikalle on valittu palkanlaskentaohjelma, sen vienti on samassa listassa. Kuvassa se on Procountor. Omat ohjeet: [Procountor](/posts/procountor_palkka_vienti), [Netvisor](/posts/netvisor_tuntien_vienti) ja [Fivaldi](/posts/fivaldi_tuntien_vienti).

Tuntien kirjauksen muu käyttö, kuten toteutuneet ajat ja sairasloma, on ohjeessa [Tuntien kirjaus](/posts/tuntien_kirjaus_opas).

## Excel, CSV ja PDF

**Excel** tallentaa tunnit lukuina. Valitse se, kun avaat raportin Excelissä. CSV on tekstitiedosto, ja suomalainen Excel saattaa lukea luvun 7.5 päivämääräksi, koska piste on päiväyksen erotin.

**CSV** on pilkulla erotettu tekstitiedosto UTF-8-koodauksella. Se sopii ohjelmalle, joka lukee CSV:n suoraan.

**PDF** on tuloste, jonka voi jakaa tai arkistoida.

## Mitä riveillä on

Yksi rivi on yhden työntekijän yksi tuntityyppi. Samalla henkilöllä voi olla rivi Työtunnit ja rivi Iltavuorolisä. Työtunnit eivät sisällä sairauslomaa. Sairausloma on rivillä Sairausajan palkka.

Vuosivapaa, lomapalkka ja tasoitusvapaa lasketaan päivinä, eivät tunteina.

Ilta- ja yölisän kellonajat tulevat tuntilaskennan asetuksista. Oletuksena ilta on klo 18–24 ja yö klo 00–06. Ajat vaihdat kohdasta **Hallinta → Asetukset**, osio Tuntien laskenta. Muutos näkyy seuraavassa raportissa. Jo ladattu tiedosto ei muutu.

<img src="/blogPostImages/payroll-report/tuntiraportti_tuntien_laskenta_asetukset.png" alt="Tuntien laskennan asetukset: päivä alkaa klo 6, ilta klo 18 ja yö klo 00." width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Jos [palkaton ruokatauko](/posts/palkaton_ruokatauko) on päällä, raporttiin voi tulla rivi Vähennetyt ruokatauot. Työtunnit ovat silloin nettona.

Jos työntekijällä [lisät sisältyvät sopimuspalkkaan](/posts/sopimuspalkka_ilta_ja_yolisa), ilta-, yö- ja aattolisät sekä lisä- ja ylityö jäävät pois.

Kun työehtosopimus on käytössä ja jakso osuu tasoittumisjaksoon, lisätyö, ylityö ja päivätyökorvaukset tulevat omille riveilleen. Katso [TES-tuki työvuorosuunnittelussa](/posts/tes_tuki_tyovuorosuunnittelussa).
