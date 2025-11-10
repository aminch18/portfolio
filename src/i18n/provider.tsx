"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, defaultLocale, locales } from './config';

type Messages = Record<string, any>;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: Messages;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'portfolio-locale';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Messages>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load saved locale or detect browser language
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale;
    const browserLang = navigator.language.split('-')[0];
    const initial = saved || (locales.includes(browserLang as Locale) ? browserLang as Locale : defaultLocale);
    
    loadMessages(initial);
  }, []);

  const loadMessages = async (newLocale: Locale) => {
    try {
      const msgs = await import(`./messages/${newLocale}.json`);
      setMessages(msgs.default);
      setLocaleState(newLocale);
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
      setIsLoading(false);
    } catch (error) {
      console.error(`Failed to load messages for locale: ${newLocale}`, error);
      setIsLoading(false);
    }
  };

  const setLocale = (newLocale: Locale) => {
    loadMessages(newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
