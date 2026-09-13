"use client";
import { useEffect, useRef } from "react";
import { animate, stagger, splitText } from "animejs";
import { reduced, spring } from "../lib/anim";

// Judul yang "naik" dari balik mask saat masuk viewport (gaya ebbscandinavia).
// overflow-hidden mengklip huruf yang masih di bawah baseline.
// Beri key={lang} dari pemanggil agar re-split saat bahasa berganti.
export default function SplitHeading({ children, className = "", as: Tag = "h2" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const { chars } = splitText(el, { chars: true });
        chars.forEach((c) => (c.style.display = "inline-block"));
        animate(chars, {
          y: ["110%", "0%"],
          delay: stagger(18),
          ease: spring({ stiffness: 110, damping: 16 }),
        });
        obs.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`overflow-hidden pb-[0.1em] ${className}`}>
      {children}
    </Tag>
  );
}
