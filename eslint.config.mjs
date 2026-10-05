// MASKANI — ESLint flat config.
//
// Sebab: dokumen Build Reference §P0-02 mewajibkan arah impor satu arah
// (§11.1 Final Specification, F-16) dan larangan `any` tanpa pembenaran.
// Tujuan: setiap pelanggaran arsitektur atau dependensi AVOID menggagalkan lint,
// sebelum sempat masuk ke build.
// Perilaku: file di bawah src/motion, src/content, src/components, src/systems,
// dan src/sections mendapat batas impor masing-masing. `**` dipakai agar pola
// menangkap path bertingkat (mis. @/components/ui/Button).

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const AVOID_MSG =
  "Paket ini ada di daftar AVOID (Lampiran A Build Reference). Dilarang dipasang atau diimpor.";

const AVOID_PACKAGES = [
  "framer-motion",
  "motion",
  "three",
  "@react-three/fiber",
  "@react-three/drei",
  "shadcn-ui",
  "@headlessui/react",
  "split-type",
  "@formkit/auto-animate",
  "lottie-react",
  "locomotive-scroll",
  "aos",
  "react-hook-form",
  "zod",
  "react-hot-toast",
  "sonner",
  "cmdk",
  "@sentry/nextjs",
  "@sentry/react",
  "clsx",
  "tailwind-merge",
  "axios",
  "swr",
  "@tanstack/react-query",
  "zustand",
  "jotai",
  "recoil",
];

const importRules = (extraPatterns = []) => [
  "error",
  {
    paths: AVOID_PACKAGES.map((name) => ({ name, message: AVOID_MSG })),
    patterns: extraPatterns,
  },
];

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // -------- Aturan dasar seluruh TypeScript --------
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "no-restricted-imports": importRules(),
    },
  },

  // -------- Arah impor satu arah (§11.1, F-16) --------

  // motion/* → hanya lib.
  {
    files: ["src/motion/**/*.ts", "src/motion/**/*.tsx"],
    rules: {
      "no-restricted-imports": importRules([
        {
          group: [
            "@/content/**",
            "@/components/**",
            "@/sections/**",
            "@/systems/**",
            "@/app/**",
          ],
          message:
            "motion/* hanya boleh mengimpor dari @/lib (§11.1). Tidak boleh menyentuh content, components, sections, systems, atau app.",
        },
      ]),
    },
  },

  // content/* → hanya tipe dan lib murni.
  {
    files: ["src/content/**/*.ts", "src/content/**/*.tsx"],
    rules: {
      "no-restricted-imports": importRules([
        {
          group: [
            "@/components/**",
            "@/sections/**",
            "@/systems/**",
            "@/motion/**",
            "@/app/**",
          ],
          message:
            "content/* hanya boleh mengimpor tipe dan lib murni. Tidak boleh menyentuh UI (§11.1).",
        },
      ]),
    },
  },

  // components/* → boleh motion/contract + primitive Magnetic + tipe content + lib.
  {
    files: ["src/components/**/*.ts", "src/components/**/*.tsx"],
    rules: {
      "no-restricted-imports": importRules([
        {
          group: ["@/sections/**", "@/systems/**", "@/app/**"],
          message:
            "components/* tidak boleh mengimpor sections, systems, atau app (§11.1).",
        },
      ]),
    },
  },

  // systems/* → tidak boleh sections dan app.
  {
    files: ["src/systems/**/*.ts", "src/systems/**/*.tsx"],
    rules: {
      "no-restricted-imports": importRules([
        {
          group: ["@/sections/**", "@/app/**"],
          message: "systems/* tidak boleh mengimpor sections atau app (§11.1).",
        },
      ]),
    },
  },

  // sections/* → tidak boleh mengimpor section lain.
  {
    files: ["src/sections/**/*.ts", "src/sections/**/*.tsx"],
    rules: {
      "no-restricted-imports": importRules([
        {
          group: ["@/sections/**"],
          message:
            "sections/* tidak boleh mengimpor section lain lewat alias. Impor internal section pakai relative path (§11.1).",
        },
      ]),
    },
  },

  // app/* sengaja tidak dibatasi.

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "playwright-report/**",
    "test-results/**",
    "node_modules/**",
  ]),
]);
