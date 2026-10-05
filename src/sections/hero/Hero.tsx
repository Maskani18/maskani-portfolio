// MASKANI — Section 01 Hero (§7, §8).
//
// Server component. Nama D1 selalu terlihat sejak first paint (F-20);
// tanpa opacity: 0. CTA primer = Download CV (A-02). Sekunder = View Work.
// Chip "Open to work" dengan titik aksen statis (§4.1).

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/content/hero";
import { profile } from "@/content/profile";
import { getSection } from "@/content/sections";

export function Hero(): JSX.Element {
  const entry = getSection("hero");

  return (
    <SectionShell entry={entry} hideHeader className="!py-0">
      <div className="flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-between gap-12 pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Top row: meta + status chip */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-start">
          <div className="flex flex-col gap-1 font-mono text-meta uppercase text-text-3">
            <span>{profile.fields.join(" · ")}</span>
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

        {/* Bottom block: name + lead + CTA */}
        <div className="flex flex-col gap-10 md:gap-14">
          <h1 id="hero-heading" className="font-display text-d1 text-text-1">
            {profile.name}
          </h1>

          <div className="flex max-w-[42rem] flex-col gap-8">
            <p className="text-lead text-text-2">{hero.lead}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href={profile.cvPath} variant="primary">
                <Icon name="download" size={18} />
                Download CV
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
