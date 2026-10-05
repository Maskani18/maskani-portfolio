"use client";

// MASKANI — Stepper aktif di halaman report (§6.2, BR-03).
//
// IntersectionObserver: satu owner untuk semua tier (R1). Tidak ada
// pengumuman ke screen reader saat scroll (spec §6.2). Node aktif
// berganti saat heading masuk viewport tengah.

import { useEffect, useState } from "react";

import type { ProjectStepKey } from "@/content/types";

export type ReportStepperProps = {
  steps: readonly ProjectStepKey[];
  labels: Record<ProjectStepKey, string>;
};

export function ReportStepper({ steps, labels }: ReportStepperProps) {
  const [active, setActive] = useState<ProjectStepKey>(steps[0] ?? "context");

  useEffect(() => {
    const headings = steps
      .map((key) => document.getElementById(`step-${key}-heading`))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id
            .replace(/^step-/, "")
            .replace(/-heading$/, "");
          const key = id as ProjectStepKey;
          if (steps.includes(key)) setActive(key);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const h of headings) io.observe(h);
    return () => io.disconnect();
  }, [steps]);

  return (
    <ol className="sticky top-[calc(var(--nav-height)+var(--nav-offset))] flex flex-col gap-3">
      {steps.map((key, i) => {
        const isActive = key === active;
        return (
          <li key={key}>
            <a
              href={`#step-${key}`}
              className={`inline-flex items-center gap-3 font-mono text-meta uppercase transition-colors duration-[var(--dur-fast)] ${
                isActive ? "text-accent" : "text-text-3 hover:text-text-2"
              }`}
            >
              <span
                aria-hidden="true"
                className={`inline-block size-1.5 rounded-full ${
                  isActive ? "bg-accent" : "bg-hairline-strong"
                }`}
              />
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span>{labels[key]}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
