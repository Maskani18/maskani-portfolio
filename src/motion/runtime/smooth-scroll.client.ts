"use client";

// MASKANI — Smooth Scroll (Lenis).
// Hanya aktif di tier Cinematic. Menggunakan ticker GSAP tunggal (F-12).
// Dapat dibuang tanpa merusak situs (progressive enhancement).

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { loadGsap } from "./gsap-loader";
import { getTier } from "./tier";

export function SmoothScroll() {
  useEffect(() => {
    // Jangan jalankan Lenis jika user pakai HP atau minta kurangi gerak (Reduced Motion)
    if (getTier() !== "cinematic") return;

    let lenis: Lenis | null = null;
    let tickerFn: ((time: number) => void) | null = null;

    async function init() {
      // Tunggu GSAP selesai dimuat
      await loadGsap();

      // Inisialisasi Lenis
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      // Hubungkan Lenis ke ticker GSAP (agar tidak ada double requestAnimationFrame)
      tickerFn = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);

      // Sinkronisasi Lenis dengan ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      // Ekspos ke window agar SiteNav bisa memanggil lenis.scrollTo
      (window as unknown as { lenis: Lenis }).lenis = lenis;
    }

    init();

    // Cleanup saat komponen di-unmount
    return () => {
      if (tickerFn) gsap.ticker.remove(tickerFn);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
