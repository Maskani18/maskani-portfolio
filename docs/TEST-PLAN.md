# MASKANI — Test Plan

Versi 0.1 · 5 Oktober 2026 · Kerangka (diperdalam per rilis)

## 1. Ruang lingkup

Situs portofolio statis MASKANI. Tanpa backend, tanpa form, tanpa analytics.
Fokus pengujian: aksesibilitas (WCAG 2.2 AA), perilaku tanpa JS, tier parity,
kontras token, keamanan header, SEO teknis, dan privasi.

## 2. Strategi

| Lapisan | Mekanisme |
| --- | --- |
| Unit / komponen | Tidak ada di v1 (tanpa logika bisnis) |
| E2E | Playwright, satu spec per fitur |
| Aksesibilitas | axe-core di dalam spec E2E + uji manual |
| Performa | Lighthouse CI, median 3 run |
| Konten | Skrip `scripts/content-guard.mjs` (CG-01..CG-14) |
| Visual regression | Minimal (R4), opsional |

Matriks: **Chromium** untuk Desktop (Cinematic), Mobile (Lite), Reduced Motion
(Static); **WebKit** untuk smoke (home, Copy Email, report). Satu retry
Playwright; lulus-hanya-saat-retry dilaporkan.

## 3. Kasus uji

| ID | Area | Langkah | Hasil diharapkan | Prioritas | Status |
| --- | --- | --- | --- | --- | --- |
| TC-001 | Skip link | Tab pertama dari awal halaman | Fokus ke "Skip to content" | Tinggi | Belum |
| TC-010 | Copy Email | Klik Copy Email dengan clipboard diizinkan | Label berubah, status region (polite) mengumumkan, fokus tidak berpindah | Tinggi | Belum |
| TC-011 | Copy Email (gagal) | Klik dengan clipboard ditolak | Pesan gagal, alamat tampil sebagai teks, Open Email disorot | Tinggi | Belum |
| TC-020 | Reduced motion | Aktifkan `prefers-reduced-motion: reduce` | GSAP tidak dimuat; konten terlihat penuh | Tinggi | Belum |
| TC-030 | Project steps | Buka `/projects/sidalekas` (Problem `null`) | Tidak ada heading, node, atau teks cadangan untuk Problem | Tinggi | Belum |
| TC-040 | Tier parity | Emulasi tiga kondisi (Static/Lite/Cinematic) | Atribut `data-tier` dan perilaku sesuai | Sedang | Belum |
| TC-050 | Tanpa JS | Nonaktifkan JS | Seluruh teks section terlihat | Tinggi | Belum |
| TC-060 | Kontras | Jalankan axe `color-contrast` di seluruh rute | 0 pelanggaran | Tinggi | Sebagian (shell kosong lulus) |
| TC-070 | Header keamanan | `curl -I /` | 4 header muncul | Sedang | Lulus |
| TC-080 | Guard konten | `npm run test:guard` | 5/5 lulus | Tinggi | Lulus |

## 4. Keterlacakan

Lihat `docs/traceability.md`. Setiap kasus uji menunjuk ke ID E2E dan gerbang.

## 5. Kombinasi screen reader

Diisi saat R1-01. Rencana: NVDA + Firefox (Windows), VoiceOver + Safari (macOS).

## 6. Contoh bug report

**Aturan kejujuran (F-08):** contoh di bawah harus berasal dari bug **nyata**.
Selama belum ada, biarkan kosong. Jangan menyajikan bug rekaan sebagai temuan.
