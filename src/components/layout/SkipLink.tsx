// MASKANI — SkipLink (elemen fokus pertama, §12 C-13).
//
// Sebab: WCAG 2.2 + §12 mewajibkan skip link sebagai fokus pertama.
// Tujuan: pengguna keyboard dapat melompati nav dan langsung ke <main>.
// Perilaku: tersembunyi secara visual (bukan `display: none` supaya tetap
// fokusable) dan tampil saat fokus. Styling murni via utility Tailwind dari
// token, sesuai F-04.

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:rounded-sm focus:border focus:border-[var(--color-accent)] focus:bg-[var(--color-void)] focus:px-4 focus:py-2 focus:text-[0.9375rem] focus:text-[var(--color-text-1)]"
    >
      Lompat ke konten
    </a>
  );
}
