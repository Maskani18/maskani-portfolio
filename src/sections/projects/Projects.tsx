import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { projects } from "@/content/projects";
import { getSection } from "@/content/sections";
import { Icon } from "@/components/ui/Icon";

const FeatureIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    user: (
      <svg
        width="16"
        height="16"
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
        width="16"
        height="16"
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
        width="16"
        height="16"
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
        width="16"
        height="16"
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
        width="16"
        height="16"
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
        <div className="mb-8 flex items-center gap-6 md:mb-16">
          <div className="flex items-center gap-4 font-mono text-meta uppercase text-text-2">
            <span>{entry.number}.</span>
            <span>{entry.label}</span>
          </div>
          <div className="h-px flex-1 bg-hairline" />
        </div>

        {/* BAGIAN ATAS: Grid 12 Kolom (Judul Kiri, Poster Kanan di HP) */}
        <div className="mb-10 grid grid-cols-12 gap-4 md:mb-16 md:gap-10">
          {/* KIRI: Judul & Subtitle (Desktop: 7 kolom, Mobile: 7 kolom) */}
          <div className="col-span-7 flex flex-col justify-center md:col-span-6">
            <div className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase text-accent md:mb-4 md:text-meta">
              <span className="size-1.5 rounded-full bg-accent md:size-2" />
              <span>
                {project.index} / {project.title}
              </span>
            </div>

            <h2 className="font-display text-[clamp(1.5rem,6vw,6rem)] uppercase leading-none text-text-1 break-words">
              {project.title}
            </h2>

            <p className="mt-2 hidden font-display text-sm text-text-2 sm:block md:mt-4 md:text-2xl">
              {project.subtitle}
            </p>
          </div>

          {/* KANAN: Poster Kecil (Desktop: 6 kolom, Mobile: 5 kolom) */}
          <div className="col-span-5 flex items-center md:col-span-6">
            <div className="relative w-full overflow-hidden rounded-[var(--radius-md)] border border-hairline bg-surface-2 p-1 md:p-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-surface-1">
                <Image
                  src={mainShot.src}
                  alt={mainShot.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 45vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* BAGIAN BAWAH: Info Lengkap */}
        <div className="flex flex-col gap-6 md:gap-10">
          <p className="text-sm leading-relaxed text-text-2 md:text-base">
            {project.context.short}
          </p>

          {/* Meta Info */}
          <div className="grid grid-cols-1 gap-4 border-y border-hairline py-4 sm:grid-cols-3 md:gap-6 md:py-6">
            <div className="flex items-center gap-2 md:gap-3">
              <svg
                className="size-4 shrink-0 text-text-3 md:size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <div className="font-mono text-[0.65rem] uppercase md:text-meta">
                <p className="text-text-3">Lokasi</p>
                <p className="text-text-1">{project.org}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <svg
                className="size-4 shrink-0 text-text-3 md:size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <div className="font-mono text-[0.65rem] uppercase md:text-meta">
                <p className="text-text-3">Periode</p>
                <p className="text-text-1">{project.period}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <svg
                className="size-4 shrink-0 text-text-3 md:size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <div className="font-mono text-[0.65rem] uppercase md:text-meta">
                <p className="text-text-3">Peran</p>
                <p className="text-text-1">{project.role}</p>
              </div>
            </div>
          </div>

          {/* Fitur Utama */}
          <div>
            <h3 className="mb-4 flex items-center gap-4 font-mono text-xs uppercase text-accent md:mb-6 md:text-sm">
              <span className="flex items-center gap-2">
                Fitur Utama <Icon name="arrow-up-right" size={14} />
              </span>
              <span className="h-px flex-1 bg-hairline" />
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-5 md:gap-x-6">
              {project.features?.map((f) => (
                <div key={f.title} className="flex flex-col gap-1.5">
                  <div className="flex size-6 items-center justify-center rounded-sm border border-hairline bg-surface-2 text-text-2 md:size-8">
                    <FeatureIcon name={f.icon} />
                  </div>
                  <p className="text-[0.65rem] font-semibold leading-tight text-text-1 md:text-xs">
                    {f.title}
                  </p>
                  <p className="text-[0.55rem] leading-tight text-text-3 md:text-[0.65rem]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Tombol */}
          <div className="flex flex-col gap-6 border-t border-hairline pt-6 md:flex-row md:items-end md:justify-between md:pt-8">
            <div className="flex-1">
              <h3 className="mb-3 font-mono text-xs uppercase text-accent md:mb-4 md:text-sm">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-hairline px-2 py-1 font-mono text-[0.55rem] uppercase text-text-2 md:px-4 md:py-1.5 md:text-meta"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="group flex w-full shrink-0 items-center justify-center gap-2 border border-accent bg-transparent px-4 py-2.5 font-mono text-xs uppercase text-accent transition-colors hover:bg-accent/10 md:w-auto md:gap-3 md:px-8 md:py-4"
              style={{
                clipPath:
                  "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              Lihat Detail
              <Icon name="arrow-up-right" size={14} className="md:size-4" />
            </Link>
          </div>

          {/* Galeri Kecil di Bawah */}
          <div className="mt-4 grid grid-cols-3 gap-2 md:mt-8 md:gap-4">
            {project.screenshots?.map((shot) => (
              <div key={shot.id} className="flex flex-col gap-1 md:gap-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-hairline bg-surface-2 p-1">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-contain"
                    sizes="33vw"
                  />
                </div>
                <p className="font-mono text-[0.55rem] uppercase text-accent md:text-xs">
                  {shot.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
