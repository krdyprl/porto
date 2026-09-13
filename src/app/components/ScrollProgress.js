"use client";
import { useEffect, useRef } from "react";

// Bar progress scroll di atas layar. Pakai listener native (akurat & murah);
// transform-only agar tidak memicu layout.
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const el = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      const p = el.scrollTop / (el.scrollHeight - el.clientHeight || 1);
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 h-0.5 bg-foreground origin-left scale-x-0 z-[60] will-change-transform"
    />
  );
}
