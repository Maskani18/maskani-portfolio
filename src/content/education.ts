import type { EducationBlock } from "./types";

export const education: EducationBlock = {
  degree: "D4 Rekayasa Perangkat Lunak",
  school: "Politeknik Negeri Indramayu",
  period: "2022 – 2026",
  gpa: "3.55/4.00",
  images: {
    school: {
      src: "/media/school.webp",
      alt: "Gedung Politeknik Negeri Indramayu",
    },
  },
  certifications: [
    {
      id: "rh124",
      name: "Red Hat System Administration I (RH124)",
      issuer: "Red Hat Training and Certification",
      period: "Mei 2024",
      note: "Certificate of Attendance",
      description:
        "Sertifikat ini diberikan sebagai bukti partisipasi dalam pelatihan Red Hat System Administration I (RH124) yang diselenggarakan oleh Red Hat Training and Certification. Pelatihan ini berfokus pada pengenalan administrasi sistem Linux menggunakan Red Hat Enterprise Linux (RHEL).",
      materials: [
        "Pengenalan lingkungan Red Hat Enterprise Linux.",
        "Penggunaan command line Linux.",
        "Pengelolaan file dan direktori.",
        "Manajemen pengguna dan grup.",
        "Pengelolaan izin akses file.",
        "Administrasi dasar sistem Linux.",
      ],
      images: [
        {
          src: "/media/redhat.webp",
          alt: "Sertifikat Red Hat",
          label: "Halaman 1",
        },
      ],
    },
    {
      id: "vsga",
      name: "Junior Network Administrator",
      issuer: "Vocational School Graduate Academy (VSGA) · KOMINFO",
      period: "Jun – Jul 2023",
      note: "90 Jam Pelatihan",
      description:
        "Pelatihan Junior Network Administrator merupakan bagian dari program Vocational School Graduate Academy (VSGA) dalam Digital Talent Scholarship yang diselenggarakan oleh KOMINFO. Pelatihan ini berfokus pada keterampilan dasar administrasi jaringan komputer, mulai dari perancangan topologi hingga konfigurasi dan pengelolaan konektivitas jaringan.",
      materials: [
        "Merancang topologi dan pengalamatan jaringan.",
        "Melakukan instalasi serta konfigurasi jaringan nirkabel.",
        "Mengonfigurasi perangkat switch.",
        "Memahami routing dalam satu autonomous system.",
        "Memahami routing antar-autonomous system.",
        "Melakukan praktik konfigurasi dan pengujian konektivitas jaringan.",
      ],
      images: [
        {
          src: "/media/vsga-1.webp",
          alt: "Sertifikat VSGA Halaman 1",
          label: "Halaman 1",
        },
        {
          src: "/media/vsga-2.webp",
          alt: "Sertifikat VSGA Halaman 2",
          label: "Halaman 2",
        },
        {
          src: "/media/vsga-3.webp",
          alt: "Sertifikat VSGA Halaman 3",
          label: "Halaman 3",
        },
      ],
    },
  ],
  organization: {
    role: "Ketua Divisi Riset dan Teknologi",
    name: "Himpunan Mahasiswa Teknik Informatika",
    period: "Jul 2023 – Jul 2024",
    description: "Politeknik Negeri Indramayu · 1 tahun 1 bulan",
    responsibilities: [
      "Memimpin Divisi Riset dan Teknologi yang membawahi dua subdivisi, Study Club dan Kompetisi, dengan 13 anggota.",
      "Bertanggung jawab atas perencanaan, pelaksanaan, dan evaluasi 8 program kerja selama satu periode kepengurusan.",
      "Mengoordinasikan anggota melalui pembagian tugas dan pemantauan pelaksanaan kegiatan untuk memastikan setiap program kerja berjalan sesuai rencana.",
      "Merancang dan melaksanakan kegiatan pengembangan wawasan serta kompetensi mahasiswa di bidang akademik.",
      "Memfasilitasi kegiatan melalui program Study Club dan Kompetisi untuk meningkatkan soft skill mahasiswa.",
    ],
    images: [
      { src: "/media/hmti-1.webp", alt: "Foto Organisasi 1", label: "Foto 1" },
      { src: "/media/hmti-2.webp", alt: "Foto Organisasi 2", label: "Foto 2" },
      { src: "/media/hmti-3.webp", alt: "Foto Organisasi 3", label: "Foto 3" },
      { src: "/media/hmti-4.webp", alt: "Foto Organisasi 4", label: "Foto 4" },
      { src: "/media/hmti-5.webp", alt: "Foto Organisasi 5", label: "Foto 5" },
    ],
  },
};
