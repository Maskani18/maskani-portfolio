// MASKANI — WebKit smoke (§10.1).
//
// Jalur kritis di WebKit: home render, navigasi nav, Copy Email,
// report kanonik. Bukan suite penuh — hanya membuktikan tidak ada
// regresi spesifik WebKit (font loading, dialog, clipboard API).

import { test, expect } from "@playwright/test";

test("home: h1 dan section inti terlihat", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("MASKANI");
  for (const label of ["Tentang", "Pengalaman", "Projects", "Kontak"]) {
    await expect(
      page.getByRole("heading", { name: label, exact: true }).first(),
    ).toBeVisible();
  }
});

test("nav: klik About mendarat dengan fokus di heading", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "Di mobile nav desktop tidak dirender.");
  await page.goto("/");
  await page.locator('header a[href="#about"]').first().click();
  await expect(page.locator("#about-heading")).toBeFocused();
});

test("report: kanonik render dan hanya langkah berisi", async ({ page }) => {
  await page.goto("/projects/sidalekas");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("SIDALEKAS");
  await expect(
    page.getByRole("heading", { name: "Masalah", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Konteks", exact: true }),
  ).toBeVisible();
});

test("Copy Email: label berubah dan status diumumkan", async ({ page }) => {
  // WebKit tidak mendukung permission "clipboard-write" lewat
  // grantPermissions. Mock navigator.clipboard.writeText supaya
  // happy path deterministic. Ini menguji jalur aplikasi (state,
  // label, status region), bukan API browser.
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: () => Promise.resolve(),
        readText: () => Promise.resolve(""),
      },
    });
  });

  await page.goto("/");
  const btn = page.getByRole("button", { name: /salin email/i });
  await expect(btn).toBeVisible();
  await btn.click();
  await expect(
    page.getByRole("button", { name: /email tersalin/i }),
  ).toBeVisible({ timeout: 2000 });
});
