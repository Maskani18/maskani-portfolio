// MASKANI — Section 06 Pendidikan (Template C, VA-17c).
//
// Layout zig-zag:
// - Kiri atas: EDU-SMALL (2:1 landscape lebar).
// - Kanan tengah: EDU-LARGE (7:5 landscape).
// - Kiri bawah: blok pendidikan + sertifikasi + afiliasi.
// Mobile: heading → SMALL → LARGE → teks.

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { MediaCard } from "@/components/media/MediaCard";
import { Heading } from "@/components/ui/Heading";
import { education } from "@/content/education";
import { getSection } from "@/content/sections";

export function Education(): JSX.Element {
  const entry = getSection("education");

  return (
    <SectionShell entry={entry}>
      <Heading id="education-heading" level={2} size="d2" className="mb-14">
        Pendidikan
      </Heading>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Kiri atas: EDU-SMALL 2:1 */}
        <div className="lg:col-span-5">
          <MediaCard
            src={education.photos.small.src}
            alt={education.photos.small.alt}
            aspectOverride="aspect-[2/1]"
            sizes="(min-width: 1024px) 41vw, 100vw"
          />
        </div>

        {/* Kanan atas: ruang kosong, judul di kolom kanan */}
        <div className="hidden lg:col-span-7 lg:block" />

        {/* Kiri bawah: blok pendidikan */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="border-t border-hairline pt-8">
            <p className="font-mono text-meta uppercase text-text-3">
              Pendidikan
            </p>
            <p className="mt-4 font-display text-d3 text-text-1">
              {education.degree}
            </p>
            <p className="mt-2 font-mono text-meta uppercase text-text-2">
              {education.school} · {education.period}
            </p>
            <p className="mt-4 text-body text-text-2">IPK {education.gpa}</p>
          </div>

          <div className="border-t border-hairline pt-8">
            <p className="font-mono text-meta uppercase text-text-3">
              Sertifikasi
            </p>
            <ul className="mt-4 flex flex-col gap-6">
              {education.certifications.map((cert) => (
                <li key={cert.name} className="flex flex-col gap-2">
                  <p className="font-display text-d3 text-text-1">
                    {cert.name}
                  </p>
                  <p className="font-mono text-meta uppercase text-text-2">
                    {cert.issuer}
                  </p>
                  <p className="font-mono text-meta uppercase text-text-3">
                    {cert.period}
                    {cert.note ? ` · ${cert.note}` : ""}
                  </p>
                  {cert.description ? (
                    <p className="max-w-[62ch] text-body text-text-2">
                      {cert.description}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-hairline pt-8">
            <p className="font-mono text-meta uppercase text-text-3">
              Afiliasi
            </p>
            <p className="mt-4 font-display text-d3 text-text-1">
              {education.organization.role}
            </p>
            <p className="mt-2 font-mono text-meta uppercase text-text-2">
              {education.organization.name} · {education.organization.period}
            </p>
            <p className="mt-4 max-w-[62ch] text-body text-text-2">
              {education.organization.description}
            </p>
          </div>
        </div>

        {/* Kanan bawah: EDU-LARGE 7:5 */}
        <div className="lg:col-span-7">
          <MediaCard
            src={education.photos.large.src}
            alt={education.photos.large.alt}
            aspectOverride="aspect-[7/5]"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </div>
      </div>
    </SectionShell>
  );
}
