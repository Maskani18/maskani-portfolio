// MASKANI — Copy About (DL-015).
//
// Lead diadaptasi dari CV Professional Summary (versi Indonesia).
// Tiga frasa bergaris underline (C-07). Chip C-08.
// Istilah teknis tetap English.

import type { Profile } from "./types";

export const about = {
  lead: "Fresh Graduate D4 Rekayasa Perangkat Lunak dari Politeknik Negeri Indramayu dengan pengalaman praktik di bidang IT Support. Terbiasa melakukan troubleshooting hardware dan software, konfigurasi jaringan dengan MikroTik, serta pengujian aplikasi melalui manual testing dan User Acceptance Testing. Saya juga membangun antarmuka frontend dengan React dan Tailwind CSS.",
  highlights: [
    "troubleshooting hardware dan software",
    "konfigurasi jaringan dengan MikroTik",
    "pengujian aplikasi melalui manual testing dan User Acceptance Testing",
  ],
  chip: "D4 Rekayasa Perangkat Lunak · Politeknik Negeri Indramayu · IPK 3.55/4.00",
} as const;

export type _AboutProfileRef = Profile;
