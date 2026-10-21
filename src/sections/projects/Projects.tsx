import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
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

import { SectionShell } from "@/components/layout/SectionShell";
import { projects } from "@/content/projects";
import { getSection } from "@/content/sections";
import { Icon } from "@/components/ui/Icon";

// Fungsi untuk memetakan nama tech stack ke ikon Lucide yang sesuai
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
    default:
      return <Code2 size={size} className={className} />;
  }
};

export function Projects(): JSX.Element {
  const entry = getSection("projects");
  const project = projects[0];
  const mainShot = project?.screenshots?.[0];

  if (!project || !mainShot) return <></>;

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
          Projects
        </h2>

        {/* BAGIAN ATAS: Grid 12 Kolom (Judul Kiri, Poster Kanan) */}
        <div className="mb-10 grid grid-cols-12 gap-4 md:mb-16 md:gap-10">
          <div className="col-span-7 flex flex-col justify-center md:col-span-6">
            <div className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase text-accent md:mb-4 md:text-meta">
              <span className="size-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)] md:size-2" />
              <span>
                {project.index} / {project.title}
              </span>
            </div>

            <h3 className="font-display text-[clamp(1.5rem,5vw,4rem)] uppercase leading-none text-text-1 break-words drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {project.title}
            </h3>

            <p className="mt-2 hidden font-display text-sm text-text-2 sm:block md:mt-4 md:text-xl">
              {project.subtitle}
            </p>
          </div>

          {/* Gambar Poster dengan Efek 3D Tilt */}
          <div className="col-span-5 flex items-center perspective-[1000px] md:col-span-6">
            <div
              data-tilt
              className="group relative w-full transform-style-3d will-change-transform"
            >
              <div className="absolute -inset-2 z-0 rounded-[var(--radius-md)] bg-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative w-full overflow-hidden rounded-[var(--radius-md)] border border-accent/20 bg-[#090B0D] p-1.5 shadow-2xl transition-colors duration-300 group-hover:border-accent/50 md:p-3">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-surface-1">
                  <Image
                    src={mainShot.src}
                    alt={mainShot.alt}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 45vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BAGIAN BAWAH: Info Lengkap */}
        <div className="flex flex-col gap-6 md:gap-10">
          <p className="text-sm leading-relaxed text-text-2 md:text-base">
            {project.context.short}
          </p>

          {/* PANEL DATA SPESIFIKASI */}
          <div className="relative overflow-hidden rounded-lg border border-accent/20 bg-accent/5 p-3 backdrop-blur-sm md:p-6">
            {/* HUD Sudut Panel */}
            <div className="pointer-events-none absolute left-0 top-0 size-3 border-l-2 border-t-2 border-accent" />
            <div className="pointer-events-none absolute right-0 top-0 size-3 border-r-2 border-t-2 border-accent" />
            <div className="pointer-events-none absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-accent" />
            <div className="pointer-events-none absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-accent" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-8">
              <div className="flex items-start gap-2 md:gap-3">
                <Building2
                  size={16}
                  className="mt-0.5 shrink-0 text-accent md:size-[18px]"
                />
                <div className="font-mono text-[0.6rem] uppercase md:text-meta">
                  <p className="mb-0.5 text-text-3 md:mb-1">Lokasi</p>
                  <p className="text-text-1 leading-tight">{project.org}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <Calendar
                  size={16}
                  className="mt-0.5 shrink-0 text-accent md:size-[18px]"
                />
                <div className="font-mono text-[0.6rem] uppercase md:text-meta">
                  <p className="mb-0.5 text-text-3 md:mb-1">Periode</p>
                  <p className="text-text-1 leading-tight">{project.period}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <User
                  size={16}
                  className="mt-0.5 shrink-0 text-accent md:size-[18px]"
                />
                <div className="font-mono text-[0.6rem] uppercase md:text-meta">
                  <p className="mb-0.5 text-text-3 md:mb-1">Peran</p>
                  <p className="text-text-1 leading-tight">{project.role}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-3 h-px w-full bg-gradient-to-r from-accent/30 to-transparent md:my-4" />

            {/* Tech Stack dengan Ikon Spesifik Lucide */}
            <div>
              <h4 className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest text-accent md:mb-3 md:text-xs">
                [ Tech Stack ]
              </h4>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1 rounded border border-accent/20 bg-[#090B0D]/50 px-1.5 py-1 font-mono text-[0.55rem] uppercase text-text-1 transition-colors hover:border-accent/50 hover:bg-accent/10 md:gap-1.5 md:px-3 md:py-1.5 md:text-[0.65rem]"
                  >
                    {getTechIcon(s)}
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tombol Lihat Detail (Magnetic) */}
          <div className="flex justify-end border-b border-accent/20 pb-8">
            <Link
              href={`/projects/${project.slug}`}
              data-magnetic
              className="group relative flex w-full items-center justify-center gap-2 border border-accent bg-transparent px-4 py-2.5 font-mono text-xs uppercase text-accent transition-all hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(138,164,255,0.3)] md:w-auto md:gap-3 md:px-8 md:py-3.5"
              style={{
                clipPath:
                  "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              <span className="opacity-50">[</span> Lihat Detail{" "}
              <span className="opacity-50">]</span>
              <Icon
                name="arrow-up-right"
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:size-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
