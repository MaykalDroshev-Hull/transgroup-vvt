'use client'

import { Truck, Store, Factory, Coffee, Package, HardHat, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Industrii() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].industries;
  
  const industryIcons = [
    <Truck className="h-12 w-12" />,
    <Store className="h-12 w-12" />,
    <Factory className="h-12 w-12" />,
    <Coffee className="h-12 w-12" />,
    <Package className="h-12 w-12" />,
    <HardHat className="h-12 w-12" />
  ];

  const industryStats = [
    { clients: "15+", deliveries: "5000+", satisfaction: "99%" },
    { clients: "25+", deliveries: "15000+", satisfaction: "97%" },
    { clients: "20+", deliveries: "8000+", satisfaction: "98%" },
    { clients: "30+", deliveries: "25000+", satisfaction: "96%" },
    { clients: "40+", deliveries: "35000+", satisfaction: "95%" },
    { clients: "12+", deliveries: "3000+", satisfaction: "99%" }
  ];

  const industryKeys = ['automotive', 'retail', 'manufacturing', 'fmcg', 'ecommerce', 'construction'] as const;
  const industries = industryKeys.map((key, index) => ({
    ...t.items[key],
    icon: industryIcons[index],
    stats: industryStats[index]
  }));

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main className="min-h-screen">
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

      {/* Industries Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-8">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{industry.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-primary mb-3">{t.services}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{industry.stats.clients}</div>
                      <div className="text-xs text-gray-600">{t.stats.clients}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{industry.stats.deliveries}</div>
                      <div className="text-xs text-gray-600">{t.stats.deliveries}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{industry.stats.satisfaction}</div>
                      <div className="text-xs text-gray-600">{t.stats.satisfaction}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            {t.cta.description}
          </p>
          <a
            href="/zapitvane-oferta"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg inline-block"
          >
            {t.cta.button}
          </a>
        </div>
      </section>
      </main>
      <Footer lang={lang} />
      <FloatingButtons />
      <CookieBanner lang={lang} />
    </>
  );
}
