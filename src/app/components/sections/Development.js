"use client";
import { LuBookOpen } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../Reveal";
import SplitHeading from "../SplitHeading";
import { development } from "@/data/portfolio";

export default function Development() {
  const { t, lang, pick } = useLanguage();

  return (
    <section id="development" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.development.title}
      </SplitHeading>
      <p className="opacity-70 mb-8">{t.development.subtitle}</p>

      <Reveal stagger className="flex flex-col gap-3">
        {development.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-xl border border-black/5 dark:border-white/10 px-4 py-3 hover:border-black/20 dark:hover:border-white/25 transition-colors"
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-black/5 dark:bg-white/10">
              <LuBookOpen className="h-4 w-4 opacity-70" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-semibold">{item.title}</h4>
              {item.issuer && (
                <p className="text-xs opacity-60">{pick(item.issuer)}</p>
              )}
            </div>
            <span className="shrink-0 text-xs opacity-50">{item.year}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
