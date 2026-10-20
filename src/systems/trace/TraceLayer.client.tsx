"use client";

// MASKANI — The Trace (R2-05).
//
// Garis vertikal futuristik di sisi kiri layar yang tergambar
// mengikuti scroll (scrub). Menggunakan SVG path dengan teknik stroke-dashoffset.
// Hanya aktif di desktop (Cinematic/Lite). Disembunyikan di mobile.

import { useEffect, useRef } from "react";
import { getTier } from "@/motion/runtime/tier";
import { loadGsap } from "@/motion/runtime/gsap-loader";

export function TraceLayer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Di mobile (Static/Lite), kita matikan Trace fixed agar tidak mengganggu layout
    const tier = getTier();
    if (tier === "static" || tier === "lite") return;

    let ctx: gsap.Context;

    const init = async () => {
      const { gsap } = await loadGsap();
      const path = pathRef.current;
      const dot = dotRef.current;

      if (!path || !dot) return;

      // Dapatkan total panjang garis
      const length = path.getTotalLength();

      // Set properti awal (garis kosong, dot di titik awal)
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(dot, { x: 0, y: 0, opacity: 0 });

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Efek halus (smooth catch-up)
          },
        });

        // Gambar garisnya
        tl.to(path, {
          strokeDashoffset: 0,
          ease: "none",
        });

        // Gerakkan dot (sinyal) mengikuti ujung garis
        tl.to(
          dot,
          {
            opacity: 1,
            duration: 0.1,
            ease: "none",
          },
          0,
        ).to(
          dot,
          {
            motionPath: {
              path: path,
              align: path,
              alignOrigin: [0.5, 0.5],
            },
            ease: "none",
          },
          0,
        );
      }, svgRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-0 z-[var(--layer-trace)] hidden h-full w-4 md:block lg:left-12"
    >
      <svg
        ref={svgRef}
        className="h-full w-full overflow-visible"
        viewBox="0 0 20 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Garis dasar (samar, full path) */}
        <path
          d="M 10 0 L 10 1000"
          stroke="var(--color-hairline)"
          strokeWidth="1"
        />
        {/* Garis animasi (terang) */}
        <path
          ref={pathRef}
          d="M 10 0 L 10 1000"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Titik sinyal */}
        <circle
          ref={dotRef}
          r="4"
          fill="var(--color-accent)"
          className="shadow-[0_0_10px_var(--color-accent)]"
        />
      </svg>
    </div>
  );
}
