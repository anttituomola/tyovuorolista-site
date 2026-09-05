---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Pikavalinta: täytä mallineen avoimet vuorot klikkaamalla'
pubDate: 2026-08-29
description: 'Kopioi vanha lista avoimiksi vuoroiksi ja anna tekijä klikkaamalla. Sama runko, uudet nimet.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/pikavalinta/hero.png'
    alt: 'Pikavalinta auki avoimessa vuorossa: päivä, kellonajat, muistiinpano ja työntekijälista jäljellä olevine tunteineen.'
tags: ['päivitykset', 'uudet ominaisuudet', 'kalenteri', 'ohjeet']
---

*Päivitetty 31.8.2026: ohjevideo.*

Joillain työpaikoilla lista toistuu muodoltaan: samat avaus- ja iltavuorot, joskus samoilla muistiinpanoilla, mutta tekijät vaihtuvat listasta toiseen. Aiemmin malline kopioi myös työntekijät, ja nimet piti vaihtaa yksi kerrallaan.

Nyt voit kopioida mallineen **avoimiksi vuoroiksi** ja antaa tekijän klikkaamalla. Klikkaus avaa pikavalinnan vuoron kohdalle.

Pikavalinta on tietokoneen kalenterissa. Puhelimessa avoimen vuoron tekijä valitaan edelleen vuoroikkunasta.

Videossa: uusi lista mallineesta ilman työntekijöitä, avoimet luonnokset kalenterissa ja tekijän anto.

<video controls preload="metadata" poster="/blogPostImages/pikavalinta/pikavalinta-demo-poster.png" width="100%" style="max-width: 900px; display: block; margin: 20px auto;">
  <source src="/blogPostImages/pikavalinta/pikavalinta-demo.webm" type="video/webm" />
  <source src="/blogPostImages/pikavalinta/pikavalinta-demo.mp4" type="video/mp4" />
</video>

<img src="/blogPostImages/pikavalinta/hero.png" alt="Pikavalinta auki torstain avausvuorossa: työntekijät ja jäljellä olevat tunnit" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

## 1. Kopioi malline ilman työntekijöitä

Tee uusi lista kuten ennen: **+ Uusi lista**, valitse pituus ja aloituspäivä, sitten malline. Mallinevalinnan alle ilmestyy valinta **Kopioi vuorot ilman työntekijöitä (avoimiksi vuoroiksi)**.

<img src="/blogPostImages/pikavalinta/malline-checkbox.png" alt="Uusi lista -ikkuna, malline valittuna ja Kopioi vuorot ilman työntekijöitä -valinta päällä" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Kun valinta on päällä, kloonatut vuorot tulevat harmaiksi avoimiksi vuoroiksi. Ajat, muistiinpanot ja osaamisvaatimukset kopioituvat. Tekijät, vapaat ja poissaolot eivät. Valinta on oletuksena pois päältä. Tavallinen malline toimii kuten ennen.

Avoin luonnos näkyy kalenterissa harmaana **Avoin vuoro** -tiilenä. Se näkyy vain sinulle. Julkaisu työntekijöille haettavaksi on eri asia, ja se tehdään edelleen erikseen [avointen vuorojen ohjeen](/posts/avoimet_vuorot_ohje) mukaan.

<img src="/blogPostImages/pikavalinta/avoimet-luonnokset.png" alt="Kalenteri, jossa viikon runko on avoimia luonnosvuoroja ja muutama tekijä jo valittu" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

## 2. Valitse tekijä pikavalinnalla

Klikkaa avointa luonnosta. Pikavalinta avautuu vuoron kohdalle:

- päivä, kellonajat ja muistiinpano, jos sellainen on
- työntekijät samassa järjestyksessä kuin sivupalkissa
- jäljellä olevat tunnit listalla, jos sopimustunnit on asetettu (VV-päivät ja vuosiloma pienentävät tavoitetta, ylitys punaisella)
- **Muokkaa vuoroa…**, jos tarvitset aikoja, osaamista tai muita kenttiä

Päällekkäisen vuoron omaava työntekijä ei näy listassa. Jos ketään vapaata ei ole, näet siitä tiedon. Klikkaus antaa vuoron heti, ilman erillistä vahvistusta. Jos anto ei onnistu, näet virheen ja voit kokeilla toista.

<img src="/blogPostImages/pikavalinta/annettu.png" alt="Sama viikko sen jälkeen kun torstain avausvuoro on annettu Sofialle" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Työntekijällisen vuoron klikkaus avaa vuoroikkunan kuten ennen. Jos avoin vuoro on jo julkaistu työntekijöille haettavaksi, klikkaus avaa ilmoittautumiset.

## Leimaustila ja avoimet vuorot

Jos [leimaustila](/posts/leimaustila) on päällä ja työntekijä valittuna, klikkaus avoimeen luonnokseen antaa vuoron suoraan hänelle. Tila jää päälle, joten voit täyttää seuraavan avoimen vuoron samalla tekijällä. Tyhjät kohdat luovat uuden vuoron kuten ennen.

## Huomioitavaa

- Pikavalinta toimii tietokoneella, myös julkaistulla listalla: avoimen luonnoksen voi antaa, ja saaja saa ilmoituksen.
- Vapautettu avoin vuoro (se, jonka työntekijät näkevät Oma-portaalissa) avaa edelleen vuoroikkunan. Ilmoittautumiset käsitellään siellä.
- Mallineen vapaat ja muut kokopäivämerkinnät eivät kopioidu, kun kopioit vuorot avoimiksi. Ne lisätään listalle erikseen.

Vanha ohje mallineen tallentamiseen: [mallineiden käyttö](/posts/templates_eli_mallinteiden_kaytto_tyovuorolista_pohjana). Muut tavat täyttää kalenteri: [näin lisäät työvuoroja](/posts/vuorojen_lisaminen_kalenteriin).
