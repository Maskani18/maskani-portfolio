// MASKANI — Data Colophon (§7.4, C-14).
//
// Hanya fakta statis. Baris CI tidak ada di sini; dibaca terpisah dari
// ci-report.json di R4 (BR-05).

import type { Colophon } from "./types";

export const colophon = {
  fonts: ["Bricolage Grotesque", "Geist", "Geist Mono"],
  stack: "Built with Next.js and GSAP",
  copyright: "© 2026 Maskani",
} as const satisfies Colophon;
