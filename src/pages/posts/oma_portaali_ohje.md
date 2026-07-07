---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Oma-portaali: työntekijän oma näkymä vuoroihin (beta)'
pubDate: 2026-07-07
description: 'Lyhyt ohje Oma-portaalin käyttöönottoon: miten esimies kutsuu työntekijän, miten työntekijä näkee omat julkaistut vuoronsa, ilmoittaa vapaatoiveen ja toteutuneet tunnit sekä miten esimies hyväksyy tunti-ilmoitukset.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/oma-portaali/tyontekija-vuorot.png'
    alt: 'Oma-portaalin näkymä, jossa työntekijä näkee omat vuoronsa kalenterissa.'
tags: ["päivitykset", "beta", "työntekijät", "julkaisu", "tuntien kirjaus"]
---

**Oma-portaali** on uusi, erillinen näkymä työntekijöille osoitteessa [app.tyovuorolista.fi/oma](https://app.tyovuorolista.fi/oma). Siellä työntekijä näkee omat työvuoronsa kaikilta **julkaistuilta** työvuorolistoilta – sekä menneet että tulevat vuorot samassa aikajanassa.

> **Beta-vaihe:** Oma-portaali on vielä kokeilussa. Se pitää **aktivoida erikseen** – ota yhteyttä minuun (Antti, info@tyovuorolista.fi), niin laitan sen päälle työpaikallesi. Ilman aktivointia kutsu- ja kirjautumistoiminnot eivät ole käytössä.

Beta-vaiheessa portaali tarjoaa kolme toimintoa:

- **Omien vuorojen katselu** julkaistuilta listoilta
- **Vapaatoiveen ilmoittaminen** – toive vapaasta ajasta ilman palkkaa (ei lomatoivetta)
- **Toteutuneiden tuntien ilmoittaminen** – työntekijä kertoo toteutuneet ajat, sairasloman tai ei toteutuneen vuoron; esimies hyväksyy ne [Tuntien kirjaus](/posts/tuntien_kirjaus_opas) -näkymässä

Haluan ensin varmistaa, että perusdata kulkee oikein – eli jokainen näkee juuri omat vuoronsa, eikä mitään vähempää tai enempää. Lisää toimintoja tulee edelleen seuraaviin versioihin.

## Esimiehelle: näin otat Oma-portaalin käyttöön

### 1. Julkaise vähintään yksi työvuorolista

Työntekijä näkee portaalissa vain **julkaistujen** listojen vuorot. Luonnoslistan vuorot eivät näy.

Siirry **Julkaise**-näkymään, valitse lista ja paina **Merkitse lista julkaistuksi**. Lue tarvittaessa lisää [työvuorolistojen julkaisusta](/posts/tyovuorolistojen_julkaisu_ja_lahettaminen_tyontekijoille).

<img src="/blogPostImages/oma-portaali/julkaise-lista.png" alt="Julkaise-näkymä, jossa lista on merkitty julkaistuksi" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

### 2. Varmista, että työntekijällä on sähköpostiosoite

Kutsu ja kirjautuminen toimivat vain sähköpostilla. Työntekijän sähköposti täytyy olla tallennettuna työntekijätietoihin – sama osoite, johon kutsu lähetetään.

### 3. Kutsu työntekijä portaaliin

Avaa **Hallinta → Työntekijät**, klikkaa työntekijän nimeä listasta ja paina modaalissa **Kutsu Oma-portaaliin**.

<img src="/blogPostImages/oma-portaali/tyontekijalista.png" alt="Työntekijälista Hallinta-valikossa" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

<img src="/blogPostImages/oma-portaali/admin-kutsu.png" alt="Työntekijän tiedot -modaali, jossa Oma-portaali-osio ja Kutsu Oma-portaaliin -painike" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Työntekijä saa sähköpostiin henkilökohtaisen linkin, jolla hän kirjautuu ensimmäisen kerran. Linkki on tarkoitettu vain hänelle – älä välitä sitä eteenpäin.

Jos kutsu on jo lähetetty, näet tilan **Kutsu lähetetty** ja voit tarvittaessa lähettää linkin uudelleen (**Lähetä linkki uudelleen**).

### 4. Vapaatoiveet kalenterissa

Kun työntekijä ilmoittaa vapaatoiveen, se näkyy sinulle **kalenterissa** suunnittelua varten. Vapaatoive **ei** tule mukaan julkaistuun listaan, tulosteeseen tai sähköpostiin – se on vain suunnitteluvihje.

Voit silti merkitä työntekijälle vuoron vapaatoivepäivälle; järjestelmä varoittaa päällekkäisyydestä, mutta tallennus on mahdollinen.

### 5. Tunti-ilmoitukset (valinnainen)

Kun Oma-portaali on käytössä, työntekijät voivat ilmoittaa toteutuneet tunnit suoraan portaalista. Toiminto on oletuksena **päällä**, mutta voit poistaa sen käytöstä profiilista: **Profiili → Työntekijät voivat ilmoittaa toteutuneet tunnit Oma-portaalissa**.

Tärkeää: työntekijän ilmoitus **ei muuta palkkalaskentaa** ennen kuin hyväksyt sen. Ennen hyväksyntää [Tuntien kirjaus](/posts/tuntien_kirjaus_opas) -näkymässä lasketaan edelleen suunnitellut ajat tai ne toteutuneet ajat, jotka olet itse merkinnyt.

Hyväksyntä tapahtuu **Hallinta → Tuntien kirjaus** -sivulla ([app.tyovuorolista.fi/admin/LogHours](https://app.tyovuorolista.fi/admin/LogHours)):

- Välilehti **Odottaa hyväksyntää** näyttää kaikki odottavat ilmoitukset kerralla – punainen merkki kertoo odottavien määrän. Työntekijöitä tai ajanjaksoa ei tarvitse valita erikseen.
- Jokaisella rivillä näet työntekijän ehdotuksen ja painikkeet **Hyväksy** / **Hylkää**.
- **Hyväksy kaikki** hyväksyy kerralla kaikki odottavat rivit samalla kertaa.
- **Kumoa viimeisin hyväksyntä** peruu viimeisimmän hyväksynnän (yksittäisen rivin tai koko erän), jos merkitsit vahingossa väärin.

Hyväksyessäsi ilmoituksen järjestelmä kopioi tiedot samaan paikkaan, johon kirjaat tunnit itse: toteutuneet ajat, sairausloman tai merkinnän, ettei vuoro toteutunut. Sen jälkeen tuntiyhteenveto ja [palkkaraportti](/posts/palkkaraportti_ominaisuus) käyttävät hyväksyttyjä arvoja.

Jos muutat vuoron **suunniteltua** aloitus- tai lopetusaikaa kalenterissa tai vuoron tiedoissa, työntekijän odottava ilmoitus tyhjenee automaattisesti – työntekijän täytyy ilmoittaa uudelleen uusien suunniteltujen aikojen mukaan.

## Työntekijälle: näin käytät Oma-portaalia

### Ensimmäinen kirjautuminen

1. Avaa sähköpostiisi tullut kutsu. Viestin otsikko on muotoa **Kutsu Oma-portaaliin – [työnantajan nimi]** ja lähettäjänä näkyy tyovuorolista.fi.
2. Viestissä kerrotaan, kuka on kutsunut sinut Oma-portaaliin ja mitä portaalissa voi tehdä.
3. Klikkaa viestissä olevaa linkkiä **Kirjaudu Oma-portaaliin**.
4. Sinut ohjataan Oma-portaaliin osoitteeseen [app.tyovuorolista.fi/oma](https://app.tyovuorolista.fi/oma).

<img src="/blogPostImages/oma-portaali/kutsu-sahkoposti.png" alt="Oma-portaalikutsu sähköpostissa: otsikko Kutsu Oma-portaaliin, työnantajan nimi viestissä ja linkki kirjautumiseen" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Linkki on henkilökohtainen ja voimassa rajoitetun ajan. Älä jaa sitä eteenpäin.

### Omat vuorot

Etusivulla näet kalenterin ja listan omista vuoroistasi. Voit selata kuukausia ja avata yksittäisen vuoron tarkemmin klikkaamalla sitä.

Näkyvissä ovat kaikki vuorot **julkaistuilta** listoilta – myös menneet. Jos tulevia vuoroja ei ole, näet tekstin *Ei tulevia vuoroja*. Menneet vuorot saat näkyviin painikkeella **Näytä menneet vuorot**.

<img src="/blogPostImages/oma-portaali/tyontekija-vuorot.png" alt="Oma-portaali mobiilinäkymässä: kalenteri ja vuorolista" width="60%" style="max-width: 400px; display: block; margin: 20px auto;" />

Portaali on suunniteltu erityisesti mobiilikäyttöön, joten se toimii hyvin puhelimella.

### Ilmoita vapaatoive

Oma-portaalin etusivulta tai osoitteesta [app.tyovuorolista.fi/oma/vapaatoive](https://app.tyovuorolista.fi/oma/vapaatoive) voit ilmoittaa **vapaatoiveen** – toiveen vapaasta ajasta **ilman palkkaa**.

- Voit valita yhden päivän tai päivävälin (alku- ja loppupäivä).
- Voit lisätä valinnaisen lyhyen muistiinpanon (esim. *"Häät viikonloppuna"*).
- Vapaatoive **ei korvaa** lomaa eikä lomatoivetta, eikä se poista julkaistuja vuoroja.
- Vapaatoive **ei näy** omien vuorojen aikajanalla – se on erillisellä sivulla.
- Et voi ilmoittaa vapaatoivetta päivälle, jolla sinulla on jo **julkaistu työvuoro**.

Esimies näkee vapaatoiveesi kalenterissa suunnittelua varten. Vapaatoive ei tule mukaan julkaistuun työvuorolistaan, tulosteeseen tai sähköpostiin.

### Ilmoita toteutuneet tunnit

Kun vuoro on alkanut (mennyt tai meneillään oleva työvuoro), voit avata sen tarkemmin kalenterista tai listasta ja ilmoittaa, miten vuoro oikeasti meni.

Valitse yksi vaihtoehto:

- **Toteutuneet ajat** – voit muuttaa aloitus- ja/tai lopetusaikaa 15 minuutin tarkkuudella. Näet heti eron suunniteltuun vuoroon ja arvioidut tunnit.
- **Sairasloma** – ilmoitat, että et ollut töissä sairauden vuoksi.
- **Ei toteutunut** – vuoro ei toteutunut (esim. peruuntui), eikä siitä makseta työtunteja.

Paina **Lähetä ilmoitus**. Ilmoitus menee esimiehelle odottamaan hyväksyntää – näet tilan *Odottaa hyväksyntää* ja voit vielä muokata ilmoitusta ennen hyväksyntää.

Kun esimies on käsitellyt ilmoituksen:

- **Hyväksytty** – näet vihreän vahvistuksen, oman ilmoituksesi tiivistettynä ja laskennalliset tunnit.
- **Hylätty** – näet hylkäyksen ja sen ajat, joita esimies tai suunnitelma käyttää (esimies voi olla merkinnyt oikeat ajat itse [Tuntien kirjaus](/posts/tuntien_kirjaus_opas) -näkymässä).

Huomioita:

- Tuleviin vuoroihin ei voi vielä ilmoittaa tunteja etukäteen.
- Hylätyn ilmoituksen uudelleenlähetys ei ole vielä käytössä – jos ilmoitus meni väärin, sovi asiasta esimiehen kanssa.
- Ilmoitus koskee vain yhtä vuoroa kerrallaan; se ei korvaa lomatoivetta eikä yleistä poissaoloilmoitusta.

### Myöhemmät kirjautumiset

Tallenna osoite [app.tyovuorolista.fi/oma](https://app.tyovuorolista.fi/oma) kirjanmerkkeihin. Kun palaat myöhemmin, voit pyytää uuden kirjautumislinkin osoitteessa [app.tyovuorolista.fi/oma/kirjaudu](https://app.tyovuorolista.fi/oma/kirjaudu) – syötä sama sähköpostiosoite, joka on tallennettuna työntekijätietoihisi.

<img src="/blogPostImages/oma-portaali/kirjaudu.png" alt="Oma-portaalin kirjautumissivu, jossa syötetään sähköpostiosoite" width="60%" style="max-width: 400px; display: block; margin: 20px auto;" />

## Mitä portaali ei vielä tee

Beta-vaiheessa Oma-portaali **ei korvaa** sähköpostitse lähetettyä työvuorolistaa eikä tarjoa kaikkia suunniteltuja toimintoja:

- et voi ilmoittaa **lomatoivetta** portaalista (vapaatoive on eri asia)
- et voi uudelleenlähettää hylättyä tunti-ilmoitusta
- et voi hyväksyä tai hylätä esimiehen ehdottamia vuoromuutoksia
- et näe muiden työntekijöiden vuoroja
- et näe luonnoslistojen vuoroja

Näitä ja muita työntekijän toimintoja suunnitellaan seuraavaan versioon.

## Palautetta beta-testauksesta?

Jos testaat Oma-portaalia, kerro mielellään, toimiiko kaikki odotetusti: näkyvätkö oikeat vuorot, toimiiko vapaatoiveen ilmoittaminen, näkyykö se esimiehen kalenterissa, ja kulkevatko tunti-ilmoitukset odotetusti työntekijältä esimiehen hyväksyntään? Viesti tulee suoraan minulle: **info@tyovuorolista.fi**.
