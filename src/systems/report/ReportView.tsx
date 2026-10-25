"use client";

import Image from "next/image";
import {
  Building2,
  Calendar,
  User,
  Atom,
  Wind,
  Globe,
  Server,
  Route,
  ShieldCheck,
  Code2,
} from "lucide-react";
import type { JSX } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { projects as projectsId } from "@/content/projects";
import { projectsEn } from "@/content/en/projects";
import type { Project } from "@/content/types";

// --- IKON FITUR ---
const FeatureIcon = ({ name }: { name: string }) => {
  // ... (biarkan kode FeatureIcon tetap sama)
  const icons: Record<string, JSX.Element> = {
    user: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    database: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    shield: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    bell: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    monitor: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  };
  return icons[name] || icons.monitor;
};

const getTechIcon = (tech: string) => {
  const className = "text-accent";
  const size = 12;
  switch (tech.toLowerCase()) {
    case "react.js":
      return <Atom size={size} className={className} />;
    case "tailwind css":
      return <Wind size={size} className={className} />;
    case "axios":
      return <Globe size={size} className={className} />;
    case "rest api":
      return <Server size={size} className={className} />;
    case "react router":
      return <Route size={size} className={className} />;
    case "jwt / auth":
      return <ShieldCheck size={size} className={className} />;
    case "laravel 11":
      return <Server size={size} className={className} />;
    case "postgresql":
      return <Globe size={size} className={className} />;
    case "mikrotik api":
      return <Route size={size} className={className} />;
    case "k-means clustering":
      return <Code2 size={size} className={className} />;
    default:
      return <Code2 size={size} className={className} />;
  }
};

export function ReportView({ project: initialProject }: { project: Project }) {
  const { lang } = useLanguage();

  // Ambil data project yang sesuai dengan bahasa
  const projectList = lang === "id" ? projectsId : projectsEn;
  const project =
    projectList.find((p) => p.slug === initialProject.slug) || initialProject;

  const mainShot = project.screenshots?.[0];
  const otherShots = project.screenshots?.slice(1) || [];

  if (!mainShot) return null;

  return (
    <article className="relative w-full bg-[#090B0D] pb-24 pt-8">
      {/* ... Background Grid ... */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[var(--gutter)]">
        {/* Header Project */}
        <header className="mb-12 border-b border-accent/20 pb-8">
          <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent">
            <span className="size-2 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)]" />
            [ {lang === "id" ? "Laporan Proyek" : "Project Report"}{" "}
            {project.index} ]
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,6rem)] uppercase leading-none text-text-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-text-2 md:text-2xl">
            {project.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase text-text-2 md:gap-6 md:text-sm">
            <span className="flex items-center gap-2 rounded border border-accent/20 bg-accent/5 px-2.5 py-1.5">
              <Building2 size={14} className="text-accent" /> {project.org}
            </span>
            <span className="flex items-center gap-2 rounded border border-accent/20 bg-accent/5 px-2.5 py-1.5">
              <Calendar size={14} className="text-accent" /> {project.period}
            </span>
            <span className="flex items-center gap-2 rounded border border-accent/20 bg-accent/5 px-2.5 py-1.5">
              <User size={14} className="text-accent" /> {project.role}
            </span>
          </div>
        </header>

        {/* Galeri Utama */}
        <section className="mb-12 perspective-[1000px]">
          <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-accent">
            <span>
              {"//"} {mainShot.id} {mainShot.title}
            </span>
            <span className="text-text-3">
              {lang === "id" ? "Tampilan Utama" : "Main View"}
            </span>
          </div>

          <div
            data-tilt
            className="group relative transform-style-3d will-change-transform"
          >
            <div className="absolute -inset-2 z-0 rounded-xl bg-accent/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-accent/20 bg-[#090B0D] p-2 shadow-2xl transition-colors duration-300 group-hover:border-accent/50 md:p-4">
              <div className="pointer-events-none absolute left-2 top-2 size-6 border-l-2 border-t-2 border-accent md:left-4 md:top-4" />
              <div className="pointer-events-none absolute right-2 top-2 size-6 border-r-2 border-t-2 border-accent md:right-4 md:top-4" />
              <div className="pointer-events-none absolute bottom-2 left-2 size-6 border-b-2 border-l-2 border-accent md:bottom-4 md:left-4" />
              <div className="pointer-events-none absolute bottom-2 right-2 size-6 border-b-2 border-r-2 border-accent md:bottom-4 md:right-4" />
              <Image
                src={mainShot.src}
                alt={mainShot.alt}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Grid Konten */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* KIRI: Teks Informasi */}
          <div className="flex flex-col gap-8">
            <section className="rounded-xl border border-accent/10 bg-[#090B0D]/50 p-5 backdrop-blur-sm md:p-6">
              <h2 className="mb-4 flex items-center gap-3 font-display text-xl uppercase text-text-1">
                <span className="text-accent">{"//"}</span>{" "}
                {lang === "id" ? "Tentang Proyek" : "About Project"}
              </h2>
              <p className="text-sm leading-relaxed text-text-2 md:text-base">
                {project.context.short}
              </p>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-3 font-display text-xl uppercase text-text-1">
                <span className="text-accent">{"//"}</span>{" "}
                {lang === "id" ? "Fitur Utama" : "Key Features"}
              </h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-3">
                {project.features?.map((f) => (
                  <div
                    key={f.title}
                    className="group flex flex-row items-start gap-3 rounded-lg border border-accent/20 bg-accent/5 p-3 transition-all hover:border-accent/40 hover:bg-accent/10 sm:flex-col sm:p-4"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded border border-accent/30 bg-[#090B0D] text-accent transition-transform group-hover:scale-110 sm:size-10">
                      <FeatureIcon name={f.icon} />
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-text-1 sm:text-xs">
                        {f.title}
                      </p>
                      <p className="mt-0.5 text-[0.65rem] leading-relaxed text-text-3 sm:mt-1 sm:text-[0.7rem]">
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-3 font-display text-xl uppercase text-text-1">
                <span className="text-accent">{"//"}</span> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1.5 rounded border border-accent/20 bg-[#090B0D] px-2.5 py-1.5 font-mono text-[0.65rem] uppercase text-text-2 md:px-3"
                  >
                    {getTechIcon(s)} {s}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* KANAN: Screenshots & Role */}
          <div className="flex flex-col gap-8">
            {otherShots.map((shot) => (
              <div key={shot.id} className="group flex flex-col gap-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                  <span className="opacity-50">[</span> {shot.id} / {shot.title}{" "}
                  <span className="opacity-50">]</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-accent/20 bg-[#090B0D] p-2 transition-colors group-hover:border-accent/50">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <p className="text-xs leading-relaxed text-text-3">
                  {shot.description}
                </p>
              </div>
            ))}

            <div className="relative mt-2 overflow-hidden rounded-xl border border-accent/20 bg-accent/5 p-5 md:p-6">
              <div className="pointer-events-none absolute left-0 top-0 size-4 border-l-2 border-t-2 border-accent" />
              <div className="pointer-events-none absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-accent" />

              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
                [ {lang === "id" ? "Detail Peran" : "Role Details"} ]
              </h3>
              <ul className="flex flex-col gap-3">
                {project.roleDetails?.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-text-2"
                  >
                    <span className="mt-0.5 font-mono text-accent">{`>`}</span>{" "}
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded border border-accent/20 bg-[#090B0D]/60 p-4">
                <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-widest text-accent opacity-70">
                  {"//"} {lang === "id" ? "Catatan Proyek" : "Project Note"}
                </p>
                <p className="text-xs italic leading-relaxed text-text-3 md:text-sm">
                  &ldquo;{project.closingQuote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
