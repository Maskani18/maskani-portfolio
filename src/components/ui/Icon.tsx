// MASKANI — Ikon (§4.6, U-07).
//
// Sembilan ikon buatan sendiri: download, copy, check, mail, arrow-up-right,
// arrow-right, close, index, external. Grid 24px, stroke 1.5px, currentColor.
// Dekoratif: aria-hidden selalu. Arti selalu hadir di teks sekitar.

import type { JSX } from "react";

export type IconName =
  | "download"
  | "copy"
  | "check"
  | "mail"
  | "arrow-up-right"
  | "arrow-right"
  | "close"
  | "index"
  | "external";

const PATHS: Record<IconName, JSX.Element> = {
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m6 11 6 6 6-6" />
      <path d="M5 21h14" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="1.5" />
      <path d="M5 15V6a1.5 1.5 0 0 1 1.5-1.5H14" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  close: (
    <>
      <path d="m5 5 14 14" />
      <path d="m19 5-14 14" />
    </>
  ),
  index: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="m20 4-9 9" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </>
  ),
};

export type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({
  name,
  size = 24,
  className = "",
}: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
