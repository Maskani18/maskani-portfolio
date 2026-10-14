// MASKANI — Section 01 Hero (V-1, DL-014a).
//
// Layout Static: potret tiga lapis di tengah + meta/chip di atas,
// tagline + CTA di bawah. Nama MASKANI terlihat sejak first paint.
// Tidak ada opacity:0 di CSS (F-20).

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/content/hero";
import { profile } from "@/content/profile";
import { getSection } from "@/content/sections";
import { HeroPortrait } from "./HeroPortrait";

export function Hero(): JSX.Element {
  const entry = getSection("hero");

  return (
    <SectionShell entry={entry} hideHeader className="!py-0">
      <div className="flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-between gap-12 pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Baris atas: meta + chip status */}
        <div className="relative z-40 flex flex-col items-start justify-between gap-6 md:flex-row md:items-start">
          <div className="flex flex-col gap-1 font-mono text-meta uppercase text-text-3">
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
            <span>{profile.locationShort}</span>
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
        {/* Blok tengah: potret + judul tiga lapis */}
        <div className="flex flex-col gap-10 md:gap-14">
          <HeroPortrait
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            title={profile.name}
          />

          <div className="relative z-40 flex max-w-[42rem] flex-col gap-8">
            <p className="text-lead text-text-2">{hero.lead}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href={profile.cvPath} variant="primary">
                <Icon name="download" size={18} />
                Unduh CV
              </Button>
              <Button href="#projects" variant="secondary">
                View Work
                <Icon name="arrow-right" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
