// MASKANI — Data pendidikan, sertifikasi, organisasi (§2.3).
//
// RH124 ditulis persis "Certificate of Attendance" (CG-14).

import type { EducationBlock } from "./types";

export const education = {
  degree: "D4 Software Engineering (Rekayasa Perangkat Lunak)",
  school: "Politeknik Negeri Indramayu",
  period: "2022 – 2026",
  gpa: "3.55/4.00",
  certifications: [
    {
      name: "Red Hat System Administration I (RH124)",
      issuer: "Red Hat Training and Certification",
      period: "May 2024",
      note: "Certificate of Attendance",
    },
    {
      name: "Junior Network Administrator",
      issuer:
        "Vocational School Graduate Academy (VSGA), Digital Talent Scholarship 2023 (Kominfo)",
      period: "Jun – Jul 2023",
      description:
        "Topology and addressing, wireless installation, switch configuration, routing. 90 hours.",
    },
  ],
  organization: {
    role: "Head of Research and Technology Division",
    name: "Himpunan Mahasiswa Teknik Informatika",
    period: "Jul 2023 – Jul 2024",
    description:
      "Led two subdivisions (Study Club, Competition), 13 members, 5 work programs.",
  },
} as const satisfies EducationBlock;
