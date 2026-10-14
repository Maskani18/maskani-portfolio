# MASKANI — Storyboard

**Status dokumen:** aktif · 14 Oktober 2026
**Basis:** `FINAL-VISUAL-REFERENCE-ADDENDUM.md` (10 Okt 2026) +
`LAYOUT-AND-PHOTO-PLACEMENT.md` + konfirmasi pilihan dari storyboard referensi.
**Tujuan:** Peta layout final per stage, siap dipakai sebagai acuan implementasi
fase VA (Visual Alignment). Semua keputusan terkunci (font, warna, urutan
section, konten) dipertahankan.

---

## Daftar Isi

1. [Kanvas & Konvensi](#1-kanvas--konvensi)
2. [Urutan Stage](#2-urutan-stage)
3. [Storyboard Per Stage](#3-storyboard-per-stage)
4. [Daftar Aset Final](#4-daftar-aset-final)
5. [Catatan Transisi & Tier](#5-catatan-transisi--tier)
6. [Checklist Pengerjaan](#6-checklist-pengerjaan)
7. [Yang Masih Terbuka](#7-yang-masih-terbuka)
8. [Yang TIDAK Berubah](#8-yang-tidak-berubah)

---

## 1. Kanvas & Konvensi

- **Kanvas acuan:** 1440×810 (16:9), konsisten dengan `playwright.config.ts`.
- **Konvensi:** `x, y` = sudut kiri-atas; `w × h` = persen viewport.
  Nilai px = contoh pada 1440×810.
- **Margin kiri/kanan:** 5,5% (≈ 80 px).
- **Nav:** `--nav-height` 4rem; tetap di atas pada semua stage.
- **Tinggi stage:** `100svh` pada Cinematic/Lite; tumpukan vertikal di
  Static dan reflow.

---

## 2. Urutan Stage

| # | ID Stage | Template | Transisi masuk | Tier |
|---|---|---|---|---|
| 01 | `hero` | A — Sandwich | Fade + rise (initial) | Cinematic pin; Lite slide; Static tampil |
| 02 | `about` | B — Kartu + Teks | T-SLIDE dari Hero | Cinematic pin; Lite slide |
| 03 | `experience-title` | E — Kartu Judul | T-RISE dari About | Cinematic scrub |
| 04 | `experience` | Isi Opsi A | T-SLIDE dari kartu judul | Cinematic pin; Lite slide |
| 05 | `projects` | H — Poster | Aperture + T-TITLE | Cinematic scrub |
| 06 | `skills` | D — Cutout + kolom | T-SLIDE ("Release") | Cinematic pin |
| 07 | `education` | C — Zig-zag | T-SLIDE | Cinematic pin |
| 08 | `contact` | A — Sandwich (bookend) | T-SLIDE ("Landing") | Cinematic pin |
| 09 | `colophon` | Struk build | Print | Semua tier |

Aturan tetap: **Static = tumpukan vertikal tanpa pin; Lite = slide masuk
sederhana; Cinematic = pin/scrub penuh.** Semua konten tetap di DOM
(Addendum §3.6).

---

## 3. Storyboard Per Stage

### Stage 01 — Hero (Template A)
┌──────────────────────────────────────────────────────────────┐
│ MASKANI 02 About 03 Experience … 07 Contact [CV]│
│ │
│ [● Open to work] ╎ │
│ ┌──────────────┐ ╎ │
│ │ │ ╎ │
│ M A S K A N I (solid, z=10) │ ╎ │
│ │ POTRET │ ╎ │
│ M A S K A N I (outline, z=30) │ ╎ │
│ │ │ ╎ │
│ tagline (kiri) └──────────────┘ ╎ │
│ ───────────────── ╎ │
│ [HERO CAPTION] ╎ │
│ [Download CV] │
│ [View Work] │
└──────────────────────────────────────────────────────────────┘

| Elemen | x | y | w × h | px @1440×810 | Catatan |
|---|---|---|---|---|---|
| Chip "Open to work" | 5,5% | 14% | auto | pil 24 px | Teks nyata; titik aksen dekoratif |
| Potret cutout | 37% | 5% | 30 × 95 | 432 × 770 | AVIF/WebP alfa; `priority`; bukan LCP |
| `h1` MASKANI solid | 9% | 46% | 82 × cap 19% | cap 154 px | D1; `z=10` |
| MASKANI outline | 9% | 46% | sama | sama | `-webkit-text-stroke: 1px hairline-strong`; `aria-hidden`; `z=30` |
| Tagline (C-02) | 9% | 68% | 45% | — | `text-lead text-text-2` |
| CTA Download CV | 68% | 76% | 26 × 6 | ≥48px | `Button primary` |
| CTA View Work | 68% | 83% | 26 × 6 | ≥48px | `Button secondary` → `#projects` |
| `[HERO CAPTION]` + hairline | 5,5% | 85% | hairline 26% | — | Opsional; default kosong |
| Hairline vertikal kanan | 94% | 12% | 1px × 54% | — | Dekoratif; `aria-hidden` |

**LCP:** nama MASKANI terlihat sejak first paint (bukan potret). Potret
dimuat dengan `priority` tapi tidak memblokir teks.

**Z-order:** `void + cahaya` → `h1 solid` → `potret` → `h1 outline
(aria-hidden)` → `caption/CTA`. **Tidak ada titik dekoratif.**

---

### Stage 02 — About (Template B)
┌──────────────────────────────────────────────────────────────┐
│ MASKANI 02 About 03 Experience … 07 Contact [CV]│
│ │
│ ┌──────────────────┐ A B O U T │
│ │ │ │
│ │ │ Software Engineering graduate │
│ │ [PHOTO ABOUT] │ from Politeknik Negeri │
│ │ 8:7 │ Indramayu with hands-on │
│ │ radius-media │ experience in IT support … │
│ │ │ │
│ └──────────────────┘ [D4 Software Engineering · …] │
└──────────────────────────────────────────────────────────────┘

| Elemen | x | y | w × h | px | Catatan |
|---|---|---|---|---|---|
| `[PHOTO ABOUT]` | 6% | 19% | 41 × 62 | 590 × 502 | `MediaCard landscape`; radius-media; bayangan statis |
| Judul "About" (`h2`) | 50% | 29% | 26 × cap 8% | cap ~90 px | D2; **kiri** (bukan rata kanan) |
| Paragraf lead (C-06) | 50,5% | 41% | 43 × 27 | 620 × 220 | **Rata kiri**; tiga frasa bergaris bawah hairline |
| Chip (C-08) | 50,5% | 72% | auto | pil | `MonoTag` + border hairline |
| Hairline kiri bawah + caption | 5,5% | 88% | hairline 26% | — | Opsional |

**Transisi:** masuk T-SLIDE dari Hero. Keluar T-RISE ke kartu judul Experience.

---

### Stage 03 — Kartu Judul "Experience" (Template E)
┌──────────────────────────────────────────────────────────────┐
│ MASKANI 02 About 03 Experience … 07 Contact [CV]│
│ │
│ E X P E R I E N C E │
│ │
│ "[CHAPTER TAGLINE — opsional, tidak diisi]" │
│ │
│ ──────────────────── │
└──────────────────────────────────────────────────────────────┘

| Elemen | x | y | w × h | px | Catatan |
|---|---|---|---|---|---|
| Judul "Experience" | 16% | 39% | 67 × cap 15% | cap ~120 px | D2; tanpa italic buatan |
| `[CHAPTER TAGLINE]` | 16% | 57% | 67 | 15 px | **Tidak diisi** (F-08) |
| Hairline kiri-bawah + caption | 5,5% | 79% | hairline 26% | — | Struktur visual |
| Hairline vertikal kanan | 94% | 0 | 1px × 63% | — | Motif konsisten |

**Transisi:** masuk T-RISE. Keluar T-SLIDE ke isi Experience.

---

### Stage 04 — Experience Isi (Opsi A — default)
┌──────────────────────────────────────────────────────────────┐
│ MASKANI 02 About 03 Experience … 07 Contact [CV]│
│ │
│ EXPERIENCE ┌───────────────────┐ │
│ ───────────── │ │ │
│ Oct 2025 — Dec 2025 │ │ │
│ Frontend Developer Intern │ [PHOTO EXP-TALL]│ │
│ Diskominfo Kabupaten Indramayu │ 7:10 │ │
│ Built the SIDALEKAS interface … │ radius-media │ │
│ │ │ │
│ Jul 2025 — Oct 2025 │ │ │
│ QA Intern │ │ │
│ PT Qtasnim Digital Teknologi │ │ │
│ Ran manual and UAT … │ │ │
│ │ │ │
│ Oct 2019 — Jan 2020 │ │ │
│ IT Support Intern └───────────────────┘ │
│ PT Dirgantara Indonesia (Persero) │
│ Troubleshot hardware and software … │
└──────────────────────────────────────────────────────────────┘

text

| Elemen | x | y | w × h | px | Catatan |
|---|---|---|---|---|---|
| Judul "Experience" (`h2`) | 5,5% | 14% | 52 × cap 12% | cap ~95 px | D2 |
| Tiga baris peran | 5,5% | 30% | 52 × 60 | 750 × 486 | Terbaru → terlama; `border-t hairline` antar baris |
| Tanggal mono | (dalam baris) | — | — | meta | `MonoTag` |
| Peran (`h3`) | — | — | — | D3 | `Heading level=3 size=d3` |
| Organisasi | — | — | — | meta uppercase | `MonoTag` |
| Ringkasan | — | — | max 62ch | body | C-09/C-10/C-11 |
| Tombol Details | (dalam baris) | — | ≥48px | — | Hanya bila `details` ada (PF-05) |
| `[PHOTO EXP-TALL]` | 62% | 13% | 32 × 83 | 461 × 672 | `MediaCard portrait` |
| `[PHOTO EXP-WIDE]` (opsional) | 5,5% | 54% | 52 × 42 | 750 × 340 | Strip jika ruang cukup |

**Transisi:** masuk T-SLIDE. Keluar Aperture ke Projects.

**Opsi B (video-literal, 11 foto)** hanya bila Anda menyetujui eksplisit dan
dicatat di DL. Default tetap **Opsi A**.

---

### Stage 05 — Projects (Template H — Poster)
┌──────────────────────────────────────────────────────────────┐
│ MASKANI 02 About 03 Experience … 07 Contact [CV]│
│ │
│ P-01 ┌────────────────────┐ │
│ │ │ │
│ SIDALEKAS │ │ │
│ │ [PROJECT IMAGE] │ │
│ Frontend Developer Intern │ 1.9:1 │ │
│ React · Tailwind · Axios · REST API │ radius-media │ │
│ │ │ │
│ SIDALEKAS is an application at │ │ │
│ Diskominfo Kabupaten Indramayu. └────────────────────┘ │
│ │
│ [Open report →] │
└──────────────────────────────────────────────────────────────┘

text

| Elemen | x | y | w × h | px | Catatan |
|---|---|---|---|---|---|
| Nomor `P-01` | 5,5% | 12% | auto | meta | `MonoTag` |
| Judul project (`h2`) | 5,5% | 18% | 38 × cap 12% | cap ~95 px | D2/D3 |
| Role + stack | 5,5% | 42% | 38 | meta | `MonoTag` + chip stack |
| Context short (BR-C6) | 5,5% | 52% | 38 × 12 | — | body |
| Tombol "Open report" | 5,5% | 76% | — | ≥48px | `Button primary` |
| `[PROJECT IMAGE]` | 46% | 12% | 48 × 56 | 691 × 454 | `MediaCard landscape` (≈1.9:1) |
| `[PROJECT SCREENSHOT]` (opsional) | 40% | 56% | 26 × 30 | 374 × 243 | Menimpa sudut kiri-bawah poster |

**Tanpa gambar:** judul membesar mengisi sisi kanan (poster tipografis) —
sudah diimplementasi dengan angka ghost.

**Halaman report** (`/projects/[slug]`): tetap scroll vertikal dua kolom;
tidak diubah.

---

### Stage 06 — Skills (Template D)
┌──────────────────────────────────────────────────────────────┐
│ MASKANI 02 About 03 Experience … 07 Contact [CV]│
│ │
│ SKILLS ┌────────────────────┐ │
│ ─────── │ │ │
│ │ │ │
│ IT Support QA and Testing │ [SKILLS CUTOUT] │ │
│ · Hardware … · Manual Testing │ 0.73:1 │ │
│ · Device … · Functional … │ radius-media │ │
│ · Hardware Maint. · UAT │ (pose berbeda │ │
│ · Technical Supt. · Bug Reporting │ dari Hero) │ │
│ · Retesting │ │ │
│ · Test Doc. │ │ │
│ │ │ │
│ Networking Frontend and Dev │ │ │
│ · Computer Net. · React.js │ │ │
│ · MikroTik · Tailwind CSS │ │ │
│ · Proxy · Laravel │ │ │
│ · DNS · PHP │ │ │
│ · REST API │ │ │
│ │ │ │
│ Tools and Documentation │ │ │
│ · Trello · Excel · Word · Tech Doc │ │ │
└──────────────────────────────────────────────────────────────┘

text

| Elemen | x | y | w × h | px | Catatan |
|---|---|---|---|---|---|
| Judul "Skills" (`h2`) | 6% | 16% | 28 × cap 7% | cap ~57 px | D2 |
| Kategori | 6% | 28% | 56 × 62 | 806 × 502 | **3 kolom** desktop; 5 grup jadi 3 + 2 |
| Label kategori | (per kolom) | — | — | meta | `MonoTag` uppercase |
| Item | (per kolom) | — | — | body | Daftar teks biasa; tanpa chip hover |
| Baris bukti | (bawah tiap kategori) | — | — | meta | `MonoTag text-text-3` |
| `[PHOTO SKILLS-CUTOUT]` | 67% | 20% | 33 × 80 | 475 × 648 | Pose kedua (beda dari Hero) |

**Tanpa cutout:** daftar membentang 3 kolom penuh.

**5 grup (Spec §2.4)** tetap dipertahankan — bukan 3 kategori.

---

### Stage 07 — Education (Template C)
┌──────────────────────────────────────────────────────────────┐
│ MASKANI 02 About 03 Experience … 07 Contact [CV]│
│ │
│ ┌──────────────────┐ E D U C A T I O N │
│ │ [PHOTO EDU-SMALL│ ┌──────────────────────────────────┐ │
│ │ 2:1 │ │ │ │
│ └──────────────────┘ │ [PHOTO EDU-LARGE] │ │
│ │ 7:5 │ │
│ D4 Software Eng. │ │ │
│ Politeknik Negeri │ │ │
│ Indramayu │ │ │
│ 2022 – 2026 · GPA … └──────────────────────────────────┘ │
│ │
│ CERTIFICATIONS │
│ · RH124 — Certificate of Attendance (May 2024) │
│ · Junior Network Administrator (Jun–Jul 2023) │
│ │
│ AFFILIATION │
│ · Head of Research and Technology Division, HMTI │
└──────────────────────────────────────────────────────────────┘

text

| Elemen | x | y | w × h | px | Catatan |
|---|---|---|---|---|---|
| Judul "Education" (`h2`) | 46% | 12% | 48 × cap 17% | cap ~140 px | D2; **kiri** (bukan rata kanan) |
| `[PHOTO EDU-SMALL]` | 5,5% | 12% | 37 × 32 | 533 × 259 | `MediaCard landscape` (2:1) |
| `[PHOTO EDU-LARGE]` | 50% | 36% | 44 × 57 | 634 × 462 | `MediaCard landscape` (7:5) |
| Blok: degree | 5,5% | 49% | 37 | — | Body |
| Blok: school + period + GPA | 5,5% | 57% | 37 | — | meta mono |
| Certifications (2) | 5,5% | 72% | 37 | — | 3 kelompok kecil berlabel mono |
| Affiliation | 5,5% | 86% | 37 | — | idem |

**Tanpa foto:** judul dan tiga kelompok teks membentang 2 kolom penuh.

---

### Stage 08 — Contact (Template A — bookend Hero)
┌──────────────────────────────────────────────────────────────┐
│ MASKANI 02 About 03 Experience … 07 Contact [CV]│
│ │
│ [● Open to work] ╎ │
│ ╎ │
│ C O N T A C T ╎ │
│ ╎ │
│ Open to IT support, QA and frontend roles. ╎ │
│ Email is the fastest way to reach me. ╎ │
│ ╎ │
│ [Copy email] [Open email] ╎ │
│ ╎ │
│ [LinkedIn] [Download CV] ╎ │
└──────────────────────────────────────────────────────────────┘

text

| Elemen | x | y | w × h | px | Catatan |
|---|---|---|---|---|---|
| Chip "Open to work" | 9% | 12% | auto | pil | Sama seperti Hero |
| Judul "Contact" (`h2`) | 9% | 20% | 60 × cap 19% | cap ~154 px | D2; menggemakan Hero |
| Lead (BR-C1) | 9% | 42% | 60 | lead | `text-lead` |
| Copy email (primer) | 9% | 52% | — | ≥48px | Magnetic (R3); status region persisten |
| Open email + LinkedIn + DL CV | 9% | 66% | — | ≥48px | Secondary |
| `[PORTRAIT CUTOUT]` reuse | 67% | 20% | 30 × 80 | 432 × 648 | **Dipakai ulang** dari Hero |
| Hairline vertikal kanan | 94% | 12% | 1px × 54% | — | Bookend motif |

**Transisi:** masuk T-SLIDE ("Landing"). Keluar Print ke Colophon.

---

### Stage 09 — Colophon (struk)

Tidak berubah dari spesifikasi R4: struk build di kiri-bawah; baris CI
ditambahkan setelah Build Receipt tersedia. Trace berakhir di node terminal.

---

## 4. Daftar Aset Final

### Foto personal (7 slot)

| # | Slot | Dipakai di | Rasio | Tampil @1440 | Sumber (2×) | Format | Prioritas |
|---|---|---|---|---|---|---|---|
| 1 | `[PORTRAIT CUTOUT]` | Hero + Contact | ≈ 0.56:1 | 432 × 770 | 1200 × 2000 | PNG/WebP alfa | **Wajib** |
| 2 | `[PHOTO ABOUT]` | About | ≈ 1.17:1 | 590 × 502 | 1600 × 1400 | WebP/JPG | **Wajib** |
| 3 | `[PHOTO EDU-LARGE]` | Education | ≈ 1.37:1 | 634 × 462 | 1680 × 1200 | WebP/JPG | Disarankan |
| 4 | `[PHOTO EDU-SMALL]` | Education | ≈ 2.06:1 | 533 × 259 | 1600 × 800 | WebP/JPG | Disarankan |
| 5 | `[PHOTO SKILLS-CUTOUT]` | Skills | ≈ 0.73:1 | 475 × 648 | 1300 × 1840 | PNG/WebP alfa | Opsional |
| 6 | `[PHOTO EXP-TALL]` | Experience | ≈ 0.69:1 | 461 × 672 | 1230 × 1770 | WebP/JPG | Disarankan |
| 7 | `[PHOTO EXP-WIDE]` | Experience | ≈ 2.2:1 | 749 × 340 | 2000 × 880 | WebP/JPG | Opsional |

**Total minimum:** 5 · **Default:** 7 · **Video-literal (Opsi B):** 11.

### Aset non-foto

| # | Aset | Sumber | Status |
|---|---|---|---|
| 8 | Screenshot SIDALEKAS (0–3 slot) | PF-07 | Menunggu aset; data pribadi **wajib disamarkan** |
| 9 | OG image 1200×630 | `next/og` | ✅ (build hijau) |
| 10 | Favicon monogram M | Desain R4 | NOT_STARTED |
| 11 | Grain tile | CSS `data:image/svg+xml` di `effects.css` | ✅ |

**Tidak dipakai:** ilustrasi, ikon software berwarna, daun, gelombang,
titik dekoratif, foto pihak ketiga.

### Aturan format

- AVIF utama, WebP cadangan; cutout **wajib** beralfa.
- Hapus EXIF (GPS, perangkat) sebelum unggah.
- Setiap foto < 300 KB (cutout besar boleh < 500 KB).
- `loading="lazy"` untuk foto stage 3 ke atas.
- `alt` wajib; salinan dekoratif `aria-hidden` / `alt=""`.
- Foto **milik Anda atau berlisensi**; tidak ada foto dari video.

---

## 5. Catatan Transisi & Tier

| Momen | Cinematic | Lite | Static |
|---|---|---|---|
| Hero masuk | Potret fade → judul outline → solid → caption → CTA (≤ 1,2 s) | Fade singkat + judul langsung solid | Komposisi akhir |
| Hero → About | T-SLIDE horizontal 0,8–1,0 s | Slide masuk sederhana | Tumpukan |
| About → Experience-title | T-RISE | Fade | Tumpukan |
| Experience-title → isi | T-SLIDE | Slide masuk | Tumpukan |
| Experience → Projects | Aperture + T-TITLE | Fade | Tumpukan |
| Projects → Skills | T-SLIDE ("Release") | Slide masuk | Tumpukan |
| Skills → Education | T-SLIDE | Slide masuk | Tumpukan |
| Education → Contact | T-SLIDE ("Landing") | Slide masuk | Tumpukan |
| Contact → Colophon | Print | Fade | Instan |

**Larangan (tetap):** tidak ada scroll-snap; tidak ada iframe; tidak ada
nav jitter; satu choreography Stage; satu ticker; hanya `transform` /
`opacity` / `clip-path` / variabel CSS yang dianimasikan; tidak ada
`opacity: 0` di CSS.

---

## 6. Checklist Pengerjaan (fase VA)

- [ ] **T-V-01** Catat register pengecualian Addendum §4 sebagai entri DL
- [ ] **T-V-02** Token `radius-media`, `shadow-media`, `stroke-outline`,
  `dur-stage`, `ease-stage`
- [ ] **T-V-03** `MediaCard` menggantikan `Frame`/`MediaFrame` (tanpa siku)
- [ ] **T-V-04** Hero Static: 3 lapis, satu `h1`, outline `aria-hidden`
- [ ] **T-V-15** Konstanta peta layout (persentase) sebagai token
- [ ] **T-V-16** Layout Hero sesuai Stage 01
- [ ] **T-V-17** Layout About, Education, Skills (Template B, C, D)
- [ ] **T-V-18** Layout Experience Opsi A + kartu judul
- [ ] **T-V-19** Layout Projects (poster + halaman report dua kolom)
- [ ] **T-V-20** Layout Contact (potret reuse)
- [ ] **T-V-21** Layout mobile (tumpukan)
- [ ] **T-V-22** Fokus/titik kunci foto (`object-position` per slot)
- [ ] **E2E-V08…V11** Spec posisi/hero/projects/no-foto
- [ ] **G-VA** Gerbang visual alignment

---

## 7. Yang Masih Terbuka

| ID | Keputusan | Default |
|---|---|---|
| L-1 | Experience: Opsi A atau Opsi B | **Opsi A** |
| L-3 | Contact memakai ulang potret Hero | **Ya** |
| L-4 | Pose kedua (Skills cutout) tersedia | Tanpa cutout → 3 kolom |
| S-1 | `[HERO CAPTION]` diisi | **Tidak diisi** |
| S-2 | `[CHAPTER TAGLINE]` diisi | **Tidak diisi** |
| S-3 | Slot screenshot SIDALEKAS (0–3) | 0 dulu |

---

## 8. Yang TIDAK Berubah

Semua keputusan terkunci tetap berlaku:

- Font: **Bricolage Grotesque + Geist + Geist Mono**
- Warna: `--void #0A0A0B`, `--text-1 #F4F4F5`, `--accent #8AA4FF`
- Urutan section: Hero · About · Experience · Projects · Skills ·
  Education · Contact · Colophon
- Konten: dari CV + persetujuan pemilik
- Email tidak ada di HTML server
- CV publik tanpa telepon
- Radius UI (tombol/tag) tetap 2 px / 4 px; hanya kartu media yang besar
- Trace: vertikal di Lite/Static & report; horizontal di Cinematic Stage
- Tier: Static → Lite → Cinematic
- A11y: axe 0 wajib di setiap gerbang
- Performa: anggaran JS dipantau; LCP nama Hero < 2,0 s

---

**Akhir dokumen.**
