// MASKANI — Section 08 Colophon (§7.4).
// R1: hanya fakta statis. Baris CI tidak dirender (BR-05, CG-06).
// Rendered as <footer> landmark, menggantikan layout footer.

import type { JSX } from "react";

import { colophon } from "@/content/colophon";
import { getSection } from "@/content/sections";

export function Colophon(): JSX.Element {
  const entry = getSection("colophon");

  return (
    <footer
      id={entry.id}
      aria-labelledby={`${entry.id}-heading`}
      className="relative scroll-mt-[calc(var(--nav-height)+var(--nav-offset))] border-t border-hairline px-[var(--gutter)] py-16"
    >
      <h2 id={`${entry.id}-heading`} className="sr-only">
        Colophon
      </h2>
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-meta uppercase text-text-3">
            Fonts: {colophon.fonts.join(" · ")}
          </p>
          <p className="font-mono text-meta uppercase text-text-3">
            {colophon.stack}
          </p>
        </div>
        <p className="font-mono text-meta uppercase text-text-3">
          {colophon.copyright}
        </p>
      </div>
    </footer>
  );
}
