"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Award, CheckCircle2, FileText, X } from "lucide-react";

import type { Certification, Organization } from "@/content/types";

type Props = {
  cert: Certification | null;
  org: Organization | null;
  onClose: () => void;
};

export function EducationDialog({ cert, org, onClose }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (cert || org) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cert, org]);

  if (!cert && !org) return null;

  const isCert = !!cert;
  const title = cert ? cert.name : org?.role;
  const subtitle = cert ? cert.issuer : org?.name;

  const images = cert ? cert.images : org?.images || [];
  const activeImg = images[activeImage] || images[0];

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[150] overflow-y-auto bg-black/80 backdrop-blur-sm"
    >
      <div className="flex min-h-full items-center justify-center p-3 py-8 md:p-8">
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-xl border border-accent/20 bg-void shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-20 flex size-8 items-center justify-center rounded-full border border-hairline bg-surface-1/80 text-text-2 backdrop-blur-md transition-colors hover:border-accent hover:text-text-1 md:right-4 md:top-4 md:size-10"
            aria-label="Tutup detail"
          >
            <X size={18} className="md:size-5" />
          </button>

          <div className="relative flex flex-col p-4 pt-12 md:p-10">
            <div className="mb-4 flex items-center gap-2 font-mono text-[0.6rem] uppercase text-accent md:mb-8 md:gap-3 md:text-sm">
              {isCert ? (
                <Award size={16} className="md:size-5" />
              ) : (
                <FileText size={16} className="md:size-5" />
              )}
              <span>{isCert ? "Sertifikat" : "Organisasi"}</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              {/* Kiri: Gambar */}
              <div className="flex flex-col gap-3 md:gap-4">
                {images.length > 0 ? (
                  <>
                    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-hairline bg-surface-1 p-1 md:aspect-[4/3] md:p-2">
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
                      <div className="flex gap-2 overflow-x-auto pb-2 md:gap-4">
                        {images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            className={`relative aspect-video w-16 shrink-0 overflow-hidden rounded border md:w-24 ${
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
              <div className="flex flex-col gap-4 md:gap-6">
                <div>
                  {/* Judul Modal Diperkecil di HP */}
                  <h2 className="font-display text-lg uppercase leading-tight text-text-1 md:text-3xl">
                    {title}
                  </h2>
                  <p className="mt-1 font-mono text-[0.6rem] uppercase text-accent md:mt-2 md:text-sm">
                    {subtitle}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-[0.55rem] text-text-3 md:mt-3 md:gap-4 md:text-sm">
                    <span className="flex items-center gap-1">
                      <CalendarIcon /> {cert ? cert.period : org?.period}
                    </span>
                    {cert?.note && (
                      <span className="flex items-center gap-1">
                        <CheckCircle2 size={12} className="md:size-4" />{" "}
                        {cert.note}
                      </span>
                    )}
                  </div>
                </div>

                <div className="h-px w-full bg-hairline" />

                <div>
                  <h3 className="mb-1.5 font-mono text-[0.6rem] uppercase text-accent md:mb-2 md:text-sm">
                    Deskripsi
                  </h3>
                  <p className="text-[0.7rem] leading-relaxed text-text-2 md:text-base">
                    {cert?.description || org?.description}
                  </p>
                </div>

                {isCert && cert.materials.length > 0 && (
                  <div>
                    <h3 className="mb-2 font-mono text-[0.6rem] uppercase text-accent md:mb-3 md:text-sm">
                      Materi
                    </h3>
                    <ul className="flex flex-col gap-2 md:gap-3">
                      {cert.materials.map((m, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[0.65rem] text-text-2 md:gap-3 md:text-sm"
                        >
                          <CheckCircle2
                            size={12}
                            className="mt-0.5 shrink-0 text-accent md:size-4"
                          />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {org && org.responsibilities.length > 0 && (
                  <div>
                    <h3 className="mb-2 font-mono text-[0.6rem] uppercase text-accent md:mb-3 md:text-sm">
                      Tugas
                    </h3>
                    <ul className="flex flex-col gap-2 md:gap-3">
                      {org.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[0.65rem] text-text-2 md:gap-3 md:text-sm"
                        >
                          <CheckCircle2
                            size={12}
                            className="mt-0.5 shrink-0 text-accent md:size-4"
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
        </div>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="md:size-4"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
