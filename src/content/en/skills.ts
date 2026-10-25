import type { SkillGroup } from "../types";

export const skills: readonly SkillGroup[] = [
  {
    label: "IT Support",
    evidence: "PT DIRGANTARA INDONESIA",
    items: [
      {
        icon: "Wrench",
        label: "Troubleshooting Hardware & Software",
        description: "Handling hardware and software issues.",
      },
      {
        icon: "Monitor",
        label: "Device Installation & Configuration",
        description: "Windows, printers, and other supporting devices.",
      },
      {
        icon: "Network",
        label: "Network & Connectivity",
        description: "Network configuration, proxy, and connectivity.",
      },
      {
        icon: "Headset",
        label: "Technical Support",
        description: "Providing technical support and device maintenance.",
      },
    ],
  },
  {
    label: "Networking",
    evidence: "PT DIRGANTARA INDONESIA",
    items: [
      {
        icon: "Network",
        label: "Computer Networking",
        description: "Network and supporting device configuration.",
      },
      {
        icon: "Server",
        label: "Basic Machine Administration",
        description: "System and server device management.",
      },
      {
        icon: "Router",
        label: "MikroTik",
        description: "Router configuration and bandwidth management.",
      },
      {
        icon: "Activity",
        label: "Network Monitoring",
        description: "Periodic network and device monitoring.",
      },
      {
        icon: "Wifi",
        label: "Proxy & DNS",
        description: "Proxy configuration and DNS management.",
      },
    ],
  },
  {
    label: "Software Quality Assurance",
    evidence: "PT QTASNIM DIGITAL TEKNOLOGI",
    items: [
      {
        icon: "ClipboardCheck",
        label: "Manual Testing",
        description: "Feature testing according to scenarios.",
      },
      {
        icon: "FileCode",
        label: "Functional Testing",
        description: "Ensuring application functions run well.",
      },
      {
        icon: "Users",
        label: "User Acceptance Testing (UAT)",
        description: "Validation with end users.",
      },
      {
        icon: "Bug",
        label: "Test Case Design",
        description: "Compiling test scenarios and cases.",
      },
      {
        icon: "RefreshCw",
        label: "Bug Reporting",
        description: "Documenting and reporting bugs.",
      },
    ],
  },
  {
    label: "Frontend & Development",
    evidence: "DISKOMINFO INDRAMAYU",
    items: [
      {
        icon: "Atom",
        label: "React.js",
        description: "Building web application interfaces.",
      },
      {
        icon: "Wind",
        label: "Tailwind CSS",
        description: "Responsive and modern styling.",
      },
      {
        icon: "Code2",
        label: "Axios",
        description: "Data integration from REST API.",
      },
      {
        icon: "Cloud",
        label: "REST API",
        description: "Connecting frontend with backend.",
      },
      {
        icon: "Milestone",
        label: "Routing",
        description: "Page navigation management.",
      },
      {
        icon: "ShieldCheck",
        label: "Form Validation",
        description: "User input and form validation.",
      },
    ],
  },
  {
    label: "Tools & Documentation",
    evidence: "PERSONAL & WORK",
    items: [
      {
        icon: "code",
        label: "Trello",
        description: "Task management and work progress monitoring.",
      },
      {
        icon: "GitBranch",
        label: "Git & GitHub",
        description: "Version control and project collaboration.",
      },
      {
        icon: "Table",
        label: "Microsoft Excel",
        description: "Data processing and reporting.",
      },
      {
        icon: "FileText",
        label: "Microsoft Word",
        description: "Documentation and report writing.",
      },
      {
        icon: "BookOpen",
        label: "Technical Documentation",
        description: "Writing technical documentation and workflows.",
      },
    ],
  },
];
