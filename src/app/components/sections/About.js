"use client";
import { useLanguage } from "../../i18n/LanguageProvider";
import SplitHeading from "../SplitHeading";
import { about } from "@/data/portfolio";

export default function About() {
  const { t, lang } = useLanguage();
  return (
    <section id="about" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
      >
        {t.about.title}
      </SplitHeading>
      <div className="space-y-4 max-w-2xl">
        {about.paragraphs[lang].map((p, i) => (
          <p key={i} className="opacity-80 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
