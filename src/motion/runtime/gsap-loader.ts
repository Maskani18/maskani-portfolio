// MASKANI — GSAP loader (§9.5).

async function load() {
  const g = await import("gsap");
  const st = await import("gsap/ScrollTrigger");
  const split = await import("gsap/SplitText");
  const motionPath = await import("gsap/MotionPathPlugin"); // Tambahkan ini

  g.gsap.registerPlugin(
    st.ScrollTrigger,
    split.SplitText,
    motionPath.MotionPathPlugin, // Daftarkan di sini
  );

  return {
    gsap: g.gsap,
    ScrollTrigger: st.ScrollTrigger,
    SplitText: split.SplitText,
    MotionPathPlugin: motionPath.MotionPathPlugin,
  };
}

export type GsapBundle = Awaited<ReturnType<typeof load>>;

let cached: Promise<GsapBundle> | null = null;

export function loadGsap(): Promise<GsapBundle> {
  if (!cached) cached = load();
  return cached;
}
