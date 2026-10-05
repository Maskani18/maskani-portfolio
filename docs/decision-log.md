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