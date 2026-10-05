// MASKANI — Spec P3 (§10.2): report kanonik, SEO, redirect, 404.

import { test, expect } from "@playwright/test";

test("/projects/sidalekas dapat dibagikan lewat URL langsung", async ({
  page,
}) => {
  await page.goto("/projects/sidalekas");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("SIDALEKAS");
  await expect(
    page.getByText("Frontend Developer Intern").first(),
  ).toBeVisible();
  await expect(page.getByText(/Oct 2025 – Dec 2025/)).toBeVisible();
});

test("hanya langkah berisi yang dirender (U-10)", async ({ page }) => {
  await page.goto("/projects/sidalekas");
  // Problem, Approach, Verification, Result = null → tidak ada heading.
  await expect(
    page.getByRole("heading", { name: "Problem", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Approach", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Verification", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Result", exact: true }),
  ).toHaveCount(0);

  // Yang ada:
  for (const label of ["Context", "Role", "Implementation", "Stack"]) {
    await expect(
      page.getByRole("heading", { name: label, exact: true }),
    ).toBeVisible();
  }
});

test("tidak ada 'project berikutnya' dan tidak ada K-METRIC", async ({
  page,
}) => {
  await page.goto("/projects/sidalekas");
  const html = await page.content();
  expect(html).not.toMatch(/next project/i);
  expect(html).not.toMatch(/k[-_]?metric/i);
});

test("/projects dialihkan ke /#projects", async ({ page }) => {
  const res = await page.goto("/projects");
  expect(res?.status()).toBeLessThan(400);
  expect(page.url()).toContain("#projects");
});

test("404 dengan status HTTP 404", async ({ request }) => {
  const res = await request.get("/halaman-yang-tidak-ada");
  expect(res.status()).toBe(404);
});

test("SEO smoke: title, description, canonical", async ({ page }) => {
  await page.goto("/projects/sidalekas");
  await expect(page).toHaveTitle(/SIDALEKAS.*Case Report/);
  const desc = page.locator('meta[name="description"]');
  await expect(desc).toHaveAttribute("content", /.+/);
  const canonical = page.locator('link[rel="canonical"]');
  await expect(canonical).toHaveAttribute("href", /\/projects\/sidalekas$/);
});

test("JSON-LD Person tersedia", async ({ page }) => {
  await page.goto("/");
  const ld = await page
    .locator('script[type="application/ld+json"]')
    .first()
    .textContent();
  expect(ld).toBeTruthy();
  const lower = (ld ?? "").toLowerCase();
  expect(lower).toContain('"@type":"person"');
  expect(lower).toContain("maskani");
  expect(ld).toContain("linkedin.com/in/mas-kani18");
});

test("robots.txt melarang pada preview", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  // CI/preview: noindex. Test lokal default-nya preview.
  expect(body).toMatch(/Disallow: \//);
});

test("sitemap kosong pada preview", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  const body = await res.text();
  // Preview → tidak ada <url> entry.
  expect(body).not.toMatch(/<url>/);
});
