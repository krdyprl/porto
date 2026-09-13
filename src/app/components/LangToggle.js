"use client";
import { useLanguage } from "../i18n/LanguageProvider";

const LangToggle = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="rounded-full px-3 py-1 text-sm font-medium border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    >
      {lang.toUpperCase()}
    </button>
  );
};

export default LangToggle;
