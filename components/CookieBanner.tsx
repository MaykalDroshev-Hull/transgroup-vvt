"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookies-accepted");
    if (!hasAccepted) {
      // Use setTimeout to avoid synchronous state update in effect
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Този сайт използва бисквитки за подобряване на потребителското изживяване.
            Продължавайки да използвате сайта, вие се съгласявате с използването на бисквитки.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={acceptCookies}
            className="bg-accent hover:bg-accent/90 text-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Приемам
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white px-4 py-2 text-sm transition-colors"
          >
            Отказвам
          </button>
        </div>
      </div>
    </div>
  );
}
