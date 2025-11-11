"use client";
import React, { useEffect, useState } from "react";
import { useI18n } from "../i18n/provider";
import { locales, localeNames, localeFlags, Locale } from "../i18n/config";

const THEME_KEY = "portfolio-theme";

interface SettingsMenuProps {
  menuPosition: "top" | "bottom";
}

export default function SettingsMenu({ menuPosition }: SettingsMenuProps) {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useI18n();

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

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.settings-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div 
      className={`settings-menu-container fixed right-4 z-[100] ${
        menuPosition === "top" ? "top-[1.125rem] sm:top-[1.625rem]" : "bottom-[1.125rem] sm:bottom-[1.625rem]"
      }`}
    >
      {/* Main Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full shadow-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center text-xl relative"
        style={{
          border: '1px solid var(--border-primary)',
          background: 'var(--bg-secondary)',
          color: 'var(--accent-primary)',
          backdropFilter: 'blur(10px)'
        }}
        aria-label="Settings menu"
      >
        <span className="text-2xl">⚙️</span>
        {isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--accent-primary)] rounded-full animate-pulse" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 ${menuPosition === "top" ? "mt-2" : "mb-2 bottom-full"} w-56 rounded-lg shadow-xl overflow-hidden animate-fadeIn`}
          style={{
            border: '1px solid var(--border-primary)',
            background: 'var(--bg-secondary)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Theme Section */}
          <div className="p-3 border-b border-[var(--border-primary)]">
            <div className="text-xs font-semibold mb-2 text-[var(--text-secondary)]">
              THEME
            </div>
            <button
              onClick={toggleTheme}
              className="w-full px-3 py-2 rounded-md transition-all duration-300 hover:bg-[var(--accent-primary)]/10 flex items-center justify-between"
              style={{
                color: 'var(--text-primary)'
              }}
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">{theme === "light" ? "☀️" : "🌙"}</span>
                <span className="text-sm font-medium">
                  {theme === "light" ? "Light Mode" : "Dark Mode"}
                </span>
              </span>
              <span className="text-xs text-[var(--text-secondary)]">
                {theme === "light" ? "🌙" : "☀️"}
              </span>
            </button>
          </div>

          {/* Language Section */}
          <div className="p-3">
            <div className="text-xs font-semibold mb-2 text-[var(--text-secondary)]">
              LANGUAGE
            </div>
            <div className="space-y-1">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLanguageChange(loc)}
                  className={`w-full px-3 py-2 rounded-md text-left transition-all duration-300 hover:bg-[var(--accent-primary)]/10 flex items-center gap-2 ${
                    locale === loc ? 'bg-[var(--accent-primary)]/20 font-bold' : ''
                  }`}
                  style={{
                    color: locale === loc ? 'var(--accent-primary)' : 'var(--text-primary)'
                  }}
                >
                  <span className="text-xl">{localeFlags[loc]}</span>
                  <span className="text-sm">{localeNames[loc]}</span>
                  {locale === loc && (
                    <span className="ml-auto text-[var(--accent-primary)]">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
