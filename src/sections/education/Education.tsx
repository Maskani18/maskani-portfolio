"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Award,
  Calendar,
  GraduationCap,
  Star,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { education as eduId } from "@/content/education";
import { education as eduEn } from "@/content/en/education";

import { SectionShell } from "@/components/layout/SectionShell";
import { EducationDialog } from "@/components/layout/EducationDialog.client";
import { getSection } from "@/content/sections";
import type { Certification, Organization } from "@/content/types";

const hudStyle = {
  clipPath:
    "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
};

export function Education() {
  const entry = getSection("education");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);
  const { lang } = useLanguage();

  const education = lang === "id" ? eduId : eduEn;

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)]">
        <div className="mb-8 flex items-center gap-6 md:mb-12">
          <div className="flex items-center gap-4 font-mono text-[0.65rem] uppercase text-accent md:text-meta">
            <span className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)]" />
              {entry.number}
            </span>
            <span className="text-text-2">
              {"//"} {entry.label}
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        </div>

        <div className="mb-8 md:mb-16">
          <h2 className="font-display text-[clamp(1.8rem,4.5vw,4.5rem)] uppercase leading-[1.1] text-text-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {lang === "id" ? (
              <>
                Pendidikan &<br className="md:hidden" /> Sertifikat Pelatihan
              </>
            ) : (
              <>
                Education &<br className="md:hidden" /> Training Certificates
              </>
            )}
          </h2>
          <p className="mt-3 max-w-[62ch] text-xs text-text-2 md:mt-6 md:text-lg">
            {lang === "id"
              ? "Pendidikan, sertifikasi, dan pelatihan yang mendukung perjalanan saya."
              : "Education, certifications, and training that support my professional journey."}
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-16">
          {/* BLOK 1: PENDIDIKAN */}
          <div>
            <div className="mb-3 flex items-center gap-2 border-b border-accent/20 pb-2 md:mb-6 md:gap-4 md:pb-4">
              <div className="flex size-6 items-center justify-center rounded border border-accent/30 bg-[#090B0D] text-accent shadow-[0_0_10px_rgba(138,164,255,0.2)] md:size-10">
                <GraduationCap size={14} className="md:size-5" />
              </div>
              <h3 className="font-mono text-[0.6rem] uppercase tracking-widest text-accent md:text-lg">
                [{lang === "id" ? "Pendidikan" : "Education"}]
              </h3>
            </div>

            <div
              className="group relative flex flex-row items-center gap-3 rounded-lg border border-accent/20 bg-[#090B0D]/60 p-2 transition-all duration-500 hover:border-accent/50 hover:bg-accent/5 hover:shadow-[0_0_30px_rgba(138,164,255,0.1)] md:gap-6 md:rounded-xl md:p-6"
              style={hudStyle}
            >
              <div className="pointer-events-none absolute left-0 top-0 size-2 border-l-2 border-t-2 border-accent opacity-50 md:size-4" />
              <div className="pointer-events-none absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-accent opacity-50 md:size-4" />

              <div className="relative aspect-video w-[35%] shrink-0 overflow-hidden rounded border border-accent/20 bg-[#090B0D] p-0.5 md:w-1/3 md:p-2">
                <Image
                  src={education.images.school.src}
                  alt={education.images.school.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 35vw"
                  className="rounded-sm object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1 md:gap-3">
                <h4 className="break-words font-display text-[0.7rem] uppercase leading-tight text-text-1 md:text-2xl">
                  {education.degree}
                </h4>
                <p className="break-words text-[0.55rem] text-text-2 md:text-base">
                  {education.school}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[0.5rem] text-text-3 md:gap-6 md:text-sm">
                  <span className="flex items-center gap-1 md:gap-2">
                    <Calendar size={10} className="text-accent md:size-4" />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <Star size={10} className="text-accent md:size-4" />
                    GPA {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOK 2: SERTIFIKASI */}
          <div>
            <div className="mb-3 flex items-center gap-2 border-b border-accent/20 pb-2 md:mb-6 md:gap-4 md:pb-4">
              <div className="flex size-6 items-center justify-center rounded border border-accent/30 bg-[#090B0D] text-accent shadow-[0_0_10px_rgba(138,164,255,0.2)] md:size-10">
                <Award size={14} className="md:size-5" />
              </div>
              <h3 className="font-mono text-[0.6rem] uppercase tracking-widest text-accent md:text-lg">
                [{lang === "id" ? "Sertifikasi" : "Certifications"}]
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {education.certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group relative flex cursor-pointer flex-col justify-between gap-2 rounded-lg border border-accent/20 bg-[#090B0D]/60 p-2 transition-all duration-500 hover:border-accent/50 hover:bg-accent/5 hover:shadow-[0_0_30px_rgba(138,164,255,0.1)] md:gap-4 md:rounded-xl md:p-4"
                  style={hudStyle}
                >
                  <div className="pointer-events-none absolute left-0 top-0 size-2 border-l-2 border-t-2 border-accent opacity-50 transition-opacity group-hover:opacity-100 md:size-4" />
                  <div className="pointer-events-none absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-accent opacity-50 transition-opacity group-hover:opacity-100 md:size-4" />

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-accent/20 bg-surface-1 p-1 transition-colors group-hover:border-accent/40 md:aspect-[16/10] md:p-2">
                    <Image
                      src={cert.images[0]?.src || ""}
                      alt={cert.images[0]?.alt || ""}
                      fill
                      sizes="(min-width: 768px) 50vw, 50vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-0.5 md:gap-2">
                    <h4 className="break-words font-display text-[0.55rem] uppercase leading-tight text-text-1 md:text-lg">
                      {cert.name}
                    </h4>
                    <p className="break-words text-[0.5rem] text-text-2 md:text-sm">
                      {cert.issuer}
                    </p>

                    <div className="mt-auto flex flex-col gap-1 pt-1 font-mono text-[0.45rem] text-text-3 md:flex-row md:gap-4 md:pt-2 md:text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar
                          size={8}
                          className="text-accent md:size-3.5"
                        />
                        {cert.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2
                          size={8}
                          className="text-accent md:size-3.5"
                        />
                        {cert.note}
                      </span>
                    </div>
                  </div>

                  <div className="mt-1 flex w-full items-center justify-between border border-accent/30 bg-accent/5 px-1.5 py-1 font-mono text-[0.5rem] uppercase tracking-widest text-accent transition-all group-hover:bg-accent/10 group-hover:shadow-[0_0_15px_rgba(138,164,255,0.3)] md:px-4 md:py-2.5 md:text-xs">
                    <span className="flex items-center gap-1 md:gap-2">
                      <span className="opacity-50">[</span>{" "}
                      {lang === "id" ? "Detail" : "Details"}{" "}
                      <span className="opacity-50">]</span>
                    </span>
                    <ArrowRight
                      size={8}
                      className="transition-transform group-hover:translate-x-1 md:size-3.5"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BLOK 3: ORGANISASI */}
          <div>
            <div className="mb-3 flex items-center gap-2 border-b border-accent/20 pb-2 md:mb-6 md:gap-4 md:pb-4">
              <div className="flex size-6 items-center justify-center rounded border border-accent/30 bg-[#090B0D] text-accent shadow-[0_0_10px_rgba(138,164,255,0.2)] md:size-10">
                <Users size={14} className="md:size-5" />
              </div>
              <h3 className="font-mono text-[0.6rem] uppercase tracking-widest text-accent md:text-lg">
                [{lang === "id" ? "Organisasi" : "Organization"}]
              </h3>
            </div>

            <div
              onClick={() => setSelectedOrg(education.organization)}
              className="group relative flex cursor-pointer flex-row items-center gap-3 rounded-lg border border-accent/20 bg-[#090B0D]/60 p-2 transition-all duration-500 hover:border-accent/50 hover:bg-accent/5 hover:shadow-[0_0_30px_rgba(138,164,255,0.1)] md:gap-6 md:rounded-xl md:p-6"
              style={hudStyle}
            >
              <div className="pointer-events-none absolute left-0 top-0 size-2 border-l-2 border-t-2 border-accent opacity-50 md:size-4" />
              <div className="pointer-events-none absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-accent opacity-50 md:size-4" />

              <div className="relative aspect-video w-[35%] shrink-0 overflow-hidden rounded border border-accent/20 bg-[#090B0D] p-0.5 md:w-1/3 md:p-2">
                <Image
                  src={education.organization.images[0]?.src || ""}
                  alt={education.organization.images[0]?.alt || ""}
                  fill
                  sizes="(min-width: 768px) 33vw, 35vw"
                  className="rounded-sm object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1 md:gap-3">
                <h4 className="break-words font-display text-[0.65rem] uppercase leading-tight text-text-1 md:text-2xl">
                  {education.organization.role}
                </h4>
                <p className="break-words text-[0.5rem] text-text-2 md:text-base">
                  {education.organization.name}
                </p>
                <div className="flex items-center gap-1 font-mono text-[0.45rem] text-text-3 md:gap-2 md:text-sm">
                  <Calendar size={8} className="text-accent md:size-4" />
                  {education.organization.period}
                </div>

                <div className="mt-1 flex w-fit items-center gap-1 border border-accent/30 bg-accent/5 px-1.5 py-1 font-mono text-[0.5rem] uppercase text-accent transition-all group-hover:bg-accent/20 group-hover:shadow-[0_0_10px_rgba(138,164,255,0.3)] md:px-4 md:py-2 md:text-xs">
                  <span className="opacity-50">[</span>{" "}
                  {lang === "id" ? "Detail" : "Details"}{" "}
                  <span className="opacity-50">]</span>
                  <ArrowRight
                    size={8}
                    className="md:size-3.5 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EducationDialog
        cert={selectedCert}
        org={selectedOrg}
        onClose={() => {
          setSelectedCert(null);
          setSelectedOrg(null);
        }}
      />
    </SectionShell>
  );
}
