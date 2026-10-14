// MASKANI — Data skills (§2.4, DL-016).
//
// Lima kategori, urutan tetap. MikroTik tepat sekali (CG-11).
// Setiap item memiliki ikon monokrom (lihat SkillIcon.tsx).

import type { SkillGroup } from "./types";

export const skills: readonly SkillGroup[] = [
  {
    label: "IT Support",
    items: [
      { icon: "troubleshoot", label: "Troubleshooting Hardware & Software" },
      { icon: "device-install", label: "Instalasi & Konfigurasi Perangkat" },
      { icon: "maintenance", label: "Hardware Maintenance" },
      { icon: "support", label: "Technical Support" },
    ],
    evidence: "PT Dirgantara Indonesia",
  },
  {
    label: "Networking",
    items: [
      { icon: "networking", label: "Computer Networking" },
      { icon: "network-admin", label: "Basic Network Administration" },
      { icon: "mikrotik", label: "MikroTik" },
      { icon: "network-monitoring", label: "Network Monitoring" },
      { icon: "proxy", label: "Proxy" },
      { icon: "dns", label: "DNS" },
    ],
    evidence: "PT Dirgantara Indonesia · VSGA",
  },
  {
    label: "Software Quality Assurance",
    items: [
      { icon: "manual-testing", label: "Manual Testing" },
      { icon: "functional-testing", label: "Functional Testing" },
      { icon: "uat", label: "User Acceptance Testing (UAT)" },
      { icon: "test-case", label: "Test Case Design" },
      { icon: "bug-report", label: "Bug Reporting" },
      { icon: "retesting", label: "Retesting" },
      { icon: "test-doc", label: "Test Documentation" },
    ],
    evidence: "PT Qtasnim Digital Teknologi",
  },
  {
    label: "Frontend & Development",
    items: [
      { icon: "react", label: "React.js" },
      { icon: "tailwind", label: "Tailwind CSS" },
      { icon: "laravel", label: "Laravel" },
      { icon: "php", label: "PHP" },
      { icon: "rest-api", label: "REST API (Axios)" },
    ],
    evidence: "Diskominfo Indramayu",
  },
  {
    label: "Tools & Documentation",
    items: [
      { icon: "trello", label: "Trello" },
      { icon: "excel", label: "Microsoft Excel" },
      { icon: "word", label: "Microsoft Word" },
      { icon: "documentation", label: "Technical Documentation" },
    ],
    evidence: "",
  },
];
