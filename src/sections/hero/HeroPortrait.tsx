// MASKANI — HeroPortrait (Layout Kiri-Kanan).
//
// Kiri: Teks MASKANI solid + Tagline & CTA (children).
// Kanan: Foto Potret (dinaikkan sedikit & diberi jarak ekstra).

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
    // md:gap-16 memberi jarak lebih lebar antara teks dan foto
    <div className="relative flex w-full flex-col items-center justify-between gap-10 md:flex-row md:items-center md:gap-16">
      {/* LOGO PARADOKS DIAMETRAL — Di belakang teks & foto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex w-[120%] -translate-x-1/2 -translate-y-1/2 items-center justify-center mix-blend-screen md:w-[90%]"
      >
        <BrandLogo className="w-full max-w-[800px] text-white/10 drop-shadow-[0_0_60px_rgba(138,164,255,0.3)]" />
      </div>

      {/* KIRI: Teks MASKANI + Tagline */}
      <div className="relative z-10 flex w-full flex-col justify-center gap-8 md:w-[55%]">
        <h1
          id="hero-heading"
          data-hero-name
          className="relative z-10 w-full text-center font-display text-d1 text-text-1 md:text-left"
        >
          {title}
        </h1>

        {/* Tagline & Tombol */}
        {children}
      </div>

      {/* KANAN: Foto Potret */}
      <div className="relative z-10 flex w-full justify-center md:w-[40%]">
        {/* md:-mt-12 akan menaikkan foto sedikit ke atas */}
        <div className="relative aspect-[3/4] w-[80%] max-w-[400px] md:-mt-12 md:w-full md:max-w-[450px]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 40vw, 80vw"
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
