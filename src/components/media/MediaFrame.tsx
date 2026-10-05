// MASKANI — MediaFrame (§6.3, §8.3).
//
// Membungkus Frame + gambar. Aset SIDALEKAS belum ada (PF-07); saat aset
// menyusul, MediaFrame siap dipakai. Slot tanpa aset tidak dirender oleh
// pemanggil, bukan di sini.

import Image from "next/image";
import type { JSX } from "react";

import { Frame } from "./Frame";

export type MediaFrameProps = {
  file: string;
  alt: string;
  width: number;
  height: number;
  figNumber?: string;
  caption?: string;
  sizes?: string;
  priority?: boolean;
};

export function MediaFrame({
  file,
  alt,
  width,
  height,
  figNumber,
  caption,
  sizes = "(min-width: 1024px) 800px, 100vw",
  priority = false,
}: MediaFrameProps): JSX.Element {
  // exactOptionalPropertyTypes: jangan meneruskan `undefined` ke prop
  // opsional. Pakai spread kondisional.
  const frameProps = figNumber !== undefined ? { figNumber } : {};
  return (
    <Frame {...frameProps}>
      <div className="relative overflow-hidden">
        <Image
          src={file}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <p className="mt-3 max-w-[62ch] text-body text-text-2">{caption}</p>
      ) : null}
    </Frame>
  );
}
