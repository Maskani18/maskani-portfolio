// MASKANI — Status region (§7.2, §8.3).
//
// Polite, persisten di DOM sejak load; hanya teksnya berubah. Tidak dibuat
// atau dihapus dinamis. Reset tidak diumumkan.

import type { JSX } from "react";

export type LiveRegionProps = {
  children?: React.ReactNode;
  className?: string;
};

export function LiveRegion({
  children,
  className = "",
}: LiveRegionProps): JSX.Element {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`sr-only ${className}`.trim()}
    >
      {children}
    </div>
  );
}
