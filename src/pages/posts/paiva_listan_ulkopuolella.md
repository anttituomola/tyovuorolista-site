---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Kun klikkaat päivää, joka ei ole muokattavalla listalla'
pubDate: 2026-09-28
description: 'Kalenteri kertoo, mille listalle klikattu päivä kuuluu, ja tarjoaa sopivan toiminnon: lisää vuoro julkaistulle listalle, vaihda listaa, luo uusi lista tai kirjaa toteutuneet tunnit.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/paiva-listan-ulkopuolella/julkaistu-lista.png'
    alt: 'Ikkuna Lista on julkaistu: Lisää vuoro julkaistulle listalle tai Palauta lista luonnokseksi.'
    layout: narrow
tags: ['päivitykset', 'uudet ominaisuudet', 'työvuorolistat', 'ohjeet']
---

Kun klikkaat kalenterissa päivää, joka ei kuulu muokattavaan listaan, kalenteri kertoo nyt, mille listalle päivä kuuluu. Samassa ikkunassa on toiminto, jolla pääset jatkamaan. Aiemmin klikkaus ei tehnyt mitään tai näytti hetken ilmoituksen.

Ikkunan sisältö riippuu päivästä:

- **Päivä on julkaistulla listalla:** lisää vuoro suoraan julkaistulle listalle tai palauta lista luonnokseksi.
- **Päivä on toisella listalla:** vaihda se muokattavaksi listaksi.
- **Päivällä ei ole listaa:** luo uusi lista valmiilla ehdotuksella.
- **Päivä on mennyt:** kirjaa toteutuneet tunnit Tuntien kirjauksessa.

Kun valitset toiminnon, uuden vuoron ikkuna aukeaa klikkaamallesi päivälle ja kellonajalle. Sinun ei tarvitse etsiä päivää uudelleen.

## Esihenkilölle

### Päivä on julkaistulla listalla

Julkaistua listaa voi nyt muuttaa kahdella tavalla.

<img src="/blogPostImages/paiva-listan-ulkopuolella/julkaistu-lista.png" alt="Ikkuna Lista on julkaistu. Lisää vuoro julkaistulle listalle: työntekijä saa ilmoituksen heti. Palauta lista luonnokseksi: työntekijät eivät näe listaa ennen uudelleenjulkaisua." width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

**Lisää vuoro julkaistulle listalle** sopii yksittäiseen muutokseen. Lista pysyy julkaistuna, ja työntekijä saa ilmoituksen heti, kun tallennat. Vuoroikkunan yläreunassa lukee sama asia, joten näet aina, milloin muutos lähtee työntekijälle.

<img src="/blogPostImages/paiva-listan-ulkopuolella/vuoro-julkaistulle.png" alt="Luo uusi vuoro -ikkuna, jonka yläreunassa lukee: Lista on julkaistu. Työntekijä saa ilmoituksen heti, kun tallennat." width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

Olemassa olevaa vuoroa muokkaat samalla tavalla. Klikkaa julkaistun listan vuoroa ja valitse **Muokkaa vuoroa…**.

**Palauta lista luonnokseksi** sopii isompiin muutoksiin. Lista piilotetaan työntekijöiden Oma-portaalista ja kalenterisynkasta, kunnes julkaiset sen uudelleen. Muutoksista lähtee ilmoitus vasta uudelleenjulkaisussa. Kun olet palauttanut listan, kalenterin yläreunassa näkyy muistutus niin kauan kuin lista on luonnos. Siinä näkyy myös, montako muutosta odottaa ilmoittamista.

<img src="/blogPostImages/paiva-listan-ulkopuolella/muistutus.png" alt="Kalenterin yläreunan muistutus: Lista on palautettu luonnokseksi. Työntekijät eivät näe sitä Omassa. 1 muutos odottaa ilmoittamista. Julkaise uudelleen." width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Muistutuksen **Julkaise uudelleen** vie Julkaise-näkymään. Listanvalitsimessa tällainen lista on merkitty sanalla **Palautettu**. Palauttamisen ja uudelleenjulkaisun vaiheet: [Julkaistun työvuorolistan muuttaminen](/posts/julkaistun_listan_muokkaaminen).

Ravintola-alan MaRa-TES vaatii, että julkaistua listaa muutetaan työnantajan ja työntekijän yhteisellä suostumuksella. MaRa-paikoissa ikkuna muistuttaa tästä molemmissa vaihtoehdoissa.

### Päivä on toisella listalla

Jos päivä kuuluu toiseen luonnoslistaan, ikkuna nimeää molemmat listat. **Vaihda listaan** avaa sen listan muokattavaksi.

<img src="/blogPostImages/paiva-listan-ulkopuolella/vaihda-lista.png" alt="Ikkuna Päivä kuuluu listaan 26.10.–8.11.2026: Muokattavana on nyt lista 28.9.–11.10.2026. Vaihda listaan." width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

### Päivällä ei ole listaa

Ikkuna ehdottaa uutta listaa, joka sisältää klikkaamasi päivän.

<img src="/blogPostImages/paiva-listan-ulkopuolella/ei-listaa.png" alt="Ikkuna 11.11.2026 ei ole millään listalla. Ehdotus: 9.11.–22.11.2026 (2 viikkoa). Luo lista." width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

Ehdotus lasketaan näin:

- **Pituus** on sama kuin tiimisi listoissa yleensä.
- **Alkupäivä** jatkaa edellisen listan rytmiä, joten listojen väliin ei jää aukkoa.
- Jos paikallasi on TES:n työaikajakso ja listasi ovat seuranneet sitä, ehdotus noudattaa jaksoa.
- Jos ehdotus osuisi seuraavan listan päälle, sitä lyhennetään.

**Luo lista** avaa tutun Uusi lista -ikkunan valmiiksi täytettynä. Voit muuttaa päiviä ja pituutta ennen tallennusta.

<img src="/blogPostImages/paiva-listan-ulkopuolella/uusi-lista-esitaytetty.png" alt="Uusi lista -ikkuna: Lista alkaa 9.11.2026, Listan pituus 2 viikkoa, Lista päättyy 22.11.2026." width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

### Mennyt päivä

Toteutuneet tunnit kirjataan [Tuntien kirjauksessa](/posts/tuntien_kirjaus_opas), ei kalenterissa. Siksi menneen päivän ikkunassa ensimmäisenä on **Kirjaa toteuma**. Se avaa Tuntien kirjauksen oikealle kuukaudelle. Jos klikkasit jonkun vuoroa, työntekijä on valmiiksi valittuna.

<img src="/blogPostImages/paiva-listan-ulkopuolella/mennyt-paiva.png" alt="Menneen päivän ikkuna: Päivä 23.9.2026 on jo mennyt. Toteutuneet tunnit kirjataan Tuntien kirjauksessa. Kirjaa toteuma, Lisää vuoro julkaistulle listalle silti, Palauta lista luonnokseksi." width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

Suunnitelmaa voit silti muuttaa, sillä muut valinnat ovat ikkunassa edelleen. Jos lisäät vuoron menneelle päivälle muokattavalla listalla, vuoroikkuna muistuttaa Tuntien kirjauksesta, mutta mitään ei estetä.

Jos päivän jakso on jo viety Fivaldiin, ikkuna kertoo sen: *Tämä jakso on viety palkanlaskentaan. Muutos ei siirry sinne automaattisesti.* Silloin korjaus pitää viedä palkkoihin erikseen: [Tuntien vienti Fivaldiin](/posts/fivaldi_tuntien_vienti).

### Puhelimella

Suunnittelunäkymän viikkonuolet eivät enää pysähdy listan rajoille. Listan ulkopuoliset päivät näkyvät himmeinä, ja niitä napauttamalla saat samat valinnat alapaneelina. Pyyhkäisy pysyy listan sisällä, joten et päädy listan ulkopuolelle vahingossa.

<img class="blogPhone" src="/blogPostImages/paiva-listan-ulkopuolella/mobiili-valinta.png" alt="Puhelimen suunnittelunäkymä, jonka alareunaan on avautunut paneeli Lista on julkaistu: Lisää vuoro julkaistulle listalle, Palauta lista luonnokseksi." />

Julkaistulla listalla **+**-painike näkyy nyt myös. Se avaa samat kaksi vaihtoehtoa: lisää vuoro suoraan tai palauta lista luonnokseksi.

## Työntekijälle

Kun esihenkilö lisää tai muuttaa vuoron julkaistulla listalla, muutos näkyy Oma-portaalissa heti. Ilmoituskelloon tulee viesti, esimerkiksi **Sinulle on lisätty vuoro** tai **Vuoroasi on muutettu**. Sähköposti tulee, jos olet kytkenyt sen päälle Oma-portaalin **Profiili**-välilehdeltä. Lisää ilmoituksista: [Ilmoitukset](/posts/ilmoitukset_ohje).
