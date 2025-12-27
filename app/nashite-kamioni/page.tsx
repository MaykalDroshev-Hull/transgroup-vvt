import { Truck, Check, Wrench, Shield } from "lucide-react";

export default function NashiteKamioni() {
  const truckTypes = [
    {
      category: "Леки товарни автомобили",
      trucks: [
        { model: "Mercedes-Benz Sprinter", capacity: "3.5 т", features: ["Градски доставки", "Разнородни товари"] },
        { model: "VW Crafter", capacity: "3.0 т", features: ["Експресни доставки", "Мебели"] }
      ]
    },
    {
      category: "Среднотонни камиони",
      trucks: [
        { model: "Mercedes-Benz Atego", capacity: "18 т", features: ["Регионални доставки", "Строителни материали"] },
        { model: "MAN TGM", capacity: "26 т", features: ["Международен транспорт", "Контейнери"] },
        { model: "Volvo FH", capacity: "24 т", features: ["Дълги разстояния", "Хранителни продукти"] }
      ]
    },
    {
      category: "Тежкотоварни камиони",
      trucks: [
        { model: "Mercedes-Benz Actros", capacity: "40 т", features: ["Международни превози", "Тежки товари"] },
        { model: "Scania R-series", capacity: "44 т", features: ["Дълги разстояния", "Опасни товари ADR"] },
        { model: "DAF XF", capacity: "44 т", features: ["Европейски транспорт", "Висока ефективност"] }
      ]
    },
    {
      category: "Специализирани превозни средства",
      trucks: [
        { model: "Термокамиони", capacity: "24 т", features: ["Температурно контролиран транспорт", "Хранителни продукти"] },
        { model: "Камиони с хидравлично платно", capacity: "30 т", features: ["Извънгабаритни товари", "Строителна техника"] },
        { model: "Цистерни", capacity: "32 т", features: ["Течни товари", "Химикали"] }
      ]
    }
  ];

  const certifications = [
    { name: "ADR сертификат", description: "За транспорт на опасни материали" },
    { name: "TPC сертификат", description: "За транспорт на хранителни продукти" },
    { name: "ISO 9001", description: "Система за управление на качеството" },
    { name: "ISO 14001", description: "Система за управление на околната среда" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Нашите камиони</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Модерен автопарк отговарящ на всички европейски стандарти за безопасност и екология
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Нашият автопарк
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Разполагаме с над 50 модерни превозни средства, подбрани за максимална ефективност и безопасност
            </p>
          </div>

          <div className="space-y-12">
            {truckTypes.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.trucks.map((truck, truckIndex) => (
                    <div key={truckIndex} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                      <Truck className="h-10 w-10 text-accent mb-4" />
                      <h4 className="text-xl font-semibold text-primary mb-2">{truck.model}</h4>
                      <p className="text-accent font-medium mb-3">Капацитет: {truck.capacity}</p>
                      <ul className="space-y-1">
                        {truck.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-text-secondary text-sm flex items-center">
                            <span className="text-accent mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Сертификати и стандарти
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Всички наши превозни средства и процеси отговарят на най-високите международни стандарти
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <Check className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-semibold text-primary mb-2">{cert.name}</h3>
                <p className="text-text-secondary text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Safety */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Поддръжка и безопасност
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Wrench className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Регулярна техническа поддръжка</h3>
                    <p className="text-text-secondary">Всички превозни средства преминават през стриктен график на технически прегледи</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">GPS проследяване</h3>
                    <p className="text-text-secondary">В реално време следим местоположението и състоянието на всеки камион</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Wrench className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Професионални шофьори</h3>
                    <p className="text-text-secondary">Нашият екип от шофьори има богат опит и преминава редовни обучения</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent text-xl mr-3">🌱</span>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Еко стандарти</h3>
                    <p className="text-text-secondary">Използваме Euro 6 двигатели и се стремим към минимално въздействие върху околната среда</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-section-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Статистика на автопарка</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <p className="text-text-secondary">Превозни средства</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <p className="text-text-secondary">Време на работа</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">0</div>
                  <p className="text-text-secondary">Инциденти през 2024</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5</div>
                  <p className="text-text-secondary">Среден стаж на шофьорите</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
