"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export function ReportModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";

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
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[150] overflow-y-auto bg-black/60 backdrop-blur-md"
    >
      <div className="flex min-h-full items-center justify-center p-4 py-10 md:p-8">
        <div
          className="fixed inset-0"
          onClick={() => router.back()}
          aria-hidden="true"
        />

        {/* Konten Modal HUD */}
        {/* Konten Modal */}
        <div className="animate-[page-enter_0.4s_ease-out] relative z-10 w-full max-w-6xl overflow-hidden rounded-xl border border-accent/30 bg-[#090B0D]/95 shadow-[0_0_50px_rgba(138,164,255,0.15)] backdrop-blur-2xl">
          {/* Garis Grid dalam Modal */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(138,164,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(138,164,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* HUD Sudut Modal */}
          <div className="pointer-events-none fixed left-4 top-4 z-30 size-6 border-l-2 border-t-2 border-accent md:left-6 md:top-6" />
          <div className="pointer-events-none fixed right-4 top-4 z-30 size-6 border-r-2 border-t-2 border-accent md:right-6 md:top-6" />

          <button
            onClick={() => router.back()}
            className="absolute right-6 top-6 z-20 flex size-9 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_15px_rgba(138,164,255,0.4)] md:right-8 md:top-8"
            aria-label="Tutup detail"
          >
            <X size={18} />
          </button>

          {children}
        </div>
      </div>
    </div>
  );
}
