import { loadGsap } from "@/motion/runtime/gsap-loader";
import { getTier } from "@/motion/runtime/tier";

export async function setupMagnetic(root: HTMLElement): Promise<() => void> {
  // Hanya aktif di tier Cinematic (Desktop dengan mouse)
  if (getTier() !== "cinematic") return () => {};

  const { gsap } = await loadGsap();

  // Cari semua elemen yang memiliki atribut data-magnetic
  const elements = Array.from(
    root.querySelectorAll<HTMLElement>("[data-magnetic]"),
  );
  if (elements.length === 0) return () => {};

  const RADIUS = 72; // Radius deteksi (px)
  const STRENGTH = 8; // Tarikan maksimal (px)

  const state = elements.map((el) => {
    // quickTo jauh lebih performa daripada gsap.to biasa untuk event mousemove
    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
    return { el, xTo, yTo };
  });

  const onPointerMove = (e: PointerEvent) => {
    state.forEach(({ el, xTo, yTo }) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < RADIUS) {
        // Hitung jarak tarikan berdasarkan jarak mouse ke tengah tombol
        const pullX = (dx / RADIUS) * STRENGTH;
        const pullY = (dy / RADIUS) * STRENGTH;
        xTo(pullX);
        yTo(pullY);
      } else {
        // Kembali ke posisi awal
        xTo(0);
        yTo(0);
      }
    });
  };

  window.addEventListener("pointermove", onPointerMove, { passive: true });

  return () => {
    window.removeEventListener("pointermove", onPointerMove);
    state.forEach(({ el }) => {
      gsap.killTweensOf(el);
      gsap.set(el, { clearProps: "transform" });
    });
  };
}
