// MASKANI — Section 02 About.
// Teks sama persis dengan C-06. Tiga frasa bergaris bawah hairline (C-07).

import type { JSX } from "react";

import { SectionShell } from "@/components/layout/SectionShell";
import { Heading } from "@/components/ui/Heading";
import { about } from "@/content/about";
import { getSection } from "@/content/sections";

export function About(): JSX.Element {
  const entry = getSection("about");

  return (
    <SectionShell entry={entry}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Heading id="about-heading" level={2} size="d2">
            Tentang
          </Heading>
        </div>
        <div data-reveal className="flex flex-col gap-8 lg:col-span-7">
          <p className="max-w-[62ch] text-lead text-text-2">
            <WithHighlights text={about.lead} phrases={about.highlights} />
          </p>
          <span className="inline-flex w-fit rounded-full border border-hairline-strong px-3 py-1.5 font-mono text-meta uppercase text-text-2">
            {about.chip}
          </span>
        </div>
      </div>
    </SectionShell>
  );
}

function WithHighlights({
  text,
  phrases,
}: {
  text: string;
  phrases: readonly string[];
}): JSX.Element {
  type Seg = { t: string; hl: boolean };
  let segments: Seg[] = [{ t: text, hl: false }];

  for (const phrase of phrases) {
    const next: Seg[] = [];
    for (const seg of segments) {
      if (seg.hl) {
        next.push(seg);
        continue;
      }
      const i = seg.t.indexOf(phrase);
      if (i === -1) {
        next.push(seg);
        continue;
      }
      if (i > 0) next.push({ t: seg.t.slice(0, i), hl: false });
      next.push({ t: phrase, hl: true });
      const rest = seg.t.slice(i + phrase.length);
      if (rest) next.push({ t: rest, hl: false });
    }
    segments = next;
  }

  return (
    <>
      {segments.map((seg, i) =>
        seg.hl ? (
          <span key={i} className="border-b border-hairline-strong text-text-1">
            {seg.t}
          </span>
        ) : (
          <span key={i}>{seg.t}</span>
        ),
      )}
    </>
  );
}
