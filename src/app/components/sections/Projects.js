"use client";
import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import { LuExternalLink, LuImage } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import { reduced } from "../../lib/anim";
import Reveal from "../Reveal";
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
    <div
      ref={cardRef}
      className="group rounded-xl border border-black/5 dark:border-white/10 overflow-hidden hover:border-black/20 dark:hover:border-white/25 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-video bg-black/5 dark:bg-white/5 flex items-center justify-center overflow-hidden">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <LuImage className="w-10 h-10 opacity-30" />
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{project.title}</h4>
        <p className="mt-1 text-sm opacity-70">{pick(project.description)}</p>
        {project.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs rounded-full px-2 py-0.5 bg-black/5 dark:bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-60 transition-opacity"
        >
          {t.projects.visit} <LuExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const team = projects.filter((p) => p.category === "team");
  const self = projects.filter((p) => p.category === "self");

  return (
    <section id="projects" className="wrapper py-16 scroll-mt-16">
      <SplitHeading
        key={lang}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10"
      >
        {t.projects.title}
      </SplitHeading>

      {team.length > 0 && (
        <div className="mb-12">
          <h3 className="text-lg font-semibold">{t.projects.team}</h3>
          <p className="opacity-70 text-sm mt-1 mb-5">{t.projects.teamSubtitle}</p>
          <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {team.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </Reveal>
        </div>
      )}

      {self.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold">{t.projects.self}</h3>
          <p className="opacity-70 text-sm mt-1 mb-5">{t.projects.selfSubtitle}</p>
          <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {self.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </Reveal>
        </div>
      )}
    </section>
  );
}
