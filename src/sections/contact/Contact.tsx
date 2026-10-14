// MASKANI — Section 07 Contact (§7.1).
// Email TIDAK ADA di HTML server (K-18). noscript menampilkan bentuk
// terbaca-manusia (baca [at] domain [dot] com).

import type { JSX } from "react";

import { ContactActions } from "@/components/layout/ContactActions.client";
import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { contact } from "@/content/contact";
import { profile } from "@/content/profile";
import { getSection } from "@/content/sections";

export function Contact(): JSX.Element {
  const entry = getSection("contact");

  return (
    <SectionShell entry={entry} className="bg-surface-1">
      <Heading id="contact-heading" level={2} size="d2" className="mb-10">
        Kontak
      </Heading>

      <p className="mb-12 max-w-[42rem] text-lead text-text-2">
        {contact.lead}
      </p>

      <div className="flex flex-col gap-10">
        <ContactActions />

        <noscript>
          <p className="max-w-[62ch] text-body text-text-2">
            Enable JavaScript to copy the address, or email me at{" "}
            <span className="font-mono text-text-1">
              Maskani180104 [at] gmail [dot] com
            </span>
            .
          </p>
        </noscript>

        <div className="flex flex-wrap items-center gap-3">
          <Button href={profile.linkedin} variant="secondary" external>
            LinkedIn
            <Icon name="arrow-up-right" size={18} />
          </Button>
          <Button href={profile.cvPath} variant="secondary">
            <Icon name="download" size={18} />
            Download CV
          </Button>
          {profile.github ? (
            <Button href={profile.github} variant="secondary" external>
              GitHub
              <Icon name="arrow-up-right" size={18} />
            </Button>
          ) : null}
        </div>
      </div>
    </SectionShell>
  );
}
