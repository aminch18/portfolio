"use client";
import React from "react";
import { useI18n } from "../i18n/provider";
import { locales, localeNames, localeFlags, Locale } from "../i18n/config";

interface LanguageSwitcherProps {
  menuPosition: "top" | "bottom";
}

export default function LanguageSwitcher({ menuPosition }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className={`fixed left-4 z-[100] ${
      menuPosition === "top" ? "top-[1.125rem] sm:top-[1.625rem]" : "bottom-[1.125rem] sm:bottom-[1.625rem]"
    }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full shadow-lg font-semibold transition-all duration-500 hover:scale-105 flex items-center justify-center text-xl"
        style={{
          border: '1px solid var(--border-primary)',
          background: 'var(--bg-secondary)',
          color: 'var(--accent-primary)',
          backdropFilter: 'blur(10px)'
        }}
        aria-label="Change language"
      >
        {localeFlags[locale]}
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 rounded-lg shadow-xl overflow-hidden"
          style={{
            border: '1px solid var(--border-primary)',
            background: 'var(--bg-secondary)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`w-full px-4 py-2 text-left transition-all duration-300 hover:bg-[var(--accent-primary)]/10 flex items-center gap-2 ${
                locale === loc ? 'bg-[var(--accent-primary)]/20 font-bold' : ''
              }`}
              style={{
                color: locale === loc ? 'var(--accent-primary)' : 'var(--text-primary)'
              }}
            >
              <span className="text-xl">{localeFlags[loc]}</span>
              <span className="text-sm whitespace-nowrap">{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
