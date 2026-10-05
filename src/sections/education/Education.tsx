// MASKANI — Section 06 Education.
// Dua kolom: Pendidikan + Afiliasi. Sertifikasi di bawah.
// RH124 wajib "Certificate of Attendance" persis (CG-14).

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Heading } from "@/components/ui/Heading";
import { education } from "@/content/education";
import { getSection } from "@/content/sections";

export function Education(): JSX.Element {
  const entry = getSection("education");

  return (
    <SectionShell entry={entry}>
      <Heading id="education-heading" level={2} size="d2" className="mb-14">
        Education
      </Heading>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h3 className="font-mono text-meta uppercase text-text-3">
            Education
          </h3>
          <p className="mt-4 font-display text-d3 text-text-1">
            {education.degree}
          </p>
          <p className="mt-2 font-mono text-meta uppercase text-text-2">
            {education.school} · {education.period}
          </p>
          <p className="mt-4 text-body text-text-2">GPA {education.gpa}</p>
        </div>

        <div className="lg:col-span-6">
          <h3 className="font-mono text-meta uppercase text-text-3">
            Affiliation
          </h3>
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

      <div className="mt-16 border-t border-hairline pt-10">
        <h3 className="font-mono text-meta uppercase text-text-3">
          Certifications
        </h3>
        <ul className="mt-6 grid gap-8 md:grid-cols-2">
          {education.certifications.map((cert) => (
            <li key={cert.name} className="flex flex-col gap-2">
              <p className="font-display text-d3 text-text-1">{cert.name}</p>
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
    </SectionShell>
  );
}
