// MASKANI — Audit aksesibilitas berbasis axe-core (§10.3, G-1).
//
// Sebelumnya hanya `color-contrast`; sekarang menjalankan seluruh tag
// WCAG 2.0/2.1/2.2 AA. Dijalankan pada keadaan istirahat dan (di project
// Lite) dengan dialog Index terbuka.

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const TAGS = ["wcag2aa", "wcag21aa", "wcag22aa"];

test("axe: tidak ada pelanggaran pada keadaan istirahat", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();

  if (results.violations.length > 0) {
    console.log(`[axe] ${results.violations.length} pelanggaran:`);
    for (const v of results.violations) {
      console.log(`- ${v.id}: ${v.help}`);
      for (const n of v.nodes) {
        console.log(`  · ${n.target.join(" > ")}`);
      }
    }
  }

  expect(results.violations).toEqual([]);
});

test("axe: tidak ada pelanggaran dengan dialog Index terbuka", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Hanya relevan di project Lite (mobile).");

  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // Buka dialog Index.
  await page.getByRole("button", { name: /index/i }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();

  const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
  expect(results.violations).toEqual([]);
});
