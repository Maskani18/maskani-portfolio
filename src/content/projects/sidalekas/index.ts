// MASKANI — Data project SIDALEKAS (§6.5).
//
// Sebab: satu-satunya project (K-11, K-12). Nilai langkah mengikuti §6.5;
// langkah kosong wajib `null` (U-10, K-06).
// Tujuan: mengisi kontrak Project tanpa mengarang data. Problem, Approach,
// Verification, Result belum ada isinya → dibiarkan `null`.
// Teks copy tambahan (BR-C2, BR-C3, BR-C4, BR-C6) berstatus "Perlu
// persetujuan" (PF-04). Ganti jika pemilik memberi redaksi berbeda.

import type { Project } from "@/content/types";

export const sidalekas = {
  slug: "sidalekas",
  index: "P-01",
  title: "SIDALEKAS",
  role: "Frontend Developer Intern",
  period: "Oct 2025 – Dec 2025",
  stack: ["React.js", "Tailwind CSS", "Axios", "REST API"],
  links: {},
  steps: {
    // BR-C2 (usulan, PF-04)
    context:
      "SIDALEKAS (Sistem Informasi Data Lembaga Kesejahteraan Sosial) is an application at Diskominfo Kabupaten Indramayu. I worked on it as a frontend developer intern from October to December 2025.",
    // §6.5: belum ada isi.
    problem: null,
    // BR-C3 (usulan, PF-04)
    role: "Frontend Developer Intern: developed the application interface.",
    // §6.5: belum ada isi.
    approach: null,
    // BR-C4 (usulan, PF-04)
    implementation:
      "Responsive interface components with React.js and Tailwind CSS; frontend features for managing and verifying data: CRUD, search, filters, form validation and REST API integration with Axios.",
    // §6.5: hanya diisi bila memang diuji.
    verification: null,
    // §6.5: belum ada isi.
    result: null,
    // Tag stack yang sama dengan poster, ringkas.
    stack: "React.js · Tailwind CSS · Axios · REST API",
  },
  context: {
    // BR-C6 (usulan, PF-04). Satu kalimat pertama dari BR-C2.
    short:
      "SIDALEKAS (Sistem Informasi Data Lembaga Kesejahteraan Sosial) is an application at Diskominfo Kabupaten Indramayu.",
  },
  result: {
    // U-08: result.short tidak ada → baris dihilangkan di poster.
  },
  // Slot media menyusul (PF-07). Tidak dirender sampai ada berkasnya.
  assets: [],
} as const satisfies Project;
