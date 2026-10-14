// MASKANI — Audit aksesibilitas berbasis axe-core (§10.3, G-1, G-R1).
//
// Rute yang diaudit: / dan /projects/sidalekas.
// Tag: wcag2aa, wcag21aa, wcag22aa. Dialog Index diuji di project Lite.

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const TAGS = ["wcag2aa", "wcag21aa", "wcag22aa"];
const ROUTES = ["/", "/projects/sidalekas"];

for (const route of ROUTES) {
  test(`axe: tidak ada pelanggaran pada ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();

    if (results.violations.length > 0) {
      console.log(`[axe] ${route} — ${results.violations.length} pelanggaran:`);
      for (const v of results.violations) {
        console.log(`- ${v.id}: ${v.help}`);
        for (const n of v.nodes) {
          console.log(`  · ${n.target.join(" > ")}`);
        }
      }
    }

    expect(results.violations).toEqual([]);
  });
}

test("axe: tidak ada pelanggaran dengan dialog Index terbuka", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Hanya relevan di project Lite (mobile).");

  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page
    .getByRole("button", { name: /^indeks$/i })
    .first()
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();

  const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
  expect(results.violations).toEqual([]);
});
