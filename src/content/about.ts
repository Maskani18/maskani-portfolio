// MASKANI — Copy About (DL-015, V-1).
//
// Lead diadaptasi dari CV Professional Summary. Tiga frasa bergaris.
// Chip C-08. Foto About (8:7) untuk kartu MediaCard di section.

import type { Profile } from "./types";

export const about = {
  lead: "Fresh Graduate D4 Rekayasa Perangkat Lunak dari Politeknik Negeri Indramayu dengan pengalaman praktik di bidang IT Support. Terbiasa melakukan troubleshooting hardware dan software, konfigurasi jaringan dengan MikroTik, serta pengujian aplikasi melalui manual testing dan User Acceptance Testing. Saya juga membangun antarmuka frontend dengan React dan Tailwind CSS.",
  highlights: [
    "troubleshooting hardware dan software",
    "konfigurasi jaringan dengan MikroTik",
    "pengujian aplikasi melalui manual testing dan User Acceptance Testing",
  ],
  chip: "D4 Rekayasa Perangkat Lunak · Politeknik Negeri Indramayu · IPK 3.55/4.00",
  photo: {
    src: "/portrait/about.webp",
    alt: "Foto Maskani di depan kampus Politeknik Negeri Indramayu",
  },
} as const;

export type _AboutProfileRef = Profile;
