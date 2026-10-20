"use client";

import { useEffect } from "react";

import { setupMaskText } from "@/motion/primitives/mask-text";
import { setupReveal } from "@/motion/primitives/reveal";
import { setupMagnetic } from "@/motion/primitives/magnetic"; // Tambahan
import { getTier } from "@/motion/runtime/tier";

export function Effects() {
  useEffect(() => {
    if (getTier() === "static") return;

    let cancelled = false;
    let cleanupReveal: (() => void) | null = null;
    let cleanupMask: (() => void) | null = null;
    let cleanupMagnetic: (() => void) | null = null; // Tambahan

    void (async () => {
      const revealFn = await setupReveal(document.body);
      const maskFn = await setupMaskText(document.body);
      const magneticFn = await setupMagnetic(document.body); // Panggil di sini

      if (cancelled) {
        revealFn();
        maskFn();
        magneticFn();
        return;
      }
      cleanupReveal = revealFn;
      cleanupMask = maskFn;
      cleanupMagnetic = magneticFn;
    })();

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent): void => {
      if (e.matches) {
        cleanupReveal?.();
        cleanupMask?.();
        cleanupMagnetic?.();
        cleanupReveal = null;
        cleanupMask = null;
        cleanupMagnetic = null;
        document.documentElement.dataset.tier = "static";
      }
    };
    mql.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      cleanupReveal?.();
      cleanupMask?.();
      cleanupMagnetic?.();
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
