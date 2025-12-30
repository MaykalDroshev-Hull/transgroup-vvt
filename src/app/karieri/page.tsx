'use client'

import { DollarSign, Hospital, Book, Building, Clock, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Karieri() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].careers;
  
  const benefitIcons = [
    <DollarSign className="h-12 w-12" />,
    <Hospital className="h-12 w-12" />,
    <Book className="h-12 w-12" />,
    <Building className="h-12 w-12" />,
    <Clock className="h-12 w-12" />,
    <Users className="h-12 w-12" />
  ];

  const benefits = t.benefits.items.map((benefit, index) => ({
    ...benefit,
    icon: benefitIcons[index]
  }));

  const positions = t.positions.items;

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

      {/* Why Join Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t.whyJoin.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.whyJoin.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="text-accent mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t.positions.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.positions.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    {t.labels.apply}
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">{t.labels.requirements}</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req: string, reqIndex: number) => (
                        <li key={reqIndex} className="flex items-start text-gray-600">
                          <span className="text-accent mr-2 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">{t.labels.benefits}</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit: string, benefitIndex: number) => (
                        <li key={benefitIndex} className="flex items-start text-gray-600">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t.process.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              {t.cta.text}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg">
              {t.cta.button}
            </button>
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
