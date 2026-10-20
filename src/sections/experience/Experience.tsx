"use client";

import { useState } from "react";
import Image from "next/image";
import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { ExperienceDialog } from "@/components/layout/ExperienceDialog.client";
import { experience } from "@/content/experience";
import type { ExperienceItem } from "@/content/types";
import { getSection } from "@/content/sections";
import { Icon } from "@/components/ui/Icon";

// Ikon SVG inline untuk masing-masing tipe
const Icons = {
  code: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  bug: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6ZM12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M6 17H2M22 5c0 2.1-1.6 3.8-3.53 4M22 13h-4M22 17h-4" />
    </svg>
  ),
  monitor: () => (
    <svg
      width="24"
      height="24"
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

export function Experience(): JSX.Element {
  const entry = getSection("experience");
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      {/* Garis Vertikal & Teks di Sisi Kanan Layar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 md:flex lg:right-8"
      >
        <div className="h-24 w-px bg-hairline-strong" />
        <span className="rotate-90 font-mono text-meta uppercase tracking-widest text-text-3 whitespace-nowrap">
          MASKANI
        </span>
        <div className="h-24 w-px bg-hairline-strong" />
      </div>

      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {/* Header Section (03 PENGALAMAN) */}
        <div className="mb-12 flex items-center gap-6">
          <div className="flex items-center gap-4 font-mono text-meta uppercase text-text-2">
            <span>{entry.number}</span>
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

        {/* Judul Raksasa (Dikecilkan) */}
        <h2 className="mb-16 font-display text-[clamp(2.5rem,5vw,5rem)] uppercase leading-none text-text-1">
          Pengalaman
        </h2>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* KIRI: List Timeline */}
          <div className="flex flex-col lg:col-span-8">
            {experience.items.map((item, index) => (
              <div key={item.id} className="group relative flex gap-6 pb-12">
                {/* Garis Timeline Vertikal */}
                {index !== experience.items.length - 1 && (
                  <div className="absolute left-[72px] top-8 h-full w-px bg-hairline md:left-[88px]" />
                )}

                {/* Tanggal (Kiri) */}
                <div className="mt-2 w-[52px] shrink-0 text-right md:w-[64px]">
                  <p className="font-mono text-meta uppercase text-text-3">
                    {item.period.from}
                  </p>
                  <p className="font-mono text-meta uppercase text-text-3">–</p>
                  <p className="font-mono text-meta uppercase text-text-3">
                    {item.period.to}
                  </p>
                </div>

                {/* Titik Timeline */}
                <div className="relative z-10 mt-3 hidden size-2 shrink-0 rounded-full bg-text-3 md:block" />

                {/* Konten Kanan */}
                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Ikon */}
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-surface-2 text-text-1 md:size-16">
                      {Icons[item.icon]()}
                    </div>

                    <div className="flex flex-col gap-1">
                      {/* Role text diperkecil sedikit */}
                      <h3 className="font-display text-xl uppercase leading-tight md:text-2xl">
                        {item.role}
                      </h3>
                      <p className="font-mono text-meta uppercase text-text-2">
                        {item.org}
                      </p>
                    </div>
                  </div>

                  <p className="max-w-[62ch] text-body text-text-2">
                    {item.summary}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                    {/* Pills Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-hairline px-3 py-1.5 font-mono text-[0.7rem] uppercase text-text-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Tombol Detail */}
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="group/btn flex items-center gap-2 font-mono text-sm uppercase text-text-3 transition-colors hover:text-accent"
                    >
                      Lihat Detail
                      <span className="block h-px w-8 bg-text-3 transition-all group-hover/btn:w-12 group-hover/btn:bg-accent" />
                      <Icon name="arrow-right" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KANAN: Foto Sticky */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-[calc(var(--nav-height)+3rem)]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-media)] shadow-media">
                <Image
                  src={experience.photo.src}
                  alt={experience.photo.alt}
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Quote DIHAPUS sesuai instruksi */}
      </div>

      {/* Modal Dialog */}
      <ExperienceDialog
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </SectionShell>
  );
}
