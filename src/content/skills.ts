// MASKANI — Data skills (§2.4).
// Lima kategori, urutan tetap. MikroTik tepat sekali (CG-11).

import type { SkillGroup } from "./types";

export const skills: readonly SkillGroup[] = [
  {
    label: "IT Support",
    items: [
      "Hardware and Software Troubleshooting",
      "Device Installation and Configuration",
      "Hardware Maintenance",
      "Technical Support",
    ],
    evidence: "PT Dirgantara Indonesia",
  },
  {
    label: "Networking",
    items: [
      "Computer Networking",
      "Basic Network Administration",
      "MikroTik",
      "Network Monitoring",
      "Proxy",
      "DNS",
    ],
    evidence: "PT Dirgantara Indonesia · VSGA",
  },
  {
    label: "QA and Testing",
    items: [
      "Manual Testing",
      "Functional Testing",
      "User Acceptance Testing (UAT)",
      "Test Case Design",
      "Bug Reporting",
      "Retesting",
      "Test Documentation",
    ],
    evidence: "PT Qtasnim Digital Teknologi",
  },
  {
    label: "Frontend and Development",
    items: ["React.js", "Tailwind CSS", "Laravel", "PHP", "REST API (Axios)"],
    evidence: "Diskominfo Indramayu",
  },
  {
    label: "Tools and Documentation",
    items: [
      "Trello",
      "Microsoft Excel",
      "Microsoft Word",
      "Technical Documentation",
    ],
    evidence: "",
  },
];
