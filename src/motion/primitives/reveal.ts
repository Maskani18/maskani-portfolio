// MASKANI — Primitive reveal (§5.3, §9.2).
//
// Fade + translate Y, sekali, `start: "top 85%"`. Hanya untuk elemen di
// bawah lipatan. Elemen yang sudah terlihat saat init tidak di-set opacity 0
// (F-20: tidak ada opacity: 0 di CSS; JS juga tidak menimpa elemen di atas
// lipatan).
//
// Perilaku per tier:
//   static    — tidak dipanggil (caller menjaga; GSAP tidak di-load).
//   lite      — translate 12px, durasi 0.4s.
//   cinematic — translate 24px, durasi 0.56s.
//
// Cleanup lewat `gsap.context()` — idiomatik GSAP: seluruh tween dan
// ScrollTrigger yang dibuat di dalam scope akan di-revert bersamaan.

import { loadGsap } from "@/motion/runtime/gsap-loader";
import { getTier } from "@/motion/runtime/tier";

export async function setupReveal(root: HTMLElement): Promise<() => void> {
  const tier = getTier();
  if (tier === "static") return () => {};

  const { gsap } = await loadGsap();

  const distance = tier === "lite" ? 12 : 24;
  const duration = tier === "lite" ? 0.4 : 0.56;

  const vh = window.innerHeight;
  const elements = Array.from(
    root.querySelectorAll<HTMLElement>("[data-reveal]"),
  );

  const ctx = gsap.context(() => {
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= vh * 0.85) continue;

      gsap.set(el, { opacity: 0, y: distance });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }
  }, root);

  return () => ctx.revert();
}
