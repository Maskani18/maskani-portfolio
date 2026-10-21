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

import { SectionShell } from "@/components/layout/SectionShell";
import { EducationDialog } from "@/components/layout/EducationDialog.client";
import { education } from "@/content/education";
import { getSection } from "@/content/sections";
import type { Certification, Organization } from "@/content/types";

export function Education() {
  const entry = getSection("education");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

  const hudStyle = {
    clipPath:
      "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
  };

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {/* Header Section */}
        <div className="mb-8 flex items-center gap-6 md:mb-12">
          <div className="flex items-center gap-4 font-mono text-[0.65rem] uppercase text-text-2 md:text-meta">
            <span>{entry.number}.</span>
            <span>{entry.label}</span>
          </div>
          <div className="h-px flex-1 bg-hairline" />
        </div>

        {/* Judul Utama */}
        <div className="mb-8 md:mb-16">
          <h2 className="font-display text-[clamp(1.8rem,4.5vw,4.5rem)] uppercase leading-[1.1] text-text-1">
            Pendidikan &<br className="md:hidden" /> Sertifikat Pelatihan
          </h2>
          <p className="mt-3 max-w-[62ch] text-xs text-text-2 md:mt-6 md:text-lg">
            Pendidikan, sertifikasi, dan pelatihan yang mendukung perjalanan
            saya.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {/* BLOK 1: PENDIDIKAN */}
          <div
            className="border border-accent/20 bg-accent/5 p-4 transition-colors hover:border-accent/40 md:p-8"
            style={hudStyle}
          >
            <div className="mb-4 flex items-center gap-3 border-b border-accent/20 pb-3 md:mb-6 md:gap-4 md:pb-4">
              <div className="flex size-7 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent md:size-12">
                <GraduationCap size={16} className="md:size-6" />
              </div>
              <h3 className="font-mono text-[0.65rem] uppercase text-accent md:text-lg">
                Pendidikan
              </h3>
            </div>

            <div className="grid grid-cols-12 items-center gap-4 md:gap-8">
              <div className="col-span-5 relative aspect-video overflow-hidden rounded-md border border-hairline bg-surface-1 p-1 md:col-span-5 md:p-2">
                <Image
                  src={education.images.school.src}
                  alt={education.images.school.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 50vw"
                  className="rounded-sm object-cover"
                />
              </div>
              <div className="col-span-7 flex flex-col gap-1.5 md:col-span-7 md:gap-4">
                <h4 className="font-display text-[0.65rem] uppercase leading-tight text-text-1 md:text-3xl">
                  {education.degree}
                </h4>
                <p className="text-[0.6rem] text-text-2 md:text-lg">
                  {education.school}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[0.5rem] text-text-3 md:gap-6 md:text-sm">
                  <span className="flex items-center gap-1 md:gap-2">
                    <Calendar size={10} className="md:size-4" />{" "}
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <Star size={10} className="text-accent md:size-4" /> IPK{" "}
                    {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOK 2: SERTIFIKASI (Berdampingan di HP) */}
          <div
            className="border border-accent/20 bg-accent/5 p-4 transition-colors hover:border-accent/40 md:p-8"
            style={hudStyle}
          >
            <div className="mb-4 flex items-center gap-3 border-b border-accent/20 pb-3 md:mb-6 md:gap-4 md:pb-4">
              <div className="flex size-7 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent md:size-12">
                <Award size={16} className="md:size-6" />
              </div>
              <h3 className="font-mono text-[0.65rem] uppercase text-accent md:text-lg">
                Sertifikasi & Pelatihan
              </h3>
            </div>

            {/* Grid 2 Kolom di HP dan Desktop */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {education.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col gap-2 rounded-lg border border-hairline bg-surface-1/50 p-2 md:gap-4 md:p-6"
                >
                  <div className="relative aspect-video overflow-hidden rounded-md border border-hairline bg-surface-1 p-1 md:p-2">
                    <Image
                      src={cert.images[0]?.src || ""}
                      alt={cert.images[0]?.alt || ""}
                      fill
                      sizes="(min-width: 768px) 30vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-display text-[0.55rem] uppercase leading-tight text-text-1 md:text-xl">
                      {cert.name}
                    </h4>
                    <p className="text-[0.45rem] text-text-2 md:text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 font-mono text-[0.45rem] text-text-3 md:flex-row md:gap-4 md:text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={8} className="md:size-3.5" />{" "}
                      {cert.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2
                        size={8}
                        className="text-accent md:size-3.5"
                      />{" "}
                      {cert.note}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="mt-1 flex w-fit items-center gap-1 border border-accent bg-transparent px-1.5 py-1 font-mono text-[0.5rem] uppercase text-accent transition-colors hover:bg-accent/10 md:px-4 md:py-2 md:text-xs"
                  >
                    Detail <ArrowRight size={8} className="md:size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* BLOK 3: ORGANISASI */}
          <div
            className="border border-accent/20 bg-accent/5 p-4 transition-colors hover:border-accent/40 md:p-8"
            style={hudStyle}
          >
            <div className="mb-4 flex items-center gap-3 border-b border-accent/20 pb-3 md:mb-6 md:gap-4 md:pb-4">
              <div className="flex size-7 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent md:size-12">
                <Users size={16} className="md:size-6" />
              </div>
              <h3 className="font-mono text-[0.65rem] uppercase text-accent md:text-lg">
                Organisasi
              </h3>
            </div>

            <div className="grid grid-cols-12 items-center gap-4 md:gap-8">
              <div className="col-span-5 relative aspect-video overflow-hidden rounded-md border border-hairline bg-surface-1 p-1 md:col-span-6 md:p-2">
                <Image
                  src={education.organization.images[0]?.src || ""}
                  alt={education.organization.images[0]?.alt || ""}
                  fill
                  sizes="(min-width: 768px) 50vw, 50vw"
                  className="rounded-sm object-cover"
                />
              </div>
              <div className="col-span-7 flex flex-col gap-1.5 md:col-span-6 md:gap-3">
                <h4 className="font-display text-[0.6rem] uppercase leading-tight text-text-1 md:text-2xl">
                  {education.organization.role}
                </h4>
                <p className="text-[0.5rem] text-text-2 md:text-lg">
                  {education.organization.name}
                </p>
                <div className="flex items-center gap-1 font-mono text-[0.45rem] text-text-3 md:gap-2 md:text-sm">
                  <Calendar size={8} className="md:size-4" />{" "}
                  {education.organization.period}
                </div>
                <p className="mt-1 hidden text-[0.6rem] leading-relaxed text-text-2 sm:block md:mt-2 md:text-sm">
                  {education.organization.description}
                </p>
                <button
                  onClick={() => setSelectedOrg(education.organization)}
                  className="mt-1 flex w-fit items-center gap-1 border border-accent bg-transparent px-1.5 py-1 font-mono text-[0.5rem] uppercase text-accent transition-colors hover:bg-accent/10 md:px-4 md:py-2 md:text-xs"
                >
                  Detail <ArrowRight size={8} className="md:size-3.5" />
                </button>
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
