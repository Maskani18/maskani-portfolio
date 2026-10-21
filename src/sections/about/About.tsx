// MASKANI — Section 02 Tentang (Template B).
// Layout: Sesuai referensi (Garis Atas, Foto + Indikator, Teks Besar, Garis Vertikal Kanan).

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { MediaCard } from "@/components/media/MediaCard";
import { about } from "@/content/about";
import { getSection } from "@/content/sections";

export function About(): JSX.Element {
  const entry = getSection("about");

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      {/* Garis Vertikal & Teks di Sisi Kanan Layar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-6 md:flex lg:right-8"
      >
        <div className="h-24 w-px bg-hairline-strong" />
        <span className="rotate-90 whitespace-nowrap font-mono text-meta uppercase tracking-widest text-text-3">
          MASKANI
        </span>
        <div className="h-24 w-px bg-hairline-strong" />
      </div>

      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {/* Header Section (02 TENTANG) */}
        <div className="mb-16 flex items-center gap-6">
          <div className="flex items-center gap-4 font-mono text-meta uppercase text-text-2">
            <span>{entry.number}</span>
            <span>{entry.label}</span>
          </div>

          <div className="h-px flex-1 bg-hairline" />

          {/* Garis & MASKANI Kanan Atas */}
          <div className="hidden items-center gap-4 lg:flex">
            <div className="h-px w-12 bg-hairline" />
            <span className="font-mono text-meta uppercase tracking-widest text-text-3">
              MASKANI
            </span>
            <div className="h-px w-12 bg-hairline" />
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* KIRI: Foto & Indikator Bawah */}
          <div data-reveal className="flex flex-col gap-6 lg:col-span-5">
            <div data-tilt>
              <MediaCard
                src={about.photo.src}
                alt={about.photo.alt}
                variant="landscape"
                aspectOverride="aspect-[4/5]"
                sizes="(min-width: 1024px) 41vw, 100vw"
                loading="lazy"
              />
            </div>

            {/* Indikator 01 / 07 */}
            <div className="flex items-center gap-4 font-mono text-meta uppercase text-text-3">
              <span>01 / 07</span>
              <div className="h-px w-12 bg-text-3" />
              <div className="h-px flex-1 bg-hairline" />
            </div>
          </div>

          {/* KANAN: Teks & Chip */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            {/* Judul TENTANG */}
            <h2
              id="about-heading"
              className="font-display text-[clamp(3rem,6vw,8rem)] uppercase leading-none text-text-1"
            >
              Tentang
            </h2>

            {/* Paragraf */}
            <p className="max-w-[62ch] text-[1.15rem] leading-relaxed text-text-2 md:text-lead">
              <WithHighlights text={about.lead} phrases={about.highlights} />
            </p>

            {/* Chip dengan Ikon Wisuda */}
            <div className="mt-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-hairline-strong px-6 py-3 font-mono text-meta uppercase text-text-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

      if (i > 0) {
        next.push({ t: seg.t.slice(0, i), hl: false });
      }

      next.push({ t: phrase, hl: true });

      const rest = seg.t.slice(i + phrase.length);

      if (rest) {
        next.push({ t: rest, hl: false });
      }
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
