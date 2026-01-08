'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';
import ImageLightbox from './ImageLightbox';

interface CertificationsProps {
  lang: Language;
}

// Certificate images mapped to their certification types
// Based on the actual certificate documents:
// - IMG_029.jpg: International Road Transport License (EU License for international goods transport)
// - IMG_032.jpg: ATP Certificate for Insulated, Refrigerated, Mechanically Refrigerated or Heated Equipment
const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const t = translations[lang].certifications;
  
  const certificateImages = [
    {
      image: '/images/Resources/Certificates/IMG_029.jpg',
      type: 'license' as const,
      description: t.certificateDescriptions[0]
    },
    {
      image: '/images/Resources/Certificates/IMG_032.jpg',
      type: 'license' as const,
      description: t.certificateDescriptions[1]
    }
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Map certification types to their labels
  const getCertificationLabel = (type: 'adr' | 'pharma' | 'license') => {
    switch (type) {
      case 'adr':
        return t.adr;
      case 'pharma':
        return t.pharma;
      case 'license':
        return t.license;
    }
  };

  const openLightbox = (index: number) => {
    const images = certificateImages.map(cert => cert.image);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % certificateImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + certificateImages.length) % certificateImages.length);
  };

  return (
    <section id="certifications" className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.title}</h2>
        
        {/* Certificates */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {certificateImages.map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-[300px]">
                <div
                  className="bg-white rounded-lg p-2 mb-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={cert.image}
                    alt={getCertificationLabel(cert.type)}
                    width={250}
                    height={350}
                    className="rounded-lg object-contain"
                    style={{ maxHeight: '350px', width: 'auto' }}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{getCertificationLabel(cert.type)}</h3>
                <p className="text-sm text-blue-100 max-w-[280px]">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>

      <ImageLightbox
        images={certificateImages.map(cert => cert.image)}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
        alt="Certificate"
      />
    </section>
  );
};

export default Certifications;

