# SEO-baseline: striking distance -korjaukset 31.8.2026

Tämä on vertailukelpoinen lähtötilanne ennen 31.8.2026 tehtyjä title/meta/sisältökorjauksia.
Lähde: Google Search Console + GA4 OpenSEO:n `get_search_opportunities`-työkalulla, ikkuna **1.8.–28.8.2026**.
GSC-historia säilyy, joten ennen-ikkunan voi hakea uudelleen milloin vain.

## Lähtötilanne (1.8.–28.8.2026)

| Sivu | Klikit | Näytöt | CTR | Sijainti | Tehty korjaus 31.8. |
|---|---|---|---|---|---|
| /posts/iltalisa_yolisa_ja_aattolisa_ravintola-alalla | 2 | 1 552 | 0,13 % | 7,1 | Title: +2026 ja euromäärät; description etupainotteiseksi |
| /posts/kaupan_alan_tyoaikalisat_2026 | 31 | 4 039 | 0,77 % | 7,5 | Description: euromäärät; sisäinen linkki arkipyhäkorvaus-hubista |
| /posts/lepoaika_tyovuorojen_valissa | 22 | 1 557 | 1,41 % | 6,8 | Uusi osio "Entä tauot työvuoron aikana?" (24 §) |
| /posts/tyovuorolista_pohja | (osa "työvuorosuunnittelu excel" -kysynnästä, sivustolla 257 näyttöä @ 14,7) | | | | Title: +Excel; uusi osio "Työvuorosuunnittelu Excelissä" |
| /posts/kaupan_alan_tes_tyovuorosuunnittelussa | 5 | 1 088 | 0,46 % | 9,9 | Sisäinen linkki arkipyhäkorvaus-hubista |

Kysymyskohtaisia lähtöarvoja (GSC, sama ikkuna):

- "iltalisä" → iltalisä-postaus: 201 näyttöä, 0 klikkiä, sij. 8,6
- "iltalisä mara" → sama sivu: 43 näyttöä, 0 klikkiä, sij. 6,6
- "kaupan alan lauantailisä 2026" → työaikalisät-postaus: 44 näyttöä, 1 klikki, sij. 3,9
- "työvuorosuunnittelu excel" → /pohja: 54 näyttöä, sij. 10,4 (koko sivusto: 257 näyttöä, sij. 14,7)
- "kaupan ala lepoaika" → lepoaika-postaus: 22 näyttöä, sij. 7,4

Vertailun ulkopuolelle jätetty tarkoituksella: /posts/tyovuorolista_lyhenteet (pääkyselyt jo sijalla 1, 105 klikkiä/kk) ja /pohja-sivun pääkyselyt (sijat 1,6–3,1).

## Mittaus ~4 viikon päästä (aikaisintaan 29.9.2026)

1. Aja OpenSEO: `get_search_console_performance` per sivu, `startDate: 2026-09-01`, `endDate: 2026-09-28`, dimensions `["query"]`, page-suodatin yllä oleville viidelle sivulle. Vertaa tämän tiedoston lukuihin.
2. Aja `get_search_opportunities` samalla 1.9.–28.9. ikkunalla ja vertaa score/positio-muutoksia.
3. Onnistumiskriteerit: iltalisä-postauksen CTR yli 1 % (nyt 0,13 %), kaupan työaikalisät CTR yli 1,5 % (nyt 0,77 %), "työvuorosuunnittelu excel" sijainti alle 10 (nyt 14,7), kaupan TES -yleiskuva sijainti alle 9 (nyt 9,9).
4. Huomioi: title-muutokset vaikuttavat vasta uudelleenindeksoinnin jälkeen. Pyydä indeksointi GSC:ssä deployn jälkeen, niin ikkunasta tulee puhtaampi.
5. Muista myös GA4: key eventit puuttuvat kaikilta sivuilta; jos rekisteröityminen lisätään key eventiksi, seuraava analyysi voi käyttää konversiota sijaintien sijaan.

Tausta: OpenSEO-projektin research log (31.8.2026) ja tämän session kilpailija-analyysit (Otta 30.8., HRSuunti 31.8.).
