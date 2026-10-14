// MASKANI — Tes negatif penjaga konten (bagian dari G-0 #2).
//
// Sebab: P0-02 mewajibkan tes negatif membuktikan guard benar-benar
// menegakkan aturan, bukan hanya didefinisikan. Ini penutup P0-05.
// Tujuan: untuk setiap aturan yang diuji (CG-01, CG-07, CG-10, CG-11),
// sisipkan pelanggaran sementara, jalankan `scripts/content-guard.mjs`,
// pastikan keluar dengan kode 1 dan pesan menyebut kode aturan.
// Perilaku: manipulasi disk di-restore via try/finally.
//
// Test menggunakan regex yang cocok dengan struktur umum, bukan label
// atau bulan spesifik, agar tetap hijau saat konten berubah (DL-015,
// DL-016). Pattern harus diarahkan ke baris mana saja yang memang ada
// di file target.

import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile, writeFile, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "..");
const GUARD = join(ROOT, "scripts", "content-guard.mjs");
const CONTENT = join(ROOT, "src", "content");
const TMP = join(CONTENT, "__guard-test-tmp__.ts");
const EXPERIENCE = join(CONTENT, "experience.ts");
const SKILLS = join(CONTENT, "skills.ts");

function runGuard() {
  return spawnSync(process.execPath, [GUARD], {
    cwd: ROOT,
    encoding: "utf8",
  });
}

async function withTmpContent(content, fn) {
  await writeFile(TMP, content, "utf8");
  try {
    return await fn();
  } finally {
    if (existsSync(TMP)) await unlink(TMP);
  }
}

test("CG-01: placeholder memicu kegagalan", async () => {
  await withTmpContent('export const x = "[NEED USER INPUT]";\n', () => {
    const r = runGuard();
    assert.notEqual(r.status, 0, "guard seharusnya gagal");
    assert.match(r.stdout + r.stderr, /CG-01/);
  });
});

test("CG-07: string k-metric memicu kegagalan", async () => {
  await withTmpContent("// k-metric\nexport const x = 1;\n", () => {
    const r = runGuard();
    assert.notEqual(r.status, 0, "guard seharusnya gagal");
    assert.match(r.stdout + r.stderr, /CG-07/);
  });
});

test("CG-11: Soft Skills memicu kegagalan", async () => {
  // Timpa label kategori apa pun yang ada dengan "Soft Skills".
  // Regex mencocokkan label: "..." generik, jadi tidak bergantung
  // pada teks label yang spesifik (mis. "Tools & Documentation").
  const backup = await readFile(SKILLS, "utf8");
  try {
    const tampered = backup.replace(
      /label:\s*"[^"]+",\n(\s+)items:/,
      'label: "Soft Skills",\n$1items:',
    );
    assert.notEqual(tampered, backup, "berhasil memodifikasi berkas");
    await writeFile(SKILLS, tampered, "utf8");

    const r = runGuard();
    assert.notEqual(r.status, 0, "guard seharusnya gagal");
    assert.match(r.stdout + r.stderr, /CG-11/);
  } finally {
    await writeFile(SKILLS, backup, "utf8");
  }
});

test("CG-10: Experience tidak terurut memicu kegagalan", async () => {
  // Timpa nilai `from:` pertama yang ada dengan bulan jauh di masa
  // lalu, agar urutan terbaru-dulu terlanggar. Regex mencocokkan
  // format umum (`from: "..."`), jadi tidak bergantung pada bahasa.
  const backup = await readFile(EXPERIENCE, "utf8");
  try {
    const tampered = backup.replace(
      /from:\s*"[^"]+"/,
      'from: "Jan 1990"',
    );
    assert.notEqual(tampered, backup, "berhasil memodifikasi berkas");
    await writeFile(EXPERIENCE, tampered, "utf8");

    const r = runGuard();
    assert.notEqual(r.status, 0, "guard seharusnya gagal");
    assert.match(r.stdout + r.stderr, /CG-10/);
  } finally {
    await writeFile(EXPERIENCE, backup, "utf8");
  }
});

test("guard lulus pada konten bersih (baseline)", () => {
  const r = runGuard();
  // CG-09 diabaikan via DL-007; guard tetap keluar 0 dengan warning.
  assert.equal(r.status, 0, "guard seharusnya lulus pada konten bersih");
  assert.match(r.stdout + r.stderr, /Content guard lulus/);
});