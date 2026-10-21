// MASKANI — Copy About (DL-015, VA-17).
import type { Profile } from "./types";

export const about = {
  lead: "Fresh Graduate D4 Rekayasa Perangkat Lunak dari Politeknik Negeri Indramayu dengan pengalaman praktik di bidang IT Support. Memiliki kemampuan troubleshooting hardware dan software, instalasi dan konfigurasi komputer, Windows, printer, serta konfigurasi jaringan dan MikroTik. Terbiasa menangani kendala teknis, pemeliharaan perangkat, serta mendokumentasikan pekerjaan secara terstruktur. Pengalaman di bidang Quality Assurance turut memperkuat ketelitian dan problem solving. Berkomitmen mendukung kelancaran operasional teknologi di lingkungan kerja.",
  highlights: [
    "IT Support",
    "troubleshooting hardware",
    "software",
    "Windows",
    "MikroTik",
    "Quality Assurance",
    "problem solving",
  ],
  chip: "D4 REKAYASA PERANGKAT LUNAK · POLITEKNIK NEGERI INDRAMAYU · IPK 3.55/4.00",
  photo: {
    src: "/portrait/about.webp", // Pastikan path ini benar sesuai folder public kamu
    alt: "Foto Maskani",
  },
} as const;

export type _AboutProfileRef = Profile;
