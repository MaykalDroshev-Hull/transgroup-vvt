'use client'

import { DollarSign, Hospital, Book, Building, Clock, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { Language } from "@/lib/translations";
import { useState } from "react";

export default function Karieri() {
  const [lang, setLang] = useState<Language>('bg');
  const positions = [
    {
      title: "Шофьор на тежкотоварен автомобил",
      type: "Пълно работно време",
      location: "София",
      requirements: [
        "Професионална шофьорска книжка категория C+E",
        "Опит в международния транспорт",
        "ADR сертификат за опасни товари",
        "Отговорност и точност"
      ],
      benefits: ["Конкурентно заплащане", "Допълнителни възнаграждения", "Социални придобивки", "Обучение и развитие"]
    },
    {
      title: "Логистици",
      type: "Пълно работно време",
      location: "София",
      requirements: [
        "Висше образование по логистика или транспорт",
        "Опит в организация на товари",
        "Познания по митнически процедури",
        "Добри комуникативни умения"
      ],
      benefits: ["Динамична работа", "Отговорни задачи", "Екип от професионалисти", "Възможности за развитие"]
    },
    {
      title: "Специалист по безопасност",
      type: "Пълно работно време",
      location: "София",
      requirements: [
        "Опит в областта на безопасността",
        "Познания по OHSAS стандарти",
        "Организаторски способности",
        "Сертификати за безопасност"
      ],
      benefits: ["Важна роля в компанията", "Професионално развитие", "Стабилна позиция", "Отлични условия"]
    },
    {
      title: "Механик",
      type: "Пълно работно време",
      location: "База София",
      requirements: [
        "Образование по механика",
        "Опит с товарни автомобили",
        "Познания по електроника",
        "Сертификати за квалификация"
      ],
      benefits: ["Техническа поддръжка", "Модерно оборудване", "Обучение", "Стабилна работа"]
    }
  ];

  const benefits = [
    {
      title: "Конкурентно заплащане",
      description: "Предлагаме заплати над средните за бранша, допълнителни възнаграждения и бонуси",
      icon: <DollarSign className="h-12 w-12" />
    },
    {
      title: "Социални придобивки",
      description: "Допълнително здравно осигуряване, карта за храна, ваучери за почивка",
      icon: <Hospital className="h-12 w-12" />
    },
    {
      title: "Обучение и развитие",
      description: "Непрекъснато професионално развитие, курсове и сертификати",
      icon: <Book className="h-12 w-12" />
    },
    {
      title: "Съвременни условия",
      description: "Модерни офиси, техника и работно обкръжение",
      icon: <Building className="h-12 w-12" />
    },
    {
      title: "Работно време",
      description: "Гъвкаво работно време, възможност за дистанционна работа",
      icon: <Clock className="h-12 w-12" />
    },
    {
      title: "Екип и култура",
      description: "Приятелска атмосфера, екипни събития и възможности за изява",
      icon: <Users className="h-12 w-12" />
    }
  ];

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Кариерно развитие</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Присъединете се към нашия екип и станете част от динамична логистична среда
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Защо да се присъедините към нас?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Предлагаме възможности за професионално развитие в една от водещите логистични компании
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="text-accent mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Отворени позиции
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Актуални възможности за работа в нашия екип
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                      <span className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Кандидатствай
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Изисквания:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-text-secondary">
                          <span className="text-accent mr-2 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Предимства:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-text-secondary">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Процес на кандидатстване
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Кандидатствай", description: "Изпрати CV и мотивационно писмо" },
              { step: "2", title: "Интервю", description: "Първоначален разговор с HR" },
              { step: "3", title: "Тестове", description: "Технически тест и practically изпитване" },
              { step: "4", title: "Започни", description: "Добре дошъл в нашия екип!" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-text-secondary mb-6">
              Нямате подходяща позиция? Изпратете ни автобиография и ще се свържем с вас при възможност.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg">
              Изпрати CV
            </button>
          </div>
        </div>
      </section>
      </main>
      <Footer lang={lang} />
      <FloatingButtons />
      <CookieBanner lang={lang} />
    </>
  );
}
