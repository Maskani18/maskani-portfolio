"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type Language = "id" | "en";

type LanguageContextType = {
  lang: Language;
  toggleLang: (newLang: Language) => void;
};

// 1. Setup Store untuk membaca localStorage tanpa hydration mismatch
let listeners: Array<() => void> = [];
const emitChange = () => listeners.forEach((l) => l());

const subscribe = (listener: () => void) => {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};

const getSnapshot = (): Language => {
  if (typeof window === "undefined") return "id";
  const stored = localStorage.getItem("maskani-lang");
  return stored === "en" ? "en" : "id";
};

const getServerSnapshot = (): Language => "id";

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 2. Gunakan useSyncExternalStore
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleLang = (newLang: Language) => {
    localStorage.setItem("maskani-lang", newLang);
    emitChange();
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
