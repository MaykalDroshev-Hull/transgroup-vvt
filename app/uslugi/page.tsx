import Link from "next/link";
import { Truck, Package, Factory } from "lucide-react";

export default function Uslugi() {
  const services = [
    {
      title: "Сухопътен транспорт",
      description: "Предлагаме надежден сухопътен транспорт за вътрешни и международни доставки. Нашият модерен автопарк включва различни видове камиони, подходящи за всеки тип товар.",
      features: [
        "FTL (Full Truck Load) доставки",
        "LTL (Less Than Truck Load) доставки",
        "Експресни доставки",
        "Температурно контролиран транспорт"
      ],
      icon: <Truck className="h-16 w-16" />
    },
    {
      title: "Спедиция и логистика",
      description: "Пълна организация на логистичните процеси – от планирането до финалната доставка. Нашите експерти се грижат за всички детайли на вашия транспорт.",
      features: [
        "Митнически услуги",
        "Документация и администрация",
        "Транспортно застраховане",
        "Проследяване на товари"
      ],
      icon: <Package className="h-16 w-16" />
    },
    {
      title: "Складиране и дистрибуция",
      description: "Съвременни складови помещения с контрол на температурата и влажността. Предлагаме пълна дистрибуционна услуга за вашия бизнес.",
      features: [
        "Краткосрочено и дългосрочно складиране",
        "Инвентарен контрол",
        "Подготовка на поръчки",
        "Дистрибуция до крайни клиенти"
      ],
      icon: <Factory className="h-16 w-16" />
    },
    {
      title: "Специализирани превози",
      description: "За специални товари предлагаме специализирани транспортни решения – тежки товари, опасни материали, извънгабаритни товари.",
      features: [
        "Транспорт на тежки товари",
        "Опасни материали (ADR)",
        "Извънгабаритни товари",
        "Строителни материали"
      ],
      icon: <Truck className="h-16 w-16" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Нашите услуги</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Цялостни логистични решения за вашия бизнес – от транспорт до дистрибуция
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
                <div className="text-accent mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-3">Включва:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-text-secondary">
                        <span className="text-accent mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/zapitvane-oferta"
                  className="inline-block bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Запитване за оферта
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Как работим с вас
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Прозрачен и ефективен процес от запитването до финалната доставка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Запитване", description: "Изпращате запитване с детайли за вашия товар" },
              { step: "2", title: "Оферта", description: "Получавате персонализирана оферта в рамките на 24 часа" },
              { step: "3", title: "Организация", description: "Организираме транспорта и логистиката" },
              { step: "4", title: "Доставка", description: "Проследявате процеса в реално време до финалната доставка" }
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Готови ли сте да започнете?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свържете се с нас за консултация и персонализирана оферта
          </p>
          <Link
            href="/zapitvane-oferta"
            className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg inline-block"
          >
            Запитване за оферта
          </Link>
        </div>
      </section>
    </div>
  );
}
