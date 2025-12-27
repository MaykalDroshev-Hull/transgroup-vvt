import Link from "next/link";
import Image from "next/image";
import { Truck, Package, Factory, Users, Clock, Globe, Check, Phone } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Сухопътен транспорт",
      description: "Надежден вътрешен и международен транспорт с модерен автопарк",
      icon: <Truck className="h-12 w-12" />
    },
    {
      title: "Спедиция",
      description: "Пълна организация на товарните превози и логистични процеси",
      icon: <Package className="h-12 w-12" />
    },
    {
      title: "Складиране",
      description: "Съвременни складови помещения с контрол на температурата",
      icon: <Factory className="h-12 w-12" />
    },
    {
      title: "Дистрибуция",
      description: "Ефективно разпределение на товари до крайния получател",
      icon: <Truck className="h-12 w-12" />
    }
  ];

  const whyUs = [
    {
      title: "Модерен автопарк",
      description: "Разполагаме с най-съвременни камиони, отговарящи на всички европейски стандарти",
      icon: <Truck className="h-12 w-12" />
    },
    {
      title: "Навременни доставки",
      description: "Гарантираме спазване на сроковете с точност до час",
      icon: <Clock className="h-12 w-12" />
    },
    {
      title: "Индивидуален подход",
      description: "Всеки клиент получава персонализирано решение за своите нужди",
      icon: <Users className="h-12 w-12" />
    },
    {
      title: "Международно покритие",
      description: "Работим в цяла Европа с опит в международната логистика",
      icon: <Globe className="h-12 w-12" />
    },
    {
      title: "Сертифицирано качество",
      description: "Всички наши процеси са сертифицирани по международни стандарти",
      icon: <Check className="h-12 w-12" />
    },
    {
      title: "Денонощна поддръжка",
      description: "Нашите специалисти са на разположение 24/7 за всякакви въпроси",
      icon: <Phone className="h-12 w-12" />
    }
  ];

  const faqs = [
    {
      question: "Колко време отнема доставката?",
      answer: "Времето за доставка зависи от маршрута и типа товар. За вътрешни доставки - от 1 до 3 дни, за международни - от 3 до 7 дни."
    },
    {
      question: "Работите ли международно?",
      answer: "Да, предлагаме транспорт в цяла Европа. Имаме опит с доставки до всички европейски страни."
    },
    {
      question: "Как се определя цената?",
      answer: "Цената се изчислява индивидуално според товара, маршрута, спешността и допълнителните услуги."
    },
    {
      question: "Предлагате ли застраховка на товарите?",
      answer: "Да, предлагаме пълна застраховка на товарите през цялото време на транспорта."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Надеждни логистични решения за вашия бизнес
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Международен и вътрешен транспорт, съобразен с нуждите на модерния бизнес
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/zapitvane-oferta"
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
              >
                Запитване за оферта
              </Link>
              <Link
                href="/uslugi"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/20"
              >
                Нашите услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Защо да изберете нас?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Ние сме логистична компания с дългогодишен опит в международния и вътрешния транспорт.
              Предлагаме надеждни, гъвкави и ефективни транспортни решения, съобразени с нуждите на нашите клиенти.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Нашите услуги
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Предлагаме цялостни логистични решения – сухопътен транспорт, спедиция, складиране и дистрибуция.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-section-bg p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                <Link
                  href="/uslugi"
                  className="text-secondary hover:text-primary font-medium transition-colors"
                >
                  Научете повече →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Готови ли сте да оптимизирате логистиката си?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свържете се с нас за безплатна консултация и персонализирана оферта
          </p>
          <Link
            href="/zapitvane-oferta"
            className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg inline-block"
          >
            Запитване за оферта
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Често задавани въпроси
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
