"use client";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { reduced, spring } from "../lib/anim";

// Muncul saat masuk viewport (anime.js). stagger=true -> animasikan anak satu per satu.
export default function Reveal({ children, stagger: useStagger = false, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return; // reduced-motion: biarkan tampil apa adanya

    const nodes = useStagger ? Array.from(el.children) : [el];
    nodes.forEach((n) => (n.style.opacity = "0")); // sembunyikan sebelum reveal

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const params = {
          opacity: [0, 1],
          translateY: [20, 0],
          ease: spring({ stiffness: 110, damping: 15 }),
        };
        if (useStagger) params.delay = stagger(80);
        else params.scale = [0.98, 1];
        animate(useStagger ? el.children : el, params);
        obs.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [useStagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
