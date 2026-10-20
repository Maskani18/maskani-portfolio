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

      <div className="flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-between gap-12 pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Baris atas: meta + chip status */}
        <div
          className="relative z-40 flex flex-col items-start justify-between gap-6 md:flex-row md:items-start"
          data-hero-meta
        >
          <div className="flex flex-col gap-1.5 font-mono text-meta uppercase text-text-3">
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
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{profile.locationShort}</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-3 py-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent"
            />
            <span className="font-mono text-meta uppercase text-text-2">
              {profile.status}
            </span>
          </div>
        </div>

        {/* Blok tengah: Potret + Judul + Tagline (digabung) */}
        <HeroPortrait
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          title={profile.name}
        >
          <div
            className="relative z-40 flex max-w-[42rem] flex-col gap-8"
            data-hero-cta
          >
            <p className="mx-auto max-w-[42rem] text-lead text-text-2 md:mx-0">
              {hero.lead}
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <Button href={profile.cvPath} variant="primary" magnetic>
                <Icon name="download" size={18} />
                Unduh CV
              </Button>
              <Button href="#projects" variant="secondary">
                Lihat Karya
                <Icon name="arrow-right" size={18} />
              </Button>
            </div>
          </div>
        </HeroPortrait>
      </div>
    </SectionShell>
  );
}
