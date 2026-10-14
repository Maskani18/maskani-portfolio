// MASKANI — Section 03 Experience (A-05).
// Tiga baris, terbaru dulu. Ringkasan satu baris selalu terlihat.
// Details dirender hanya bila field `details` ada (PF-05 pending).

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { experience } from "@/content/experience";
import { getSection } from "@/content/sections";

export function Experience(): JSX.Element {
  const entry = getSection("experience");

  return (
    <SectionShell entry={entry}>
      <Heading id="experience-heading" level={2} size="d2" className="mb-14">
        Pengalaman
      </Heading>

      <ul className="flex flex-col">
        {experience.map((item) => (
          <li
            key={`${item.org}-${item.period.from}`}
            data-reveal
            className="grid gap-4 border-t border-hairline py-8 md:grid-cols-12 md:gap-8"
          >
            <p className="font-mono text-meta uppercase text-text-3 md:col-span-2">
              {item.period.from} — {item.period.to ?? "Present"}
            </p>

            <div className="flex flex-col gap-2 md:col-span-8">
              <h3 className="font-display text-d3 text-text-1">{item.role}</h3>
              <p className="font-mono text-meta uppercase text-text-2">
                {item.org}
              </p>
              <p className="max-w-[62ch] text-body text-text-2">
                {item.summary}
              </p>
            </div>

            {item.details ? (
              <details className="md:col-span-2 md:justify-self-end">
                <summary className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-md border border-hairline-strong px-4 font-mono text-meta uppercase text-text-1 transition-colors duration-[var(--dur-fast)] hover:border-accent hover:text-accent">
                  Details
                  <Icon name="arrow-right" size={16} />
                </summary>
                <ul className="mt-4 flex flex-col gap-2 border-l border-hairline pl-4 text-body text-text-2">
                  {item.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </details>
            ) : null}
          </li>
        ))}
        <li className="border-t border-hairline" aria-hidden="true" />
      </ul>
    </SectionShell>
  );
}
