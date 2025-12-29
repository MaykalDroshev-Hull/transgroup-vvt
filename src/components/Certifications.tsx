import React from 'react';
import { translations, Language } from '@/lib/translations';
import { Award, FileCheck, Shield } from 'lucide-react';

interface CertificationsProps {
  lang: Language;
}

const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const t = translations[lang].certifications;

  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg">{t.adr}</h3>
          </div>
          
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <FileCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg">{t.pharma}</h3>
          </div>

          <div className="flex flex-col items-center text-center max-w-[200px]">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg">{t.license}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

