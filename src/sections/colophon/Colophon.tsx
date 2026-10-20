import type { JSX } from "react";
import { Check } from "lucide-react";

import { colophon } from "@/content/colophon";
import { getSection } from "@/content/sections";

export function Colophon(): JSX.Element {
  const entry = getSection("colophon");

  // Data statis untuk Bar Chart kecil di tengah
  const barHeights = [40, 70, 30, 90, 50, 100, 60, 80, 40];

  return (
    <footer
      id={entry.id}
      aria-labelledby={`${entry.id}-heading`}
      className="relative overflow-hidden bg-[#090B0D] px-[var(--gutter)] py-20 md:py-28"
    >
      {/* ===== HIASAN SUDUT HUD (CORNER BRACKETS) ===== */}
      <div className="pointer-events-none absolute left-6 top-6 size-10 border-l-2 border-t-2 border-accent/40 md:left-12 md:top-12" />
      <div className="pointer-events-none absolute right-6 top-6 size-10 border-r-2 border-t-2 border-accent/40 md:right-12 md:top-12" />
      <div className="pointer-events-none absolute bottom-6 left-6 size-10 border-b-2 border-l-2 border-accent/40 md:bottom-12 md:left-12" />
      <div className="pointer-events-none absolute bottom-6 right-6 size-10 border-b-2 border-r-2 border-accent/40 md:bottom-12 md:right-12" />

      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {/* ===== HEADER END CREDITS ===== */}
        <div className="relative mb-16">
          {/* Badge Kiri Atas */}
          <div className="absolute left-0 top-0 hidden items-center gap-2 md:flex">
            <div className="flex size-5 items-center justify-center border border-accent/40 bg-accent/10">
              <Check size={12} className="text-accent" />
            </div>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent">
              {colophon.title}
            </span>
          </div>

          {/* Teks Tengah */}
          <div className="flex flex-col items-center text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
              {colophon.thankYou}
            </p>

            <h2
              id={`${entry.id}-heading`}
              className="font-display text-[clamp(1.8rem,3.5vw,3.5rem)] uppercase leading-[1.1] text-text-1"
            >
              {colophon.subtitle}
            </h2>

            <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-3 md:text-xs">
              {colophon.tagline}
            </p>

            {/* Bar Chart Kecil di Tengah */}
            <div
              className="mt-8 flex h-6 items-end justify-center gap-1"
              aria-hidden="true"
            >
              {barHeights.map((height, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-accent"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* GARIS PEMISAH ATAS */}
        <div className="mb-12 h-px w-full bg-accent/20" />

        {/* ===== GRID 5 KOLOM ===== */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 text-left sm:grid-cols-2 lg:grid-cols-5">
          {colophon.groups.map((group, idx) => (
            <div key={group.title} className="flex flex-col gap-6">
              {/* Title Group dengan Garis */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">
                  0{idx + 1}
                </span>
                <span className="h-px w-4 bg-accent/50" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-text-1">
                  {group.title}
                </h3>
              </div>

              {/* List Item */}
              <ul className="flex flex-col gap-5">
                {group.items.map((item) => (
                  <li key={item.label} className="flex flex-col gap-1">
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-text-3">
                      {item.label}
                    </span>
                    <span className="font-display text-sm uppercase tracking-wide text-text-1">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* GARIS PEMISAH BAWAH */}
        <div className="mt-20 h-px w-full bg-accent/20" />

        {/* ===== FOOTER BAWAH ===== */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 font-mono text-[0.65rem] uppercase tracking-widest text-text-3 md:flex-row">
          <p className="w-full text-center md:w-auto md:text-left">
            {colophon.copyright}
          </p>

          {/* System Online dengan Garis di Kiri Kanan */}
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-accent/30" />
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="text-accent">SYSTEM ONLINE</span>
            </div>
            <div className="h-px w-8 bg-accent/30" />
          </div>

          <p className="w-full text-center md:w-auto md:text-right">
            DESIGNED & BUILT BY MASKANI
          </p>
        </div>
      </div>
    </footer>
  );
}
