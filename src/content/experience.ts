// MASKANI — Data pengalaman (§2.2, DL-015, VA-17b).
//
// Terurut terbaru dulu (CG-10). 1 foto portrait 7:10 di kanan.
// `details` (PF-05) belum diisi.

import type { ExperienceItem } from "./types";

export const experience = {
  items: [
    {
      role: "Frontend Developer Intern",
      org: "Diskominfo Kabupaten Indramayu",
      period: { from: "Okt 2025", to: "Des 2025" },
      summary:
        "Mengembangkan antarmuka SIDALEKAS dengan React.js dan Tailwind CSS: CRUD, pencarian, filter, validasi form, dan integrasi REST API.",
    },
    {
      role: "QA Intern",
      org: "PT Qtasnim Digital Teknologi",
      period: { from: "Jul 2025", to: "Okt 2025" },
      summary:
        "Melakukan manual testing dan User Acceptance Testing (UAT), mendokumentasikan bug, retesting, serta berkoordinasi dengan tim developer.",
    },
    {
      role: "IT Support Intern",
      org: "PT Dirgantara Indonesia (Persero)",
      period: { from: "Okt 2019", to: "Jan 2020" },
      summary:
        "Troubleshooting hardware dan software, konfigurasi Windows, printer, dan jaringan berbasis MikroTik, serta pemeliharaan komputer dan CCTV.",
    },
  ] as readonly ExperienceItem[],
  photo: {
    src: "/portrait/experience.webp",
    alt: "Foto Maskani saat bekerja",
  },
} as const;
