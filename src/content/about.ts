// MASKANI — Copy About (DL-015, VA-17).
import type { Profile } from "./types";

export const about = {
  lead: "Fresh Graduate D4 Rekayasa Perangkat Lunak dari Politeknik Negeri Indramayu dengan pengalaman praktik di bidang IT Support. Memiliki kemampuan troubleshooting hardware dan software, instalasi dan konfigurasi komputer, Windows, printer, serta perangkat pendukung, termasuk konfigurasi jaringan dan MikroTik. Terbiasa menangani kendala teknis, melakukan pemeliharaan perangkat, serta mendokumentasikan pekerjaan secara terstruktur. Pengalaman di bidang Quality Assurance turut memperkuat ketelitian dan kemampuan problem solving. Berkomitmen mengembangkan karier sebagai IT Support dan mendukung kelancaran operasional teknologi di lingkungan kerja.",
  highlights: [
    "IT Support",
    "troubleshooting hardware",
    "software",
    "Windows",
    "printer",
    "MikroTik",
    "Quality Assurance",
    "problem solving",
  ],
  chip: "D4 REKAYASA PERANGKAT LUNAK · POLITEKNIK NEGERI INDRAMAYU · IPK 3.55/4.00",
  photo: {
    src: "/portrait/about.webp",
    alt: "Foto Maskani",
  },
} as const;

export type _AboutProfileRef = Profile;
