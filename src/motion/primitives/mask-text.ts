import { loadGsap } from "@/motion/runtime/gsap-loader";
import { getTier } from "@/motion/runtime/tier";

export async function setupMaskText(root: HTMLElement): Promise<() => void> {
  const tier = getTier();
  if (tier === "static") return () => {};

  const { gsap, SplitText } = await loadGsap();

  // Tunggu font selesai dimuat agar pemotongan baris akurat
  await document.fonts.ready;

  const elements = Array.from(
    root.querySelectorAll<HTMLElement>("[data-mask-text]"),
  );

  const ctx = gsap.context(() => {
    for (const el of elements) {
      const split = new SplitText(el, {
        type: "lines",
        mask: "lines", // Ini otomatis membuat pembungkus overflow-hidden
      });

      gsap.from(split.lines, {
        yPercent: 100,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
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
