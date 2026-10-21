// MASKANI — HeroPortrait (Layout Kiri-Kanan + Futuristic HUD).

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
    <div className="relative flex w-full flex-col items-center justify-between gap-10 md:flex-row md:items-center md:gap-8">
      {/* ===== BACKGROUND HUD (LOGO & ORBIT) ===== */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute size-[300px] rounded-full bg-accent/10 blur-[100px] md:size-[600px]" />
        <div className="absolute opacity-10 mix-blend-screen">
          <BrandLogo className="w-[600px] text-accent md:w-[1000px]" />
        </div>
        <div
          data-hero-orbit
          className="absolute aspect-square w-[80%] rounded-full border border-accent/20 border-dashed opacity-40 md:w-[60%]"
        />
        <div className="absolute aspect-square w-[90%] rounded-full border border-hairline md:w-[70%]" />
        <div className="absolute left-0 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
        <div className="absolute right-0 bottom-1/4 h-32 w-px bg-gradient-to-t from-transparent via-accent/50 to-transparent" />
      </div>

      {/* ===== KIRI: Teks MASKANI + Tagline ===== */}
      {/* Lebar diperbesar menjadi 65% agar teks tidak terlipat */}
      <div className="relative z-10 flex w-full flex-col justify-center gap-8 md:w-[65%]">
        {/* Mask Reveal Wrapper (Tambah pb-4 agar huruf tidak terpotong di bawah) */}
        <div className="overflow-hidden pb-4">
          <h1
            id="hero-heading"
            data-hero-name
            className="relative z-10 w-full whitespace-nowrap text-center font-display text-d1 text-text-1 md:text-left"
          >
            {title}
          </h1>
        </div>

        {children}
      </div>

      {/* ===== KANAN: Foto Potret (Lebar disesuaikan jadi 35%) ===== */}
      <div className="relative z-10 flex w-full justify-center md:w-[35%]">
        <div
          data-hero-photo-wrapper
          className="relative aspect-[3/4] w-[80%] max-w-[400px] md:-mt-12 md:w-full md:max-w-[450px]"
        >
          <div data-tilt className="relative h-full w-full cursor-none">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 35vw, 80vw"
              priority
              className="pointer-events-none object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
