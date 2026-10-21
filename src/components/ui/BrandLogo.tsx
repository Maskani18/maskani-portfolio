// MASKANI — BrandLogo "Paradoks Diametral" (Neon Gradient & Glow).

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
      <defs>
        {/* Gradient Warna: Pink -> Biru -> Hijau */}
        <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF00FF" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        {/* Filter Efek Pendaran (Glow) */}
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Lingkaran Luar */}
      <circle
        cx="200"
        cy="200"
        r="180"
        stroke="url(#neon-gradient)"
        strokeWidth="4"
        filter="url(#neon-glow)"
      />

      {/* Segitiga Terbalik */}
      <path
        d="M 60 120 L 340 120 L 200 360 Z"
        stroke="url(#neon-gradient)"
        strokeWidth="4"
        fill="transparent"
        filter="url(#neon-glow)"
      />

      {/* Garis Dalam */}
      <circle
        cx="200"
        cy="200"
        r="170"
        stroke="url(#neon-gradient)"
        strokeWidth="1.5"
        className="opacity-60"
        filter="url(#neon-glow)"
      />
    </svg>
  );
}
