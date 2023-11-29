---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Merkattujen ja puuttuvien työtuntien laskenta'
pubDate: 2024-11-30
description: 'tyovuorolista.fi-sovellus laskee jokaisen työntekijän merkatut ja puuttuvat tunnit automaattisesti.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tuntilaskuri.png'
    alt: 'tyovuorolista.fi:n kalenterinäkymä.'
tags: ["työvuorosuunnittelu", "työtunnit", "tuntien laskenta"]
---
Kalenterinäkymässä kaikkien työntekijöiden nimen alla ilmestyy listalle merkattujen tuntien kokonaismäärä heti, kun merkkaat työntekijälle ensimmäisen vuoron listalle. Mikäli olet ilmoittanut työntekijän työsopimuksessa merkatun tuntimäärän sovellukselle, laskee se reaaliajassa, kuinka monta tuntia työntekijältä vielä puuttuu - tai kuinka paljon niitä on mahdollisesti liikaa.  

<video controls autoplay="autoplay" loop="loop" muted="muted" preload="auto" width="100%" poster='/tyovuorolista_hero.png'>
  <source src="/blogPostImages/app.tyovuorolista_tuntilaskuri.mp4" type="video/mp4">
</video>

Voit muuttaa loman pituutta raahaamalla sitä alku- tai loppureunasta, tai klikkaamalla lomaa ja muuttamalla päivämääriä modaalissa.

## Miten merkkaan työntekijän tavoitetuntimäärän?
Kaikille työntekijöille kannattaa merkata tavoitetuntimäärä, eli työsopimuksessa kirjattu työtuntimäärä per kuukausi. Täysaikaisilla tuntimäärä on 150 / kk, jos ei muuta sovittu.

1. klikkaa työntekijän nimeä kalenterin vasemmalla puolella
2. klikkaa Muokkaa työntekijän tietoja -painiketta
3. Lisää tuntimäärä Työtunnit työsopimuksessa -kenttään

<strong>Muista merkata työntekijän tuntimäärä per kuukausi.</strong> Sovellus laskee sen perusteella tarvittavan tuntimäärän per 3 viikon lista.
