"use client";
import { useEffect, useRef } from "react";
import { animate, scrambleText } from "animejs";
import { reduced } from "../lib/anim";

// Teks yang diacak lalu mengunci ke kata final, bergiliran (anime.js scrambleText).
export default function ScrambleText({ words, className = "", holdMs = 1600 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !words?.length) return;
    if (reduced()) {
      el.textContent = words[0];
      return;
    }

    let i = 0;
    let stopped = false;
    let timer;

    const run = () => {
      if (stopped || !ref.current) return;
      animate(ref.current, {
        innerHTML: scrambleText({ text: words[i % words.length] }),
        duration: 1200,
        onComplete: () => {
          i += 1;
          timer = setTimeout(run, holdMs);
        },
      });
    };
    run();

    return () => {
      stopped = true;
      clearTimeout(timer);
    };
  }, [words, holdMs]);

  return <span ref={ref} className={className} />;
}
