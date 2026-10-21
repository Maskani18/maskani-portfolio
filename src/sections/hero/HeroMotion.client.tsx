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
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // 1. Animasi Mask Reveal pada Teks MASKANI (Slide up)
        tl.fromTo(
          "[data-hero-name]",
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.4 },
        )
          // 2. Meta info & Chip Open to Work
          .fromTo(
            "[data-hero-meta]",
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              clearProps: "opacity,transform",
            },
            "-=1.0",
          )
          // 3. Tagline & CTA
          .fromTo(
            "[data-hero-cta]",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              clearProps: "opacity,transform",
            },
            "-=0.6",
          )
          // 4. Foto Potret muncul dari kanan
          .fromTo(
            "[data-hero-photo-wrapper]",
            { opacity: 0, scale: 0.95, x: 30 },
            { opacity: 1, scale: 1, x: 0, duration: 1.2 },
            "-=1.2",
          );

        // 5. Animasi breathing pada foto
        gsap.to("[data-hero-photo-wrapper]", {
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.5,
        });

        // 6. Animasi Orbit HUD berputar
        gsap.to("[data-hero-orbit]", {
          rotation: 360,
          duration: 60,
          ease: "linear",
          repeat: -1,
        });
      }, heroEl);
    };

    void init();

    return () => ctx?.revert();
  }, []);

  return null;
}
