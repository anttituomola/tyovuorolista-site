---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Merkattujen ja puuttuvien työtuntien laskenta'
pubDate: 2023-11-30
description: 'tyovuorolista.fi-sovellus laskee jokaisen työntekijän merkatut ja puuttuvat tunnit automaattisesti.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tuntilaskuri.png'
    alt: 'tyovuorolista.fi:n kalenterinäkymä.'
tags: ["työvuorosuunnittelu", "työtunnit", "tuntien laskenta"]
---
Kalenterinäkymässä kaikkien työntekijöiden nimen alle ilmestyy listalle merkattujen tuntien kokonaismäärä heti, kun merkkaat työntekijälle ensimmäisen vuoron listalle. Mikäli olet ilmoittanut työntekijän työsopimuksessa merkatun tuntimäärän sovellukselle, laskee se reaaliajassa, kuinka monta tuntia työntekijältä vielä puuttuu, tai kuinka paljon niitä on mahdollisesti liikaa.  

<video controls autoplay="autoplay" loop="loop" muted="muted" preload="auto" width="100%" poster='/blogPostImages/tyovuorolista_hero.png'>
  <source src="/blogPostImages/app.tyovuorolista_tuntilaskuri.mp4" type="video/mp4">
</video>

## Miten merkkaan työntekijän tavoitetuntimäärän?
Kaikille työntekijöille kannattaa merkitä työsopimuksen tuntimäärä. Täysaikaisilla se on usein 150 h / kk, jos ei ole muuta sovittu. Kenttään voit kirjata tunnit [kuukaudessa, viikossa tai kolmen viikon jaksossa](/posts/tyotunnit_tyosopimuksessa).

1. Klikkaa työntekijän nimeä kalenterin vasemmalla puolella (tai avaa työntekijä **Hallinta → Työntekijät** -sivulta, katso [työntekijöiden hallinta](/posts/tyontekijoiden_hallinta))
2. Klikkaa Muokkaa työntekijän tietoja -painiketta
3. Lisää tuntimäärä Työtunnit työsopimuksessa -kenttään ja valitse yksikkö

Sovellus skaalaa tavoitteen avoinna olevan listan pituuteen. Lista voi olla [1–4 viikkoa](/posts/listan_pituuden_valinta), joten sama sopimusluku näyttää oikean tavoitteen sekä lyhyellä että pitkällä listalla. Kun tunnit on merkitty, voit luoda [palkkaraportin](/posts/palkkaraportti_ominaisuus) valitulta ajanjaksolta.
