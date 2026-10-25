import type { EducationBlock } from "../types";

export const education: EducationBlock = {
  degree: "D4 Software Engineering",
  school: "Politeknik Negeri Indramayu",
  period: "2022 – 2026",
  gpa: "3.55/4.00",
  images: {
    school: {
      src: "/media/school.webp",
      alt: "Politeknik Negeri Indramayu Building",
    },
  },
  certifications: [
    {
      id: "rh124",
      name: "Red Hat System Administration I (RH124)",
      issuer: "Red Hat Training and Certification",
      period: "May 2024",
      note: "Certificate of Attendance",
      description:
        "This certificate is given as proof of participation in the Red Hat System Administration I (RH124) training organized by Red Hat Training and Certification. This training focuses on introducing Linux system administration using Red Hat Enterprise Linux (RHEL).",
      materials: [
        "Introduction to the Red Hat Enterprise Linux environment.",
        "Using the Linux command line.",
        "File and directory management.",
        "User and group management.",
        "File access permission management.",
        "Basic Linux system administration.",
      ],
      images: [
        {
          src: "/media/redhat.webp",
          alt: "Red Hat Certificate",
          label: "Page 1",
        },
      ],
    },
    {
      id: "vsga",
      name: "Junior Network Administrator",
      issuer: "Vocational School Graduate Academy (VSGA) · KOMINFO",
      period: "Jun – Jul 2023",
      note: "90 Training Hours",
      description:
        "The Junior Network Administrator training is part of the Vocational School Graduate Academy (VSGA) program in the Digital Talent Scholarship organized by KOMINFO. This training focuses on basic computer network administration skills.",
      materials: [
        "Designing network topology and addressing.",
        "Installing and configuring wireless networks.",
        "Configuring switch devices.",
        "Understanding routing within a single autonomous system.",
        "Understanding routing between autonomous systems.",
        "Practicing network connectivity configuration and testing.",
      ],
      images: [
        {
          src: "/media/vsga-1.webp",
          alt: "VSGA Certificate Page 1",
          label: "Page 1",
        },
        {
          src: "/media/vsga-2.webp",
          alt: "VSGA Certificate Page 2",
          label: "Page 2",
        },
        {
          src: "/media/vsga-3.webp",
          alt: "VSGA Certificate Page 3",
          label: "Page 3",
        },
      ],
    },
  ],
  organization: {
    role: "Head of Research and Technology Division",
    name: "Informatics Engineering Student Association",
    period: "Jul 2023 – Jul 2024",
    description: "Politeknik Negeri Indramayu · 1 year 1 month",
    responsibilities: [
      "Led the Research and Technology Division overseeing two subdivisions, Study Club and Competition, with 13 members.",
      "Responsible for planning, executing, and evaluating 8 work programs during one management period.",
      "Coordinated members through task division and activity monitoring to ensure every work program ran according to plan.",
      "Designed and executed activities to develop students' insight and competence in the academic field.",
      "Facilitated non-academic activities through the Study Club and Competition programs to improve members' soft skills.",
    ],
    images: [
      {
        src: "/media/hmti-1.webp",
        alt: "Organization Photo 1",
        label: "Photo 1",
      },
      {
        src: "/media/hmti-2.webp",
        alt: "Organization Photo 2",
        label: "Photo 2",
      },
      {
        src: "/media/hmti-3.webp",
        alt: "Organization Photo 3",
        label: "Photo 3",
      },
      {
        src: "/media/hmti-4.webp",
        alt: "Organization Photo 4",
        label: "Photo 4",
      },
      {
        src: "/media/hmti-5.webp",
        alt: "Organization Photo 5",
        label: "Photo 5",
      },
    ],
  },
};
