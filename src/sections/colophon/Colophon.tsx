import type { JSX } from "react";
import { Check } from "lucide-react";

import { colophon } from "@/content/colophon";
import { getSection } from "@/content/sections";

export function Colophon(): JSX.Element {
  const entry = getSection("colophon");
  const barHeights = [40, 70, 30, 90, 50, 100, 60, 80, 40];

  // Variasi animasi agar tiap grup mengambang dengan ritme berbeda
  const driftClasses = [
    "colophon-float",
    "colophon-drift-down",
    "colophon-drift-sway",
    "colophon-float",
    "colophon-drift-down",
  ];

  return (
    <footer
      id={entry.id}
      aria-labelledby={`${entry.id}-heading`}
      className="relative overflow-hidden bg-[#090B0D] px-[var(--gutter)] py-16 md:py-28"
    >
      {/* ===== SPACE BACKGROUND ===== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(138,164,255,0.18),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(138,164,255,0.12),transparent_70%)]" />
        <div className="colophon-starfield-slow absolute inset-0 opacity-40" />
        <div className="colophon-starfield-fast absolute inset-0 opacity-60" />
      </div>

      {/* Hiasan Sudut HUD */}
      <div className="pointer-events-none absolute left-6 top-6 z-10 hidden size-10 border-l-2 border-t-2 border-accent/40 md:left-12 md:top-12 md:block" />
      <div className="pointer-events-none absolute right-6 top-6 z-10 hidden size-10 border-r-2 border-t-2 border-accent/40 md:right-12 md:top-12 md:block" />
      <div className="pointer-events-none absolute bottom-6 left-6 z-10 hidden size-10 border-b-2 border-l-2 border-accent/40 md:bottom-12 md:left-12 md:block" />
      <div className="pointer-events-none absolute bottom-6 right-6 z-10 hidden size-10 border-b-2 border-r-2 border-accent/40 md:bottom-12 md:right-12 md:block" />

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)]">
        {/* HEADER (Rata Tengah & Mengambang) */}
        <div className="colophon-drift-sway mb-12 flex flex-col items-center text-center md:mb-16">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex size-5 items-center justify-center border border-accent/40 bg-accent/10">
              <Check size={12} className="text-accent" />
            </div>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent">
              {colophon.title}
            </span>
          </div>

          <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-accent md:mb-4 md:text-sm md:tracking-[0.3em]">
            {colophon.thankYou}
          </p>
          <h2
            id={`${entry.id}-heading`}
            className="font-display text-[clamp(1.4rem,4.5vw,3.5rem)] uppercase leading-[1.1] text-text-1"
          >
            {colophon.subtitle}
          </h2>
          <p className="mt-4 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-text-3 md:mt-6 md:text-xs md:tracking-[0.2em]">
            {colophon.tagline}
          </p>
          <div className="mt-6 flex h-5 items-end justify-center gap-1 md:mt-8 md:h-6">
            {barHeights.map((height, i) => (
              <div
                key={i}
                className="w-1 bg-accent md:w-1.5"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mb-12 h-px w-full max-w-4xl bg-accent/20 md:mb-16" />

        {/* GRUP CREDITS (Masing-masing Mengambang dengan Animasi Berbeda) */}
        <div className="flex flex-col items-center gap-12 md:gap-16">
          {colophon.groups.map((group, idx) => (
            <div
              key={group.title}
              className={`${driftClasses[idx % driftClasses.length]} flex w-full flex-col items-center text-center`}
              style={{ animationDelay: `${idx * 0.8}s` }}
            >
              <div className="mb-6 flex items-center gap-3 md:mb-8">
                <span className="h-px w-6 bg-accent/50" />
                <h3 className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-text-1 md:text-sm">
                  {group.title}
                </h3>
                <span className="h-px w-6 bg-accent/50" />
              </div>

              <ul className="flex flex-col items-center gap-5 md:gap-7">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col items-center gap-1 md:gap-1.5"
                  >
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-text-3 md:text-[0.65rem]">
                      {item.label}
                    </span>
                    <span className="font-display text-sm uppercase tracking-wide text-text-1 md:text-lg">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 h-px w-full max-w-4xl bg-accent/20 md:mt-20" />

        {/* FOOTER BAWAH */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 font-mono text-[0.55rem] uppercase tracking-widest text-text-3 md:flex-row md:gap-6 md:text-[0.65rem]">
          <p className="w-full text-center md:w-auto md:text-left">
            {colophon.copyright}
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden h-px w-8 bg-accent/30 md:block" />
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="text-accent">SYSTEM ONLINE</span>
            </div>
            <div className="hidden h-px w-8 bg-accent/30 md:block" />
          </div>
          <p className="w-full text-center md:w-auto md:text-right">
            DESIGNED & BUILT BY MASKANI
          </p>
        </div>
      </div>
    </footer>
  );
}
