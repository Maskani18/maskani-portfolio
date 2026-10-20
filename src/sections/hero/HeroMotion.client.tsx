"use client";

import { useEffect } from "react";
import { getTier } from "@/motion/runtime/tier";
import { loadGsap } from "@/motion/runtime/gsap-loader";

export function HeroMotion() {
  useEffect(() => {
    if (getTier() === "static") return;
    let ctx: gsap.Context;

    const init = async () => {
      const { gsap } = await loadGsap();
      await document.fonts.ready;

      const heroEl = document.getElementById("hero");
      if (!heroEl) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // 1. Nama MASKANI naik (TANPA opacity:0 agar selalu terlihat - F-20)
        tl.fromTo(
          "[data-hero-name]",
          { y: 40 },
          { y: 0, duration: 1, delay: 0.1, clearProps: "transform" },
        )
          // 2. Meta info & Chip Open to Work
          .fromTo(
            "[data-hero-meta]",
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              clearProps: "opacity,transform",
            },
            "-=0.6",
          )
          // 3. Tagline & CTA
          .fromTo(
            "[data-hero-cta]",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              clearProps: "opacity,transform",
            },
            "-=0.4",
          );
      }, heroEl);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return null;
}
