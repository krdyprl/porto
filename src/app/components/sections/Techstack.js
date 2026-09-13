"use client";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiTypescript,
  SiPostgresql,
  SiJavascript,
  SiBootstrap,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { LuCode } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import SplitHeading from "../SplitHeading";
import { techstack } from "@/data/portfolio";

// peta key (di portfolio.js) -> icon. Tambah di sini kalau pakai tech baru.
const ICONS = {
  next: SiNextdotjs,
  react: SiReact,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  express: SiExpress,
  laravel: SiLaravel,
  typescript: SiTypescript,
  javascript: SiJavascript,
  postgres: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  bootstrap: SiBootstrap,
};

function Pill({ tech }) {
  const Icon = ICONS[tech.key] || LuCode;
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/5 dark:border-white/10 bg-background px-4 py-2 text-sm">
      <Icon className="w-5 h-5 shrink-0" />
      {tech.name}
    </span>
  );
}

// Satu baris marquee: isi digandakan 2x agar loop mulus, berhenti saat hover.
function MarqueeRow({ items, reverse }) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-3 pr-3 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((tech, i) => (
          <Pill key={`${tech.key}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function Techstack() {
  const { t, lang } = useLanguage();
  const half = Math.ceil(techstack.length / 2);
  const row1 = techstack.slice(0, half);
  const row2 = techstack.slice(half);

  return (
    <section id="stack" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.stack.title}
      </SplitHeading>
      <p className="opacity-70 mb-8">{t.stack.subtitle}</p>
      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2.length ? row2 : row1} reverse />
      </div>
    </section>
  );
}
