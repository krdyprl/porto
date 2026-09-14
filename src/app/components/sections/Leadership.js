"use client";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../Reveal";
import RichText from "../RichText";
import SplitHeading from "../SplitHeading";
import { leadership, otherRoles } from "@/data/portfolio";

export default function Leadership() {
  const { t, lang, pick } = useLanguage();

  return (
    <section id="leadership" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.leadership.title}
      </SplitHeading>
      <p className="opacity-70 mb-8">{t.leadership.subtitle}</p>

      <Reveal stagger className="flex flex-col gap-4">
        {leadership.map((item, i) => (
          <article
            key={i}
            className="rounded-xl border border-black/5 dark:border-white/10 p-5 hover:border-black/20 dark:hover:border-white/25 transition-colors"
          >
            <p className="text-xs font-semibold uppercase tracking-wider opacity-50">
              {pick(item.name)}
            </p>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
              <h4 className="font-semibold">{pick(item.role)}</h4>
              <span className="text-xs opacity-50">{pick(item.period)}</span>
            </div>
            {item.org && <p className="text-sm opacity-70">{pick(item.org)}</p>}

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

      {otherRoles.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">{t.leadership.other}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherRoles.map((role, i) => (
              <div
                key={i}
                className="rounded-xl border border-black/5 dark:border-white/10 p-4"
              >
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h4 className="text-sm font-semibold">{pick(role.title)}</h4>
                  <span className="text-xs opacity-50">{pick(role.date)}</span>
                </div>
                <p className="mt-1 text-sm opacity-70">
                  <RichText text={pick(role.description)} />
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
