"use client";
import { useLanguage } from "../../i18n/LanguageProvider";
import Reveal from "../Reveal";
import SplitHeading from "../SplitHeading";
import Techstack from "./Techstack";
import { whatIBuild } from "@/data/portfolio";

export default function WhatIBuild() {
  const { t, lang, pick } = useLanguage();

  return (
    <section id="build" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.build.title}
      </SplitHeading>
      <p className="opacity-70 mb-8">{t.build.subtitle}</p>

      <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {whatIBuild.map((group) => (
          <div
            key={pick(group.title)}
            className="rounded-xl border border-black/5 dark:border-white/10 p-5 hover:border-black/20 dark:hover:border-white/25 transition-colors"
          >
            <h4 className="font-semibold">{pick(group.title)}</h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>

      <Techstack />
    </section>
  );
}
