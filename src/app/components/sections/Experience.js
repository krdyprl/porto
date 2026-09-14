"use client";
import { LuBookOpen } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../Reveal";
import RichText from "../RichText";
import SplitHeading from "../SplitHeading";
import { experience, leadership, otherRoles, development } from "@/data/portfolio";

// Sub-judul grup di dalam satu section Pengalaman.
function GroupHeading({ id, children }) {
  return (
    <h3
      id={id}
      className="scroll-mt-16 text-lg sm:text-xl font-semibold tracking-tight"
    >
      {children}
    </h3>
  );
}

export default function Experience() {
  const { t, lang, pick } = useLanguage();

  return (
    <section id="experience" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
      >
        {t.experience.title}
      </SplitHeading>

      <div className="mt-8 flex flex-col gap-14">
        {/* Peran profesional */}
        <div>
          <GroupHeading>{t.experience.work}</GroupHeading>
          <p className="mt-1.5 text-sm opacity-70">{t.experience.subtitle}</p>

          <Reveal stagger className="mt-5 flex flex-col gap-4">
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
        </div>

        {/* Kepemimpinan & komunitas */}
        <div>
          <GroupHeading id="leadership">{t.leadership.title}</GroupHeading>
          <p className="mt-1.5 text-sm opacity-70">{t.leadership.subtitle}</p>

          <Reveal stagger className="mt-5 flex flex-col gap-4">
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
            <div className="mt-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">
                {t.leadership.other}
              </h4>
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
        </div>

        {/* Pengembangan profesional */}
        <div>
          <GroupHeading id="development">{t.development.title}</GroupHeading>
          <p className="mt-1.5 text-sm opacity-70">{t.development.subtitle}</p>

          <Reveal stagger className="mt-5 flex flex-col gap-3">
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
        </div>
      </div>
    </section>
  );
}
