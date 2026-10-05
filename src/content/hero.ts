// MASKANI — Copy Hero (C-02, §5.3).
//
// Lead Hero. C-03 (fields + location) dari profile; C-04 (status) dari
// profile; C-05 (CTA) literal di komponen karena merupakan aksi, bukan
// klaim konten.

import type { Profile } from "./types";

export const hero = {
  lead: "I find what breaks, and I make it work.",
} as const;

// Referensi tipe agar Profile tetap terpakai walau hero.ts tidak
// memakainya secara langsung.
export type _HeroProfileRef = Profile;
