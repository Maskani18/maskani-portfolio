"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { getTier } from "@/motion/runtime/tier";
import { loadGsap } from "@/motion/runtime/gsap-loader";

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

  const hydrated = useSyncExternalStore(
    subscribeNoop,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (!hydrated) return;
    if (getTier() !== "cinematic") return;

    let cleanupFn: (() => void) | undefined;

    const init = async () => {
      const { gsap } = await loadGsap();
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      document.body.classList.add("has-custom-cursor");

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

      const onHoverEnter = (e: MouseEvent) => {
        const target = e.target;
        if (
          target instanceof Element &&
          target.closest("a, button, [data-magnetic], input, textarea, select")
        ) {
          document.body.classList.add("cursor-hover");
        }
      };

      const onHoverLeave = (e: MouseEvent) => {
        const target = e.target;
        if (
          target instanceof Element &&
          target.closest("a, button, [data-magnetic], input, textarea, select")
        ) {
          document.body.classList.remove("cursor-hover");
        }
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      document.addEventListener("mouseover", onHoverEnter);
      document.addEventListener("mouseout", onHoverLeave);

      cleanupFn = () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerleave", onLeave);
        document.removeEventListener("mouseover", onHoverEnter);
        document.removeEventListener("mouseout", onHoverLeave);
        document.body.classList.remove("has-custom-cursor", "cursor-hover");
        gsap.killTweensOf([dot, ring]);
      };
    };

    init();

    return () => {
      cleanupFn?.();
    };
  }, [hydrated]);

  if (!hydrated) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}