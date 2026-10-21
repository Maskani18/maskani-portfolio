"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export function ReportModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Kunci scroll pada body (background)
    document.body.style.overflow = "hidden";

    // Handle tombol Escape
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [router]);

  return (
    // data-lenis-prevent = Kunci agar Lenis tidak mengambil alih scroll di dalam modal
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[150] overflow-y-auto bg-black/80 backdrop-blur-sm"
    >
      <div className="flex min-h-full items-center justify-center p-4 py-10 md:p-8">
        {/* Backdrop area untuk menutup modal */}
        <div
          className="fixed inset-0"
          onClick={() => router.back()}
          aria-hidden="true"
        />

        {/* Konten Modal */}
        <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-xl border border-accent/20 bg-void shadow-2xl">
          {/* Tombol Close */}
          <button
            onClick={() => router.back()}
            className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-hairline bg-surface-1/80 text-text-2 backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
            aria-label="Tutup detail"
          >
            <X size={20} />
          </button>

          {children}
        </div>
      </div>
    </div>
  );
}
