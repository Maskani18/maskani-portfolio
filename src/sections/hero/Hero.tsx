// MASKANI — Section 01 Hero (V-1, DL-014a).
import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/content/hero";
import { profile } from "@/content/profile";
import { getSection } from "@/content/sections";
import { HeroPortrait } from "./HeroPortrait";
import { HeroMotion } from "./HeroMotion.client";

export function Hero(): JSX.Element {
  const entry = getSection("hero");

  return (
    <SectionShell entry={entry} hideHeader className="!py-0">
      <HeroMotion />

      <div className="flex min-h-[auto] flex-col justify-start gap-8 pt-24 pb-10 md:min-h-[calc(100svh-var(--nav-height))] md:justify-center md:gap-12 md:pt-32 md:pb-24">
        {/* Meta info & Chip Open to Work */}
        <div
          className="relative z-40 flex flex-col items-start justify-between gap-4 md:flex-row md:items-start"
          data-hero-meta
        >
          <div className="flex flex-col gap-1 font-mono text-[0.6rem] uppercase text-text-3 md:gap-1.5 md:text-meta">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              {profile.fields.map((f, i) => (
                <li key={f} className="flex items-center gap-2">
                  {i > 0 ? (
                    <span aria-hidden="true" className="opacity-60">
                      ·
                    </span>
                  ) : null}
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1.5">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:size-3"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{profile.locationShort}</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-hairline-strong px-2 py-1 md:gap-2 md:px-3 md:py-1.5">
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-accent md:size-1.5"
            />
            <span className="font-mono text-[0.55rem] uppercase text-text-2 md:text-meta">
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
            className="relative z-40 flex flex-col gap-4 md:gap-8"
            data-hero-cta
          >
            <p className="text-left text-[0.7rem] leading-snug text-text-2 md:text-lead md:leading-relaxed">
              {hero.lead}
            </p>

            <div className="flex flex-row items-center gap-1.5 md:gap-3">
              <Button
                href={profile.cvPath}
                variant="primary"
                magnetic
                className="!px-2 !py-1.5 !text-[0.6rem] md:!px-5 md:!py-3 md:!text-sm !h-auto !min-h-0"
              >
                <Icon name="download" size={12} className="md:size-4" />
                Unduh CV
              </Button>
              <Button
                href="#projects"
                variant="secondary"
                className="!px-2 !py-1.5 !text-[0.6rem] md:!px-5 md:!py-3 md:!text-sm !h-auto !min-h-0"
              >
                Lihat Project
                <Icon name="arrow-right" size={12} className="md:size-4" />
              </Button>
            </div>
          </div>
        </HeroPortrait>
      </div>
    </SectionShell>
  );
}
