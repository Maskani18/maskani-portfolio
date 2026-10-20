"use client";

import { useEffect } from "react";

import { setupMaskText } from "@/motion/primitives/mask-text"; // Tambahan
import { setupReveal } from "@/motion/primitives/reveal";
import { getTier } from "@/motion/runtime/tier";

export function Effects() {
  useEffect(() => {
    if (getTier() === "static") return;

    let cancelled = false;
    let cleanupReveal: (() => void) | null = null;
    let cleanupMask: (() => void) | null = null;

    void (async () => {
      const revealFn = await setupReveal(document.body);
      const maskFn = await setupMaskText(document.body); // Tambahan

      if (cancelled) {
        revealFn();
        maskFn();
        return;
      }
      cleanupReveal = revealFn;
      cleanupMask = maskFn;
    })();

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent): void => {
      if (e.matches) {
        cleanupReveal?.();
        cleanupMask?.();
        cleanupReveal = null;
        cleanupMask = null;
        document.documentElement.dataset.tier = "static";
      }
    };
    mql.addEventListener("change", onChange);

    return () => {
      cancelled = true;
      cleanupReveal?.();
      cleanupMask?.();
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
