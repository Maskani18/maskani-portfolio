// MASKANI — MediaCard (V-1, T-V-03).
//
// Menggantikan Frame/MediaFrame. Kartu media bersudut membulat besar
// (--radius-media) dengan bayangan lembut statis (--shadow-media).
// Tanpa siku sudut. Slot kosong tidak dirender (return null).
//
// Sebab: keputusan pemilik 10 Okt 2026 (DL-014a) — semua foto memakai
// kartu bersudut membulat seperti referensi video.
// Tujuan: satu komponen untuk semua media di section manapun.
// Perilaku: murni presentasi. Tidak ada state, tidak ada efek.

import Image from "next/image";
import type { JSX } from "react";

export type MediaCardVariant = "square" | "portrait" | "landscape";

export type MediaCardProps = {
  /** Path relatif ke /public. Kosong → tidak dirender. */
  src: string;
  /** Alt wajib. Boleh "" hanya bila decorative: true. */
  alt: string;
  variant?: MediaCardVariant;
  /** Override rasio aspect untuk section yang butuh (mis. 8/7, 7/5, 7/10). */
  aspectOverride?: string;
  caption?: string;
  /** Angka `FIG.` opsional; merujuk caption di halaman report. */
  figNumber?: string;
  priority?: boolean;
  /** Next.js 16: LCP image sebaiknya pakai loading="eager". */
  loading?: "lazy" | "eager";
  sizes?: string;
  /** Dekoratif: alt dikosongkan + aria-hidden. */
  decorative?: boolean;
  className?: string;
};

const ASPECT: Record<MediaCardVariant, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
};

export function MediaCard({
  src,
  alt,
  variant = "landscape",
  aspectOverride,
  caption,
  figNumber,
  priority = false,
  loading,
  sizes = "(min-width: 1024px) 800px, 100vw",
  decorative = false,
  className = "",
}: MediaCardProps): JSX.Element | null {
  if (!src) return null;

  const aspectClass = aspectOverride ?? ASPECT[variant];

  return (
    <figure className={`flex flex-col gap-3 ${className}`.trim()}>
      <div
        className={`relative overflow-hidden rounded-[var(--radius-media)] shadow-media ${aspectClass}`}
      >
        <Image
          src={src}
          alt={decorative ? "" : alt}
          fill
          sizes={sizes}
          loading={loading ?? (priority ? "eager" : undefined)}
          aria-hidden={decorative || undefined}
          className="object-cover"
        />
      </div>

      {figNumber ? (
        <figcaption className="font-mono text-micro uppercase tracking-wide text-text-3">
          FIG. {figNumber}
          {caption ? ` — ${caption}` : ""}
        </figcaption>
      ) : caption ? (
        <figcaption className="max-w-[62ch] text-body text-text-2">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
