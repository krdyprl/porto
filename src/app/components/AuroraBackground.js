"use client";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { reduced } from "../lib/anim";

// Background blob yang bergerak (CSS) + warna berganti acak halus (anime.js).
// Hue dianimasikan sebagai angka lalu diformat ke hsla → transisi warna mulus.
const rand = (min, max) => min + Math.random() * (max - min);

export default function AuroraBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;

    const state = { h1: rand(0, 360), h2: rand(0, 360) };
    let stopped = false;

    const paint = () => {
      el.style.setProperty("--aurora-1", `hsla(${state.h1}, 70%, 60%, 0.18)`);
      el.style.setProperty("--aurora-2", `hsla(${state.h2}, 70%, 55%, 0.18)`);
    };
    paint();

    const cycle = () => {
      if (stopped || !ref.current) return;
      animate(state, {
        // putar hue ke target acak; offset besar agar warna terasa berubah
        h1: state.h1 + rand(60, 300),
        h2: state.h2 + rand(60, 300),
        duration: 6000,
        ease: "inOutSine",
        onUpdate: paint,
        onComplete: cycle,
      });
    };
    cycle();

    return () => {
      stopped = true;
    };
  }, []);

  return <div ref={ref} className="bg-aurora" aria-hidden="true" />;
}
