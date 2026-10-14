"use client";

// MASKANI — SiteNav + IndexDialog (§3.2, A-03, A-04, DL-015).
//
// Client karena: scroll handler, fokus judul section, state dialog native.
// Dialog memakai <dialog> native: Escape, focus trap, focus return
// ditangani browser (tanpa library, §8.3).

import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/Button";
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
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-[var(--nav-height)] w-full max-w-[var(--container-max)] items-center justify-between px-[var(--gutter)]"
      >
        <Link
          href="/"
          className="font-display text-[1.125rem] font-semibold tracking-tight text-text-1"
        >
          {profile.name}
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="font-mono text-meta uppercase text-text-2 transition-colors duration-[var(--dur-fast)] hover:text-accent"
              >
                <span aria-hidden="true">{item.number}</span> {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button href={profile.cvPath} variant="secondary">
              Unduh CV
            </Button>
          </li>
        </ul>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          aria-haspopup="dialog"
          className="inline-flex items-center gap-2 text-text-1 lg:hidden"
        >
          <Icon name="index" size={20} />
          <span className="font-mono text-meta uppercase">Indeks</span>
        </button>
      </nav>

      {/* Dialog Index mobile (A-04) */}
      <dialog
        ref={dialogRef}
        aria-label="Indeks situs"
        className="fixed inset-0 m-0 h-full max-h-full w-full max-w-full bg-void p-0 text-text-1 backdrop:bg-[var(--dialog-scrim)]"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[var(--nav-height)] items-center justify-between border-b border-hairline px-[var(--gutter)]">
            <span className="font-display text-[1.125rem] font-semibold">
              {profile.name}
            </span>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Tutup indeks"
              className="inline-flex items-center gap-2 text-text-1"
            >
              <Icon name="close" size={20} />
              <span className="font-mono text-meta uppercase">Tutup</span>
            </button>
          </div>

          <nav
            aria-label="Bagian"
            className="flex-1 overflow-y-auto px-[var(--gutter)] py-10"
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
                    className="flex items-baseline gap-4 font-display text-d3 text-text-1"
                  >
                    <span
                      className="font-mono text-meta text-text-3"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col gap-3">
              <Button href={profile.cvPath} variant="primary">
                <Icon name="download" size={18} />
                Unduh CV
              </Button>
              <Button href={profile.linkedin} variant="secondary" external>
                LinkedIn
                <Icon name="arrow-up-right" size={18} />
              </Button>
            </div>
          </nav>
        </div>
      </dialog>
    </>
  );
}
