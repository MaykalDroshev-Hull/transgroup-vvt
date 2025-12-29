'use client'

import React from 'react';
import { Link } from 'react-scroll';
import { translations, Language } from '@/lib/translations';
import { LOCALES, getLocaleInfo } from '@/lib/locales';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import ReactCountryFlag from 'react-country-flag';

interface HeroProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Hero: React.FC<HeroProps> = ({ lang, setLang }) => {
  const t = translations[lang].hero;

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" style={{ pointerEvents: 'auto' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: 'url("https://www.sp-logistik.eu/files/content/atf-bg.jpg")' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20 relative">
        <div className="max-w-4xl text-white relative z-20">
          {/* Language Switcher (Hero Level) */}
          <div className="mb-6 flex flex-wrap gap-4" style={{ position: 'relative', zIndex: 100 }}>
             {LOCALES.map((locale) => {
                const active = lang === locale.locale;
                return (
                  <button
                    key={locale.locale}
                    onClick={() => {
                      console.log('Click handler fired for:', locale.locale);
                      setLang(locale.locale);
                    }}
                    onMouseDown={(e) => {
                      console.log('MouseDown fired for:', locale.locale);
                    }}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border transition cursor-pointer",
                      active
                        ? "bg-white/20 border-white text-white font-bold shadow-lg scale-105"
                        : "bg-black/20 border-transparent text-gray-300 hover:bg-white/10"
                    )}
                    aria-pressed={active}
                    type="button"
                    style={{ position: 'relative', zIndex: 101, pointerEvents: 'auto' }}
                  >
                    <ReactCountryFlag
                      countryCode={locale.country}
                      svg
                      style={{ width: '1.1em', height: '1.1em', borderRadius: '3px', pointerEvents: 'none' }}
                      aria-label={locale.label}
                    />
                    <span className="font-medium tracking-wide" style={{ pointerEvents: 'none' }}>{locale.label}</span>
                  </button>
                );
              })}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.headline}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl font-light">
            {t.subheadline}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {t.bullets.map((bullet, index) => (
              <div key={index} className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm md:text-base font-medium">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold text-lg transition-all transform hover:scale-105 cursor-pointer text-center"
            >
              {t.ctaPrimary}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-md font-bold text-lg transition-all cursor-pointer text-center flex items-center justify-center gap-2"
            >
              {t.ctaSecondary}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
