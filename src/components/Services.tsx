import React from 'react';
import { translations, Language } from '@/lib/translations';
import { Truck, Package, Warehouse, ArrowRightLeft, Boxes, Globe, FlaskConical, SquareParking } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang].services;

  const services = [
    { icon: <Truck className="w-10 h-10 text-blue-600" />, title: t.items.frigo },
    { icon: <Package className="w-10 h-10 text-blue-600" />, title: t.items.dry },
    { icon: <Warehouse className="w-10 h-10 text-blue-600" />, title: t.items.warehousing },
    { icon: <ArrowRightLeft className="w-10 h-10 text-blue-600" />, title: t.items.crossdock },
    { icon: <Boxes className="w-10 h-10 text-blue-600" />, title: t.items.groupage },
    { icon: <Globe className="w-10 h-10 text-blue-600" />, title: t.items.spedition },
    { icon: <FlaskConical className="w-10 h-10 text-blue-600" />, title: t.items.adr },
    { icon: <SquareParking className="w-10 h-10 text-blue-600" />, title: t.items.parking },
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
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                {service.icon}
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

