// MASKANI — Data pengalaman (§2.2).
// Terurut terbaru dulu (CG-10). `details` opsional (PF-05 pending).

import type { ExperienceItem } from "./types";

export const experience: readonly ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    org: "Diskominfo Kabupaten Indramayu",
    period: { from: "Oct 2025", to: "Dec 2025" },
    summary:
      "Built the SIDALEKAS interface with React.js and Tailwind CSS: CRUD, search, filters, form validation and REST API integration.",
  },
  {
    role: "QA Intern",
    org: "PT Qtasnim Digital Teknologi",
    period: { from: "Jul 2025", to: "Oct 2025" },
    summary:
      "Ran manual and user acceptance tests, documented bugs, retested fixes and coordinated findings with developers.",
  },
  {
    role: "IT Support Intern",
    org: "PT Dirgantara Indonesia (Persero)",
    period: { from: "Oct 2019", to: "Jan 2020" },
    summary:
      "Troubleshot hardware and software, configured Windows, printers and MikroTik-based networks, and maintained computers and CCTV.",
  },
];
