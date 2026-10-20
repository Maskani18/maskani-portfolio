import type { Project } from "@/content/types";

export const sidalekas: Project = {
  slug: "sidalekas",
  index: "01",
  title: "SIDALEKAS",
  subtitle: "Sistem Informasi Data Lembaga Kesejahteraan Sosial",
  role: "Frontend Developer Intern",
  org: "Diskominfo Kabupaten Indramayu",
  period: "Okt 2025 – Des 2025",
  stack: [
    "React.js",
    "Tailwind CSS",
    "Axios",
    "REST API",
    "React Router",
    "JWT / Auth",
  ],
  context: {
    short:
      "Aplikasi berbasis web yang dikembangkan untuk mendukung pengelolaan data Lembaga Kesejahteraan Sosial di Kabupaten Indramayu. Sebagai Frontend Developer Intern, saya berkontribusi dalam pengembangan antarmuka responsif, fitur pengelolaan data, serta alur pengajuan dan verifikasi.",
  },
  features: [
    {
      title: "Autentikasi Pengguna",
      description: "Login dengan hak akses berdasarkan peran.",
      icon: "user",
    },
    {
      title: "Pengelolaan Data Klien",
      description: "CRUD, pencarian, filter, validasi form.",
      icon: "database",
    },
    {
      title: "Pengajuan Verifikasi",
      description: "Form pengajuan dan pelacakan status.",
      icon: "shield",
    },
    {
      title: "Notifikasi & Validasi",
      description: "Informasi real-time dan validasi data.",
      icon: "bell",
    },
    {
      title: "Tampilan Responsif",
      description: "Optimal di berbagai perangkat.",
      icon: "monitor",
    },
  ],
  screenshots: [
    {
      id: "01",
      title: "Login",
      description:
        "Halaman autentikasi pengguna sebagai pintu masuk ke sistem SIDALEKAS.",
      src: "/projects/sidalekas/login.webp",
      alt: "Tampilan Login SIDALEKAS",
    },
    {
      id: "02",
      title: "Data Klien",
      description:
        "Antarmuka pengelolaan data klien dengan fitur pencarian, filter, dan aksi pengelolaan data.",
      src: "/projects/sidalekas/data-klien.webp",
      alt: "Tampilan Data Klien",
    },
    {
      id: "03",
      title: "Form Verifikasi",
      description:
        "Formulir untuk mengisi dan mengajukan data dalam proses verifikasi lembaga.",
      src: "/projects/sidalekas/form-verifikasi.webp",
      alt: "Tampilan Form Verifikasi",
    },
  ],
  roleDetails: [
    "Mengembangkan antarmuka menggunakan React.js dan Tailwind CSS.",
    "Membangun fitur CRUD, pencarian, filter, dan validasi formulir.",
    "Mengintegrasikan REST API menggunakan Axios.",
    "Mengimplementasikan routing, hak akses berbasis peran, serta notifikasi.",
  ],
  closingQuote:
    "Aplikasi ini membantu proses pengelolaan dan verifikasi data lembaga sosial di Indramayu agar lebih cepat, akurat, dan terstruktur.",
};
