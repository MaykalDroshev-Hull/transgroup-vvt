'use client'

import { FileText, Check, Truck, Users, BarChart, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Sertifikati() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].certificates;
  
  const certificates = t.certificatesList.items;
  const licenses = t.licensesList.items;
  const qualityItems = t.quality.items;
  const qualityIcons = [
    <Check className="h-5 w-5" />,
    <Truck className="h-5 w-5" />,
    <Users className="h-5 w-5" />,
    <BarChart className="h-5 w-5" />
  ];

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{t.hero.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t.certificates.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.certificates.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-border">
                <Trophy className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-3">{cert.description}</p>
                <div className="space-y-1 text-sm">
                  <p><strong className="text-primary">{t.labels.issuer}</strong> {cert.issuer}</p>
                  <p><strong className="text-primary">{t.labels.validUntil}</strong> {cert.validUntil}</p>
                  <p><strong className="text-primary">{t.labels.scope}</strong> {cert.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t.licenses.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.licenses.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <FileText className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">{license.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-primary">{t.labels.number}</strong> {license.number}</p>
                  <p><strong className="text-primary">{t.labels.issuer}</strong> {license.issuer}</p>
                  <p><strong className="text-primary">{t.labels.validUntil}</strong> {license.validUntil}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t.quality.title}
              </h2>
              <div className="space-y-4">
                {qualityItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-accent mr-3">{qualityIcons[index]}</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-section-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">{t.quality.results.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {t.quality.results.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer lang={lang} />
      <FloatingButtons />
      <CookieBanner lang={lang} />
    </>
  );
}
