// MASKANI — Section 07 Kontak (Template A bookend, VA-17e).
//
// Bookend Hero: potret cutout dipakai ulang di kanan, menggemakan
// komposisi pembuka. Chip + heading + lead + CTA di kiri.
// Email tidak ada di HTML server (K-18) — ContactActions.client menangani.

import Image from "next/image";
import type { JSX } from "react";

import { ContactActions } from "@/components/layout/ContactActions.client";
import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { contact } from "@/content/contact";
import { hero } from "@/content/hero";
import { profile } from "@/content/profile";
import { getSection } from "@/content/sections";

export function Contact(): JSX.Element {
  const entry = getSection("contact");

  return (
    <SectionShell entry={entry} className="bg-surface-1">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Kiri: chip, heading, lead, CTA */}
        <div className="flex flex-col gap-8 lg:col-span-7">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline-strong px-3 py-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent"
            />
            <span className="font-mono text-meta uppercase text-text-2">
              {profile.status}
            </span>
          </div>

          <Heading id="contact-heading" level={2} size="d2">
            Kontak
          </Heading>

          <p className="max-w-[42rem] text-lead text-text-2">{contact.lead}</p>

          <ContactActions />

          <noscript>
            <p className="max-w-[62ch] text-body text-text-2">
              Aktifkan JavaScript untuk menyalin alamat, atau kirim email ke{" "}
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
              Unduh CV
            </Button>
            {profile.github ? (
              <Button href={profile.github} variant="secondary" external>
                GitHub
                <Icon name="arrow-up-right" size={18} />
              </Button>
            ) : null}
          </div>
        </div>

        {/* Kanan: potret bookend, muncul di bawah di mobile */}
        <div
          aria-hidden="true"
          className="order-last flex justify-center lg:col-span-5"
        >
          <div className="relative aspect-[9/16] w-[60%] max-w-[360px] lg:w-full">
            <Image
              src={hero.portrait.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 60vw"
              className="object-contain object-bottom"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
