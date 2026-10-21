// MASKANI — HeroPortrait (Mobile & Desktop: Teks & CTA di Kiri).

import Image from "next/image";
import type { JSX, ReactNode } from "react";

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
  return (
    <div className="relative flex w-full flex-col gap-6 md:gap-16">
      {/* Baris Utama: Teks + CTA (Kiri) & Foto (Kanan) */}
      <div className="relative flex w-full flex-row items-start justify-between gap-4 md:items-center md:gap-16">
        {/* BACKGROUND HUD (LOGO NEON & GRID DI TENGAH) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          {/* Cahaya Nebula */}
          <div className="absolute size-[250px] rounded-full bg-accent/15 blur-[80px] md:size-[600px] md:blur-[120px]" />

          {/* Grid Radial Halus */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(138,164,255,0.2) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Logo Raksasa */}
          <div className="absolute opacity-20 mix-blend-screen md:opacity-30">
            <BrandLogo className="w-[300px] md:w-[1200px]" />
          </div>

          {/* Orbit Cincin */}
          <div
            data-hero-orbit
            className="absolute aspect-square w-[80%] rounded-full border border-accent/20 border-dashed opacity-50 md:w-[60%]"
          />
          <div className="absolute aspect-square w-[90%] rounded-full border border-white/5 md:w-[70%]" />
        </div>

        {/* KOLOM KIRI: Judul, Tagline, & Tombol */}
        <div className="relative z-10 flex w-[60%] flex-col justify-start gap-4 md:w-[55%] md:gap-8">
          <div className="overflow-visible pb-1 md:pb-4">
            <h1
              id="hero-heading"
              data-hero-name
              className="relative z-10 w-full text-left font-display text-[clamp(1.8rem,8vw,6rem)] leading-[0.9] text-text-1 md:text-d1 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              {title}
            </h1>
          </div>

          {children}
        </div>

        {/* KOLOM KANAN: Foto Potret dengan Bingkai Minimalis */}
        <div className="relative z-10 flex w-[40%] justify-center pt-2 md:w-[40%] md:pt-0">
          <div
            data-hero-photo-wrapper
            className="group relative aspect-[3/4] w-full max-w-[130px] md:-mt-12 md:max-w-[450px]"
          >
            {/* === EFEK GLOW DI BELAKANG FOTO (Sangat Halus) === */}
            <div className="absolute -inset-1 z-0 rounded-2xl bg-gradient-to-tr from-accent/10 to-transparent opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* === BINGKAI MINIMALIS (Hanya 2 Sudut) === */}
            <div className="absolute -inset-1 z-0 md:-inset-2">
              {/* Garis tepi luar yang sangat tipis */}
              <div className="absolute inset-0 rounded-lg border border-white/5 transition-colors duration-500 group-hover:border-accent/20" />

              {/* Sudut Kiri Atas */}
              <div className="absolute -left-0.5 -top-0.5 size-3 border-l-[1.5px] border-t-[1.5px] border-accent/70 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-accent md:size-5" />

              {/* Sudut Kanan Bawah */}
              <div className="absolute -bottom-0.5 -right-0.5 size-3 border-b-[1.5px] border-r-[1.5px] border-accent/70 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-accent md:size-5" />
            </div>

            {/* Gambar Foto */}
            <div data-tilt className="relative z-10 h-full w-full cursor-none">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 40vw, 40vw"
                priority
                className="pointer-events-none object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
