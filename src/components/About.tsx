'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';
import { Building2, Globe2, ShieldCheck } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Journeys images (excluding IMG_088.jpg which is used in Auto Parking)
  const journeysImages = [
    '/images/Resources/Journeys/IMG_015.jpg',
    '/images/Resources/Journeys/IMG_035.jpg',
    '/images/Resources/Journeys/IMG_043.jpg',
    '/images/Resources/Journeys/IMG_047.jpg',
    '/images/Resources/Journeys/IMG_068.jpg',
    '/images/Resources/Journeys/IMG_070.jpg',
    '/images/Resources/Journeys/IMG_078.jpg',
    '/images/Resources/Journeys/IMG_085.jpg',
    '/images/Resources/Journeys/IMG_094.jpg',
    '/images/Resources/Journeys/IMG_095.jpg',
    '/images/Resources/Journeys/IMG_103.jpg'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Building2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Trans Group VVT OOD</h3>
                  <p className="text-gray-600">{t.logistics}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Globe2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">TRANS GROUP VVT-1 OOD</h3>
                  <p className="text-gray-600">{t.spedition}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t.license}</h3>
                  <p className="text-gray-600">{t.pharma}</p>
                </div>
              </div>

               <div className="flex items-start space-x-4">
                <ShieldCheck className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">GPS Tracking</h3>
                  <p className="text-gray-600">{t.gps}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Journeys Gallery */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.journeys.title}</h3>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                {t.journeys.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {journeysImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 aspect-square cursor-pointer"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <Image 
                    src={image} 
                    alt={`Transportation journey ${index + 1}`} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm font-medium">Click to expand</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={journeysImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentImageIndex((prev) => (prev + 1) % journeysImages.length)}
        onPrevious={() => setCurrentImageIndex((prev) => (prev - 1 + journeysImages.length) % journeysImages.length)}
        alt="Transportation journey"
      />
    </section>
  );
};

export default About;

