// MASKANI — BrandLogo "Paradoks Diametral" (Glassmorphism)
//
// SVG murni yang dibuat semirip mungkin dengan logo di referensi.
// Efek (blend mode screen, glow, low opacity) diatur di wrapper Hero.

import type { JSX } from "react";

export function BrandLogo({
  className = "",
}: {
  className?: string;
}): JSX.Element {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Lingkaran Luar */}
      <circle
        cx="200"
        cy="200"
        r="180"
        stroke="currentColor"
        strokeWidth="2"
        className="opacity-80"
      />

      {/* Segitiga Terbalik (Paradoks) */}
      <path
        d="M 60 120 L 340 120 L 200 360 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
      />

      {/* Garis dalam untuk efek kaca */}
      <circle
        cx="200"
        cy="200"
        r="170"
        stroke="currentColor"
        strokeWidth="0.5"
        className="opacity-40"
      />
    </svg>
  );
}
