import type { JSX } from "react";
import * as LucideIcons from "lucide-react";

import { SectionShell } from "@/components/layout/SectionShell";
import { getSection } from "@/content/sections";
import { skills } from "@/content/skills";

export function Skills(): JSX.Element {
  const entry = getSection("skills");

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      {/* Header Section (04. SKILLS) */}
      <div className="mb-12 flex items-center gap-6">
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

      {/* Judul Besar & Subtitle */}
      <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] uppercase leading-none text-text-1">
            Skills
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg text-text-2">
            Tools, technologies, and skills I use to build and support effective
            solutions.
          </p>
        </div>

        {/* Teks Kanan */}
        <div className="hidden flex-col items-end text-right font-mono text-sm uppercase tracking-widest text-accent md:flex">
          <span className="flex items-center gap-2">
            {"// GOOD SKILLS"} <LucideIcons.ArrowUpRight size={20} />
          </span>
          <span className="mt-1 text-text-3">BUILD BETTER</span>
          <span className="text-text-3">OPPORTUNITIES</span>
        </div>
      </div>

      {/* Daftar Kategori Skills */}
      <div className="flex flex-col gap-8">
        {skills.map((group, index) => (
          <div
            key={group.label}
            className="group relative flex flex-col gap-6 border border-accent/20 bg-accent/5 p-6 md:p-8 transition-colors hover:border-accent/40"
            style={{
              // Efek potongan sudut miring (Chamfered)
              clipPath:
                "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
            }}
          >
            {/* Header Kategori */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-accent/20 pb-4">
              <h3 className="flex items-center gap-4 font-mono text-lg uppercase text-accent">
                <span className="text-text-3">0{index + 1}</span>
                <span className="text-text-3">/</span>
                {group.label}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-text-3">
                {group.evidence}
              </p>
            </div>

            {/* Grid Item */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {group.items.map((item) => {
                // Memanggil ikon Lucide secara dinamis
                const IconComponent = (LucideIcons[
                  item.icon as keyof typeof LucideIcons
                ] || LucideIcons.Monitor) as React.ElementType;

                return (
                  <div
                    key={item.label}
                    className="group/item flex flex-col gap-3 rounded-lg border border-hairline bg-surface-1/50 p-5 transition-colors hover:border-accent/50 hover:bg-surface-2"
                  >
                    {/* Kotak Ikon */}
                    <div className="flex size-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent transition-colors group-hover/item:border-accent group-hover/item:bg-accent/20">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>

                    {/* Teks */}
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-sm font-semibold leading-tight text-text-1">
                        {item.label}
                      </h4>
                      <p className="text-xs leading-relaxed text-text-3">
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
    </SectionShell>
  );
}
