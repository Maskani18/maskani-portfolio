import type { Project } from "../../types";

export const sidalekasEn: Project = {
  slug: "sidalekas",
  index: "01",
  title: "SIDALEKAS",
  subtitle: "Social Welfare Institution Data Information System",
  role: "Frontend Developer Intern",
  org: "Diskominfo Indramayu Regency",
  period: "Oct 2025 – Dec 2025",
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
      "A web-based application developed to support data management for Social Welfare Institutions in Indramayu Regency. As a Frontend Developer Intern, I contributed to developing responsive interfaces, data management features, and submission and verification flows.",
  },
  features: [
    {
      title: "User Authentication",
      description: "Login with role-based access rights.",
      icon: "user",
    },
    {
      title: "Client Data Management",
      description: "CRUD, search, filter, form validation.",
      icon: "database",
    },
    {
      title: "Verification Submission",
      description: "Submission form and status tracking.",
      icon: "shield",
    },
    {
      title: "Notifications & Validation",
      description: "Real-time information and data validation.",
      icon: "bell",
    },
    {
      title: "Responsive Design",
      description: "Optimal on various devices.",
      icon: "monitor",
    },
  ],
  screenshots: [
    {
      id: "01",
      title: "Login",
      description:
        "User authentication page as the entry point to the SIDALEKAS system.",
      src: "/projects/sidalekas/login.webp",
      alt: "SIDALEKAS Login Display",
    },
    {
      id: "02",
      title: "Client Data",
      description:
        "Client data management interface with search, filter, and data management actions.",
      src: "/projects/sidalekas/data-klien.webp",
      alt: "Client Data Display",
    },
    {
      id: "03",
      title: "Verification Form",
      description:
        "Form to fill in and submit data in the institution verification process.",
      src: "/projects/sidalekas/form-verifikasi.webp",
      alt: "Verification Form Display",
    },
  ],
  roleDetails: [
    "Developed the interface using React.js and Tailwind CSS.",
    "Built CRUD, search, filter, and form validation features.",
    "Integrated REST API using Axios.",
    "Implemented routing, role-based access rights, and notifications.",
  ],
  closingQuote:
    "This application helps the process of managing and verifying social institution data in Indramayu to be faster, more accurate, and structured.",
};

export const kmetricEn: Project = {
  slug: "kmetric",
  index: "02",
  title: "KMETRIC",
  subtitle: "MikroTik Router Network Bandwidth Traffic Monitoring",
  role: "Full Stack Developer & Researcher",
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
      "A web-based network traffic monitoring system integrated with the MikroTik API to detect anomalies in real-time using K-Means Clustering (K=3), achieving 98.33% accuracy.",
  },
  features: [
    {
      title: "Realtime Dashboard",
      description: "Live RX and TX traffic rate visualization.",
      icon: "monitor",
    },
    {
      title: "Anomaly Detection",
      description:
        "Traffic clustering using K-Means (Normal, Suspicious, Anomaly).",
      icon: "shield",
    },
    {
      title: "Audit Trail (Incident Log)",
      description: "Recording and handling of network anomaly history.",
      icon: "database",
    },
    {
      title: "Model Retraining",
      description:
        "K-Means model retrain feature with the latest traffic data.",
      icon: "bell",
    },
  ],
  screenshots: [
    {
      id: "01",
      title: "Monitoring Dashboard",
      description: "Main interface for real-time network traffic monitoring.",
      src: "/projects/kmetric/dashboard-grafik.webp",
      alt: "KMETRIC Dashboard Display",
    },
    {
      id: "02",
      title: "Incident Log",
      description: "Audit trail page to monitor and resolve anomaly incidents.",
      src: "/projects/kmetric/log-insiden.webp",
      alt: "KMETRIC Incident Log Display",
    },
    {
      id: "03",
      title: "Router Configuration",
      description:
        "API integration form to connect the system with the MikroTik Router.",
      src: "/projects/kmetric/konfigurasi-router.webp",
      alt: "KMETRIC Router Configuration Display",
    },
  ],
  roleDetails: [
    "Designed and developed the backend using Laravel 11 and PostgreSQL.",
    "Built an interactive dashboard interface using React.js and Tailwind CSS.",
    "Integrated RouterOS API for traffic data retrieval every 3 minutes.",
    "Implemented K-Means Clustering and Euclidean Distance algorithms for anomaly detection.",
  ],
  closingQuote:
    "This system helps network administrators monitor data traffic and detect anomalies early, maintaining network infrastructure stability with high accuracy.",
};

export const projectsEn = [sidalekasEn, kmetricEn] as const;
