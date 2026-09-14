"use client";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../Reveal";
import RichText from "../RichText";
import SplitHeading from "../SplitHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const { t, lang, pick } = useLanguage();

  return (
    <section id="experience" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.experience.title}
      </SplitHeading>
      <p className="opacity-70 mb-8">{t.experience.subtitle}</p>

      <Reveal stagger className="flex flex-col gap-4">
        {experience.map((item, i) => (
          <article
            key={i}
            className="rounded-xl border border-black/5 dark:border-white/10 p-5 hover:border-black/20 dark:hover:border-white/25 transition-colors"
          >
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h4 className="font-semibold">{pick(item.role)}</h4>
              <span className="text-xs opacity-50">{pick(item.period)}</span>
            </div>
            <p className="text-sm opacity-70">{pick(item.org)}</p>

            {item.blurb && (
              <p className="mt-3 text-sm opacity-70">
                <RichText text={pick(item.blurb)} />
              </p>
            )}

            <ul className="mt-3 flex flex-col gap-1.5">
              {pick(item.points).map((point, j) => (
                <li key={j} className="flex gap-2.5 text-sm opacity-80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-current" />
                  <span>
                    <RichText text={point} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
