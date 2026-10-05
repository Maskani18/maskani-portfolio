// MASKANI — Tier reader (§5.1).
//
// Tier diset pada <html data-tier="..."> oleh skrip inline kecil sebelum
// paint (U-09). Modul ini hanya membaca.

export type Tier = "static" | "lite" | "cinematic";

export function getTier(): Tier {
  if (typeof document === "undefined") return "static";
  const t = document.documentElement.dataset.tier;
  if (t === "lite" || t === "cinematic") return t;
  return "static";
}
