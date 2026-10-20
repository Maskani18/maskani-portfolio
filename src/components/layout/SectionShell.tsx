import type { JSX } from "react";

import { MonoTag } from "@/components/ui/MonoTag";
import type { SectionEntry } from "@/content/types";

export type SectionShellProps = {
  entry: SectionEntry;
  hideHeader?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({
  entry,
  hideHeader = false,
  className = "",
  children,
}: SectionShellProps): JSX.Element {
  return (
    <section
      id={entry.id}
      className={`relative scroll-mt-[calc(var(--nav-height)+var(--nav-offset))] px-[var(--gutter)] py-[var(--section-pad)] md:pl-24 lg:pl-32 ${className}`.trim()}
      aria-labelledby={`${entry.id}-heading`}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {!hideHeader ? (
          <MonoTag number={entry.number} className="mb-6 block">
            {entry.label}
          </MonoTag>
        ) : null}
        {children}
      </div>
    </section>
  );
}
