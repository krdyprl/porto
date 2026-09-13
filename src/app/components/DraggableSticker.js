"use client";
import { useEffect, useRef } from "react";
import { createDraggable } from "animejs";
import { reduced, spring } from "../lib/anim";

// Elemen yang bisa digeser pakai mouse/sentuh, lalu memantul kembali ke area induk.
export default function DraggableSticker({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || reduced()) return;
    const d = createDraggable(ref.current, {
      container: ref.current.parentElement,
      releaseEase: spring({ stiffness: 160, damping: 18 }),
    });
    return () => d?.revert?.();
  }, []);

  return (
    <div
      ref={ref}
      className={`cursor-grab active:cursor-grabbing select-none touch-none ${className}`}
    >
      {children}
    </div>
  );
}
