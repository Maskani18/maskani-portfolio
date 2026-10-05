// MASKANI — Frame (§4.4).
//
// Bingkai teknis: hairline + empat tanda sudut 10px. Nomor FIG. opsional.
// Pemakaian: poster project, media di report. Fokus keyboard memicu
// pelebaran sudut (CSS saja, lihat efek hover poster di §5.6 — dilakukan
// di P3, bukan sekarang).

import type { JSX } from "react";

export type FrameProps = {
  figNumber?: string;
  className?: string;
  children: React.ReactNode;
};

export function Frame({
  figNumber,
  className = "",
  children,
}: FrameProps): JSX.Element {
  return (
    <figure
      className={`relative border border-hairline p-2 ${className}`.trim()}
    >
      <Corner className="top-0 left-0 border-t border-l" />
      <Corner className="top-0 right-0 border-t border-r" />
      <Corner className="bottom-0 left-0 border-b border-l" />
      <Corner className="bottom-0 right-0 border-b border-r" />
      {children}
      {figNumber ? (
        <figcaption className="mt-3 font-mono text-micro uppercase tracking-wide text-text-3">
          FIG. {figNumber}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Corner({ className }: { className: string }): JSX.Element {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute size-2.5 border-hairline-strong ${className}`}
    />
  );
}
