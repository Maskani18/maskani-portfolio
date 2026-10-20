"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { getTier } from "@/motion/runtime/tier";
import { loadGsap } from "@/motion/runtime/gsap-loader";

// Hydration check (false saat SSR, true saat client)
function subscribeNoop(): () => void {
  return () => {};
}
function getSnapshot(): boolean {
  return true;
}
function getServerSnapshot(): boolean {
  return false;
}

export function CursorSystem() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Menggunakan hook ini agar tidak ada setState di dalam useEffect
  const hydrated = useSyncExternalStore(
    subscribeNoop,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    // Pastikan hanya jalan di client dan tier adalah cinematic
    if (!hydrated) return;
    if (getTier() !== "cinematic") return;

    let cleanupFn: (() => void) | undefined;

    const init = async () => {
      const { gsap } = await loadGsap();
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      // Sembunyikan kursor asli
      document.body.classList.add("has-custom-cursor");

      // Gunakan quickTo untuk performa terbaik
      const dotX = gsap.quickTo(dot, "x", { duration: 0, ease: "none" });
      const dotY = gsap.quickTo(dot, "y", { duration: 0, ease: "none" });

      const ringX = gsap.quickTo(ring, "x", {
        duration: 0.35,
        ease: "power3.out",
      });
      const ringY = gsap.quickTo(ring, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      let isVisible = false;

      const onMove = (e: PointerEvent) => {
        if (!isVisible) {
          gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
          isVisible = true;
        }
        dotX(e.clientX);
        dotY(e.clientY);
        ringX(e.clientX);
        ringY(e.clientY);
      };

      const onLeave = () => {
        gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
        isVisible = false;
      };

      const onHoverEnter = () => document.body.classList.add("cursor-hover");
      const onHoverLeave = () => document.body.classList.remove("cursor-hover");

      const bindHoverEvents = () => {
        const targets = document.querySelectorAll(
          "a, button, [data-magnetic], input, textarea, select",
        );
        targets.forEach((el) => {
          el.addEventListener("pointerenter", onHoverEnter);
          el.addEventListener("pointerleave", onHoverLeave);
        });
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);

      setTimeout(bindHoverEvents, 1000);

      cleanupFn = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerleave", onLeave);
        document.body.classList.remove("has-custom-cursor", "cursor-hover");
        gsap.killTweensOf([dot, ring]);
      };
    };

    init();

    return () => {
      cleanupFn?.();
    };
  }, [hydrated]);

  // Jangan render di server (SSR) agar tidak terjadi hydration mismatch
  if (!hydrated) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
