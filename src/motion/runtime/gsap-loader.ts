// MASKANI — GSAP loader (§9.5).
//
// Dynamic import: GSAP + ScrollTrigger hanya dimuat saat tier bukan static.
// Cache pada satu promise agar hanya satu instance dalam sesi.
// Tipe diturunkan dari return `load()` supaya tidak perlu menulis tipe
// GSAP secara eksplisit (dan menghindari `import()` type annotation yang
// dilarang ESLint).

async function load() {
  const g = await import("gsap");
  const st = await import("gsap/ScrollTrigger");
  g.gsap.registerPlugin(st.ScrollTrigger);
  return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger };
}

export type GsapBundle = Awaited<ReturnType<typeof load>>;

let cached: Promise<GsapBundle> | null = null;

export function loadGsap(): Promise<GsapBundle> {
  if (!cached) cached = load();
  return cached;
}
