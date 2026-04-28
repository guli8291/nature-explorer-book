import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, langCycle, t, TKey } from "./translations";

type Ctx = {
  lang: Lang;
  cycle: () => void;
  tr: (key: TKey) => string;
};

const LangContext = createContext<Ctx | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return (saved as Lang) || "ru";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const cycle = useCallback(() => setLang((l) => langCycle[l]), []);
  const tr = useCallback((key: TKey) => t[key]?.[lang] ?? String(key), [lang]);

  return <LangContext.Provider value={{ lang, cycle, tr }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
};
