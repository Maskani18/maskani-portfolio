"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-4 z-[90] flex size-10 items-center justify-center rounded-md border border-accent/40 bg-[#090B0D]/80 text-accent shadow-[0_0_20px_rgba(138,164,255,0.2)] backdrop-blur-md transition-all duration-500 hover:bg-accent/20 hover:shadow-[0_0_30px_rgba(138,164,255,0.5)] md:bottom-10 md:right-10 md:size-12 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
      aria-label="Kembali ke atas"
      style={{
        clipPath:
          "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
      }}
    >
      <ArrowUp size={18} className="animate-bounce md:size-5" />
    </button>
  );
}
