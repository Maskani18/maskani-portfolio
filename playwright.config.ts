// MASKANI — Playwright configuration.
//
// Sebab: P0-03 mewajibkan validasi kontras dengan alat; P0-06 memakai
// Playwright sebagai runner uji E2E dan axe. Konfigurasi ini menyiapkan
// keduanya sekaligus, dan akan dipakai sejak R1.
// Tujuan: satu runner untuk Chromium (utama) dan WebKit (smoke).
// Perilaku: dev server dijalankan otomatis sebelum tes; viewport dan
// reduced-motion diemulasi per project.
//
// Catatan: `exactOptionalPropertyTypes` aktif (tsconfig), jadi properti
// opsional harus dihilangkan dengan conditional spread, bukan diset
// `undefined`.

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
  ],
  webServer: {
    command: "npm run start",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
