// MASKANI — Spec P1 (§10.2): shell, privasi, tier, responsif.

import { test, expect } from "@playwright/test";

test("skip link adalah fokus pertama", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
});

test("nav desktop menggerakkan fokus ke heading section", async ({
  page,
  isMobile,
}) => {
  test.skip(
    isMobile,
    "Nav desktop tidak dirender di mobile; pakai Index dialog.",
  );
  await page.goto("/");
  await page.locator('header a[href="#about"]').first().click();
  await expect(page.locator("#about-heading")).toBeFocused();
});

test("mobile: Index dialog navigasi ke section", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Hanya relevan di project Lite.");
  await page.goto("/");
  await page
    .getByRole("button", { name: /^index$/i })
    .first()
    .click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await dialog.locator('a[href="#about"]').first().click();
  await expect(page.locator("#about-heading")).toBeFocused();
});

test("nama MASKANI adalah h1 dan terlihat tanpa JS", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const noJs = await context.newPage();
  await noJs.goto("/");
  await expect(noJs.locator("h1")).toHaveText("MASKANI");
  for (const text of [
    "About",
    "Experience",
    "Skills",
    "Education",
    "Contact",
  ]) {
    await expect(
      noJs.getByRole("heading", { name: text, exact: false }).first(),
    ).toBeVisible();
  }
  await context.close();
});

test("HTML server tidak memuat email utuh (K-18)", async ({ request }) => {
  const res = await request.get("/");
  const html = await res.text();
  expect(html).not.toContain("Maskani180104@gmail.com");
  expect(html).not.toMatch(/[a-z0-9]+@gmail\.com/i);
});

test("tanpa JS, HTML tetap tanpa email utuh", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const noJs = await context.newPage();
  await noJs.goto("/");
  const html = await noJs.content();
  expect(html).not.toContain("Maskani180104@gmail.com");
  expect(html).not.toMatch(/[a-z0-9]+@gmail\.com/i);
  await context.close();
});

test("CTA Download CV terlihat memiliki tinggi ≥48px", async ({ page }) => {
  await page.goto("/");
  const ctas = page.locator('a[href="/cv/Maskani-CV.pdf"]');
  const count = await ctas.count();
  let visible = 0;
  for (let i = 0; i < count; i++) {
    const el = ctas.nth(i);
    if (!(await el.isVisible())) continue;
    visible++;
    const box = await el.boundingBox();
    expect(box).not.toBeNull();
    if (box) expect(box.height).toBeGreaterThanOrEqual(47.5);
  }
  expect(visible).toBeGreaterThan(0);
});

test("tier static tidak memuat GSAP", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name !== "chromium-static",
    "Hanya di project reduced motion.",
  );
  const gsapRequests: string[] = [];
  page.on("request", (req) => {
    if (req.url().includes("gsap")) gsapRequests.push(req.url());
  });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  expect(gsapRequests).toEqual([]);
});

test("reflow 320px tidak memotong teks", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");
  const overflows = await page.evaluate(() => {
    return (
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth + 1
    );
  });
  expect(overflows).toBe(false);
});

test("Copy Email mengubah label dan mengumumkan status", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  const btn = page.getByRole("button", { name: /copy email/i });
  await expect(btn).toBeVisible();
  await btn.click();
  await expect(page.getByRole("button", { name: /email copied/i })).toBeVisible(
    { timeout: 2000 },
  );
  const status = page.getByRole("status");
  await expect(status).toHaveText(/copied/i, { timeout: 2000 });
});

test("dialog Index membuka, menutup, mengembalikan fokus", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Hanya relevan di project Lite.");
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /^index$/i }).first();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});
