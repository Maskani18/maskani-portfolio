"use client";

// MASKANI — Atmosphere + reveal mount (§5.6, §5.3).
//
// Client karena: mount grain/vignette sebagai layer, jalankan reveal
// berbasis GSAP. Jika tier = static, tidak ada GSAP yang diimpor (BR-01).
// Jika prefers-reduced-motion berubah di tengah sesi, kita revert:
// ScrollTrigger di-kill, tier atribut diubah, konten tetap terlihat.

import { useEffect } from "react";

import { setupReveal } from "@/motion/primitives/reveal";
import { getTier } from "@/motion/runtime/tier";

export function Effects() {
  useEffect(() => {
    if (getTier() === "static") return;

    let cancelled = false;
    let cleanup: (() => void) | null = null;

    void (async () => {
      const fn = await setupReveal(document.body);
      if (cancelled) {
        fn();
        return;
      }
      cleanup = fn;
    })();

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent): void => {
      if (e.matches) {
        cleanup?.();
        cleanup = null;
        document.documentElement.dataset.tier = "static";
      }
    };
    mql.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      cleanup?.();
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="atmosphere-vignette" />
      <div aria-hidden="true" className="atmosphere-grain" />
    </>
  );
}
