// MASKANI — Validasi kontras token.
//
// Sebab: P0-03 / G-0 #3 mewajibkan kontras divalidasi dengan alat, bukan
// hanya dihitung manual. axe-core mengevaluasi setiap elemen yang dirender.
// Tujuan: memastikan setiap kombinasi warna token di halaman kosong ini
// memenuhi WCAG 2.2 AA (teks >= 4.5:1, non-teks penting >= 3:1).
// Perilaku: satu spec yang membuka /, menjalankan axe-core dengan tag
// wcag2aa + wcag21aa + wcag22aa, dan menggagalkan tes bila ada violation
// dengan id `color-contrast`.
//
// Catatan: pada tahap P0 halaman masih template Next.js; tes ini akan
// memberi tahu apakah template melanggar. Saat P1 kita mengganti markup,
// tes ini otomatis memvalidasi token MASKANI yang sebenarnya.

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("tidak ada pelanggaran kontras pada halaman kosong", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2aa", "wcag21aa", "wcag22aa"])
    .withRules(["color-contrast"])
    .analyze();

  // Cetak ringkas ke log agar mudah dibaca bila gagal.
  if (results.violations.length > 0) {
    console.log(
      `[contrast] ${results.violations.length} pelanggaran ditemukan:`,
    );
    for (const v of results.violations) {
      console.log(`- ${v.id}: ${v.help}`);
      for (const n of v.nodes) {
        console.log(`  · ${n.target.join(" > ")}`);
        console.log(`    ${n.failureSummary ?? ""}`);
      }
    }
  }

  expect(results.violations).toEqual([]);
});
