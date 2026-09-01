---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Ylläpitäjät: kutsu toinen henkilö luomaan ja hyväksymään vuorolistoja'
pubDate: 2026-09-01
description: 'Voit nyt kutsua toisen ylläpitäjän itse asetuksista. Hän saa samat oikeudet kuin sinä: listojen luonnin ja julkaisun, työntekijät ja tilauksen.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/yllapitajien_hallinta/yllapitajat.png'
    alt: 'Asetusten Ylläpitäjät-osio, jossa omistaja ja kutsuttu ylläpitäjä.'
tags: ['päivitykset', 'uudet ominaisuudet', 'hallinta']
---

Toisen henkilön lisääminen ylläpitäjäksi tyovuorolista.fi-sovellukseen onnistuu **Hallinta → Asetukset** -sivun **Ylläpitäjät**-osiosta.

Kutsuttu näkee ja voi muokata kaikkia toimipaikan tietoja: työvuorolistoja, työntekijöitä, asetuksia ja tilausta. Kaikki ylläpitäjät ovat tasavertaisia. Erillistä katselijaroolia ei vielä ole.

<img src="/blogPostImages/yllapitajien_hallinta/yllapitajat.png" alt="Ylläpitäjät-osio asetuksissa: omistaja ja kutsuttu, joka ei ole vielä kirjautunut" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Taulukossa näkyy kunkin ylläpitäjän nimi, sähköposti ja tila. Omistajalla (ensimmäinen tili) on **Omistaja**-merkintä, eikä häntä voi poistaa. Jos kutsuttu ei ole vielä avannut linkkiä, rivillä lukee **Kutsuttu, ei vielä kirjautunut**.

## Kaksi tapaa kutsua

### 1. Valitse työntekijä (ensisijainen)

Jos henkilö on jo työntekijälistalla, valitse hänet hakukentästä. Nimi ja sähköposti tulevat valmiina työntekijän tiedoista, joten osoitetta ei tarvitse kirjoittaa uudestaan. Jos sähköpostia ei ole tallennettu, lomake kysyy sen ja se jää työntekijän tietoihin, sama osoite kelpaa myös [Oma-portaaliin](/posts/oma_portaali_ohje).

<img src="/blogPostImages/yllapitajien_hallinta/kutsu-tyontekija.png" alt="Kutsu ylläpitäjä: työntekijäksi valittu Jussi Mäkelä" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Paina **Kutsu**. Vahvistus kertoo, kenelle kutsu menee ja mitä oikeuksia se antaa.

<img src="/blogPostImages/yllapitajien_hallinta/kutsu-vahvistus.png" alt="Vahvistus: työntekijä kutsutaan ylläpitäjäksi täysin oikeuksin" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Olemassa olevan työntekijän ylentäminen ei kasvata työntekijämäärää, eikä se esty tilausrajaan. Vuorot, tuntikirjaukset ja lomakertymät pysyvät ennallaan.

### 2. Kutsu uusi henkilö

Jos kutsuttavaa ei ole vielä työntekijöissä, vaihda **Kutsu uusi henkilö** ja täytä etunimi, sukunimi ja sähköposti.

<img src="/blogPostImages/yllapitajien_hallinta/kutsu-uusi-henkilo.png" alt="Uuden henkilön kutsu: etunimi, sukunimi ja sähköposti" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Uusi henkilö lisätään samalla työntekijälistalle (ilman tiimiä) ja hän vie yhden paikan tilauksesta. Jos Mini-paketin tai muun tilauksen raja on täynnä, kutsu estyy ja näet kehotteen päivittää tilaus. Tiimin voit asettaa myöhemmin [työntekijöiden hallinnasta](/posts/tyontekijoiden_hallinta).

<img src="/blogPostImages/yllapitajien_hallinta/kutsu-uusi-henkilo-vahvistus.png" alt="Vahvistus uuden henkilön kutsulle: lisätään myös työntekijälistalle" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Tarkista osoite vahvistuksesta ennen lähettämistä. Väärään osoitteeseen mennyt kutsu avaisi toimipaikan kaikki tiedot väärälle vastaanottajalle.

## Miten kutsuttu kirjautuu

Kutsuttu saa sähköpostin osoitteesta info@tyovuorolista.fi. Viestissä lukee kuka kutsui ja mihin toimipaikkaan, ja mukana on henkilökohtainen kirjautumislinkki. Linkkiä ei pidä välittää eteenpäin.

Linkin avaaminen vie suoraan hallintapaneeliin. Jos linkki on vanhentunut, sama osoite toimii **Unohtuiko salasana** -polulla tai Google-kirjautumisella.

Jos henkilöllä on jo Työvuorolista-tili (toinen toimipaikka tai vanha tili), uutta tunnusta ei luoda. Sama kirjautuminen liittyy tähän toimipaikkaan, ja hän voi käyttää molempia.

Kutsuttu ylläpitäjä, joka tekee myös vuoroja, näkee omat vuoronsa edelleen [Oma-portaalissa](/posts/oma_portaali_ohje) osoitteessa [app.tyovuorolista.fi/oma](https://app.tyovuorolista.fi/oma). Kirjautuminen vie oletuksena hallintapaneeliin.

Jos kutsu on jo lähetetty, voit lähettää linkin uudestaan samasta paikasta.

## Ylläpitäjän poisto

Omistajaa ei voi poistaa. Muita ylläpitäjiä voi poistaa kuka tahansa ylläpitäjä, myös itsensä.

Poisto irrottaa vain ylläpitäjäoikeudet. Työntekijärivi, vuorot ja tuntikirjaukset jäävät. Vahvistus kertoo tämän ennen kuin poisto tapahtuu.

<img src="/blogPostImages/yllapitajien_hallinta/poista-yllapitaja.png" alt="Varoitus: ylläpitäjäoikeudet poistetaan, työntekijärivi säilyy" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Käänteinen pätee myös: työntekijän poisto tai passivointi **ei** poista ylläpitäjäoikeuksia. Jos henkilö on ylläpitäjä, työntekijän poisto-ikkuna varoittaa siitä. Oikeudet otetaan pois tästä samasta Ylläpitäjät-osiosta.

## Mitä kannattaa tietää

**Työntekijäpaikat.** Hinta määräytyy työntekijämäärästä, ylläpitäjien määrä ei nosta hintaa erikseen. Uusi henkilö vie kuitenkin yhden työntekijäpaikan, koska jokainen ylläpitäjä on myös työntekijä. Nykyisen työntekijän ylentäminen ei vie lisäpaikkaa. Hinnat: [hinnoittelu](/hinnoittelu).

**Laskutus.** Kutsuttu pääsee myös tilaukseen, eli hän voi esimerkiksi perua tilauksen. Vahvistusteksti kertoo tämän tarkoituksella. Rajoitetumpia rooleja (vain katselu, ei laskutusta) ei vielä ole.

**Ilmoitukset.** Uusi ylläpitäjä alkaa saada [ilmoitukset](/posts/ilmoitukset_ohje) automaattisesti: avoimiin vuoroihin ilmoittautumiset, tuntiraportit, sairastumiset ja julkaisumuistutukset.

**Usea toimipaikka.** Sama henkilö voi olla ylläpitäjä tai työntekijä useassa toimipaikassa. Jokaisella toimipaikalla on omat työntekijätiedot ja omat ylläpitäjäoikeudet.

Kysyttävää? Tukichat vastaa sovelluksen oikeasta alakulmasta, tai laita viestiä osoitteeseen [info@tyovuorolista.fi](mailto:info@tyovuorolista.fi).
