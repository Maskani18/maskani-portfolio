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
      className="fixed inset-0 z-[150] overflow-y-auto bg-black/60 backdrop-blur-md"
    >
      <div className="flex min-h-full items-center justify-center p-4 py-10 md:p-8">
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* Panel Modal HUD */}
        <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-xl border border-accent/30 bg-[#090B0D]/90 shadow-[0_0_50px_rgba(138,164,255,0.15)] backdrop-blur-2xl">
          {/* Garis Grid di dalam Modal */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(138,164,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(138,164,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* HUD Sudut Modal */}
          <div className="pointer-events-none absolute left-0 top-0 size-6 border-l-2 border-t-2 border-accent" />
          <div className="pointer-events-none absolute right-0 top-0 size-6 border-r-2 border-t-2 border-accent" />
          <div className="pointer-events-none absolute bottom-0 left-0 size-6 border-b-2 border-l-2 border-accent" />
          <div className="pointer-events-none absolute bottom-0 right-0 size-6 border-b-2 border-r-2 border-accent" />

          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-20 flex size-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(138,164,255,0.4)] md:right-8 md:top-8"
            aria-label="Tutup detail"
          >
            <Icon name="close" size={16} />
          </button>

          <div className="relative z-10 flex flex-col p-8 md:p-12">
            {/* Header Modal */}
            <div className="mb-8 border-b border-accent/20 pb-6">
              <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                {item.period.from} – {item.period.to}
              </p>
              <h3 className="mt-3 font-display text-2xl uppercase text-text-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] md:text-4xl">
                {item.role}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase text-text-2 md:text-sm">
                {item.org}
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Deskripsi */}
              <div>
                <h4 className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-text-3">
                  [ Deskripsi Pekerjaan ]
                </h4>
                <p className="text-sm leading-relaxed text-text-2 md:text-base">
                  {item.details?.description}
                </p>
              </div>

              {/* Tanggung Jawab */}
              <div>
                <h4 className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-text-3">
                  [ Tanggung Jawab ]
                </h4>
                <ul className="flex flex-col gap-3">
                  {item.details?.responsibilities.map((task, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-text-2 md:text-base"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)]" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kompetensi */}
              <div>
                <h4 className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-text-3">
                  [ Teknologi / Kompetensi ]
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.details?.competencies.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-accent transition-colors hover:bg-accent/20"
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
