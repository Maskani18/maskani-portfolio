// MASKANI — HeroPortrait (Responsive Mobile-First).

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
    <div className="relative flex w-full flex-col items-center justify-between gap-12 md:flex-row md:items-center md:gap-16">
      {/* BACKGROUND HUD (Hanya muncul di desktop agar tidak mengganggu mobile) */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center overflow-hidden md:flex">
        <div className="absolute size-[600px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute opacity-10 mix-blend-screen">
          <BrandLogo className="w-[1000px] text-accent" />
        </div>
        <div
          data-hero-orbit
          className="absolute aspect-square w-[60%] rounded-full border border-accent/20 border-dashed opacity-40"
        />
        <div className="absolute aspect-square w-[70%] rounded-full border border-hairline" />
      </div>

      {/* KIRI: Teks MASKANI + Tagline */}
      <div className="relative z-10 flex w-full flex-col justify-center gap-6 md:w-[55%] md:gap-8">
        {/* Ukuran font disesuaikan agar tidak kepotong di HP */}
        <div className="overflow-hidden pb-2 md:pb-4">
          <h1
            id="hero-heading"
            data-hero-name
            className="relative z-10 w-full text-center font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] text-text-1 md:text-left md:text-d1"
          >
            {title}
          </h1>
        </div>

        {children}
      </div>

      {/* KANAN: Foto Potret (Di HP ada di bawah teks, di desktop di kanan) */}
      <div className="relative z-10 flex w-full justify-center md:w-[40%]">
        <div
          data-hero-photo-wrapper
          className="relative aspect-[3/4] w-[85%] max-w-[320px] md:-mt-12 md:w-full md:max-w-[450px]"
        >
          <div data-tilt className="relative h-full w-full cursor-none">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              priority
              className="pointer-events-none object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
