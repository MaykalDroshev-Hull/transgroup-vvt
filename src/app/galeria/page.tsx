'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import ImageLightbox from "@/components/ImageLightbox";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Galeria() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].gallery;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // All Stock images from Resources/Stock
  const stockImages = [
    '/images/Resources/Stock/IMG_001.jpg',
    '/images/Resources/Stock/IMG_002.jpg',
    '/images/Resources/Stock/IMG_007.jpg',
    '/images/Resources/Stock/IMG_011.jpg',
    '/images/Resources/Stock/IMG_012.jpg',
    '/images/Resources/Stock/IMG_014.jpg',
    '/images/Resources/Stock/IMG_016.jpg',
    '/images/Resources/Stock/IMG_018.jpg',
    '/images/Resources/Stock/IMG_020.jpg',
    '/images/Resources/Stock/IMG_021.jpg',
    '/images/Resources/Stock/IMG_023.jpg',
    '/images/Resources/Stock/IMG_027.jpg',
    '/images/Resources/Stock/IMG_030.jpg',
    '/images/Resources/Stock/IMG_031.jpg',
    '/images/Resources/Stock/IMG_034.jpg',
    '/images/Resources/Stock/IMG_037.jpg',
    '/images/Resources/Stock/IMG_040.jpg',
    '/images/Resources/Stock/IMG_042.jpg',
    '/images/Resources/Stock/IMG_044.jpg',
    '/images/Resources/Stock/IMG_048.jpg',
    '/images/Resources/Stock/IMG_050.jpg',
    '/images/Resources/Stock/IMG_053.jpg',
    '/images/Resources/Stock/IMG_054.jpg',
    '/images/Resources/Stock/IMG_056.jpg',
    '/images/Resources/Stock/IMG_057.jpg',
    '/images/Resources/Stock/IMG_060.jpg',
    '/images/Resources/Stock/IMG_061.jpg',
    '/images/Resources/Stock/IMG_062.jpg',
    '/images/Resources/Stock/IMG_065.jpg',
    '/images/Resources/Stock/IMG_066.jpg',
    '/images/Resources/Stock/IMG_067.jpg',
    '/images/Resources/Stock/IMG_069.jpg',
    '/images/Resources/Stock/IMG_073.jpg',
    '/images/Resources/Stock/IMG_074.jpg',
    '/images/Resources/Stock/IMG_075.jpg',
    '/images/Resources/Stock/IMG_076.jpg',
    '/images/Resources/Stock/IMG_079.jpg',
    '/images/Resources/Stock/IMG_081.jpg',
    '/images/Resources/Stock/IMG_086.jpg',
    '/images/Resources/Stock/IMG_090.jpg',
    '/images/Resources/Stock/IMG_092.jpg',
    '/images/Resources/Stock/IMG_096.jpg',
    '/images/Resources/Stock/IMG_098.jpg',
    '/images/Resources/Stock/IMG_100.jpg',
    '/images/Resources/Stock/IMG_101.jpg',
    '/images/Resources/Stock/IMG_102.jpg',
    '/images/Resources/Stock/IMG_104.jpg',
    '/images/Resources/Stock/IMG_106.jpg'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stockImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 aspect-square cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <Image 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="text-sm font-medium">Click to expand</p>
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

      <ImageLightbox
        images={stockImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentImageIndex((prev) => (prev + 1) % stockImages.length)}
        onPrevious={() => setCurrentImageIndex((prev) => (prev - 1 + stockImages.length) % stockImages.length)}
        alt="Gallery image"
      />
    </>
  );
}
