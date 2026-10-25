import type { Project } from "@/content/types";

export const kmetric: Project = {
  slug: "kmetric",
  index: "02",
  title: "KMETRIC",
  subtitle: "Monitoring Trafik Bandwidth Jaringan Router MikroTik",
  role: "Skripsi",
  org: "Politeknik Negeri Indramayu",
  period: "Feb 2026 – Jul 2026",
  stack: [
    "Laravel 11",
    "React.js",
    "PostgreSQL",
    "MikroTik API",
    "K-Means Clustering",
    "Tailwind CSS",
  ],
  context: {
    short:
      "Sistem monitoring trafik jaringan berbasis web yang terintegrasi dengan API MikroTik untuk mendeteksi anomali secara real-time menggunakan K-Means Clustering (K=3), mencapai tingkat akurasi 98,33%.",
  },
  features: [
    {
      title: "Realtime Dashboard",
      description: "Visualisasi laju trafik RX dan TX secara langsung.",
      icon: "monitor",
    },
    {
      title: "Deteksi Anomali",
      description:
        "Klasterisasi trafik menggunakan K-Means (Normal, Mencurigakan, Anomali).",
      icon: "shield",
    },
    {
      title: "Audit Trail (Log Insiden)",
      description: "Pencatatan dan penanganan riwayat anomali jaringan.",
      icon: "database",
    },
    {
      title: "Pembaruan Model",
      description: "Fitur retrain model K-Means dengan data trafik terbaru.",
      icon: "bell",
    },
  ],
  screenshots: [
    {
      id: "01",
      title: "Dashboard Monitoring",
      description:
        "Antarmuka utama pemantauan trafik jaringan secara real-time.",
      src: "/projects/kmetric/dashboard-grafik.webp",
      alt: "Tampilan Dashboard KMETRIC",
    },
    {
      id: "02",
      title: "Log Insiden",
      description:
        "Halaman audit trail untuk memantau dan menyelesaikan insiden anomali.",
      src: "/projects/kmetric/log-insiden.webp",
      alt: "Tampilan Log Insiden KMETRIC",
    },
    {
      id: "03",
      title: "Konfigurasi Router",
      description:
        "Formulir integrasi API untuk menghubungkan sistem dengan Router MikroTik.",
      src: "/projects/kmetric/konfigurasi-router.webp",
      alt: "Tampilan Konfigurasi Router KMETRIC",
    },
  ],
  roleDetails: [
    "Merancang dan mengembangkan backend menggunakan Laravel 11 dan PostgreSQL.",
    "Membangun antarmuka dashboard interaktif menggunakan React.js dan Tailwind CSS.",
    "Mengintegrasikan RouterOS API untuk pengambilan data trafik setiap 3 menit.",
    "Mengimplementasikan algoritma K-Means Clustering dan Euclidean Distance untuk deteksi anomali.",
  ],
  closingQuote:
    "Sistem ini membantu administrator jaringan memantau lalu lintas data dan mendeteksi anomali secara dini, menjaga stabilitas infrastruktur jaringan dengan akurasi tinggi.",
};
