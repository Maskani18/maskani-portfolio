// MASKANI — Sitemap (§14.1).
// Produksi: izin lengkap. Non-produksi: kosong (noindex).

import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";

const BASE_URL = "https://maskani-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NEXT_PUBLIC_SITE_ENV !== "production") {
    return [];
  }
  const now = new Date();
  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `${BASE_URL}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
