// MASKANI — Motion Contract (U-01).
// Kosakata atribut data-* untuk seluruh sistem animasi.

export const MOTION_ATTR = {
  // Animasi dasar (R1/R2)
  REVEAL: "data-reveal",
  MASK: "data-mask-text",

  // Sistem Trace (R2)
  TRACE_NODE: "data-trace-node",
  TRACE_TERMINUS: "data-trace-terminus",

  // Interaksi (R3)
  MAGNETIC: "data-magnetic",
  CURSOR: "data-cursor",
  PARALLAX: "data-parallax",
} as const;

// Kecepatan transisi
export const MOTION_CONFIG = {
  revealY: 24,
  staggerMs: 60,
  lenisLerp: 0.1,
};
