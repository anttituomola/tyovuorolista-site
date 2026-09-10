---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Palkaton ruokatauko: automaattinen vähennys tunneista'
pubDate: 2026-09-10
description: 'Toimipaikan asetuksella palkaton ruokatauko vähenee tunneista, lisistä ja ylityörajoista. Oletuksena pois. Ota käyttöön, jos työntekijä saa poistua työpaikalta.'
author: 'Antti Tuomola'
infoBasis: 'Perustuu työaikalain 24 §:ään (päivittäiset tauot) ja TES-määräyksiin lepoajasta. Vähennys on palkanlaskenta-asetus, ei TES-sääntö. Tauko ei ole työaikaa vain, jos työntekijä saa esteettömästi poistua työpaikalta.'
image:
    url: '/blogPostImages/palkaton_ruokatauko/hero.png'
    alt: 'Tuntien laskenta: palkaton ruokatauko päällä, 30 minuuttia, kynnys 6 tuntia, voimassa 1.10.2026 alkaen.'
tags: ['päivitykset', 'uudet ominaisuudet', 'palkanlaskenta', 'ruokatauko']
---

Toimipaikalla, jossa työntekijä saa poistua työpaikalta ruokatauolla, palkaton tauko pitää vähentää työajasta. Tähän asti tunnit laskettiin alkamisajasta päättymisaikaan, ja vähennys piti hoitaa itse.

Nyt vähennys on toimipaikan asetus. Se on **oletuksena pois**. MaRa- ja SOSTES-paikoilla tauko on usein työaikaa, koska salia ei voi jättää tyhjilleen. Silloin mitään ei pidäkään vähentää.

## Milloin vähennys on oikein

Palkaton ruokatauko on laillinen vain, jos työntekijä saa tauon aikana vapaasti poistua työpaikalta. Jos syödään tiskin ääressä ja hypätään väliin kun asiakas tulee, tauko on työaikaa.

Säännön tausta on [ruokataukopostauksessa](/posts/ruokatauko_ravintola-alalla). Tämä postaus kertoo, miten asetus toimii sovelluksessa.

## Esimiehelle: mistä kytket päälle

1. Avaa **Asetukset**
2. Siirry osioon **Tuntien laskenta**
3. Laita päälle **Vähennä palkaton ruokatauko automaattisesti**
4. Tarkista pituus, kynnys ja voimaantulopäivä
5. Tallenna

<img src="/blogPostImages/palkaton_ruokatauko/hero.png" alt="Tuntien laskenta: palkaton ruokatauko päällä, 30 minuuttia kun vuoro on yli 6 tuntia, voimassa 1.10.2026 alkaen" width="100%" style="max-width: 900px; display: block; margin: 20px auto;" />

Kun kytket päälle, voimaantulopäiväksi täyttyy seuraavan kuukauden 1. päivä. Jo viedyt palkkajaksot eivät muutu. Kentän voi tyhjentää, jos vähennys on voimassa heti.

**Tauon pituus** on 15–60 minuuttia, viiden minuutin askelin. Tyypillinen arvo on 30 minuuttia. **Kun vuoro on yli** on oletuksena 6 tuntia. Tasan kuuden tunnin vuorosta ei vähennetä mitään. Ruokaetu lasketaan vuoroista, jotka ovat vähintään kuusi tuntia. Ruokatauko vähennetään vain, kun vuoro on sitä pidempi.

Jos työpaikalla on valittu työehtosopimus, ohjeessa näkyy sen mukainen ehdotus, esimerkiksi Kaupan alalla yli 7 tuntia. Voit silti asettaa oman arvon.

Tauko vähennetään aina vuoron keskeltä. Kahdeksan tunnin vuorosta 10–18, jossa tauko on 30 minuuttia, palkallista jää 7,5 tuntia. Keskikohta on 14.00, joten vähennys osuu välille 13.45–14.15.

Jos sama vuoro menee päivästä iltaan tai yöhön, vähennys osuu niihin tunteihin, jotka osuvat keskikohdan ikkunaan. Esimerkiksi vuorosta 14–22, jossa iltalisä alkaa kello 18, 30 minuutin tauko vähennetään väliltä 17.45–18.15. Päivätunneista lähtee vartti ja iltalisästä vartti. Jos koko ikkuna jää yhteen jaksoon, vähennys otetaan vain siitä. Yölisä vähenee samalla tavalla, jos keskikohta osuu yön puolelle.

Sama vähennys tehdään sairauslomavuorosta. Sairausajan palkka seuraa sitä työaikaa, joka olisi tehty.

Vähennys vaikuttaa lisä- ja ylityörajoihin. 30 min × 15 vuoroa on 7,5 h kolmen viikon jaksossa. Tunnit voivat siirtyä ylityöstä lisätyöhön.

## Työntekijä, joka ei voi poistua

Ero on usein roolikohtainen. Joissain paikoissa keittiö pääsee poistumaan työpaikalta, mutta salissa työskentelevä joutuu jäämään paikalle. Silloin merkitset niille työntekijöille, jotka eivät voi poistua, kytkimen **Ruokatauko on työaikaa (ei vähennetä)**.

<img src="/blogPostImages/palkaton_ruokatauko/tyontekija-kytkin.png" alt="Työntekijän muokkaus, Työsuhde-osio: kytkin Ruokatauko on työaikaa päällä" width="100%" style="max-width: 700px; display: block; margin: 20px auto;" />

Kytkin näkyy vasta, kun toimipaikan sääntö on päällä. Löydät sen kohdasta **Hallinta → Työntekijät → Muokkaa → Työsuhde**. Sama kytkin on uuden työntekijän lisäyslomakkeessa.

## Tunnit ja palkkaraportti

Kalenterin ja tuntikortin summa on netto. Vie hiiri tuntisumman päälle: vihje kertoo vähennyksen, esimerkiksi **sis. −2 h ruokatauko**.

<img src="/blogPostImages/palkaton_ruokatauko/tuntikortti.png" alt="Emma Virtasen tuntikortti: 30,00 tuntia ja vihje sis. −2 h ruokatauko" width="100%" style="max-width: 400px; display: block; margin: 20px auto;" />

Kortissa on neljä kahdeksan tunnin vuoroa. Alkamis- ja päättymisajoista tulisi 32 tuntia, mutta ruokatauon jälkeen palkallista on 30 tuntia.

[Palkkaraportin](/posts/palkkaraportti_ominaisuus) CSV:ssä, PDF:ssä ja esikatselussa on tietorivi **Vähennetyt ruokatauot**. Se ei lähde Procountor-, Netvisor- eikä Fivaldi-vientiin, koska sille ei ole palkkalajia. Työtunnit niissä vienneissä ovat jo nettona.

Kalenterissa vuoro näkyy edelleen samoilla alkamis- ja päättymisajoilla. TES-varoitukset vuoron pituudesta katsovat edelleen sitä, milloin vuoro alkaa ja päättyy, eivät nettotunteja.

Sääntö on sama kaikille vuoroille. Jos tauko jäi pitämättä, merkitse toteutuneet ajat tai kerro se tuntiraportin kommentissa. Asetus ei lisää toista taukoa yli kymmenen tunnin vuoroihin, eikä se varoita TES-sääntönä siitä, että vuorosta puuttuu tauko. Sääntöä ei voi asettaa tiimi- tai listakohtaisesti. Jos tarvitset vuorokohtaisen poikkeuksen, laita viestiä: **info@tyovuorolista.fi**.

## Työntekijälle

Oma-portaalissa vuoron tuntiraportti näyttää nettosumman ja rivin **Ruokatauot −0,5 h**.

<div class="blogPhoneRow">
<div>
<p>Avaa vuoro Oma-portaalista kuten ennen. Suunnitellut tunnit ovat jo netto. Lomakkeella ilmoitat toteutuneet ajat, sairasloman tai toteutumattoman vuoron.</p>
<p>Kahdeksan tunnin vuorosta 10–18, jossa tauko on 30 minuuttia, suunnitellut tunnit ovat 7,50 h. Rivi <strong>Ruokatauot −0,5 h</strong> kertoo, mitä vähennettiin.</p>
</div>
<img class="blogPhone" src="/blogPostImages/palkaton_ruokatauko/oma-tuntiraportti.png" alt="Oma-portaalin vuoron tiedot: suunnitellut tunnit 7,50 h ja rivi Ruokatauot −0,5 h" />
</div>

Lisää Oma-portaalista: [Oma-portaalin ohje](/posts/oma_portaali_ohje).

Lisää aiheesta: [ruokatauko ravintola-alalla](/posts/ruokatauko_ravintola-alalla), [tuntien kirjaus](/posts/tuntien_kirjaus_opas) ja [palkkaraportti](/posts/palkkaraportti_ominaisuus).
