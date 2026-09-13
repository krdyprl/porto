"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Preloader from "./Preloader";
import { reduced } from "../lib/anim";

const LoaderContext = createContext(false);

export function LoaderProvider({ children }) {
  const [loaded, setLoaded] = useState(false);

  // reduced-motion: lewati preloader sepenuhnya
  useEffect(() => {
    if (reduced()) setLoaded(true);
  }, []);

  return (
    <LoaderContext.Provider value={loaded}>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      {children}
    </LoaderContext.Provider>
  );
}

// true ketika preloader selesai & curtain sudah naik
export const useLoaded = () => useContext(LoaderContext);
