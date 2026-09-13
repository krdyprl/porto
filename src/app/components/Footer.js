"use client";
import { useLanguage } from "../i18n/LanguageProvider";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-20">
      <div className="wrapper py-8 flex flex-col items-center gap-1 text-sm opacity-70">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          {t.footer.builtWith} 💖 {t.footer.using}
        </p>
      </div>
    </footer>
  );
}
