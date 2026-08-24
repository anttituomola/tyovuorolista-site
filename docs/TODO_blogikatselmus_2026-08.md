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
- [ ] `osa-aikaisen_sopimustunnit_ja_lisatyon_tarjoaminen.md` — kaksi tyhjää
      kuvapaikkaa, postaus päättyy kesken kaksoispisteeseen
- [ ] `tilauksen_ostaminen.md` — vanhat hinnat 12/42/120 €/kk (nyk. 18/60/180),
      "kaikki paketit samat ominaisuudet" ei pidä paikkaansa, vuosilaskutus ei mene kortilta
- [ ] excel_vs + vertailu_2026: 4 linkkiä lupaa "ilmainen Excel/PDF-pohja ilman
      rekisteröitymistä" mutta osoittaa postaukseen jossa ei ole pohjaa → osoita `/pohja`

## Tarkista faktat (TES/laki auki, sitten korjaus)

- [ ] osa-aikaisen: "viimeistään viikkoa ennen" — TAL 30 § 3 mom sanoo
      **aikaisintaan**; nykyinen muoto kääntää työntekijän suojan ympäri
- [ ] `tasoittumisjarjestelma_ravintola-alalla.md` — "vähintään yksi" vs
      "vähintään kaksi" peräkkäisten vapaapäivien yhdistelmää, kumpi?
- [ ] `vuosivapaan_alkusaldon_laskeminen.md` — esimerkki "1050 h ≠ 1200 h ('5 pv')"
      vastoin omaa taulukkoa (1200 h = 6 pv); toiseksi luvuksi esim. 1150 h
- [ ] `tyovuorolista_lyhenteet.md` — 30 h -esimerkin laskenta ei täsmää; puuttuu
      laajennettu 9 jakson / 136 h malli (vrt. mita_tarkoittaa_ts-paiva)
- [ ] `vapaapaivat_ja_viikkolepo_jaksotyossa.md` — suluissa kuvattu väli on 40 h,
      teksti sanoo 32 h (32 h pätee kalenteriviikon sisällä)
- [ ] `procountor_palkka_vienti.md` — "päivätyökorvaukset" lienee "ylityökorvaukset"
- [ ] `tyovuorolistan_julkaiseminen.md` — "kolme määräaikaa" mutta taulukossa 5 riviä
- [ ] Loput pienemmät faktaepäilyt raportissa (osio 02, yht. 18 kpl)

## Päivitä vanhentuneet

- [ ] `hinnoittelun_uudistus_maaliskuu_2026.md` — yhä futuurissa 29.3.2026:sta
- [ ] `laiminlyontimaksu_...md` — lausuntokierros päättyi 21.8.2026, teksti preesensissä
- [ ] `tes_n_valinta` + `tes_tuki` — pilottipuheet; kaikki 4 TES:iä täydessä tuessa 31.7.2026 alk.
- [ ] `tyovuorolistojen_julkaisu_ja_lahettaminen` — sähköpostien lähetyslogiikka
      ristiriidassa esikatselu-postauksen kanssa; "Merkitse julkaistuksi" -toggle puuttuu
- [ ] `merkattujen_ja_puuttuvien...md` — "per 3 viikon lista" (listat 1–4 vk 05/2026 alk.)
      + irrallinen lomalause (copy-paste-jäänne)
- [ ] `resurssien_aikataulutus` — näkyvyysväitteet vanhentuneet vs. resurssit_julkaistuissa
- [ ] `oma_portaali_ohje.md` — avoimen vuoron luonti onnistuu nykyään myös mobiilissa
- [ ] **1.10.2026 jälkeen:** päivitä kaupan yölisä-osiot (kaupan_alan_tes,
      kaupan_alan_tyoaikalisat_2026, logistiikka) — "syksyllä 2026" -kehykset vanhenevat

## Lisää lähteet (Lähteet-footer puuttuu, kopioi sisarpostauksesta)

- [ ] kaupan_alan_tes, lisatyo_ja_ylityo_kaupan, sunnuntai_ja_aattolisat_kaupan,
      vapaapaivat_kaupan
- [ ] tes_tuki, tyovuorolista_lyhenteet, v_ja_x_paivien_automaattikorjaus
- [ ] vuosiloman_merkkaaminen

## SEO-päätökset

- [ ] tyovuorolista_pohja (2022) vs tulostettava: sama pääavainsana → retitlaa
      2022-postaus OpenOffice/Excel-kulmaan
- [ ] tyovuorolista_pohja_pdf: ei vastaa "pohja pdf" -hakuintentiota → /pohja-linkki alkuun
- [ ] ohjelma vs vertailu_2026: otsikot lähes identtiset; Normi "alle 20" vs "jopa 20"
- [ ] Liian pitkät descriptionit: monivalinta (~220), kaupan_tyoaikalisat (~195),
      toistuvat (~190); tiimit_eli_osastot kuvaa väärää aihetta

## Koko sivuston linjaukset (yksi päätös / rivi)

- [ ] "venue" → pidetäänkö vai esim. "toimipaikka"? (yksi kohta jo muutettu, nyt epäyhtenäinen)
- [ ] esimies → esihenkilö -jäänteet: tasoittumisjarjestelma_ravintola (otsikko),
      muistiinpanot, procountor_integraatio
- [ ] tukiosoite: tuki@ vs info@tyovuorolista.fi
- [ ] asetussivun nimi: "Hallinta → Asetukset" vs "Hallinta → Profiili" (+ linkit
      /admin/profile vs /admin/subscription)
- [ ] termit: päivämerkinnät vs päiväkohtaiset muistiinpanot; yksityinen vs sisäinen;
      leimauskuvake vs leimasinkuvake; Sairasloma (UI?) vs sairausloma
