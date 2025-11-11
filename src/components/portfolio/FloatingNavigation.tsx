"use client";
import React, { useEffect, useState } from "react";
import { useI18n } from "../../i18n/provider";
import { locales, localeNames, localeFlags, Locale } from "../../i18n/config";

const THEME_KEY = "portfolio-theme";

interface FloatingNavigationProps {
  menuPosition: "top" | "bottom";
  activeSection: string;
}

export function FloatingNavigation({ menuPosition, activeSection }: FloatingNavigationProps) {
  const { t, locale, setLocale } = useI18n();
  const [theme, setTheme] = useState("light");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const navItems = [
    { id: "home", label: t('common.portfolio') },
    { id: "journey", label: t('nav.journey') },
    { id: "education", label: t('nav.education') },
    { id: "projects", label: t('nav.projects') },
  ];

  useEffect(() => {
    // Check for saved theme preference or default to dark theme
    const saved = localStorage.getItem(THEME_KEY);
    let initialTheme: string;
    
    if (saved) {
      initialTheme = saved;
    } else {
      // Default to dark theme
      initialTheme = "dark";
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
    setIsSettingsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isSettingsOpen && !target.closest('.settings-dropdown-container')) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSettingsOpen]);

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4 md:gap-6 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl transition-all duration-500
        ${menuPosition === "top" ? "top-4 sm:top-6" : "bottom-4 sm:bottom-6"}
      `}
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-primary)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Navigation Links */}
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full transition-all duration-300 whitespace-nowrap ${
            activeSection === item.id
              ? "bg-[var(--bg-secondary)] text-[var(--accent-primary)] shadow-md"
              : "text-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
          }`}
        >
          {item.label}
        </a>
      ))}

      {/* Divider */}
      <div 
        className="hidden sm:block w-px h-6 mx-2"
        style={{ background: 'var(--border-primary)' }}
      />

      {/* Settings Dropdown */}
      <div className="settings-dropdown-container relative">
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className="font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 rounded-full transition-all duration-300 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 flex items-center gap-1 sm:gap-2"
          aria-label="Settings"
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ transition: 'transform 0.3s ease' }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
          <span className="hidden md:inline">Settings</span>
        </button>

        {/* Dropdown Menu */}
        {isSettingsOpen && (
          <div
            className={`absolute right-0 ${menuPosition === "top" ? "mt-2" : "mb-2 bottom-full"} w-44 rounded-lg shadow-xl overflow-hidden animate-fadeIn`}
            style={{
              border: '1px solid var(--border-primary)',
              background: 'var(--bg-secondary)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Theme Toggle - Compact */}
            <button
              onClick={toggleTheme}
              className="w-full px-3 py-2.5 transition-all duration-300 hover:bg-[var(--accent-primary)]/10 flex items-center justify-between border-b border-[var(--border-primary)]"
              style={{
                color: 'var(--text-primary)'
              }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{theme === "light" ? "☀️" : "🌙"}</span>
                <span className="text-sm font-medium">
                  {theme === "light" ? "Light" : "Dark"}
                </span>
              </span>
            </button>

            {/* Language Options - Compact */}
            <div className="py-1">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLanguageChange(loc)}
                  className={`w-full px-3 py-2 text-left transition-all duration-300 hover:bg-[var(--accent-primary)]/10 flex items-center gap-2 ${
                    locale === loc ? 'bg-[var(--accent-primary)]/15' : ''
                  }`}
                  style={{
                    color: locale === loc ? 'var(--accent-primary)' : 'var(--text-primary)'
                  }}
                >
                  <span className="text-base">{localeFlags[loc]}</span>
                  <span className="text-sm">{localeNames[loc]}</span>
                  {locale === loc && (
                    <span className="ml-auto text-[var(--accent-primary)] text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
