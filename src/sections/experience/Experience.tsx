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

const Icons = {
  code: () => (
    <svg
      width="16"
      height="16"
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
      width="16"
      height="16"
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
      width="16"
      height="16"
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
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {/* Header Section */}
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

        <h2 className="mb-8 font-display text-[clamp(2rem,5vw,5rem)] uppercase leading-none text-text-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] md:mb-16">
          Pengalaman
        </h2>

        <div className="grid grid-cols-12 items-start gap-3 md:gap-10 lg:gap-16">
          {/* KIRI: List Timeline */}
          <div className="col-span-8 flex flex-col md:col-span-7 lg:col-span-8">
            {experience.items.map((item, index) => (
              <div
                key={item.id}
                className="group relative flex gap-3 pb-8 md:gap-5 md:pb-12"
              >
                {/* Garis Timeline (Sejajar dengan titik) */}
                {index !== experience.items.length - 1 && (
                  <div className="absolute left-[4.5px] top-6 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:top-8" />
                )}

                {/* Titik Timeline */}
                <div className="relative z-10 mt-1.5 size-2.5 shrink-0 rounded-full border border-accent bg-void shadow-[0_0_10px_rgba(138,164,255,0.8)] transition-transform duration-500 group-hover:scale-150 md:mt-2.5" />

                {/* Konten Kanan */}
                <div className="flex flex-1 flex-col gap-2 transition-transform duration-300 group-hover:translate-x-1 md:gap-4">
                  <div className="flex items-start gap-2 md:gap-4 lg:gap-6">
                    <div className="hidden size-10 shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/5 text-accent shadow-[0_0_15px_rgba(138,164,255,0.1)] transition-colors group-hover:bg-accent/20 md:flex md:size-12 lg:size-14">
                      {Icons[item.icon]()}
                    </div>

                    <div className="flex flex-col gap-0.5 md:gap-1">
                      <h3 className="font-display text-sm uppercase leading-tight text-text-1 transition-colors group-hover:text-accent md:text-xl lg:text-2xl">
                        {item.role}
                      </h3>
                      <p className="font-mono text-[0.55rem] uppercase text-text-2 md:text-[0.7rem] lg:text-meta">
                        {item.org}
                      </p>
                      <p className="font-mono text-[0.55rem] uppercase text-text-3">
                        {item.period.from} – {item.period.to}
                      </p>
                    </div>
                  </div>

                  <p className="hidden text-xs leading-relaxed text-text-2 sm:block md:text-sm lg:text-base">
                    {item.summary}
                  </p>

                  <div className="mt-1 flex flex-wrap items-center gap-3 md:mt-2 md:justify-between">
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {item.techStack.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-accent/20 bg-accent/5 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase text-accent backdrop-blur-sm md:px-3 md:py-1.5 md:text-[0.65rem] lg:text-[0.7rem]"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.techStack.length > 2 && (
                        <span className="rounded-full border border-hairline px-1.5 py-0.5 font-mono text-[0.5rem] uppercase text-text-3 md:hidden">
                          +{item.techStack.length - 2}
                        </span>
                      )}
                    </div>

                    {/* TOMBOL DETAIL HUD */}
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="group/btn flex items-center gap-1 font-mono text-[0.6rem] uppercase text-accent transition-all hover:text-accent-hover md:gap-2 md:text-sm"
                    >
                      <span className="opacity-50">[</span> Detail{" "}
                      <span className="opacity-50">]</span>
                      <Icon
                        name="arrow-right"
                        size={10}
                        className="transition-transform group-hover/btn:translate-x-1 md:size-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KANAN: Foto (TANPA SUDUT HUD, TETAP BERGErAK 3D) */}
          <div className="sticky top-24 col-span-4 perspective-[1000px] md:col-span-5 lg:col-span-4">
            {/* Wrapper Tilt */}
            <div
              data-tilt
              className="group relative transform-style-3d will-change-transform"
            >
              {/* Glow Effect di belakang foto */}
              <div className="absolute -inset-2 z-0 rounded-[var(--radius-media)] bg-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Foto */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-media)] border border-accent/20 bg-[#090B0D] shadow-media transition-colors duration-300 group-hover:border-accent/50">
                <Image
                  src={experience.photo.src}
                  alt={experience.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExperienceDialog
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </SectionShell>
  );
}
