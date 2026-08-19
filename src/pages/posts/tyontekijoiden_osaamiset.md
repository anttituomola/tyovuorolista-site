---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Osaamiset: pätevyydet työntekijöille, vaatimukset vuoroille ja tunnit palkkaraporttiin'
pubDate: 2026-07-29
description: 'Uusi osaamiset-toiminto: määrittele työpaikan osaamiset (esim. vuorovastaava tai hygieniapassi), liitä ne työntekijöihin ja vuoroihin, ja saa vastuuvuorojen tunnit automaattisesti palkkaraporttiin.'
author: 'Antti Tuomola'
image:
    url: '/blogPostImages/osaamiset/osaamiset-asetukset.png'
    alt: 'Osaamiset-asetukset Työntekijät-sivulla: osaamisten lista ja niiden asetukset.'
tags: ['päivitykset', 'uudet ominaisuudet', 'palkkaraportti']
---

*Päivitetty 31.7.2026: työntekijän osaamiset löytyvät muokkauksessa Asetukset-osiosta. (30.7.: avoimien vuorojen ilmoittautuminen rajautuu osaamisen mukaan.)*

Työvuorolistaan on lisätty **osaamiset**: työpaikkakohtaiset nimikkeet, jotka voit liittää sekä työntekijöihin että työvuoroihin. Osaaminen voi olla vastuurooli (*vuorovastaava*, *anniskeluvastaava*), pätevyys (*hygieniapassi*, *B-kortti*) tai mikä tahansa muu nimike, jolla on merkitystä vuorosuunnittelussa tai palkanlaskennassa.

Toiminto on heti käytössä kaikilla työpaikoilla. Mitään ei tarvitse aktivoida erikseen. Osaamisiin liittyvät kentät ilmestyvät näkyviin, kun luot työpaikallesi ensimmäisen osaamisen.

Lyhyesti:

- **Työntekijälle** liitetty osaaminen kertoo, mitä hän osaa tai mitkä pätevyydet hänellä on.
- **Vuorolle** liitetty vaatimus kertoo, mitä vuorossa pitää osata. Jos vuoroon merkitty työntekijä ei osaa vaadittua, saat **varoituksen, mutta tallennus onnistuu silti**. Sinä päätät, järjestelmä ei estä.
- **Palkkaraportointi**: osaamista vaativien vuorojen tunnit summataan työntekijöittäin omalle rivilleen palkkaraporttiin. Näin esimerkiksi vuorovastaavana tehdyt tunnit kulkevat palkanlaskentaan asti ilman käsityötä.
- **Näytä vuorossa** -valinnalla osaamisen nimi näkyy myös työntekijälle julkaistussa listassa ja Oma-portaalissa. Työntekijä tietää, että kyseessä on esimerkiksi anniskeluvastaavan vuoro.

## Näin pääset alkuun

### 1. Luo työpaikan osaamiset

Avaa **Hallinta → Työntekijät** ja vieritä työntekijälistan alle kohtaan **Osaamiset**. Kirjoita osaamisen nimi ja paina **Lisää**.

<img src="/blogPostImages/osaamiset/osaamiset-asetukset.png" alt="Osaamiset-asetukset: lista työpaikan osaamisista, palkkaraportointi- ja Näytä vuorossa -valinnat sekä palkkalajikoodi" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Jokaisella osaamisella on kolme asetusta:

- **Palkkaraportointi**: kun tämä on valittuna, osaamista vaativien vuorojen tunnit summataan palkkaraporttiin omalle rivilleen (tästä tarkemmin alempana). Pidä tämä päällä vastuurooleille, joista maksetaan lisää, ja pois pätevyyksiltä, jotka eivät vaikuta palkkaan (esim. hygieniapassi).
- **Palkkalajikoodi**: valinnainen palkanlaskennan koodi Procountor-vientiä varten.
- **Näytä vuorossa**: osaamisen nimi näytetään vuoron yhteydessä julkaistussa listassa ja Oma-portaalissa.

### 2. Merkitse työntekijöiden osaamiset

Avaa työntekijä listasta ja paina **Muokkaa**. **Asetukset**-osiossa on Osaamiset-kenttä. Valitse siihen kaikki työntekijän osaamiset. Sama kenttä on myös uuden työntekijän lisäyslomakkeella (Lisäasetukset-osiossa).

<img src="/blogPostImages/osaamiset/tyontekijan-osaamiset.png" alt="Työntekijän muokkaus: Asetukset-osio, jossa Osaamiset-monivalinta" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Työntekijöiden osaamiset näkyvät myös suoraan työntekijälistassa omassa sarakkeessaan:

<img src="/blogPostImages/osaamiset/tyontekijat-taulukko.png" alt="Työntekijälista, jossa Osaamiset-sarake näyttää kunkin työntekijän osaamiset" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

### 3. Vaadi osaaminen vuorolta

Avaa vuoro kalenterista. Vuoron tiedoissa on uusi kenttä **Vaaditut osaamiset**. Valitse siihen, mitä tässä vuorossa pitää osata. Sama kenttä löytyy vuoron luonnista ja Tuntien kirjauksen korvaajavuoron lisäyksestä.

<img src="/blogPostImages/osaamiset/vuoron-osaamisvaatimukset.png" alt="Vuoron tiedot, jossa Vaaditut osaamiset -kenttään on valittu Vuorovastaava" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Keskeinen ajatus: **vuoron vaatimus kertoo, missä roolissa vuoron tekijä työskentelee**. Kun merkitset vuorolle vaatimukseksi *vuorovastaava*, vuoron tekijälle kertyy vuorovastaavan tunteja. Riippumatta siitä, kuka vuoron lopulta tekee.

### Varoitus, ei este

Jos vuoroon merkitty työntekijä ei osaa jotain vaadittua, näet keltaisen varoituksen. Vuoron voi silti tallentaa. Tosielämässä tulee tilanteita, joissa vuoro on pakko miehittää vajaalla pätevyydellä, ja sinä tunnet tilanteen paremmin kuin järjestelmä.

<img src="/blogPostImages/osaamiset/osaamisvaroitus.png" alt="Vuoron tiedot, jossa varoitus: työntekijältä puuttuu vaadittu osaaminen, mutta tallennus on sallittu" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

## Osaaminen näkyviin työntekijälle

Kun osaamisen **Näytä vuorossa** -valinta on päällä, osaamisen nimi näkyy vuoron kohdalla kaikkialla, missä työntekijä listaa katsoo:

- julkaistun listan tulosteessa ja kuvassa (nimi näkyy vuoron kellonajan alla)
- työntekijälle lähetettävässä sähköpostissa
- Oma-portaalissa vuorokortissa ja vuoron tiedoissa

<img src="/blogPostImages/osaamiset/julkaistava-lista.png" alt="Julkaistava työvuorolista, jossa vuoron kellonajan alla lukee osaamisen nimi" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Näin työntekijä tietää suoraan listasta, että tiistain vuoro on nimenomaan anniskeluvastaavan vuoro, ilman että asiaa tarvitsee kirjoittaa käsin muistiinpanoihin joka kerta.

Oma-portaalissa sama tieto näkyy vuorokortissa ja vuoron tiedoissa **Rooli**-rivinä:

<div class="blogPhonePair">
<img class="blogPhone" src="/blogPostImages/osaamiset/oma-vuorot-osaaminen.png" alt="Oma-portaalin vuorolista puhelimella, vuorokortissa osaamisen nimi" />
<img class="blogPhone" src="/blogPostImages/osaamiset/oma-vuoro-rooli.png" alt="Oma-portaalin vuoron tiedot, jossa Rooli-rivi kertoo vuoron vaatiman osaamisen" />
</div>

Nimikkeet, joita työntekijän ei tarvitse nähdä (esim. sisäiset pätevyysmerkinnät), pidät yksinkertaisesti ilman Näytä vuorossa -valintaa, ne näkyvät vain sinulle.

## Sitten syvemmälle: osaamistunnit palkkaraportissa

Tämä on koko toiminnon tärkein osa, jos työpaikallasi maksetaan vastuulisää esimerkiksi vuorovastaavan vuoroista.

Kaiken ratkaisee Osaamiset-asetusten **Palkkaraportointi**-valintaruutu:

- **Valinta päällä** (oletus): järjestelmä summaa jokaiselle työntekijälle tunnit, jotka hän on tehnyt kyseistä osaamista vaativissa vuoroissa, ja tunnit kulkevat tuntikortteihin ja palkkaraporttiin asti. Käytä tätä rooleille, joista maksetaan lisää.
- **Valinta pois**: osaaminen toimii pelkkänä vaatimusmerkintänä ja varoituksena vuorosuunnittelussa, se ei tuota riviä mihinkään raporttiin eikä tuntikorttiin. Tämä on oikea valinta pätevyyksille, joita seurataan mutta joista ei makseta erikseen (hygieniapassi, B-kortti).

Valinnan voi vaihtaa milloin vain, ja se vaikuttaa heti myös vanhoihin raportteihin, jos ajat ne uudelleen.

Kun valinta on päällä, summa näkyy kahdessa paikassa:

**1. Tuntikorteissa.** Sekä Julkaise-näkymän *Työtunnit listassa* -korteissa että Tuntien kirjauksen korteissa on uusi **Osaamistunnit**-osio. Siitä näet yhdellä vilkaisulla, paljonko esimerkiksi vuorovastaavan tunteja kullekin on kertymässä, samat luvut, jotka päätyvät palkkaraporttiin.

<img src="/blogPostImages/osaamiset/osaamistunnit-kortti.png" alt="Työntekijän tuntikortti, jossa Osaamistunnit-osio näyttää vuorovastaavatunnit" width="100%" style="max-width: 500px; display: block; margin: 20px auto;" />

**2. Palkkaraportissa.** Kun luot palkkaraportin (CSV, PDF tai Procountor), jokaisesta palkkaraportointiin merkitystä osaamisesta tulee raporttiin oma rivinsä työntekijää kohden, esimerkiksi *Vuorovastaava: 24 tuntia*. Raportin riveissä on myös uusi **Osaamistunnit**-valinta, jolla saat rivit tarvittaessa pois raportista.

<img src="/blogPostImages/osaamiset/palkkaraportti-osaamistunnit.png" alt="Luo palkkaraportti -ikkuna, jossa raporttiriveissä on Osaamistunnit-valinta" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Kuten muutkin raportin rivit, osaamistunnit ovat **tunteja, eivät euroja**. Palkanlaskentaohjelma hinnoittelee ne palkkalajin mukaan.

### Procountor ja palkkalajikoodi

Jos viet palkka-aineiston Procountoriin, anna osaamiselle **palkkalajikoodi** Osaamiset-asetuksissa (esim. oma palkkalajinne vuorovastaavalisälle). Ilman koodia osaamisen rivit jätetään Procountor-tiedostosta pois, ja saat siitä huomautuksen viennin yhteydessä. Tavallisiin CSV- ja PDF-raportteihin rivit tulevat aina osaamisen nimellä, koodia ei tarvita.

### Hyvä tietää: miten tunnit lasketaan

- **Vuoron vaatimus ratkaisee, ei työntekijän osaaminen.** Tunnit kertyvät sille, joka vuoron tekee, myös silloin, jos merkitsit vuoroon varoituksesta huolimatta työntekijän, jolta osaaminen puuttuu. Rooli määrittää palkan.
- **Sairausloma ei kerrytä osaamistunteja.** Jos vuorovastaava sairastuu, hänen tuntinsa siirtyvät normaalisti sairausajan palkkaan, mutta vuorovastaavatunteja ei kerry. Jos merkitset korvaajan *Lisää korvaajan vuoro* -toiminnolla, korvaajan vuoro perii alkuperäisen vuoron vaatimukset automaattisesti, eli vastuulisä siirtyy sille, joka vastuun oikeasti kantoi.
- **Vaatimukset kulkevat kopioiden mukana.** Kun kopioit vuoron, kopioit viime viikon listan tai käytät listapohjaa, vuorojen osaamisvaatimukset kopioituvat mukana. Kerran merkitty vuorovastaavan vuoro pysyy vuorovastaavan vuorona viikosta toiseen.
- **Jos vuorolla on kaksi palkkaraportoitavaa vaatimusta**, tunnit kertyvät molempiin. Rivit ovat toisistaan riippumattomia lisiä työtuntien päällä, eikä niitä ole tarkoitettu laskettavaksi yhteen.

### Osaamisen poistaminen = arkistointi

Osaamista ei poisteta, vaan se **arkistoidaan**. Arkistoitu osaaminen katoaa kaikista valintalistoista, mutta säilyy vanhoissa vuoroissa ja raporteissa. Näin viime kuun palkkaraportti näyttää samat rivit myös jälkikäteen ajettuna. Jos taas muutat osaamisen nimeä, uusi nimi näkyy myös vanhoissa raporteissa.

## Avoimet vuorot: vain osaava voi ilmoittautua *(uusi 30.7.2026)*

Jos avoimella vuorolla on osaamisvaatimus, siihen voivat ilmoittautua Oma-portaalissa vain työntekijät, joilta vaadittu osaaminen löytyy.

Vuoro näkyy silti **kaikille** tiimin työntekijöille. Tämä on tarkoituksellista. Työntekijä näkee vuoron, sen vaatiman osaamisen ja syyn, miksi ilmoittautuminen ei ole mahdollista: *"Vaatii osaamisen: Anniskeluvastaava. Puuttuuko osaamismerkintä? Kysy esihenkilöltäsi."* Näin osaamisvaatimukset toimivat myös kannustimena. Työntekijä huomaa, mikä osaaminen avaisi lisää vuoroja, ja toisaalta puuttuvat osaamis*merkinnät* tulevat esiin ja korjatuiksi.

<img class="blogPhone" src="/blogPostImages/osaamiset/oma-avoin-vuoro-osaaminen.png" alt="Oma-portaalin avoimet vuorot puhelimella: ylempään vuoroon työntekijä voi ilmoittautua, alempi vaatii osaamisen jota hänellä ei ole. Ilmoittautumispainike on pois käytöstä ja vieressä lukee syy" />

Sinulle esihenkilönä mikään ei muutu: voit edelleen antaa minkä tahansa vuoron kenelle tahansa. Jos ilmoittautuneen työntekijän osaaminen on ehtinyt muuttua ilmoittautumisen jälkeen (esim. lisäsit vuorolle vaatimuksen jälkikäteen), näet ilmoittautumisen kohdalla varoitusmerkinnän, mutta hyväksyntä on aina sinun päätöksesi.

## Mitä osaamiset eivät (vielä) tee

- Järjestelmä **ei estä sinua** merkitsemästä vuoroon työntekijää ilman vaadittua osaamista. Varoitus on tarkoituksella vain varoitus. (Työntekijän oma ilmoittautuminen avoimeen vuoroon sen sijaan vaatii osaamisen, katso yllä.)
- Osaamisilla ei ole **voimassaoloaikoja** (esim. hygieniapassin vanheneminen) eikä tasoja.
- Ilmoituksia ei (vielä) lähetetä, kun osaamistasi vastaava avoin vuoro julkaistaan.

Jos jokin näistä olisi sinulle tärkeä, laita viestiä (Antti, info@tyovuorolista.fi). Rakennan näitä siinä järjestyksessä, missä niille on oikeaa tarvetta.
