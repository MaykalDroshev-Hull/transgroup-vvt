export type Language = 'bg' | 'en-GB' | 'pl' | 'el';

export const translations = {
  bg: {
    nav: {
      services: 'Услуги',
      fleet: 'Флот и База',
      about: 'За Нас',
      contact: 'Контакт',
      quote: 'Запитване',
      menu: 'Меню',
      selectLanguage: 'Изберете език:',
      more: 'Още',
      autoParking: 'Авто Паркинг',
      gallery: 'Галерия',
      industries: 'Индустрии',
      careers: 'Кариери',
      certificates: 'Сертификати'
    },
    hero: {
      headline: 'Хладилна Логистика & Международна Спедиция',
      subheadline: 'Температурен транспорт, складиране, групажи и международни спедиторски решения в България и Европа.',
      bullets: [
        'Лицензи за ADR и Фармацевтика',
        'Групажни пратки',
        'GPS проследяване',
        '24/7 ТИР Паркинг'
      ],
      ctaPrimary: 'Поискай Оферта',
      ctaSecondary: 'Свържи се с нас'
    },
    services: {
      title: 'Нашите Услуги',
      items: {
        frigo: 'Хладилен Транспорт',
        dry: 'Логистика на Сухи Стоки',
        warehousing: 'Складиране (Сухо и Хладно)',
        crossdock: 'Претоварване & Cross-Docking',
        groupage: 'Групажни Пратки',
        spedition: 'Международна Спедиция',
        adr: 'ADR и Фармацевтичен Транспорт',
        parking: 'ТИР Паркинг 24/7'
      }
    },
    fleet: {
      title: 'Флот и Съоръжения',
      items: {
        trucks: 'Хладилни камиони',
        trailers: 'Ремаркета с тристранно разтоварване',
        warehouses: 'Складове в цяла България',
        security: 'Сигурни заключващи системи'
      }
    },
    about: {
      title: 'За Нас',
      logistics: 'Логистика, управлявана от Trans Group VVT OOD',
      spedition: 'Спедиция, управлявана от TRANS GROUP VVT-1 OOD',
      license: 'Лиценз за международен превоз на товари',
      pharma: 'Лиценз за фармацевтични товари',
      gps: 'Интелигентно GPS проследяване за всяка пратка'
    },
    certifications: {
      adr: 'ADR Спогодба',
      pharma: 'Лиценз за Фармацевтика',
      license: 'Международен Лиценз'
    },
    contact: {
      title: 'Контакт / Запитване',
      infoTitle: 'Информация за връзка',
      address: 'бул. Освобождение 6',
      form: {
        company: 'Фирма',
        person: 'Лице за контакт',
        contact: 'Имейл / Телефон',
        cargo: 'Вид товар',
        message: 'Съобщение',
        submit: 'Изпрати Запитване'
      }
    },
    cookieBanner: {
      message: 'Използваме бисквитки, за да осигурим най-доброто изживяване на нашия уебсайт. Продължавайки да посещавате този сайт, вие се съгласявате с използването на бисквитки.',
      accept: 'Приемам'
    },
    footer: {
      companyDescription: 'Надеждни логистични решения за вашия бизнес. Международен и вътрешен транспорт с високо качество.',
      quickLinks: 'Бързи връзки',
      services: 'Услуги',
      about: 'За нас',
      careers: 'Кариери',
      contacts: 'Контакти',
      contactTitle: 'Контакти',
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Имейл',
      copyright: '© 2026 TransGroup VVT. Всички права запазени.',
      createdBy: 'Създадено от H&M WsPro',
      autoParking: 'Авто Паркинг',
      gallery: 'Галерия',
      industries: 'Индустрии',
      certificates: 'Сертификати'
    },
    industries: {
      hero: {
        title: 'Индустрии',
        subtitle: 'Специализирани логистични решения за различни индустрии и сектори'
      },
      cta: {
        title: 'Нуждаете се от логистика за вашия сектор?',
        description: 'Свържете се с нас за персонализирано решение за вашия бизнес',
        button: 'Запитване за оферта'
      },
      services: 'Услуги:',
      stats: {
        clients: 'Клиенти',
        deliveries: 'Доставки',
        satisfaction: 'Удовлетвореност'
      },
      items: {
        automotive: {
          name: 'Автомобилна индустрия',
          description: 'Специализирани логистични решения за автомобилната индустрия – транспорт на автомобили, резервни части и компоненти.',
          services: ['Транспорт на леки коли', 'Резервни части', 'Компоненти за производство', 'Just-in-time доставки']
        },
        retail: {
          name: 'Търговия и ритейл',
          description: 'Оптимизирани логистични вериги за търговски и ритейл компании с фокус върху бързина и точност.',
          services: ['Дистрибуция до магазини', 'Крос-докинг', 'Намаляване на наличности', 'Електронна търговия']
        },
        manufacturing: {
          name: 'Производство',
          description: 'Цялостна логистика за производствени предприятия – от суровини до готова продукция.',
          services: ['Суровини и материали', 'Междинни продукти', 'Готова продукция', 'Международни доставки']
        },
        fmcg: {
          name: 'FMCG',
          description: 'Специализиран транспорт за бързооборотни стоки с температурно контролирани превози.',
          services: ['Хранителни продукти', 'Напитки', 'Битова химия', 'Лекарства']
        },
        ecommerce: {
          name: 'Електронна търговия',
          description: 'Ефективни логистични решения за онлайн търговци с фокус върху последната миля доставка.',
          services: ['Последна миля доставка', 'Връщане на стоки', 'Складиране', 'Упаковка']
        },
        construction: {
          name: 'Строителство',
          description: 'Тежкотоварни превози и специализиран транспорт за строителната индустрия.',
          services: ['Строителни материали', 'Тежка техника', 'Извънгабаритни товари', 'Опасни материали']
        }
      }
    },
    autoParking: {
      hero: {
        title: 'Авто паркинг',
        subtitle: 'Охраняем автопаркинг с модерна инфраструктура и денонощно видеонаблюдение'
      },
      services: {
        title: 'Нашите услуги',
        subtitle: 'Пълно обслужване за вашия автомобил по време на престой',
        items: {
          security: {
            name: 'Охраняем паркинг',
            description: '24/7 охрана с професионален екип и модерно видеонаблюдение',
            features: ['Кръглосъчно наблюдение', 'Контролиран достъп', 'Охрана на периметъра']
          },
          maintenance: {
            name: 'Техническо обслужване',
            description: 'Възможност за основен ремонт и поддръжка на вашия автомобил',
            features: ['Диагностика', 'Ремонтни дейности', 'Подмяна на части']
          },
          cleaning: {
            name: 'Митене и почистване',
            description: 'Професионално почистване на автомобили преди и след транспорт',
            features: ['Вътрешно почистване', 'Външно измиване', 'Дезинфекция']
          },
          storage: {
            name: 'Складиране на части',
            description: 'Сигурно съхранение на резервни части и оборудване',
            features: ['Контролирана среда', 'Организирано съхранение', 'Бърз достъп']
          }
        }
      },
      facilities: {
        title: 'Инфраструктура',
        subtitle: 'Съвременни съоръжения за сигурно съхранение на вашия автомобил',
        items: {
          covered: { name: 'Покрити паркоместа', count: '200+', description: 'Защита от атмосферни влияния' },
          open: { name: 'Открити паркоместа', count: '500+', description: 'За временно паркиране' },
          workshops: { name: 'Сервизни халета', count: '3', description: 'За ремонт и поддръжка' },
          office: { name: 'Административна сграда', count: '1', description: 'Служби и администрация' }
        }
      },
      security: {
        title: 'Сигурност и контрол',
        features: {
          video: { title: 'Видеонаблюдение 24/7', description: 'Над 100 камери с висока резолюция покриват цялата територия' },
          access: { title: 'Контролиран достъп', description: 'Електронни пропуски и регистрация на всички посетители' },
          guards: { title: 'Професионална охрана', description: 'Кръглосъчни патрули и бързо реагиране при инциденти' },
          fire: { title: 'Система за пожарна безопасност', description: 'Автоматична пожарогасителна система и датчици за дим' }
        },
        stats: {
          thefts: { value: '0', label: 'Кражи през 2024' },
          monitoring: { value: '24/7', label: 'Видеонаблюдение' },
          cameras: { value: '100+', label: 'Камери' },
          guards: { value: '15', label: 'Охранители' }
        }
      },
      pricing: {
        title: 'Цени',
        subtitle: 'Конкурентни цени с възможност за намаления при дългосрочни договори',
        items: {
          daily: { service: 'Дневно паркиране', price: '15 лв/ден', description: 'За леки автомобили и малки товарни' },
          weekly: { service: 'Седмично паркиране', price: '80 лв/седмица', description: 'Намаление 15% при седмично плащане' },
          monthly: { service: 'Месечно паркиране', price: '250 лв/месец', description: 'Намаление 30% при месечно плащане' },
          longterm: { service: 'Дългосрочно съхранение', price: 'По договаряне', description: 'Индивидуални цени за сезонно съхранение' }
        }
      },
      cta: {
        title: 'Резервирайте място',
        description: 'Свържете се с нас за резервация и допълнителна информация',
        button: 'Запитване за резервация'
      }
    },
    gallery: {
      hero: {
        title: 'Галерия',
        subtitle: 'Реални кадри от нашата работа, транспортни операции и логистични процеси'
      },
      video: {
        title: 'Нашата работа във видео',
        subtitle: 'Вижте как организираме и извършваме транспортните операции'
      }
    },
    careers: {
      hero: {
        title: 'Кариерно развитие',
        subtitle: 'Присъединете се към нашия екип и станете част от динамична логистична среда'
      },
      whyJoin: {
        title: 'Защо да се присъедините към нас?',
        subtitle: 'Предлагаме възможности за професионално развитие в една от водещите логистични компании'
      },
      positions: {
        title: 'Отворени позиции',
        subtitle: 'Актуални възможности за работа в нашия екип',
        items: [
          {
            title: 'Шофьор на тежкотоварен автомобил',
            type: 'Пълно работно време',
            location: 'София',
            requirements: [
              'Професионална шофьорска книжка категория C+E',
              'Опит в международния транспорт',
              'ADR сертификат за опасни товари',
              'Отговорност и точност'
            ],
            benefits: ['Конкурентно заплащане', 'Допълнителни възнаграждения', 'Социални придобивки', 'Обучение и развитие']
          },
          {
            title: 'Логистици',
            type: 'Пълно работно време',
            location: 'София',
            requirements: [
              'Висше образование по логистика или транспорт',
              'Опит в организация на товари',
              'Познания по митнически процедури',
              'Добри комуникативни умения'
            ],
            benefits: ['Динамична работа', 'Отговорни задачи', 'Екип от професионалисти', 'Възможности за развитие']
          },
          {
            title: 'Специалист по безопасност',
            type: 'Пълно работно време',
            location: 'София',
            requirements: [
              'Опит в областта на безопасността',
              'Познания по OHSAS стандарти',
              'Организаторски способности',
              'Сертификати за безопасност'
            ],
            benefits: ['Важна роля в компанията', 'Професионално развитие', 'Стабилна позиция', 'Отлични условия']
          },
          {
            title: 'Механик',
            type: 'Пълно работно време',
            location: 'База София',
            requirements: [
              'Образование по механика',
              'Опит с товарни автомобили',
              'Познания по електроника',
              'Сертификати за квалификация'
            ],
            benefits: ['Техническа поддръжка', 'Модерно оборудване', 'Обучение', 'Стабилна работа']
          }
        ]
      },
      process: {
        title: 'Процес на кандидатстване',
        steps: [
          { step: '1', title: 'Кандидатствай', description: 'Изпрати CV и мотивационно писмо' },
          { step: '2', title: 'Интервю', description: 'Първоначален разговор с HR' },
          { step: '3', title: 'Тестове', description: 'Технически тест и practically изпитване' },
          { step: '4', title: 'Започни', description: 'Добре дошъл в нашия екип!' }
        ]
      },
      labels: {
        requirements: 'Изисквания:',
        benefits: 'Предимства:',
        apply: 'Кандидатствай',
        fullTime: 'Пълно работно време',
        location: 'София',
        baseLocation: 'База София'
      },
      benefits: {
        items: [
          {
            title: 'Конкурентно заплащане',
            description: 'Предлагаме заплати над средните за бранша, допълнителни възнаграждения и бонуси'
          },
          {
            title: 'Социални придобивки',
            description: 'Допълнително здравно осигуряване, карта за храна, ваучери за почивка'
          },
          {
            title: 'Обучение и развитие',
            description: 'Непрекъснато професионално развитие, курсове и сертификати'
          },
          {
            title: 'Съвременни условия',
            description: 'Модерни офиси, техника и работно обкръжение'
          },
          {
            title: 'Работно време',
            description: 'Гъвкаво работно време, възможност за дистанционна работа'
          },
          {
            title: 'Екип и култура',
            description: 'Приятелска атмосфера, екипни събития и възможности за изява'
          }
        ]
      },
      cta: {
        text: 'Нямате подходяща позиция? Изпратете ни автобиография и ще се свържем с вас при възможност.',
        button: 'Изпрати CV'
      }
    },
    certificates: {
      hero: {
        title: 'Сертификати',
        subtitle: 'Нашата дейност е сертифицирана по международни стандарти за качество и безопасност'
      },
      certificates: {
        title: 'Международни сертификати',
        subtitle: 'Гарантираме най-високи стандарти на качество, безопасност и екологичност'
      },
      licenses: {
        title: 'Лицензи и разрешения',
        subtitle: 'Всички необходими лицензи за извършване на транспортна дейност'
      },
      quality: {
        title: 'Качество и безопасност',
        items: [
          {
            title: 'Регулярни одити',
            description: 'Провеждаме вътрешни и външни одити за поддържане на стандартите'
          },
          {
            title: 'Технически прегледи',
            description: 'Всички превозни средства преминават през ежедневни и периодични прегледи'
          },
          {
            title: 'Обучение на персонала',
            description: 'Регулярни обучения по безопасност, качество и екологични стандарти'
          },
          {
            title: 'Мониторинг на показатели',
            description: 'Непрекъснато следим KPI показатели за качество на услугите'
          }
        ],
        results: {
          title: 'Нашите резултати',
          stats: [
            { value: '99.8%', label: 'Навременни доставки' },
            { value: '0.02%', label: 'Инциденти' },
            { value: '100%', label: 'Сертифицирани шофьори' },
            { value: 'ISO', label: 'Сертифицирана компания' }
          ]
        }
      },
      labels: {
        issuer: 'Издател:',
        validUntil: 'Валиден до:',
        scope: 'Обхват:',
        number: 'Номер:'
      },
      certificatesList: {
        items: [
          {
            name: 'ISO 9001:2015',
            description: 'Система за управление на качеството',
            issuer: 'International Organization for Standardization',
            validUntil: '2027',
            scope: 'Логистични и транспортни услуги'
          },
          {
            name: 'ISO 14001:2015',
            description: 'Система за управление на околната среда',
            issuer: 'International Organization for Standardization',
            validUntil: '2027',
            scope: 'Транспортни и складови дейности'
          },
          {
            name: 'ISO 45001:2018',
            description: 'Система за управление на здравето и безопасността',
            issuer: 'International Organization for Standardization',
            validUntil: '2027',
            scope: 'Всички дейности на компанията'
          },
          {
            name: 'ADR 2023',
            description: 'Сертификат за транспорт на опасни товари',
            issuer: 'Министерство на транспорта',
            validUntil: '2025',
            scope: 'Транспорт на опасни материали клас 1-9'
          },
          {
            name: 'TPC сертификат',
            description: 'Транспорт на хранителни продукти',
            issuer: 'Министерство на земеделието',
            validUntil: '2026',
            scope: 'Транспорт на хранителни стоки'
          },
          {
            name: 'AEO Certificate',
            description: 'Authorised Economic Operator',
            issuer: 'Митническа агенция',
            validUntil: '2028',
            scope: 'Международна търговия и митнически процедури'
          }
        ]
      },
      licensesList: {
        items: [
          {
            name: 'Лиценз за обществен превоз на товари',
            number: 'Л-12345/2023',
            issuer: 'Изпълнителна агенция "Автомобилна администрация"',
            validUntil: '2028'
          },
          {
            name: 'Лиценз за международен транспорт',
            number: 'МТ-67890/2023',
            issuer: 'Министерство на транспорта',
            validUntil: '2027'
          },
          {
            name: 'Лиценз за спедиция',
            number: 'СП-11111/2023',
            issuer: 'Министерство на транспорта',
            validUntil: '2027'
          }
        ]
      }
    }
  },
  'en-GB': {
    nav: {
      services: 'Services',
      fleet: 'Fleet & Facilities',
      about: 'About',
      contact: 'Contact',
      quote: 'Request Quote',
      menu: 'Menu',
      selectLanguage: 'Select Language:',
      more: 'More',
      autoParking: 'Auto Parking',
      gallery: 'Gallery',
      industries: 'Industries',
      careers: 'Careers',
      certificates: 'Certificates'
    },
    hero: {
      headline: 'Frigo Logistics & International Spedition',
      subheadline: 'Temperature-controlled transport, warehousing, groupage, and international freight solutions across Bulgaria and Europe.',
      bullets: [
        'ADR & Pharmaceutical Licensed',
        'Groupage Shipments',
        'GPS-Tracked Transport',
        '24/7 TIR Parking'
      ],
      ctaPrimary: 'Request a Quote',
      ctaSecondary: 'Contact Us'
    },
    services: {
      title: 'Our Services',
      items: {
        frigo: 'Refrigerated Transport',
        dry: 'Dry Goods Logistics',
        warehousing: 'Warehousing (Dry & Cold)',
        crossdock: 'Transshipment & Cross-Docking',
        groupage: 'Groupage Shipments',
        spedition: 'International Spedition',
        adr: 'ADR & Pharmaceutical Transport',
        parking: 'TIR Parking 24/7'
      }
    },
    fleet: {
      title: 'Fleet & Facilities',
      items: {
        trucks: 'Refrigerated trucks',
        trailers: 'Curtain-side trailers',
        warehouses: 'Warehouses across Bulgaria',
        security: 'Secure trailer locking systems'
      }
    },
    about: {
      title: 'About Us',
      logistics: 'Logistics operated by Trans Group VVT OOD',
      spedition: 'Spedition operated by TRANS GROUP VVT-1 OOD',
      license: 'International freight license',
      pharma: 'Pharmaceutical cargo license',
      gps: 'Intelligent GPS tracking for every shipment'
    },
    certifications: {
      adr: 'ADR Agreement',
      pharma: 'Pharmaceutical Transport License',
      license: 'International Freight License'
    },
    contact: {
      title: 'Contact / Request a Quote',
      infoTitle: 'Contact Information',
      address: '6 Osvobozhdenie Blvd',
      form: {
        company: 'Company',
        person: 'Contact Person',
        contact: 'Email / Phone',
        cargo: 'Cargo Type',
        message: 'Message',
        submit: 'Send Request'
      }
    },
    cookieBanner: {
      message: 'We use cookies to ensure you get the best experience on our website. By continuing to visit this site you agree to our use of cookies.',
      accept: 'Accept'
    },
    footer: {
      companyDescription: 'Reliable logistics solutions for your business. International and domestic transport with high quality.',
      quickLinks: 'Quick Links',
      services: 'Services',
      about: 'About Us',
      careers: 'Careers',
      contacts: 'Contact',
      contactTitle: 'Contact',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      copyright: '© 2026 TransGroup VVT. All rights reserved.',
      createdBy: 'Created by H&M WsPro',
      autoParking: 'Auto Parking',
      gallery: 'Gallery',
      industries: 'Industries',
      certificates: 'Certificates'
    },
    industries: {
      hero: {
        title: 'Industries',
        subtitle: 'Specialized logistics solutions for various industries and sectors'
      },
      cta: {
        title: 'Need logistics for your sector?',
        description: 'Contact us for a personalized solution for your business',
        button: 'Request a Quote'
      },
      services: 'Services:',
      stats: {
        clients: 'Clients',
        deliveries: 'Deliveries',
        satisfaction: 'Satisfaction'
      },
      items: {
        automotive: {
          name: 'Automotive Industry',
          description: 'Specialized logistics solutions for the automotive industry – transport of vehicles, spare parts and components.',
          services: ['Car transport', 'Spare parts', 'Production components', 'Just-in-time deliveries']
        },
        retail: {
          name: 'Trade and Retail',
          description: 'Optimized supply chains for trade and retail companies with focus on speed and accuracy.',
          services: ['Store distribution', 'Cross-docking', 'Inventory reduction', 'E-commerce']
        },
        manufacturing: {
          name: 'Manufacturing',
          description: 'Complete logistics for manufacturing enterprises – from raw materials to finished products.',
          services: ['Raw materials', 'Intermediate products', 'Finished products', 'International deliveries']
        },
        fmcg: {
          name: 'FMCG',
          description: 'Specialized transport for fast-moving consumer goods with temperature-controlled shipments.',
          services: ['Food products', 'Beverages', 'Household chemicals', 'Medicines']
        },
        ecommerce: {
          name: 'E-commerce',
          description: 'Efficient logistics solutions for online retailers with focus on last-mile delivery.',
          services: ['Last-mile delivery', 'Returns', 'Warehousing', 'Packaging']
        },
        construction: {
          name: 'Construction',
          description: 'Heavy cargo transport and specialized transport for the construction industry.',
          services: ['Construction materials', 'Heavy machinery', 'Oversized cargo', 'Hazardous materials']
        }
      }
    },
    autoParking: {
      hero: {
        title: 'Auto Parking',
        subtitle: 'Guarded car park with modern infrastructure and 24/7 video surveillance'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Complete service for your vehicle during parking',
        items: {
          security: {
            name: 'Guarded Parking',
            description: '24/7 security with professional team and modern video surveillance',
            features: ['Round-the-clock monitoring', 'Controlled access', 'Perimeter security']
          },
          maintenance: {
            name: 'Technical Service',
            description: 'Possibility for major repairs and maintenance of your vehicle',
            features: ['Diagnostics', 'Repair work', 'Parts replacement']
          },
          cleaning: {
            name: 'Washing and Cleaning',
            description: 'Professional cleaning of vehicles before and after transport',
            features: ['Interior cleaning', 'Exterior washing', 'Disinfection']
          },
          storage: {
            name: 'Parts Storage',
            description: 'Secure storage of spare parts and equipment',
            features: ['Controlled environment', 'Organized storage', 'Quick access']
          }
        }
      },
      facilities: {
        title: 'Infrastructure',
        subtitle: 'Modern facilities for secure storage of your vehicle',
        items: {
          covered: { name: 'Covered Parking Spaces', count: '200+', description: 'Protection from weather' },
          open: { name: 'Open Parking Spaces', count: '500+', description: 'For temporary parking' },
          workshops: { name: 'Service Workshops', count: '3', description: 'For repairs and maintenance' },
          office: { name: 'Administrative Building', count: '1', description: 'Services and administration' }
        }
      },
      security: {
        title: 'Security and Control'
      },
      pricing: {
        title: 'Pricing',
        subtitle: 'Competitive prices with discounts for long-term contracts',
        items: {
          daily: { service: 'Daily Parking', price: '15 BGN/day', description: 'For cars and small trucks' },
          weekly: { service: 'Weekly Parking', price: '80 BGN/week', description: '15% discount for weekly payment' },
          monthly: { service: 'Monthly Parking', price: '250 BGN/month', description: '30% discount for monthly payment' },
          longterm: { service: 'Long-term Storage', price: 'On agreement', description: 'Individual prices for seasonal storage' }
        }
      },
      cta: {
        title: 'Reserve a Spot',
        description: 'Contact us for reservation and additional information',
        button: 'Request Reservation'
      }
    },
    gallery: {
      hero: {
        title: 'Gallery',
        subtitle: 'Real footage from our work, transport operations and logistics processes'
      },
      video: {
        title: 'Our Work in Video',
        subtitle: 'See how we organize and perform transport operations'
      }
    },
    careers: {
      hero: {
        title: 'Career Development',
        subtitle: 'Join our team and become part of a dynamic logistics environment'
      },
      whyJoin: {
        title: 'Why Join Us?',
        subtitle: 'We offer opportunities for professional development in one of the leading logistics companies'
      },
      positions: {
        title: 'Open Positions',
        subtitle: 'Current job opportunities in our team',
        items: [
          {
            title: 'Heavy Truck Driver',
            type: 'Full Time',
            location: 'Sofia',
            requirements: [
              'Professional driver\'s license category C+E',
              'Experience in international transport',
              'ADR certificate for dangerous goods',
              'Responsibility and accuracy'
            ],
            benefits: ['Competitive salary', 'Additional rewards', 'Social benefits', 'Training and development']
          },
          {
            title: 'Logistics Specialist',
            type: 'Full Time',
            location: 'Sofia',
            requirements: [
              'Higher education in logistics or transport',
              'Experience in cargo organization',
              'Knowledge of customs procedures',
              'Good communication skills'
            ],
            benefits: ['Dynamic work', 'Responsible tasks', 'Team of professionals', 'Development opportunities']
          },
          {
            title: 'Safety Specialist',
            type: 'Full Time',
            location: 'Sofia',
            requirements: [
              'Experience in safety field',
              'Knowledge of OHSAS standards',
              'Organizational skills',
              'Safety certificates'
            ],
            benefits: ['Important role in company', 'Professional development', 'Stable position', 'Excellent conditions']
          },
          {
            title: 'Mechanic',
            type: 'Full Time',
            location: 'Sofia Base',
            requirements: [
              'Education in mechanics',
              'Experience with trucks',
              'Knowledge of electronics',
              'Qualification certificates'
            ],
            benefits: ['Technical support', 'Modern equipment', 'Training', 'Stable work']
          }
        ]
      },
      process: {
        title: 'Application Process',
        steps: [
          { step: '1', title: 'Apply', description: 'Send CV and cover letter' },
          { step: '2', title: 'Interview', description: 'Initial conversation with HR' },
          { step: '3', title: 'Tests', description: 'Technical test and practical assessment' },
          { step: '4', title: 'Start', description: 'Welcome to our team!' }
        ]
      },
      labels: {
        requirements: 'Requirements:',
        benefits: 'Benefits:',
        apply: 'Apply',
        fullTime: 'Full Time',
        location: 'Sofia',
        baseLocation: 'Sofia Base'
      },
      benefits: {
        items: [
          {
            title: 'Competitive Salary',
            description: 'We offer salaries above industry average, additional rewards and bonuses'
          },
          {
            title: 'Social Benefits',
            description: 'Additional health insurance, meal card, vacation vouchers'
          },
          {
            title: 'Training and Development',
            description: 'Continuous professional development, courses and certificates'
          },
          {
            title: 'Modern Conditions',
            description: 'Modern offices, technology and work environment'
          },
          {
            title: 'Working Hours',
            description: 'Flexible working hours, possibility for remote work'
          },
          {
            title: 'Team and Culture',
            description: 'Friendly atmosphere, team events and opportunities for expression'
          }
        ]
      },
      cta: {
        text: 'No suitable position? Send us your CV and we will contact you when an opportunity arises.',
        button: 'Send CV'
      }
    },
    certificates: {
      hero: {
        title: 'Certificates',
        subtitle: 'Our operations are certified according to international quality and safety standards'
      },
      certificates: {
        title: 'International Certificates',
        subtitle: 'We guarantee the highest standards of quality, safety and environmental protection'
      },
      licenses: {
        title: 'Licenses and Permits',
        subtitle: 'All necessary licenses for transport operations'
      },
      quality: {
        title: 'Quality and Safety',
        items: [
          {
            title: 'Regular Audits',
            description: 'We conduct internal and external audits to maintain standards'
          },
          {
            title: 'Technical Inspections',
            description: 'All vehicles undergo daily and periodic inspections'
          },
          {
            title: 'Staff Training',
            description: 'Regular training on safety, quality and environmental standards'
          },
          {
            title: 'Performance Monitoring',
            description: 'We continuously monitor KPI indicators for service quality'
          }
        ],
        results: {
          title: 'Our Results',
          stats: [
            { value: '99.8%', label: 'On-time Deliveries' },
            { value: '0.02%', label: 'Incidents' },
            { value: '100%', label: 'Certified Drivers' },
            { value: 'ISO', label: 'Certified Company' }
          ]
        }
      },
      labels: {
        issuer: 'Issuer:',
        validUntil: 'Valid Until:',
        scope: 'Scope:',
        number: 'Number:'
      },
      certificatesList: {
        items: [
          {
            name: 'ISO 9001:2015',
            description: 'Quality Management System',
            issuer: 'International Organization for Standardization',
            validUntil: '2027',
            scope: 'Logistics and Transport Services'
          },
          {
            name: 'ISO 14001:2015',
            description: 'Environmental Management System',
            issuer: 'International Organization for Standardization',
            validUntil: '2027',
            scope: 'Transport and Warehouse Activities'
          },
          {
            name: 'ISO 45001:2018',
            description: 'Occupational Health and Safety Management System',
            issuer: 'International Organization for Standardization',
            validUntil: '2027',
            scope: 'All Company Activities'
          },
          {
            name: 'ADR 2023',
            description: 'Certificate for Transport of Dangerous Goods',
            issuer: 'Ministry of Transport',
            validUntil: '2025',
            scope: 'Transport of Dangerous Materials Class 1-9'
          },
          {
            name: 'TPC Certificate',
            description: 'Food Products Transport',
            issuer: 'Ministry of Agriculture',
            validUntil: '2026',
            scope: 'Food Transport'
          },
          {
            name: 'AEO Certificate',
            description: 'Authorised Economic Operator',
            issuer: 'Customs Agency',
            validUntil: '2028',
            scope: 'International Trade and Customs Procedures'
          }
        ]
      },
      licensesList: {
        items: [
          {
            name: 'Public Cargo Transport License',
            number: 'L-12345/2023',
            issuer: 'Executive Agency "Automotive Administration"',
            validUntil: '2028'
          },
          {
            name: 'International Transport License',
            number: 'MT-67890/2023',
            issuer: 'Ministry of Transport',
            validUntil: '2027'
          },
          {
            name: 'Spedition License',
            number: 'SP-11111/2023',
            issuer: 'Ministry of Transport',
            validUntil: '2027'
          }
        ]
      }
    }
  },
  pl: {
    nav: {
      services: 'Usługi',
      fleet: 'Flota i Obiekty',
      about: 'O Nas',
      contact: 'Kontakt',
      quote: 'Zapytanie',
      menu: 'Menu',
      selectLanguage: 'Wybierz język:',
      more: 'Więcej',
      autoParking: 'Parking Samochodowy',
      gallery: 'Galeria',
      industries: 'Przemysły',
      careers: 'Kariera',
      certificates: 'Certyfikaty'
    },
    hero: {
      headline: 'Logistyka Chłodnicza & Spedycja Międzynarodowa',
      subheadline: 'Transport w kontrolowanej temperaturze, magazynowanie, drobnica i międzynarodowe rozwiązania spedycyjne w Bułgarii i Europie.',
      bullets: [
        'Licencje ADR i Farmaceutyczne',
        'Przesyłki drobnicowe',
        'Transport monitorowany GPS',
        'Parking TIR 24/7'
      ],
      ctaPrimary: 'Poproś o wycenę',
      ctaSecondary: 'Skontaktuj się z nami'
    },
    services: {
      title: 'Nasze Usługi',
      items: {
        frigo: 'Transport Chłodniczy',
        dry: 'Logistyka Towarów Suchych',
        warehousing: 'Magazynowanie (Suche i Chłodne)',
        crossdock: 'Przeładunek i Cross-Docking',
        groupage: 'Przesyłki Drobnicowe',
        spedition: 'Spedycja Międzynarodowa',
        adr: 'Transport ADR i Farmaceutyczny',
        parking: 'Parking TIR 24/7'
      }
    },
    fleet: {
      title: 'Flota i Obiekty',
      items: {
        trucks: 'Ciężarówki chłodnie',
        trailers: 'Naczepy kurtynowe',
        warehouses: 'Magazyny w całej Bułgarii',
        security: 'Systemy zabezpieczeń naczep'
      }
    },
    about: {
      title: 'O Nas',
      logistics: 'Logistyka obsługiwana przez Trans Group VVT OOD',
      spedition: 'Spedycja obsługiwana przez TRANS GROUP VVT-1 OOD',
      license: 'Licencja na przewóz międzynarodowy',
      pharma: 'Licencja na przewóz farmaceutyków',
      gps: 'Inteligentne śledzenie GPS dla każdej przesyłki'
    },
    certifications: {
      adr: 'Umowa ADR',
      pharma: 'Licencja Transportowa Farmaceutyczna',
      license: 'Licencja Spedycyjna Międzynarodowa'
    },
    contact: {
      title: 'Kontakt / Zapytanie',
      infoTitle: 'Informacje kontaktowe',
      address: 'ul. Osvobozhdenie 6',
      form: {
        company: 'Firma',
        person: 'Osoba kontaktowa',
        contact: 'Email / Telefon',
        cargo: 'Rodzaj ładunku',
        message: 'Wiadomość',
        submit: 'Wyślij zapytanie'
      }
    },
    cookieBanner: {
      message: 'Używamy plików cookie, aby zapewnić najlepsze wrażenia na naszej stronie internetowej. Kontynuując odwiedzanie tej strony, zgadzasz się na używanie plików cookie.',
      accept: 'Akceptuję'
    },
    footer: {
      companyDescription: 'Niezawodne rozwiązania logistyczne dla Twojej firmy. Transport międzynarodowy i krajowy wysokiej jakości.',
      quickLinks: 'Szybkie linki',
      services: 'Usługi',
      about: 'O nas',
      careers: 'Kariera',
      contacts: 'Kontakt',
      contactTitle: 'Kontakt',
      address: 'Adres',
      phone: 'Telefon',
      email: 'Email',
      copyright: '© 2026 TransGroup VVT. Wszelkie prawa zastrzeżone.',
      createdBy: 'Stworzone przez H&M WsPro',
      autoParking: 'Parking Samochodowy',
      gallery: 'Galeria',
      industries: 'Przemysły',
      certificates: 'Certyfikaty'
    },
    industries: {
      hero: {
        title: 'Przemysły',
        subtitle: 'Specjalistyczne rozwiązania logistyczne dla różnych branż i sektorów'
      },
      cta: {
        title: 'Potrzebujesz logistyki dla swojej branży?',
        description: 'Skontaktuj się z nami, aby uzyskać spersonalizowane rozwiązanie dla Twojej firmy',
        button: 'Zapytaj o wycenę'
      },
      services: 'Usługi:',
      stats: {
        clients: 'Klienci',
        deliveries: 'Dostawy',
        satisfaction: 'Zadowolenie'
      },
      items: {
        automotive: {
          name: 'Przemysł Motoryzacyjny',
          description: 'Specjalistyczne rozwiązania logistyczne dla przemysłu motoryzacyjnego – transport pojazdów, części zamiennych i komponentów.',
          services: ['Transport samochodów', 'Części zamienne', 'Komponenty produkcyjne', 'Dostawy just-in-time']
        },
        retail: {
          name: 'Handel i Dystrybucja',
          description: 'Zoptymalizowane łańcuchy dostaw dla firm handlowych i detalicznych z naciskiem na szybkość i dokładność.',
          services: ['Dystrybucja do sklepów', 'Cross-docking', 'Redukcja zapasów', 'E-commerce']
        },
        manufacturing: {
          name: 'Produkcja',
          description: 'Kompleksowa logistyka dla przedsiębiorstw produkcyjnych – od surowców do gotowych produktów.',
          services: ['Surowce i materiały', 'Produkty pośrednie', 'Gotowe produkty', 'Dostawy międzynarodowe']
        },
        fmcg: {
          name: 'FMCG',
          description: 'Specjalistyczny transport dla szybko rotujących towarów konsumpcyjnych z kontrolowaną temperaturą.',
          services: ['Produkty spożywcze', 'Napoje', 'Chemia gospodarcza', 'Leki']
        },
        ecommerce: {
          name: 'E-commerce',
          description: 'Skuteczne rozwiązania logistyczne dla sprzedawców online z naciskiem na dostawę ostatniej mili.',
          services: ['Dostawa ostatniej mili', 'Zwroty', 'Magazynowanie', 'Pakowanie']
        },
        construction: {
          name: 'Budownictwo',
          description: 'Transport ciężki i specjalistyczny transport dla branży budowlanej.',
          services: ['Materiały budowlane', 'Ciężki sprzęt', 'Ładunki ponadgabarytowe', 'Materiały niebezpieczne']
        }
      }
    },
    autoParking: {
      hero: {
        title: 'Parking Samochodowy',
        subtitle: 'Strzeżony parking z nowoczesną infrastrukturą i monitoringiem wideo 24/7'
      },
      services: {
        title: 'Nasze Usługi',
        subtitle: 'Kompleksowa obsługa Twojego pojazdu podczas postoju',
        items: {
          security: {
            name: 'Strzeżony Parking',
            description: 'Ochrona 24/7 z profesjonalnym zespołem i nowoczesnym monitoringiem wideo',
            features: ['Całodobowy monitoring', 'Kontrolowany dostęp', 'Ochrona obwodowa']
          },
          maintenance: {
            name: 'Serwis Techniczny',
            description: 'Możliwość napraw głównych i konserwacji pojazdu',
            features: ['Diagnostyka', 'Prace naprawcze', 'Wymiana części']
          },
          cleaning: {
            name: 'Mycie i Czyszczenie',
            description: 'Profesjonalne czyszczenie pojazdów przed i po transporcie',
            features: ['Czyszczenie wnętrza', 'Mycie zewnętrzne', 'Dezynfekcja']
          },
          storage: {
            name: 'Przechowywanie Części',
            description: 'Bezpieczne przechowywanie części zamiennych i sprzętu',
            features: ['Kontrolowane środowisko', 'Zorganizowane przechowywanie', 'Szybki dostęp']
          }
        }
      },
      facilities: {
        title: 'Infrastruktura',
        subtitle: 'Nowoczesne obiekty do bezpiecznego przechowywania pojazdu',
        items: {
          covered: { name: 'Zadaszone Miejsca Parkingowe', count: '200+', description: 'Ochrona przed warunkami atmosferycznymi' },
          open: { name: 'Otwarte Miejsca Parkingowe', count: '500+', description: 'Do tymczasowego parkowania' },
          workshops: { name: 'Warsztaty Serwisowe', count: '3', description: 'Do napraw i konserwacji' },
          office: { name: 'Budynek Administracyjny', count: '1', description: 'Usługi i administracja' }
        }
      },
      security: {
        title: 'Bezpieczeństwo i Kontrola'
      },
      pricing: {
        title: 'Cennik',
        subtitle: 'Konkurencyjne ceny z możliwością zniżek przy długoterminowych umowach',
        items: {
          daily: { service: 'Parking Dzienny', price: '15 BGN/dzień', description: 'Dla samochodów osobowych i małych ciężarówek' },
          weekly: { service: 'Parking Tygodniowy', price: '80 BGN/tydzień', description: 'Zniżka 15% przy płatności tygodniowej' },
          monthly: { service: 'Parking Miesięczny', price: '250 BGN/miesiąc', description: 'Zniżka 30% przy płatności miesięcznej' },
          longterm: { service: 'Przechowywanie Długoterminowe', price: 'Do uzgodnienia', description: 'Indywidualne ceny za przechowywanie sezonowe' }
        }
      },
      cta: {
        title: 'Zarezerwuj Miejsce',
        description: 'Skontaktuj się z nami w sprawie rezerwacji i dodatkowych informacji',
        button: 'Zapytaj o Rezerwację'
      }
    },
    gallery: {
      hero: {
        title: 'Galeria',
        subtitle: 'Prawdziwe ujęcia z naszej pracy, operacji transportowych i procesów logistycznych'
      },
      video: {
        title: 'Nasza Praca w Wideo',
        subtitle: 'Zobacz, jak organizujemy i wykonujemy operacje transportowe'
      }
    },
    careers: {
      hero: {
        title: 'Rozwój Kariery',
        subtitle: 'Dołącz do naszego zespołu i zostań częścią dynamicznego środowiska logistycznego'
      },
      whyJoin: {
        title: 'Dlaczego Dołączyć do Nas?',
        subtitle: 'Oferujemy możliwości rozwoju zawodowego w jednej z wiodących firm logistycznych'
      },
      positions: {
        title: 'Otwarte Stanowiska',
        subtitle: 'Aktualne możliwości pracy w naszym zespole',
        items: [
          {
            title: 'Kierowca Ciężarówki',
            type: 'Pełny etat',
            location: 'Sofia',
            requirements: [
              'Prawo jazdy kategorii C+E',
              'Doświadczenie w transporcie międzynarodowym',
              'Certyfikat ADR dla towarów niebezpiecznych',
              'Odpowiedzialność i dokładność'
            ],
            benefits: ['Konkurencyjne wynagrodzenie', 'Dodatkowe nagrody', 'Benefity społeczne', 'Szkolenia i rozwój']
          },
          {
            title: 'Specjalista ds. Logistyki',
            type: 'Pełny etat',
            location: 'Sofia',
            requirements: [
              'Wyższe wykształcenie w zakresie logistyki lub transportu',
              'Doświadczenie w organizacji ładunków',
              'Znajomość procedur celnych',
              'Dobre umiejętności komunikacyjne'
            ],
            benefits: ['Dynamiczna praca', 'Odpowiedzialne zadania', 'Zespół profesjonalistów', 'Możliwości rozwoju']
          },
          {
            title: 'Specjalista ds. Bezpieczeństwa',
            type: 'Pełny etat',
            location: 'Sofia',
            requirements: [
              'Doświadczenie w dziedzinie bezpieczeństwa',
              'Znajomość standardów OHSAS',
              'Umiejętności organizacyjne',
              'Certyfikaty bezpieczeństwa'
            ],
            benefits: ['Ważna rola w firmie', 'Rozwój zawodowy', 'Stabilna pozycja', 'Doskonałe warunki']
          },
          {
            title: 'Mechanik',
            type: 'Pełny etat',
            location: 'Baza Sofia',
            requirements: [
              'Wykształcenie w zakresie mechaniki',
              'Doświadczenie z ciężarówkami',
              'Znajomość elektroniki',
              'Certyfikaty kwalifikacyjne'
            ],
            benefits: ['Wsparcie techniczne', 'Nowoczesny sprzęt', 'Szkolenia', 'Stabilna praca']
          }
        ]
      },
      process: {
        title: 'Proces Aplikacji',
        steps: [
          { step: '1', title: 'Aplikuj', description: 'Wyślij CV i list motywacyjny' },
          { step: '2', title: 'Rozmowa', description: 'Wstępna rozmowa z HR' },
          { step: '3', title: 'Testy', description: 'Test techniczny i praktyczna ocena' },
          { step: '4', title: 'Zacznij', description: 'Witamy w naszym zespole!' }
        ]
      },
      labels: {
        requirements: 'Wymagania:',
        benefits: 'Korzyści:',
        apply: 'Aplikuj',
        fullTime: 'Pełny etat',
        location: 'Sofia',
        baseLocation: 'Baza Sofia'
      },
      benefits: {
        items: [
          {
            title: 'Konkurencyjne wynagrodzenie',
            description: 'Oferujemy wynagrodzenia powyżej średniej branżowej, dodatkowe nagrody i premie'
          },
          {
            title: 'Benefity społeczne',
            description: 'Dodatkowe ubezpieczenie zdrowotne, karta żywnościowa, vouchery na wakacje'
          },
          {
            title: 'Szkolenia i rozwój',
            description: 'Ciągły rozwój zawodowy, kursy i certyfikaty'
          },
          {
            title: 'Nowoczesne warunki',
            description: 'Nowoczesne biura, technologia i środowisko pracy'
          },
          {
            title: 'Godziny pracy',
            description: 'Elastyczne godziny pracy, możliwość pracy zdalnej'
          },
          {
            title: 'Zespół i kultura',
            description: 'Przyjazna atmosfera, wydarzenia zespołowe i możliwości wyrażania siebie'
          }
        ]
      },
      cta: {
        text: 'Nie ma odpowiedniego stanowiska? Wyślij nam CV, a skontaktujemy się z Tobą, gdy pojawi się możliwość.',
        button: 'Wyślij CV'
      }
    },
    certificates: {
      hero: {
        title: 'Certyfikaty',
        subtitle: 'Nasza działalność jest certyfikowana zgodnie z międzynarodowymi standardami jakości i bezpieczeństwa'
      },
      certificates: {
        title: 'Certyfikaty Międzynarodowe',
        subtitle: 'Gwarantujemy najwyższe standardy jakości, bezpieczeństwa i ochrony środowiska'
      },
      licenses: {
        title: 'Licencje i Zezwolenia',
        subtitle: 'Wszystkie niezbędne licencje do prowadzenia działalności transportowej'
      },
      quality: {
        title: 'Jakość i Bezpieczeństwo',
        items: [
          {
            title: 'Regularne Audyty',
            description: 'Przeprowadzamy audyty wewnętrzne i zewnętrzne w celu utrzymania standardów'
          },
          {
            title: 'Przeglądy Techniczne',
            description: 'Wszystkie pojazdy przechodzą codzienne i okresowe przeglądy'
          },
          {
            title: 'Szkolenia Personelu',
            description: 'Regularne szkolenia z zakresu bezpieczeństwa, jakości i standardów środowiskowych'
          },
          {
            title: 'Monitorowanie Wskaźników',
            description: 'Ciągle monitorujemy wskaźniki KPI dotyczące jakości usług'
          }
        ],
        results: {
          title: 'Nasze Wyniki',
          stats: [
            { value: '99.8%', label: 'Terminowe Dostawy' },
            { value: '0.02%', label: 'Incydenty' },
            { value: '100%', label: 'Certyfikowani Kierowcy' },
            { value: 'ISO', label: 'Certyfikowana Firma' }
          ]
        }
      },
      labels: {
        issuer: 'Wydawca:',
        validUntil: 'Ważny do:',
        scope: 'Zakres:',
        number: 'Numer:'
      },
      certificatesList: {
        items: [
          {
            name: 'ISO 9001:2015',
            description: 'System Zarządzania Jakością',
            issuer: 'Międzynarodowa Organizacja Normalizacyjna',
            validUntil: '2027',
            scope: 'Usługi Logistyczne i Transportowe'
          },
          {
            name: 'ISO 14001:2015',
            description: 'System Zarządzania Środowiskowego',
            issuer: 'Międzynarodowa Organizacja Normalizacyjna',
            validUntil: '2027',
            scope: 'Działalność Transportowa i Magazynowa'
          },
          {
            name: 'ISO 45001:2018',
            description: 'System Zarządzania Bezpieczeństwem i Higieną Pracy',
            issuer: 'Międzynarodowa Organizacja Normalizacyjna',
            validUntil: '2027',
            scope: 'Wszystkie Działania Firmy'
          },
          {
            name: 'ADR 2023',
            description: 'Certyfikat Transportu Towarów Niebezpiecznych',
            issuer: 'Ministerstwo Transportu',
            validUntil: '2025',
            scope: 'Transport Materiałów Niebezpiecznych Klasa 1-9'
          },
          {
            name: 'Certyfikat TPC',
            description: 'Transport Produktów Spożywczych',
            issuer: 'Ministerstwo Rolnictwa',
            validUntil: '2026',
            scope: 'Transport Żywności'
          },
          {
            name: 'Certyfikat AEO',
            description: 'Autoryzowany Operator Gospodarczy',
            issuer: 'Agencja Celna',
            validUntil: '2028',
            scope: 'Handel Międzynarodowy i Procedury Celne'
          }
        ]
      },
      licensesList: {
        items: [
          {
            name: 'Licencja Publicznego Transportu Towarów',
            number: 'L-12345/2023',
            issuer: 'Agencja Wykonawcza "Administracja Samochodowa"',
            validUntil: '2028'
          },
          {
            name: 'Licencja Transportu Międzynarodowego',
            number: 'MT-67890/2023',
            issuer: 'Ministerstwo Transportu',
            validUntil: '2027'
          },
          {
            name: 'Licencja Spedycji',
            number: 'SP-11111/2023',
            issuer: 'Ministerstwo Transportu',
            validUntil: '2027'
          }
        ]
      }
    }
  },
  el: {
    nav: {
      services: 'Υπηρεσίες',
      fleet: 'Στόλος & Εγκαταστάσεις',
      about: 'Σχετικά',
      contact: 'Επικοινωνία',
      quote: 'Προσφορά',
      menu: 'Μενού',
      selectLanguage: 'Επιλέξτε γλώσσα:',
      more: 'Περισσότερα',
      autoParking: 'Στάθμευση Αυτοκινήτων',
      gallery: 'Γκαλερί',
      industries: 'Βιομηχανίες',
      careers: 'Καριέρα',
      certificates: 'Πιστοποιητικά'
    },
    hero: {
      headline: 'Ψυκτική Λογιστική & Διεθνής Διαμεταφορά',
      subheadline: 'Μεταφορές ελεγχόμενης θερμοκρασίας, αποθήκευση, ομαδικές φορτώσεις και λύσεις διεθνών μεταφορών στη Βουλγαρία και την Ευρώπη.',
      bullets: [
        'Άδεια ADR & Φαρμάκων',
        'Ομαδικές Αποστολές',
        'Μεταφορές με GPS',
        '24/7 Πάρκινγκ TIR'
      ],
      ctaPrimary: 'Ζητήστε Προσφορά',
      ctaSecondary: 'Επικοινωνήστε μαζί μας'
    },
    services: {
      title: 'Οι Υπηρεσίες μας',
      items: {
        frigo: 'Μεταφορές Ψυγείου',
        dry: 'Logistics Ξηρού Φορτίου',
        warehousing: 'Αποθήκευση (Ξηρή & Ψυχρή)',
        crossdock: 'Μεταφόρτωση & Cross-Docking',
        groupage: 'Ομαδικές Αποστολές',
        spedition: 'Διεθνής Διαμεταφορά',
        adr: 'Μεταφορά ADR & Φαρμάκων',
        parking: 'Πάρκινγκ TIR 24/7'
      }
    },
    fleet: {
      title: 'Στόλος & Εγκαταστάσεις',
      items: {
        trucks: 'Φορτηγά ψυγεία',
        trailers: 'Ρυμουλκούμενα κουρτίνας',
        warehouses: 'Αποθήκες σε όλη τη Βουλγαρία',
        security: 'Συστήματα ασφάλισης'
      }
    },
    about: {
      title: 'Σχετικά με εμάς',
      logistics: 'Logistics από την Trans Group VVT OOD',
      spedition: 'Διαμεταφορά από την TRANS GROUP VVT-1 OOD',
      license: 'Διεθνής άδεια μεταφορών',
      pharma: 'Άδεια μεταφοράς φαρμάκων',
      gps: 'Έξυπνος εντοπισμός GPS για κάθε αποστολή'
    },
    certifications: {
      adr: 'Συμφωνία ADR',
      pharma: 'Άδεια Μεταφοράς Φαρμάκων',
      license: 'Διεθνής Άδεια Μεταφορών'
    },
    contact: {
      title: 'Επικοινωνία / Ζητήστε Προσφορά',
      infoTitle: 'Στοιχεία Επικοινωνίας',
      address: 'Λεωφ. Osvobozhdenie 6',
      form: {
        company: 'Εταιρεία',
        person: 'Υπεύθυνος Επικοινωνίας',
        contact: 'Email / Τηλέφωνο',
        cargo: 'Τύπος Φορτίου',
        message: 'Μήνυμα',
        submit: 'Αποστολή Αιτήματος'
      }
    },
    cookieBanner: {
      message: 'Χρησιμοποιούμε cookies για να εξασφαλίσουμε την καλύτερη εμπειρία στον ιστότοπό μας. Συνεχίζοντας να επισκέπτεστε αυτόν τον ιστότοπο, συμφωνείτε με τη χρήση cookies.',
      accept: 'Αποδέχομαι'
    },
    footer: {
      companyDescription: 'Αξιόπιστες λογιστικές λύσεις για την επιχείρησή σας. Διεθνείς και εσωτερικές μεταφορές υψηλής ποιότητας.',
      quickLinks: 'Γρήγοροι Σύνδεσμοι',
      services: 'Υπηρεσίες',
      about: 'Σχετικά με εμάς',
      careers: 'Καριέρα',
      contacts: 'Επικοινωνία',
      contactTitle: 'Επικοινωνία',
      address: 'Διεύθυνση',
      phone: 'Τηλέφωνο',
      email: 'Email',
      copyright: '© 2026 TransGroup VVT. Όλα τα δικαιώματα διατηρούνται.',
      createdBy: 'Δημιουργήθηκε από H&M WsPro',
      autoParking: 'Στάθμευση Αυτοκινήτων',
      gallery: 'Γκαλερί',
      industries: 'Βιομηχανίες',
      certificates: 'Πιστοποιητικά'
    },
    industries: {
      hero: {
        title: 'Βιομηχανίες',
        subtitle: 'Εξειδικευμένες λογιστικές λύσεις για διάφορες βιομηχανίες και τομείς'
      },
      cta: {
        title: 'Χρειάζεστε λογιστική για τον τομέα σας;',
        description: 'Επικοινωνήστε μαζί μας για μια εξατομικευμένη λύση για την επιχείρησή σας',
        button: 'Ζητήστε Προσφορά'
      },
      services: 'Υπηρεσίες:',
      stats: {
        clients: 'Πελάτες',
        deliveries: 'Παραδόσεις',
        satisfaction: 'Ικανοποίηση'
      },
      items: {
        automotive: {
          name: 'Αυτοκινητοβιομηχανία',
          description: 'Εξειδικευμένες λογιστικές λύσεις για την αυτοκινητοβιομηχανία – μεταφορά οχημάτων, ανταλλακτικών και εξαρτημάτων.',
          services: ['Μεταφορά αυτοκινήτων', 'Ανταλλακτικά', 'Συστατικά παραγωγής', 'Παραδόσεις just-in-time']
        },
        retail: {
          name: 'Εμπόριο και Λιανική',
          description: 'Βελτιστοποιημένες λογιστικές αλυσίδες για εμπορικές και λιανικές εταιρείες με έμφαση στην ταχύτητα και την ακρίβεια.',
          services: ['Διανομή σε καταστήματα', 'Cross-docking', 'Μείωση αποθεμάτων', 'Ηλεκτρονικό εμπόριο']
        },
        manufacturing: {
          name: 'Παραγωγή',
          description: 'Ολοκληρωμένη λογιστική για βιομηχανικές επιχειρήσεις – από πρώτες ύλες έως τελικά προϊόντα.',
          services: ['Πρώτες ύλες', 'Ενδιάμεσα προϊόντα', 'Τελικά προϊόντα', 'Διεθνείς παραδόσεις']
        },
        fmcg: {
          name: 'FMCG',
          description: 'Εξειδικευμένη μεταφορά για γρήγορα κινούμενα καταναλωτικά αγαθά με ελεγχόμενη θερμοκρασία.',
          services: ['Τρόφιμα', 'Ποτά', 'Οικιακή χημεία', 'Φάρμακα']
        },
        ecommerce: {
          name: 'Ηλεκτρονικό Εμπόριο',
          description: 'Αποτελεσματικές λογιστικές λύσεις για ηλεκτρονικούς εμπόρους με έμφαση στην παράδοση της τελευταίας μίλιας.',
          services: ['Παράδοση τελευταίας μίλιας', 'Επιστροφές', 'Αποθήκευση', 'Συσκευασία']
        },
        construction: {
          name: 'Κατασκευές',
          description: 'Μεταφορές βαρέων φορτίων και εξειδικευμένη μεταφορά για τη βιομηχανία κατασκευών.',
          services: ['Οικοδομικά υλικά', 'Βαρύ μηχανήματα', 'Υπερμεγέθη φορτία', 'Επικίνδυνα υλικά']
        }
      }
    },
    autoParking: {
      hero: {
        title: 'Στάθμευση Αυτοκινήτων',
        subtitle: 'Φυλασσόμενο πάρκινγκ με σύγχρονη υποδομή και βιντεοπαρακολούθηση 24/7'
      },
      services: {
        title: 'Οι Υπηρεσίες μας',
        subtitle: 'Πλήρης εξυπηρέτηση για το όχημά σας κατά τη διάρκεια της στάθμευσης',
        items: {
          security: {
            name: 'Φυλασσόμενο Πάρκινγκ',
            description: 'Ασφάλεια 24/7 με επαγγελματική ομάδα και σύγχρονη βιντεοπαρακολούθηση',
            features: ['Γύρω από το ρολόι παρακολούθηση', 'Ελεγχόμενη πρόσβαση', 'Ασφάλεια περιμέτρου']
          },
          maintenance: {
            name: 'Τεχνική Εξυπηρέτηση',
            description: 'Δυνατότητα για σημαντικές επισκευές και συντήρηση του οχήματός σας',
            features: ['Διαγνωστικά', 'Εργασίες επισκευής', 'Αντικατάσταση ανταλλακτικών']
          },
          cleaning: {
            name: 'Πλύσιμο και Καθαρισμός',
            description: 'Επαγγελματικός καθαρισμός οχημάτων πριν και μετά τη μεταφορά',
            features: ['Εσωτερικός καθαρισμός', 'Εξωτερικό πλύσιμο', 'Απολύμανση']
          },
          storage: {
            name: 'Αποθήκευση Ανταλλακτικών',
            description: 'Ασφαλής αποθήκευση ανταλλακτικών και εξοπλισμού',
            features: ['Ελεγχόμενο περιβάλλον', 'Οργανωμένη αποθήκευση', 'Γρήγορη πρόσβαση']
          }
        }
      },
      facilities: {
        title: 'Υποδομή',
        subtitle: 'Σύγχρονα εγκαταστάσεις για ασφαλή αποθήκευση του οχήματός σας',
        items: {
          covered: { name: 'Στεγασμένες Θέσεις Στάθμευσης', count: '200+', description: 'Προστασία από τις καιρικές συνθήκες' },
          open: { name: 'Ανοιχτές Θέσεις Στάθμευσης', count: '500+', description: 'Για προσωρινή στάθμευση' },
          workshops: { name: 'Συνεργεία Επισκευών', count: '3', description: 'Για επισκευές και συντήρηση' },
          office: { name: 'Διοικητικό Κτίριο', count: '1', description: 'Υπηρεσίες και διοίκηση' }
        }
      },
      security: {
        title: 'Ασφάλεια και Έλεγχος'
      },
      pricing: {
        title: 'Τιμές',
        subtitle: 'Ανταγωνιστικές τιμές με δυνατότητα εκπτώσεων για μακροπρόθεσμες συμβάσεις',
        items: {
          daily: { service: 'Ημερήσια Στάθμευση', price: '15 BGN/ημέρα', description: 'Για αυτοκίνητα και μικρά φορτηγά' },
          weekly: { service: 'Εβδομαδιαία Στάθμευση', price: '80 BGN/εβδομάδα', description: 'Έκπτωση 15% για εβδομαδιαία πληρωμή' },
          monthly: { service: 'Μηνιαία Στάθμευση', price: '250 BGN/μήνα', description: 'Έκπτωση 30% για μηνιαία πληρωμή' },
          longterm: { service: 'Μακροπρόθεσμη Αποθήκευση', price: 'Σύμφωνα με συμφωνία', description: 'Ατομικές τιμές για εποχιακή αποθήκευση' }
        }
      },
      cta: {
        title: 'Κρατήστε Θέση',
        description: 'Επικοινωνήστε μαζί μας για κράτηση και πρόσθετες πληροφορίες',
        button: 'Αίτημα Κράτησης'
      }
    },
    gallery: {
      hero: {
        title: 'Γκαλερί',
        subtitle: 'Πραγματικές στιγμές από τη δουλειά μας, μεταφορικές λειτουργίες και λογιστικές διαδικασίες'
      },
      video: {
        title: 'Η Δουλειά μας σε Βίντεο',
        subtitle: 'Δείτε πώς οργανώνουμε και εκτελούμε τις μεταφορικές λειτουργίες'
      }
    },
    careers: {
      hero: {
        title: 'Επαγγελματική Ανάπτυξη',
        subtitle: 'Ενταχθείτε στην ομάδα μας και γίνετε μέρος ενός δυναμικού λογιστικού περιβάλλοντος'
      },
      whyJoin: {
        title: 'Γιατί να Ενταχθείτε σε Εμάς;',
        subtitle: 'Προσφέρουμε ευκαιρίες επαγγελματικής ανάπτυξης σε μία από τις κορυφαίες λογιστικές εταιρείες'
      },
      positions: {
        title: 'Ανοιχτές Θέσεις',
        subtitle: 'Τρέχουσες ευκαιρίες εργασίας στην ομάδα μας',
        items: [
          {
            title: 'Οδηγός Βαρέων Φορτηγών',
            type: 'Πλήρης Απασχόληση',
            location: 'Σόφια',
            requirements: [
              'Επαγγελματική άδεια οδήγησης κατηγορίας C+E',
              'Εμπειρία σε διεθνή μεταφορές',
              'Πιστοποιητικό ADR για επικίνδυνα αγαθά',
              'Υπευθυνότητα και ακρίβεια'
            ],
            benefits: ['Ανταγωνιστικός μισθός', 'Επιπλέον ανταμοιβές', 'Κοινωνικά οφέλη', 'Εκπαίδευση και ανάπτυξη']
          },
          {
            title: 'Ειδικός Λογιστικής',
            type: 'Πλήρης Απασχόληση',
            location: 'Σόφια',
            requirements: [
              'Ανώτατη εκπαίδευση στη λογιστική ή μεταφορές',
              'Εμπειρία στην οργάνωση φορτίων',
              'Γνώση τελωνειακών διαδικασιών',
              'Καλές δεξιότητες επικοινωνίας'
            ],
            benefits: ['Δυναμική εργασία', 'Υπεύθυνες εργασίες', 'Ομάδα επαγγελματιών', 'Ευκαιρίες ανάπτυξης']
          },
          {
            title: 'Ειδικός Ασφάλειας',
            type: 'Πλήρης Απασχόληση',
            location: 'Σόφια',
            requirements: [
              'Εμπειρία στον τομέα ασφάλειας',
              'Γνώση προτύπων OHSAS',
              'Οργανωτικές ικανότητες',
              'Πιστοποιητικά ασφάλειας'
            ],
            benefits: ['Σημαντικός ρόλος στην εταιρεία', 'Επαγγελματική ανάπτυξη', 'Σταθερή θέση', 'Εξαιρετικές συνθήκες']
          },
          {
            title: 'Μηχανικός',
            type: 'Πλήρης Απασχόληση',
            location: 'Βάση Σόφια',
            requirements: [
              'Εκπαίδευση στη μηχανική',
              'Εμπειρία με φορτηγά',
              'Γνώση ηλεκτρονικής',
              'Πιστοποιητικά προσόντων'
            ],
            benefits: ['Τεχνική υποστήριξη', 'Σύγχρονος εξοπλισμός', 'Εκπαίδευση', 'Σταθερή εργασία']
          }
        ]
      },
      process: {
        title: 'Διαδικασία Αίτησης',
        steps: [
          { step: '1', title: 'Κάντε Αίτηση', description: 'Στείλτε βιογραφικό και επιστολή συνοδείας' },
          { step: '2', title: 'Συνέντευξη', description: 'Αρχική συνομιλία με το HR' },
          { step: '3', title: 'Τεστ', description: 'Τεχνικό τεστ και πρακτική αξιολόγηση' },
          { step: '4', title: 'Ξεκινήστε', description: 'Καλώς ήρθατε στην ομάδα μας!' }
        ]
      },
      labels: {
        requirements: 'Απαιτήσεις:',
        benefits: 'Πλεονεκτήματα:',
        apply: 'Κάντε Αίτηση',
        fullTime: 'Πλήρης Απασχόληση',
        location: 'Σόφια',
        baseLocation: 'Βάση Σόφια'
      },
      benefits: {
        items: [
          {
            title: 'Ανταγωνιστικός Μισθός',
            description: 'Προσφέρουμε μισθούς πάνω από τον μέσο όρο του κλάδου, επιπλέον ανταμοιβές και μπόνους'
          },
          {
            title: 'Κοινωνικά Οφέλη',
            description: 'Επιπλέον ασφάλιση υγείας, κάρτα φαγητού, δελτία διακοπών'
          },
          {
            title: 'Εκπαίδευση και Ανάπτυξη',
            description: 'Συνεχής επαγγελματική ανάπτυξη, μαθήματα και πιστοποιητικά'
          },
          {
            title: 'Σύγχρονες Συνθήκες',
            description: 'Σύγχρονα γραφεία, τεχνολογία και εργασιακό περιβάλλον'
          },
          {
            title: 'Ώρες Εργασίας',
            description: 'Ευέλικτες ώρες εργασίας, δυνατότητα τηλεργασίας'
          },
          {
            title: 'Ομάδα και Πολιτισμός',
            description: 'Φιλική ατμόσφαιρα, ομαδικές εκδηλώσεις και ευκαιρίες έκφρασης'
          }
        ]
      },
      cta: {
        text: 'Δεν έχετε κατάλληλη θέση; Στείλτε μας το βιογραφικό σας και θα επικοινωνήσουμε μαζί σας όταν υπάρξει ευκαιρία.',
        button: 'Στείλε Βιογραφικό'
      }
    },
    certificates: {
      hero: {
        title: 'Πιστοποιητικά',
        subtitle: 'Η δραστηριότητά μας είναι πιστοποιημένη σύμφωνα με διεθνή πρότυπα ποιότητας και ασφάλειας'
      },
      certificates: {
        title: 'Διεθνή Πιστοποιητικά',
        subtitle: 'Εγγυόμαστε τα υψηλότερα πρότυπα ποιότητας, ασφάλειας και περιβαλλοντικής προστασίας'
      },
      licenses: {
        title: 'Άδειες και Αδειοδοτήσεις',
        subtitle: 'Όλες οι απαραίτητες άδειες για τη διεξαγωγή μεταφορικών δραστηριοτήτων'
      },
      quality: {
        title: 'Ποιότητα και Ασφάλεια',
        items: [
          {
            title: 'Κανονικοί Έλεγχοι',
            description: 'Πραγματοποιούμε εσωτερικούς και εξωτερικούς ελέγχους για τη διατήρηση των προτύπων'
          },
          {
            title: 'Τεχνικοί Έλεγχοι',
            description: 'Όλα τα οχήματα περνούν από καθημερινούς και περιοδικούς ελέγχους'
          },
          {
            title: 'Εκπαίδευση Προσωπικού',
            description: 'Κανονικές εκπαιδεύσεις για ασφάλεια, ποιότητα και περιβαλλοντικά πρότυπα'
          },
          {
            title: 'Παρακολούθηση Δείκτων',
            description: 'Παρακολουθούμε συνεχώς δείκτες KPI για την ποιότητα των υπηρεσιών'
          }
        ],
        results: {
          title: 'Τα Αποτελέσματά μας',
          stats: [
            { value: '99.8%', label: 'Εγκαίριες Παραδόσεις' },
            { value: '0.02%', label: 'Ατυχήματα' },
            { value: '100%', label: 'Πιστοποιημένοι Οδηγοί' },
            { value: 'ISO', label: 'Πιστοποιημένη Εταιρεία' }
          ]
        }
      },
      labels: {
        issuer: 'Εκδότης:',
        validUntil: 'Ισχύει έως:',
        scope: 'Εμβέλεια:',
        number: 'Αριθμός:'
      },
      certificatesList: {
        items: [
          {
            name: 'ISO 9001:2015',
            description: 'Σύστημα Διαχείρισης Ποιότητας',
            issuer: 'Διεθνής Οργανισμός Τυποποίησης',
            validUntil: '2027',
            scope: 'Λογιστικές και Μεταφορικές Υπηρεσίες'
          },
          {
            name: 'ISO 14001:2015',
            description: 'Σύστημα Διαχείρισης Περιβάλλοντος',
            issuer: 'Διεθνής Οργανισμός Τυποποίησης',
            validUntil: '2027',
            scope: 'Μεταφορικές και Αποθηκευτικές Δραστηριότητες'
          },
          {
            name: 'ISO 45001:2018',
            description: 'Σύστημα Διαχείρισης Υγείας και Ασφάλειας',
            issuer: 'Διεθνής Οργανισμός Τυποποίησης',
            validUntil: '2027',
            scope: 'Όλες οι Δραστηριότητες της Εταιρείας'
          },
          {
            name: 'ADR 2023',
            description: 'Πιστοποιητικό Μεταφοράς Επικίνδυνων Αγαθών',
            issuer: 'Υπουργείο Μεταφορών',
            validUntil: '2025',
            scope: 'Μεταφορά Επικίνδυνων Υλικών Κλάσης 1-9'
          },
          {
            name: 'Πιστοποιητικό TPC',
            description: 'Μεταφορά Τροφίμων',
            issuer: 'Υπουργείο Γεωργίας',
            validUntil: '2026',
            scope: 'Μεταφορά Τροφίμων'
          },
          {
            name: 'Πιστοποιητικό AEO',
            description: 'Εξουσιοδοτημένος Οικονομικός Φορέας',
            issuer: 'Τελωνειακή Υπηρεσία',
            validUntil: '2028',
            scope: 'Διεθνές Εμπόριο και Τελωνειακές Διαδικασίες'
          }
        ]
      },
      licensesList: {
        items: [
          {
            name: 'Άδεια Δημόσιας Μεταφοράς Εμπορευμάτων',
            number: 'Л-12345/2023',
            issuer: 'Εκτελεστική Υπηρεσία "Αυτοκινητική Διοίκηση"',
            validUntil: '2028'
          },
          {
            name: 'Άδεια Διεθνούς Μεταφοράς',
            number: 'МТ-67890/2023',
            issuer: 'Υπουργείο Μεταφορών',
            validUntil: '2027'
          },
          {
            name: 'Άδεια Μεταφορών',
            number: 'СП-11111/2023',
            issuer: 'Υπουργείο Μεταφορών',
            validUntil: '2027'
          }
        ]
      }
    }
  }
};
