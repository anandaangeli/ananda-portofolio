"use client";

import { createContext, useContext, useMemo } from "react";
import { content, type Lang } from "./content";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof content)["id"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Hardcoded to ID as requested by user. No local storage, no state.
  const value = useMemo<LanguageContextValue>(
    () => ({ lang: "id", setLang: () => {}, t: content["id"] }),
    []
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
