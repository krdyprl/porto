"use client";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { LuArrowDownToLine, LuMapPin } from "react-icons/lu";
import { useLanguage } from "../../i18n/LanguageProvider";
import { useLoaded } from "../LoaderProvider";
import { reduced, spring } from "../../lib/anim";
import DraggableSticker from "../DraggableSticker";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const { pick, t } = useLanguage();
  const loaded = useLoaded();
  const ref = useRef(null);

  // entrance: tiap baris hero naik berurutan setelah preloader selesai
  useEffect(() => {
    if (!loaded || reduced() || !ref.current) return;
    animate(ref.current.children, {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: stagger(85, { start: 100 }),
      ease: spring({ stiffness: 120, damping: 15 }),
    });
  }, [loaded]);

  return (
    <section ref={ref} id="home" className="relative wrapper pt-20 pb-16 scroll-mt-16">
      <DraggableSticker className="absolute right-2 top-6 sm:right-6 rotate-6 rounded-2xl border border-black/10 dark:border-white/15 bg-background px-3 py-2 text-xs font-medium shadow-md">
        ✦ drag me
      </DraggableSticker>
      <p className="text-sm opacity-70 mb-4">{pick(profile.greeting)}</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-4 text-lg opacity-80">{pick(profile.role)}</p>
      <p className="mt-3 max-w-xl opacity-70">{pick(profile.tagline)}</p>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
        <span className="inline-flex items-center gap-1.5 opacity-70">
          <LuMapPin className="w-4 h-4" /> {pick(profile.location)}
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              profile.openToWork ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {profile.openToWork ? pick(profile.availability) : pick(profile.notAvailable)}
        </span>
      </div>

      <a
        href={profile.cvUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-foreground text-background hover:opacity-90 hover:scale-[1.03] transition-all"
      >
        <LuArrowDownToLine className="w-4 h-4" />
        {t.hero.downloadCv}
      </a>
    </section>
  );
}
