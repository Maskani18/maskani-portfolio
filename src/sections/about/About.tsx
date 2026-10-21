import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { MediaCard } from "@/components/media/MediaCard";
import { about } from "@/content/about";
import { getSection } from "@/content/sections";

export function About(): JSX.Element {
  const entry = getSection("about");

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        <div className="mb-12 flex items-center gap-6">
          <div className="flex items-center gap-4 font-mono text-meta uppercase text-text-2">
            <span>{entry.number}</span>
            <span>{entry.label}</span>
          </div>
          <div className="h-px flex-1 bg-hairline" />
        </div>

        {/* Mobile: Grid 12 kolom, Foto 4, Teks 8 */}
        <div className="grid grid-cols-12 items-start gap-4 md:gap-10 lg:gap-16">
          {/* KIRI: Foto (Kecil di Mobile, Besar di Desktop) */}
          <div data-reveal className="col-span-4 md:col-span-5">
            <div data-tilt>
              <MediaCard
                src={about.photo.src}
                alt={about.photo.alt}
                variant="landscape"
                aspectOverride="aspect-[4/5]"
                sizes="(min-width: 1024px) 41vw, 30vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* KANAN: Teks */}
          <div className="col-span-8 flex flex-col gap-6 md:col-span-7 md:gap-10">
            <h2
              id="about-heading"
              className="font-display text-[clamp(2rem,6vw,8rem)] uppercase leading-none text-text-1"
            >
              Profile
            </h2>

            <p className="text-sm leading-relaxed text-text-2 md:text-lead">
              <WithHighlights text={about.lead} phrases={about.highlights} />
            </p>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-3 py-1.5 font-mono text-[0.55rem] uppercase text-text-2 md:px-6 md:py-3 md:text-meta">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="shrink-0 md:size-5"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span>{about.chip}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function WithHighlights({
  text,
  phrases,
}: {
  text: string;
  phrases: readonly string[];
}): JSX.Element {
  type Seg = { t: string; hl: boolean };
  let segments: Seg[] = [{ t: text, hl: false }];

  for (const phrase of phrases) {
    const next: Seg[] = [];
    for (const seg of segments) {
      if (seg.hl) {
        next.push(seg);
        continue;
      }
      const i = seg.t.indexOf(phrase);
      if (i === -1) {
        next.push(seg);
        continue;
      }
      if (i > 0) next.push({ t: seg.t.slice(0, i), hl: false });
      next.push({ t: phrase, hl: true });
      const rest = seg.t.slice(i + phrase.length);
      if (rest) next.push({ t: rest, hl: false });
    }
    segments = next;
  }

  return (
    <>
      {segments.map((seg, i) =>
        seg.hl ? (
          <strong key={i} className="font-semibold text-text-1">
            {seg.t}
          </strong>
        ) : (
          <span key={i}>{seg.t}</span>
        ),
      )}
    </>
  );
}
