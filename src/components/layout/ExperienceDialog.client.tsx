"use client";

import { useEffect, useRef } from "react";
import type { ExperienceItem } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

type Props = {
  item: ExperienceItem | null;
  onClose: () => void;
};

export function ExperienceDialog({ item, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (item) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="fixed inset-0 z-[100] m-auto max-h-[85vh] w-[90%] max-w-3xl overflow-y-auto rounded-[var(--radius-media)] bg-surface-1 p-0 text-text-1 shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex open:flex-col"
    >
      {item && (
        <div className="flex flex-col p-8 md:p-12">
          {/* Header */}
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
            <button
              onClick={onClose}
              className="flex size-10 items-center justify-center rounded-full border border-hairline-strong text-text-2 hover:bg-surface-2 hover:text-text-1"
              aria-label="Tutup detail"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          {/* Content */}
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
      )}
    </dialog>
  );
}
