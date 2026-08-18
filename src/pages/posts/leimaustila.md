---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Leimaustila: täytä viikon vuorot klikkaamalla'
pubDate: 2026-08-18
description: 'Valitse työntekijä, klikkaa kalenteria. Vuoro syntyy oletuspituudella ilman raahausta tai luonti-ikkunaa. Tietokoneen nopein tapa täyttää lista.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/leimaustila/hero.png'
    alt: 'Leimaustila päällä: Emma valittuna ja viikon vuorot merkitty klikkaamalla.'
tags: ['päivitykset', 'uudet ominaisuudet', 'kalenteri', 'ohjeet']
---

Työvuorolistan täyttäminen tietokoneella on ollut raahausta sivupalkista ruudukkoon, tai klikkaus joka avaa luonti-ikkunan. Molemmat toimivat edelleen. **Leimaustila** on kolmas tapa: valitset työntekijän kerran ja klikkaat kellonaikoja. Vuoro syntyy heti, pituutena työntekijän (tai tiimin) oletus.

Sama logiikka kuin raahauksessa, ilman raahausta. Viikon vuorot yhdelle ihmiselle syntyvät muutamalla klikkauksella.

<video controls preload="metadata" poster="/blogPostImages/leimaustila/leimaustila-demo-poster.png" width="100%" style="max-width: 900px; display: block; margin: 20px auto;">
  <source src="/blogPostImages/leimaustila/leimaustila-demo.webm" type="video/webm" />
  <source src="/blogPostImages/leimaustila/leimaustila-demo.mp4" type="video/mp4" />
</video>

Leimaustila on tietokoneen kalenterissa. Puhelimessa käytät plus-painikkeen pikaluontia, siitä on oma ohje: [Työvuorolista mobiililaitteilla](/posts/tyovuorolista_sovellus_nyt_kaytettavissa_mobiililaitteilla).

## Miten se toimii

Avaa **Suunnittele**-näkymä ja valitse julkaisematon lista.

1. Paina työntekijälistan yläreunan **leimauskuvaketta** (leimasin). Kuvake muuttuu siniseksi.
2. Sininen palkki ilmestyy kalenterin yläpuolelle: *Leimaustila: valitse työntekijä · Esc lopettaa*.
3. Klikkaa työntekijää sivupalkista. Palkki näyttää etunimen ja oletuspituuden, esimerkiksi *Emma · 8 h*. Valitun kortin ympärille tulee kehys.
4. Klikkaa aikaruudukkoa siinä kohdassa, josta vuoron haluat alkavan. Vuoro syntyy heti oletuspituudella.

Tila jää päälle. Klikkaa seuraavaa päivää, vaihda työntekijää sivupalkista, jatka. Lopeta **Escillä**, palkin rastilla tai samalla leimauskuvakkeella.

<img src="/blogPostImages/leimaustila/hero.png" alt="Leimaustila: Emma valittuna, viikon vuorot merkitty klikkaamalla" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Oletuspituus tulee työntekijän tiedoista, ja jos sitä ei ole asetettu, tiimin oletuksesta. Kellonaika on se, jota klikkasit — ruudukko napsahtaa tiimin aikaportaisiin.

## Vapaa ja X samalla tavalla

Klikkaa kalenterin **Vapaa / tapahtuma** -riviä leimaustilan ollessa päällä. Ensimmäinen merkintä viikolle on **V**, seuraava saman viikon klikkaus samalle työntekijälle on **X**. Sama automaattisääntö kuin raahauksessa koko päivän riville.

Päiväkohtaisen tapahtuman (muistiinpanon) lisääminen ei onnistu leimaustilan aikana, koska yksi klikkaus leimaa vapaan. Poistu tilasta ja klikkaa riviä normaalisti. Ohje: [päiväkohtaiset muistiinpanot](/posts/tyovuorolistan_paivakohtaiset_muistiinpanot_eli_koko_paivan_tapahtumat).

## Huomioitavaa

- Vuoroja voi leimata vain **julkaisemattomalle** listalle. Julkaistussa kalenterissa leimauskuvaketta ei ole.
- Jos klikkaat päällekkäin saman työntekijän olemassa olevan vuoron kanssa, vuoroa ei luoda. Näet ilmoituksen ja voit klikata toiseen kohtaan.
- Olemassa olevan vuoron voi edelleen avata klikkaamalla. Raahaus toimii kuten ennen.
- Toistuvuus, muistiinpanot, resurssi ja muut kentät ovat luonti-ikkunassa. Avaa se klikkaamalla ruudukkoa ilman leimaustilaa.

Muut tavat: [näin lisäät työvuoroja kalenteriin](/posts/vuorojen_lisaminen_kalenteriin). Kopiointi: [ALT + raahaus](/posts/tyovuoron_kopiointi_alt_raahaus).
