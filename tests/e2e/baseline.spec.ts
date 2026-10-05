// MASKANI — Baseline performa (P0-07, F-09).
//
// Sebab: F-09 melarang optimasi tanpa pengukuran. Angka §13 Final Spec
// adalah hipotesis sampai diukur di P0.
// Tujuan: mencatat ukuran JS rute awal (KB gzip) dan jumlah request pada
// initial load "/". Bukan gerbang; hanya pencatatan untuk DL-005.
// Perilaku: mendengarkan response network. Tidak ada assertion.

import { test } from "@playwright/test";
import { gzipSync } from "node:zlib";

type Entry = {
  url: string;
  bytes: number;
  kind: "js" | "css" | "font" | "other";
};

test("ukur baseline JS + request pada shell", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-cinematic",
    "Ukur sekali saja.",
  );

  const entries: Entry[] = [];
  const requests: string[] = [];

  page.on("response", async (res) => {
    const url = res.url();
    if (!url.startsWith("http://localhost")) return;
    requests.push(url);

    const pathname = new URL(url).pathname;
    const isJs = pathname.endsWith(".js");
    const isCss = pathname.endsWith(".css");
    const isFont = pathname.endsWith(".woff2");
    if (!isJs && !isCss && !isFont) return;

    try {
      const buf = await res.body();
      const gz = isJs || isCss ? gzipSync(buf).length : buf.length;
      entries.push({
        url: pathname,
        bytes: gz,
        kind: isJs ? "js" : isCss ? "css" : "font",
      });
    } catch {
      // Body mungkin tidak tersedia (cache). Abaikan.
    }
  });

  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  const sum = (kind: Entry["kind"]) =>
    entries.filter((e) => e.kind === kind).reduce((s, e) => s + e.bytes, 0);

  const totalJs = sum("js");
  const totalCss = sum("css");
  const totalFont = sum("font");
  const totalGz = totalJs + totalCss;

  console.log("\n=== Baseline ===");
  console.log(`Requests (all):     ${requests.length}`);
  console.log(`JS (gzip):          ${(totalJs / 1024).toFixed(1)} KB`);
  console.log(`CSS (gzip):         ${(totalCss / 1024).toFixed(1)} KB`);
  console.log(`Font (raw):         ${(totalFont / 1024).toFixed(1)} KB`);
  console.log(`JS + CSS (gzip):    ${(totalGz / 1024).toFixed(1)} KB`);
  console.log("=================\n");
});
