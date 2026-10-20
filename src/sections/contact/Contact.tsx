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
      <div className="mx-auto w-full max-w-[var(--container-max)] py-16 lg:py-24">
        {/* Header Section (06. KONTAK) */}
        <div className="mb-12 flex items-center gap-4">
          <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-accent">
            <span>{entry.number}.</span>
            <span>{entry.label}</span>
          </div>
          <div className="h-[2px] w-12 bg-accent" />
          <div className="h-px w-16 bg-hairline" />
        </div>

        {/* items-start mencegah space kosong vertikal yang besar */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* KIRI: Teks & Info Kontak */}
          <div className="flex flex-col gap-8">
            <div>
              {/* Ukuran font diperkecil */}
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.9] text-text-1 drop-shadow-[0_0_30px_rgba(138,164,255,0.2)]">
                Hubungi
                <br />
                Saya
              </h2>
              <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-text-2 md:text-lg">
                Jika Anda memiliki pertanyaan, saran, atau ingin berdiskusi
                lebih lanjut, silakan hubungi saya melalui informasi kontak di
                bawah ini. Saya akan dengan senang hati merespons secepat
                mungkin.
              </p>
            </div>

            {/* Info Kontak */}
            <div className="flex flex-col gap-4">
              <ContactEmail />

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-accent/50 bg-accent/5 text-accent transition-colors group-hover:border-accent group-hover:bg-accent/20">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                    Telepon / WA
                  </span>
                  <span className="text-sm font-medium text-text-1 transition-colors group-hover:text-accent md:text-base">
                    +62 895 1013 4186
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-accent/50 bg-accent/5 text-accent">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                    Lokasi
                  </span>
                  <span className="text-sm font-medium text-text-1 md:text-base">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Tombol Download CV & Sosial Media (Digabung) */}
            <div className="mt-2 flex flex-col gap-6">
              {/* Tombol CV */}
              <div>
                <a
                  href={profile.cvPath}
                  className="group inline-flex items-center gap-3 border border-accent bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent/10"
                  style={{
                    clipPath:
                      "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              {/* Garis Pemisah Tipis */}
              <div className="h-px w-full max-w-sm bg-accent/20" />

              {/* Ikon Sosial Media & Teks */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-accent hover:bg-accent/10 md:size-12"
                  >
                    <SocialIcons.Linkedin size={18} />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-accent hover:bg-accent/10 md:size-12"
                  >
                    <SocialIcons.Github size={18} />
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-accent hover:bg-accent/10 md:size-12"
                  >
                    <SocialIcons.Instagram size={18} />
                  </a>
                  <a
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-md border border-hairline-strong bg-surface-1 text-text-2 transition-colors hover:border-accent hover:text-accent hover:bg-accent/10 md:size-12"
                  >
                    <SocialIcons.Whatsapp size={18} />
                  </a>
                </div>

                <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-widest text-text-3">
                  <span>Temukan saya di social media</span>
                  <ArrowRight size={14} className="text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: Foto dengan Bingkai HUD Futuristik */}
          <div className="relative w-full lg:ml-auto">
            <HudFrame src={hero.portrait.src} alt={hero.portrait.alt} />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
