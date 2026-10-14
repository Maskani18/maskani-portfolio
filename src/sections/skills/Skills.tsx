// MASKANI — Section 05 Skills (DL-016).
//
// Setiap kategori adalah blok bertumpuk: judul mono + item grid.
// Grid responsif: 2 kolom mobile, 3 tablet, 4 desktop.
// Setiap item: kartu kecil dengan border hairline + ikon (32px) + label mono.
// Hover: border dan ikon berubah warna aksen.

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Heading } from "@/components/ui/Heading";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { getSection } from "@/content/sections";
import { skills } from "@/content/skills";

export function Skills(): JSX.Element {
  const entry = getSection("skills");

  return (
    <SectionShell entry={entry} className="bg-surface-1">
      <Heading id="skills-heading" level={2} size="d2" className="mb-14">
        Skills
      </Heading>

      <div className="flex flex-col gap-14">
        {skills.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-6 border-t border-hairline pt-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-meta uppercase text-text-1">
                {group.label}
              </h3>
              {group.evidence ? (
                <p className="font-mono text-meta uppercase text-text-3">
                  {group.evidence}
                </p>
              ) : null}
            </div>

            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="group flex flex-col items-start gap-3 rounded-[var(--radius-md)] border border-hairline p-4 transition-colors duration-[var(--dur-fast)] hover:border-hairline-strong"
                >
                  <SkillIcon
                    name={item.icon}
                    size={32}
                    className="text-text-2 transition-colors duration-[var(--dur-fast)] group-hover:text-accent"
                  />
                  <span className="font-mono text-meta uppercase text-text-2 leading-tight">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
