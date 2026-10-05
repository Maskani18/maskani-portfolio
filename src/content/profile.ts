// MASKANI — Data profil (§2.1, §5.3 C-03, §5.4).
//
// Email disimpan terpecah (K-18); string utuh tidak ada di content.
// GitHub disembunyikan sampai URL ada (PF-06); dibiarkan `undefined`.
// Nilai literal mengikuti Final Specification; jangan tambah klaim.

import type { Profile } from "./types";

export const profile = {
  name: "MASKANI",
  fields: ["IT SUPPORT", "QA", "FRONTEND"],
  // Data lengkap; Hero menampilkan bentuk pendek "INDRAMAYU" (C-03).
  location: "Indramayu, West Java",
  status: "Open to work",
  emailParts: { local: "Maskani180104", domain: "gmail.com" },
  linkedin: "https://www.linkedin.com/in/mas-kani18",
  // github: belum ada URL (PF-06).
  cvPath: "/cv/Maskani-CV.pdf",
} as const satisfies Profile;
