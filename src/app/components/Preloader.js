"use client";
import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";
import { reduced } from "../lib/anim";
import { profile } from "@/data/portfolio";

// Matriks Bayer 8x8 untuk ordered dithering (0..63).
const BAYER = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];
const th = (rx, ry) => (BAYER[ry & 7][rx & 7] + 0.5) / 64;

const BIG_CELL = 26; // pixelation kasar di awal/akhir
const SMALL_CELL = 4; // tajam saat nama terbaca penuh
const CURTAIN_CELL = 16; // ukuran blok saat layar larut

export default function Preloader({ onDone }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (reduced()) {
      onDone();
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) {
      onDone();
      return;
    }
    const ctx = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // warna ikut tema (light/dark)
    const cs = getComputedStyle(document.documentElement);
    const bg = cs.getPropertyValue("--background").trim() || "#ffffff";
    const fg = cs.getPropertyValue("--foreground").trim() || "#111111";

    // --- siapkan canvas utama ---
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.scale(dpr, dpr);

    // --- mask teks (alpha) untuk di-sampling ---
    const mask = document.createElement("canvas");
    mask.width = W;
    mask.height = H;
    const mctx = mask.getContext("2d");
    const fontSize = Math.min(W * 0.12, 92);
    mctx.fillStyle = "#fff";
    mctx.textAlign = "center";
    mctx.textBaseline = "middle";
    mctx.font = `700 ${fontSize}px Inter, system-ui, sans-serif`;
    mctx.fillText(profile.name, W / 2, H / 2);
    const textW = mctx.measureText(profile.name).width;
    const maskData = mctx.getImageData(0, 0, W, H).data;

    // bounding box teks (+padding) agar loop sel hanya di area nama
    const pad = fontSize * 0.4;
    const tx0 = Math.max(0, Math.floor(W / 2 - textW / 2 - pad));
    const tx1 = Math.min(W, Math.ceil(W / 2 + textW / 2 + pad));
    const ty0 = Math.max(0, Math.floor(H / 2 - fontSize / 2 - pad));
    const ty1 = Math.min(H, Math.ceil(H / 2 + fontSize / 2 + pad));

    const state = { reveal: 0, cell: BIG_CELL, curtain: 1 };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // 1) Curtain (latar). Solid saat penuh; larut secara dither saat curtain<1.
      ctx.fillStyle = bg;
      if (state.curtain >= 1) {
        ctx.fillRect(0, 0, W, H);
      } else if (state.curtain > 0) {
        const c = CURTAIN_CELL;
        let ry = 0;
        for (let gy = 0; gy < H; gy += c, ry++) {
          let rx = 0;
          for (let gx = 0; gx < W; gx += c, rx++) {
            if (th(rx, ry) < state.curtain) ctx.fillRect(gx, gy, c, c);
          }
        }
      }

      // 2) Teks: muncul dari noise dither (reveal 0->1) + pixelation (cell besar->kecil).
      if (state.reveal > 0) {
        ctx.fillStyle = fg;
        const c = Math.max(2, Math.round(state.cell));
        let ry = 0;
        for (let gy = ty0; gy < ty1; gy += c, ry++) {
          let rx = 0;
          for (let gx = tx0; gx < tx1; gx += c, rx++) {
            const sx = Math.min(W - 1, (gx + c / 2) | 0);
            const sy = Math.min(H - 1, (gy + c / 2) | 0);
            if (maskData[(sy * W + sx) * 4 + 3] < 128) continue; // di luar huruf
            if (th(rx, ry) < state.reveal) ctx.fillRect(gx, gy, c, c);
          }
        }
      }
    };

    draw();

    const tl = createTimeline({ onUpdate: draw, onComplete: onDone });
    // reveal + menajam
    tl.add(state, { reveal: 1, cell: SMALL_CELL, duration: 1000, ease: "outQuad" })
      // tahan, lalu larut: layar dither hilang + nama pecah jadi blok besar
      .add(
        state,
        { curtain: 0, reveal: 0, cell: BIG_CELL, duration: 700, ease: "inQuad" },
        "+=550"
      );

    return () => tl.pause();
  }, [onDone]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={profile.name}
      role="img"
      className="fixed inset-0 z-[100] block"
    />
  );
}
