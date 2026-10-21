import type { SectionEntry } from "./types";

export const sections = [
  { id: "hero", number: "01", label: "Hero", inNav: false, inTrace: true },
  {
    id: "about",
    number: "02",
    label: "Profile",
    inNav: true,
    inTrace: true,
  },
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
  {
    id: "education",
    number: "05",
    label: "Pendidikan",
    inNav: true,
    inTrace: true,
  },
  {
    id: "skills",
    number: "06",
    label: "Skills",
    inNav: true,
    inTrace: true,
  },
  {
    id: "contact",
    number: "07",
    label: "Kontak",
    inNav: true,
    inTrace: true,
  },
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

import type { SectionId } from "./types";
