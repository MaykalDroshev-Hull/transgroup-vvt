'use client'

import { Truck, Factory, Package, Users, Camera, Building, Shield, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Galeria() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].gallery;
  const galleryItems = [
    { type: "truck", title: "Mercedes-Benz Actros", description: "Тежкотоварен камион за международни превози" },
    { type: "warehouse", title: "Съвременен склад", description: "Автоматизирано складиране с контрол на температурата" },
    { type: "loading", title: "Товарене на контейнери", description: "Ефективни логистични операции на терминала" },
    { type: "team", title: "Нашият екип", description: "Професионалисти с години опит в логистиката" },
    { type: "delivery", title: "Доставка до клиент", description: "Последна миля доставка в градски условия" },
    { type: "fleet", title: "Нашият автопарк", description: "Модерни превозни средства в базата ни" },
    { type: "office", title: "Офис и контролна зала", description: "Мониторинг на всички транспортни операции" },
    { type: "safety", title: "Обучение по безопасност", description: "Регулярни обучения за безопасна работа" },
    { type: "international", title: "Международен транспорт", description: "Камиони на път към Европа" }
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

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow">
                {/* Placeholder for images - in real app these would be actual images */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {item.type === 'truck' && <Truck className="h-16 w-16" />}
                    {item.type === 'warehouse' && <Factory className="h-16 w-16" />}
                    {item.type === 'loading' && <Package className="h-16 w-16" />}
                    {item.type === 'team' && <Users className="h-16 w-16" />}
                    {item.type === 'delivery' && <Truck className="h-16 w-16" />}
                    {item.type === 'fleet' && <Truck className="h-16 w-16" />}
                    {item.type === 'office' && <Building className="h-16 w-16" />}
                    {item.type === 'safety' && <Shield className="h-16 w-16" />}
                    {item.type === 'international' && <Globe className="h-16 w-16" />}
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            {t.video.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t.video.subtitle}
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Camera className="h-16 w-16 mb-4" />
                <p className="text-gray-600">Видео презентация на нашите услуги</p>
                <p className="text-sm text-gray-600 mt-2">Coming soon...</p>
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
