---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Tuntien kirjaus: opas toteutuneiden tuntien merkitsemiseen'
pubDate: 2026-05-22
description: 'Tuntien kirjaus -näkymässä merkitset toteutuneet työajat, sairauslomat ja korvaajavuorot sekä luot palkkaraportin valitulta ajanjaksolta.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tuntien_kirjaus_opas/yleiskuva.png'
    alt: 'Tuntien kirjaus -näkymä työntekijöiden valinnalla ja vuorotaulukolla.'
tags: ["tuntien kirjaus", "työtunnit", "palkkaraportti", "sairausloma", "hallinta"]
---

Kun työvuorolista on suunniteltu ja julkaistu, seuraava askel on usein toteutuneiden tuntien kirjaaminen. **Tuntien kirjaus** -näkymässä näet valitsemiesi työntekijöiden vuorot valitulla ajanjaksolla, voit merkitä toteutuneet aloitus- ja lopetusajat, käsitellä sairauslomat ja luoda [palkkaraportin](/posts/palkkaraportti_ominaisuus) suoraan samasta näkymästä.

Tämä opas kattaa työpöytäversion peruskäytön. Mobiilissa sama näkymä toimii, mutta taulukko esitetään korttilistana.

## Näkymään pääsy

Siirry **Hallinta → Tuntien kirjaus** -valikkoon tai avaa suoraan osoite [app.tyovuorolista.fi/admin/LogHours](https://app.tyovuorolista.fi/admin/LogHours).

Näkymä vaatii valitun tiimin. Jos tiimiä ei ole valittu, sovellus pyytää valitsemaan sen ensin.

<img src="/blogPostImages/tuntien_kirjaus_opas/yleiskuva.png" alt="Tuntien kirjaus -näkymän yleiskuva" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

## Ajanjakson ja työntekijöiden valinta

Yläosassa valitset kolme asiaa:

1. **Aloituspäivä** ja **Lopetuspäivä** – ajanjakso, jolta vuorot haetaan
2. **Työntekijät** – yksi tai useampi työntekijä kerrallaan

Työpöydällä voit nopeuttaa valintaa pikavalintanapeilla:

- **Tämä kuukausi**, **Viime kuukausi**, **Ensi kuukausi**
- Viimeisimmät työvuorolistat (esim. `01.05. - 21.05.`) – valitsee listan päivämäärävälin automaattisesti

Työntekijävalinnassa näkyvät **kaikki yrityksen työntekijät**, ei vain valitun tiimin jäsenet. Tämä helpottaa erityisesti palkanlaskentaa ja korvaajien löytämistä muista tiimeistä.

<img src="/blogPostImages/tuntien_kirjaus_opas/paivamaara_ja_tyontekijat.png" alt="Päivämäärävalinnat, pikavalinnat ja työntekijävalitsin" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Kun olet valinnut vähintään yhden työntekijän, taulukko ja tuntiyhteenveto ilmestyvät näkyviin.

## Vuorotaulukko: suunnitellut ja toteutuneet ajat

Taulukossa jokaiselle vuorolle näkyy muun muassa:

- Työntekijän nimi ja päivämäärä
- Tiimi ja työvuorolista, johon vuoro kuuluu
- **Suunniteltu aloitus** ja **Suunniteltu lopetus**
- **Toteutunut aloitus** ja **Toteutunut lopetus** – nämä kentät muokkaat tarvittaessa
- **Ero** – ero suunnitellun ja toteutuneen pituuden välillä
- **Sairaana?** – ruutu sairausloman merkitsemiseen

Muutokset tallentuvat automaattisesti, kun poistut kentästä. Tuntien laskenta käyttää **toteutuneita aikoja**, kun ne on merkitty – muuten suunniteltuja aikoja.

<img src="/blogPostImages/tuntien_kirjaus_opas/vuorotaulukko.png" alt="Vuorotaulukko suunnitelluilla ja toteutuneilla ajoilla" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

### Sairausloma ja korvaajan vuoro

Merkitse vuoro sairauslomaksi valitsemalla **Sairaana?** -ruutu. Sen jälkeen voit lisätä korvaajan vuoron suoraan samasta rivistä – painike avaa **Lisää vuoro** -modaalin esitäytettynä alkuperäisen vuoron tiedoilla.

Lue tarkemmin [korvaajan vuoron lisäämisestä sairauslomalle](/posts/korvaajan_vuoron_lisays_sairauslomalle).

<img src="/blogPostImages/tuntien_kirjaus_opas/sairausloma_ja_korvaaja.png" alt="Sairausloman merkintä ja korvaajan vuoron lisäyspainike" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

### Vuoron poisto ja toteutuneiden aikojen nollaus

- **Poista vuoro** (roskakori-ikoni tai mobiilikortin painike) poistaa vuoron kokonaan. Käytä tätä vain virheellisille merkinnöille.
- **Nollaa toteutuneet ajat** -painike palauttaa kaikkien näkyvien vuorojen toteutuneet ajat takaisin suunniteltuihin aikoihin. Hyödyllinen, jos olet testannut kirjausta ja haluat aloittaa alusta.

## Uuden vuoron lisääminen

Paina **Lisää vuoro** -painiketta taulukon alapuolella. Modaalissa valitset työntekijän, päivämäärän, aloitus- ja lopetusajan sekä tarvittaessa resurssin.

Huomio: vuoro lisätään työvuorolistalle, joka kattaa valitun päivän. Jos päivälle ei ole listaa, sovellus ilmoittaa virheestä.

<img src="/blogPostImages/tuntien_kirjaus_opas/lisaa_vuoro_modaali.png" alt="Lisää vuoro -modaali" width="100%" style="max-width: 600px; display: block; margin: 20px auto;" />

## Tuntiyhteenveto

Taulukon alapuolella näkyy valittujen työntekijöiden **tuntiyhteenveto**. Se laskee työtunnit, lisät, sairausajan ja muut kategoriat samalla logiikalla kuin [palkkaraportti](/posts/palkkaraportti_ominaisuus).

Yhteenvedon tarkkuus riippuu siitä, oletko merkinnyt työntekijöille [tavoitetuntimäärän](/posts/merkattujen_ja_puuttuvien_tyotuntien_laskeminen) ja määrittänytkö [tuntien laskenta-asetukset](/posts/palkkaraportti_ominaisuus) oikein.

<img src="/blogPostImages/tuntien_kirjaus_opas/tuntiyhteenveto.png" alt="Työntekijöiden tuntiyhteenveto kortteina" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

## Palkkaraportin luominen

Kun työntekijät, ajanjakso ja toteutuneet ajat ovat kunnossa, paina **Luo palkkaraportti...** -painiketta. Raportti avautuu modaalissa, jossa valitset CSV- tai PDF-muodon ja haluamasi sarakkeet.

Katso yksityiskohtaiset ohjeet [palkkaraportti-oppaasta](/posts/palkkaraportti_ominaisuus).

## Vinkkejä käytännön työhön

- **Kirjaa tunnit listan pituuden mukaan** – käytä pikavalintaa, joka valitsee juuri julkaistun työvuorolistan päivämäärät.
- **Useampi työntekijä kerralla** – valitse useita henkilöitä, jos haluat käsitellä koko tiimin kuukauden kerralla.
- **Tarkista ennen palkkaraporttia** – varmista, ettei taulukossa ole tyhjiä toteutuneita aikoja vuoroilla, joilla työntekijä on oikeasti ollut paikalla.

Tuntien kirjaus on työvuorosuunnittelun luonnollinen jatko: suunnittelet kalenterissa, julkaiset listan ja merkitset toteutuneet tunnit samassa järjestelmässä ilman erillistä taulukkolaskentaa.
