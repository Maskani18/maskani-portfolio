// MASKANI — Registri project.
//
// Sebab: halaman /projects/[slug] perlu daftar slug yang dirender statis
// (BR-12). Satu-satunya project saat ini: SIDALEKAS (K-12).
// Tujuan: satu titik masuk untuk section Projects, halaman report, dan
// sitemap. Tidak ada project lain sampai pemilik menambah.
// Perilaku: array statis; `as const` agar slug tetap literal.

import type { Project } from "@/content/types";
import { sidalekas } from "./sidalekas";

export const projects = [sidalekas] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];
