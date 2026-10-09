# MASKANI — Test Plan

Versi 1.0 · 9 Oktober 2026 · R1 hardening

## 1. Ruang lingkup

Situs portofolio statis MASKANI. Tanpa backend, tanpa form, tanpa analytics.
Dua rute: `/` (home, delapan section) dan `/projects/[slug]` (report kanonik
SIDALEKAS). Fokus pengujian: aksesibilitas WCAG 2.2 AA, perilaku tanpa JS,
tier parity (Static/Lite/Cinematic), kontras token, keamanan header, SEO
teknis, privasi (tanpa telepon/alamat/email di HTML server).

## 2. Strategi

| Lapisan | Mekanisme | Frekuensi |
| --- | --- | --- |
| E2E | Playwright, satu spec per fitur | Setiap PR (CI) |
| Aksesibilitas | axe-core di dalam spec E2E + uji manual | Setiap PR + manual di R1 |
| Performa | Lighthouse CI, median 3 run | Setiap PR (CI) |
| Konten | Skrip `scripts/content-guard.mjs` (CG-01..CG-14) | Setiap PR (lint) |
| Guard self-test | `node --test tests/content-guard.test.mjs` | Setiap PR (CI) |
| Visual regression | Minimal (3–5 baseline), opsional | R4 |

Matriks project Playwright:

- `chromium-cinematic` — Desktop (1440×900), dark, hover + pointer fine.
- `chromium-lite` — Pixel 7 (mobile), dark, touch.
- `chromium-static` — Desktop, dark, `prefers-reduced-motion: reduce`.
- `webkit-smoke` — Desktop Safari, jalur kritis saja.

Satu retry Playwright di CI. Lulus-hanya-saat-retry **dilaporkan** di log.

## 3. Kasus uji

| ID | Area | Langkah | Hasil diharapkan | Prioritas | Status |
| --- | --- | --- | --- | --- | --- |
| TC-001 | Skip link | Tab pertama dari awal halaman | Fokus ke "Skip to content" | Tinggi | Lulus |
| TC-002 | Navigasi section | Klik tautan nav `#about` | Scroll + fokus ke `#about-heading` | Tinggi | Lulus |
| TC-003 | Index mobile | Buka dialog Index, pilih section | Dialog tutup, fokus di heading | Tinggi | Lulus |
| TC-004 | Focus trap | Buka dialog Index, tekan Tab berulang | Fokus tetap di dalam dialog | Tinggi | Lulus |
| TC-005 | Escape | Buka dialog, tekan Escape | Dialog tutup, fokus kembali ke pemicu | Tinggi | Lulus |
| TC-010 | Copy Email | Klik Copy Email (izin diberikan) | Label → "Email copied", status region mengumumkan, fokus tidak pindah | Tinggi | Lulus |
| TC-011 | Copy Email (gagal) | Klik dengan clipboard ditolak | Pesan gagal, alamat tampil sebagai teks, Open Email disorot | Tinggi | Belum diotomasi |
| TC-012 | Open Email | Klik Open Email | `mailto:` terakit di client, membuka aplikasi mail | Sedang | Manual |
| TC-020 | Reduced motion | `prefers-reduced-motion: reduce` | GSAP tidak dimuat, konten terlihat penuh | Tinggi | Lulus |
| TC-021 | Reduced motion (live) | Ubah preferensi saat halaman aktif | Revert + remount tanpa reload | Sedang | Manual |
| TC-030 | Project steps | Buka `/projects/sidalekas` | Hanya langkah berisi dirender; Problem/Approach/Verification/Result tidak muncul | Tinggi | Lulus |
| TC-031 | Project report URL | Salin URL `/projects/sidalekas`, buka di tab baru | Halaman termuat penuh, `<title>` benar | Sedang | Lulus |
| TC-032 | Redirect | Buka `/projects` | Dialihkan ke `/#projects` | Sedang | Lulus |
| TC-040 | Tier parity | Emulasi tiga tier | `data-tier` = static/lite/cinematic, perilaku sesuai | Sedang | Lulus |
| TC-050 | Tanpa JS | Nonaktifkan JS | Seluruh teks section terlihat, h1 = MASKANI | Tinggi | Lulus |
| TC-051 | Tanpa JS (email) | Nonaktifkan JS | Tidak ada email utuh di HTML; `noscript` menampilkan bentuk terbaca-manusia | Tinggi | Lulus |
| TC-060 | Kontras | axe `color-contrast` di `/` dan report | 0 pelanggaran | Tinggi | Lulus |
| TC-061 | Axe lengkap | axe tag WCAG 2.0/2.1/2.2 AA di `/` dan report | 0 pelanggaran | Tinggi | Lulus |
| TC-070 | Header keamanan | `curl -I /` | X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options | Sedang | Manual (R1) |
| TC-071 | 404 | GET `/halaman-tidak-ada` | HTTP 404, halaman "Page not found" | Sedang | Lulus |
| TC-080 | Guard konten | `npm run test:guard` | 5/5 lulus (CG-01, CG-07, CG-10, CG-11, baseline) | Tinggi | Lulus |
| TC-081 | Guard bersih | `npm run guard` pada konten nyata | Lulus dengan warning CG-09 (DL-007) | Tinggi | Lulus |
| TC-090 | Reflow 320px | Viewport 320px, buka `/` | Tidak ada overflow horizontal | Tinggi | Lulus |
| TC-091 | Zoom 200% | Browser zoom 200% | Tidak ada teks terpotong | Tinggi | Manual (R1) |
| TC-092 | Zoom 400% | Browser zoom 400% (320px setara) | Tidak ada teks terpotong | Tinggi | Manual (R1) |
| TC-100 | CTA target | Ukur tinggi tombol Download CV | ≥48px | Tinggi | Lulus |
| TC-110 | Font budget | Ukur woff2 yang benar-benar terunduh | ≤150 KB | Sedang | Lulus (126 KB) |
| TC-120 | Baseline JS | Ukur JS rute awal (gzip) | ≤150 KB | Sedang | Belum (182 KB, lihat DL-012) |
| TC-130 | Lighthouse | Lighthouse CI desktop + mobile | a11y 100, SEO 100, perf ≥95 | Tinggi | Belum (diaktifkan R1b) |
| TC-140 | Privasi | grep HTML server untuk pola telepon | Tidak ada | Tinggi | Lulus |

## 4. Keterlacakan

Lihat `docs/traceability.md`. Setiap kasus uji menunjuk ke ID E2E (§10.2 Build
Reference) dan gerbang (G-1, G-3, G-R1, G-R2, G-R3, G-R4).

## 5. Kombinasi screen reader (manual)

Dijalankan saat R1-01 (audit manual), dicatat hasilnya di sini.

| Kombinasi | Versi | Status | Catatan |
| --- | --- | --- | --- |
| NVDA + Firefox | NVDA 2024+, Firefox 130+ (Windows) | Belum | — |
| VoiceOver + Safari | macOS 14+, Safari 17+ | Belum | — |

Yang diperiksa:

1. Skip link diumumkan sebagai fokus pertama.
2. Landmark header/main/footer terbaca.
3. Dialog Index: fokus masuk, `role=dialog`, Escape menutup.
4. Status region Copy Email mengumumkan "Email copied".
5. Judul section dibacakan saat fokus dipindahkan dari nav.

## 6. Bug report — contoh

**Aturan kejujuran (F-08):** contoh di bawah **harus berasal dari bug nyata**.
Selama belum ada temuan, blok ini kosong dan tidak diisi dengan bug rekaan.

**BUG-001** · Placeholder (belum ada temuan)
