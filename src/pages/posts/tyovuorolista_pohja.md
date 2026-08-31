---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Työvuorolista pohja Exceliin ja OpenOfficeen: paras ilmainen taulukkopohja'
pubDate: 2022-07-11
description: 'Paras ilmainen taulukkopohja työvuorolistalle: laskee tunnit ja vapaat automaattisesti. Ohjeet käyttöön OpenOfficessa ja Excelissä, plus helpompi vaihtoehto suoraan selaimessa.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tyovuorolista_pohja.png'
    alt: 'tyovuorolista.fi:n kalenterinäkymä.'
tags: ["työvuorolista", "pohja", "ilmainen"]
---

<div style="background: rgba(45, 58, 53, 0.06); border-left: 4px solid #2d3a35; padding: 1rem 1.25rem; margin-bottom: 2rem; border-radius: 0 4px 4px 0;">
<strong>Päivitys 2026:</strong> Tarvitsetko listan heti selaimessa? Kokeile <a href="/pohja">ilmaista tulostettavaa 3 viikon pohjaa</a>, ei asennusta, ei sähköpostia. Täytä nimet ja vuorot, tulosta tai tallenna PDF. Jos taas etsit pohjaa toteutuneiden tuntien kirjaamiseen, lataa <a href="/posts/tyoajanseuranta_excel_pohja">ilmainen työajanseurannan Excel-pohja</a>.
</div>

Jos haluat ehdottomasti tehdä työvuorolistasi isommalle porukalle ilmaiseksi, olen eläessäni löytänyt tasan yhden hyvän valmispohjan tähän tarkoitukseen. Se on OpenOffice-laskentataulukko, joka tekee käytännössä kaiken tarpeellisen laskennan automaattisesti.

## Paras, ilmainen pohja työvuorolistalle
Käyttääksesi tätä pohjaa sinun tarvitsee ladata ja asentaa [OpenOffice-ohjelmisto](https://www.openoffice.org/download), joka on ilmainen ja vapaasti käytettävissä.

Kun olet ladannut ja asentanut OpenOfficen, voit ladata Jouko Kärjen vuosia sitten tekemän, mutta edelleen päivitetyn [työvuorolistan pohjan](https://sourceforge.net/projects/tyovuorolista/).

### Työntekijöiden lisäys ja salasana
Taulukko on melko iso, joten se saattaa ladata itseään hyvän tovin alkuun. Kun se aikanaan avautuu, kannattaa suunnata ensin Asetukset-välilehdelle (löydät välilehdet yleensä taulukon alareunasta).

Jos koetat muokata jonkin solun sisältöä, saat varoituksen, sillä dokumentti on suojattu. Poista suojaus näin:
- mene Asetukset-välilehdelle
- valitse ylävalikosta Tools -> Protected document -> Sheet
- syötä salasana: qsx537a

Nyt välilehden sisältö on muokattavissa.

Hiukan alempana löytyy "Yksikkö 2" -sarake, johon voit syöttää työntekijöiden etu- ja sukunimet. Tämän jälkeen voit avata minkä tahansa kuukauden välilehden, ja huomaat työntekijöittesi päivittyneen sinne.

### Päivämäärien päivittäminen
Tätä tekstiä kirjoitettaessa uusin versio työvuorolistasta oli viime vuoden (2022) päivämäärillä. Ne pitää siis päivittää.

Asetukset-välilehden vasemmassa ylälaidassa on "Aloitus pvm" -kohta. Laita siihen kuluvan vuoden ensimmäinen maanantai (työvuorolista alkaa aina maanantaista). Huomaa, että päivämäärä on muodossa KK/PP/VVVV amerikkalaiseen tapaan. Tämä päivittää koko taulukkodokumentin päivämäärät kuluvalle vuodelle.

### Valmista tuli!
Tämän jälkeen voit alkaa läimiä työvuoroja paikoilleen. Taulukko laskee automaattisesti työntekijöiden työtunnit, vapaat ja sen sellaiset.

## Työvuorosuunnittelu Excelissä

Sama pohja toimii myös Excel-käyttäjälle: .ods-tiedoston voi avata
Excelissä ja LibreOfficessa. Jos haluat rakentaa oman taulukon tyhjästä,
punnitse ensin kokonaistyömäärä: [Excel vs.
työvuorolistaohjelma](/posts/excel_vs_tyovuorolista_ohjelma) käy läpi,
mihin taulukko riittää ja missä se alkaa maksaa aikaa. Toteutuneiden
tuntien kirjaamiseen on erillinen [työajanseurannan
Excel-pohja](/posts/tyoajanseuranta_excel_pohja), ja tulostettavan
listan saat heti selaimesta: [työvuorolista pohja](/pohja).

## Haluatko helpomman tavan?
Tyovuorolista.fi-palvelu tarjoaa selaimessa toimivan työvuorolistan teon, jossa työntekijöitä raahataan kalenteriin halutulle kohdalle. Työvuorojen pituuksia voi säädellä yhtä lailla raahaamalla, työvuoroon voi liittää kommentteja, ja työntekijöiden työvuorot voi jakaa heille [sähköpostitse tai PDF:nä](/posts/tyovuorolista_pohja_pdf) tai vaikkapa WhatsAppilla.

Tyovuorolista.fi:n käyttö on ilmaista alle 4 työntekijän listoille. Voit [aloittaa käytön heti](/posts/uuden_tilin_luominen), ja julkaista ensimmäisen työvuorolistasi noin viidessä minuutissa. Palvelussa voit myös kirjata toteutuneet tunnit! Lue myös [työvuorosuunnitteluohjelma ravintola-alalle](/posts/tyovuorosuunnittelu_ohjelma) -vertailu.
