'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';
import ImageLightbox from './ImageLightbox';

interface FleetProps {
  lang: Language;
}

const Fleet: React.FC<FleetProps> = ({ lang }) => {
  const t = translations[lang].fleet;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All Fleet images from Resources/Fleet
  const fleetImages = [
    '/images/Resources/Fleet/IMG_004.jpg',
    '/images/Resources/Fleet/IMG_005.jpg',
    '/images/Resources/Fleet/IMG_006.jpg',
    '/images/Resources/Fleet/IMG_022.jpg',
    '/images/Resources/Fleet/IMG_024.jpg',
    '/images/Resources/Fleet/IMG_028.jpg',
    '/images/Resources/Fleet/IMG_033.jpg',
    '/images/Resources/Fleet/IMG_041.jpg',
    '/images/Resources/Fleet/IMG_046.jpg',
    '/images/Resources/Fleet/IMG_071.jpg',
    '/images/Resources/Fleet/IMG_077.jpg',
    '/images/Resources/Fleet/IMG_080.jpg',
    '/images/Resources/Fleet/IMG_093.jpg',
    '/images/Resources/Fleet/IMG_105.jpg',
    '/images/Resources/Fleet/IMG_107.jpg'
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % fleetImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + fleetImages.length) % fleetImages.length);
  };

  return (
    <>
      <section id="fleet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fleetImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image 
                  src={image} 
                  alt={`Fleet vehicle ${index + 1}`} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="text-sm font-medium">Click to expand</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={fleetImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
        alt="Fleet vehicle"
      />
    </>
  );
};

export default Fleet;

