// MASKANI — Copy About (C-06, C-07, C-08).
import type { Profile } from "./types";

export const about = {
  lead: "Software Engineering graduate from Politeknik Negeri Indramayu with hands-on experience in IT support and software QA. I troubleshoot hardware and software, configure networks with MikroTik, and test applications through manual and user acceptance testing. I also build frontend interfaces with React and Tailwind CSS.",
  highlights: [
    "troubleshoot hardware and software",
    "configure networks with MikroTik",
    "test applications through manual and user acceptance testing",
  ],
  chip: "D4 Software Engineering · Politeknik Negeri Indramayu · GPA 3.55/4.00",
} as const;

export type _AboutProfileRef = Profile;
