// MASKANI — Playwright configuration.
//
// Chromium (Cinematic, Lite, Static) → semua spec.
// WebKit (smoke) → hanya webkit-smoke.spec.ts (jalur kritis).

import { defineConfig, devices } from "@playwright/test";

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  ...(process.env.CI ? { workers: 1 } : {}),
  reporter: [["list"]],
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium-cinematic",
      testIgnore: ["**/webkit-smoke.spec.ts"],
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
        colorScheme: "dark",
      },
    },
    {
      name: "chromium-lite",
      testIgnore: ["**/webkit-smoke.spec.ts"],
      use: {
        ...devices["Pixel 7"],
        colorScheme: "dark",
      },
    },
    {
      name: "chromium-static",
      testIgnore: ["**/webkit-smoke.spec.ts"],
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
        colorScheme: "dark",
        reducedMotion: "reduce",
      },
    },
    {
      name: "webkit-smoke",
      testMatch: /webkit-smoke\.spec\.ts$/,
      use: {
        ...devices["Desktop Safari"],
        viewport: { width: 1440, height: 900 },
        colorScheme: "dark",
      },
    },
  ],
  webServer: {
    command: "npm run start",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
