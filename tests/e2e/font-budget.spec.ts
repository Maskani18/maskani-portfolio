// MASKANI — Ukur anggaran font (§4.2, P0-04).
//
// Sebab: F-09 melarang optimasi tanpa pengukuran. Ukuran folder
// .next/static/media tidak mewakili bytes yang benar-benar terunduh:
// next/font menyertakan semua subset unicode, browser hanya fetch yang
// dipakai teks di halaman.
// Tujuan: mengukur total byte woff2 yang benar-benar terunduh pada initial
// load "/", lalu mencatatnya sebagai bagian DL-005 (baseline performa).
// Perilaku: mendengarkan response network, mengumpulkan URL berakhiran
// .woff2 beserta ukurannya, mencetak ringkasan ke log. Spec ini sengaja
// tidak memiliki assertion — hanya mengukur.

import { test } from "@playwright/test";

test("ukur total byte font yang terunduh pada initial load", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-cinematic",
    "Ukur sekali saja.",
  );

  const fontResponses: { url: string; bytes: number }[] = [];

  page.on("response", async (res) => {
    const url = res.url();
    if (!url.endsWith(".woff2")) return;
    try {
      const buf = await res.body();
      fontResponses.push({ url, bytes: buf.length });
    } catch {
      // Response body bisa tidak tersedia (mis. dari cache disk);
      // abaikan, tidak fatal untuk pengukuran.
    }
  });

  await page.goto("/", { waitUntil: "networkidle" });
  // Beri waktu untuk lazy fetch (mis. font yang hanya dipakai setelah
  // layout stabil) tanpa membuat tes menggantung.
  await page.waitForTimeout(2000);

  const total = fontResponses.reduce((sum, r) => sum + r.bytes, 0);

  console.log("\n=== Font Budget ===");
  console.log(`Files: ${fontResponses.length}`);
  console.log(`Total: ${(total / 1024).toFixed(1)} KB`);
  for (const r of fontResponses) {
    const name = r.url.split("/").pop() ?? r.url;
    console.log(`  ${name}  ${(r.bytes / 1024).toFixed(1)} KB`);
  }
  console.log("===================\n");
});
