import React from 'react';
import { translations, Language } from '@/lib/translations';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{t.infoTitle}</h3>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{t.email}</p>
                <a href="mailto:transgroupvvt@gmail.com" className="text-gray-600 hover:text-blue-600">
                  transgroupvvt@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{t.phone}</p>
                <a href="tel:+359876535379" className="text-gray-600 hover:text-blue-600">
                  +359 876 535 379
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{t.addressLabel}</p>
                <p className="text-gray-600">
                  {t.address}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden h-64 shadow-md">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=bul.+Osvobozhdenie+6,+Northern+Industrial+Zone,+5502+Lovech,+Bulgaria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:w-2/3 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.company}</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.person}</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.contact}</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.cargo}</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">{t.form.cargoOptions.select}</option>
                    <option value="frigo">{t.form.cargoOptions.frigo}</option>
                    <option value="dry">{t.form.cargoOptions.dry}</option>
                    <option value="groupage">{t.form.cargoOptions.groupage}</option>
                    <option value="other">{t.form.cargoOptions.other}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.message}</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

