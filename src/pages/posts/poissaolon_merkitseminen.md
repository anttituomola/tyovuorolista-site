---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Poissaolon merkitseminen työvuorolistaan'
pubDate: 2026-09-15
description: 'Miten merkitset tiedossa olevan poissaolon kalenteriin niin, että esihenkilö näkee syyn mutta tiimin listalla näkyy vain Poissa.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/poissaolon-merkitseminen/poissaolo-kalenteri.png'
    alt: 'Kalenteri, jossa poissaolo näkyy koko päivän palkkina työntekijän rivillä.'
tags: ['työvuorosuunnittelu', 'poissaolo', 'tietosuoja']
---

*Päivitetty 16.9.2026.*

Esihenkilö voi merkitä kalenteriin tiedossa olevan poissaolon (sairaus, perhevapaa, opintovapaa tai muu este) jo suunnitteluvaiheessa. Syy jää vain esihenkilölle ja palkanlaskentaan. Julkaistulla tiimin listalla, PDF:ssä ja työkavereiden näkymissä rivi on **Poissa**: ei tyhjä solu, eikä sairauden nimeä.

Tyhjä solu näyttäisi vapaapäivältä (V), ja työkaverit tarvitsevat tiedon siitä, ettei henkilö ole paikalla. Syy ei heille kuulu. Tämä noudattaa tietosuojavaltuutetun linjausta terveystietojen käsittelystä.

## Miten merkitset poissaolon

1. Avaa vuoro kalenterissa (tai luo uusi).
2. Vaihda tyypiksi **Poissaolo**.
3. Valitse syy: sairaus (oletus), perhevapaa, opintovapaa tai muu. Aputeksti muistuttaa, että tiimin listalla näkyy vain Poissa.
4. Koko päivän jaksolle merkitse alku- ja loppupäivä kuten vuosilomalla. Jos tunnit tiedetään (esimerkiksi lääkärikäynti 12–16), rasti **Ajallinen (tunnit tiedetään)**.
5. Tallenna. Jos jaksolla on jo työvuoroja, modaali varoittaa niistä. Poissaolon voi silti merkitä.

<img src="/blogPostImages/poissaolon-merkitseminen/vuoro-poissaolo-tyyppi.png" alt="Vuoron muokkaus, tyyppinä Poissaolo ja syynä Sairaus. Aputeksti: tiimin listalla näkyy vain Poissa." width="100%" style="max-width: 420px; display: block; margin: 20px auto;" />

Kalenterissa poissaolojakso näkyy koko päivän palkkina. Syy ei näy tiimille.

<img src="/blogPostImages/poissaolon-merkitseminen/poissaolo-kalenteri.png" alt="Suunnittelukalenteri, jossa Emma Virtasen poissaolo näkyy vihreänä palkkina tiistaista keskiviikkoon." width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Ajallinen poissaolo syyllä sairaus tuottaa sairausajan palkan tunnit. Koko päivän jakso ei tuota tunteja, koska niitä ei tiedetä. Jakso lyhentää listan tuntitavoitetta samalla tavalla kuin vuosiloma, jotta pikavalinta ei näytä poissaolijan "jäljellä"-tunteja virheellisenä ylijäämänä.

## Mitä tiimi näkee

Julkaistulla listalla, PDF:ssä ja sähköpostissa solu on **Poissa**. Ei "sairaus", ei "poissaolo".

<img src="/blogPostImages/poissaolon-merkitseminen/poissaolo-tiimin-lista.png" alt="Tiimin viikkotaulukko, jossa Emman tiistai ja keskiviikko ovat merkitty Poissa." width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Työntekijä itse näkee Omassa oman merkintänsä muodossa **Poissaolo · sairaus** (tai muu valittu syy). Työkaverit eivät näe syytä.

<div class="blogPhoneRow">
<img class="blogPhone" src="/blogPostImages/poissaolon-merkitseminen/poissaolo-oma.png" alt="Oma-portaali: seuraava vuoro on Poissaolo · sairaus." />
</div>

## Jos joku sairastuu jo julkaistulta listalta

Tänään tai tulevaisuudessa olevan julkaistun työvuoron merkitset kalenterista: klikkaa vuoroa ja valitse **Merkitse poissaolo…**. Syy on Sairastui tai Muu este. Sijaisen hausta on [oma ohjeensa](/posts/sijaisen_haku).

Menneen vuoron poissaolo merkitään edelleen [Tuntien kirjaus](/posts/tuntien_kirjaus_opas) -näkymässä **Sairaana?**-ruudulla. Silloin korvaajan voi lisätä samasta rivistä, ks. [korvaajan vuoro](/posts/korvaajan_vuoron_lisays_sairauslomalle).

Lue myös [vuosiloman merkkaamisesta](/posts/vuosiloman_merkkaaminen_tyovuorolistaan).
