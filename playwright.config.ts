// MASKANI — Playwright configuration.
//
// Tiga project mewakili tiga tier §5.1:
//   chromium-cinematic — Desktop, dark mode (tier Cinematic).
//   chromium-lite      — Mobile touch, no hover, no fine pointer (tier Lite).
//   chromium-static    — Reduced motion (tier Static).
//
// `colorScheme: dark` di semua project karena situs dark-only (§4.1).
// `exactOptionalPropertyTypes` aktif — properti opsional harus dihilangkan
// via conditional spread, bukan diset `undefined`.

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
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
        colorScheme: "dark",
      },
    },
    {
      name: "chromium-lite",
      use: {
        ...devices["Pixel 7"],
        colorScheme: "dark",
      },
    },
    {
      name: "chromium-static",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
        colorScheme: "dark",
        reducedMotion: "reduce",
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
