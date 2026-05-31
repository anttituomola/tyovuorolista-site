---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Toistuvat työvuorot – luo sama vuoro kerralla usealle päivälle'
pubDate: 2026-05-31
description: 'Voit nyt toistaa työvuoron listan loppuun asti valitulla kaavalla: arkipäivät, viikoittain, joka toinen viikko tai mukautettu väli. Esikatselu näyttää kaikki luotavat vuorot ennen tallennusta.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/toistuvat_tyovuorot/vuoron-luonti-modaali.png'
    alt: 'Työvuoron luonti-ikkuna toistuvuusasetuksineen kalenterissa.'
tags: ["työvuorolista", "uudet ominaisuudet", "työvuorot", "toistuvuus", "kalenteri"]
---

Kun sama työntekijä työskentelee samoihin aikoihin useana päivänä tai viikolla, vuorojen syöttäminen yksitellen vie turhaa aikaa. **Toistuvat työvuorot** -ominaisuudella luot saman vuoron kerralla usealle päivälle valitun listan aikana.

Toistuvuus toimii **julkaisemattomilla listoilla** ja koskee **tavallisia työvuoroja** (ei lomia, vapaapäiviä tai muita koko päivän merkintöjä). Voit käyttää sitä sekä uuden vuoron luonnissa että olemassa olevan vuoron muokkauksessa.

<img src="/blogPostImages/toistuvat_tyovuorot/vuoron-luonti-modaali.png" alt="Työvuoron luonti-ikkuna, jossa Toista vuoro listan aikana -kytkin on päällä" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

## Miten pääset alkuun?

1. Avaa **Suunnittele**-näkymä ja valitse muokattava lista.
2. **Luo uusi vuoro** klikkaamalla kalenterin aikaruudukkoa (tietokone), raahamalla työntekijä kalenteriin (tietokone) tai napauttamalla sitä (mobiili). Vaihtoehtoisesti avaa olemassa oleva työvuoro muokattavaksi.
3. Täytä työntekijä, ajat ja muut tiedot kuten tavallisesti.
4. Kytke päälle **Toista vuoro listan aikana**.
5. Valitse toistuvuus ja tarkista esikatselu.
6. Tallenna – järjestelmä luo vuorot yksitellen listan loppuun asti.

<img src="/blogPostImages/toistuvat_tyovuorot/toista-vuoro-kytkin.png" alt="Toista vuoro listan aikana -kytkin vuoron luonti-ikkunassa" width="100%" style="max-width: 600px; display: block; margin: 20px auto;" />

## Toistuvuusvaihtoehdot

Valitse valmiista malleista tai määritä oma väli:

| Vaihtoehto | Mitä se tekee |
|------------|---------------|
| **Jokainen arkipäivä** | Ma–pe jokaisena arkipäivänä listan aikana |
| **Kerran viikossa** | Sama viikonpäivä joka viikko |
| **Joka toinen viikko** | Sama viikonpäivä joka toinen viikko |
| **Joka päivä** | Joka päivä valitusta aloituspäivästä listan loppuun |
| **Joka toinen päivä** | Joka toinen päivä |
| **Mukautettu…** | Valitse itse esim. *joka 3. päivä* tai *joka 3. viikko* |

<img src="/blogPostImages/toistuvat_tyovuorot/toistuvuus-valinnat.png" alt="Toistuvuuden valintalista: arkipäivät, viikoittain, mukautettu" width="100%" style="max-width: 600px; display: block; margin: 20px auto;" />

Mukautetussa tilassa voit valita välin **1–30** ja yksikön **päivä** tai **viikko**. Esimerkiksi *joka 3. viikko* säilyttää alkuperäisen viikonpäivän.

## Esikatselu ennen tallennusta

Kun toistuvuus on päällä, näet heti listan kaikista luotavista vuoroista: päivämäärä, viikonpäivä ja kellonajat. Näin tiedät tarkalleen, mitä kalenteriin syntyy ennen kuin painat **Luo vuoro** tai **Tallenna**.

<img src="/blogPostImages/toistuvat_tyovuorot/esikatselu.png" alt="Toistuvien vuorojen esikatselulista päivämäärineen ja aikoina" width="100%" style="max-width: 600px; display: block; margin: 20px auto;" />

Jos vuoroja on paljon, lista näyttää ensimmäiset rivit ja kertoo, montako muuta vielä luodaan.

## Luonti ja muokkaus

### Uusi vuoro

Valitse aloituspäivä ja ajat, kytke toistuvuus päälle ja tallenna. Järjestelmä luo vuorot valitusta päivästä **listan viimeiseen päivään** asti.

### Olemassa oleva vuoro

Voit päivittää nykyisen vuoron ja samalla luoda loput toistuvat esiintymät. Esikatselu näyttää vain **uudet** vuorot – nykyistä päivitetään erikseen, eikä sitä luoda uudelleen.

## Mitä tapahtuu tallennuksen jälkeen?

Jokainen vuoro luodaan **erillisenä rivinä** tietokantaan – sama logiikka kuin yksittäisessä luonnissa. Järjestelmä tarkistaa jokaisen vuoron:

- päällekkäisyydet saman työntekijän muiden vuorojen kanssa
- resurssikonfliktit (jos käytössä [resurssien aikataulutus](/posts/resurssien_aikataulutus_ominaisuus))

Jos jokin päivä ei mene läpi (esim. päällekkäisyys toisen vuoron kanssa), **muut vuorot luodaan silti**. Päällekkäiset päivät ohitetaan automaattisesti – sama tarkistus kuin yksittäisessä vuoron luonnissa. Saat yhteenvedon esimerkiksi muodossa *"10/12 vuoroa luotu (2 ohitettiin)"*.

## Rajoitukset

- Toistuvuus toimii vain **valitun listan** sisällä – ei yli listan rajojen eikä toiseen listaan.
- **Julkaistuilla listoilla** vuoroja ei voi luoda tai muokata toistuvuudella.
- Toistuvuus on käytettävissä vain **työvuoroille** (ei V-, X-, loma- tai muille koko päivän merkinnöille).
- Klikkaamalla kalenterin **koko päivän riviä** (ylärivi) luot edelleen vapaapäivämerkintöjä – toistuvuus näkyy vain aikaruudukossa luotavissa työvuoroissa.

## Yhteenveto

Toistuvat työvuorot nopeuttavat suunnittelua, kun sama kaava toistuu listan aikana:

- **Valmiit mallit** arkipäiville, viikoittaisille ja muille yleisille kaavoille
- **Mukautettu väli** päivissä tai viikoissa
- **Esikatselu** kaikista luotavista vuoroista ennen tallennusta
- **Osittainen onnistuminen** – kelvolliset vuorot luodaan, ongelmalliset ohitetaan

Haluatko tarkemman käsikirjan kaikista tavoista lisätä vuoroja? Lue [Näin lisäät työvuoroita kalenteriin](/posts/vuorojen_lisaminen_kalenteriin).
