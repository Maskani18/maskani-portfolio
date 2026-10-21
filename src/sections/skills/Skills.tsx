import type { JSX } from "react";
import * as LucideIcons from "lucide-react";

import { SectionShell } from "@/components/layout/SectionShell";
import { getSection } from "@/content/sections";
import { skills } from "@/content/skills";

export function Skills(): JSX.Element {
  const entry = getSection("skills");

  return (
    <SectionShell
      entry={entry}
      hideHeader
      className="relative overflow-hidden bg-surface-1/30"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {/* Header Section (06. SKILLS) */}
        <div className="mb-8 flex items-center gap-6 md:mb-12">
          <div className="flex items-center gap-4 font-mono text-[0.65rem] uppercase text-text-2 md:text-meta">
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

        {/* Judul Besar & Subtitle */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-none text-text-1">
              Skills
            </h2>
            <p className="mt-3 max-w-[62ch] text-sm text-text-2 md:mt-4 md:text-base">
              Tools, technologies, and skills I use to build and support
              effective solutions.
            </p>
          </div>
          <div className="hidden flex-col items-end text-right font-mono text-xs uppercase tracking-widest text-accent md:flex">
            <span className="flex items-center gap-2">
              {"// GOOD SKILLS"} <LucideIcons.ArrowUpRight size={18} />
            </span>
            <span className="mt-1 text-text-3">BUILD BETTER</span>
            <span className="text-text-3">OPPORTUNITIES</span>
          </div>
        </div>

        {/* Daftar Kategori Skills */}
        <div className="flex flex-col gap-5 md:gap-6">
          {skills.map((group, index) => (
            <div
              key={group.label}
              className="group relative flex flex-col gap-3 border border-accent/20 bg-accent/5 p-4 transition-colors hover:border-accent/40 md:gap-4 md:p-6"
              style={{
                clipPath:
                  "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
              }}
            >
              {/* Header Kategori */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-accent/20 pb-2 md:pb-3">
                <h3 className="flex items-center gap-3 font-mono text-xs uppercase text-accent md:text-sm md:gap-4">
                  <span className="text-text-3">0{index + 1}</span>
                  <span className="text-text-3">/</span>
                  {group.label}
                </h3>
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-text-3 md:text-xs">
                  {group.evidence}
                </p>
              </div>

              {/* Grid Item (Lebih Kecil) */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-5">
                {group.items.map((item) => {
                  const IconComponent = (LucideIcons[
                    item.icon as keyof typeof LucideIcons
                  ] || LucideIcons.Monitor) as React.ElementType;

                  return (
                    <div
                      key={item.label}
                      className="group/item flex items-center gap-2 rounded-md border border-hairline bg-surface-1/50 p-2 transition-colors hover:border-accent/50 hover:bg-surface-2 md:flex-col md:items-start md:gap-2 md:p-3"
                    >
                      {/* Kotak Ikon (SANGAT KECIL) */}
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent transition-colors group-hover/item:border-accent group-hover/item:bg-accent/20 md:size-7">
                        <IconComponent
                          size={12}
                          strokeWidth={1.5}
                          className="md:size-3.5"
                        />
                      </div>

                      {/* Teks */}
                      <div className="flex flex-col gap-0.5">
                        <h4 className="text-[0.7rem] font-semibold leading-tight text-text-1 md:text-xs">
                          {item.label}
                        </h4>
                        <p className="hidden text-[0.6rem] leading-tight text-text-3 sm:block">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
