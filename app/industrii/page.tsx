import { Truck, Store, Factory, Coffee, Package, HardHat } from "lucide-react";

export default function Industrii() {
  const industries = [
    {
      name: "Автомобилна индустрия",
      description: "Специализирани логистични решения за автомобилната индустрия – транспорт на автомобили, резервни части и компоненти.",
      services: ["Транспорт на леки коли", "Резервни части", "Компоненти за производство", "Just-in-time доставки"],
      icon: <Truck className="h-12 w-12" />,
      stats: { clients: "15+", deliveries: "5000+", satisfaction: "99%" }
    },
    {
      name: "Търговия и ритейл",
      description: "Оптимизирани логистични вериги за търговски и ритейл компании с фокус върху бързина и точност.",
      services: ["Дистрибуция до магазини", "Крос-докинг", "Намаляване на наличности", "Електронна търговия"],
      icon: <Store className="h-12 w-12" />,
      stats: { clients: "25+", deliveries: "15000+", satisfaction: "97%" }
    },
    {
      name: "Производство",
      description: "Цялостна логистика за производствени предприятия – от суровини до готова продукция.",
      services: ["Суровини и материали", "Междинни продукти", "Готова продукция", "Международни доставки"],
      icon: <Factory className="h-12 w-12" />,
      stats: { clients: "20+", deliveries: "8000+", satisfaction: "98%" }
    },
    {
      name: "FMCG",
      description: "Специализиран транспорт за бързооборотни стоки с температурно контролирани превози.",
      services: ["Хранителни продукти", "Напитки", "Битова химия", "Лекарства"],
      icon: <Coffee className="h-12 w-12" />,
      stats: { clients: "30+", deliveries: "25000+", satisfaction: "96%" }
    },
    {
      name: "Електронна търговия",
      description: "Ефективни логистични решения за онлайн търговци с фокус върху последната миля доставка.",
      services: ["Последна миля доставка", "Връщане на стоки", "Складиране", "Упаковка"],
      icon: <Package className="h-12 w-12" />,
      stats: { clients: "40+", deliveries: "35000+", satisfaction: "95%" }
    },
    {
      name: "Строителство",
      description: "Тежкотоварни превози и специализиран транспорт за строителната индустрия.",
      services: ["Строителни материали", "Тежка техника", "Извънгабаритни товари", "Опасни материали"],
      icon: <HardHat className="h-12 w-12" />,
      stats: { clients: "12+", deliveries: "3000+", satisfaction: "99%" }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Индустрии</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Специализирани логистични решения за различни индустрии и сектори
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-8">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{industry.name}</h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">{industry.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-primary mb-3">Услуги:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-text-secondary text-sm">
                          <span className="text-accent mr-2">✓</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{industry.stats.clients}</div>
                      <div className="text-xs text-text-secondary">Клиенти</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{industry.stats.deliveries}</div>
                      <div className="text-xs text-text-secondary">Доставки</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{industry.stats.satisfaction}</div>
                      <div className="text-xs text-text-secondary">Удовлетвореност</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Нуждаете се от логистика за вашия сектор?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свържете се с нас за персонализирано решение за вашия бизнес
          </p>
          <a
            href="/zapitvane-oferta"
            className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg inline-block"
          >
            Запитване за оферта
          </a>
        </div>
      </section>
    </div>
  );
}
