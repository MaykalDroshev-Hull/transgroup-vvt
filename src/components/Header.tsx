'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import { translations, Language } from '@/lib/translations';
import { LOCALES, getLocaleInfo } from '@/lib/locales';
import { cn } from '@/utils/cn';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [isNewPage, setIsNewPage] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    // Check if we're on the home page or new pages (only in browser)
    if (typeof window !== 'undefined') {
      setIsHomePage(window.location.pathname === '/');
      setIsNewPage(['/avto-parking', '/galeria', '/industrii', '/karieri', '/sertifikati'].includes(window.location.pathname));

      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.more-dropdown')) {
        setMoreDropdownOpen(false);
      }
    };

    if (moreDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [moreDropdownOpen]);

  const navLinks = [
    { to: 'services', label: t.services },
    { to: 'fleet', label: t.fleet },
    { to: 'about', label: t.about },
    { to: 'contact', label: t.contact },
  ];

  const moreNavLinks = [
    { href: '/avto-parking', label: t.autoParking },
    { href: '/galeria', label: t.gallery },
    { href: '/industrii', label: t.industries },
    { href: '/karieri', label: t.careers },
    { href: '/sertifikati', label: t.certificates },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : isHomePage ? 'bg-transparent py-4' : 'bg-white shadow-md py-2'
      )}
    >
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className={cn(
        "container mx-auto px-4 transition-all duration-300",
        mobileMenuOpen ? "md:translate-x-0 md:ml-0 ml-16" : ""
      )}>
        {/* Top Row: Logo, Navigation, Language Switcher */}
        <div className="flex items-center justify-between">
          {/* Small Logo (Top Left) */}
          <div className="flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
             <img
              src="/images/logo.png"
              alt="Trans Group VVT Logo"
              className="h-10 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (isHomePage) {
                // On homepage: use react-scroll for smooth scrolling
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={cn(
                      'cursor-pointer text-sm font-medium transition-colors hover:text-blue-600',
                      scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              } else {
                // Not on homepage: navigate to homepage with hash
                return (
                  <NextLink
                    key={link.to}
                    href={`/#${link.to}`}
                    className={cn(
                      'cursor-pointer text-sm font-medium transition-colors hover:text-blue-600',
                      scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
                    )}
                  >
                    {link.label}
                  </NextLink>
                );
              }
            })}

            {/* More Dropdown */}
            <div className="relative more-dropdown">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={cn(
                  'flex items-center space-x-1 cursor-pointer text-sm font-medium transition-colors hover:text-blue-600',
                  scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
                )}
              >
                <span>{t.more}</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  moreDropdownOpen ? "rotate-180" : ""
                )} />
              </button>

              {/* Dropdown Menu */}
              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {moreNavLinks.map((link) => (
                    <NextLink
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      onClick={() => setMoreDropdownOpen(false)}
                    >
                      {link.label}
                    </NextLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
             <div className="relative group">
              <button className={cn("flex items-center space-x-1.5", scrolled || !isHomePage ? "text-gray-800" : "text-white")}>
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
               <X className={cn("w-6 h-6", scrolled || !isHomePage ? "text-gray-800" : "text-white")} />
            ) : (
               <Menu className={cn("w-6 h-6", scrolled || !isHomePage ? "text-gray-800" : "text-white")} />
            )}
          </button>
        </div>

        {/* Bottom Row: Large Centered Logo (Desktop Only) - Hidden on new pages */}
        {!isNewPage && (
          <div className="hidden md:flex justify-center mt-3">
            <div className="flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
               <img
                src="/images/logo.png"
                alt="Trans Group VVT Logo"
                className="h-[7.5rem] transition-all duration-300"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      <div className={cn(
        "md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">{t.menu}</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              {/* Navigation Links */}
              <nav className="space-y-4">
                {navLinks.map((link) => {
                  if (isHomePage) {
                    // On homepage: use react-scroll for smooth scrolling
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="block text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  } else {
                    // Not on homepage: navigate to homepage with hash
                    return (
                      <NextLink
                        key={link.to}
                        href={`/#${link.to}`}
                        className="block text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </NextLink>
                    );
                  }
                })}

                {/* More Links */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-500 text-sm mb-3 font-medium">{t.more}:</p>
                  <div className="space-y-2">
                    {moreNavLinks.map((link) => (
                      <NextLink
                        key={link.href}
                        href={link.href}
                        className="block text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </NextLink>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Language Selection */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-500 text-sm mb-4 font-medium">{t.selectLanguage}</p>
                <div className="space-y-2">
                  {LOCALES.map((locale) => (
                    <button
                      key={locale.locale}
                      onClick={() => {
                        setLang(locale.locale);
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "flex items-center space-x-2 p-3 rounded-lg border transition-colors w-full",
                        lang === locale.locale
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                      )}
                    >
                      <ReactCountryFlag
                        countryCode={locale.country}
                        svg
                        style={{ width: '1.2em', height: '1.2em', borderRadius: '3px' }}
                        aria-label={locale.name}
                      />
                      <span className="text-sm font-medium">
                        {locale.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
