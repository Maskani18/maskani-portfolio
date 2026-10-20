// MASKANI — Kontrak tipe konten (§5.2 Final Specification).
//
// Sebab: F-03 mewajibkan konten sebelum kode; F-04 melarang angka ajaib;
// §5.2 menspesifikkan bentuk tipe. Kompiler harus menolak konten cacat.
// Tujuan: satu sumber bentuk data untuk seluruh `src/content/*`. Setiap
// penyimpangan bentuk akan menggagalkan `tsc`, bukan diam-diam dirender.
// Perilaku: semua tipe `readonly`; properti opsional memakai `?:` tanpa
// nilai `undefined` eksplisit (exactOptionalPropertyTypes aktif).

// ---------------- Manifest section (F-18) ----------------

export type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact"
  | "colophon";

export type SectionEntry = {
  readonly id: SectionId;
  readonly number: string; // "01".."08"
  readonly label: string; // "Hero", "About", ... (tanpa nomor)
  readonly inNav: boolean;
  readonly inTrace: boolean;
};

// ---------------- Profile (§2.1) ----------------

// Email disimpan terpecah (K-18); tidak ada string utuh di content.
export type EmailParts = {
  readonly local: string;
  readonly domain: string;
};

export type Profile = {
  readonly name: string;
  readonly fields: readonly [string, string, string];
  readonly location: string;
  readonly locationShort: string;
  readonly status: "Open to work";
  readonly emailParts: EmailParts;
  readonly linkedin: string;
  readonly github?: string;
  readonly cvPath: string;
};

// ---------------- Experience (§2.2) ----------------

export type Period = {
  readonly from: string; // "Oct 2025"
  readonly to: string | null; // null = "Present"
};

export type ExperienceDetail = {
  readonly description: string;
  readonly responsibilities: readonly string[];
  readonly competencies: readonly string[];
};

export type ExperienceItem = {
  readonly id: string;
  readonly role: string;
  readonly org: string;
  readonly period: Period;
  readonly summary: string;
  readonly icon: "code" | "bug" | "monitor";
  readonly techStack: readonly string[];
  readonly details?: ExperienceDetail;
};

// ---------------- Skills (§2.4) ----------------

// Ikon skill (DL-016). Nama ikon didefinisikan di SkillIcon.tsx.
export type SkillIconName =
  | "troubleshoot"
  | "device-install"
  | "maintenance"
  | "support"
  | "networking"
  | "network-admin"
  | "mikrotik"
  | "network-monitoring"
  | "proxy"
  | "dns"
  | "manual-testing"
  | "functional-testing"
  | "uat"
  | "test-case"
  | "bug-report"
  | "retesting"
  | "test-doc"
  | "react"
  | "tailwind"
  | "laravel"
  | "php"
  | "rest-api"
  | "trello"
  | "excel"
  | "word"
  | "documentation";

export type SkillItem = {
  readonly icon: string; // Nama ikon Lucide
  readonly label: string;
  readonly description: string; // Tambahan deskripsi
};

export type SkillGroup = {
  readonly label: string;
  readonly evidence: string;
  readonly items: readonly SkillItem[];
};

// ---------------- Education (§2.3) ----------------

export type Certification = {
  readonly name: string;
  readonly issuer: string;
  readonly period: string; // "May 2024" atau "Jun – Jul 2023"
  readonly note?: string; // mis. "Certificate of Attendance"
  readonly description?: string; // satu kalimat, hanya bila ada
};

export type Organization = {
  readonly role: string;
  readonly name: string;
  readonly period: string;
  readonly description: string;
};

export type EducationBlock = {
  readonly degree: string;
  readonly school: string;
  readonly period: string;
  readonly gpa: string; // "3.55/4.00"
  readonly certifications: readonly Certification[];
  readonly organization: Organization;
};

// ---------------- Project (§6) ----------------

export type ProjectStepKey =
  | "context"
  | "problem"
  | "role"
  | "approach"
  | "implementation"
  | "verification"
  | "result"
  | "stack";

// Urutan tetap (§6.2). Dirender dan dites dalam urutan ini.
export const PROJECT_STEP_ORDER = [
  "context",
  "problem",
  "role",
  "approach",
  "implementation",
  "verification",
  "result",
  "stack",
] as const satisfies readonly ProjectStepKey[];

// Semua kunci wajib ada; nilai boleh null (U-10, K-06).
export type ProjectSteps = {
  readonly [K in ProjectStepKey]: string | null;
};

export type ProjectAssetKind = "poster" | "screenshot" | "diagram";

export type ProjectAsset = {
  readonly kind: ProjectAssetKind;
  // Path relatif ke /public, mis. "/projects/sidalekas/poster.webp".
  // Dimensi dan blur diambil dari impor statis; di sini hanya path string.
  readonly file: string;
  // alt wajib. Boleh "" hanya bila decorative diset true (CG-05).
  readonly alt: string;
  readonly decorative?: true;
  readonly caption?: string;
  readonly step?: ProjectStepKey; // kosong = pemetaan bawaan (§6.3)
};

export type ProjectFeature = {
  readonly title: string;
  readonly description: string;
  readonly icon: "user" | "database" | "shield" | "bell" | "monitor";
};

export type ProjectScreenshot = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly src: string;
  readonly alt: string;
};

export type Project = {
  readonly slug: string;
  readonly index: string;
  readonly title: string;
  readonly subtitle: string; // Sistem Informasi...
  readonly role: string;
  readonly org: string; // Diskominfo...
  readonly period: string;
  readonly stack: readonly string[];

  readonly context: {
    readonly short: string;
  };

  readonly features: readonly ProjectFeature[];
  readonly screenshots: readonly ProjectScreenshot[];
  readonly roleDetails: readonly string[];
  readonly closingQuote: string;
} & {
  // Opsional: jika masih butuh fields lama untuk halaman report lama.
  readonly links?: {
    readonly live?: string;
    readonly repo?: string;
  };
  readonly steps?: ProjectSteps;
  readonly result?: {
    readonly short?: string;
  };
  readonly assets?: readonly ProjectAsset[];
};

// ---------------- Colophon (§7.4) ----------------

export type Colophon = {
  readonly fonts: readonly [string, string, string];
  readonly stack: string;
  readonly copyright: string; // "© 2026 Maskani"
};

// ---------------- Build Receipt (§7.4, R4) ----------------

// Opsional; harus berasal dari CI (CG-06). Selama belum ada, file tidak dibuat.
export type CiReport = {
  readonly source: string; // penanda CI
  readonly lighthouse: {
    readonly perf: number;
    readonly a11y: number;
    readonly seo: number;
  };
  readonly axe: {
    readonly violations: number;
  };
  readonly playwright: {
    readonly passed: number;
    readonly total: number;
  };
  readonly buildRef: string;
  readonly timestamp: string; // ISO 8601
};
