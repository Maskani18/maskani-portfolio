import type { ExperienceItem } from "../types";

export const experience = {
  items: [
    {
      id: "frontend-developer",
      role: "Frontend Developer Intern",
      org: "Diskominfo Indramayu Regency",
      period: { from: "Oct 2025", to: "Dec 2025" },
      summary:
        "Developed the SIDALEKAS interface using React.js and Tailwind CSS with a responsive design, and built data management features and REST API integration using Axios.",
      icon: "code",
      techStack: ["React.js", "Tailwind CSS", "Axios", "REST API"],
      details: {
        description:
          "Developed the SIDALEKAS (Social Welfare Institution Data Information System) application interface to support data management with a responsive and user-friendly interface.",
        responsibilities: [
          "Developed the interface using React.js and Tailwind CSS.",
          "Built CRUD features, search, filter, and form validation.",
          "Integrated REST API using Axios.",
          "Implemented routing, role-based access control, and notifications in the data management process.",
        ],
        competencies: [
          "React.js",
          "Tailwind CSS",
          "Axios",
          "REST API",
          "CRUD",
          "Routing",
        ],
      },
    },
    {
      id: "qa-intern",
      role: "Software Quality Assurance Intern",
      org: "PT Qtasnim Digital Teknologi",
      period: { from: "Jul 2025", to: "Oct 2025" },
      summary:
        "Performed manual testing, UAT, retesting, bug documentation, and coordinated fixes with the developer team to ensure features ran according to user needs.",
      icon: "bug",
      techStack: ["Manual Testing", "UAT", "Bug Tracking", "Retesting"],
      details: {
        description:
          "Performed software testing to check the suitability of application functions with specifications and user needs, and helped ensure fixes ran as expected.",
        responsibilities: [
          "Performed manual testing based on specifications and test scenarios.",
          "Executed User Acceptance Testing (UAT) and recorded test results.",
          "Identified, documented, and reported bugs.",
          "Performed retesting after fixes and coordinated with the developer team.",
        ],
        competencies: [
          "Manual Testing",
          "UAT",
          "Bug Reporting",
          "Retesting",
          "QA Documentation",
        ],
      },
    },
    {
      id: "it-support",
      role: "IT Support Intern",
      org: "PT Dirgantara Indonesia (Persero)",
      period: { from: "Oct 2019", to: "Jan 2020" },
      summary:
        "Handled device troubleshooting, Windows installation and configuration, printers, networking (MikroTik), and computer and CCTV maintenance to support smooth operations.",
      icon: "monitor",
      techStack: ["Windows", "Networking", "MikroTik", "Troubleshooting"],
      details: {
        description:
          "Supported the smooth operation of technology by handling computer device, operating system, printer, network, and supporting device issues.",
        responsibilities: [
          "Performed hardware and software troubleshooting and Windows installation.",
          "Installed and configured printers and supporting devices.",
          "Handled networking, proxies, connectivity, and MikroTik configuration.",
          "Performed computer checks and maintenance as well as CCTV systems.",
        ],
        competencies: [
          "Hardware",
          "Windows",
          "Printer",
          "Networking",
          "MikroTik",
          "Troubleshooting",
          "CCTV",
        ],
      },
    },
  ] as readonly ExperienceItem[],
  photo: {
    src: "/portrait/experience.webp",
    alt: "Maskani working photo",
  },
} as const;
