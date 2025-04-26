---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Lomasuunnittelu Työvuorolista-sovelluksessa'
pubDate: 2024-05-01
description: 'Lomasuunnittelu-ominaisuuden avulla voit helposti hallita ja seurata työntekijöiden lomatoiveita ja lomia.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/lomasuunnittelu-yleisnakyma.png'
    alt: 'Lomasuunnittelunäkymä Työvuorolista-sovelluksessa.'
tags: ["lomasuunnittelu", "lomat", "lomatoiveet", "työvuorosuunnittelu"]
---

Työvuorolista-sovellukseen on lisätty uusi Lomasuunnittelu-ominaisuus, jonka avulla voit helposti hallinnoida työntekijöiden lomatoiveita ja lomia. Tässä oppaassa käymme läpi ominaisuuden käytön yksityiskohtaisesti.

<video controls preload="none" poster="/blogPostImages/lomasuunnittelu-yleisnakyma.png" width="100%" style="max-width: 600px; display: block; margin: 20px auto;">
  <source src="/blogPostImages/lomasuunnittelu.mp4" type="video/mp4">
  Selaimesi ei tue video-elementtiä.
</video>

## Lomasuunnittelunäkymään pääsy

Lomasuunnittelunäkymään pääset käsiksi kahdella tavalla:
1. Suora osoite: [https://app.tyovuorolista.fi/admin/vacation](https://app.tyovuorolista.fi/admin/vacation)
2. Päänavigaatiosta: **Hallinta → Lomasuunnittelu**

## Lomasuunnittelun päätoiminnot

Lomasuunnittelussa voit:
- Luoda **lomatoiveita** työntekijöille
- Merkitä **vahvistettuja lomia**
- **Konvertoida lomatoiveita** vahvistetuiksi lomiksi

## Kalenterinäkymä

Oletuksena lomasuunnittelunäkymä näyttää kalenterin kuukausi kerrallaan, mikä helpottaa lomasesongin hahmottamista kokonaisuutena. Kalenterissa näkyvät eri värein merkittynä:
- **Vahvistetut lomat** (tummansininen ✓)
- **Lomatoiveet** (vaaleansininen ?)

## Tiimien hallinta

Näkymässä näytetään oletusarvoisesti valitun tiimin lomat ja lomatoiveet. Voit kuitenkin valita useita tiimejä samanaikaisesti näkyviin käyttämällä tiimivalintaa sivun yläosassa. 

Jos lisäät loman tai lomatoiveen työntekijälle, joka ei ole valitun tiimin jäsen, hänen tiiminsä lisätään automaattisesti näkymään.

## Uuden loman tai lomatoiveen lisääminen

Voit lisätä uuden loman tai lomatoiveen usealla tavalla:

### 1. "+Uusi lomatoive" -nappi
- Klikkaa sivulla olevaa "+Uusi lomatoive" -nappia
- Avautuvassa modaalissa voit valita työntekijän ja määrittää loman ajankohdan

<img src="/blogPostImages/uusi-lomatoive-modaali.png" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" alt="Uusi lomatoive -modaali" />

### 2. Kalenteripäivän klikkaaminen
- Klikkaa kalenterissa haluamaasi päivää
- Avautuvassa modaalissa valittu päivä on valmiiksi syötettynä loman alkupäiväksi ja loppupäiväksi

### 3. Valitsemalla aikaväli kalenterista
- Valitse aikaväli kalenterista
- Avautuvassa modaalissa valittu aikaväli on valmiiksi syötettynä alku- ja loppupäiviin

## Lomatoiveen muokkaaminen ja hyväksyminen

Kun klikkaat olemassa olevaa lomatoivetta kalenterissa, avautuu muokkausmodaali, jossa voit:
- Muokata lomatoiveen tietoja
- Muuttaa lomatoiveen vahvistetuksi lomaksi joko:
  - Painamalla "HYVÄKSY LOMATOIVE" -nappia
  - Muuttamalla vapaapäivän tyyppiä "lomatoive" → "vuosiloma"

<img src="/blogPostImages/muokkaa-lomatoivetta-modaali.png" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" alt="Muokkaa lomatoivetta -modaali" />

## Lomatoiveiden ja lomien näkyvyys

Lomatoiveiden ja lomien näkyvyydessä on eroja:
- **Lomatoiveet** näkyvät ainoastaan suunnittelukalenterissa
- **Vahvistetut lomat** näkyvät:
  - Suunnittelukalenterissa
  - Julkaistavissa työvuorolistoissa
  - Työntekijöille lähetettävissä sähköposteissa

## Työvuorojen suunnittelu lomien aikana

Järjestelmä toimii seuraavalla tavalla vuorojen ja lomien päällekkäisyyksien osalta:
- **Vahvistetun loman** päälle ei voi laittaa työvuoroa tai muuta vapaapäivää
- **Lomatoiveen** päälle voi laittaa työvuoron tai muun vapaapäivän, mutta järjestelmä näyttää tällöin varoituksen

## Lomapäiväyhteenveto

Lomasuunnittelukalenterin alla on Lomapäiväyhteenveto-ominaisuus, joka laskee valitulle ajanjaksolle merkatut lomat ja lomatoiveet. Yhteenveto jakautuu kahteen osaan:

<img src="/blogPostImages/lomapaivayhteenveto.png" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" alt="Lomapäiväyhteenveto" />

### 1. Lomapäivät (ma-la - laskenta)
Tämä osio näyttää lomapäivien lukumäärät 6-päiväisen laskentatavan mukaan, jota käytetään yleisesti Suomessa. Tässä laskentatavassa:
- Huomioidaan lomat 6-päiväisen työviikon mukaan (ma-la)
- Suomessa yksityisellä sektorilla lomat lasketaan yleensä tällä tavalla
- Lauantait lasketaan lomapäiviksi
- Tämä on vuosilomalain mukainen laskentatapa

### 2. Lomapäivät (kaikki)
Tämä osio näyttää loman todellisen keston kalenteripäivinä:
- Sisältää kaikki päivät (arkipäivät, lauantait ja sunnuntait)
- Antaa hyödyllistä tietoa loman kokonaiskestosta ja poissaoloajasta

Lomapäiväyhteenvedon ajanjakson voit valita vuosittain, mutta se on aina huhtikuun ensimmäisestä maaliskuun viimeiseen, mikä on Suomessa tyypillisesti käytetty lomalaskukausi. Esimerkiksi jos valitset pudotusvalikosta 2024-2025, saat lukumäärät ajanjaksolle 01.04.2024 - 31.03.2025.

## Lomien tulostus

Sivun alaosassa on Lomien tulostus -ominaisuus, jonka avulla voit tulostaa näkymän, jossa näkyvät sekä lomat että lomatoiveet valituille tiimeille.

### Tulostuksen vaiheet:

1. **Tiimien valinta**
   - Valitse tiimit sivun ylälaidasta, lomasuunnitteluosiosta

2. **Ajanjakson valinta**
   - Valitse aloituskuukausi (tulostettavan näkymän aloituskuukausi)
   - Valitse kesto (oletus 3 kk)
   - Esimerkiksi jos valitset maaliskuu 2025 ja 3 kk, saat tulostettua lomat ja lomatoiveet ajanjaksolle 1.3.2025-31.5.2025

3. **Esikatselu**
   - Paina "Esikatselu" nähdäksesi tulostettavan näkymän
   - Lomat näkyvät tummempana, lomatoiveet vaaleampana värinä työntekijän omalla värillä
   - Vahvistettu loma merkitään symbolilla ✓ ja lomatoive symbolilla ?

<img src="/blogPostImages/lomien-tulostus-esikatselumodaali.png" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;" alt="Lomien tulostus -esikatselumodaali" />

4. **Tulostus tai tallennus**
   - Paina esikatselumodaalista "TULOSTA"
   - Voit tulostaa näkymän tai tallentaa sen PDF-tiedostona
   - Muista valita tulostusasetuksista "Tulosta taustavärit ja -kuvat" / "Print background graphics" saadaksesi kalenterin värit näkyviin
   - Huomaa, että eri selaimissa asetus voi olla eri paikassa

## Yhteenveto

Lomasuunnittelu-ominaisuus tarjoaa tehokkaan työkalun lomien ja lomatoiveiden hallintaan:
- Näet koko tiimin tai usean tiimin lomatoiveet ja lomat yhdellä silmäyksellä
- Voit helposti muuntaa lomatoiveet vahvistetuiksi lomiksi
- Lomapäiväyhteenveto auttaa seuraamaan työntekijöiden lomapäivien määrää
- Tulostustoiminto mahdollistaa lomien ja lomatoiveiden jakamisen eteenpäin helposti

Käytä tätä ominaisuutta sujuvoittamaan yrityksesi lomasuunnittelua ja varmistaaksesi, että kaikki tarvittavat lomat tulevat huomioiduksi työvuorosuunnittelussa. 