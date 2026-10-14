# MASKANI — Architecture

**Status dokumen:** aktif · 14 Oktober 2026
**Basis:** Spec v2 §11 + Build Reference §8 + `FINAL-VISUAL-REFERENCE-ADDENDUM.md`
(10 Okt 2026) + `MASKANI_STORYBOARD.md`.
**Perubahan v2:** Menambahkan sistem Stage, `MediaCard`, `StageShell`, dan
token VA.

---

## Daftar Isi

1. [Prinsip Arsitektur](#1-prinsip-arsitektur)
2. [Stack Final](#2-stack-final)
3. [Struktur Folder](#3-struktur-folder)
4. [Arah Impor (Satu Arah)](#4-arah-impor-satu-arah)
5. [Routing](#5-routing)
6. [Rendering Strategy](#6-rendering-strategy)
7. [Tier Sistem](#7-tier-sistem)
8. [Sistem Konten](#8-sistem-konten)
9. [Komponen Utama](#9-komponen-utama)
10. [Alur Data](#10-alur-data)
11. [Motion Runtime](#11-motion-runtime)
12. [Styling & Token](#12-styling--token)
13. [Konfigurasi Root](#13-konfigurasi-root)

---

## 1. Prinsip Arsitektur

- **Server-first.** Server Component default. Client hanya bila butuh state
  browser, event, pointer, scroll, clipboard, media query, atau animation
  engine.
- **Satu arah impor** (ditegakkan ESLint, Build Reference §11.1).
- **Konten di `src/content/`.** Tidak ada teks portofolio di komponen (F-17).
- **Satu manifest section** (`src/content/sections.ts`) menurunkan nav, Trace,
  dan SectionShell (F-18).
- **Token sebagai satu-satunya sumber nilai** (F-04).
- **Tanpa backend, tanpa analytics, tanpa cookie banner.**
- **Tier-first, static-first.** Semua fitur VA (Stage, MediaCard, potret)
  dibangun Static dulu, lalu Lite, lalu Cinematic.

---

## 2. Stack Final

| Layer | Teknologi | Versi |
|---|---|---|
| Framework | Next.js App Router | 16.3.8 |
| Bahasa | TypeScript (strict + noUncheckedIndexedAccess + exactOptionalPropertyTypes) | 5 |
| Styling | Tailwind CSS v4 (CSS-first config) | 4.3.3 |
| Animasi | GSAP + ScrollTrigger | 3.15.0 |
| Smooth scroll | Lenis | 1.3.26 (aktif di R2) |
| Test | Playwright + axe-core | 1.63 / 4.13 |
| Performa | Lighthouse CI | 0.15 |
| Deploy | Vercel + GitHub Actions | — |

**Tidak ada library baru** untuk fase VA. GSAP + ScrollTrigger (pin/scrub)
sudah cukup. Plugin GSAP Observer **belum disetujui**.

---

## 3. Struktur Folder
src/
├─ app/ Routing & metadata
│ ├─ layout.tsx page.tsx not-found.tsx globals.css
│ ├─ robots.ts sitemap.ts opengraph-image.tsx
│ └─ projects/page.tsx, projects/[slug]/page.tsx
│
├─ sections/ Satu section = satu folder
│ ├─ hero/
│ │ ├─ Hero.tsx
│ │ ├─ HeroPortrait.tsx ← BARU (potret cutout)
│ │ └─ HeroMotion.client.tsx ← R2
│ ├─ about/ experience/ projects/
│ ├─ skills/ education/ contact/ colophon/
│
├─ systems/ Engine lintas-section
│ ├─ stage/ ← BARU (mode Stage Cinematic)
│ │ ├─ engine.ts (pin/scrub, satu choreography)
│ │ ├─ choreography.ts (T-SLIDE, T-RISE, T-TITLE)
│ │ ├─ contract.ts (atribut data-stage, data-stage-index)
│ │ └─ index.ts
│ ├─ trace/ (R2)
│ ├─ cursor/ (R3)
│ └─ report/ (R4)
│
├─ components/ Primitif tanpa pengetahuan section
│ ├─ media/
│ │ └─ MediaCard.tsx ← MENGGANTIKAN Frame + MediaFrame
│ ├─ layout/
│ │ ├─ SkipLink.tsx SiteNav.client.tsx SectionShell.tsx
│ │ ├─ StageShell.tsx ← BARU (wrapper stage)
│ │ ├─ Effects.client.tsx ContactActions.client.tsx
│ ├─ ui/
│ │ └─ Button.tsx Heading.tsx Icon.tsx LiveRegion.tsx
│ │ MonoTag.tsx ReportStepper.client.tsx
│
├─ motion/
│ ├─ primitives/
│ │ ├─ reveal.ts (tidak berubah)
│ │ ├─ stage-transition.ts ← R2 (T-SLIDE, T-RISE, T-TITLE)
│ │ └─ outline-fill.ts ← R2 (outline → solid)
│ ├─ runtime/
│ │ ├─ tier.ts tier-script.ts gsap-loader.ts
│ │ ├─ tier-store.ts ← R2
│ │ ├─ scope.ts ← R2
│ │ ├─ ticker.ts ← R2
│ │ └─ refresh.ts ← R2
│ ├─ contract.ts ← R2 (kosakata data-*)
│ └─ tokens.ts ← R2 (pembaca token CSS)
│
├─ content/
│ ├─ types.ts sections.ts
│ ├─ profile.ts about.ts experience.ts skills.ts
│ ├─ education.ts contact.ts hero.ts colophon.ts
│ └─ projects/index.ts projects/sidalekas/index.ts
│
├─ styles/
│ ├─ tokens.css (+ token VA)
│ ├─ base.css effects.css tiers.css
│
└─ lib/ Helper murni

text

**Dihapus saat VA:**
- `src/components/media/Frame.tsx`
- `src/components/media/MediaFrame.tsx`
  → digantikan oleh `MediaCard.tsx`.

**Belum dibuat (per R2/R3/R4):**
- `src/motion/primitives/mask-text.ts` (R2)
- `src/motion/primitives/magnetic.ts` (R3)
- `src/motion/primitives/tilt.ts` (R3)
- `src/motion/primitives/parallax.ts` (R3)
- `src/motion/primitives/draw-line.ts` (R2)
- `src/systems/cursor/*` (R3)
- `src/systems/report/*` (R4)
- `src/app/@report/` (R4)
- `src/content/ci-report.json` (R4)

---

## 4. Arah Impor (Satu Arah)

Ditegakkan `eslint.config.mjs` (custom rule per layer):

| Layer | Boleh mengimpor | DILARANG |
|---|---|---|
| `app/*` | sections, systems, components, content, lib, styles | — |
| `sections/*` | components, API publik systems, motion (via controller/choreography), content, lib | Section lain; internal systems |
| `systems/*` | components, motion, tipe content, lib | sections, app |
| `components/*` | `motion/contract`, primitive Magnetic, tipe content, lib | sections, systems, app |
| `motion/*` | lib saja | content, components, sections, systems |
| `content/*` | Tipe + lib murni | Semua UI |

**Tambahan VA:**
- `systems/stage/*` boleh mengimpor `components`, `motion`, tipe content, lib.
  **Tidak boleh** mengimpor `sections` atau `app`.
- `sections/*` mengakses Stage melalui **API publik** `systems/stage`.
- `components/media/MediaCard` hanya boleh impor `motion/contract` dan lib.

**Tes negatif:** `src/motion/tmp-guard/*` (dihapus setelah verifikasi)
berhasil menggagalkan lint dengan pesan
`motion/* hanya boleh mengimpor dari @/lib`.

---

## 5. Routing

| Path | Tipe | File |
|---|---|---|
| `/` | Static | `src/app/page.tsx` |
| `/projects/[slug]` | SSG via `generateStaticParams` | `src/app/projects/[slug]/page.tsx` |
| `/projects` | Static (redirect) | `src/app/projects/page.tsx` |
| `/opengraph-image` | Static | `src/app/opengraph-image.tsx` |
| `/robots.txt` | Static | `src/app/robots.ts` |
| `/sitemap.xml` | Static | `src/app/sitemap.ts` |
| `/_not-found` | Static | `src/app/not-found.tsx` |
| `@report` (overlay) | Intercepting route | R4 |

---

## 6. Rendering Strategy

| Rute | Strategy | Alasan |
|---|---|---|
| `/` | Static prerender | Semua teks di HTML server |
| `/projects/[slug]` | SSG | Slug dari `content/projects` |
| `/opengraph-image` | Static (Satori, edge-compatible) | OG image 1200×630 |

Semua halaman **dapat dibaca penuh tanpa JavaScript** (N-1). Stage adalah
layer presentasi di atas render statis; DOM server tetap lengkap tanpa JS.

---

## 7. Tier Sistem

Tier ditentukan sebelum paint oleh skrip inline kecil di `<head>` (U-09):

```js
if (prefers-reduced-motion) tier = "static";
else if (pointer:fine && hover:hover) tier = "cinematic";
else tier = "lite";
Atribut data-tier diset pada <html>. CSS memakai varian
[data-tier="..."].

Tier	GSAP	Lenis	Cursor	Trace	Stage
static	❌	❌	❌	Statis (IO)	Tumpukan vertikal, tanpa transisi
lite	✅ ringan	❌	❌	Gutter alur	Slide masuk sederhana (heading + foto)
cinematic	✅ penuh	✅	✅	Fixed + sinyal + cabang	Pin/scrub horizontal (T-SLIDE, T-RISE, T-TITLE)
Aturan tetap: Static dulu → Lite → Cinematic (F-06).

Implementasi:

src/motion/runtime/tier-script.ts (inline)

src/motion/runtime/tier.ts (reader)

src/motion/runtime/gsap-loader.ts (dynamic import)

src/motion/primitives/reveal.ts (contoh primitive)

8. Sistem Konten
Tipe: src/content/types.ts.

text
SectionEntry     { id, number, label, inNav, inTrace }
Profile          { name, fields, location, locationShort, status,
                   emailParts, linkedin, github?, cvPath }
ExperienceItem   { role, org, period, summary, details? }
SkillGroup       { label, items[], evidence }
EducationBlock   { degree, school, period, gpa,
                   certifications[], organization }
Project          { slug, index, title, role, period, stack[], links,
                   steps{...8 kunci}, context.short, result.short?,
                   assets[] }
CiReport         { source, lighthouse, axe, playwright, buildRef, timestamp }
Manifest: src/content/sections.ts — array tunggal untuk nav + SectionShell.

Sumber data: src/content/{profile,about,experience,skills,education,contact, hero,colophon}.ts + src/content/projects/.

Email: disimpan terpecah (emailParts) di profile.ts; dirakit di client
setelah mount (K-18). Tidak pernah ada string utuh di HTML server.

Slot foto: Konten foto (path, alt, caption) ditambahkan ke tipe
ProjectAsset atau tipe baru di types.ts saat VA; file fisik di
public/portrait/, public/media/, public/projects/<slug>/.

9. Komponen Utama
Layout
SkipLink — fokus pertama (tidak berubah).

SiteNav.client — nav desktop + dialog Index mobile (tidak berubah).

StageShell — BARU. Membungkus stage Cinematic/Lite. Menyimpan ref
container pin, koordinasi dengan systems/stage.

SectionShell — tetap untuk Static dan reflow. Tidak berubah.

Effects.client — tidak berubah.

ContactActions.client — tidak berubah.

UI
Tidak berubah. Button, Heading, Icon, LiveRegion, MonoTag, ReportStepper.

Media
MediaCard — MENGGANTIKAN Frame + MediaFrame.

Varian: square / portrait / landscape.

Radius: radius-media (clamp(16px, 2.4vw, 32px)).

Bayangan: shadow-media statis.

Tanpa siku sudut.

Slot kosong tidak dirender.

alt wajib; aria-hidden untuk salinan dekoratif.

Frame dan MediaFrame dihapus saat T-V-03 dikerjakan.

Motion
HeroPortrait — bagian dari sections/hero/, bukan di components/.
Menyimpan lapisan tiga (solid → potret → outline aria-hidden).

10. Alur Data
text
content/*.ts (data bertipe)
   │
   ├─► sections/*.tsx (render server)
   │
   ├─► app/page.tsx (merakit dari manifest)
   │
   ├─► app/projects/[slug]/page.tsx (dari content/projects)
   │
   └─► app/sitemap.ts (per-env) dan app/robots.ts
Tidak ada state global. Tidak ada store eksternal. Semua data mengalir dari
content/ → server component → HTML.

Fase VA tidak mengubah alur data: Stage adalah layer presentasi di atas
render statis. Tidak ada fetch baru, tidak ada state baru.

11. Motion Runtime
Saat ini (R1)
tier-script.ts — inline di <head>, menentukan data-tier.

tier.ts — reader sinkron.

gsap-loader.ts — dynamic import gsap + gsap/ScrollTrigger, register
plugin, cache pada satu promise.

primitives/reveal.ts — gsap.context() + gsap.to dengan scrollTrigger,
hanya elemen di bawah lipatan.

Rencana VA (T-V-08)
systems/stage — engine Stage Cinematic (satu choreography untuk
seluruh urutan Stage). Menggunakan GSAP + ScrollTrigger dengan pin/scrub.
Satu ticker. Tidak ada ScrollTrigger ganda.

primitives/stage-transition.ts — T-SLIDE, T-RISE, T-TITLE.

primitives/outline-fill.ts — outline → solid pada judul Hero +
heading chapter. Outline awal adalah teks terlihat (bukan opacity: 0).

Kontrak atribut data-stage, data-stage-index, data-parallax
(menunggu persetujuan U-01).

Rencana R2
contract.ts (kosakata data-*)

systems/trace/*

mask-text.ts

smooth-scroll.client.ts (Lenis)

runtime/tier-store.ts, scope.ts, ticker.ts, refresh.ts

Rencana R3
systems/cursor/*

primitives magnetic, tilt, parallax

Rencana R4
Print Receipt untuk Colophon

Overlay report

Aturan keras
Tidak ada opacity: 0 di CSS (F-20). JS menerapkan state awal hanya
pada elemen di bawah lipatan.

Nama Hero selalu terlihat sejak first paint.

Bayangan dan filter tidak dianimasikan (statis).

Hanya transform / opacity / clip-path / variabel CSS yang dianimasikan.

Trace horizontal di tepi bawah layar pada mode Stage (Cinematic);
tetap vertikal di Lite/Static dan di halaman report.

Perhatian font
Font Bricolage Grotesque saat ini 75,1 KB (weight 600 + axis opsz). Bila
disetel ke lebar condensed / bobot berat saat VA, jalankan ulang
font-budget.spec — batas ≤ 150 KB total font (Addendum §5.4).

12. Styling & Token
Sumber: src/styles/tokens.css (blok @theme Tailwind v4 + :root).

Token yang ada
Warna: void, surface-1..3, text-1..3, hairline, hairline-strong, accent,
accent-hover, accent-dim, accent-glow, on-accent.

Tipografi: d1, d2, d3, lead, body, ui, meta, micro (dengan line-height,
letter-spacing, font-weight).

Radius: sm 2px, md 4px.

Breakpoint: sm 480 … 3xl 1536.

Spasi layout: --section-pad, --gutter, --container-max, --site-max,
--read-max, --nav-height, --nav-offset.

Layer: --layer-void … --layer-skip (0–90).

Motion: --dur-instant 100ms … --dur-cine 1400ms; easing.

Efek: grain, vignette, nav-blur.

Token BARU (T-V-02)
Token	Nilai	Peran
--radius-media	clamp(16px, 2.4vw, 32px)	Sudut kartu media
--shadow-media	0 12px 32px rgba(0,0,0,0.35)	Bayangan statis kartu
--stroke-outline	1px var(--color-hairline-strong)	Garis outline judul
--dur-stage	900ms	Durasi transisi Stage
--ease-stage	cubic-bezier(0.65, 0, 0.35, 1)	Padanan GSAP power3.inOut
--progress-line	1px var(--color-text-3)	Garis progres horizontal
Token warna dan aksen TIDAK berubah.

Radius UI (tombol, tag, kontrol) TETAP 2px / 4px.

Base & efek
src/styles/base.css — dibungkus @layer base agar utility Tailwind
menang saat dipakai di komponen.

src/styles/effects.css — .atmosphere-grain, .atmosphere-vignette.

src/styles/tiers.css — kontrak varian tier (diisi per R2/R3/VA).

Wajib: semua komponen memakai token; tidak ada angka ajaib (F-04).

13. Konfigurasi Root
File	Fungsi
next.config.ts	Header keamanan (4). Auto-deploy produksi dimatikan di Vercel.
tsconfig.json	strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes, verbatimModuleSyntax
eslint.config.mjs	Flat config + arah impor + AVOID list
postcss.config.mjs	@tailwindcss/postcss
.prettierrc.json	semi, singleQuote:false, trailingComma:all, prettier-plugin-tailwindcss
playwright.config.ts	4 project (Cinematic, Lite, Static, WebKit-smoke)
lighthouserc.json	2 URL, a11y+SEO error, perf warn
.npmrc	include=optional (Tailwind native fallback)
.gitattributes	* text=auto eol=lf
.gitignore	Menjaga .env*.local, .next/, .lighthouseci/, playwright-report/, test-results/