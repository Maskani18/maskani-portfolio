// MASKANI — Section 01 Hero (V-1, DL-014a).
"use client";
import type { JSX } from "react";
import { MapPin } from "lucide-react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { hero as heroId } from "@/content/hero";
import { hero as heroEn } from "@/content/en/hero";
import { profile } from "@/content/profile";
import { getSection } from "@/content/sections";
import { useLanguage } from "@/context/LanguageContext";
import { HeroPortrait } from "./HeroPortrait";
import { HeroMotion } from "./HeroMotion.client";

export function Hero(): JSX.Element {
  const entry = getSection("hero");
  const { lang } = useLanguage();

  // Pilih data hero berdasarkan bahasa aktif.
  const hero = lang === "id" ? heroId : heroEn;

  return (
    <SectionShell entry={entry} hideHeader className="!py-0 relative">
      <HeroMotion />

      <div className="flex min-h-[auto] flex-col justify-start gap-8 pt-24 pb-10 md:min-h-[calc(100svh-var(--nav-height))] md:justify-center md:gap-12 md:pt-32 md:pb-24">
        {/* Meta info & Chip Open to Work */}
        <div
          className="relative z-40 flex flex-col items-start justify-between gap-4 md:flex-row md:items-start"
          data-hero-meta
        >
          <div className="flex flex-col gap-1.5 font-mono text-[0.6rem] uppercase text-text-3 md:text-meta">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              {profile.fields.map((f, i) => (
                <li key={f} className="flex items-center gap-2">
                  {i > 0 ? (
                    <span aria-hidden="true" className="text-accent opacity-50">
                      /
                    </span>
                  ) : null}
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1.5 text-accent">
              <MapPin size={12} className="md:size-3.5" />
              <span className="text-text-3">{profile.locationShort}</span>
            </div>
          </div>

          {/* Status Indikator */}
          <div className="group inline-flex items-center gap-2 rounded-sm border border-accent/30 bg-accent/5 px-2.5 py-1 backdrop-blur-sm transition-all hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(138,164,255,0.2)] md:px-3 md:py-1.5">
            <span className="relative flex size-2 md:size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-accent md:size-2.5"></span>
            </span>
            <span className="font-mono text-[0.55rem] uppercase tracking-widest text-accent md:text-meta">
              {profile.status}
            </span>
          </div>
        </div>

        {/* Blok Potret + Teks + CTA */}
        <HeroPortrait
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          title={profile.name}
        >
          <div
            className="relative z-40 flex w-full flex-col items-center justify-center gap-4 text-center md:gap-8"
            data-hero-cta
          >
            <p className="text-center text-[0.7rem] leading-snug text-text-2 md:text-lead md:leading-relaxed">
              {hero.lead}
            </p>

            {/* Tombol CTA */}
            <div className="mt-2 flex w-full flex-row items-center justify-center gap-2 md:mt-0 md:gap-4">
              <Button
                href={profile.cvPath}
                variant="primary"
                magnetic
                className="!h-auto !min-h-0 !flex-1 !rounded-none !bg-accent !px-2 !py-2 !text-[0.55rem] font-bold !text-[#090B0D] whitespace-nowrap shadow-[0_0_15px_rgba(138,164,255,0.3)] transition-all hover:!bg-accent-hover hover:shadow-[0_0_25px_rgba(138,164,255,0.5)] md:!flex-none md:!px-5 md:!py-2.5 md:!text-xs [clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]"
              >
                <Icon
                  name="download"
                  size={12}
                  className="md:size-3.5 shrink-0"
                />
                {lang === "id" ? "Unduh CV" : "Download CV"}
              </Button>

              <Button
                href="#projects"
                variant="secondary"
                className="!h-auto !min-h-0 !flex-1 !rounded-none !border-accent/40 !px-2 !py-2 !text-[0.55rem] whitespace-nowrap transition-all hover:!border-accent hover:!bg-accent/10 md:!flex-none md:!px-5 md:!py-2.5 md:!text-xs [clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]"
              >
                {lang === "id" ? "Lihat Project" : "View Projects"}
                <Icon
                  name="arrow-right"
                  size={12}
                  className="md:size-3.5 shrink-0"
                />
              </Button>
            </div>
          </div>
        </HeroPortrait>
      </div>
    </SectionShell>
  );
}
