# MASKANI — Decision Log

Format entri (§15.1 Build Reference):
`DL-nnn · tanggal · ID terkait · keputusan · alasan · dampak · persetujuan`

Status: `Diusulkan` · `Disetujui` · `Ditolak` · `Menunggu`

---

## DL-001 · 2026-10-05 · P0-01 Version Pin

**Keputusan.** Versi dependensi dikunci sebagai berikut:

| Paket | Versi |
| --- | --- |
| Node.js (lokal) | 20.19.0 |
| Node.js (CI + Vercel) | 24.x (dikunci lewat `engines`) |
| npm | 11.6.2 |
| next | 16.3.8 |
| react / react-dom | 19.2.8 |
| tailwindcss | 4.3.3 |
| @tailwindcss/postcss | 4.3.3 |
| gsap | 3.15.0 |
| lenis | 1.3.26 |
| @playwright/test | 1.63.0 |
| @axe-core/playwright | 4.13.0 |
| @lhci/cli | 0.15.1 |

**Catatan lisensi.** GSAP 3.15 — plugin DrawSVG dan MotionPath kini termasuk
dalam paket GSAP bebas (perlu konfirmasi resmi saat menulis Trace di R2, PF-10).

**Dampak.** Semua versi naik hanya lewat Decision Log baru.

---

## DL-002 · 2026-10-05 · §4.2 Registri keputusan terkunci

**Keputusan.** K-01 s.d. K-19 dari §4.2 Build Reference tercatat dan berlaku
di seluruh rilis. Termasuk: Next.js 16 App Router, bahasa English, hanya mode
gelap, tanpa backend, K-METRIC dihapus, SIDALEKAS satu-satunya project,
produksi hanya dari CI.

**Status.** Disetujui (berasal dari persetujuan pemilik/spesifikasi).

---

## DL-003 · 2026-10-05 · BR-01 s.d. BR-18 interpretasi

**Keputusan.** Interpretasi dokumen Build Reference atas §4.3 (BR-01…BR-18)
berlaku sebagai default kerja sampai pemilik menanggapi PF-13.

**Status.** Diusulkan (menunggu PF-13).

---

## DL-004 · 2026-10-05 · Validasi kontras token (P0-03)

**Keputusan.** Token warna §4.1 divalidasi dengan alat, bukan dihitung manual.

**Metode.** `tests/e2e/contrast.spec.ts` — axe-core `color-contrast` tag
`wcag2aa` + `wcag21aa` + `wcag22aa`, Chromium dark mode.

**Hasil.** 0 pelanggaran pada shell kosong (setelah `base.css` dibungkus
`@layer base` dan Playwright dikonfigurasi `colorScheme: "dark"`).

**Pelanggaran template.** Sebelum perbaikan, `h1`, `code`, `.gap-2`, `.border`
template Next.js dilaporkan gagal karena utility template kalah cascade
terhadap aturan unlayered. Diperbaiki dengan `@layer base` dan konfigurasi
Playwright `colorScheme: "dark"`.

**Dampak.** Token aman untuk dipakai sebagai satu-satunya sumber warna.

---

## DL-005 · 2026-10-05 · P0-07 / F-09

**Keputusan.** Baseline performa shell kosong dicatat sebagai anggaran
terukur, menggantikan hipotesis §13 Final Specification.

**Hasil pengukuran (template Next.js, sebelum P1).**

- Lighthouse desktop (3 run, median):
  - Performance: 100
  - Accessibility: 95 (di bawah 100 — pelanggaran template, akan hilang di P1)
  - SEO: 100
- JS rute awal (gzip): 136,1 KB
- CSS rute awal (gzip): 5,0 KB
- JS + CSS (gzip): 141,0 KB
- Font woff2 yang terunduh: 126,2 KB (3 file) — dari `tests/e2e/font-budget.spec.ts`
- Jumlah request pada shell: 13

**Catatan.** Halaman masih template Next.js. Anggaran §13 (JS rute awal
≈150 KB gzip) masih memadai, tapi margin ~14 KB. Setiap penambahan JS di
P1–R3 diukur ulang.

**Dampak.** Baseline dipakai sebagai acuan untuk setiap rilis berikutnya.

---

## DL-006 · 2026-10-05 · R2 Kosakata atribut `data-*` (U-01)

**Keputusan.** Kosakata `data-*` (U-01) dan penggunaan DrawSVG + MotionPath
(U-02) belum dikonfirmasi.

**Status.** Menunggu (PF-10; wajib sebelum R2 dimulai).

---

## DL-007 · 2026-10-05 · CG-09 / PF-03 exception

**Keputusan.** CG-09 (CV publik wajib ada) diabaikan sementara lewat
`scripts/content-guard-exceptions.json`, berlaku sampai gerbang **G-R1**.

**Alasan.** PF-03 (ekspor dan unggah `Maskani-CV.pdf` tanpa nomor telepon)
adalah tindakan di sisi pemilik dan belum diselesaikan. PF-03 memblokir
G-R1, bukan G-0.

**Dampak.** Rilis R1 diblokir sampai exception dicabut. Guard melaporkan
CG-09 sebagai warning, bukan error.

**Kadaluarsa.** Gerbang G-R1.

---

## DL-008 · 2026-10-05 · P0-06 Vercel preview-only

**Keputusan.** Vercel dihubungkan ke GitHub sejak P0. Production Branch
diubah dari `main` menjadi `production`. Push ke `main` menghasilkan
**Preview Deploy** saja; produksi hanya bisa terpicu dari branch
`production` (dan idealnya dari pipeline setelah G-R1).

**Alasan.** Menegakkan CI-02 dan F-12 sejak awal, sebelum ada konten
produksi yang perlu dilindungi. Menunda setup berisiko auto-deploy
produksi aktif diam-diam saat repo sudah ramai.

**Dampak.** Tidak ada deploy produksi otomatis dari `main`. Deploy
produksi final akan dilakukan lewat pipeline saat G-R1 hijau.

**Verifikasi.** Push dummy `7b1f8a9` ke `main` menghasilkan Preview
`262LC4FEB`, Production tetap di `e3e5515`.

**Status.** Disetujui.

---

## DL-009 · 2026-10-05 · Line ending dan npm optional deps

**Keputusan.** Dua penyesuaian build sistem:

1. `.gitattributes` — repo menyimpan LF; checkout Windows boleh CRLF.
2. `.npmrc` — `include=optional` agar lockfile merekam `@emnapi/core`
   dan `@emnapi/runtime` (Tailwind v4 native fallback untuk Linux CI).
3. `.github/workflows/ci.yml` — `include-hidden-files: true` pada
   upload artifact, karena `actions/upload-artifact@v4` default menolak
   folder diawali titik (`.next`).
4. Node.js dipin ke 24 di CI dan Vercel lewat `engines` di `package.json`.

**Alasan.** Menutup tiga kegagalan CI nyata (EUSAGE lockfile, artifact
kosong, mismatch Node version).

**Dampak.** CI hijau tiga job. Lokal bisa Node 20.19; tidak dipaksa.

**Status.** Disetujui.
## DL-010 · 2026-10-05 · PF-02 exception

**Keputusan.** PF-02 (perbaiki typo CV) ditunda ke G-R1, tidak memblokir G-0.

**Alasan.** Typo yang dimaksud ("Okobert 2025", "Juil 2024", spasi "PHP, Trello"
dan "DNS") hanya ada di berkas CV sumber. Konten di `src/content/*.ts`
ditranskrip ulang dan sudah bersih (guard CG-01…CG-14 hijau). PF-02 menjadi
wajib sebelum PDF CV diekspor dan diunggah (PF-03), yang menandai G-R1.

**Dampak.** G-0 lulus dengan catatan. Rilis R1 terblokir sampai PF-02 dan
PF-03 selesai.

**Kadaluarsa.** Gerbang G-R1.

**Status.** Disetujui (default kerja, dapat diubah lewat F-14).
## DL-011 · 2026-10-05 · PF-13 default

**Keputusan.** BR-01…BR-18 (interpretasi Build Reference §4.3) berlaku sebagai
default kerja. Pemilik dapat mengajukan perubahan kapan saja lewat F-14.

**Alasan.** PF-13 tercatat "Terbuka" di §4.1 Build Reference, dengan catatan
"default kerja berlaku sampai ada tanggapan". P1 tidak dapat dimulai tanpa
menetapkan default ini.

**Dampak.** P1 dapat dimulai. Perubahan di masa depan = entri DL baru.

**Status.** Disetujui (default kerja).

## DL-012 · 2026-10-06 · P3 baseline update

**Keputusan.** Baseline performa diukur ulang setelah P3. JS rute awal naik dari
136,1 KB → 182,2 KB gzip (+46,1 KB); CSS 5,0 KB → 6,9 KB.

**Sumber kenaikan (estimasi).**

- `next/og` (OG image) — kemungkinan sebagian ikut di shared chunk.
- `next/image` runtime (Projects poster + MediaFrame).
- `ReportStepper.client` (IntersectionObserver).
- Rute `/projects/[slug]` + halaman `/`.

**Status terhadap anggaran.** Anggaran §13 Final Spec: JS rute awal ≈150 KB gzip.
Baseline sekarang **32 KB di atas anggaran**. Margin anggaran habis.

**Keputusan sementara.** Tidak ada optimasi agresif di P3. Angka dicatat dan
dibawa ke R4 (P9 Performance). Prioritas: pastikan kenaikan tidak berasal dari
kode yang tidak perlu di rute awal. `next/og` seharusnya hanya server-side.

**Tindak lanjut wajib.**

- R4-04 P9: profiling per-rute. Target: JS rute awal kembali ≤150 KB, atau
  perbarui anggaran dengan entri DL baru yang disetujui.
- Sebelum G-R1: konfirmasi bahwa GSAP (belum aktif) tidak akan menaikkan angka
  baseline ini saat masuk di R2.

**Dampak.** Setiap rilis berikutnya diukur ulang terhadap baseline ini.
Kenaikan >5 KB harus punya alasan eksplisit.

**Update 2026-10-09.** Exception dicabut. `public/cv/Maskani-CV.pdf` (331 KB,
tanpa nomor telepon dan alamat rumah) sudah tersedia. CG-09 kini ditegakkan
penuh; `scripts/content-guard-exceptions.json` kosong.
### AUDIT-DL-013 · 10 Oktober 2026 · V-1 (Media visual)

**Keputusan.** Semua foto memakai `MediaCard` bersudut membulat besar
(`radius-media`), bayangan lembut **statis**; potret cutout di Hero.
Radius UI (tombol/tag) tetap 2px/4px.

**Alasan.** Keputusan pemilik 10 Okt 2026 ("semua foto seperti video").
Menggantikan aturan radius tajam (K-10) untuk media saja.

**Status.** DISETUJUI PEMILIK 10 Okt 2026.

---

### AUDIT-DL-014 · 10 Oktober 2026 · V-2 (Transisi Stage)

**Keputusan.** Transisi antar section memakai sistem Stage: T-SLIDE
horizontal 0,8–1,0 s (Cinematic), T-RISE vertikal, T-TITLE kartu judul.
Outline → solid pada judul Hero dan heading chapter.

**Alasan.** Keputusan pemilik ("efek dan transisinya seperti video").

**Status.** DISETUJUI PEMILIK 10 Okt 2026.

---

### AUDIT-DL-015 · 10 Oktober 2026 · Pengecualian Anti-Direction

**Keputusan.** Anti-Direction #9 (scroll-jacking) dan #10 (galeri
horizontal) **dikecualikan** khusus untuk transisi Stage, dengan batasan §3.6
Addendum (fallback reflow, tidak ada paging, nav stabil).

**Alasan.** Efek visual yang diinginkan pemilik memerlukan pin horizontal.

**Status.** DISETUJUI PEMILIK 10 Okt 2026.

---

### AUDIT-DL-016 · 10 Oktober 2026 · Trace Horizontal

**Keputusan.** Trace berorientasi horizontal di mode Stage (Cinematic), di
tepi bawah layar, sebagai garis progres. Di Lite/Static dan halaman report
tetap vertikal.

**Status.** OPEN (menunggu UI Design).

---

### AUDIT-DL-017 · 10 Oktober 2026 · LCP Hero

**Keputusan.** Nama MASKANI tetap LCP kandidat utama. Potret cutout dimuat
dengan `priority` tapi tidak memblokir teks. Anggaran gambar potret
ditetapkan di T-V-06.

**Status.** OPEN (menunggu T-V-06).

---

### AUDIT-DL-018 · 14 Oktober 2026 · Experience Opsi A/B

**Keputusan.** Default Experience = **Opsi A** (satu stage, tiga peran).
Opsi B (video-literal, 11 foto, tiga stage terpisah) hanya bila pemilik
menyetujui eksplisit.

**Status.** Default disetujui; Opsi B menunggu keputusan pemilik.

---

### AUDIT-DL-019 · 14 Oktober 2026 · Skills layout

**Keputusan.** Skills tetap 5 kategori (Spec §2.4), ditata sebagai grid
3 kolom (desktop) — bukan 3 kategori seperti storyboard. Di mobile 1 kolom.

**Status.** DISETUJUI (inferens dari Spec §2.4 yang tidak berubah).

---

### AUDIT-DL-020 · 14 Oktober 2026 · Contact reuse potret Hero

**Keputusan.** Contact memakai ulang `[PORTRAIT CUTOUT]` dari Hero
(bookend). Tidak butuh foto baru.

**Status.** DISETUJUI.

---

## DL-014 · 14 Oktober 2026 · Register pengecualian Addendum + keputusan VA

**Keputusan.** Mengadopsi `FINAL-VISUAL-REFERENCE-ADDENDUM.md` (10 Okt 2026)
sebagai keputusan visual yang mengikat, dengan **pengecualian terdaftar**
terhadap beberapa aturan lama. Semua keputusan terkunci lain (font, warna,
urutan section, konten) **tidak berubah**.

**Sub-keputusan:**

### DL-014a · V-1 — Media visual

Semua foto memakai `MediaCard` bersudut membulat besar
(`--radius-media: clamp(16px, 2.4vw, 32px)`), bayangan lembut **statis**
(`--shadow-media`). Potret cutout di Hero. Radius UI (tombol, tag, kontrol)
**tetap** 2px / 4px.

- Menggantikan: radius tajam untuk media (K-10 / Final CD §6).
- Menggantikan: "tanpa drop shadow besar" (Final CD §3.5) — menjadi
  bayangan lembut **statis** (tidak dianimasikan).
- Menggantikan: `Frame` / `MediaFrame` dengan siku sudut → `MediaCard`
  tanpa siku.
- Status: **DISETUJUI PEMILIK 10 Okt 2026.**

### DL-014b · V-2 — Transisi Stage

Transisi antar-section memakai sistem Stage:

- **T-SLIDE** — horizontal 0,8–1,0 s (Cinematic). Konten keluar kiri,
  masuk kanan. Foto tiba lebih dulu, heading menyusul, teks terakhir.
- **T-RISE** — scroll vertikal biasa.
- **T-TITLE** — kartu judul bab (Experience, Projects).
- **Outline → solid** pada judul Hero dan heading chapter. Outline awal
  adalah **teks terlihat** (bukan `opacity: 0`).
- **Garis progres** di tepi layar (mode Stage Cinematic).

- Batasan wajib: semua isi tetap di DOM; Cinematic saja yang pakai
  pin/scrub; Lite disederhanakan; Static tumpukan vertikal; fallback
  reflow 320 px / zoom 400%; nav stabil tanpa jitter; satu choreography;
  satu ticker.
- Status: **DISETUJUI PEMILIK 10 Okt 2026.**

### DL-014c · Pengecualian Anti-Direction

Anti-Direction #9 (scroll-jacking), #10 (galeri horizontal), §21 REMOVE pin
Experience, dan Dev Architecture §22 **dikecualikan** khusus untuk transisi
Stage, dengan batasan di DL-014b.

- Status: **DISETUJUI PEMILIK 10 Okt 2026.**

### DL-014d · Trace horizontal (mode Stage)

Trace berorientasi **horizontal** di tepi bawah layar pada mode Stage
(Cinematic), berfungsi sebagai garis progres. Di Lite/Static dan di halaman
report tetap **vertikal** (gutter) seperti rancangan semula.

- Status: **OPEN** — menunggu UI Design.

### DL-014e · Hero potret + LCP

Hero menambahkan `[PORTRAIT CUTOUT]`. Nama MASKANI tetap kandidat LCP
utama (terlihat sejak first paint). Potret dimuat dengan `priority` tapi
tidak memblokir teks. Anggaran gambar potret ditetapkan di T-V-06.

- Status: **OPEN** — menunggu T-V-06.

### DL-014f · Experience Opsi A vs Opsi B

**Default = Opsi A** (satu stage memuat tiga peran, ramah recruiter).
Opsi B (video-literal, 11 foto, tiga stage terpisah) hanya diaktifkan bila
pemilik menyetujui eksplisit.

- Status: Default disetujui; Opsi B menunggu keputusan pemilik.

### DL-014g · Contact memakai ulang potret Hero

Contact memakai ulang `[PORTRAIT CUTOUT]` dari Hero (bookend). Tidak butuh
foto baru.

- Status: **DISETUJUI** (inferens dari Addendum §3.7).

### DL-014h · Skills layout

Skills tetap **5 kategori** (Spec §2.4), ditata sebagai grid **3 kolom**
desktop (bukan 3 kategori). Di mobile 1 kolom.

- Status: **DISETUJUI** (inferens dari Spec §2.2 yang tidak berubah).

**Dampak.**

- Fase **VA (Visual Alignment)** ditambahkan ke Roadmap antara R1e dan R2.
- Gerbang baru **G-VA** dengan 18 butir.
- Token baru: `--radius-media`, `--shadow-media`, `--stroke-outline`,
  `--dur-stage`, `--ease-stage`, `--progress-line`.
- Komponen baru: `MediaCard`, `StageShell`, `systems/stage`.
- Komponen dihapus: `Frame`, `MediaFrame`.
- Deploy produksi pertama **direkomendasikan ditunda** sampai T-V-02 s.d.
  T-V-06 dan T-V-15 s.d. T-V-19 selesai (Addendum §5.3). Keputusan akhir
  pada pemilik.

**Sumber bukti.**

- `FINAL-VISUAL-REFERENCE-ADDENDUM.md` (10 Okt 2026).
- `LAYOUT-AND-PHOTO-PLACEMENT.md` (10 Okt 2026).
- `MASKANI_STORYBOARD.md` (14 Okt 2026).
- Keputusan pemilik 10 Okt 2026: "Semua foto seperti video, efek dan
  transisinya seperti video. Yang lain menyesuaikan dengan DeepSeek."

**Status.** DISETUJUI PEMILIK 10 Okt 2026 untuk V-1, V-2, V-3.
Sub-keputusan DL-014d dan DL-014e berstatus OPEN.