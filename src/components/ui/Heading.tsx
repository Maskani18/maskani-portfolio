// MASKANI — Heading (§8.3).
//
// Menjamin satu h1 per halaman, h2 per section; tidak pernah memecah teks
// menjadi per huruf. Menerima tabIndex -1 untuk target fokus A-03.
// Ukuran (d1/d2/d3) adalah token tipografi, bukan angka bebas.

import type { JSX } from "react";

type Size = "d1" | "d2" | "d3";
type Level = 1 | 2 | 3;

const SIZE_CLASS: Record<Size, string> = {
  d1: "text-d1",
  d2: "text-d2",
  d3: "text-d3",
};

export type HeadingProps = {
  level: Level;
  size: Size;
  id?: string;
  tabIndex?: -1;
  className?: string;
  children: React.ReactNode;
};

export function Heading({
  level,
  size,
  id,
  tabIndex,
  className = "",
  children,
}: HeadingProps): JSX.Element {
  const Tag = `h${level}` as const;
  return (
    <Tag
      id={id}
      tabIndex={tabIndex}
      className={`font-display text-text-1 ${SIZE_CLASS[size]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
