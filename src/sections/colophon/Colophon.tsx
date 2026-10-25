"use client";

import type { JSX } from "react";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { useLanguage } from "@/context/LanguageContext";
import { colophon as colId } from "@/content/colophon";
import { colophon as colEn } from "@/content/en/colophon";
import { getSection } from "@/content/sections";

export function Colophon(): JSX.Element {
  const entry = getSection("colophon");
  const { lang } = useLanguage();
  const colophon = lang === "id" ? colId : colEn;

  const barHeights = [40, 70, 30, 90, 50, 100, 60, 80, 40, 60, 90, 40];

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
      className="relative overflow-hidden bg-[#090B0D] px-[var(--gutter)] py-16 md:py-32"
    >
      {/* ===== BACKGROUND LOGO PARADOKS (NEON RAKSASA) ===== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.03] mix-blend-screen md:opacity-[0.05]"
        aria-hidden="true"
      >
        {/* Logo Kiri Atas */}
        <div className="absolute -left-[10%] -top-[5%] w-[80vw] rotate-12 md:w-[50vw]">
          <BrandLogo className="w-full text-accent" />
        </div>

        {/* Logo Kanan Bawah */}
        <div className="absolute -bottom-[5%] -right-[10%] w-[80vw] -rotate-12 md:w-[50vw]">
          <BrandLogo className="w-full text-accent" />
        </div>

        {/* Logo Tengah (Sangat Samar) */}
        <div className="absolute left-1/2 top-1/2 w-[100vw] -translate-x-1/2 -translate-y-1/2 opacity-50 md:w-[80vw]">
          <BrandLogo className="w-full text-accent" />
        </div>
      </div>

      {/* ===== SPACE BACKGROUND & GRID ===== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(138,164,255,0.1),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(138,164,255,0.05),transparent_70%)]" />

        {/* Grid Lantai Sci-Fi */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        <div className="colophon-starfield-slow absolute inset-0 opacity-30" />
        <div className="colophon-starfield-fast absolute inset-0 opacity-40" />
      </div>

      {/* Garis Scanner Berjalan */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-10">
        <div className="h-[2px] w-full animate-[hud-scanline_8s_linear_infinite] bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* ===== HEADER ===== */}
        <div className="colophon-drift-sway mb-16 flex flex-col items-center text-center md:mb-24">
          {/* Garis & Teks Kecil */}
          <div className="mb-8 flex w-full max-w-xs items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-accent md:text-xs">
              {colophon.title}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-text-3 md:mb-6 md:text-sm">
            {colophon.thankYou}
          </p>

          {/* Subtitle Besar */}
          <h2
            id={`${entry.id}-heading`}
            className="font-display text-[clamp(1.8rem,6vw,4.5rem)] uppercase leading-[1.1] text-text-1 drop-shadow-[0_0_30px_rgba(138,164,255,0.4)]"
          >
            {colophon.subtitle}
          </h2>

          <p className="mt-6 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-text-3 md:mt-8 md:text-xs">
            {colophon.tagline}
          </p>

          {/* Equalizer Bars */}
          <div className="mt-8 flex h-8 items-end justify-center gap-1.5 md:mt-10 md:h-12">
            {barHeights.map((height, i) => (
              <div
                key={i}
                className="w-1.5 bg-accent/80 shadow-[0_0_8px_rgba(138,164,255,0.6)] md:w-2"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mb-16 h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent md:mb-24" />

        {/* ===== GRUP CREDITS ===== */}
        <div className="flex flex-col items-center gap-16 md:gap-24">
          {/* Baris 1: Creator & Tech */}
          <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
            {colophon.groups.slice(0, 2).map((group, idx) => (
              <div
                key={group.title}
                className={`${driftClasses[idx % driftClasses.length]} flex flex-col items-center text-center md:items-start md:text-left`}
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                <div className="mb-6 flex items-center justify-center gap-3 md:mb-8 md:justify-start">
                  <span className="hidden h-px w-8 bg-accent/50 md:block" />
                  <h3 className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.3em] text-text-1 md:text-sm">
                    {group.title}
                  </h3>
                </div>

                <ul className="flex flex-col items-center gap-5 md:items-start md:gap-6">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex flex-col items-center gap-1 md:items-start"
                    >
                      <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-text-3 md:text-[0.65rem]">
                        {item.label}
                      </span>
                      <span className="font-display text-base uppercase tracking-wide text-text-1 md:text-2xl">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Baris 2: Motion */}
          {colophon.groups.slice(2, 3).map((group, idx) => (
            <div
              key={group.title}
              className={`${driftClasses[(idx + 2) % driftClasses.length]} flex w-full flex-col items-center text-center`}
              style={{ animationDelay: "1s" }}
            >
              <div className="mb-6 flex items-center justify-center gap-4 md:mb-8">
                <span className="h-px w-12 bg-accent/50 md:w-24" />
                <h3 className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.3em] text-text-1 md:text-sm">
                  {group.title}
                </h3>
                <span className="h-px w-12 bg-accent/50 md:w-24" />
              </div>

              <ul className="flex flex-col flex-wrap items-center justify-center gap-6 md:flex-row md:gap-16">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col items-center gap-1"
                  >
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-text-3 md:text-[0.65rem]">
                      {item.label}
                    </span>
                    <span className="font-display text-base uppercase tracking-wide text-text-1 md:text-xl">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Baris 3: Typography & Assets */}
          <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
            {colophon.groups.slice(3, 5).map((group, idx) => (
              <div
                key={group.title}
                className={`${driftClasses[(idx + 4) % driftClasses.length]} flex flex-col items-center text-center md:items-end md:text-right`}
                style={{ animationDelay: `${idx * 0.7}s` }}
              >
                <div className="mb-6 flex items-center justify-center gap-3 md:mb-8 md:justify-end">
                  <h3 className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.3em] text-text-1 md:text-sm">
                    {group.title}
                  </h3>
                  <span className="hidden h-px w-8 bg-accent/50 md:block" />
                </div>

                <ul className="flex flex-col items-center gap-5 md:items-end md:gap-6">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex flex-col items-center gap-1 md:items-end"
                    >
                      <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-text-3 md:text-[0.65rem]">
                        {item.label}
                      </span>
                      <span className="font-display text-base uppercase tracking-wide text-text-1 md:text-2xl">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent md:mt-28" />

        {/* ===== FOOTER BAWAH ===== */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 font-mono text-[0.55rem] uppercase tracking-widest text-text-3 md:flex-row md:gap-4 md:text-[0.65rem]">
          <p className="w-full text-center md:w-auto md:text-left">
            {colophon.copyright}
          </p>

          <div className="flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <div className="flex items-center gap-2">
              <span className="size-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)]" />
              <span className="text-accent">
                {lang === "id" ? "SISTEM AKTIF" : "SYSTEM ONLINE"}
              </span>
            </div>
          </div>

          <p className="w-full text-center md:w-auto md:text-right">
            {lang === "id"
              ? "DIRANCANG & DIBANGUN OLEH MASKANI"
              : "DESIGNED & BUILT BY MASKANI"}
          </p>
        </div>
      </div>
    </footer>
  );
}
