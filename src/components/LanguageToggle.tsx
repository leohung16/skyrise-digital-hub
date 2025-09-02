"use client";
import { useEffect, useState } from "react";

type Locale = "en" | "gu";

export function useLocale(): [Locale, (l: Locale) => void] {
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => {
    const saved = (localStorage.getItem("locale") as Locale | null) || "en";
    setLocale(saved);
    document.documentElement.setAttribute("lang", saved);
  }, []);
  function update(l: Locale) {
    setLocale(l);
    localStorage.setItem("locale", l);
    document.documentElement.setAttribute("lang", l);
  }
  return [locale, update];
}

export default function LanguageToggle() {
  const [locale, setLocale] = useLocale();
  return (
    <div className="inline-flex items-center gap-2 text-sm">
      <button
        className={`px-2 py-1 rounded ${locale === "en" ? "bg-foreground text-background" : "border border-black/10 dark:border-white/10"}`}
        onClick={() => setLocale("en")}
      >EN</button>
      <button
        className={`px-2 py-1 rounded ${locale === "gu" ? "bg-foreground text-background" : "border border-black/10 dark:border-white/10"}`}
        onClick={() => setLocale("gu")}
      >GU</button>
    </div>
  );
}


