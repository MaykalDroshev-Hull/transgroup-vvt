'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Shield, Wrench, Droplets, Package, Camera, DoorOpen, Users, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import ImageLightbox from "@/components/ImageLightbox";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function AvtoParking() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].autoParking;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  const parkingImage = '/images/Resources/Journeys/IMG_088.jpg';
  const parkingImages = [parkingImage];
  
  const serviceIcons = [
    <Shield className="h-12 w-12" />,
    <Wrench className="h-12 w-12" />,
    <Droplets className="h-12 w-12" />,
    <Package className="h-12 w-12" />
  ];

  const serviceKeys = ['security', 'maintenance', 'cleaning', 'storage'] as const;
  const services = serviceKeys.map((key, index) => ({
    ...t.services.items[key],
    icon: serviceIcons[index]
  }));

  const facilityKeys = ['covered', 'open', 'workshops', 'office'] as const;
  const facilities = facilityKeys.map(key => t.facilities.items[key]);

  const pricingKeys = ['daily', 'weekly', 'monthly', 'longterm'] as const;
  const pricing = pricingKeys.map(key => t.pricing.items[key]);

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{t.hero.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>
          {/* Parking Image */}
          <div
            className="max-w-4xl mx-auto mt-8 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="relative aspect-video">
              <Image 
                src={parkingImage}
                alt="Auto Parking Facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="text-white opacity-0 hover:opacity-100 transition-opacity text-sm font-medium">
                  Click to expand
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t.services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t.facilities.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.facilities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">{facility.count}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{facility.name}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t.security.title}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Camera className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Видеонаблюдение 24/7</h3>
                    <p className="text-gray-600">Над 100 камери с висока резолюция покриват цялата територия</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DoorOpen className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Контролиран достъп</h3>
                    <p className="text-gray-600">Електронни пропуски и регистрация на всички посетители</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Професионална охрана</h3>
                    <p className="text-gray-600">Кръглосъчни патрули и бързо реагиране при инциденти</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Система за пожарна безопасност</h3>
                    <p className="text-gray-600">Автоматична пожарогасителна система и датчици за дим</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-section-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Статистика по безопасност</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">0</div>
                  <p className="text-gray-600">Кражи през 2024</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-gray-600">Видеонаблюдение</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <p className="text-gray-600">Камери</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15</div>
                  <p className="text-gray-600">Охранители</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t.pricing.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricing.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.service}</h3>
                <div className="text-2xl font-bold text-accent mb-3">{item.price}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
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

      <ImageLightbox
        images={parkingImages}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => {}}
        onPrevious={() => {}}
        alt="Auto Parking Facility"
      />
    </>
  );
}
