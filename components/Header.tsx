"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const primaryNavigation = [
  { name: "Начало", href: "/" },
  { name: "Услуги", href: "/uslugi" },
  { name: "Нашите камиони", href: "/nashite-kamioni" },
  { name: "Запитване за оферта", href: "/zapitvane-oferta" },
];

const moreNavigation = [
  { name: "Индустрии", href: "/industrii" },
  { name: "Сертификати", href: "/sertifikati" },
  { name: "Галерия", href: "/galeria" },
  { name: "Кариери", href: "/karieri" },
  { name: "Авто паркинг", href: "/avto-parking" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [language, setLanguage] = useState("bg");

  return (
    <header className="bg-white shadow-sm border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              TransGroup VVT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {primaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors duration-200"
              >
                <span>Още</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isMoreOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsMoreOpen(false)}
                  />

                  {/* Dropdown Content */}
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-border z-20">
                    <div className="py-2">
                      {moreNavigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-text-secondary hover:bg-section-bg hover:text-primary transition-colors"
                          onClick={() => setIsMoreOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage("bg")}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  language === "bg"
                    ? "bg-white text-primary shadow-sm"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                BG
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  language === "en"
                    ? "bg-white text-primary shadow-sm"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-text-secondary hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-primary">Меню</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="px-4 py-6 space-y-6">
                {/* Primary Navigation Items */}
                <div>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                    Основни
                  </h3>
                  <div className="space-y-2">
                    {primaryNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-3 text-base text-text-secondary hover:text-primary hover:bg-section-bg rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Separator */}
                <div className="border-t border-border"></div>

                {/* More Navigation Items */}
                <div>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                    Още услуги
                  </h3>
                  <div className="space-y-2">
                    {moreNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-3 text-base text-text-secondary hover:text-primary hover:bg-section-bg rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Language Switcher in Drawer */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                    Език
                  </h3>
                  <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
                    <button
                      onClick={() => setLanguage("bg")}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        language === "bg"
                          ? "bg-white text-primary shadow-sm"
                          : "text-text-secondary hover:text-primary"
                      }`}
                    >
                      BG
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        language === "en"
                          ? "bg-white text-primary shadow-sm"
                          : "text-text-secondary hover:text-primary"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
