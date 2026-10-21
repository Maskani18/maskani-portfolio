import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { MediaCard } from "@/components/media/MediaCard";
import { about } from "@/content/about";
import { getSection } from "@/content/sections";

export function About(): JSX.Element {
  const entry = getSection("about");

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
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
        <div className="mb-8 flex items-center gap-4 md:mb-12 md:gap-6">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase text-accent md:gap-3 md:text-meta">
            <span className="flex items-center gap-1.5 rounded border border-accent/20 bg-accent/10 px-1.5 py-1 md:gap-2 md:px-2">
              <span className="size-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)] md:size-2" />
              {entry.number}
            </span>
            <span className="tracking-widest text-text-2">
              {"//"} {entry.label}
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        </div>

        {/* Grid Content: Mobile 4-8, Desktop 5-7 */}
        <div className="grid grid-cols-12 items-start gap-4 md:gap-10 lg:gap-16">
          {/* KIRI: Foto dengan Efek 3D Tilt & Glow */}
          <div
            data-reveal
            className="col-span-4 md:col-span-5 lg:col-span-4 perspective-[1000px]"
          >
            {/* Container data-tilt ini yang akan dibaca oleh tilt.ts */}
            <div
              data-tilt
              className="group relative transform-style-3d will-change-transform"
            >
              {/* Cahaya Glow di belakang foto (ikut bergerak saat tilt) */}
              <div className="absolute -inset-2 z-0 rounded-[var(--radius-media)] bg-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Frame Foto */}
              <div className="relative z-10 overflow-hidden rounded-[var(--radius-media)] border border-accent/20 bg-[#090B0D] shadow-2xl transition-colors duration-300 group-hover:border-accent/50">
                <MediaCard
                  src={about.photo.src}
                  alt={about.photo.alt}
                  variant="landscape"
                  aspectOverride="aspect-[4/5]"
                  sizes="(min-width: 1024px) 30vw, 30vw"
                  loading="lazy"
                  className="pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* KANAN: Teks */}
          <div className="col-span-8 flex flex-col gap-4 md:col-span-7 md:gap-8 lg:col-span-8">
            <div>
              {/* Judul Profile */}
              <h2
                id="about-heading"
                className="font-display text-[clamp(1.5rem,5vw,6rem)] uppercase leading-none text-text-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Profile
              </h2>
            </div>

            {/* Deskripsi teks dengan garis aksen di kiri */}
            <div className="relative border-l-2 border-accent/30 pl-3 md:pl-6 lg:pl-8">
              <p className="text-[0.75rem] leading-relaxed text-text-2 sm:text-sm md:text-[1.1rem] md:leading-loose">
                <WithHighlights text={about.lead} phrases={about.highlights} />
              </p>
            </div>

            {/* Chip / Badge Pendidikan */}
            <div className="mt-2 md:mt-4">
              <div className="inline-flex w-full items-start gap-2 rounded-md border border-accent/30 bg-accent/5 px-2.5 py-2 font-mono text-[0.5rem] uppercase tracking-widest text-accent backdrop-blur-sm transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(138,164,255,0.2)] sm:w-auto sm:items-center md:gap-3 md:px-4 md:py-2.5 md:text-[0.7rem]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="shrink-0 text-accent md:size-4"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span className="leading-tight md:leading-normal">
                  {about.chip}
                </span>
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
          <strong
            key={i}
            className="font-semibold text-accent drop-shadow-[0_0_8px_rgba(138,164,255,0.4)]"
          >
            {seg.t}
          </strong>
        ) : (
          <span key={i}>{seg.t}</span>
        ),
      )}
    </>
  );
}
