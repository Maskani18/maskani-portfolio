import { loadGsap } from "@/motion/runtime/gsap-loader";
import { getTier } from "@/motion/runtime/tier";

export async function setupTilt(root: HTMLElement): Promise<() => void> {
  if (getTier() !== "cinematic") return () => {};

  const { gsap } = await loadGsap();
  const elements = Array.from(
    root.querySelectorAll<HTMLElement>("[data-tilt]"),
  );

  const cleanups: (() => void)[] = [];

  elements.forEach((el) => {
    // Set perspektif agar efek 3D-nya terasa
    gsap.set(el, { transformPerspective: 1000 });

    const xTo = gsap.quickTo(el, "rotationY", {
      duration: 0.5,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(el, "rotationX", {
      duration: 0.5,
      ease: "power3.out",
    });

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Hitung jarak dari tengah (nilai antara -1 dan 1)
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      // Maksimal kemiringan 4 derajat (sesuai spec)
      xTo(dx * 4);
      yTo(-dy * 4);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    cleanups.push(() => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(el);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}
