---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Oma-portaali: työntekijän oma näkymä vuoroihin (beta)'
pubDate: 2026-07-01
description: 'Ohje Oma-portaalin käyttöön: työntekijä näkee omat julkaistut vuoronsa, ilmoittaa vapaatoiveen ja toteutuneet tunnit sekä ilmoittautuu avoimiin vuoroihin.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/oma-portaali/tyontekija-vuorot.png'
    alt: 'Oma-portaalin näkymä, jossa työntekijä näkee omat vuoronsa kalenterissa.'
tags: ["päivitykset", "beta", "työntekijät", "julkaisu"]
---

*Päivitetty 11.7.2026: lisätty tuntien ilmoittaminen (tunti-ilmoitus) ja avoimet vuorot.*

**Oma-portaali** on uusi, erillinen näkymä työntekijöille osoitteessa [app.tyovuorolista.fi/oma](https://app.tyovuorolista.fi/oma). Siellä työntekijä näkee omat työvuoronsa kaikilta **julkaistuilta** työvuorolistoilta – sekä menneet että tulevat vuorot samassa aikajanassa.

> **Beta-vaihe:** Oma-portaali on vielä kokeilussa. Se pitää **aktivoida erikseen** – ota yhteyttä minuun (Antti, info@tyovuorolista.fi), niin laitan sen päälle työpaikallesi. Ilman aktivointia kutsu- ja kirjautumistoiminnot eivät ole käytössä.

Portaali tarjoaa tällä hetkellä neljä toimintoa:

- **Omien vuorojen katselu** julkaistuilta listoilta
- **Vapaatoiveen ilmoittaminen** – toive vapaasta ajasta ilman palkkaa (ei lomatoivetta)
- **Tuntien ilmoittaminen** – toteutuneet työajat, sairasloma tai toteutumaton vuoro suoraan vuorolta *(uusi)*
- **Avoimiin vuoroihin ilmoittautuminen** – esimies julkaisee avoimia vuoroja, joihin työntekijät voivat ilmoittautua *(uusin, aktivoidaan erikseen)*

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

### 5. Työntekijöiden tunti-ilmoitusten hyväksyntä

Kun työntekijä ilmoittaa toteutuneet tuntinsa portaalista (katso työntekijän ohje alempana), ilmoitukset kertyvät **Tuntien kirjaus** -näkymään uudelle välilehdelle **Odottaa hyväksyntää**. Välilehden kohdalla näkyy laskuri, kun käsiteltävää on.

- **Hyväksy** siirtää työntekijän ilmoittamat ajat toteutuneiksi tunneiksi – samat tunnit, joita palkkaraportti käyttää.
- **Hylkää** jättää suunnitellut ajat voimaan; voit samalla kirjata oikeat ajat itse.
- **Hyväksy kaikki** käsittelee koko listan kerralla, ja **Kumoa viimeisin hyväksyntä** palauttaa tilanteen, jos hyväksyit vahingossa.

<img src="/blogPostImages/oma-portaali/tuntien-hyvaksynta.png" alt="Tuntien kirjaus -näkymän Odottaa hyväksyntää -välilehti, jossa työntekijän tunti-ilmoitus odottaa käsittelyä" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Tunti-ilmoitus on oletuksena päällä, kun Oma-portaali on aktivoitu. Jos et halua käyttää sitä, voit kytkeä sen pois työpaikan asetuksista (**Hallinta → Profiili**).

### 6. Avoimet vuorot: suunnittele vuoro ilman tekijää *(uusin)*

**Avoin vuoro** on työvuoro, jolle ei ole vielä valittu tekijää. Suunnittelet sen kalenteriin kuten minkä tahansa vuoron – valitse vain työntekijävalikosta ylin vaihtoehto **Avoin vuoro**. Avoin vuoro näkyy kalenterissa harmaana.

<img src="/blogPostImages/oma-portaali/avoin-vuoro-luonti.png" alt="Vuoron luonti kalenterissa, työntekijävalikosta valittu Avoin vuoro" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Avoimet vuorot ovat aluksi vain sinun nähtävissäsi. Kun haluat tarjota niitä työntekijöille:

- **Koko listan avoimet vuorot kerralla:** Julkaise-näkymässä on painike **Julkaise avoimet vuorot**. Tämä on eri asia kuin listan julkaisu – voit tarjota avoimia vuoroja jo ennen kuin lista on julkaistu.
- **Yksittäinen vuoro:** avaa avoin vuoro kalenterista ja paina **Julkaise työntekijöille**. Samasta paikasta voit myös perua julkaisun.

Julkaisun jälkeen vuoro näkyy tiimin työntekijöille Oma-portaalissa, ja he voivat **ilmoittautua** siihen. Useampi työntekijä voi ilmoittautua samaan vuoroon – sinä valitset, kuka vuoron saa.

Ilmoittautumiset näet avaamalla vuoron kalenterista. **Hyväksy** antaa vuoron ilmoittautuneelle: vuoro siirtyy hänen nimiinsä, ilmestyy hänen aikajanalleen portaalissa ja muiden ilmoittautumiset hylätään automaattisesti. Ennen hyväksyntää järjestelmä tarkistaa vielä, ettei työntekijälle ole tullut päällekkäistä vuoroa ilmoittautumisen jälkeen.

<img src="/blogPostImages/oma-portaali/avoin-vuoro-ilmoittautumiset.png" alt="Avoimen vuoron tiedot kalenterissa: ilmoittautuneet työntekijät ja Hyväksy-painike" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

> Avoimet vuorot on tuorein lisäys ja se aktivoidaan työpaikoille erikseen samaan tapaan kuin koko portaali – laita viestiä, jos haluat kokeilla.

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

### Ilmoita toteutuneet tunnit *(uusi)*

Kun vuoro on alkanut tai päättynyt, voit ilmoittaa siitä toteumat suoraan portaalista. Avaa vuoro aikajanalta ja täytä **tunti-ilmoitus**:

- **Toteutuneet ajat** – jos aloitit tai lopetit eri aikaan kuin listaan oli suunniteltu
- **Sairasloma** – jos vuoro jäi väliin sairauden takia
- **Vuoro ei toteutunut** – jos vuoro peruuntui kokonaan

<img src="/blogPostImages/oma-portaali/tunti-ilmoitus.png" alt="Vuoron tiedot Oma-portaalissa: tunti-ilmoituslomake, jossa toteutuneet ajat" width="60%" style="max-width: 400px; display: block; margin: 20px auto;" />

Ilmoitus jää tilaan **Odottaa hyväksyntää**, kunnes esimies käsittelee sen. Voit muokata ilmoitusta siihen asti. Hyväksytyt tunnit siirtyvät suoraan palkanlaskennan pohjaksi – erillisiä lappuja tai viestejä ei enää tarvita.

### Ilmoittaudu avoimeen vuoroon *(uusin)*

Jos työpaikallasi on käytössä **avoimet vuorot**, näet etusivulla painikkeen **Avoimia vuoroja tarjolla** aina, kun tarjolla on jotain. Sama näkymä löytyy osoitteesta [app.tyovuorolista.fi/oma/avoimet](https://app.tyovuorolista.fi/oma/avoimet).

<img src="/blogPostImages/oma-portaali/avoimet-vuorot-tyontekija.png" alt="Avoimet vuorot Oma-portaalissa: tarjolla oleva vuoro ja Ilmoittaudu vuoroon -painike" width="60%" style="max-width: 400px; display: block; margin: 20px auto;" />

- Näet oman tiimisi avoimet vuorot päivämäärineen ja kellonaikoineen.
- **Ilmoittaudu vuoroon** lähettää esimiehelle pyynnön – vuoro ei siis tule sinulle heti, vaan esimies valitsee ilmoittautuneista.
- Voit perua ilmoittautumisen niin kauan kuin se odottaa käsittelyä.
- Kun esimies hyväksyy ilmoittautumisesi, vuoro ilmestyy omalle aikajanallesi. Hylätyistä ja hyväksytyistä ilmoittautumisista näet tiedon samalla sivulla.

Järjestelmä estää ilmoittautumisen vuoroon, joka menee päällekkäin omien vuorojesi kanssa.

### Myöhemmät kirjautumiset

Tallenna osoite [app.tyovuorolista.fi/oma](https://app.tyovuorolista.fi/oma) kirjanmerkkeihin. Kun palaat myöhemmin, voit pyytää uuden kirjautumislinkin osoitteessa [app.tyovuorolista.fi/oma/kirjaudu](https://app.tyovuorolista.fi/oma/kirjaudu) – syötä sama sähköpostiosoite, joka on tallennettuna työntekijätietoihisi.

<img src="/blogPostImages/oma-portaali/kirjaudu.png" alt="Oma-portaalin kirjautumissivu, jossa syötetään sähköpostiosoite" width="60%" style="max-width: 400px; display: block; margin: 20px auto;" />

## Mitä portaali ei vielä tee

Beta-vaiheessa Oma-portaali **ei korvaa** sähköpostitse lähetettyä työvuorolistaa eikä tarjoa kaikkia suunniteltuja toimintoja:

- et voi ilmoittaa **lomatoivetta** portaalista (vapaatoive on eri asia; sairasloman voit ilmoittaa tunti-ilmoituksella)
- et voi hyväksyä tai hylätä esimiehen ehdottamia vuoromuutoksia
- et voi vaihtaa vuoroja työkaverin kanssa
- et näe muiden työntekijöiden vuoroja
- et näe luonnoslistojen vuoroja (poikkeuksena avoin vuoro, joka on annettu sinulle ilmoittautumisen kautta)

Näitä ja muita työntekijän toimintoja suunnitellaan seuraaviin versioihin.

## Palautetta beta-testauksesta?

Jos testaat Oma-portaalia, kerro mielellään, toimiiko kaikki odotetusti: näkyvätkö oikeat vuorot, toimivatko vapaatoive, tunti-ilmoitus ja avoimiin vuoroihin ilmoittautuminen? Viesti tulee suoraan minulle: **info@tyovuorolista.fi**.
