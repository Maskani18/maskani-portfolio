// MASKANI — Next.js root configuration.
//
// Sebab: P0-02 Build Reference mewajibkan konfigurasi root disiapkan di fase Foundation.
// Tujuan: memasang header keamanan statis yang sama untuk semua rute (§14.2 Final
// Specification, P3-07 Build Reference) sejak awal, sehingga tidak ada regresi saat
// halaman ditambah di P1/P3.
// Perilaku: hanya header statis. CSP ketat sengaja ditunda (butuh nonce untuk skrip
// tier inline; §14.2). Auto-deploy produksi dimatikan lewat dashboard Vercel, bukan
// lewat file ini (§11.2 CI-02).

import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
