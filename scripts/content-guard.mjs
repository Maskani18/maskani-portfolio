#!/usr/bin/env node
// MASKANI — Content guard (CG-01..CG-14, §5.5 Build Reference).
//
// Sebab: F-08 (tidak ada konten karangan), N-2, N-3. Penjaga konten
// menegakkan aturan pada tahap lint — sebelum build.
// Tujuan: menolak konten cacat (placeholder, slug salah, K-METRIC,
// telepon, alt hilang, urutan Experience salah, dsb.) sebelum masuk
// bundle. Rilis produksi terblokir selama guard merah.
// Perilaku: skrip Node murni tanpa dependensi (F-07). Regresi struktural
// seperti bentuk `ProjectSteps` dan `ExperienceDetail` sudah ditegakkan
// oleh `tsc`; guard fokus pada nilai.
//
// CG-04 dan CG-13 ditegakkan compiler TypeScript. CG-12 (id manifest =
// id yang dirender) diperiksa di lapisan E2E.

import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve, relative, basename } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(HERE, "..");
const CONTENT_DIR = join(ROOT, "src", "content");
const SRC_DIR = join(ROOT, "src");
const CV_PATH = join(ROOT, "public", "cv", "Maskani-CV.pdf");
const EXCEPTIONS_PATH = join(ROOT, "scripts", "content-guard-exceptions.json");
const CI_REPORT_PATH = join(CONTENT_DIR, "ci-report.json");

// Exception tercatat (F-14). Bukan penurunan ambang: setiap aturan yang
// diabaikan wajib punya entri DL dengan kadaluarsa. Exception dilaporkan
// sebagai warning, bukan disembunyikan.

const errors = [];
const warnings = [];

let exceptions = {};
if (existsSync(EXCEPTIONS_PATH)) {
  try {
    exceptions = JSON.parse(await readFile(EXCEPTIONS_PATH, "utf8"));
  } catch (e) {
    console.error(`✗ content-guard-exceptions.json tidak valid: ${e.message}`);
    process.exit(1);
  }
}

const fail = (rule, msg) => {
  if (exceptions[rule]) {
    warnings.push(`${rule}: ${msg} — diabaikan (${exceptions[rule].dlRef})`);
    return;
  }
  errors.push(`${rule}: ${msg}`);
};

const strip = (src) =>
  src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");

async function listFiles(dir, exts) {
  const out = [];
  async function rec(d) {
    let entries;
    try {
      entries = await readdir(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const full = join(d, e.name);
      if (e.isDirectory()) await rec(full);
      else if (exts.some((x) => e.name.endsWith(x))) out.push(full);
    }
  }
  await rec(dir);
  return out;
}

const read = (p) => readFile(p, "utf8");

// ---------- CG-01: placeholder ----------
{
  const RE = /\[NEED USER INPUT\]|\bTODO\b|\bTBD\b|lorem ipsum|\bXXX\b/i;
  const files = await listFiles(CONTENT_DIR, [".ts", ".tsx"]);
  for (const f of files) {
    const src = strip(await read(f));
    if (RE.test(src)) {
      fail("CG-01", `placeholder token di ${relative(ROOT, f)}`);
    }
  }
}

// ---------- CG-02: slug format + unique ----------
{
  const files = await listFiles(CONTENT_DIR, [".ts"]);
  const seen = new Map();
  for (const f of files) {
    const src = strip(await read(f));
    for (const m of src.matchAll(/\bslug:\s*"([^"]+)"/g)) {
      const slug = m[1];
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        fail("CG-02", `slug tidak valid "${slug}" di ${relative(ROOT, f)}`);
      }
      if (seen.has(slug)) fail("CG-02", `slug duplikat "${slug}"`);
      seen.set(slug, f);
    }
  }
}

// ---------- CG-03: context/role/stack non-empty ----------
{
  const projFiles = await listFiles(join(CONTENT_DIR, "projects"), [".ts"]);
  for (const f of projFiles) {
    if (basename(f) !== "index.ts") continue;
    // Lewati registry (projects/index.ts) — cek blok `steps:` saja.
    const src = strip(await read(f));
    const m = src.match(/steps:\s*\{([\s\S]*?)\n\s*\}/);
    if (!m) continue;
    const block = m[1];
    for (const key of ["context", "role", "stack"]) {
      const km = block.match(new RegExp(`(?:^|\\n)\\s*${key}:\\s*([^,\\n]+)`));
      if (!km) {
        fail("CG-03", `${key} hilang di ${relative(ROOT, f)}`);
        continue;
      }
      if (km[1].trim() === "null") {
        fail("CG-03", `${key} null di ${relative(ROOT, f)}`);
      }
    }
  }
}

// ---------- CG-05: assets alt + file existence ----------
{
  const projFiles = await listFiles(join(CONTENT_DIR, "projects"), [".ts"]);
  for (const f of projFiles) {
    const src = strip(await read(f));
    const assetsMatch = src.match(/assets:\s*\[([\s\S]*?)\n\s*\]/);
    if (!assetsMatch) continue;
    const objs = assetsMatch[1].match(/\{[^{}]*\}/g) ?? [];
    for (const obj of objs) {
      const fileMatch = obj.match(/file:\s*"([^"]+)"/);
      const altMatch = obj.match(/alt:\s*"([^"]*)"/);
      const decMatch = obj.match(/decorative:\s*true/);
      if (!fileMatch) {
        fail("CG-05", `aset tanpa 'file' di ${relative(ROOT, f)}`);
        continue;
      }
      const file = fileMatch[1];
      const abs = join(ROOT, "public", file.replace(/^\//, ""));
      if (!existsSync(abs)) {
        fail("CG-05", `berkas aset tidak ditemukan: ${file}`);
      }
      if (!altMatch) {
        fail("CG-05", `aset tanpa 'alt': ${file}`);
      } else if (altMatch[1] === "" && !decMatch) {
        fail("CG-05", `'alt' kosong tanpa decorative:true: ${file}`);
      }
      const name = basename(file);
      const slug = name.replace(/\.[a-z0-9]+$/, "");
      if (!/^[a-z0-9]+(?:-[a-z0-9]+){2,}$/.test(slug)) {
        fail("CG-05", `penamaan aset tidak sesuai konvensi: ${name}`);
      }
    }
  }
}

// ---------- CG-06: ci-report.json (opsional) ----------
{
  if (existsSync(CI_REPORT_PATH)) {
    try {
      const data = JSON.parse(await read(CI_REPORT_PATH));
      if (typeof data.source !== "string" || data.source.length === 0) {
        fail("CG-06", `ci-report.json: 'source' tidak valid`);
      }
      if (typeof data.buildRef !== "string" || data.buildRef.length === 0) {
        fail("CG-06", `ci-report.json: 'buildRef' tidak valid`);
      }
      const lh = data.lighthouse ?? {};
      for (const k of ["perf", "a11y", "seo"]) {
        const v = lh[k];
        if (typeof v !== "number" || v < 0 || v > 100) {
          fail("CG-06", `ci-report.json: lighthouse.${k} di luar 0..100`);
        }
      }
    } catch (e) {
      fail("CG-06", `ci-report.json tidak dapat diparse: ${e.message}`);
    }
  }
}

// ---------- CG-07: tidak ada "k-metric"/"kmetric" di src/ ----------
{
  const files = await listFiles(SRC_DIR, [
    ".ts",
    ".tsx",
    ".css",
    ".md",
    ".json",
  ]);
  for (const f of files) {
    const src = await read(f);
    if (/k[-_]?metric/i.test(src)) {
      fail("CG-07", `jejak K-METRIC di ${relative(ROOT, f)}`);
    }
  }
}

// ---------- CG-08: no phone pattern; no full email ----------
{
  // Nomor telepon: minimal 9 digit berurutan dengan pemisah umum.
  // Ambang 9 dipilih agar "2022 – 2026" dan tanggal lain tidak kena.
  const PHONE_RE = /(?:\+?\d[\s\-().]*){9,}\d/;
  const files = await listFiles(CONTENT_DIR, [".ts", ".tsx"]);
  for (const f of files) {
    const src = strip(await read(f));
    if (PHONE_RE.test(src)) {
      fail("CG-08", `pola nomor telepon di ${relative(ROOT, f)}`);
    }
  }
  const profileSrc = await read(join(CONTENT_DIR, "profile.ts"));
  const local = profileSrc.match(/local:\s*"([^"]+)"/)?.[1];
  const domain = profileSrc.match(/domain:\s*"([^"]+)"/)?.[1];
  if (local && domain) {
    const full = `${local}@${domain}`;
    const all = await listFiles(SRC_DIR, [".ts", ".tsx", ".css", ".html"]);
    for (const f of all) {
      const src = await read(f);
      if (src.includes(full)) {
        fail("CG-08", `email utuh muncul di ${relative(ROOT, f)}`);
      }
    }
  }
}

// ---------- CG-09: CV publik ada ----------
{
  if (!existsSync(CV_PATH)) {
    fail("CG-09", `berkas CV tidak ada: public/cv/Maskani-CV.pdf`);
  }
}

// ---------- CG-10: Experience order + Intern ----------
{
  const src = strip(await read(join(CONTENT_DIR, "experience.ts")));
  const MONTHS = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  const froms = [...src.matchAll(/from:\s*"([A-Za-z]+)\s+(\d{4})"/g)].map(
    (m) => ({ mon: m[1], year: Number(m[2]) }),
  );
  const stamps = froms.map(({ mon, year }) => year * 12 + (MONTHS[mon] ?? 0));
  for (let i = 1; i < stamps.length; i++) {
    if (stamps[i] > stamps[i - 1]) {
      fail("CG-10", `Experience tidak terurut terbaru dulu (index ${i})`);
      break;
    }
  }
  const roles = [...src.matchAll(/role:\s*"([^"]+)"/g)].map((m) => m[1]);
  const itSupport = roles.find((r) => /IT Support/i.test(r));
  if (itSupport && !/Intern/i.test(itSupport)) {
    fail("CG-10", `peran IT Support tidak berlabel "Intern": "${itSupport}"`);
  }
}

// ---------- CG-11: Skills ----------
{
  const src = strip(await read(join(CONTENT_DIR, "skills.ts")));
  if (/Soft Skills/i.test(src)) {
    fail("CG-11", `kategori "Soft Skills" tidak boleh ada`);
  }
  if (/%/.test(src)) {
    fail("CG-11", `skills memuat persentase`);
  }
  const mikrotikCount = (src.match(/\bMikroTik\b/g) ?? []).length;
  if (mikrotikCount !== 1) {
    fail("CG-11", `MikroTik muncul ${mikrotikCount} kali, harus tepat 1`);
  }
}

// ---------- CG-14: RH124 frasa persis ----------
{
  const src = strip(await read(join(CONTENT_DIR, "education.ts")));
  if (!src.includes("Certificate of Attendance")) {
    fail("CG-14", `frasa "Certificate of Attendance" tidak ditemukan`);
  }
}

// ---------- Report ----------
if (warnings.length > 0) {
  console.warn("");
  console.warn("⚠ Content guard: exception aktif:");
  for (const w of warnings) console.warn(`  · ${w}`);
  console.warn("");
}

if (errors.length > 0) {
  console.error("");
  console.error("✗ Content guard gagal:");
  for (const e of errors) console.error(`  · ${e}`);
  console.error("");
  process.exit(1);
}
console.log(
  "✓ Content guard lulus (CG-01..CG-14; CG-04/12/13 dijaga compiler/E2E).",
);
