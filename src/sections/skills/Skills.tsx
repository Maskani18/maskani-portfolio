// MASKANI — Section 05 Skills.
// Lima kategori dalam grid 3 kolom (mobile: 1). Tanpa chip hover,
// tanpa persentase. Baris bukti mono di bawah kategori.

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Heading } from "@/components/ui/Heading";
import { getSection } from "@/content/sections";
import { skills } from "@/content/skills";

export function Skills(): JSX.Element {
  const entry = getSection("skills");

  return (
    <SectionShell entry={entry} className="bg-surface-1">
      <Heading id="skills-heading" level={2} size="d2" className="mb-14">
        Skills
      </Heading>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {skills.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-4 border-t border-hairline pt-6"
          >
            <h3 className="font-mono text-meta uppercase text-text-1">
              {group.label}
            </h3>
            <ul className="flex flex-col gap-1.5 text-body text-text-2">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {group.evidence ? (
              <p className="mt-2 font-mono text-meta uppercase text-text-3">
                {group.evidence}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
