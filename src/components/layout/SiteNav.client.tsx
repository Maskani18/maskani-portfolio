"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Download, X, Globe } from "lucide-react"; // <-- Globe ditambahkan di sini

import { Icon } from "@/components/ui/Icon";
import { profile } from "@/content/profile";
import { sections } from "@/content/sections";
import { useLanguage } from "@/context/LanguageContext";

const navItems = sections.filter((s) => s.inNav);

export function SiteNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdrop = (e: MouseEvent): void => {
      if (e.target === dialog) {
        dialog.close();
      }
    };

    dialog.addEventListener("click", handleBackdrop);

    return () => {
      dialog.removeEventListener("click", handleBackdrop);
    };
  }, []);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ): void {
    e.preventDefault();
    dialogRef.current?.close();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    const heading = el.querySelector<HTMLElement>("h1, h2, h3");

    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }

    history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-[80] w-full px-4 py-4 md:px-6 md:py-6">
        <nav
          aria-label="Navigasi utama"
          className="pointer-events-auto relative mx-auto flex h-[60px] w-full max-w-[1400px] items-center justify-between border border-accent/30 bg-[#090B0D]/80 px-4 backdrop-blur-md md:h-[72px] md:px-6"
          style={{
            clipPath:
              "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />

          {/* KIRI: Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 outline-none md:gap-3"
          >
            <div className="relative flex size-7 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 md:size-9">
              <Image
                src="/logo.png"
                alt="Maskani Logo"
                width={36}
                height={36}
                className="size-full object-contain"
                priority
              />
            </div>

            <span className="font-display text-[0.9rem] font-bold tracking-wider text-text-1 md:text-[1.1rem]">
              {profile.name}
              <span className="text-accent">.</span>
            </span>
          </Link>

          {/* KANAN: Bahasa & Indeks */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Tombol Toggle Bahasa - Dengan Ikon Lucide */}
            <div
              className="flex items-center gap-1 rounded-md border border-accent/20 bg-accent/5 p-1"
              aria-label="Pilih bahasa"
            >
              <button
                type="button"
                onClick={() => toggleLang("id")}
                aria-pressed={lang === "id"}
                className={`flex items-center gap-1.5 rounded px-1.5 py-1 font-mono text-[0.55rem] uppercase transition-all md:px-2 md:text-[0.65rem] ${
                  lang === "id"
                    ? "bg-accent text-[#090B0D] shadow-[0_0_10px_rgba(138,164,255,0.4)]"
                    : "text-text-3 hover:text-text-1"
                }`}
              >
                <Globe size={10} className="md:size-3" />
                ID
              </button>
              <button
                type="button"
                onClick={() => toggleLang("en")}
                aria-pressed={lang === "en"}
                className={`flex items-center gap-1.5 rounded px-1.5 py-1 font-mono text-[0.55rem] uppercase transition-all md:px-2 md:text-[0.65rem] ${
                  lang === "en"
                    ? "bg-accent text-[#090B0D] shadow-[0_0_10px_rgba(138,164,255,0.4)]"
                    : "text-text-3 hover:text-text-1"
                }`}
              >
                <Globe size={10} className="md:size-3" />
                EN
              </button>
            </div>

            {/* Tombol Indeks (Muncul di Mobile & Desktop) */}
            <button
              type="button"
              onClick={() => dialogRef.current?.showModal()}
              aria-haspopup="dialog"
              className="flex items-center gap-2 text-text-1 outline-none"
            >
              <Icon name="index" size={20} />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest">
                {lang === "id" ? "Indeks" : "Index"}
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* DIALOG INDEKS */}
      <dialog
        ref={dialogRef}
        aria-label={lang === "id" ? "Indeks situs" : "Site index"}
        className="fixed left-auto right-4 top-[76px] m-0 w-[280px] max-w-[calc(100vw-2rem)] overflow-visible border-0 bg-transparent p-0 text-text-1 backdrop:bg-black/20 backdrop:backdrop-blur-[2px] open:block md:right-6 md:top-[96px]"
      >
        <div className="pointer-events-none absolute -inset-4 -z-10">
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-[40px]" />
        </div>

        <div
          className="relative overflow-hidden rounded-xl border border-accent/40 bg-[#090B0D]/80 shadow-2xl backdrop-blur-xl"
          style={{
            clipPath:
              "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(138,164,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(138,164,255,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="pointer-events-none absolute left-0 top-0 size-5 border-l-2 border-t-2 border-accent" />
          <div className="pointer-events-none absolute right-0 top-0 size-5 border-r-2 border-t-2 border-accent" />
          <div className="pointer-events-none absolute bottom-0 left-0 size-5 border-b-2 border-l-2 border-accent" />
          <div className="pointer-events-none absolute bottom-0 right-0 size-5 border-b-2 border-r-2 border-accent" />

          <div className="relative z-10 flex items-center justify-between border-b border-accent/20 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)]" />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                Menu
              </span>
            </div>

            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={lang === "id" ? "Tutup indeks" : "Close index"}
              className="flex size-6 items-center justify-center rounded-md border border-hairline bg-surface-1/50 text-text-3 outline-none transition-colors hover:border-accent hover:text-accent"
            >
              <X size={12} />
            </button>
          </div>

          <ol className="relative z-10 flex flex-col p-1.5">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="hud-menu-item group flex items-center justify-between rounded-md px-3 py-2 font-display text-[13px] uppercase tracking-wider text-text-2 outline-none transition-all hover:bg-accent/10 hover:text-accent"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {item.label}
                  </span>

                  <span className="font-mono text-[0.6rem] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <div className="relative z-10 flex items-center justify-between border-t border-accent/20 px-4 py-2.5">
            <span className="font-mono text-[0.55rem] uppercase tracking-widest text-text-3">
              {profile.name}
            </span>

            <a
              href={profile.cvPath}
              className="flex items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-widest text-accent transition-colors hover:text-accent-hover"
            >
              <Download size={10} />
              {lang === "id" ? "Unduh CV" : "Download CV"}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
