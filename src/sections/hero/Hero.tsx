// MASKANI — Section 01 Hero (V-1, DL-014a).
"use client";
import type { JSX } from "react";

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

  const hero = lang === "id" ? heroId : heroEn;

  return (
    <SectionShell entry={entry} hideHeader className="!py-0 relative">
      <HeroMotion />

      <div className="flex min-h-[auto] flex-col justify-start gap-8 pt-28 pb-4 md:min-h-[auto] md:justify-center md:gap-12 md:pt-36 md:pb-8">
        <HeroPortrait
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          title={profile.name}
        >
          <div
            className="relative z-40 flex w-full flex-col items-center justify-center gap-4 text-center md:gap-8"
            data-hero-cta
          >
            {/* PERUBAHAN: text-accent diganti jadi text-text-1 */}
            <p className="text-center font-mono text-[0.7rem] uppercase tracking-widest text-text-1 md:text-sm md:leading-relaxed">
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
