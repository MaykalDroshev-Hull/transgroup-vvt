import React from 'react';
import { translations, Language } from '@/lib/translations';
import { Building2, Globe2, ShieldCheck } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;

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
        </div>
      </div>
    </section>
  );
};

export default About;

