'use client'

import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';

const LANGUAGE_STORAGE_KEY = 'transgroup-vvt-language';

export function useLanguage() {
  const [lang, setLangState] = useState<Language>('bg');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      if (stored && ['bg', 'en-GB', 'pl', 'el'].includes(stored)) {
        setLangState(stored);
      }
      setIsInitialized(true);
    }
  }, []);

  // Update localStorage when language changes
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    }
  };

  return { lang, setLang, isInitialized };
}

