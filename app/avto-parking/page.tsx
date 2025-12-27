import { Shield, Wrench, Droplets, Package, Camera, DoorOpen, Users, AlertTriangle } from "lucide-react";

export default function AvtoParking() {
  const services = [
    {
      name: "Охраняем паркинг",
      description: "24/7 охрана с професионален екип и модерно видеонаблюдение",
      icon: <Shield className="h-12 w-12" />,
      features: ["Кръглосъчно наблюдение", "Контролиран достъп", "Охрана на периметъра"]
    },
    {
      name: "Техническо обслужване",
      description: "Възможност за основен ремонт и поддръжка на вашия автомобил",
      icon: <Wrench className="h-12 w-12" />,
      features: ["Диагностика", "Ремонтни дейности", "Подмяна на части"]
    },
    {
      name: "Митене и почистване",
      description: "Професионално почистване на автомобили преди и след транспорт",
      icon: <Droplets className="h-12 w-12" />,
      features: ["Вътрешно почистване", "Външно измиване", "Дезинфекция"]
    },
    {
      name: "Складиране на части",
      description: "Сигурно съхранение на резервни части и оборудване",
      icon: <Package className="h-12 w-12" />,
      features: ["Контролирана среда", "Организирано съхранение", "Бърз достъп"]
    }
  ];

  const facilities = [
    { name: "Покрити паркоместа", count: "200+", description: "Защита от атмосферни влияния" },
    { name: "Открити паркоместа", count: "500+", description: "За временно паркиране" },
    { name: "Сервизни халета", count: "3", description: "За ремонт и поддръжка" },
    { name: "Административна сграда", count: "1", description: "Служби и администрация" }
  ];

  const pricing = [
    {
      service: "Дневно паркиране",
      price: "15 лв/ден",
      description: "За леки автомобили и малки товарни"
    },
    {
      service: "Седмично паркиране",
      price: "80 лв/седмица",
      description: "Намаление 15% при седмично плащане"
    },
    {
      service: "Месечно паркиране",
      price: "250 лв/месец",
      description: "Намаление 30% при месечно плащане"
    },
    {
      service: "Дългосрочно съхранение",
      price: "По договаряне",
      description: "Индивидуални цени за сезонно съхранение"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Авто паркинг</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Охраняем автопаркинг с модерна инфраструктура и денонощно видеонаблюдение
            </p>
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
              Пълно обслужване за вашия автомобил по време на престой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{service.name}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-text-secondary">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Инфраструктура
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Съвременни съоръжения за сигурно съхранение на вашия автомобил
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">{facility.count}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{facility.name}</h3>
                <p className="text-text-secondary text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Сигурност и контрол
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Camera className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Видеонаблюдение 24/7</h3>
                    <p className="text-text-secondary">Над 100 камери с висока резолюция покриват цялата територия</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DoorOpen className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Контролиран достъп</h3>
                    <p className="text-text-secondary">Електронни пропуски и регистрация на всички посетители</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Професионална охрана</h3>
                    <p className="text-text-secondary">Кръглосъчни патрули и бързо реагиране при инциденти</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Система за пожарна безопасност</h3>
                    <p className="text-text-secondary">Автоматична пожарогасителна система и датчици за дим</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-section-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Статистика по безопасност</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">0</div>
                  <p className="text-text-secondary">Кражи през 2024</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-text-secondary">Видеонаблюдение</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <p className="text-text-secondary">Камери</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15</div>
                  <p className="text-text-secondary">Охранители</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Цени
            </h2>
            <p className="text-lg text-text-secondary">
              Конкурентни цени с възможност за намаления при дългосрочни договори
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricing.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.service}</h3>
                <div className="text-2xl font-bold text-accent mb-3">{item.price}</div>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Резервирайте място
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свържете се с нас за резервация и допълнителна информация
          </p>
          <a
            href="/zapitvane-oferta"
            className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg inline-block"
          >
            Запитване за резервация
          </a>
        </div>
      </section>
    </div>
  );
}
