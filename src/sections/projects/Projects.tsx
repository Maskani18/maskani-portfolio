import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { projects } from "@/content/projects";
import { getSection } from "@/content/sections";
import { Icon } from "@/components/ui/Icon";

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

        {/* BAGIAN ATAS: Grid 12 Kolom (Judul Kiri, Poster Kanan) */}
        <div className="mb-10 grid grid-cols-12 gap-4 md:mb-16 md:gap-10">
          <div className="col-span-7 flex flex-col justify-center md:col-span-6">
            <div className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase text-accent md:mb-4 md:text-meta">
              <span className="size-1.5 rounded-full bg-accent md:size-2" />
              <span>
                {project.index} / {project.title}
              </span>
            </div>

            {/* Judul SIDALEKAS Dikecilkan */}
            <h2 className="font-display text-[clamp(1.5rem,5vw,4rem)] uppercase leading-none text-text-1 break-words">
              {project.title}
            </h2>

            <p className="mt-2 hidden font-display text-sm text-text-2 sm:block md:mt-4 md:text-xl">
              {project.subtitle}
            </p>
          </div>

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

          {/* Tech Stack & Tombol */}
          <div className="flex flex-col gap-6 border-b border-hairline pb-8 md:flex-row md:items-end md:justify-between">
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
