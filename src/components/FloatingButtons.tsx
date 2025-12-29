'use client'

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { cn } from '@/utils/cn';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all transform duration-300",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* WhatsApp / Viber */}
      <a
        href="https://wa.me/359876535379"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
        title="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;

