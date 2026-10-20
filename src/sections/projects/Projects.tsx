import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { projects } from "@/content/projects";
import { getSection } from "@/content/sections";
import { Icon } from "@/components/ui/Icon";

// Ikon-ikon fitur
const FeatureIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    user: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
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
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  };
  return icons[name] || null;
};

export function Projects(): JSX.Element {
  const entry = getSection("projects");
  const project = projects[0];
  const mainShot = project?.screenshots?.[0];

  if (!project || !mainShot) return <></>;

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {/* Header Section (04 PROJECTS) */}
        <div className="mb-16 flex items-center gap-6">
          <div className="flex items-center gap-4 font-mono text-meta uppercase text-text-2">
            <span>{entry.number}.</span>
            <span>{entry.label}</span>
          </div>
          <div className="h-px flex-1 bg-hairline" />
          <div className="hidden items-center gap-4 lg:flex">
            <div className="h-px w-12 bg-hairline" />
            <span className="font-mono text-meta uppercase tracking-widest text-text-3">
              MASKANI
            </span>
            <div className="h-px w-12 bg-hairline" />
          </div>
        </div>

        {/* items-start memastikan kedua kolom rata atas */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* KOLOM KIRI: Info Teks */}
          <div className="flex flex-col gap-10 lg:col-span-5">
            <div>
              <div className="mb-4 flex items-center gap-2 font-mono text-meta uppercase text-accent">
                <span className="size-2 rounded-full bg-accent" />
                <span>
                  {project.index} / {project.title}
                </span>
              </div>
              {/* Font dikecilkan sedikit agar tidak terpotong */}
              <h2 className="font-display text-[clamp(2.5rem,4vw,4.5rem)] uppercase leading-none text-text-1">
                {project.title}
              </h2>
              <p className="mt-4 font-display text-xl text-text-2 md:text-2xl">
                {project.subtitle}
              </p>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-1 gap-4 border-y border-hairline py-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <svg
                  className="size-5 text-text-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <div className="font-mono text-meta uppercase">
                  <p className="text-text-3">Lokasi</p>
                  <p className="text-text-1">{project.org}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="size-5 text-text-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <div className="font-mono text-meta uppercase">
                  <p className="text-text-3">Periode</p>
                  <p className="text-text-1">{project.period}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="size-5 text-text-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className="font-mono text-meta uppercase">
                  <p className="text-text-3">Peran</p>
                  <p className="text-text-1">{project.role}</p>
                </div>
              </div>
            </div>

            <p className="text-body text-text-2 leading-relaxed">
              {project.context.short}
            </p>

            {/* Fitur Utama */}
            <div>
              <h3 className="mb-6 flex items-center gap-4 font-mono text-sm uppercase text-accent">
                <span className="flex items-center gap-2">
                  Fitur Utama <Icon name="arrow-up-right" size={16} />
                </span>
                <span className="h-px flex-1 bg-hairline" />
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">
                {project.features.map((f) => (
                  <div key={f.title} className="flex flex-col gap-2">
                    <div className="flex size-10 items-center justify-center rounded-md bg-surface-2 text-text-2 border border-hairline">
                      <FeatureIcon name={f.icon} />
                    </div>
                    <p className="text-sm font-semibold text-text-1 leading-tight">
                      {f.title}
                    </p>
                    <p className="text-xs text-text-3 leading-tight">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="mb-4 flex items-center gap-4 font-mono text-sm uppercase text-accent">
                <span className="flex items-center gap-2">Tech Stack</span>
                <span className="h-px flex-1 bg-hairline" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-hairline px-3 py-1 font-mono text-meta uppercase text-text-2"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Detail */}
            <div>
              <Link
                href={`/projects/${project.slug}`}
                className="group inline-flex items-center gap-3 border border-accent bg-transparent px-6 py-3 font-mono text-meta uppercase text-accent transition-colors hover:bg-accent/10"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                }}
              >
                Lihat Detail
                <Icon
                  name="arrow-up-right"
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* KOLOM KANAN: Gambar & Garis Siku */}
          {/* lg:-mt-16 akan menarik gambar ke atas agar sejajar dengan judul */}
          <div className="relative flex flex-col gap-6 lg:col-span-7 lg:-mt-12">
            {/* Garis Siku Dekoratif */}
            <div className="absolute -left-2 -top-2 hidden h-16 w-16 border-l border-t border-accent/30 md:block" />
            <div className="absolute -bottom-2 -right-2 hidden h-16 w-16 border-b border-r border-accent/30 md:block" />

            {/* Gambar Utama */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-md)] border border-hairline bg-surface-1 p-4">
              <div className="relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src={mainShot.src}
                  alt={mainShot.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
            </div>

            {/* Thumbnail */}
            <div className="grid grid-cols-3 gap-4">
              {project.screenshots.map((shot) => (
                <div key={shot.id} className="flex flex-col gap-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-hairline bg-surface-1 p-2">
                    <div className="relative h-full w-full">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 20vw, 33vw"
                      />
                    </div>
                  </div>
                  <p className="font-mono text-xs text-text-3">{shot.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
