import type { JSX } from "react";
import * as LucideIcons from "lucide-react";

import { SectionShell } from "@/components/layout/SectionShell";
import { getSection } from "@/content/sections";
import { skills } from "@/content/skills";

// Fungsi mapping ikon yang lebih aman
const getSkillIcon = (iconName: string) => {
  const iconMap: Record<string, React.ElementType> = {
    code: LucideIcons.Code,
    Table: LucideIcons.Table,
    Network: LucideIcons.Network,
    Headset: LucideIcons.Headset,
  };

  const IconComponent =
    iconMap[iconName] ||
    (LucideIcons[iconName as keyof typeof LucideIcons] as React.ElementType) ||
    LucideIcons.Monitor;

  return <IconComponent size={16} strokeWidth={1.5} className="md:size-5" />;
};

export function Skills(): JSX.Element {
  const entry = getSection("skills");

  return (
    <SectionShell
      entry={entry}
      hideHeader
      className="relative overflow-hidden bg-[#090B0D]"
    >
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

        {/* Judul & Subtitle */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-none text-text-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Skills
            </h2>
            <p className="mt-3 max-w-[62ch] text-xs text-text-2 md:mt-4 md:text-base">
              Tools, technologies, and skills I use to build and support
              effective solutions.
            </p>
          </div>
          <div className="hidden flex-col items-end text-right font-mono text-[0.65rem] uppercase tracking-widest text-accent md:flex md:text-xs">
            <span className="flex items-center gap-2">
              {"// SYSTEM.CAPABILITIES"} <LucideIcons.Terminal size={16} />
            </span>
            <span className="mt-1 text-text-3">
              STATUS: <span className="text-accent">ONLINE</span>
            </span>
          </div>
        </div>

        {/* Daftar Kategori Skills */}
        <div className="flex flex-col gap-6 md:gap-8">
          {skills.map((group, index) => (
            <div
              key={group.label}
              className="group relative flex flex-col gap-4 rounded-lg border border-accent/20 bg-accent/5 p-4 backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-[0_0_20px_rgba(138,164,255,0.1)] md:p-6"
              style={{
                clipPath:
                  "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
              }}
            >
              {/* Header Kategori */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-accent/20 pb-3 md:pb-4">
                <h3 className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-accent md:gap-4 md:text-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-accent" />
                    <span className="text-text-3">0{index + 1}</span>
                  </span>
                  <span className="text-text-3">/</span>
                  {group.label}
                </h3>
                <p className="font-mono text-[0.55rem] uppercase tracking-widest text-text-3 md:text-xs">
                  [ {group.evidence} ]
                </p>
              </div>

              {/* Grid Item */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-5">
                {group.items.map((item) => {
                  return (
                    <div
                      key={item.label}
                      className="group/item relative flex flex-col items-start gap-2 overflow-hidden rounded border border-accent/20 bg-[#090B0D]/60 p-2.5 transition-all hover:border-accent/60 hover:bg-accent/10 md:gap-3 md:p-3"
                    >
                      {/* Efek Garis Hover */}
                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover/item:w-full" />

                      {/* Kotak Ikon Menyala */}
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent shadow-[0_0_10px_rgba(138,164,255,0.1)] transition-all group-hover/item:scale-110 group-hover/item:border-accent group-hover/item:shadow-[0_0_15px_rgba(138,164,255,0.4)] md:size-9">
                        {getSkillIcon(item.icon)}
                      </div>

                      {/* Teks (Font Body / Inter, Rapat & Jelas) */}
                      <div className="flex w-full flex-col gap-0.5">
                        <h4 className="w-full break-words font-sans text-[0.7rem] font-semibold leading-tight text-text-1 transition-colors group-hover/item:text-accent md:text-xs">
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
