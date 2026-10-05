// MASKANI — Tier script inline (U-09, §5.1).
//
// Sebab: atribut tier harus diset pada <html> SEBELUM paint agar CSS tier
// tidak menyebabkan flash. Skrip ini dijalankan inline di <head> oleh
// layout.tsx.
// Tujuan: menentukan `data-tier` = static | lite | cinematic berdasarkan
// preferensi OS (reduced-motion) dan kemampuan input (pointer fine + hover).
// Perilaku: tanpa JS → tidak ada atribut tier; base.css + tiers.css sudah
// menghasilkan tampilan akhir statis penuh.
//
// Catatan: script disimpan sebagai string supaya tidak di-bundle oleh
// Turbopack. Panjangnya < 400 byte, dijalankan sinkron sebelum paint.

export const TIER_SCRIPT = `(function(){try{var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(rm){document.documentElement.dataset.tier='static';return;}var fine=window.matchMedia('(pointer: fine)').matches;var hover=window.matchMedia('(hover: hover)').matches;document.documentElement.dataset.tier=fine&&hover?'cinematic':'lite';}catch(e){}})();`;
