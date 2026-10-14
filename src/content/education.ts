// MASKANI — Data pendidikan, sertifikasi, organisasi (§2.3, DL-015).
//
// RH124 ditulis persis "Certificate of Attendance" (CG-14) — tidak
// diterjemahkan.

import type { EducationBlock } from "./types";

export const education: EducationBlock = {
  degree: "D4 Rekayasa Perangkat Lunak",
  school: "Politeknik Negeri Indramayu",
  period: "2022 – 2026",
  gpa: "3.55/4.00",
  certifications: [
    {
      name: "Red Hat System Administration I (RH124)",
      issuer: "Red Hat Training and Certification",
      period: "Mei 2024",
      note: "Certificate of Attendance",
    },
    {
      name: "Junior Network Administrator",
      issuer:
        "Vocational School Graduate Academy (VSGA), Digital Talent Scholarship 2023 (Kominfo)",
      period: "Jun – Jul 2023",
      description:
        "Merancang topologi dan pengalamatan jaringan, instalasi nirkabel, konfigurasi switch, serta routing dalam satu dan antar autonomous system. 90 jam.",
    },
  ],
  organization: {
    role: "Ketua Divisi Riset dan Teknologi",
    name: "Himpunan Mahasiswa Teknik Informatika",
    period: "Jul 2023 – Jul 2024",
    description:
      "Memimpin dua subdivisi (Study Club, Kompetisi), 13 anggota, dan 5 program kerja selama satu periode kepengurusan.",
  },
};
