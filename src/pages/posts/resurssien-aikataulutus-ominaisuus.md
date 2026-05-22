---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Resurssien aikataulutus -ominaisuus helpottaa autojen ja työkalujen hallintaa'
pubDate: 2025-11-20
description: 'Uusi resurssien aikataulutus -ominaisuus mahdollistaa autojen, pakettiautojen ja työkalujen liittämisen työvuoroihin. Järjestelmä varoittaa, jos resurssi on jo käytössä tai poissa käytöstä.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/resources/tyovuorolistan_resurssit_lisaa_resurssi.png'
    alt: 'Uuden resurssin lisääminen.'
tags: ["resurssit", "autot", "työkalut", "aikataulutus", "työvuorojen hallinta"]
---

Työvuorolista tukee nyt resurssien aikataulutusta, jolloin voit liittää autot, pakettiautot, työkalut ja muut laitteet työvuoroihin. Järjestelmä auttaa välttämään konflikteja ja varoittaa, jos resurssi on jo käytössä tai poissa käytöstä huollon vuoksi.

<video controls width="100%">
    <source src="/blogPostImages/resources/tyovuorolistan_resurssit.mp4" type="video/mp4">
    Selaimesi ei tue videotägiä.
</video>

<div style="border: 2px solid #e2e2e2; border-radius: 4px; padding: 1rem; margin: 1.5rem 0; background-color: #f9f9f9;">
<strong>💡 Pikakäyttöönotto:</strong> Nopein tapa aloittaa resurssien käyttö on siirtyä <a href="https://app.tyovuorolista.fi/admin/resources" target="_blank">resurssisivulle</a>, kytkeä resurssien aikataulutus päälle ja lisätä ensimmäinen resurssisi.
</div>

## Mitä ovat resurssit?

Resurssit ovat liikkuvia laitteita tai ajoneuvoja, joita tarvitaan työvuorojen aikana. Voit luoda resursseja tyypeillä:
- **Auto**: Henkilöautot ja muut ajoneuvot
- **Pakettiauto**: Toimitusautot ja pakettiautot
- **Työkalu**: Työkalut ja laitteet
- **Muu**: Muut resurssit, jotka eivät sovi yllä oleviin kategorioihin

## Resurssien hallinta

### Ominaisuuden ottaminen käyttöön

Ennen kuin voit käyttää resurssien aikataulutusta, sinun täytyy ottaa se käyttöön profiilissa:

1. Siirry kohtaan **Hallinta → Asetukset**, tai avaa <a href="https://app.tyovuorolista.fi/admin/profile" target="_blank">profiiliasetukset tästä</a>
2. Etsi asetus **"Ota käyttöön resurssien aikataulutus (autot, työkalut, jne.)"**
3. Kytke asetus päälle
4. Asetus tallentuu automaattisesti

![Resurssien aikataulutus -asetus](/blogPostImages/resources/tyovuorolistan_resurssit_asetukset.png)

Kun ominaisuus on käytössä, näet **"Resurssit"** -valikon navigaatiossa.

![Resurssit-valikko navigaatiossa](/blogPostImages/resources/tyovuorolistan_resurssit_valikko.png)

### Resurssien luominen

Resurssien hallinta tapahtuu **Hallinta → Resurssit** -sivulla (<a href="https://app.tyovuorolista.fi/admin/resources" target="_blank">avaa resurssisivu</a>):

![Resurssilistaus](/blogPostImages/resources/tyovuorolistan_resurssit_resurssilistaus.png)

1. Klikkaa **"Lisää uusi resurssi"** -painiketta
2. Täytä resurssin nimi (esim. "Auto 1" tai "Porakone")
3. Valitse resurssin tyyppi pudotusvalikosta
4. Valitse halutessasi työntekijät, joille tämä resurssi on oletuksena
5. Tallenna resurssi

![Uuden resurssin lisääminen](/blogPostImages/resources/tyovuorolistan_resurssit_lisaa_resurssi.png)

Resurssi ilmestyy heti listaan, ja voit alkaa käyttää sitä työvuoroissa.

### Resurssien muokkaus ja poistaminen

Voit muokata resurssia klikkaamalla **"Muokkaa"** -painiketta. Muokkauksessa voit:
- Muuttaa resurssin nimeä tai tyyppiä
- Lisätä tai poistaa työntekijöitä, joille resurssi on oletuksena
- Lisätä poissaolojaksoja (huolto, korjaus, jne.)

![Resurssin tiedot](/blogPostImages/resources/tyovuorolistan_resurssit_resurssin_tiedot.png)

Resurssin poistaminen poistaa sen kaikista työvuoroista, mutta työvuorot säilyvät - ne vain menettävät resurssin.

## Resurssien liittäminen työvuoroihin

### Työvuoroon resurssin liittäminen

Kun luot tai muokkaat työvuoroa, näet resurssivalinnan:

1. Avaa työvuoro klikkaamalla sitä kalenterissa
2. Etsi **"Resurssi"** -pudotusvalikko
3. Valitse haluamasi resurssi listasta
4. Tallenna työvuoro

![Resurssin valinta työvuoromodaalista](/blogPostImages/resources/tyovuorolistan_resurssit_resurssin_valinta_tyuovuoromodaalista.png)

Resurssin nimi näkyy nyt työvuorossa kalenterinäkymässä.

### Oletusresurssit työntekijöille

Voit asettaa työntekijöille oletusresurssin kahdella tavalla:

**Työntekijän modaalista:**
- Avaa työntekijän tiedot
- Valitse oletusresurssi pudotusvalikosta
- Tallenna muutokset

**Resurssin modaalista:**
- Avaa resurssin tiedot
- Klikkaa "Muokkaa"
- Valitse useita työntekijöitä, joille resurssi on oletuksena
- Tallenna muutokset

Kun luot uuden työvuoron työntekijälle, jolla on oletusresurssi, resurssi valitaan automaattisesti - voit silti muuttaa sitä tarvittaessa.

Jos asetat resurssin työntekijöille resurssin modaalista, se korvaa työntekijän modaalista asetetun oletusresurssin kyseisessä yksittäisessä vuorossa..

## Poissaolojaksojen hallinta

Jos resurssi on poissa käytöstä (esim. huollossa tai korjauksessa), voit merkitä sen poissaolojaksoksi:

1. Avaa resurssin tiedot klikkaamalla resurssia listassa
2. Etsi **"Poissaolojaksot"** -osio
3. Klikkaa **"Lisää poissaolojakso"**
4. Valitse alkupäivä ja loppupäivä
5. Lisää halutessasi syy (esim. "Huolto")
6. Tallenna poissaolojakso

![Käyttökatkon lisääminen](/blogPostImages/resources/tyovuorolistan_resurssit_kayttokatkon_lisays.png)

![Käyttökatko lisätty](/blogPostImages/resources/tyovuorolistan_resurssit_kayttokatko_lisatty.png)

Järjestelmä varoittaa, jos yrität liittää resurssin työvuoroon poissaolojakson aikana.

**HUOM** Järjestelmä ei estä sinua lisäämästä katkolla olevaa resurssia työvuorolle, se ainoastaan varoittaa siitä. Mikäli olet lisännyt resurssin ennen käyttökatkon määrittelyä työvuoroille, tästä et saa varoitusta.

## Konfliktien havaitseminen

Järjestelmä automaattisesti havaitsee, jos resurssi on jo käytössä tai poissa käytöstä:

### Päällekkäiset työvuorot

Jos yrität liittää resurssin työvuoroon, joka päällekkäin toisen työvuoron kanssa, näet varoituksen:

> "Resurssi on jo käytössä samaan aikaan. Tarkista ja poista tarvittaessa!"

![Resurssi käytössä -varoitus](/blogPostImages/resources/tyovuorolistan_resurssit_resurssi_kaytossa_varoitus.png)

Varoitus ei estä työvuoron luomista - se vain varoittaa sinua mahdollisesta konfliktista.

### Poissaolojaksojen konfliktit

Jos yrität liittää resurssin työvuoroon poissaolojakson aikana, näet varoituksen:

> "Resurssi on poissa käytöstä [päivämäärä] - [päivämäärä]. Tarkista ja poista tarvittaessa!"

![Resurssi käyttökatkolla -varoitus](/blogPostImages/resources/tyovuorolistan_resurssit_resurssi_kayttokatkolla_notifikaatio_varoitus.png)

Päivämäärät näytetään muodossa DD.MM.YYYY (esim. 03.11.2025).

## Resurssien näyttäminen kalenterissa

Kun liität resurssin työvuoroon, resurssin nimi näkyy kalenterinäkymässä työvuoron yhteydessä:

- **Koko päivän vuoroissa**: Resurssin nimi lisätään vuoron otsikon perään
- **Aikataulutetuissa vuoroissa**: Resurssin nimi näkyy vuoron ajan ja otsikon alla
- **Koko tiimin tulostettavassa kalenterissa**: resurssit eivät näy tässä kalenterissa helppolukuisuuden ylläpitämiseksi.

Resurssin nimi näkyy myös työvuoron tiedoissa, kun avaat sen suunnittelukalenterista.

## Sähköpostiintegraatio

Kun lähetät työvuorolistan sähköpostitse, resurssit näkyvät automaattisesti:

- Resurssin nimi lisätään **"Muistiinpanot"** -sarakkeeseen
- Resurssit yhdistetään päiväkohtaisiin muistiinpanoihin
- Resurssit eivät näy työvuoron aika -sarakkeessa

![Resurssi sähköpostissa](/blogPostImages/resources/tyovuorolistan_resurssit_resurssi_sahkopostissa.png)

Tämä auttaa työntekijöitä näkemään heti, mitä resursseja he tarvitsevat työvuoronsa aikana.

## Käytännön hyödyt

- 🚗 **Selkeys**: Näet heti, mitä resursseja tarvitaan kullakin työvuorolla
- ⚠️ **Varoitukset**: Järjestelmä varoittaa konflikteista automaattisesti
- ⚡ **Nopeus**: Oletusresurssit nopeuttavat työvuorojen luomista
- 📅 **Suunnittelu**: Voit suunnitella resurssien käyttöä etukäteen
- 🔧 **Huolto**: Poissaolojaksot auttavat huollon suunnittelussa
- 📧 **Kommunikaatio**: Resurssit näkyvät automaattisesti sähköposteissa

## Miten käytät resurssien aikataulutusta?

### 1. Ota ominaisuus käyttöön

Siirry **Hallinta → Profiili** ja kytke resurssien aikataulutus päälle. Tämän jälkeen näet "Resurssit" -valikon navigaatiossa.

### 2. Luo resurssit

Siirry **Hallinta → Resurssit** ja luo tarvitsemasi resurssit:
- Autot ja pakettiautot
- Työkalut ja laitteet
- Muut tarvittavat resurssit

### 3. Aseta oletusresurssit (valinnainen)

Jos tietyillä työntekijöillä on aina sama resurssi, aseta se oletusresurssiksi:
- Joko työntekijän modaalista (yksi työntekijä kerrallaan)
- Tai resurssin modaalista (useita työntekijöitä kerrallaan)

### 4. Liitä resurssit työvuoroihin

Kun luot tai muokkaat työvuoroa:
- Valitse resurssi pudotusvalikosta
- Jos työntekijällä on oletusresurssi, se valitaan automaattisesti
- Voit muuttaa resurssia tarvittaessa

### 5. Hallitse poissaolojaksoja

Jos resurssi on poissa käytöstä:
- Avaa resurssin tiedot
- Lisää poissaolojakso päivämääriin
- Järjestelmä varoittaa, jos yrität käyttää resurssia poissaolojakson aikana

## Mobiilissa

Kaikki resurssien hallinnan toiminnot toimivat myös mobiilissa:
- Resurssien luominen ja muokkaus
- Resurssien liittäminen työvuoroihin
- Poissaolojaksojen hallinta
- Resurssien näyttäminen kalenterissa

## Tärkeää tietää

### Rajoitukset

- Yksi resurssi per työvuoro: Työvuoroon voi liittää vain yhden resurssin
- Yksi oletusresurssi per työntekijä: Työntekijällä voi olla vain yksi oletusresurssi
- Tiimikohtaiset resurssit: Resursseja ei voi jakaa tiimien välillä
- Varoitukset eivät estä: Konfliktit eivät estä työvuorojen luomista, vaan vain varoittavat

### Resurssin poistaminen

Kun poistat resurssin:
- Resurssi poistetaan kaikista työvuoroista
- Työvuorot säilyvät, mutta menettävät resurssin
- Työntekijöiden oletusresurssit säilyvät (historiallinen tieto)

### Oletusresurssien prioriteetti

Kun luot työvuoron, resurssi valitaan seuraavassa järjestyksessä:
1. **Eksplisiittisesti valittu resurssi** (korkein prioriteetti)
2. **Työntekijän oletusresurssi**
3. **Ei resurssia**

## Yhteenveto

Uusi resurssien aikataulutus -ominaisuus tekee autojen, työkalujen ja muiden resurssien hallinnan helpommaksi:

- Luo resurssit kerran ja käytä niitä uudelleen
- Liitä resurssit työvuoroihin yhdellä klikkauksella
- Aseta oletusresurssit nopeuttamaan työvuorojen luomista
- Merkitse poissaolojaksot huollon ja korjausten suunnittelua varten
- Saat automaattiset varoitukset konflikteista

Järjestelmä auttaa välttämään päällekkäisiä varauksia ja varoittaa, jos resurssi on poissa käytöstä. Resurssit näkyvät myös automaattisesti sähköposteissa, jolloin työntekijät tietävät heti, mitä resursseja he tarvitsevat. Voit myös [näyttää resurssit julkaistuissa listoissa ja PDF:ssä](/posts/resurssit-julkaistuissa-tyovuorolistoissa). [Vuoron kopiointi ALT-näppäimellä](/posts/tyovuoron_kopiointi_alt_raahaus) kopioi resurssin mukana.

Aloita käyttö ottamalla ominaisuus käyttöön profiilissa ja luomalla ensimmäiset resurssisi!



