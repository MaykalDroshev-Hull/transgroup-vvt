'use client'

import React from 'react';
import { Link } from 'react-scroll';
import { translations, Language } from '@/lib/translations';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
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
