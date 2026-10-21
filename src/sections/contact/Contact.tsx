import type { JSX } from "react";
import { Phone, MapPin, Download, ArrowRight } from "lucide-react";

import { SectionShell } from "@/components/layout/SectionShell";
import { ContactEmail } from "@/components/layout/ContactLinks.client";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { HudFrame } from "@/components/ui/HudFrame";
import { hero } from "@/content/hero";
import { profile } from "@/content/profile";
import { getSection } from "@/content/sections";

export function Contact(): JSX.Element {
  const entry = getSection("contact");

  return (
    <SectionShell
      entry={entry}
      hideHeader
      className="relative overflow-hidden bg-[#090B0D]"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] py-12 md:py-24">
        <div className="mb-8 flex items-center gap-4 md:mb-12">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent md:text-sm">
            <span>{entry.number}.</span>
            <span>{entry.label}</span>
          </div>
          <div className="h-[2px] w-8 bg-accent md:w-12" />
          <div className="h-px w-12 bg-hairline md:w-16" />
        </div>

        {/* 2 Kolom Mobile: Teks kiri, Foto kanan */}
        <div className="grid grid-cols-12 items-start gap-4 md:gap-10 lg:gap-20">
          <div className="col-span-8 flex flex-col gap-6 md:col-span-7 md:gap-10">
            <div>
              <h2 className="font-display text-[clamp(2rem,6vw,5rem)] uppercase leading-[0.9] text-text-1">
                Hubungi
                <br />
                Saya
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-text-2 md:mt-8 md:text-lg">
                Jika Anda memiliki pertanyaan, saran, atau ingin berdiskusi
                lebih lanjut, silakan hubungi saya melalui informasi kontak di
                bawah ini.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-6">
              <ContactEmail />

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 md:gap-4"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/50 bg-accent/5 text-accent md:size-12">
                  <Phone size={16} className="md:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.55rem] uppercase tracking-widest text-accent md:text-xs">
                    Telepon / WA
                  </span>
                  <span className="text-xs font-medium text-text-1 md:text-base">
                    +62 895 1013 4186
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/50 bg-accent/5 text-accent md:size-12">
                  <MapPin size={16} className="md:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.55rem] uppercase tracking-widest text-accent md:text-xs">
                    Lokasi
                  </span>
                  <span className="text-xs font-medium text-text-1 md:text-base">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-4 md:gap-6">
              <div>
                <a
                  href={profile.cvPath}
                  className="group inline-flex items-center gap-2 border border-accent bg-transparent px-3 py-2 font-mono text-[0.6rem] uppercase tracking-widest text-accent transition-colors hover:bg-accent/10 md:gap-3 md:px-6 md:py-3 md:text-xs"
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <Download size={14} className="md:size-4" />
                  Download CV
                </a>
              </div>

              <div className="h-px w-full max-w-sm bg-accent/20" />

              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex gap-2 md:gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-accent hover:bg-accent/10 md:size-12"
                  >
                    <SocialIcons.Linkedin size={16} />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-accent hover:bg-accent/10 md:size-12"
                  >
                    <SocialIcons.Github size={16} />
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-accent hover:bg-accent/10 md:size-12"
                  >
                    <SocialIcons.Instagram size={16} />
                  </a>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-accent hover:bg-accent/10 md:size-12"
                  >
                    <SocialIcons.Whatsapp size={16} />
                  </a>
                </div>

                <div className="flex items-center gap-2 font-mono text-[0.55rem] uppercase tracking-widest text-text-3 md:gap-3 md:text-[0.65rem]">
                  <span>Temukan saya</span>
                  <ArrowRight size={12} className="text-accent md:size-4" />
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: Foto Muncul Lagi (Kecil di Mobile) */}
          <div className="col-span-4 flex justify-end md:col-span-5">
            <div className="w-full max-w-[120px] md:max-w-none">
              <HudFrame src={hero.portrait.src} alt={hero.portrait.alt} />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
