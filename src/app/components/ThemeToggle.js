"use client";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // dark mode di-set lebih awal oleh script anti-flash di layout; sinkronkan state
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    >
      {theme === "dark" ? <LuSun className="w-5 h-5" /> : <LuMoon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
