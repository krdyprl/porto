// Helper kecil bersama untuk animasi (anime.js v4).
import { createSpring } from "animejs";

export const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// easing spring default — gerakan "mantul" halus
export const spring = (o = {}) =>
  createSpring({ stiffness: 130, damping: 16, ...o });

export const EASE = "outCubic";
export const DUR = 600;
