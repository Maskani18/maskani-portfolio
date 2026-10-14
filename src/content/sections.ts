// MASKANI — Manifest section (F-18, §3.1 Final Specification).
//
// Sebab: F-18 mewajibkan satu manifest yang menurunkan nav, Trace, dan node.
// Dilarang membuat daftar section kedua.
// Tujuan: satu array tunggal sebagai sumber nomor, label, dan keikutsertaan
// di nav/Trace. Komponen (SiteNav, Trace, SectionShell) membaca dari sini.
// Perilaku: array statis, `as const`. Tidak ada impor UI.

import type { SectionEntry, SectionId } from "./types";

export const sections = [
  { id: "hero", number: "01", label: "Hero", inNav: false, inTrace: true },
  { id: "about", number: "02", label: "Tentang", inNav: true, inTrace: true },
  {
    id: "experience",
    number: "03",
    label: "Pengalaman",
    inNav: true,
    inTrace: true,
  },
  {
    id: "projects",
    number: "04",
    label: "Projects",
    inNav: true,
    inTrace: true,
  },
  { id: "skills", number: "05", label: "Skills", inNav: true, inTrace: true },
  {
    id: "education",
    number: "06",
    label: "Pendidikan",
    inNav: true,
    inTrace: true,
  },
  { id: "contact", number: "07", label: "Kontak", inNav: true, inTrace: true },
  {
    id: "colophon",
    number: "08",
    label: "Colophon",
    inNav: false,
    inTrace: true,
  },
] as const satisfies readonly SectionEntry[];

export type SectionsManifest = typeof sections;

export function getSection(id: SectionId): SectionEntry {
  const found = sections.find((s) => s.id === id);
  if (!found) {
    throw new Error(`Section "${id}" not found in manifest`);
  }
  return found;
}
