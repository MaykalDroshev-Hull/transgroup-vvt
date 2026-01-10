'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';
import { Building2, Globe2, ShieldCheck, Play } from 'lucide-react';
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
    '/images/Resources/Journeys/IMG_103.jpg',
    // New images and video from New folder
    '/images/Resources/Journeys/New/0-02-05-01a8f8dd647d82667c046e5e58f65682a4c248ef33ce2d9118da471d00c66f5c_2ffc37b5fe5a539c.jpg',
    '/images/Resources/Journeys/New/0-02-05-172be9d35ec657f831ccd77c650cf49dbeab1b33e8688d6501fb932d055126fc_1905aa4214e246e0.jpg',
    '/images/Resources/Journeys/New/0-02-05-17656aba7c4ecbd552091b3bb8125a02d56572c08075529499f1226c244ac075_ea9fe1c2526a2c9a.jpg',
    '/images/Resources/Journeys/New/0-02-05-3e5e9aea24b51f9eff216edc103a32c24000c77e1dbe75155493f3a693576c77_b22a773d79d7dbb6.jpg',
    '/images/Resources/Journeys/New/0-02-05-47d00c763235d512c8522e8b834d6a320c278a0333c04638897552c351150237_dd868c57feb2eb4f.jpg',
    '/images/Resources/Journeys/New/0-02-05-7f75f04187ed91f88f22721f97da06dbd46b89785069c5849240f6e00b44e6b2_84cd7064e616b1e4.jpg',
    '/images/Resources/Journeys/New/0-02-05-9397ed5c7cd8898fc156236557a1874d598bea4a56e3d2ecade7514336747ae6_fc61fc66b1e62f6c.jpg',
    '/images/Resources/Journeys/New/0-02-05-abeef02fae94d318ab35b4b9992b8b0367a0f461a4d2fc6d82d2e6d6c0c8ed7d_10d5fccc9338a7ec.jpg',
    '/images/Resources/Journeys/New/0-02-05-b787ea1168615764148b726a9bbebb0d949942d79eb43293ce5dc376a0da19bc_ca25f9998fc75305.jpg',
    '/images/Resources/Journeys/New/0-02-05-bf0d83ffd877bad8b857875c92ebebfa02404d51c6cb98ed2a26589d2e110719_3a2b605c43a0a954.jpg',
    '/images/Resources/Journeys/New/0-02-05-e736e4ee51e04c0c961d24e55b23329b3790c81169f382db10acc6a22b1db63f_fd3b9849082c83c2.jpg',
    '/images/Resources/Journeys/New/0-02-05-c70be06593c994dac3d51bdf76f1a211d1e3ce00902e9fbc2b1d84b3116ced1f_89eb49f8e619ac47.mp4'
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
              {journeysImages.map((image, index) => {
                const isVideo = image.endsWith('.mp4') || image.endsWith('.MP4');
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 aspect-square cursor-pointer"
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setLightboxOpen(true);
                    }}
                  >
                    {isVideo ? (
                      <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                        <video
                          src={image}
                          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                        <div className="relative z-10 flex items-center justify-center">
                          <div className="bg-blue-600/90 rounded-full p-4 group-hover:bg-blue-600 transition-colors">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                );
              })}
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

