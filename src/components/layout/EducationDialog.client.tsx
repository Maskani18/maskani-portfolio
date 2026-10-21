"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Award, CheckCircle2, FileText, X, ChevronRight } from "lucide-react";

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
      className="fixed inset-0 z-[150] overflow-y-auto bg-black/60 backdrop-blur-md"
    >
      <div className="flex min-h-full items-center justify-center p-3 py-8 md:p-8">
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* Panel Modal HUD */}
        <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-xl border border-accent/30 bg-[#090B0D]/95 shadow-[0_0_50px_rgba(138,164,255,0.15)] backdrop-blur-2xl">
          {/* Garis Grid dalam Modal */}
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
            className="absolute right-3 top-3 z-20 flex size-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(138,164,255,0.4)] md:right-6 md:top-6 md:size-10"
            aria-label="Tutup detail"
          >
            <X size={18} className="md:size-5" />
          </button>

          <div className="relative z-10 flex flex-col p-4 pt-12 md:p-10">
            {/* Header Modal */}
            <div className="mb-6 flex flex-col gap-2 border-b border-accent/20 pb-4 md:mb-8 md:flex-row md:items-end md:justify-between md:pb-6">
              <div>
                <div className="mb-2 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-widest text-accent md:mb-3 md:text-sm">
                  {isCert ? (
                    <Award size={16} className="md:size-5" />
                  ) : (
                    <FileText size={16} className="md:size-5" />
                  )}
                  <span>[ {isCert ? "Sertifikat" : "Organisasi"} ]</span>
                </div>
                <h2 className="font-display text-lg uppercase leading-tight text-text-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] md:text-3xl">
                  {title}
                </h2>
                <p className="mt-1 font-mono text-[0.6rem] uppercase text-text-2 md:mt-2 md:text-sm">
                  {subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 font-mono text-[0.55rem] text-text-3 md:gap-4 md:text-xs">
                <span className="flex items-center gap-1.5 rounded border border-accent/20 bg-accent/5 px-2 py-1">
                  <CalendarIcon /> {cert ? cert.period : org?.period}
                </span>
                {cert?.note && (
                  <span className="flex items-center gap-1.5 rounded border border-accent/20 bg-accent/5 px-2 py-1 text-accent">
                    <CheckCircle2 size={12} className="md:size-4" /> {cert.note}
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              {/* Kiri: Gambar */}
              <div className="flex flex-col gap-3 md:gap-4">
                {images.length > 0 ? (
                  <>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-accent/30 bg-[#090B0D] p-1 shadow-inner md:aspect-[4/3] md:p-2">
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
                      <div className="flex gap-2 overflow-x-auto pb-2 md:gap-3">
                        {images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            className={`relative aspect-video w-16 shrink-0 overflow-hidden rounded border transition-all md:w-24 ${
                              activeImage === i
                                ? "border-accent shadow-[0_0_10px_rgba(138,164,255,0.5)] scale-105"
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
              <div className="flex flex-col gap-6 md:gap-8">
                <div>
                  <h3 className="mb-2 font-mono text-[0.65rem] uppercase tracking-widest text-accent md:mb-3 md:text-sm">
                    [ Deskripsi ]
                  </h3>
                  <p className="text-[0.75rem] leading-relaxed text-text-2 md:text-base">
                    {cert?.description || org?.description}
                  </p>
                </div>

                {isCert && cert.materials.length > 0 && (
                  <div>
                    <h3 className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-accent md:mb-4 md:text-sm">
                      [ Materi Pelatihan ]
                    </h3>
                    <ul className="flex flex-col gap-2.5 md:gap-3">
                      {cert.materials.map((m, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[0.7rem] text-text-2 md:gap-3 md:text-sm"
                        >
                          <ChevronRight
                            size={14}
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
                    <h3 className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-accent md:mb-4 md:text-sm">
                      [ Tugas & Tanggung Jawab ]
                    </h3>
                    <ul className="flex flex-col gap-2.5 md:gap-3">
                      {org.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[0.7rem] text-text-2 md:gap-3 md:text-sm"
                        >
                          <ChevronRight
                            size={14}
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
