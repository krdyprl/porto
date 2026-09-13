"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { dictionary } from "./dictionary";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "id" || saved === "en") setLang(saved);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "id" ? "en" : "id";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  // t = teks UI dari dictionary; pick = ambil field dwibahasa dari data ({id,en})
  const t = dictionary[lang];
  const pick = (field) =>
    field && typeof field === "object" ? field[lang] : field;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
