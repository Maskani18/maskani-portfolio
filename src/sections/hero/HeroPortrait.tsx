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
        {/* BACKGROUND HUD (LOGO NEON DI TENGAH) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <div className="absolute size-[250px] rounded-full bg-accent/20 blur-[80px] md:size-[600px] md:blur-[120px]" />
          <div className="absolute opacity-40 mix-blend-screen">
            <BrandLogo className="w-[300px] md:w-[1200px]" />
          </div>

          <div
            data-hero-orbit
            className="absolute aspect-square w-[80%] rounded-full border border-accent/30 border-dashed opacity-50 md:w-[60%]"
          />
          <div className="absolute aspect-square w-[90%] rounded-full border border-white/10 md:w-[70%]" />
        </div>

        {/* KOLOM KIRI: Judul, Tagline, & Tombol */}
        <div className="relative z-10 flex w-[60%] flex-col justify-start gap-4 md:w-[55%] md:gap-8">
          <div className="overflow-visible pb-1 md:pb-4">
            <h1
              id="hero-heading"
              data-hero-name
              className="relative z-10 w-full text-left font-display text-[clamp(1.8rem,8vw,6rem)] leading-[0.9] text-text-1 md:text-d1"
            >
              {title}
            </h1>
          </div>

          {children}
        </div>

        {/* KOLOM KANAN: Foto Potret dengan Bingkai HUD Elegan */}
        <div className="relative z-10 flex w-[40%] justify-center pt-2 md:w-[40%] md:pt-0">
          <div
            data-hero-photo-wrapper
            className="relative aspect-[3/4] w-full max-w-[130px] md:-mt-12 md:max-w-[450px]"
          >
            {/* === BINGKAI HUD STATIS (TANPA SCANLINE) === */}
            <div className="absolute -inset-1 z-0 md:-inset-3">
              {/* Garis tepi tipis samar */}
              <div className="absolute inset-0 border border-accent/20" />

              {/* Sudut Siku Aksen */}
              <div className="absolute -left-1 -top-1 size-4 border-l-2 border-t-2 border-accent md:size-8" />
              <div className="absolute -right-1 -top-1 size-4 border-r-2 border-t-2 border-accent md:size-8" />
              <div className="absolute -bottom-1 -left-1 size-4 border-b-2 border-l-2 border-accent md:size-8" />
              <div className="absolute -bottom-1 -right-1 size-4 border-b-2 border-r-2 border-accent md:size-8" />
            </div>

            {/* Gambar Foto */}
            <div data-tilt className="relative z-10 h-full w-full cursor-none">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 40vw, 40vw"
                priority
                className="pointer-events-none object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
