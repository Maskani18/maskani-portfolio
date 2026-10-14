// MASKANI — HeroPortrait (V-1, DL-014a).
//
// Sandwich tiga lapis: judul solid (z=10) → potret cutout (z=20) →
// judul outline (z=30, aria-hidden).
//
// Sebab: keputusan pemilik 10 Okt 2026 — potret cutout di Hero.
// Tujuan: satu komponen untuk tiga lapis tanpa duplikasi aksesibel.
//
// Aspect: container dikunci ke 9/16 (portrait tegak) supaya foto
// portrait TIDAK ter-crop oleh `object-cover`. Kalau foto Anda
// rasionya berbeda (mis. 3/4 atau 2/3), ubah `aspect-[9/16]`.

import Image from "next/image";
import type { JSX } from "react";

export type HeroPortraitProps = {
  src: string;
  alt: string;
  title: string;
};

export function HeroPortrait({
  src,
  alt,
  title,
}: HeroPortraitProps): JSX.Element {
  return (
    <div className="relative">
      {/* h1 solid — sumber aksesibel utama, z=10 */}
      <h1
        id="hero-heading"
        className="relative z-10 font-display text-d1 text-text-1"
      >
        {title}
      </h1>

      {/* Potret cutout — z=20.
       * Container dikunci aspect-[9/16] portrait, di-center ke h1.
       * Kalau foto Anda rasio lain, ubah ke: aspect-[3/4] atau aspect-[2/3].
       * Kalau perlu lebih besar/kecil: ubah md:w-[30%] → md:w-[36%] / md:w-[26%].
       * Kalau perlu digeser naik/turun: ubah top-1/2 → top-[40%] / top-[60%]. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 aspect-[9/16] w-[70%] -translate-x-1/2 -translate-y-1/2 md:left-[40%] md:w-[30%] md:translate-x-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 30vw, 70vw"
          priority
          className="object-contain object-bottom"
        />
      </div>

      {/* Duplikat outline — dekoratif, z=30, aria-hidden */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 select-none font-display text-d1 text-transparent"
        style={{
          WebkitTextStroke: "var(--stroke-outline)",
        }}
      >
        {title}
      </span>
    </div>
  );
}
