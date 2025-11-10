"use client";
import React, { useEffect, useState } from "react";

const THEME_KEY = "portfolio-theme";

interface ThemeSwitcherProps {
  menuPosition: "top" | "bottom";
}

export default function ThemeSwitcher({ menuPosition }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const saved = localStorage.getItem(THEME_KEY);
    let initialTheme: string;
    
    if (saved) {
      initialTheme = saved;
    } else {
      // Detect system theme preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initialTheme = prefersDark ? "dark" : "light";
    }
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    
    // Add transition class after initial render
    document.documentElement.style.transition = "background 0.5s ease, color 0.5s ease";
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
      className={`fixed right-4 z-[100] w-12 h-12 rounded-full shadow-lg font-semibold transition-all duration-500 hover:scale-105 flex items-center justify-center text-xl
        ${menuPosition === "top" ? "top-[1.125rem] sm:top-[1.625rem]" : "bottom-[1.125rem] sm:bottom-[1.625rem]"}
      `}
      style={{
        border: '1px solid var(--border-primary)',
        background: 'var(--bg-secondary)',
        color: 'var(--accent-primary)',
        backdropFilter: 'blur(10px)'
      }}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
