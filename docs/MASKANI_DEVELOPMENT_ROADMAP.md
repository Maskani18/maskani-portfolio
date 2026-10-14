# MASKANI — Development Roadmap

**Status dokumen:** aktif · 14 Oktober 2026
**Basis:** Forensic Audit (`docs/MASKANI_PROJECT_FORENSIC_AUDIT.md`),
Build Reference §6, Spec v2 §16, dan `FINAL-VISUAL-REFERENCE-ADDENDUM.md`
(10 Okt 2026) + `LAYOUT-AND-PHOTO-PLACEMENT.md`.
**Aturan:** Setiap task harus selesai dengan bukti sebelum naik status.
Tidak ada "hampir selesai".

---

## Daftar Isi

1. [Legenda Status](#1-legenda-status)
2. [Master Inventory Pekerjaan](#2-master-inventory-pekerjaan)
3. [R1e — Penutup R1](#3-r1e--penutup-r1)
4. [G-R1 Checklist](#4-g-r1-checklist)
5. [R1 Cleanup — Sebelum R2/VA](#5-r1-cleanup--sebelum-r2va)
6. [FASE VA — Visual Alignment (BARU)](#6-fase-va--visual-alignment-baru)
7. [R2 — Sinematik](#7-r2--sinematik)
8. [R3 — Interaksi](#8-r3--interaksi)
9. [R4 — Penutup](#9-r4--penutup)
10. [Backlog Konten & Aset](#10-backlog-konten--aset)
11. [Dependency Graph](#11-dependency-graph)
12. [Definition of Done](#12-definition-of-done)
13. [Urutan Eksekusi yang Direkomendasikan](#13-urutan-eksekusi-yang-direkomendasikan)

---

## 1. Legenda Status

| Label | Arti |
|---|---|
| DONE_VERIFIED | Ada bukti konkret (commit, log, output test) |
| IMPLEMENTED_UNTESTED | Kode ada, belum diverifikasi |
| PARTIAL | Sebagian selesai |
| NOT_STARTED | Belum dikerjakan |
| BLOCKED | Menunggu keputusan/aset |
| FAILED | Gagal; butuh perbaikan |
| UNVERIFIED | Belum diuji |
| NOT_APPLICABLE | Tidak berlaku |

Prioritas: **P0** blocker; **P1** wajib sebelum rilis; **P2** penting;
**P3** peningkatan.

---

## 2. Master Inventory Pekerjaan

| Kategori | Jumlah |
|---|---|
| DONE_VERIFIED | 47 |
| IMPLEMENTED_UNTESTED | 2 |
| PARTIAL | 6 |
| NOT_STARTED (sebelum VA) | 32 |
| NOT_STARTED (fase VA) | 23 |
| BLOCKED | 2 |
| FAILED | 0 |
| UNVERIFIED | 9 |

*(Denominator lengkap per task di bawah.)*

---

## 3. R1e — Penutup R1

**Tujuan:** Menyelesaikan G-R1 dan melakukan deploy produksi pertama.
**Prasyarat:** G-3 LULUS ✅.
**Blocker saat ini:** Pemilik menunda (keputusan eksplisit).

| T-ID | Task | P | Depends on | Acceptance | Verifikasi | Status |
|---|---|---|---|---|---|---|
| T-R1e-01 | Verifikasi manual zoom 200% | P1 | — | Tidak ada teks terpotong | Manual | NOT_STARTED |
| T-R1e-02 | Verifikasi manual zoom 400% | P1 | T-R1e-01 | Idem | Manual | NOT_STARTED |
| T-R1e-03 | Buka PDF, cek tidak ada telepon/alamat | P1 | — | Ctrl+F bersih | Manual | PARTIAL (file ada 331 KB) |
| T-R1e-04 | Verifikasi keyboard penuh | P1 | — | Urutan tab = visual | Manual | NOT_STARTED |
| T-R1e-05 | (Opsional) NVDA/VoiceOver | P2 | — | Landmark & skip link diumumkan | Manual | NOT_STARTED |
| T-R1e-06 | Set Vercel env scoped | P1 | — | Dua entri terpisah | Screenshot | NOT_STARTED |
| T-R1e-07 | Push `main:production` | P1 | T-R1e-06 | Deployment Ready | Dashboard | NOT_STARTED |
| T-R1e-08 | Verifikasi `robots.txt` produksi | P1 | T-R1e-07 | `Allow: /` + `Sitemap:` | curl | NOT_STARTED |
| T-R1e-09 | Verifikasi `sitemap.xml` produksi | P1 | T-R1e-07 | 2 URL | curl | NOT_STARTED |
| T-R1e-10 | Tulis DL-013 | P1 | T-R1e-07 | Entri tercatat | File | NOT_STARTED |
| T-R1e-11 | Update `docs/traceability.md` | P1 | T-R1e-07 | Baris relevan = **Ya** | File | NOT_STARTED |
| T-R1e-12 | Commit + push `main` | P1 | T-R1e-10, T-R1e-11 | Git clean | git log | NOT_STARTED |

**DoD R1e:** Semua 12 task DONE_VERIFIED. G-R1 lulus penuh (10/10).

---

## 4. G-R1 Checklist

| # | Syarat | Pengukur | Status audit |
|---|---|---|---|
| 1 | Penjaga konten lulus | CI | ✅ VERIFIED |
| 2 | Lighthouse ≥95/100/100 desktop+mobile | LHCI | ⚠️ Desktop ✅; **mobile NOT_STARTED** |
| 3 | axe 0 (istirahat + dialog) | Playwright + axe | ✅ VERIFIED |
| 4 | Seluruh spec E2E lulus | Playwright | ✅ VERIFIED (66 pass, 0 fail) |
| 5 | Terbaca penuh tanpa JS | E2E | ✅ VERIFIED |
| 6 | LCP <2,0 s, CLS <0,05, INP <200 ms | LH / pengukuran | ⚠️ Inferens dari LH 100; **manual NOT VERIFIED** |
| 7 | Skrip 3rd-party = 0; JS dalam anggaran | Pengukuran | ✅ 0 skrip; ⚠️ JS 182 KB > 150 KB (DL-012) |
| 8 | Tier Static tanpa GSAP | E2E | ✅ VERIFIED |
| 9 | CV publik tanpa telepon terunduh dari Hero | E2E + manual | ⚠️ File ada; T-R1e-03 NOT_STARTED |
| 10 | Tidak ada angka CI palsu | Guard + E2E | ✅ VERIFIED |

**Status:** 6 ✅ + 4 ⚠️ (semua diselesaikan oleh T-R1e-01…09).

---

## 5. R1 Cleanup — Sebelum R2/VA

| T-ID | Task | P | Finding | Acceptance | Status |
|---|---|---|---|---|---|
| T-CLEAN-01 | Aktifkan branch protection `main` | P1 | F-08 | Direct push ditolak; CI checks wajib | NOT_STARTED |
| T-CLEAN-02 | Review posisi `lenis` | P2 | F-01 | DL mencatat: biarkan / uninstall | NOT_STARTED |
| T-CLEAN-03 | Catat keputusan `locationShort` di DL | P2 | F-09, Q3 | Entri DL | NOT_STARTED |
| T-CLEAN-04 | Perbarui `README.md` | P3 | F-10 | Entry point handoff | DONE_VERIFIED |
| T-CLEAN-05 | Konfirmasi `public/favicon.ico` | P3 | F-06 | Monogram M (R4) atau default | NOT_STARTED |

---

## 6. FASE VA — Visual Alignment (BARU)

**Tujuan:** Menyelaraskan tampilan dengan referensi visual Addendum 10 Okt 2026
(kartu media bersudut membulat, potret cutout Hero, sistem Stage horizontal).
**Prasyarat:** G-R1 LULUS (soft) atau R1e selesai.
**Posisi:** antara R1e dan R2.
**Aturan proses:** Static → Lite → Cinematic (F-06).

### 6a. Task VA

| T-ID | Task | P | Depends | Acceptance | Verifikasi | Status |
|---|---|---|---|---|---|---|
| T-V-00 | **Spike prototipe**: transisi Stage Cinematic + potret Hero pada perangkat menengah. Ukur LCP, INP, kelancaran | P1 | T-V-04 | Hasil tercatat di DL; keputusan lanjut / sederhanakan sebelum T-V-08 | Profiling + LHCI | NOT_STARTED |
| T-V-01 | Catat register pengecualian Addendum §4 sebagai entri Decision Log | P1 | — | Entri DL; pemilik menyetujui | File | NOT_STARTED |
| T-V-02 | Token: `radius-media`, `shadow-media`, `stroke-outline`, `dur-stage`, `ease-stage`, token garis progres | P1 | T-V-01 | Tanpa angka ajaib; kontras garis outline ≥ 3:1 | Lint + review | NOT_STARTED |
| T-V-03 | `MediaCard` menggantikan `Frame`/`MediaFrame`: varian `square`/`portrait`/`landscape`; tanpa siku; slot kosong menghilang | P1 | T-V-02 | E2E-V01; layout utuh tanpa gambar; alt wajib | Playwright | NOT_STARTED |
| T-V-04 | Hero **Static**: slot `[PORTRAIT CUTOUT]`, judul tiga lapis (solid / cutout / outline `aria-hidden`), caption | P1 | T-V-03 | Satu `h1`; terbaca tanpa JS; LCP < 2,0 s dengan placeholder | Playwright + LH | NOT_STARTED |
| T-V-05 | Komposisi section asimetris (About, Education, Experience, Projects) memakai `MediaCard` | P1 | T-V-03 | Zoom 200% dan 400% tanpa teks terpotong | Manual + Playwright | NOT_STARTED |
| T-V-06 | Aturan LCP dan anggaran gambar Hero (selaras K-12) | P1 | T-V-04 | Anggaran tercatat di DL; LH desktop+mobile lulus | LHCI | NOT_STARTED |
| T-V-07 | **Stage Lite:** heading dan foto masuk dari samping, tanpa pin | P1 | T-V-05 | Tanpa GSAP berat; tidak ada jitter nav | Playwright (Lite) | NOT_STARTED |
| T-V-08 | **Stage Cinematic:** pin/scrub horizontal T-SLIDE, T-RISE, T-TITLE; satu choreography | P1 | T-V-00, T-V-07, T-R2-02 | §3.6 Addendum terpenuhi; satu ticker | Playwright + ledger | NOT_STARTED |
| T-V-09 | Fallback reflow/zoom dan viewport pendek ke tumpukan vertikal | P1 | T-V-08 | Tanpa konten terpotong pada 320 px dan zoom 400% | Manual + Playwright | NOT_STARTED |
| T-V-10 | Navigasi dan keyboard di mode Stage | P1 | T-V-08 | E2E-V04 | Playwright | NOT_STARTED |
| T-V-11 | Trace horizontal sebagai garis progres di mode Stage | P2 | T-V-08, T-R2-05c | Dekoratif; Static tetap vertikal | Playwright | NOT_STARTED |
| T-V-12 | Hero Power-On: potret fade, judul outline → solid, caption | P1 | T-V-04, T-R2-03 | Nama terlihat sejak first paint; tanpa `opacity: 0` di CSS | Playwright | NOT_STARTED |
| T-V-13 | Kebijakan aset: EXIF, alt text, format AVIF/WebP beralfa | P1 | — | Checklist per aset | Manual | NOT_STARTED |
| T-V-14 | **Gerbang G-VA** | P1 | semua di atas | Semua butir lulus | Checklist + CI | NOT_STARTED |
| T-V-15 | Konstanta peta layout (persentase) sebagai token layout; `StageShell` memakainya | P1 | T-V-02 | Tanpa angka ajaib | Lint + review | NOT_STARTED |
| T-V-16 | Layout Hero (Template A) Static: lapisan, CTA, caption, status | P1 | T-V-04 | Tidak ada elemen menimpa potret; satu `h1` | E2E-V02 | NOT_STARTED |
| T-V-17 | Layout About, Education, Skills (Template B, C, D) | P1 | T-V-05 | Tanpa foto tetap utuh | E2E-V11 | NOT_STARTED |
| T-V-18 | Layout Experience Opsi A (default) dan kartu judul; Opsi B hanya setelah persetujuan | P1 | T-V-05 | Ketiga peran terlihat dalam satu stage | Playwright | NOT_STARTED |
| T-V-19 | Layout Projects (Template H) untuk 1, 2–3, 4+ project; halaman report dua kolom | P1 | T-V-05 | E2E tiga varian; poster tipografis tanpa gambar | E2E-V10 | NOT_STARTED |
| T-V-20 | Layout Contact dengan potret dipakai ulang | P2 | T-V-16 | Tanpa aset baru | Playwright | NOT_STARTED |
| T-V-21 | Layout mobile (tumpukan) | P1 | T-V-16…19 | Tidak ada overflow di 320 px; target sentuh ≥ 48px | E2E-V05 | NOT_STARTED |
| T-V-22 | Fokus/titik kunci foto (`object-position` per slot) | P2 | T-V-03 | Subjek tidak terpotong di rasio 16:10 dan mobile | Manual + Playwright | NOT_STARTED |

### 6b. Gerbang G-VA (Visual Alignment)

Semua butir harus lulus dan dicatat dengan bukti (screenshot/spec).
Tidak ada "hampir".

**18 butir lengkap** (dari Addendum §6):

1. Hero tiga lapis (solid → cutout → outline `aria-hidden`) dengan satu `h1`.
2. Judul outline → solid tanpa membuat teks tak terlihat.
3. Semua foto memakai `MediaCard` (sudut membulat, bayangan statis).
4. Radius tombol dan tag tetap kecil.
5. Transisi horizontal 0,8–1,0 s di Cinematic.
6. Garis progres/Trace di tepi layar (mode Stage).
7. Nav tidak jitter selama transisi.
8. Lite: transisi sederhana; Static: tanpa transisi.
9. Reflow 320 px + zoom 400% tanpa konten terpotong.
10. Keyboard dan anchor bekerja di mode Stage.
11. Lighthouse ≥ 95/100/100 desktop **dan** mobile dengan potret.
12. axe 0 pelanggaran, termasuk salinan outline `aria-hidden`.
13. Tidak ada konten, foto, atau teks dari video.
14. Posisi blok kunci sesuai peta Storyboard §3 (±5%) pada viewport 1440×810.
15. Hero: CTA dan tagline tidak menimpa potret; kontras teks di atas potret.
16. Projects merender benar untuk 1, 2–3, dan 4+ project.
17. Tanpa semua foto personal, seluruh section utuh dan terbaca.
18. Hasil spike T-V-00 tercatat; efek yang melewati batas disederhanakan
    menurut urutan prioritas.

### 6c. Adjustment pada Task R2/R3

Task berikut **diubah cakupannya** oleh VA:

- **T-R2-03** (Hero Power-On) — memakai T-V-12.
- **T-R2-05c** (Trace Cinematic) — mengikuti T-V-11 (horizontal di mode Stage).
- **T-R2-07** (Transisi) — memakai sistem Stage.
- **T-R3-04** (Tilt/parallax) — dikecualikan di Lite dan Static.
- **T-R3-05** (Aperture) — bagian dari urutan Stage.

---

## 7. R2 — Sinematik

**Prasyarat:** G-VA LULUS + **PF-10 terkonfirmasi** (U-01 + U-02).

| T-ID | Task | P | Depends | Aturan | File | Acceptance | Status |
|---|---|---|---|---|---|---|---|
| T-R2-00 (PF-10) | Konfirmasi U-01 & U-02 | P0 | — | Spec §10.2 | — | Konfirmasi tertulis di DL | BLOCKED |
| T-R2-01 | `motion/contract.ts` — kosakata `data-*` | P1 | T-R2-00 | Build Ref R2-01 | `src/motion/contract.ts` (baru) | reveal, mask, magnetic, cursor, trace-node, trace-terminus | NOT_STARTED |
| T-R2-02 | Runtime: tier store, scope, ticker, refresh | P1 | T-R2-01 | Build Ref R2-02 | `src/motion/runtime/{tier-store,scope,ticker,refresh}.ts` | Tanpa rAF manual; tanpa setState per frame | NOT_STARTED |
| T-R2-03 | Hero Power-On + key spotlight (via T-V-12) | P1 | T-R2-02 | Spec §5.6 | `src/sections/hero/HeroMotion.client.tsx`, `hero.choreography.ts` | Nama first paint; LCP tidak mundur | NOT_STARTED |
| T-R2-04 | `mask-text` untuk D2 | P1 | T-R2-02 | Spec §5.3 | `src/motion/primitives/mask-text.ts` | Nama aksesibel utuh; fonts.ready | NOT_STARTED |
| T-R2-05a | Trace Static | P1 | T-R2-01 | Build Ref R2-05 | `src/systems/trace/*` (baru) | Tier static tanpa GSAP | NOT_STARTED |
| T-R2-05b | Trace Lite | P1 | T-R2-05a | Idem | Idem | Tier lite tanpa Lenis | NOT_STARTED |
| T-R2-05c | Trace Cinematic (via T-V-11) | P1 | T-R2-05b | Spec §5.7, §8 | Idem | Refresh setelah font; tanpa CLS | NOT_STARTED |
| T-R2-06 | Lenis (Cinematic) | P1 | T-R2-02 | Spec §5.4 | `src/motion/runtime/smooth-scroll.client.ts` | Dapat dibuang tanpa rusak | NOT_STARTED |
| T-R2-07 | Transisi antar-stage (via sistem Stage) | P1 | T-R2-05c, T-V-08 | Spec §5.7 + Addendum §3.5 | `src/systems/stage/*` | Anggaran gerak §5.8 | NOT_STARTED |
| T-R2-08 | Spec E2E tier parity + reduced motion diperluas | P1 | T-R2-05c, T-R2-06 | Build Ref §10.2 | `tests/e2e/p2.spec.ts` | Lulus di 3 tier Chromium | NOT_STARTED |

**G-R2:** anggaran gerak; tier parity; reduced motion; profiling mid-tier;
tanpa regresi G-R1.

---

## 8. R3 — Interaksi

**Prasyarat:** G-R2 LULUS.

| T-ID | Task | P | Depends | Aturan | Acceptance | Status |
|---|---|---|---|---|---|---|
| T-R3-01 | Sistem Cursor | P1 | T-R2-02 | Spec §5.5 | Native cursor tidak disembunyikan; follower disembunyikan saat dialog (K-15) | NOT_STARTED |
| T-R3-02 | Magnetic (hanya Download CV + Copy Email) | P1 | T-R3-01 | Spec §5.5 | Radius 72 px; tarikan max 8 px; tidak aktif saat focus keyboard | NOT_STARTED |
| T-R3-03 | Inspection Lamp + anotasi | P2 | T-R3-01 | Spec §5.6 | Anotasi statis di Lite/Static | NOT_STARTED |
| T-R3-04 | Tilt (max 4°) + parallax media (dikecualikan di Lite/Static) | P2 | T-R2-02 | Spec §5.6 | Cinematic only; pertama dikurangi bila over budget | NOT_STARTED |
| T-R3-05 | Aperture (bagian dari urutan Stage) | P2 | T-R2-02, T-V-08 | Spec §5.6 | Cinematic ~70vh; Lite fade 560 ms; Static datar | NOT_STARTED |
| T-R3-06 | Break → Reroute → Verify | P2 | T-R2-02 | Spec §6.2 + BR-18 | Verification null → blok tidak dirender | NOT_STARTED |
| T-R3-07 | Uji perangkat nyata (P5) | P1 | semua di atas | Spec §9 | 320px & mid-tier lulus | NOT_STARTED |
| T-R3-08 | Spec E2E diperluas | P1 | semua di atas | — | Lulus | NOT_STARTED |

**G-R3:** profiling mid-tier lulus; tidak ada regresi a11y.

---

## 9. R4 — Penutup

**Prasyarat:** G-R3 LULUS + **PF-11 selesai**.

| T-ID | Task | P | Depends | Aturan | Acceptance | Status |
|---|---|---|---|---|---|---|
| T-R4-01 | Build Receipt | P1 | T-R3-08, PF-11 | BR-05, CG-06 | Sumber hanya CI; kosong → baris disembunyikan | NOT_STARTED |
| T-R4-02 | Overlay report (intercepting route) | P2 | T-R4-01 | Spec §6.2 | Fokus masuk/kembali; Escape; heading h2/h3 | NOT_STARTED |
| T-R4-03 | Ledger trigger dev/test | P3 | — | DP-04 | Jumlah trigger tidak bertambah | NOT_STARTED |
| T-R4-04 (F-02) | P9 Performance | P1 | T-R4-01 | DL-012 | JS ≤150 KB atau DL baru | NOT_STARTED |
| T-R4-05 | P10 Final polish (favicon, OG visual, domain) | P2 | — | Spec §16.2 | Pratinjau LinkedIn/WhatsApp benar | NOT_STARTED |
| T-R4-06 | Visual regression minimal (opsional) | P3 | — | — | 3–5 baseline | NOT_STARTED |

**G-R4:** seluruh target §13 di CI; Colophon cocok dengan CI.

---

## 10. Backlog Konten & Aset

### 10a. Konten teks

| T-ID | Task | P | Blocker | Acceptance | Status |
|---|---|---|---|---|---|
| T-C-01 (PF-05) | Isi `details` Experience (3–4 poin × 3 peran, EN) | P1 | Input pemilik | Tombol "Details" muncul | PARTIAL |
| T-C-02 (PF-08) | Isi Problem/Approach/Verification/Result SIDALEKAS | P1 | Input pemilik | Hanya yang terbukti; sisanya null | PARTIAL |
| T-C-04 (PF-09) | Domain kustom | P3 | Keputusan | Canonical diperbarui | NOT_STARTED |
| T-C-05 (F-06) | Favicon monogram M + node aksen | P3 | — | Tampil di tab | NOT_STARTED |
| T-C-06 (F-07) | Twitter metadata | P3 | — | Preview kartu Twitter | NOT_STARTED |
| T-C-07 | Konfirmasi tidak ada klausul engine animasi di Creative Direction | P0 | Akses dokumen | Tidak ada konflik Q1/Q2 | NOT_STARTED |

### 10b. Aset foto personal (fase VA)

| T-ID | Task | P | Blocker | Acceptance | Status |
|---|---|---|---|---|---|
| T-C-08 | `[PORTRAIT CUTOUT]` (Hero + Contact) | P1 | Aset | Latar transparan; tepi bersih; EXIF dihapus | NOT_STARTED |
| T-C-09 | `[PHOTO ABOUT]` (8:7) | P1 | Aset | AVIF/WebP; alt text | NOT_STARTED |
| T-C-10 | `[PHOTO EDU-LARGE]` (7:5) | P2 | Aset | Idem | NOT_STARTED |
| T-C-11 | `[PHOTO EDU-SMALL]` (2:1) | P2 | Aset | Idem | NOT_STARTED |
| T-C-12 | `[PHOTO SKILLS-CUTOUT]` (pose kedua) | P3 | Aset | Beda pose dari Hero | NOT_STARTED |
| T-C-13 | `[PHOTO EXP-TALL]` (7:10) | P2 | Aset | Idem | NOT_STARTED |
| T-C-14 | `[PHOTO EXP-WIDE]` (2.2:1, opsional) | P3 | Aset | Idem | NOT_STARTED |
| T-C-03 (PF-07) | Screenshot SIDALEKAS | P2 | Aset | Data pribadi disamarkan; alt lengkap | BLOCKED |

Total foto personal: **minimum 5, disarankan 7.**

---

## 11. Dependency Graph
PF-01 ✓ ──► G-0 ✓ ──► P1 ✓ ──► G-1 ✓ ──► P3 ✓ ──► G-3 ✓
│
▼
R1e (T-R1e-01…12) ──► G-R1
│
▼
T-CLEAN-01 (F-08)
│
▼
T-V-01 ──► T-V-02 ──► T-V-03 ──► T-V-04 ──► T-V-05 ──► T-V-06
│
▼
T-V-15…T-V-22 (Layout) ──► T-V-07 (Lite)
│
▼
PF-10 + T-V-08 (Cinematic) ──► G-VA
│
▼
R2-01…08 (disesuaikan §6c) ──► G-R2
│
▼
R3-01…08 (disesuaikan §6c) ──► G-R3
│
▼
PF-11 + R4-01…06 ──► G-R4 ──► RILIS

text

**Catatan:** PF-10 (T-R2-00) **juga memblokir T-V-08** (Stage Cinematic),
bukan hanya R2-01.

---

## 12. Definition of Done

### DoD — Setiap PR
- Alur mikro §3.2 Build Reference diikuti berurutan.
- Markup server benar; bekerja tanpa JS.
- Hanya token; tidak ada angka ajaib.
- Tidak ada teks portofolio di komponen.
- Dependensi baru: entri DL + §10.3 sebelum install.
- Spec E2E ditambahkan dan lulus; axe 0.
- Keyboard + focus ring + zoom 200% diperiksa.
- Choreography baru memiliki komentar pembuka.
- `npm run format && lint && typecheck && build` hijau.
- `npx playwright test` hijau (0 failed).
- CI hijau di GitHub.
- Tidak ada "lulus-hanya-saat-retry".

### DoD — Konten
- Bersumber dari CV atau pemilik.
- Lolos CG-01…CG-14.
- Terjemahan EN disetujui; frasa persis dipertahankan.

### DoD — Rilis (per gerbang)
Mengikuti Build Reference §13.3.

### DoD — Proyek (final, v2)
- G-0, G-1, G-3, G-R1, **G-VA**, G-R2, G-R3, G-R4 lulus dan tercatat.
- PF-01…PF-13 selesai (kecuali disetujui lewat DL).
- F-01…F-10 teratasi atau disetujui sebagai acceptable.
- Target §13 Spec v2 (perf) terpenuhi.
- Target §12 Spec v2 (WCAG 2.2) terpenuhi.
- Tidak ada P0/P1 terbuka.
- Handoff docs lengkap.
- CV publik tanpa telepon/alamat.
- Tidak ada secret di repo atau riwayat Git.
- **Semua slot foto personal yang wajib tersedia (minimum 5).**
- **Tidak ada file foto/teks/ikon dari video referensi di repository.**
- **Semua foto personal memiliki EXIF yang dibersihkan dan `alt` text.**

---

## 13. Urutan Eksekusi yang Direkomendasikan

1. **T-R1e-01…12** — Selesaikan R1e. Menutup G-R1.
2. **T-CLEAN-01** (F-08) — Aktifkan branch protection.
3. **T-CLEAN-02, T-CLEAN-03, T-CLEAN-05** — Debt kecil.
4. **T-C-07** — Konfirmasi Creative Direction.
5. **T-V-01** — Catat register pengecualian sebagai DL.
6. **T-V-02** — Token `radius-media` dkk.
7. **T-V-03** — `MediaCard` menggantikan `Frame`/`MediaFrame`.
8. **T-V-04** — Hero Static dengan potret cutout (placeholder dulu).
9. **T-V-05, T-V-15…T-V-22** — Layout semua section (Static).
10. **T-V-06** — Anggaran LCP Hero.
11. **T-V-07** — Stage Lite.
12. **T-V-00** — Spike prototipe Cinematic.
13. **T-R2-00 (PF-10)** — Konfirmasi U-01 + U-02.
14. **T-V-08…T-V-12** — Stage Cinematic + Power-On + Trace horizontal.
15. **G-VA**.
16. **R2 lanjutan** (T-R2-01…08 yang disesuaikan).
17. **R3-01…08**.
18. **T-R4-01…06**.
19. **T-C-01, T-C-02, T-C-03, T-C-08…T-C-14** — Paralel sesuai input.

---

**Akhir dokumen.**