import type { SkillGroup } from "./types";

export const skills: readonly SkillGroup[] = [
  {
    label: "IT Support",
    evidence: "PT DIRGANTARA INDONESIA",
    items: [
      {
        icon: "Wrench",
        label: "Troubleshooting Hardware & Software",
        description: "Menangani kendala perangkat keras dan lunak.",
      },
      {
        icon: "Monitor",
        label: "Instalasi & Konfigurasi Perangkat",
        description: "Windows, printer, dan perangkat pendukung lainnya.",
      },
      {
        icon: "Network",
        label: "Network & Connectivity",
        description: "Konfigurasi jaringan, proxy, dan konektivitas.",
      },
      {
        icon: "Headset",
        label: "Technical Support",
        description: "Memberikan dukungan teknis dan pemeliharaan perangkat.",
      },
    ],
  },
  {
    label: "Networking",
    evidence: "PT DIRGANTARA INDONESIA ",
    items: [
      {
        icon: "Network",
        label: "Computer Networking",
        description: "Konfigurasi jaringan dan perangkat pendukung.",
      },
      {
        icon: "Server",
        label: "Basic Machine Administration",
        description: "Pengelolaan sistem dan perangkat server.",
      },
      {
        icon: "Router",
        label: "MikroTik",
        description: "Konfigurasi router dan manajemen bandwidth.",
      },
      {
        icon: "Activity",
        label: "Network Monitoring",
        description: "Pemantauan jaringan dan perangkat secara berkala.",
      },
      {
        icon: "Wifi",
        label: "Proxy & DNS",
        description: "Konfigurasi proxy dan pengelolaan DNS.",
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
        description: "Pengujian fitur sesuai skenario.",
      },
      {
        icon: "FileCode",
        label: "Functional Testing",
        description: "Memastikan fungsi aplikasi berjalan dengan baik.",
      },
      {
        icon: "Users",
        label: "User Acceptance Testing (UAT)",
        description: "Validasi bersama pengguna akhir.",
      },
      {
        icon: "Bug",
        label: "Test Case Design",
        description: "Menyusun skenario dan kasus pengujian.",
      },
      {
        icon: "RefreshCw",
        label: "Bug Reporting",
        description: "Mendokumentasikan dan melaporkan bug.",
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
        description: "Membangun antarmuka aplikasi web.",
      },
      {
        icon: "Wind",
        label: "Tailwind CSS",
        description: "Styling responsif dan modern.",
      },
      {
        icon: "Code2",
        label: "Axios",
        description: "Integrasi data dari REST API.",
      },
      {
        icon: "Cloud",
        label: "REST API",
        description: "Menghubungkan frontend dengan backend.",
      },
      {
        icon: "Milestone",
        label: "Routing",
        description: "Manajemen navigasi antar halaman.",
      },
      {
        icon: "ShieldCheck",
        label: "Form Validation",
        description: "Validasi input dan formulir pengguna.",
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
        description: "Manajemen tugas dan pemantauan progres pekerjaan.",
      },
      {
        icon: "GitBranch",
        label: "Git & GitHub",
        description: "Version control dan kolaborasi proyek.",
      },
      {
        icon: "Table",
        label: "Microsoft Excel",
        description: "Pengolahan data dan laporan.",
      },
      {
        icon: "FileText",
        label: "Microsoft Word",
        description: "Dokumentasi dan penyusunan laporan.",
      },
      {
        icon: "BookOpen",
        label: "Technical Documentation",
        description: "Menulis dokumentasi teknis dan alur kerja.",
      },
    ],
  },
];
