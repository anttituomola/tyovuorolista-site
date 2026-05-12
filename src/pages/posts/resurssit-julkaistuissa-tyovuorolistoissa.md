---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Resurssit saa nyt mukaan julkaistuihin työvuorolistoihin'
pubDate: 2026-05-11
description: 'Voit nyt näyttää työvuoroihin liitetyt resurssit myös julkaistavissa työvuorolistoissa, kuvissa ja PDF-liitteissä. Asetuksen voi määrittää oletukseksi resurssien hallinnasta ja säätää listakohtaisesti julkaisunäkymässä.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/resources/tyovuorolistan_resurssit_lisaa_resurssi.png'
    alt: 'Resurssien hallinta Työvuorolista-sovelluksessa.'
tags: ["resurssit", "julkaisu", "pdf", "työvuorolistat", "päivitykset"]
---

Resurssien aikataulutus toimii nyt paremmin myös työvuorolistojen julkaisemisessa. Kun työvuoroon on liitetty esimerkiksi auto, työkalu tai muu resurssi, voit halutessasi näyttää resurssin nimen myös julkaistussa työvuorolistassa.

Tämä auttaa erityisesti silloin, kun työntekijälle tai tiimille jaetaan lista kuvana, PDF:nä tai tulosteena. Vuoron yhteydessä näkyy heti, mitä resurssia kyseisessä vuorossa tarvitaan, eikä tietoa tarvitse tarkistaa erikseen kalenterista.

## Miten asetus toimii?

Resurssien näkyvyydelle on lisätty yrityskohtainen oletusasetus resurssien hallintaan.

1. Siirry kohtaan **Hallinta → Resurssit**
2. Kytke päälle asetus, jolla resurssit näytetään julkaistuissa työvuorolistoissa

Kun asetus on päällä, Työvuorolista lisää työvuoroihin liitetyt resurssit mukaan julkaistaviin listoihin. Asetus on yrityskohtainen, joten sitä ei tarvitse valita uudelleen jokaisella lähetyskerralla.

Jos et ole vielä käyttänyt resurssien aikataulutusta, voit lukea tarkemmat käyttöönotto-ohjeet aiemmasta tekstistä: [Resurssien aikataulutus -ominaisuus](/posts/resurssien-aikataulutus-ominaisuus).

## Listakohtainen valinta julkaisunäkymässä

Julkaisunäkymään on lisätty myös erillinen **Näytä resurssit listalla** -kytkin. Se näkyy silloin, kun resurssien aikataulutus on käytössä ja yritykselle on lisätty vähintään yksi resurssi.

Tällä kytkimellä voit säätää juuri sillä hetkellä näkyvää listaa:

- pidä resurssit näkyvissä, kun jaat listan esimerkiksi PDF:nä tai tulosteena
- piilota resurssit, jos haluat julkaista tiiviimmän version
- testaa nopeasti, kumpi näkymä sopii paremmin kyseiselle listalle

Listakohtainen valinta ei muuta yrityksen oletusasetusta. Se vaikuttaa vain julkaisunäkymän senhetkiseen esitystapaan.

## Miten resurssit näkyvät listalla?

Resurssi näytetään sen työvuoron yhteydessä, johon se on liitetty. Jos työntekijällä on samana päivänä kaksi vuoroa ja molemmilla on eri resurssi, resurssit pysyvät omien vuorojensa mukana.

Esimerkiksi:

```text
08:00-12:00
Auto 1

13:00-17:00
Pakettiauto 2
```

Tämä on tärkeää, jotta resurssi ei näytä vahingossa koskevan koko päivää tai väärää vuoroa. Jos vuorolla ei ole resurssia, vuoro näkyy kuten ennenkin.

## PDF-liitteet käyttävät oletusasetusta

Kun lähetät työvuorolistoja sähköpostilla ja liität mukaan tiimin PDF-listan, PDF käyttää samaa yrityskohtaista oletusasetusta resurssien hallinnasta.

Tämä tarkoittaa, että sähköpostin lähetysvaiheeseen ei ole lisätty uutta ylimääräistä valintaa. Jos haluat PDF-liitteisiin resurssit mukaan, kytke asetus päälle kohdassa **Hallinta → Resurssit**. Jos et halua resursseja PDF-liitteisiin, pidä asetus pois päältä.

## Milloin tästä on hyötyä?

Resurssien näyttäminen julkaistuissa listoissa on hyödyllistä esimerkiksi silloin, kun:

- kuljettajalle pitää näkyä, mikä auto tai pakettiauto kuuluu vuoroon
- työntekijän pitää tietää etukäteen, mikä työkalu tai laite on varattu hänen vuorolleen
- työvuorolista tulostetaan työpaikan seinälle ja resurssitiedon pitää olla kaikkien nähtävillä
- haluat jakaa tiimin listan kuvana tai PDF:nä ilman, että resurssitieto katoaa matkalla

Päivitys tekee resurssien käytöstä yhtenäisempää: sama tieto, jonka lisäät suunnittelukalenterissa työvuorolle, voidaan nyt näyttää myös julkaistussa listassa ja PDF:ssä.

