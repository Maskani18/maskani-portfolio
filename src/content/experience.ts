// MASKANI — Data pengalaman (§2.2, DL-015, VA-17).
import type { ExperienceItem } from "./types";

export const experience = {
  items: [
    {
      id: "frontend-developer",
      role: "Frontend Developer Intern",
      org: "Diskominfo Kabupaten Indramayu",
      period: { from: "Okt 2025", to: "Des 2025" },
      summary:
        "Mengembangkan antarmuka SIDALEKAS menggunakan React.js dan Tailwind CSS dengan tampilan responsif, serta membangun fitur pengelolaan data dan integrasi REST API menggunakan Axios.",
      icon: "code",
      techStack: ["React.js", "Tailwind CSS", "Axios", "REST API"],
      details: {
        description:
          "Mengembangkan antarmuka aplikasi SIDALEKAS (Sistem Informasi Data Lembaga Kesejahteraan Sosial) untuk mendukung pengelolaan data dengan antarmuka yang responsif dan mudah digunakan.",
        responsibilities: [
          "Mengembangkan antarmuka menggunakan React.js dan Tailwind CSS.",
          "Membangun fitur CRUD, pencarian, filter, dan validasi form.",
          "Mengintegrasikan REST API menggunakan Axios.",
          "Mengimplementasikan routing, hak akses berbasis peran, dan notifikasi pada proses pengelolaan data.",
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
      period: { from: "Jul 2025", to: "Okt 2025" },
      summary:
        "Melakukan manual testing, UAT, retesting, dokumentasi bug, dan koordinasi perbaikan bersama tim developer untuk memastikan fitur berjalan sesuai kebutuhan pengguna.",
      icon: "bug",
      techStack: ["Manual Testing", "UAT", "Bug Tracking", "Retesting"],
      details: {
        description:
          "Melakukan pengujian perangkat lunak untuk memeriksa kesesuaian fungsi aplikasi dengan spesifikasi dan kebutuhan pengguna, serta membantu memastikan perbaikan berjalan sesuai harapan.",
        responsibilities: [
          "Melakukan manual testing berdasarkan spesifikasi dan skenario pengujian.",
          "Menjalankan User Acceptance Testing (UAT) dan mencatat hasil pengujian.",
          "Mengidentifikasi, mendokumentasikan, dan melaporkan bug.",
          "Melakukan retesting setelah perbaikan dan berkoordinasi dengan tim developer.",
        ],
        competencies: [
          "Manual Testing",
          "UAT",
          "Bug Reporting",
          "Retesting",
          "Dokumentasi QA",
        ],
      },
    },
    {
      id: "it-support",
      role: "IT Support Intern",
      org: "PT Dirgantara Indonesia (Persero)",
      period: { from: "Okt 2019", to: "Jan 2020" },
      summary:
        "Menangani troubleshooting perangkat, instalasi dan konfigurasi Windows, printer, jaringan (MikroTik), serta pemeliharaan perangkat komputer dan CCTV untuk mendukung kelancaran operasional.",
      icon: "monitor",
      techStack: ["Windows", "Networking", "MikroTik", "Troubleshooting"],
      details: {
        description:
          "Mendukung kelancaran operasional teknologi melalui penanganan kendala perangkat komputer, sistem operasi, printer, jaringan, dan perangkat pendukung.",
        responsibilities: [
          "Melakukan troubleshooting hardware dan software serta instalasi Windows.",
          "Menginstal dan mengonfigurasi printer serta perangkat pendukung.",
          "Menangani jaringan, proxy, konektivitas, dan konfigurasi MikroTik.",
          "Melakukan pemeriksaan serta pemeliharaan komputer dan sistem CCTV.",
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
    alt: "Foto Maskani saat bekerja",
  },
} as const;
