// MASKANI — Label mono bernomor (§4.2, "Meta").
//
// Dipakai untuk indeks section ("01"), tag stack, tanggal.

import type { JSX } from "react";

export type MonoTagProps = {
  number?: string;
  className?: string;
  children: React.ReactNode;
};

export function MonoTag({
  number,
  className = "",
  children,
}: MonoTagProps): JSX.Element {
  return (
    <span
      className={`font-mono text-meta uppercase text-text-3 ${className}`.trim()}
    >
      {number ? (
        <>
          <span aria-hidden="true">{number}</span>{" "}
        </>
      ) : null}
      {children}
    </span>
  );
}
