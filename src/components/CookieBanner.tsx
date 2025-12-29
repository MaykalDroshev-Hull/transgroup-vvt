'use client'

import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { translations, Language } from '@/lib/translations';

interface CookieBannerProps {
  lang: Language;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang].cookieBanner;

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full bg-white shadow-2xl border-t border-gray-200 p-4 md:p-6 z-50 transition-transform duration-500",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          <p>
            {t.message}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
