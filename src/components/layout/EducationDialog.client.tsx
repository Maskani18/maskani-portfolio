"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Award, CheckCircle2, FileText, X } from "lucide-react";

import type { Certification, Organization } from "@/content/types";

type Props = {
  cert: Certification | null;
  org: Organization | null;
  onClose: () => void;
};

export function EducationDialog({ cert, org, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (cert || org) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [cert, org]);

  const isCert = !!cert;
  const title = cert ? cert.name : org?.role;
  const subtitle = cert ? cert.issuer : org?.name;

  // Ambil daftar gambar (baik dari sertifikat maupun organisasi)
  const images = cert ? cert.images : org?.images || [];
  const activeImg = images[activeImage] || images[0];

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="fixed inset-0 z-[100] m-auto max-h-[90vh] w-[95%] max-w-6xl overflow-y-auto rounded-lg border border-accent/20 bg-void p-0 text-text-1 shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex open:flex-col"
    >
      {title && (
        <div
          key={cert?.id || org?.role}
          className="relative flex flex-col p-6 md:p-10"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-hairline bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-text-1"
          >
            <X size={20} />
          </button>

          <div className="mb-8 flex items-center gap-3 font-mono text-sm uppercase text-accent">
            {isCert ? <Award size={20} /> : <FileText size={20} />}
            <span>{isCert ? "Sertifikat" : "Organisasi"}</span>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Kiri: Gambar / Galeri */}
            <div className="flex flex-col gap-4">
              {images.length > 0 ? (
                <>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-hairline bg-surface-1 p-2">
                    {activeImg && (
                      <Image
                        src={activeImg.src}
                        alt={activeImg.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain"
                      />
                    )}
                  </div>
                  {images.length > 1 && (
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded border ${
                            activeImage === i
                              ? "border-accent"
                              : "border-hairline opacity-50 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="100px"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : null}
            </div>

            {/* Kanan: Teks */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-display text-3xl uppercase leading-tight text-text-1 md:text-4xl">
                  {title}
                </h2>
                <p className="mt-2 font-mono text-sm uppercase text-accent">
                  {subtitle}
                </p>
                <div className="mt-3 flex items-center gap-4 font-mono text-sm text-text-3">
                  <span className="flex items-center gap-1">
                    <CalendarIcon /> {cert ? cert.period : org?.period}
                  </span>
                  {cert?.note && (
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={16} /> {cert.note}
                    </span>
                  )}
                </div>
              </div>

              <div className="h-px w-full bg-hairline" />

              <div>
                <h3 className="mb-2 font-mono text-sm uppercase text-accent">
                  Deskripsi
                </h3>
                <p className="text-body leading-relaxed text-text-2">
                  {cert?.description || org?.description}
                </p>
              </div>

              {isCert && cert.materials.length > 0 && (
                <div>
                  <h3 className="mb-3 font-mono text-sm uppercase text-accent">
                    Materi yang Dipelajari
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {cert.materials.map((m, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-2"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {org && org.responsibilities.length > 0 && (
                <div>
                  <h3 className="mb-3 font-mono text-sm uppercase text-accent">
                    Tugas & Tanggung Jawab
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {org.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-2"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
