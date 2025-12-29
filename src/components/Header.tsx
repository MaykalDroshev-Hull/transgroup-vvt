'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { translations, Language } from '@/lib/translations';
import { LOCALES, getLocaleInfo } from '@/lib/locales';
import { cn } from '@/utils/cn';
import { Globe, Menu, X } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'services', label: t.services },
    { to: 'fleet', label: t.fleet },
    { to: 'about', label: t.about },
    { to: 'contact', label: t.contact },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        {/* Top Row: Logo, Navigation, Language Switcher */}
        <div className="flex items-center justify-between">
          {/* Small Logo (Top Left) */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img
              src="https://ndcgnswvhpnffvbzqcrn.supabase.co/storage/v1/object/public/VVT%20Transgroup/vvt%20(1).png"
              alt="Trans Group VVT Logo"
              className="h-10 transition-all duration-300" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={cn(
                  'cursor-pointer text-sm font-medium transition-colors hover:text-blue-600',
                  scrolled ? 'text-gray-800' : 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
             <div className="relative group">
              <button className={cn("flex items-center space-x-1.5", scrolled ? "text-gray-800" : "text-white")}>
                  <Globe className="w-5 h-5" />
                  <ReactCountryFlag
                    countryCode={getLocaleInfo(lang).country}
                    svg
                    style={{ width: '1.2em', height: '1.2em', borderRadius: '3px' }}
                    aria-label={getLocaleInfo(lang).name}
                  />
                  <span className="text-sm">
                      {getLocaleInfo(lang).name}
                  </span>
              </button>
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 text-gray-800">
                  {LOCALES.map((locale) => {
                      return (
                        <button
                          key={locale.locale}
                          onClick={() => setLang(locale.locale)}
                          className={cn(
                            "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2",
                            lang === locale.locale ? "font-bold text-blue-600" : ""
                          )}
                        >
                          <ReactCountryFlag
                            countryCode={locale.country}
                            svg
                            style={{ width: '1em', height: '1em', borderRadius: '3px' }}
                            aria-label={locale.name}
                          />
                          <span>
                            {locale.name}
                          </span>
                        </button>
                      );
                    })}
              </div>
             </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
               <X className={cn("w-6 h-6", scrolled ? "text-gray-800" : "text-white")} />
            ) : (
               <Menu className={cn("w-6 h-6", scrolled ? "text-gray-800" : "text-white")} />
            )}
          </button>
        </div>

        {/* Bottom Row: Large Centered Logo (Desktop Only) */}
        <div className="hidden md:flex justify-center mt-3">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img
              src="https://ndcgnswvhpnffvbzqcrn.supabase.co/storage/v1/object/public/VVT%20Transgroup/vvt%20(1).png"
              alt="Trans Group VVT Logo"
              className="h-[7.5rem] transition-all duration-300" 
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-800 font-medium cursor-pointer hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-500 text-sm mb-2">Select Language:</p>
                <div className="flex flex-wrap gap-3">
                    {LOCALES.map((locale) => {
                        return (
                          <button
                            key={locale.locale}
                            onClick={() => {
                              setLang(locale.locale);
                              setMobileMenuOpen(false);
                            }}
                            className={cn(
                              "text-sm font-medium flex items-center space-x-1.5",
                              lang === locale.locale ? "text-blue-600" : "text-gray-600"
                            )}
                          >
                            <ReactCountryFlag
                              countryCode={locale.country}
                              svg
                              style={{ width: '1em', height: '1em', borderRadius: '3px' }}
                              aria-label={locale.name}
                            />
                            <span>
                              {locale.name}
                            </span>
                          </button>
                        );
                      })}
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
