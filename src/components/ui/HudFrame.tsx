import Image from "next/image";
import type { JSX } from "react";

export function HudFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}): JSX.Element {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[450px]">
      {/* Pendaran Cahaya Biru di Belakang */}
      <div
        className="absolute inset-0 scale-90 bg-accent/20 blur-[80px]"
        aria-hidden="true"
      />

      {/* Bingkai Garis HUD */}
      <div
        className="absolute inset-0 border border-accent/40"
        style={{
          clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
        }}
        aria-hidden="true"
      />

      {/* Garis Aksen Siku Kiri Atas */}
      <div
        className="absolute left-0 top-[10%] h-24 w-[2px] bg-accent"
        aria-hidden="true"
      />
      <div
        className="absolute left-[10%] top-0 h-[2px] w-24 bg-accent"
        aria-hidden="true"
      />

      {/* Garis Aksen Siku Kanan Bawah */}
      <div
        className="absolute right-0 bottom-[10%] h-24 w-[2px] bg-accent"
        aria-hidden="true"
      />
      <div
        className="absolute right-[10%] bottom-0 h-[2px] w-24 bg-accent"
        aria-hidden="true"
      />

      {/* Garis Miring Hiasan di Kanan */}
      <div
        className="absolute -right-4 bottom-12 flex flex-col gap-2"
        aria-hidden="true"
      >
        <div className="h-[2px] w-8 rotate-[-45deg] bg-accent/80" />
        <div className="h-[2px] w-8 rotate-[-45deg] bg-accent/80" />
        <div className="h-[2px] w-8 rotate-[-45deg] bg-accent/80" />
      </div>

      {/* Foto Potret di dalam Bingkai */}
      <div
        className="absolute inset-[1px] overflow-hidden"
        style={{
          clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
