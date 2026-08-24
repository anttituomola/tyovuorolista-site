# TODO: blogikatselmus 08/2026

Koko blogin sisältökatselmus tehty 24.8.2026 (106 postausta). Noin 200 pientä
kielikorjausta on tehty suoraan työpuuhun, **ei committoitu** — katso
`git diff src/pages/posts` (diffissä on mukana myös katselmusta edeltäneet
committoimattomat muutokset).

Koko raportti selaimessa (toimii miltä tahansa laitteelta):
https://claude.ai/code/artifact/9425afb4-b32c-4311-875d-acfea921384b

## Korjaa heti

- [x] `sahkopostin_toimitusongelmat_varoitus.md` — kuvakansio puuttuu kokonaan
      (`public/blogPostImages/sahkopostin_toimitusongelmat_varoitus/`), hero rikki
      — tehty 24.8.2026: kello + ilmoitukset + julkaisumodaali, kuvat pipelineasta
- [x] `osa-aikaisen_sopimustunnit_ja_lisatyon_tarjoaminen.md` — kaksi tyhjää
      kuvapaikkaa, postaus päättyy kesken kaksoispisteeseen
      — tehty 24.8.2026: avoimet-vuorot + sopimustunnit -kuvat, beta-väite poistettu
- [x] `tilauksen_ostaminen.md` — vanhat hinnat 12/42/120 €/kk (nyk. 18/60/180),
      "kaikki paketit samat ominaisuudet" ei pidä paikkaansa, vuosilaskutus ei mene kortilta
      — tehty 24.8.2026: 18/60/180 + vuosi, Mini vs maksulliset, lasku vs kortti, Hallinta → Tilaus
- [x] excel_vs + vertailu_2026: 4 linkkiä lupaa "ilmainen Excel/PDF-pohja ilman
      rekisteröitymistä" mutta osoittaa postaukseen jossa ei ole pohjaa → osoita `/pohja`
      — tehty 24.8.2026: neljä linkkiä → `/pohja`

## Tarkista faktat (TES/laki auki, sitten korjaus)

- [x] osa-aikaisen: "viimeistään viikkoa ennen" — TAL 30 § 3 mom sanoo
      **aikaisintaan**; nykyinen muoto kääntää työntekijän suojan ympäri
      — tehty 24.8.2026: määräaika ei saa olla aikaisemmin kuin viikkoa ennen listan tekoa
- [x] `tasoittumisjarjestelma_ravintola-alalla.md` — "vähintään yksi" vs
      "vähintään kaksi" peräkkäisten vapaapäivien yhdistelmää, kumpi?
      — tarkistettu: molemmat oikein (6 jaksoa = 1, paikallinen 9 jaksoa = 2); tekstiä selvennetty
- [x] `vuosivapaan_alkusaldon_laskeminen.md` — esimerkki "1050 h ≠ 1200 h ('5 pv')"
      vastoin omaa taulukkoa (1200 h = 6 pv); toiseksi luvuksi esim. 1150 h
      — tehty 24.8.2026: 1050 h ≠ 1150 h
- [x] `tyovuorolista_lyhenteet.md` — 30 h -esimerkin laskenta ei täsmää; puuttuu
      laajennettu 9 jakson / 136 h malli (vrt. mita_tarkoittaa_ts-paiva)
      — tehty 24.8.2026: su 02 → ma 08; lisätty 9 jaksoa / 136 h
- [x] `vapaapaivat_ja_viikkolepo_jaksotyossa.md` — suluissa kuvattu väli on 40 h,
      teksti sanoo 32 h (32 h pätee kalenteriviikon sisällä)
      — tehty 24.8.2026: 32 h = la 16–ma 00; 40 h = la 16–ma 08
- [x] `procountor_palkka_vienti.md` — "päivätyökorvaukset" lienee "ylityökorvaukset"
      — tarkistettu: V/X/VV-päivätyökorvaus on tuotteen termi; lisätty puuttuvat ylityöt
- [x] `tyovuorolistan_julkaiseminen.md` — "kolme määräaikaa" mutta taulukossa 5 riviä
      — tehty 24.8.2026: 3 luettelolle + 2 tasoittumisjärjestelmälle
- [ ] Loput pienemmät faktaepäilyt raportissa (osio 02, yht. 18 kpl)

## Päivitä vanhentuneet

- [x] `hinnoittelun_uudistus_maaliskuu_2026.md` — yhä futuurissa 29.3.2026:sta
      — tehty 24.8.2026: preteriti, voimassa olevat hinnat, vanha CTA pois
- [x] `laiminlyontimaksu_...md` — lausuntokierros päättyi 21.8.2026, teksti preesensissä
      — tehty 24.8.2026: kierros päättynyt, HE yhä syyskuussa, ei vielä laki
- [x] `tes_n_valinta` + `tes_tuki` — pilottipuheet; kaikki 4 TES:iä täydessä tuessa 31.7.2026 alk.
      — tehty 24.8.2026: täysi tuki neljälle, Hallinta → Työehtosopimus
- [x] `tyovuorolistojen_julkaisu_ja_lahettaminen` — sähköpostien lähetyslogiikka
      ristiriidassa esikatselu-postauksen kanssa; "Merkitse julkaistuksi" -toggle puuttuu
      — tehty 24.8.2026: vain Esikatsele → Lähetä kaikki; toggle oletuksena pois
- [x] `merkattujen_ja_puuttuvien...md` — "per 3 viikon lista" (listat 1–4 vk 05/2026 alk.)
      + irrallinen lomalause (copy-paste-jäänne)
      — tehty 24.8.2026: 1–4 vk + sopimustuntien yksiköt, lomalause pois
- [x] `resurssien_aikataulutus` — näkyvyysväitteet vanhentuneet vs. resurssit_julkaistuissa
      — tehty 24.8.2026: Näytä resurssit listalla + Hallinta → Resurssit
- [x] `oma_portaali_ohje.md` — avoimen vuoron luonti onnistuu nykyään myös mobiilissa
      — tehty 24.8.2026: + / Avoin, samat kuvat kuin avoimet_vuorot_ohje
- [ ] **1.10.2026 jälkeen:** päivitä kaupan yölisä-osiot (kaupan_alan_tes,
      kaupan_alan_tyoaikalisat_2026, logistiikka) — "syksyllä 2026" -kehykset vanhenevat

## Lisää lähteet (Lähteet-footer puuttuu, kopioi sisarpostauksesta)

- [x] kaupan_alan_tes, lisatyo_ja_ylityo_kaupan, sunnuntai_ja_aattolisat_kaupan,
      vapaapaivat_kaupan
      — tehty 24.8.2026: PAM TES PDF + sisarpostauksista tutut pykälät
- [x] tes_tuki, tyovuorolista_lyhenteet, v_ja_x_paivien_automaattikorjaus
      — tehty 24.8.2026: neljä TES:iä + TAL / MaRa työaika
- [x] vuosiloman_merkkaaminen
      — tehty 24.8.2026: vuosilomalaki + tyosuojelu.fi + MaRa (7,5 h)

## SEO-päätökset

- [ ] tyovuorolista_pohja (2022) vs tulostettava: sama pääavainsana → retitlaa
      2022-postaus OpenOffice/Excel-kulmaan
- [ ] tyovuorolista_pohja_pdf: ei vastaa "pohja pdf" -hakuintentiota → /pohja-linkki alkuun
- [ ] ohjelma vs vertailu_2026: otsikot lähes identtiset; Normi "alle 20" vs "jopa 20"
- [ ] Liian pitkät descriptionit: monivalinta (~220), kaupan_tyoaikalisat (~195),
      toistuvat (~190); tiimit_eli_osastot kuvaa väärää aihetta

## Koko sivuston linjaukset (yksi päätös / rivi)

- [x] "venue" → pidetäänkö vai esim. "toimipaikka"? (yksi kohta jo muutettu, nyt epäyhtenäinen)
      — tehty 24.8.2026: suomessa toimipaikka; en.json venues ennallaan
- [x] esimies → esihenkilö -jäänteet: tasoittumisjarjestelma_ravintola (otsikko),
      muistiinpanot, procountor_integraatio
      — tehty 24.8.2026: esihenkilö; tasoittumis-otsikko oli jo kunnossa; FAQ esihenkilönä
- [x] tukiosoite: tuki@ vs info@tyovuorolista.fi
      — tehty 24.8.2026: vain info@tyovuorolista.fi
- [x] asetussivun nimi: "Hallinta → Asetukset" vs "Hallinta → Profiili" (+ linkit
      /admin/profile vs /admin/subscription)
      — tehty 24.8.2026: Asetukset = /admin/profile; Tilaus = /admin/subscription
- [x] termit: päivämerkinnät vs päiväkohtaiset muistiinpanot; yksityinen vs sisäinen;
      leimauskuvake vs leimasinkuvake; Sairasloma (UI?) vs sairausloma
      — tehty 24.8.2026: päiväkohtainen muistiinpano, sisäinen, leimasinkuvake,
      sairasloma (slug/kuva/SOSTES ennallaan)
