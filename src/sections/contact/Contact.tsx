"use client";

import type { JSX } from "react";
import { Phone, MapPin, Download, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { contact as contactId } from "@/content/contact";
import { contact as contactEn } from "@/content/en/contact";

import { SectionShell } from "@/components/layout/SectionShell";
import { ContactEmail } from "@/components/layout/ContactLinks.client";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { HudFrame } from "@/components/ui/HudFrame";
import { hero } from "@/content/hero";
import { profile } from "@/content/profile";
import { getSection } from "@/content/sections";
import { MOTION_ATTR } from "@/motion/contract";

export function Contact(): JSX.Element {
  const entry = getSection("contact");
  const { lang } = useLanguage();
  const contact = lang === "id" ? contactId : contactEn;

  return (
    <SectionShell
      entry={entry}
      hideHeader
      className="relative overflow-hidden bg-[#090B0D]"
    >
      {/* Background Grid Halus */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)] py-12 md:py-24">
        {/* Header Section */}
        <div className="mb-8 flex items-center gap-4 md:mb-12">
          <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-widest text-accent md:text-sm">
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

        {/* 2 Kolom: Teks Kiri, Foto Kanan */}
        <div className="grid grid-cols-12 items-start gap-4 md:gap-10 lg:gap-20">
          {/* KIRI: Teks & Kontak */}
          <div
            {...{ [MOTION_ATTR.REVEAL]: "" }}
            className="col-span-8 flex flex-col gap-6 md:col-span-7 md:gap-10"
          >
            <div>
              <h2 className="font-display text-[clamp(2rem,6vw,5rem)] uppercase leading-[0.9] text-text-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {lang === "id" ? "Hubungi" : "Contact"}
                <br />
                {lang === "id" ? "Saya" : "Me"}
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-text-2 md:mt-8 md:text-lg">
                {contact.lead}
              </p>
            </div>

            {/* DAFTAR KONTAK */}
            <div className="flex flex-col gap-4 md:gap-6">
              <ContactEmail />

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                {...{ [MOTION_ATTR.MAGNETIC]: "" }}
                className="group flex items-center gap-3 md:gap-4"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-[#090B0D] text-accent shadow-[0_0_10px_rgba(138,164,255,0.1)] transition-all group-hover:border-accent group-hover:bg-accent/10 group-hover:shadow-[0_0_15px_rgba(138,164,255,0.4)] md:size-12">
                  <Phone size={16} className="md:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.55rem] uppercase tracking-widest text-accent md:text-xs">
                    {lang === "id" ? "Telepon / WA" : "Phone / WA"}
                  </span>
                  <span className="text-xs font-medium text-text-1 transition-colors group-hover:text-accent md:text-base">
                    +62 895 1013 4186
                  </span>
                </div>
              </a>

              <div className="group flex items-center gap-3 md:gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-[#090B0D] text-accent shadow-[0_0_10px_rgba(138,164,255,0.1)] md:size-12">
                  <MapPin size={16} className="md:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.55rem] uppercase tracking-widest text-accent md:text-xs">
                    {lang === "id" ? "Lokasi" : "Location"}
                  </span>
                  <span className="text-xs font-medium text-text-1 md:text-base">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Tombol & Sosial Media */}
            <div className="mt-2 flex flex-col gap-4 md:gap-6">
              <div>
                <a
                  href={profile.cvPath}
                  {...{ [MOTION_ATTR.MAGNETIC]: "" }}
                  className="group inline-flex items-center gap-2 border border-accent bg-transparent px-3 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-accent transition-all hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(138,164,255,0.3)] md:gap-3 md:px-6 md:py-3 md:text-xs"
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <Download
                    size={14}
                    className="md:size-4 transition-transform group-hover:translate-y-0.5"
                  />
                  {lang === "id" ? "Download CV" : "Download CV"}
                </a>
              </div>

              <div className="h-px w-full max-w-sm bg-accent/20" />

              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex gap-2 md:gap-3">
                  {[
                    { href: profile.linkedin, icon: SocialIcons.Linkedin },
                    { href: profile.github, icon: SocialIcons.Github },
                    { href: profile.instagram, icon: SocialIcons.Instagram },
                    { href: profile.whatsapp, icon: SocialIcons.Whatsapp },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...{ [MOTION_ATTR.MAGNETIC]: "" }}
                      className="flex size-9 items-center justify-center rounded-md border border-accent/30 bg-[#090B0D] text-text-2 transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(138,164,255,0.3)] hover:bg-accent/10 md:size-12"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-mono text-[0.55rem] uppercase tracking-widest text-text-3 md:gap-3 md:text-[0.65rem]">
                  <span>{lang === "id" ? "Temukan saya" : "Find me"}</span>
                  <ArrowRight size={12} className="text-accent md:size-4" />
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: Foto */}
          <div className="col-span-4 flex justify-end perspective-[1000px] md:col-span-5">
            <div
              {...{ [MOTION_ATTR.REVEAL]: "" }}
              data-tilt
              className="group relative w-full max-w-[120px] transform-style-3d will-change-transform md:max-w-none"
            >
              <div className="absolute -inset-2 z-0 rounded-xl bg-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <HudFrame src={hero.portrait.src} alt={hero.portrait.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
