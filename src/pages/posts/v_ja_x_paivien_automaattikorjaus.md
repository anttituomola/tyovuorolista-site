---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Puuttuvat V- ja X-päivät yhdellä klikkauksella'
pubDate: 2026-08-07
description: 'TES-huomautukset-paneeli korjaa nyt MaRa TES:n puuttuvat V- ja X-vapaapäivät automaattisesti: yksi klikkaus lisää merkinnät tyhjille päiville muokattavan listan sisällä.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/tes-korjaa-automaattisesti/tes-huomautukset-korjaa-painike.png'
    alt: 'TES-huomautukset-paneeli, jossa V- ja X-päivähuomautusten riveillä Korjaa-painikkeet.'
tags: ['TES', 'ravintola-ala', 'työvuorosuunnittelu', 'uusi ominaisuus']
---

**Lyhyesti:** MaRa TES vaatii, että jokaiselta täydeltä työviikolta
merkitään listaan **V-päivä (viikkolepo)** ja jokaiselta täydeltä
viikolta ansaittu **X-päivä (lisävapaapäivä)** jakson sisällä. Näiden
merkitseminen käsin jokaiselle työntekijälle joka viikolle on
listanteon turhauttavinta puuhaa, joten nyt TES-huomautukset-paneeli
korjaa ne puolestasi. Yksi klikkaus **Korjaa**-painikkeesta lisää
puuttuvat merkinnät tyhjille päiville, eikä sovellus koske mihinkään
muokattavan listan ulkopuolella.

## Miksi V- ja X-päivät pitää merkitä?

Ravintola-alan [kolmiviikkoisjaksossa](/posts/kolmiviikkoisjakso_ravintola-alalla)
jokaiselta täydeltä työviikolta (vähintään 5 työpäivää) on annettava
**vähintään 30 tunnin viikkolepo**, joka merkitään listaan V-päivänä.
Lisäksi jokainen täysi työviikko ansaitsee **X-päivän** eli
lisävapaapäivän (vähintään 24 tuntia), jonka voi sijoittaa mihin
tahansa kohtaan kolmiviikkoisjakson sisällä.

Käytännössä tämä tarkoittaa sitä, että viiden työpäivän viikolle pitää
muistaa raahata V ja X tyhjille päiville: jokaiselle työntekijälle,
joka viikolle, joka jaksolle. Jos merkintä unohtuu, lista ei ole TES:n
mukainen, vaikka työntekijä todellisuudessa olisi vapaalla.

## Näin automaattikorjaus toimii

TES-huomautukset-paneeli on näyttänyt puuttuvat V- ja X-päivät jo
aiemmin. Nyt huomautusten riveillä on **Korjaa**-painike:

<img src="/blogPostImages/tes-korjaa-automaattisesti/tes-huomautukset-korjaa-painike.png" alt="TES-huomautukset-paneeli: työntekijällä kolme puuttuvaa V-päivää ja puuttuvia X-päiviä, jokaisen huomautuksen vieressä Korjaa-painike ja ryhmän yläreunassa Korjaa kaikki." width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Esimerkin Venla tekee viisi vuoroa joka viikko, mutta viikonloput ovat
merkitsemättä: lista huomauttaa kolmesta puuttuvasta V-päivästä ja
jakson puuttuvista X-päivistä. Yksittäisen huomautuksen voi korjata
omasta **Korjaa**-painikkeestaan, tai koko työntekijän puuttuvat
vapaapäivät kerralla ryhmän yläreunan **Korjaa kaikki** -painikkeesta.

Korjauksen jälkeen merkinnät ilmestyvät kalenteriin ja paneeli
päivittyy välittömästi:

<img src="/blogPostImages/tes-korjaa-automaattisesti/kalenteri-korjauksen-jalkeen.png" alt="Kalenteri korjauksen jälkeen: lauantaille ilmestynyt V-merkintä ja sunnuntaille X-merkintä, yläreunassa ilmoitus kuudesta lisätystä vapaapäivästä ja vihreä TES ok -merkki." width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

<img src="/blogPostImages/tes-korjaa-automaattisesti/tes-paneeli-korjauksen-jalkeen.png" alt="TES-huomautukset-paneeli korjauksen jälkeen: ei huomautuksia tällä listalla." width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

## Mihin sovellus merkinnät sijoittaa?

Automaattikorjaus noudattaa muutamaa yksinkertaista sääntöä:

- **Vain tyhjille päiville.** Merkintää ei lisätä päivälle, jolla on
  jo vuoro tai muu vapaa-merkintä (V, X, VV, vuosiloma tai TS).
- **V menee viikolle, jolta se puuttuu**, mieluiten toisen
  vapaapäivän viereen, jotta lepojaksosta tulee pidempi.
- **X menee oletuksena ansaitsevalle viikolle.** Jos kyseisellä
  viikolla ei ole tilaa, X sijoittuu lähimmälle mahdolliselle viikolle
  jakson sisällä, aivan kuten TES sallii.
- **Ei kosketuksia muihin listoihin.** Merkinnät lisätään vain
  parhaillaan muokattavan listan aikavälille, vaikka huomautuksen
  viikko tai jakso ulottuisi pidemmälle.

Jos viikolla ei ole yhtään tyhjää päivää, sovellus kertoo sen eikä
arvaa puolestasi: sellainen tilanne ratkeaa vain siirtämällä vuoroja.

Jos sijoitus ei miellytä, merkintää voi siirtää raahaamalla kuten
mitä tahansa muuta vapaa-merkintää.

## Mitä automaattikorjaus ei tee?

Korjauspainike ilmestyy vain puuttuvien V- ja X-päivien riveille, koska
ne ovat ainoa huomautustyyppi, joka ratkeaa lisäämällä merkintä tyhjälle
päivälle. Muut huomautukset (kuten liian lyhyt vuorokausilepo, yli 7
peräkkäistä työpäivää tai jakson tuntirajat) vaativat aina oikeiden
työvuorojen siirtämistä tai poistamista, eikä sellaista ole
vastuullista tehdä yhdellä klikkauksella.

Ominaisuus on myös luontaisesti **MaRa TES -kohtainen**: kaupan,
kiinteistöpalvelualan ja SOSTES:n sopimuksissa tyhjä päivä listassa
luetaan automaattisesti vapaaksi, joten erillisiä merkintöjä ei
tarvita eikä niitä puutu.

## Käyttöönotto

Automaattikorjaus on käytössä kaikilla ravintoloilla ja kahviloilla,
joilla on MaRa TES valittuna. Jos et ole vielä ottanut TES-tukea
käyttöön, katso [näin otat TES-tuen käyttöön](/posts/nain_otat_tes-tuen_kayttoon).
Lisätietoa tuen laajuudesta löydät postauksesta
[TES-tuki työvuorosuunnittelussa](/posts/tes_tuki_tyovuorosuunnittelussa).
