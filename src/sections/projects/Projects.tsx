// MASKANI — Section 04 Projects (§6.1).
//
// Satu project saat ini: SIDALEKAS (K-11, K-12). Poster lebar penuh,
// seluruh poster = satu tautan ke /projects/[slug] dengan nama aksesibel
// "Open case report: SIDALEKAS". Tidak ada media yang dirender tanpa aset.
// Angka ghost statis (BR-09). Tanda sudut Frame melebar 4px pada hover
// dan fokus keyboard (CSS saja).

import Link from "next/link";
import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Heading } from "@/components/ui/Heading";
import { MonoTag } from "@/components/ui/MonoTag";
import { projects } from "@/content/projects";
import { getSection } from "@/content/sections";

export function Projects(): JSX.Element {
  const entry = getSection("projects");

  return (
    <SectionShell entry={entry}>
      <Heading id="projects-heading" level={2} size="d2" className="mb-14">
        Projects
      </Heading>

      <ul className="flex flex-col gap-12">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              aria-label={`Open case report: ${p.title}`}
              className="group relative block border border-hairline bg-surface-2 p-6 transition-colors duration-[var(--dur-base)] hover:border-hairline-strong focus-visible:border-hairline-strong md:p-10"
            >
              <Corner className="top-0 left-0 border-t border-l" />
              <Corner className="top-0 right-0 border-t border-r" />
              <Corner className="bottom-0 left-0 border-b border-l" />
              <Corner className="bottom-0 right-0 border-b border-r" />

              <div className="relative">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <MonoTag>{p.index}</MonoTag>
                  <p className="font-mono text-meta uppercase text-text-3">
                    {p.period}
                  </p>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-7">
                    <h3 className="font-display text-d3 text-text-1">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-mono text-meta uppercase text-text-2">
                      {p.role}
                    </p>
                    <p className="mt-6 max-w-[62ch] text-body text-text-2">
                      {p.context.short}
                    </p>
                    {p.result.short ? (
                      <p className="mt-3 max-w-[62ch] text-body text-text-2">
                        {p.result.short}
                      </p>
                    ) : null}
                  </div>

                  <div className="md:col-span-5">
                    <p className="font-mono text-meta uppercase text-text-3">
                      Stack
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-hairline px-3 py-1 font-mono text-meta uppercase text-text-2"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Angka ghost statis (BR-09) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -right-2 font-display text-[clamp(6rem,18vw,20rem)] font-semibold leading-none tracking-tighter text-transparent select-none"
                style={{
                  WebkitTextStroke: "1px var(--color-hairline-strong)",
                }}
              >
                {p.index.replace(/^P-/, "")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

function Corner({ className }: { className: string }): JSX.Element {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute size-2.5 border-hairline-strong transition-all duration-[var(--dur-fast)] group-hover:size-3.5 group-focus-visible:size-3.5 ${className}`}
    />
  );
}
