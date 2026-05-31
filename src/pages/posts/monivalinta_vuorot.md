---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Usean vuoron valinta – siirrä tai poista vuoroja kerralla'
pubDate: 2026-05-31
description: 'Voit nyt valita useita työvuoroja Ctrl- tai Cmd-klikkauksella ja siirtää tai poistaa ne kerralla. Siirto tunteina tai päivinä, automaattinen päällekkäisyystarkistus ja osittainen onnistuminen kuten toistuvissa vuoroissa.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/monivalinta_vuorot/kalenteri-valinta.png'
    alt: 'Kalenteri, jossa useita työvuoroja on valittu sinisellä reunuksella ja valintapalkki näyttää valittujen määrän.'
tags: ["työvuorolista", "uudet ominaisuudet", "työvuorot", "kalenteri", "suunnittelu"]
---

Vuorojen siirtäminen tai poistaminen yksi kerrallaan vie aikaa, jos niitä on monta. **Usean vuoron valinnalla** poimit haluamasi työvuorot kalenterista ja käsittelet ne yhdellä kertaa.

Ominaisuus toimii **tietokoneella** julkaisemattomilla listoilla. Valita voit **tavallisia työvuoroja** aikaruudukosta – ei vapaapäiviä, lomia eikä muita koko päivän merkintöjä.

<img src="/blogPostImages/monivalinta_vuorot/kalenteri-valinta.png" alt="Neljä työvuoroa valittuna maanantaina kalenterissa, valintapalkki näyttää 4 valittu" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

## Miten valitset vuoroja?

1. Avaa **Suunnittele**-näkymä ja valitse muokattava lista.
2. Pidä **Ctrl-näppäintä** (Windows) tai **Cmd-näppäintä** (Mac) pohjassa ja klikkaa työvuoroa. Klikkaus joko lisää vuoron valintaan tai poistaa sen siitä.
3. Klikkaa näin niin monta vuoroa kuin haluat. Valitut vuorot näkyvät reunuksella ja valintamerkillä.
4. Kalenterin alareunaan ilmestyy **valintapalkki**, jossa lukee valittujen määrä – esimerkiksi *3 valittu*.
5. Avaa **muokkausikkuna** kynäkuvakkeesta tai tyhjennä valinta X:stä.

**Vinkki:** Voit tyhjentää valinnan nopeasti **Esc-näppäimellä**. Valinta tyhjenee myös, kun vaihdat listaa.

Tavallinen klikkaus ilman Ctrl- tai Cmd-näppäintä toimii kuten ennenkin ja avaa yksittäisen vuoron muokattavaksi.

## Mitä voit tehdä valituille vuoroille?

Muokkausikkuna näyttää listan kaikista valituista vuoroista (työntekijä, päivä ja kellonajat). Sieltä voit joko siirtää tai poistaa vuorot.

### Vuorojen siirtäminen

Valitse suunta (**Eteenpäin** tai **Taaksepäin**), määrä ja yksikkö (**tuntia** tai **päivää**). Esimerkiksi *2 tuntia eteenpäin* myöhentää kaikkien valittujen vuorojen alku- ja loppuaikaa kahdella tunnilla.

Tunteina tehtävät siirrot **kiinnittyvät kalenterin aikaportaaseen** (esim. 30 min) samalla tavalla kuin yksittäistä vuoroa siirrettäessä.

### Vuorojen poistaminen

**Poista valitut vuorot** -painike poistaa kaikki valitut vuorot kerralla. Erillinen vahvistus varmistaa, ettei poisto tapahdu vahingossa.

<img src="/blogPostImages/monivalinta_vuorot/bulk-modaali.png" alt="Muokkaa valittuja vuoroja -ikkuna, jossa valittujen vuorojen lista, siirtoasetukset ja poistopainike" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

## Mitä tapahtuu tallennuksen jälkeen?

Jokainen vuoro käsitellään erikseen – samalla logiikalla kuin [toistuvien vuorojen](/posts/toistuvat_tyovuorot) luonnissa. Ennen siirtoa tarkistetaan, että vuoro mahtuu paikalleen:

- **Päällekkäisyys** saman työntekijän toisen vuoron kanssa estää kyseisen siirron
- **Resurssikonfliktit** tarkistetaan, jos resurssien aikataulutus on käytössä
- **Listan rajat:** vuoroa ei voi siirtää listan ulkopuolelle

Jos osa vuoroista ei mene läpi, **loput siirretään tai poistetaan silti**. Lopuksi näet yhteenvedon, esimerkiksi *"3/4 vuoroa siirretty (1 ohitettiin)"*, ja muokkausikkuna kertoo, miksi jokin vuoro jäi käsittelemättä.

## Rajoitukset

- Valinta toimii vain **tietokoneella** – mobiilissa klikkaus avaa edelleen yksittäisen vuoron.
- Valittavissa ovat vain **tavalliset työvuorot** valitun listan aikaruudukosta (ei V-, X-, loma- tai muita koko päivän merkintöjä).
- **Julkaistuilla listoilla** vuoroja ei voi valita eikä muokata tällä tavalla.
- Vuorot pysyvät **valitun listan** sisällä – niitä ei siirretä toiseen listaan.

## Milloin tästä on hyötyä?

- Kun useita vuoroja pitää **siirtää tunnilla tai päivällä**, esimerkiksi aukiolon muuttuessa
- Kun samaan päivään on jäänyt **ylimääräisiä vuoroja**, jotka haluat poistaa kerralla
- Kun haluat tarkistaa valitut vuorot **yhtenä listana** ennen muutosta

## Yhteenveto

Usean vuoron valinta nopeuttaa listan hienosäätöä:

- **Ctrl- tai Cmd-klikkaus** valitsee vuoroja ilman erillistä valintatilaa
- **Valintapalkki** näyttää valittujen määrän ja avaa muokkausikkunan
- **Siirto** tunteina tai päivinä eteen- tai taaksepäin
- **Poisto** kerralla erillisellä vahvistuksella
- **Osittainen onnistuminen** – kelvolliset vuorot käsitellään ja ongelmalliset ohitetaan

Haluatko tarkemman oppaan vuorojen luomisesta? Lue [Näin lisäät työvuoroita kalenteriin](/posts/vuorojen_lisaminen_kalenteriin). Toistuvien kaavojen luontiin sopii [Toistuvat työvuorot](/posts/toistuvat_tyovuorot).
