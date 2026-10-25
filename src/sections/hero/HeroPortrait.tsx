// MASKANI — HeroPortrait (Mobile & Desktop: Teks & CTA di Kiri).

import Image from "next/image";
import type { JSX, ReactNode } from "react";
import { useState } from "react";

import { BrandLogo } from "@/components/ui/BrandLogo";

export type HeroPortraitProps = {
  src: string;
  alt: string;
  title: string;
  children?: ReactNode;
};

export function HeroPortrait({
  src,
  alt,
  title,
  children,
}: HeroPortraitProps): JSX.Element {
  const [isSwinging, setIsSwinging] = useState(false);

  return (
    <div className="relative flex w-full flex-col gap-6 md:gap-16">
      {/* Baris Utama: Teks + CTA (Kiri) & Foto (Kanan) */}
      {/* PERUBAHAN: items-start diganti items-center agar sejajar tengah vertikal */}
      <div className="relative flex w-full flex-row items-center justify-between gap-4 md:gap-16">
        {/* BACKGROUND HUD */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <div className="absolute size-[250px] rounded-full bg-accent/15 blur-[80px] md:size-[600px] md:blur-[120px]" />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(138,164,255,0.2) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute opacity-20 mix-blend-screen md:opacity-30">
            <BrandLogo className="w-[300px] md:w-[1200px]" />
          </div>
          <div
            data-hero-orbit
            className="absolute aspect-square w-[80%] rounded-full border border-accent/20 border-dashed opacity-50 md:w-[60%]"
          />
          <div className="absolute aspect-square w-[90%] rounded-full border border-white/5 md:w-[70%]" />
        </div>

        {/* KOLOM KIRI: Judul, Tagline, & Tombol */}
        {/* PERUBAHAN: justify-start diganti justify-center */}
        <div className="relative z-10 flex w-[60%] flex-col items-center justify-center gap-4 text-center md:w-[55%] md:gap-8">
          <div className="overflow-visible pb-1 md:pb-4">
            <h1
              id="hero-heading"
              data-hero-name
              className="relative z-10 w-full text-center font-display text-[clamp(1.8rem,8vw,6rem)] leading-[0.9] text-text-1 md:text-d1 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              {title}
            </h1>
          </div>
          {children}
        </div>

        {/* KOLOM KANAN: ID Card Lanyard */}
        <div
          data-hero-photo-wrapper
          className="relative z-10 flex w-[40%] justify-center pt-16 md:w-[40%] md:pt-24"
        >
          {/* WRAPPER LANYARD */}
          <div
            onClick={() => setIsSwinging(!isSwinging)}
            className={`relative flex w-full max-w-[110px] flex-col items-center cursor-pointer md:max-w-[180px] ${isSwinging ? "animate-lanyard-fast" : "animate-lanyard"}`}
          >
            {/* 1. TALI LANYARD */}
            <div className="absolute -top-[80px] flex h-[80px] w-5 flex-col items-center justify-start border-x border-white/5 bg-[#2a3441] shadow-[0_0_10px_rgba(0,0,0,0.5)] md:-top-[110px] md:h-[110px] md:w-7">
              <div className="flex h-full w-full flex-col items-center justify-evenly opacity-40">
                <span className="-rotate-90 whitespace-nowrap font-mono text-[5px] tracking-[0.2em] text-white md:text-[6px]">
                  MASKANI
                </span>
                <span className="-rotate-90 whitespace-nowrap font-mono text-[5px] tracking-[0.2em] text-white md:text-[6px]">
                  PORTFOLIO
                </span>
                <span className="-rotate-90 whitespace-nowrap font-mono text-[5px] tracking-[0.2em] text-white md:text-[6px]">
                  MASKANI
                </span>
              </div>
            </div>

            {/* 2. KLIP LOGAM */}
            <div className="absolute -top-4 z-20 flex flex-col items-center md:-top-5">
              <div className="h-3 w-8 rounded-sm border border-zinc-500 bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-md md:h-4 md:w-10" />
              <div className="h-5 w-2.5 rounded-b-full border-2 border-t-0 border-zinc-400 md:h-6 md:w-3.5" />
            </div>

            {/* 3. KARTU ID */}
            <div className="group relative z-10 w-full origin-top overflow-hidden rounded-sm border border-white/10 bg-[#1a1f26] p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-105 md:p-2">
              <div className="absolute left-1/2 top-2 z-20 h-1.5 w-6 -translate-x-1/2 rounded-full bg-black shadow-inner md:top-2.5 md:h-2 md:w-8" />
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-white/5 bg-[#111418]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 768px) 20vw, 30vw"
                  priority
                  className="pointer-events-none object-cover object-top"
                />
              </div>
              <div className="mt-2 flex w-full items-end justify-between px-0.5 pb-0.5">
                <div className="flex h-3 items-end gap-[1px] opacity-60 md:h-4">
                  <div className="h-full w-[1.5px] bg-white" />
                  <div className="h-2/3 w-[1px] bg-white" />
                  <div className="h-full w-[2px] bg-white" />
                  <div className="h-3/4 w-[1px] bg-white" />
                  <div className="h-full w-[1.5px] bg-white" />
                  <div className="h-1/2 w-[1px] bg-white" />
                  <div className="h-full w-[2px] bg-white" />
                </div>
                <span className="font-mono text-[0.4rem] font-bold text-white/70 md:text-[0.55rem]">
                  A-2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
