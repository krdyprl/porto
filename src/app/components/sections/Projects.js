"use client";
import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import { LuExternalLink } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import { reduced } from "../../lib/anim";
import Reveal from "../Reveal";
import RichText from "../RichText";
import SplitHeading from "../SplitHeading";
import { projects } from "@/data/portfolio";

function ProjectCard({ project }) {
  const { pick, t } = useLanguage();
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  // parallax: gambar bergeser halus mengikuti scroll (gaya ebbscandinavia)
  useEffect(() => {
    if (!project.image || !imgRef.current || reduced()) return;
    animate(imgRef.current, {
      y: ["-8%", "8%"],
      scale: 1.16,
      ease: "linear",
      autoplay: onScroll({
        target: cardRef.current,
        enter: "top bottom",
        leave: "bottom top",
        sync: true,
      }),
    });
  }, [project.image]);

  return (
    <article
      ref={cardRef}
      className="group flex flex-col rounded-xl border border-black/5 dark:border-white/10 overflow-hidden hover:border-black/20 dark:hover:border-white/25 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      {project.image && (
        <div className="aspect-video bg-black/5 dark:bg-white/5 flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline gap-3">
          <span className="text-xs font-semibold tabular-nums opacity-40">
            {project.no}
          </span>
          <h4 className="font-semibold">{project.title}</h4>
        </div>

        <p className="mt-1 text-sm font-medium opacity-80">
          {pick(project.subtitle)}
        </p>

        <p className="mt-3 text-sm leading-relaxed opacity-70">
          <RichText text={pick(project.description)} />
        </p>

        <div className="mt-4 flex flex-wrap items-baseline gap-x-1.5 text-xs">
          <span className="opacity-50">{t.projects.role}:</span>
          <span className="font-medium">{pick(project.role)}</span>
        </div>

        {project.focus?.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-xs opacity-50">{t.projects.focus}:</span>
            {project.focus.map((item) => (
              <span
                key={item}
                className="rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium hover:opacity-60 transition-opacity"
        >
          {t.projects.repo} <LuExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
      >
        {t.projects.title}
      </SplitHeading>
      <p className="opacity-70 mb-10 max-w-2xl">{t.projects.subtitle}</p>

      <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.no} project={p} />
        ))}
      </Reveal>
    </section>
  );
}
