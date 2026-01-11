'use client'

import React from 'react';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';
import { FlaskConical } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang].services;

  const services = [
    { image: '/images/Resources/Quality/IMG_019.jpg', title: t.items.frigo, hasImage: true },
    { image: '/images/Resources/Stock/IMG_007.jpg', title: t.items.dry, hasImage: true },
    { image: '/images/Resources/Stock/IMG_067.jpg', title: t.items.warehousing, hasImage: true },
    { image: '/images/Resources/Stock/IMG_044.jpg', title: t.items.crossdock, hasImage: true },
    { image: '/images/Resources/Stock/IMG_040.jpg', title: t.items.groupage, hasImage: true },
    { image: '/images/Resources/Journeys/IMG_103.jpg', title: t.items.spedition, hasImage: true },
    { image: '/images/Resources/ADP.webp', title: t.items.adr, hasImage: true },
    { image: '/images/Resources/Journeys/IMG_088.jpg', title: t.items.parking, hasImage: true },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group overflow-hidden"
            >
              <div className="mb-6 w-full h-48 relative rounded-lg overflow-hidden bg-gray-100">
                {service.hasImage && service.image ? (
                  <>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={90}
                      unoptimized={false}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4 bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    <FlaskConical className="w-10 h-10 text-blue-600" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

