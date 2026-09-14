"use client";
import { LuGraduationCap, LuLanguages } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../Reveal";
import SplitHeading from "../SplitHeading";
import { education, languages } from "@/data/portfolio";

export default function Education() {
  const { t, lang, pick } = useLanguage();

  return (
    <section id="education" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.education.title}
      </SplitHeading>
      <p className="opacity-70 mb-8">{t.education.subtitle}</p>

      <Reveal stagger className="flex flex-col gap-4">
        <article className="flex gap-4 rounded-xl border border-black/5 dark:border-white/10 p-5">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-black/5 dark:bg-white/10">
            <LuGraduationCap className="h-5 w-5 opacity-70" />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold">{education.school}</h4>
            <p className="text-sm opacity-70">
              {pick(education.degree)} · {pick(education.status)}
            </p>

            <p className="mt-3 text-sm">
              <span className="opacity-60">{t.education.gpa}: </span>
              <span className="font-semibold tabular-nums">{education.gpa}</span>
            </p>

            <p className="mt-3 text-xs opacity-60">{t.education.coursework}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {pick(education.coursework).map((course) => (
                <span
                  key={course}
                  className="rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article className="flex gap-4 rounded-xl border border-black/5 dark:border-white/10 p-5">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-black/5 dark:bg-white/10">
            <LuLanguages className="h-5 w-5 opacity-70" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold">{t.education.languages}</h4>
            <ul className="mt-2 flex flex-col gap-1">
              {languages.map((item, i) => (
                <li key={i} className="flex flex-wrap items-baseline gap-x-2 text-sm">
                  <span>{pick(item.name)}</span>
                  <span className="text-xs opacity-50">— {pick(item.level)}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
