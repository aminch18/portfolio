"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, defaultLocale, locales } from './config';
import en from './messages/en.json';
import es from './messages/es.json';
import ca from './messages/ca.json';

type Messages = Record<string, unknown>;
interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: Messages;
}
const I18nContext = createContext<I18nContextType | undefined>(undefined);
const LOCALE_STORAGE_KEY = 'portfolio-locale';
const dictionaries: Record<Locale, Messages> = { en, es, ca };

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Render the default language on the server too, then restore the visitor's preference.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(LOCALE_STORAGE_KEY); } catch {}
    const browserLanguage = navigator.language.split('-')[0] as Locale;
    const initial = saved && locales.includes(saved as Locale)
      ? saved as Locale
      : locales.includes(browserLanguage) ? browserLanguage : defaultLocale;
    setLocaleState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try { localStorage.setItem(LOCALE_STORAGE_KEY, next); } catch {}
  };
  const messages = dictionaries[locale];
  const t = (key: string): string => {
    let value: unknown = messages;
    for (const part of key.split('.')) {
      if (!value || typeof value !== 'object') return key;
      value = (value as Messages)[part];
    }
    return typeof value === 'string' ? value : key;
  };
  return <I18nContext.Provider value={{ locale, setLocale, t, messages }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
