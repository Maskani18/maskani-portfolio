// MASKANI — Data profil (§2.1, §5.3 C-03, §5.4).
//
// Email disimpan terpecah (K-18). GitHub disembunyikan sampai URL ada.
// Tipe dibiarkan melebar via `satisfies Profile` (tanpa `as const`) agar
// field opsional (github?) tetap opsional saat dibaca komponen.

import type { Profile } from "./types";

export const profile: Profile = {
  name: "MASKANI",
  fields: ["IT SUPPORT", "QA", "FRONTEND"],
  location: "Indramayu, West Java",
  locationShort: "INDRAMAYU",
  status: "Open to work",
  emailParts: { local: "Maskani180104", domain: "gmail.com" },
  linkedin: "https://www.linkedin.com/in/mas-kani18",
  cvPath: "/cv/Maskani-CV.pdf",
};
