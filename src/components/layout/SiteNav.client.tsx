"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Download } from "lucide-react";

import { Icon } from "@/components/ui/Icon";
import { profile } from "@/content/profile";
import { sections } from "@/content/sections";

const navItems = sections.filter((s) => s.inNav);

export function SiteNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);

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

    const el = document.getElementById(id);
    if (!el) return;

    // Cek apakah Lenis aktif (Tier Cinematic).
    const lenis = (
      window as unknown as {
        lenis?: {
          scrollTo: (target: HTMLElement | string, options?: object) => void;
        };
      }
    ).lenis;

    if (lenis) {
      // Lenis yang menangani scroll.
      lenis.scrollTo(el, { offset: -100 });
    } else {
      // Fallback native scroll (Lite/Static).
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const heading = el.querySelector<HTMLElement>("h1, h2, h3");

    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }

    history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      {/* Container luar untuk memberikan margin dari atas layar */}
      <div className="pointer-events-none fixed left-0 top-0 z-[80] w-full px-4 py-4 md:px-6 md:py-6">
        {/* Navbar utama dengan gaya HUD */}
        <nav
          aria-label="Navigasi utama"
          className="pointer-events-auto relative mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between border border-accent/30 bg-[#090B0D]/80 px-6 backdrop-blur-md"
          style={{
            clipPath:
              "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          }}
        >
          {/* Garis aksen bawah (glow) */}
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />

          {/* KIRI: Logo & Teks */}
          <Link href="/" className="group flex items-center gap-3 outline-none">
            {/* Logo Baru */}
            <div className="relative flex size-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Maskani Logo"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>

            <span className="font-display text-[1.1rem] font-bold tracking-wider text-text-1">
              {profile.name}
              <span className="text-accent">.</span>
            </span>
          </Link>

          {/* TENGAH: Menu Navigasi (Desktop) */}
          <ul className="hidden h-full items-center gap-8 lg:flex">
            {navItems.map((item, index) => (
              <li key={item.id} className="relative flex h-full items-center">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent ${
                    index === 0 ? "text-accent" : "text-text-2"
                  }`}
                >
                  {item.label}

                  {/* Indikator aktif (statis di index 0) */}
                  {index === 0 && (
                    <div className="absolute -bottom-[22px] left-1/2 flex -translate-x-1/2 flex-col items-center">
                      <div className="size-1.5 rotate-45 bg-accent shadow-[0_0_8px_rgba(138,164,255,0.8)]" />
                      <div className="h-[2px] w-16 bg-accent shadow-[0_0_12px_rgba(138,164,255,0.8)]" />
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* KANAN: Tombol CV (Desktop) */}
          <div className="hidden items-center lg:flex">
            <a
              href={profile.cvPath}
              data-magnetic
              className="group flex items-center gap-2 rounded-md border border-accent/50 bg-transparent px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-accent transition-all hover:border-accent hover:bg-accent/10"
            >
              <Download size={16} />
              Unduh CV
            </a>
          </div>

          {/* MOBILE TRIGGER: Tombol Indeks */}
          <button
            type="button"
            onClick={() => dialogRef.current?.showModal()}
            aria-haspopup="dialog"
            className="flex items-center gap-2 text-text-1 outline-none lg:hidden"
          >
            <Icon name="index" size={24} />
            <span className="font-mono text-xs uppercase tracking-widest">
              Indeks
            </span>
          </button>
        </nav>
      </div>

      {/* DIALOG INDEX MOBILE */}
      <dialog
        ref={dialogRef}
        aria-label="Indeks situs"
        className="fixed inset-0 m-0 h-full max-h-full w-full max-w-full bg-[#090B0D] p-0 text-text-1 backdrop:bg-black/90 backdrop:backdrop-blur-md"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[72px] items-center justify-between border-b border-accent/20 px-6">
            <div className="flex items-center gap-3">
              {/* Logo Baru Mobile */}
              <div className="relative flex size-9 shrink-0 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Maskani Logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>

              <span className="font-display text-lg font-bold tracking-wider text-text-1">
                {profile.name}
                <span className="text-accent">.</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Tutup indeks"
              className="flex items-center gap-2 text-text-1 outline-none transition-colors hover:text-accent"
            >
              <Icon name="close" size={20} />
              <span className="font-mono text-xs uppercase tracking-widest">
                Tutup
              </span>
            </button>
          </div>

          <nav
            aria-label="Bagian"
            className="flex-1 overflow-y-auto px-6 py-10"
          >
            <ol className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      dialogRef.current?.close();
                      handleNavClick(e, item.id);
                    }}
                    className="group font-display text-xl uppercase text-text-1 outline-none transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col gap-3">
              <a
                href={profile.cvPath}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-accent/50 bg-transparent px-5 py-4 font-mono text-sm uppercase tracking-widest text-accent transition-colors hover:bg-accent/10"
              >
                <Download size={18} />
                Unduh CV
              </a>
            </div>
          </nav>
        </div>
      </dialog>
    </>
  );
}
