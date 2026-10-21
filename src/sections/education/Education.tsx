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
      "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
  };

  return (
    <SectionShell entry={entry} hideHeader className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        {/* Header Section */}
        <div className="mb-12 flex items-center gap-6">
          <div className="flex items-center gap-4 font-mono text-meta uppercase text-text-2">
            <span>{entry.number}.</span>
            <span>{entry.label}</span>
          </div>
          <div className="h-px flex-1 bg-hairline" />
          <div className="hidden items-center gap-4 lg:flex">
            <div className="h-px w-12 bg-hairline" />
            <span className="font-mono text-meta uppercase tracking-widest text-text-3">
              MASKANI
            </span>
            <div className="h-px w-12 bg-hairline" />
          </div>
        </div>

        {/* Judul Utama (Dikecilkan) */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] uppercase leading-[1.1] text-text-1">
            Pendidikan &<br className="md:hidden" /> Sertifikat Pelatihan
          </h2>
          <p className="mt-4 max-w-[62ch] text-sm text-text-2 md:mt-6 md:text-lg">
            Pendidikan, sertifikasi, dan pelatihan yang mendukung perjalanan
            saya dalam mengembangkan diri.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* BLOK 1: PENDIDIKAN */}
          <div
            className="border border-accent/20 bg-accent/5 p-6 transition-colors hover:border-accent/40 md:p-8"
            style={hudStyle}
          >
            <div className="mb-6 flex items-center gap-4 border-b border-accent/20 pb-4">
              <div className="flex size-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-mono text-lg uppercase text-accent">
                Pendidikan
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-video overflow-hidden rounded-md border border-hairline bg-surface-1 p-2">
                <Image
                  src={education.images.school.src}
                  alt={education.images.school.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="rounded-sm object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-display text-3xl uppercase text-text-1">
                  {education.degree}
                </h4>
                <p className="text-lg text-text-2">{education.school}</p>
                <div className="flex flex-wrap gap-6 font-mono text-sm text-text-3">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {education.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <Star size={16} className="text-accent" /> IPK{" "}
                    {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOK 2: SERTIFIKASI & PELATIHAN */}
          <div
            className="border border-accent/20 bg-accent/5 p-6 transition-colors hover:border-accent/40 md:p-8"
            style={hudStyle}
          >
            <div className="mb-6 flex items-center gap-4 border-b border-accent/20 pb-4">
              <div className="flex size-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                <Award size={24} />
              </div>
              <h3 className="font-mono text-lg uppercase text-accent">
                Sertifikasi & Pelatihan
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {education.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col gap-4 rounded-lg border border-hairline bg-surface-1/50 p-4 md:p-6"
                >
                  <div className="relative aspect-video overflow-hidden rounded-md border border-hairline bg-surface-1 p-2">
                    <Image
                      src={cert.images[0]?.src || ""}
                      alt={cert.images[0]?.alt || ""}
                      fill
                      sizes="(min-width: 768px) 30vw, 80vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display text-xl uppercase leading-tight text-text-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-text-2">{cert.issuer}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 font-mono text-xs text-text-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {cert.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-accent" />{" "}
                      {cert.note}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="mt-2 flex w-fit items-center gap-2 border border-accent bg-transparent px-4 py-2 font-mono text-xs uppercase text-accent transition-colors hover:bg-accent/10"
                  >
                    Lihat Detail <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* BLOK 3: ORGANISASI (Teks Diperbesar) */}
          <div
            className="border border-accent/20 bg-accent/5 p-6 transition-colors hover:border-accent/40 md:p-8"
            style={hudStyle}
          >
            <div className="mb-6 flex items-center gap-4 border-b border-accent/20 pb-4">
              <div className="flex size-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                <Users size={24} />
              </div>
              <h3 className="font-mono text-lg uppercase text-accent">
                Pengalaman Organisasi
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="relative aspect-video overflow-hidden rounded-md border border-hairline bg-surface-1 p-2">
                <Image
                  src={education.organization.images[0]?.src || ""}
                  alt={education.organization.images[0]?.alt || ""}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="rounded-sm object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-display text-3xl uppercase text-text-1">
                  {education.organization.role}
                </h4>
                <p className="text-xl text-text-2">
                  {education.organization.name}
                </p>
                <div className="flex items-center gap-2 font-mono text-sm text-text-3">
                  <Calendar size={16} /> {education.organization.period}
                </div>
                <p className="mt-2 text-base leading-relaxed text-text-2">
                  {education.organization.description}
                </p>
                <button
                  onClick={() => setSelectedOrg(education.organization)}
                  className="mt-4 flex w-fit items-center gap-2 border border-accent bg-transparent px-4 py-2 font-mono text-sm uppercase text-accent transition-colors hover:bg-accent/10"
                >
                  Lihat Detail <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Komponen Dialog Detail */}
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
