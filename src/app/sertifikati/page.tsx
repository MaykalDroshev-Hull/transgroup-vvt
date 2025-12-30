'use client'

import { FileText, Check, Truck, Users, BarChart, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { Language } from "@/lib/translations";
import { useState } from "react";

export default function Sertifikati() {
  const [lang, setLang] = useState<Language>('bg');
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Система за управление на качеството",
      issuer: "International Organization for Standardization",
      validUntil: "2027",
      scope: "Логистични и транспортни услуги"
    },
    {
      name: "ISO 14001:2015",
      description: "Система за управление на околната среда",
      issuer: "International Organization for Standardization",
      validUntil: "2027",
      scope: "Транспортни и складови дейности"
    },
    {
      name: "ISO 45001:2018",
      description: "Система за управление на здравето и безопасността",
      issuer: "International Organization for Standardization",
      validUntil: "2027",
      scope: "Всички дейности на компанията"
    },
    {
      name: "ADR 2023",
      description: "Сертификат за транспорт на опасни товари",
      issuer: "Министерство на транспорта",
      validUntil: "2025",
      scope: "Транспорт на опасни материали клас 1-9"
    },
    {
      name: "TPC сертификат",
      description: "Транспорт на хранителни продукти",
      issuer: "Министерство на земеделието",
      validUntil: "2026",
      scope: "Транспорт на хранителни стоки"
    },
    {
      name: "AEO Certificate",
      description: "Authorised Economic Operator",
      issuer: "Митническа агенция",
      validUntil: "2028",
      scope: "Международна търговия и митнически процедури"
    }
  ];

  const licenses = [
    {
      name: "Лиценз за обществен превоз на товари",
      number: "Л-12345/2023",
      issuer: "Изпълнителна агенция \"Автомобилна администрация\"",
      validUntil: "2028"
    },
    {
      name: "Лиценз за международен транспорт",
      number: "МТ-67890/2023",
      issuer: "Министерство на транспорта",
      validUntil: "2027"
    },
    {
      name: "Лиценз за спедиция",
      number: "СП-11111/2023",
      issuer: "Министерство на транспорта",
      validUntil: "2027"
    }
  ];

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Сертификати</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Нашата дейност е сертифицирана по международни стандарти за качество и безопасност
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Международни сертификати
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Гарантираме най-високи стандарти на качество, безопасност и екологичност
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-border">
                <Trophy className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{cert.name}</h3>
                <p className="text-text-secondary mb-3">{cert.description}</p>
                <div className="space-y-1 text-sm">
                  <p><strong className="text-primary">Издател:</strong> {cert.issuer}</p>
                  <p><strong className="text-primary">Валиден до:</strong> {cert.validUntil}</p>
                  <p><strong className="text-primary">Обхват:</strong> {cert.scope}</p>
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
              Лицензи и разрешения
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Всички необходими лицензи за извършване на транспортна дейност
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <FileText className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-bold text-primary mb-3">{license.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-primary">Номер:</strong> {license.number}</p>
                  <p><strong className="text-primary">Издател:</strong> {license.issuer}</p>
                  <p><strong className="text-primary">Валиден до:</strong> {license.validUntil}</p>
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
                Качество и безопасност
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Регулярни одити</h3>
                    <p className="text-text-secondary">Провеждаме вътрешни и външни одити за поддържане на стандартите</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Технически прегледи</h3>
                    <p className="text-text-secondary">Всички превозни средства преминават през ежедневни и периодични прегледи</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Обучение на персонала</h3>
                    <p className="text-text-secondary">Регулярни обучения по безопасност, качество и екологични стандарти</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Мониторинг на показатели</h3>
                    <p className="text-text-secondary">Непрекъснато следим KPI показатели за качество на услугите</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-section-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Нашите резултати</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">99.8%</div>
                  <p className="text-text-secondary">Навременни доставки</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">0.02%</div>
                  <p className="text-text-secondary">Инциденти</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <p className="text-text-secondary">Сертифицирани шофьори</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">ISO</div>
                  <p className="text-text-secondary">Сертифицирана компания</p>
                </div>
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
