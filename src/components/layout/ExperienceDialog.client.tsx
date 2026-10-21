"use client";

import { useEffect } from "react";
import type { ExperienceItem } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

type Props = {
  item: ExperienceItem | null;
  onClose: () => void;
};

export function ExperienceDialog({ item, onClose }: Props) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[150] overflow-y-auto bg-black/80 backdrop-blur-sm"
    >
      <div className="flex min-h-full items-center justify-center p-4 py-10 md:p-8">
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-xl border border-accent/20 bg-void shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-hairline bg-surface-1/80 text-text-2 backdrop-blur-md transition-colors hover:border-accent hover:text-text-1"
            aria-label="Tutup detail"
          >
            <Icon name="close" size={20} />
          </button>

          <div className="relative flex flex-col p-8 md:p-12">
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-hairline pb-6">
              <div>
                <p className="font-mono text-meta uppercase text-accent">
                  {item.period.from} – {item.period.to}
                </p>
                <h3 className="mt-2 font-display text-4xl uppercase">
                  {item.role}
                </h3>
                <p className="mt-2 font-mono text-sm uppercase text-text-2">
                  {item.org}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="mb-2 font-mono text-sm uppercase text-text-3">
                  Deskripsi Pekerjaan
                </h4>
                <p className="text-body text-text-2">
                  {item.details?.description}
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-mono text-sm uppercase text-text-3">
                  Tanggung Jawab
                </h4>
                <ul className="flex flex-col gap-2">
                  {item.details?.responsibilities.map((task, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-body text-text-2"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-mono text-sm uppercase text-text-3">
                  Teknologi / Kompetensi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.details?.competencies.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-hairline px-3 py-1 font-mono text-meta uppercase text-text-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}