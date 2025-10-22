"use client";
import React, { useEffect, useState } from "react";

const THEME_KEY = "portfolio-theme";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved || "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full border border-[#e3e8ee] bg-white text-[#7ba892] shadow-md font-semibold transition-colors duration-300 hover:bg-[#e3e8ee] hover:text-[#6c8cbf]"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}
