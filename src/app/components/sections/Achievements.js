"use client";
import { LuTrophy, LuExternalLink } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../Reveal";
import SplitHeading from "../SplitHeading";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  const { t, lang, pick } = useLanguage();
  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.achievements.title}
      </SplitHeading>
      <p className="opacity-70 text-sm mb-8">{t.achievements.subtitle}</p>

      <Reveal stagger className="flex flex-col gap-4">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="flex gap-4 rounded-xl border border-black/5 dark:border-white/10 p-4 hover:border-black/20 dark:hover:border-white/25 transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-black/5 dark:bg-white/10 grid place-items-center">
              <LuTrophy className="w-5 h-5 opacity-70" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h4 className="font-semibold">{pick(a.title)}</h4>
                {a.date && <span className="text-xs opacity-50">{a.date}</span>}
              </div>
              {a.issuer && <p className="text-sm opacity-70">{a.issuer}</p>}
              {pick(a.description) && (
                <p className="mt-1 text-sm opacity-70">{pick(a.description)}</p>
              )}
              {a.url && (
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-60 transition-opacity"
                >
                  {t.achievements.proof} <LuExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
