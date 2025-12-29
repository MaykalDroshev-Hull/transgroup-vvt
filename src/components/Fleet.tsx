import React from 'react';
import { translations, Language } from '@/lib/translations';

interface FleetProps {
  lang: Language;
}

const Fleet: React.FC<FleetProps> = ({ lang }) => {
  const t = translations[lang].fleet;

  const fleetItems = [
    {
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
      title: t.items.trucks
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      title: t.items.trailers
    },
    {
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
      title: t.items.warehouses
    },
    {
      image: "https://images.unsplash.com/photo-1566576912917-40d4a0c2943c?auto=format&fit=crop&q=80&w=800",
      title: t.items.security
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;

