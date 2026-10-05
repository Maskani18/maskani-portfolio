// MASKANI — Robots (§14.1, CI-05).
// Produksi diizinkan; semua environment lain noindex.

import type { MetadataRoute } from "next";

const BASE_URL = "https://maskani-portfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NEXT_PUBLIC_SITE_ENV === "production";
  if (!isProd) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      host: BASE_URL,
    };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
