"use client";

import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import { motion } from "motion/react";
import {
  Atom,
  Wind,
  Globe,
  Server,
  Route,
  ShieldCheck,
  Code2,
  User,
  Building2,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { projects as projId } from "@/content/projects";
import { projectsEn as projEn } from "@/content/en/projects";

import { SectionShell } from "@/components/layout/SectionShell";
import { getSection } from "@/content/sections";
import { Icon } from "@/components/ui/Icon";

// Fungsi untuk ikon tech stack
const getTechIcon = (tech: string) => {
  const className = "text-accent shrink-0";
  const size = 10;

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

export function Projects(): JSX.Element {
  const entry = getSection("projects");
  const { lang } = useLanguage();
  const projects = lang === "id" ? projId : projEn;

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      {/* Background Grid Halus */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)]">
        {/* HEADER SECTION */}
        <div className="mb-8 flex items-center gap-6 md:mb-12">
          <div className="flex items-center gap-4 font-mono text-[0.65rem] uppercase text-accent md:text-meta">
            <span className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)]" />
              {entry.number}
            </span>

            <span className="text-text-2">
              {"//"} {entry.label}
            </span>
          </div>

          <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        </div>

        {/* JUDUL BESAR SECTION PROJECTS */}
        <h2 className="mb-8 font-display text-[clamp(2rem,5vw,5rem)] uppercase leading-none text-text-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] md:mb-16">
          {lang === "id" ? "Proyek" : "Projects"}
        </h2>

        {/* GRID DAFTAR PROJECT */}
        <div className="grid grid-cols-2 gap-3 md:gap-12">
          {projects.map((project) => {
            const mainShot = project.screenshots[0];

            return (
              <motion.div
                key={project.slug}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="relative"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative flex h-full flex-col justify-between gap-3 rounded-lg border border-accent/20 bg-[#090B0D]/60 p-2 transition-all duration-500 hover:border-accent/50 hover:bg-accent/5 hover:shadow-[0_0_30px_rgba(138,164,255,0.1)] md:gap-6 md:rounded-xl md:p-6"
                  style={{
                    clipPath:
                      "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                >
                  {/* HUD Sudut Kartu */}
                  <div className="pointer-events-none absolute left-0 top-0 size-2 border-l-2 border-t-2 border-accent opacity-50 transition-opacity group-hover:opacity-100 md:size-4" />

                  <div className="pointer-events-none absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-accent opacity-50 transition-opacity group-hover:opacity-100 md:size-4" />

                  {/* Bagian Atas: Info + Gambar */}
                  <div className="flex flex-col gap-1.5 md:gap-4">
                    <div className="flex items-center gap-1 font-mono text-[0.5rem] uppercase text-accent md:gap-2 md:text-xs">
                      <span className="size-1 animate-pulse rounded-full bg-accent md:size-1.5" />

                      <span>
                        {project.index} / {project.title}
                      </span>
                    </div>

                    <h3 className="font-display text-[0.7rem] uppercase leading-tight text-text-1 sm:text-lg md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="line-clamp-2 text-[0.55rem] text-text-2 sm:text-xs md:line-clamp-none md:text-sm">
                      {project.subtitle}
                    </p>

                    {/* Gambar Utama */}
                    {mainShot && (
                      <div className="perspective-[1000px] mt-1 w-full md:mt-2">
                        <div
                          data-tilt
                          className="group/img relative w-full transform-style-3d will-change-transform"
                        >
                          <div className="relative aspect-[16/10] w-full overflow-hidden rounded border border-accent/20 bg-[#090B0D] p-0.5 shadow-lg transition-colors duration-300 group-hover/img:border-accent/50 md:rounded-lg md:p-2 md:shadow-2xl">
                            <Image
                              src={mainShot.src}
                              alt={mainShot.alt}
                              fill
                              className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                              sizes="(min-width: 768px) 50vw, 50vw"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bagian Bawah: Peran, Tempat, Tech Stack & Tombol */}
                  <div className="flex flex-col gap-2 border-t border-accent/10 pt-2 md:gap-4 md:pt-4">
                    {/* Peran & Tempat */}
                    <div className="flex flex-col gap-0.5 md:gap-1">
                      <span className="flex items-center gap-1 font-mono text-[0.5rem] uppercase tracking-widest text-text-3 md:text-[0.65rem]">
                        <User size={10} className="text-accent md:size-3" />
                        {project.role}
                      </span>

                      <span className="flex items-center gap-1 font-mono text-[0.5rem] uppercase tracking-widest text-text-3 md:text-[0.65rem]">
                        <Building2
                          size={10}
                          className="text-accent md:size-3"
                        />
                        {project.org}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 md:gap-1.5">
                      {project.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="flex items-center gap-1 rounded border border-accent/20 bg-[#090B0D] p-1 font-mono text-[0.5rem] uppercase text-text-2 md:px-2 md:py-1 md:text-[0.55rem]"
                          title={s}
                        >
                          {getTechIcon(s)}
                          <span className="hidden md:inline">{s}</span>
                        </span>
                      ))}

                      {project.stack.length > 3 && (
                        <span className="flex items-center justify-center rounded border border-hairline px-1.5 py-1 font-mono text-[0.5rem] text-text-3 md:px-2 md:text-[0.55rem]">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Tombol Detail */}
                    <div className="group/btn mt-1 flex w-full items-center justify-between border border-accent/30 bg-accent/5 px-2 py-1.5 font-mono text-[0.55rem] uppercase tracking-widest text-accent transition-all duration-300 group-hover:bg-accent/10 group-hover:shadow-[0_0_15px_rgba(138,164,255,0.3)] md:mt-2 md:px-4 md:py-3 md:text-xs">
                      <span className="flex items-center gap-1 md:gap-2">
                        <span className="opacity-50">[</span>

                        {lang === "id" ? "Detail" : "Details"}

                        <span className="opacity-50">]</span>
                      </span>

                      <Icon
                        name="arrow-up-right"
                        size={10}
                        className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 md:size-3.5"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
