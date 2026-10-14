// MASKANI — SkillIcon (DL-016).
//
// 26 ikon monokrom untuk item Skills. Ukuran default 32px (28px mobile).
// Bahasa visual konsisten dengan Icon.tsx: grid 24, stroke 1.5px.
// Brand direpresentasikan sebagai bentuk terinspirasi (bukan logo persis).

import type { JSX } from "react";

import type { SkillIconName } from "@/content/types";

type PathMap = Record<SkillIconName, JSX.Element>;

const PATHS: PathMap = {
  // --- IT Support ---
  troubleshoot: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.4-5.4l-2 2-2.5-.5-.5-2.5 2-2z" />
    </>
  ),
  "device-install": (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M12 8v4" />
      <path d="m10 10 2 2 2-2" />
    </>
  ),
  maintenance: (
    <>
      <path d="M14.5 5.5a3.5 3.5 0 0 0-4.9 4.9L4 16v4h4l5.6-5.6a3.5 3.5 0 0 0 4.9-4.9l-2 2-2.4-.5-.5-2.4 2-2z" />
      <path d="M4 16h4" />
    </>
  ),
  support: (
    <>
      <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-6h4" />
      <path d="M4 12v5a2 2 0 0 0 2 2h2v-6H4" />
    </>
  ),

  // --- Networking ---
  networking: (
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 7v6m0 0-6 4m6-4 6 4" />
    </>
  ),
  "network-admin": (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <path d="M7 7h.01M7 17h.01" />
      <path d="M12 7h4M12 17h4" />
    </>
  ),
  mikrotik: (
    <>
      <path d="M12 3v6" />
      <path d="M6 10h12" />
      <path d="M6 10v6" />
      <path d="M18 10v6" />
      <path d="M6 16h12" />
      <circle cx="12" cy="20" r="1.5" />
      <circle cx="12" cy="3" r="0.8" />
    </>
  ),
  "network-monitoring": (
    <>
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M6 12l3-3 3 5 3-6 3 4" />
      <path d="M8 22h8M12 18v4" />
    </>
  ),
  proxy: (
    <>
      <rect x="3" y="4" width="8" height="6" rx="1" />
      <rect x="13" y="14" width="8" height="6" rx="1" />
      <path d="M11 7h5a2 2 0 0 1 2 2v5" />
      <path d="m16 12 2 2 2-2" />
    </>
  ),
  dns: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <circle cx="7" cy="7" r="0.8" />
      <circle cx="7" cy="17" r="0.8" />
      <path d="M12 7h5M12 17h5" />
    </>
  ),

  // --- QA ---
  "manual-testing": (
    <>
      <path d="M9 4h6v3H9z" />
      <path d="M7 5H5v16h14V5h-2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  "functional-testing": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18" />
      <path d="m8 14 2 2 4-4" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  uat: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  "test-case": (
    <>
      <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="m9 11 1.5 1.5L13 10" />
      <path d="m9 16 1.5 1.5L13 15" />
      <path d="M15 11h.01M15 16h.01" />
    </>
  ),
  "bug-report": (
    <>
      <path d="M8 6h8l1 3v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9l1-3z" />
      <path d="M8 10H4M20 10h-4M8 14H5M19 14h-3M9 18l-2 3M15 18l2 3" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M10 4h4" />
    </>
  ),
  retesting: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </>
  ),
  "test-doc": (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6z" />
      <path d="M14 3v6h6" />
      <path d="M8 14l2 2 4-4" />
    </>
  ),

  // --- Frontend & Dev ---
  react: (
    <>
      <circle cx="12" cy="12" r="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" />
    </>
  ),
  tailwind: (
    <>
      <path d="M4 12c2-3 4-4 6-4s3 1 5 1 3-1 5-4" />
      <path d="M4 17c2-3 4-4 6-4s3 1 5 1 3-1 5-4" />
    </>
  ),
  laravel: (
    <>
      <path d="M3 8v8l6 3.5 6-3.5" />
      <path d="m9 19.5 6-3.5v-8l3-1.75L21 8v4l-3 1.75v5.5L12 22" />
      <path d="m9 11.5 3-1.75V4l3-1.75L18 4v4" />
    </>
  ),
  php: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 10v4M7 12h2a1.5 1.5 0 0 0 0-3H7" />
      <path d="M12 10v4M12 12h2a1.5 1.5 0 0 0 0-3h-2" />
    </>
  ),
  "rest-api": (
    <>
      <rect x="3" y="6" width="6" height="12" rx="1" />
      <rect x="15" y="6" width="6" height="12" rx="1" />
      <path d="M9 12h6" />
      <path d="m13 10 2 2-2 2" />
    </>
  ),

  // --- Tools & Doc ---
  trello: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="7" y="7" width="4" height="9" rx="0.5" />
      <rect x="13" y="7" width="4" height="6" rx="0.5" />
    </>
  ),
  excel: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 10h18M9 4v16" />
      <path d="m14 12 3 4M17 12l-3 4" />
    </>
  ),
  word: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="m7 9 2 6 2-4 2 4 2-6" />
    </>
  ),
  documentation: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2V5z" />
      <path d="M8 7h6M8 11h6M8 15h4" />
    </>
  ),
};

export type SkillIconProps = {
  name: SkillIconName;
  size?: number;
  className?: string;
};

export function SkillIcon({
  name,
  size = 32,
  className = "",
}: SkillIconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
