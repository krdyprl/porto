"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import {
  LuHouse,
  LuUser,
  LuCode,
  LuBriefcase,
  LuFolder,
  LuTrophy,
  LuGraduationCap,
  LuSend,
  LuMenu,
  LuX,
  LuChevronRight,
} from "react-icons/lu";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import ScrambleText from "./ScrambleText";
import { useLanguage } from "../i18n/LanguageProvider";
import { useLoaded } from "./LoaderProvider";
import { reduced, spring } from "../lib/anim";
import { profile } from "@/data/portfolio";

const NAV = [
  { id: "home", icon: LuHouse, key: "home" },
  { id: "about", icon: LuUser, key: "about" },
  { id: "build", icon: LuCode, key: "build" },
  { id: "experience", icon: LuBriefcase, key: "experience" },
  { id: "projects", icon: LuFolder, key: "projects" },
  { id: "achievements", icon: LuTrophy, key: "achievements" },
  { id: "education", icon: LuGraduationCap, key: "education" },
  { id: "contact", icon: LuSend, key: "contact" },
];

export default function Navbar() {
  const { t, pick } = useLanguage();
  const loaded = useLoaded();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const asideRef = useRef(null);

  // scroll-spy: sorot menu sesuai section yang sedang terlihat
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // entrance: brand + tiap item nav meluncur dari kiri saat preloader selesai
  useEffect(() => {
    if (!loaded || reduced() || !asideRef.current) return;
    const targets = asideRef.current.querySelectorAll("[data-stagger]");
    animate(targets, {
      opacity: [0, 1],
      translateX: [-18, 0],
      delay: stagger(70, { start: 150 }),
      ease: spring({ stiffness: 120, damping: 16 }),
    });
  }, [loaded]);

  const Brand = (
    <Link
      href="#home"
      onClick={() => setOpen(false)}
      className="flex items-center gap-3"
    >
      <div className="w-12 h-12 rounded-xl bg-foreground text-background grid place-items-center font-bold text-xl shrink-0">
        {profile.brand.charAt(0)}
      </div>
      <div className="min-w-0">
        <p className="text-xs opacity-60">{pick(profile.greeting)}</p>
        <p className="font-bold text-lg leading-tight truncate">{profile.name}</p>
        <p className="text-xs opacity-60 truncate">
          a <ScrambleText words={pick(profile.roles) ?? [pick(profile.role)]} />
          <span className="animate-blink font-normal">|</span>
        </p>
      </div>
    </Link>
  );

  const NavList = (
    <ul className="flex flex-col gap-1">
      {NAV.map(({ id, icon: Icon, key }) => {
        const isActive = active === id;
        return (
          <li key={id} data-stagger>
            <Link
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all hover:translate-x-0.5 ${
                isActive
                  ? "border border-black/10 dark:border-white/15 shadow-sm font-medium"
                  : "hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="flex-1">{t.nav[key]}</span>
              {isActive && <LuChevronRight className="w-4 h-4 opacity-50" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 flex items-center justify-between px-6 h-16 backdrop-blur-md bg-background/70 border-b border-black/5 dark:border-white/10">
        <span className="font-bold truncate">{profile.name}</span>
        <div className="flex items-center gap-1">
          <LangToggle />
          <ThemeToggle />
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-2">
            <LuMenu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Desktop sidebar */}
      <aside
        ref={asideRef}
        className="hidden md:flex flex-col gap-8 w-72 shrink-0 py-10 sticky top-0 h-screen overflow-y-auto"
      >
        <div className="flex items-start justify-between gap-2" data-stagger>
          {Brand}
          <ThemeToggle />
        </div>
        {NavList}
        <div className="mt-auto" data-stagger>
          <LangToggle />
        </div>
      </aside>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed inset-0 z-50 ${open ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-background p-6 flex flex-col gap-8 shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            {Brand}
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <LuX className="w-5 h-5" />
            </button>
          </div>
          {NavList}
        </div>
      </div>
    </>
  );
}
