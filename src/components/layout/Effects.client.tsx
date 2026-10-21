"use client";

import { useEffect } from "react";

import { setupMaskText } from "@/motion/primitives/mask-text";
import { setupReveal } from "@/motion/primitives/reveal";
import { setupMagnetic } from "@/motion/primitives/magnetic";
import { setupTilt } from "@/motion/primitives/tilt";
import { getTier } from "@/motion/runtime/tier";

export function Effects() {
  useEffect(() => {
    if (getTier() === "static") return;

    let cancelled = false;
    let cleanupReveal: (() => void) | null = null;
    let cleanupMask: (() => void) | null = null;
    let cleanupMagnetic: (() => void) | null = null;
    let cleanupTilt: (() => void) | null = null;

    void (async () => {
      const revealFn = await setupReveal(document.body);
      const maskFn = await setupMaskText(document.body);
      const magneticFn = await setupMagnetic(document.body);
      const tiltFn = await setupTilt(document.body);

      if (cancelled) {
        revealFn();
        maskFn();
        magneticFn();
        tiltFn();
        return;
      }

      cleanupReveal = revealFn;
      cleanupMask = maskFn;
      cleanupMagnetic = magneticFn;
      cleanupTilt = tiltFn;
    })();

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onChange = (e: MediaQueryListEvent): void => {
      if (e.matches) {
        cleanupReveal?.();
        cleanupMask?.();
        cleanupMagnetic?.();
        cleanupTilt?.();

        cleanupReveal = null;
        cleanupMask = null;
        cleanupMagnetic = null;
        cleanupTilt = null;

        document.documentElement.dataset.tier = "static";
      }
    };

    mql.addEventListener("change", onChange);

    return () => {
      cancelled = true;

      cleanupReveal?.();
      cleanupMask?.();
      cleanupMagnetic?.();
      cleanupTilt?.();

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
