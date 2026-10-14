// MASKANI — 404 (§3.1, A-09).

import Link from "next/link";
import type { JSX } from "react";

export default function NotFound(): JSX.Element {
  return (
    <main
      id="main"
      className="flex min-h-[calc(100svh-var(--nav-height))] flex-col items-center justify-center gap-8 px-[var(--gutter)] py-24 text-center"
    >
      <p className="font-mono text-meta uppercase text-text-3">404</p>
      <h1 className="font-display text-d3 text-text-1">
        Halaman tidak ditemukan
      </h1>
      <Link
        href="/"
        className="font-mono text-meta uppercase text-text-2 transition-colors duration-[var(--dur-fast)] hover:text-accent"
      >
        ← Kembali ke beranda
      </Link>
    </main>
  );
}
