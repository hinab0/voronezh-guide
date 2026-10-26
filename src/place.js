import SquareIcon from "./icons/SquareIcon.jsx";
import EmbankmentIcon from "./icons/EmbankmentIcon.jsx";
import ShipIcon from "./icons/ShipIcon.jsx";

const getImagePath = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

export const places = [
  {
    id: "admiralteyskaya",
    name: "Адмиралтейская площадь",
    type: "Исторические места",
    description:
      "Адмиралтейская площадь — историческое место Воронежа, связанное с зарождением российского военного флота.",
    icon: SquareIcon,
    detailsPath: "/places/admiralteyskaya",
    buttonLabel: "Подробнее об объекте",
    image: getImagePath("admiralteyskaya.jpg"),
    imageAlt: "Успенский Адмиралтейский храм и цветники на Адмиралтейской площади",
    imageCredit: "Марина Шевченко",
    imageSource: {
      name: "Туристско-информационный портал Воронежа",
      url: "https://visit-voronezh.ru/guide/chto-posetit/tours/ticz-g-voronezha/admiraltejskaya-ploshhad-istoriya-i-sovremennost.html",
    },
    highlights: [
      "Ростральная колонна",
      "Триумфальные арки",
      "Успенский Адмиралтейский храм",
      "Памятники Митрофану Воронежскому и Петру Первому",
      "Корабль-музей «Гото Предестинация» — внешний осмотр",
    ],
    address: "Адмиралтейская площадь, Воронеж",
    excursion: "Площадь включена в пешеходный экскурсионный маршрут.",
    accessibility: {
      entrance: { status: "unknown" },
      steps: { status: "unknown" },
      ramp: { status: "unknown" },
      toilet: { status: "unknown" },
      route: { status: "unknown" },
      surface: { status: "unknown" },
    },
    accessibilityNote:
      "Подробные параметры доступности места не проверены. Перед посещением рекомендуется уточнить условия на месте или у организатора экскурсии.",
    source: {
      name: "Туристско-информационный центр Воронежа",
      url: "https://visit-voronezh.ru/guide/chto-posetit/tours/ticz-g-voronezha/admiraltejskaya-ploshhad-istoriya-i-sovremennost.html",
    },
  },
  {
    id: "petrovskaya-naberezhnaya",
    name: "Петровская набережная",
    type: "Набережные и прогулочные пространства",
    description:
      "Прибрежная прогулочная территория Воронежа у Воронежского водохранилища.",
    icon: EmbankmentIcon,
    detailsPath: "/places/petrovskaya-naberezhnaya",
    buttonLabel: "Подробнее об объекте",
    image: getImagePath("petrovskaya-naberezhnaya.jpg"),
    imageAlt: "Прогулочная набережная у Воронежского водохранилища с причалом и мостом",
    address: "Петровская набережная, Воронеж. Точный адрес входа не подтверждён.",
    visitorInfo:
      "Водные прогулки и причалы упоминаются в материалах туристического центра. Актуальное расписание необходимо уточнять.",
    accessibility: {
      entrance: { status: "unknown" },
      steps: { status: "unknown" },
      ramp: { status: "unknown" },
      toilet: { status: "unknown" },
      route: { status: "unknown" },
      surface: { status: "unknown" },
    },
    accessibilityNote:
      "Актуальные характеристики маршрута, покрытия и отдельных участков не подтверждены. Уточните условия перед посещением.",
    sources: [
      {
        name: "Прогулки по Воронежскому водохранилищу — Туристско-информационный центр Воронежа",
        url: "https://visit-voronezh.ru/news/progulki-po-voronezhskomu-vodoxranilishhu.html",
      },
    ],
  },
  {
    id: "goto-predestinatsiya",
    name: "Корабль-музей «Гото Предестинация»",
    type: "Музеи и исторические места",
    description:
      "Историческая копия первого линейного корабля российского военно-морского флота. Экспозиция посвящена истории флота и жизни моряков петровской эпохи.",
    icon: ShipIcon,
    buttonLabel: "Подробнее об объекте",
    detailsPath: "/places/goto-predestinatsiya",
    image: getImagePath("goto-predestinatsiya.jpg"),
    imageAlt: "Корабль-музей «Гото Предестинация» у причала на берегу водохранилища",
    address: "Петровская набережная, 21А, Воронеж.",
    excursion:
      "Продолжительность — 45 минут, язык — русский, группа — от 10 человек. Актуальные условия необходимо уточнять перед посещением.",
    accessibility: {
      entrance: { status: "unknown" },
      steps: { status: "unknown" },
      ramp: { status: "unknown" },
      toilet: { status: "unknown" },
      route: { status: "unknown" },
      surface: { status: "unknown" },
    },
    accessibilityNote:
      "Правила посещения предусматривают сопровождение совершеннолетним дееспособным взрослым для посетителей с ограниченными возможностями. Возможность безбарьерного подъёма на борт и осмотра всей экспозиции не подтверждена; актуальные условия необходимо уточнить.",
    virtualTour: {
      name: "Виртуальный тур по кораблю-музею",
      url: "https://firstship.ru/mob/virtual_journey/virtual_tour/",
    },
    sources: [
      {
        name: "Экскурсия на корабль-музей «Гото Предестинация» — ТИЦ Воронежа",
        url: "https://tic.visit-voronezh.ru/excursion/10176-korabl-muzei-goto-predestinaciya/",
      },
      {
        name: "Правила посещения — официальный портал корабля-музея",
        url: "https://firstship.ru/mob/excursions/fyi/",
      },
    ],
  },
  {
    id: "voronezhskoe-vodohranilishche",
    name: "Воронежское водохранилище",
    type: "Набережные и водоёмы",
    description:
      "Городской водоём, сформировавшийся в начале 1970-х годов и ставший частью ландшафта Воронежа с набережными, парками и общественными пространствами по берегам.",
    icon: EmbankmentIcon,
    detailsPath: "/places/voronezhskoe-vodohranilishche",
    buttonLabel: "Подробнее об объекте",
    image: getImagePath("voronezhskoe-vodohranilishche.jpg"),
    imageAlt: "Вид на Воронежское водохранилище с высоты, с берегами и городской застройкой",
    imageSource: {
      name: "2ВРН — Воронежское водохранилище",
      url: "https://2vrn.ru/voronezhskoe-vodohranilishe.html",
    },
    address:
      "Воронежское водохранилище, Воронеж. Конкретная точка посещения зависит от выбранного участка берега.",
    highlights: ["Панорамные виды с набережных и мостов"],
    visitorInfo:
      "Водоём можно наблюдать с разных набережных и мостов. Условия подхода следует уточнять для выбранной точки посещения.",
    accessibility: {
      entrance: { status: "unknown" },
      steps: { status: "unknown" },
      ramp: { status: "unknown" },
      toilet: { status: "unknown" },
      route: {
        status: "unknown",
        note: "Характеристики маршрута зависят от выбранного участка берега и не подтверждены для водохранилища в целом.",
      },
      surface: { status: "unknown" },
    },
    accessibilityNote:
      "Доступность не описывается для водохранилища как единой точки: условия зависят от выбранного берега, набережной или маршрута и требуют отдельного уточнения.",
    sources: [
      {
        name: "Воронежское водохранилище — Tripster",
        url: "https://experience.tripster.ru/sights/74420-voronezhskoe-vodohranilishe/",
      },
      {
        name: "Воронежское водохранилище — 2ВРН",
        url: "https://2vrn.ru/voronezhskoe-vodohranilishe.html",
      },
    ],
  },
  {
    id: "voronezhskiy-zapovednik",
    name: "Воронежский государственный природный биосферный заповедник имени В. М. Пескова",
    type: "Природные территории и заповедники",
    description:
      "Охраняемая природная территория в Усманском бору с Центральной усадьбой, музеями и экологическими тропами.",
    icon: EmbankmentIcon,
    detailsPath: "/places/voronezhskiy-zapovednik",
    buttonLabel: "Подробнее об объекте",
    image: getImagePath("voronezhskiy-zapovednik.jpg"),
    imageAlt: "Здание на территории Воронежского заповедника и скульптуры бобров перед ним",
    imageSource: {
      name: "Заповедники Воронежской области — Must-see.top",
      url: "https://must-see.top/zapovedniki-voronezhskoy-oblasti/",
    },
    address: "394080, г. Воронеж, Госзаповедник, Центральная усадьба.",
    highlights: [
      "Экотропа «Заповедная сказка»",
      "Экотропа «Черепахинская»",
      "Музей природы",
      "Музей В. М. Пескова",
    ],
    visitorInfo:
      "Для посещения открыта только разрешённая территория: Центральная усадьба и экскурсионные объекты, включая экотропы. Перед поездкой уточните действующие правила и состояние выбранного маршрута.",
    accessibility: {
      entrance: { status: "unknown" },
      steps: { status: "unknown" },
      ramp: { status: "unknown" },
      toilet: { status: "unknown" },
      route: {
        status: "unknown",
        note: "Доступность территории в целом и отдельных экотроп не подтверждена; условия маршрутов следует проверять отдельно.",
      },
      surface: { status: "unknown" },
    },
    accessibilityNote:
      "Характеристики доступности всей территории не подтверждены. Условия отдельных объектов и экотроп могут различаться.",
    sources: [
      {
        name: "Официальный сайт Воронежского заповедника",
        url: "https://zapovednik-vrn.ru/",
      },
      {
        name: "Экотропы — Воронежский заповедник",
        url: "https://zapovednik-vrn.ru/ekoturizm/predlagaem-posetit/ekotropy/",
      },
      {
        name: "Как добраться — Воронежский заповедник",
        url: "https://zapovednik-vrn.ru/contacts/addresses/",
      },
      {
        name: "Предлагаем посетить — Воронежский заповедник",
        url: "https://zapovednik-vrn.ru/ekoturizm/predlagaem-posetit/",
      },
    ],
  },
  {
    id: "kramskoy-museum",
    name: "Воронежский областной художественный музей имени И. Н. Крамского",
    type: "Музеи и исторические места",
    description:
      "Художественный музей с коллекциями искусства Древнего Египта и античности, русского и западноевропейского искусства, фарфора и декоративно-прикладного искусства.",
    icon: SquareIcon,
    detailsPath: "/places/kramskoy-museum",
    buttonLabel: "Подробнее об объекте",
    image: getImagePath("kramskoy-museum.jpg"),
    imageAlt: "Фасад Воронежского областного художественного музея имени И. Н. Крамского на проспекте Революции",
    imageSource: {
      name: "Достопримечательности Воронежа — OneTwoTrip",
      url: "https://www.onetwotrip.com/ru/blog/guides/russian-federation/going-for-a-weekend-in-voronezh/",
    },
    address: "394036, Воронеж, проспект Революции, 18.",
    highlights: [
      "Коллекция искусства Древнего Египта и античности",
      "Русское искусство XVI–XXI веков",
      "Западноевропейское искусство XVI–XIX веков",
      "Коллекции фарфора и декоративно-прикладного искусства",
    ],
    visitorInfo:
      "На официальном сайте музея описана программа «Доступная среда», включая пандус у входа и подъёмную платформу в выставочном зале. Уточните заранее, какие маршруты и залы доступны во время визита.",
    accessibility: {
      entrance: {
        status: "unknown",
        note: "Наличие пандуса у входа подтверждено, но этого недостаточно, чтобы подтвердить доступность всего входного маршрута.",
      },
      steps: { status: "unknown" },
      ramp: {
        status: "present",
        note: "Официальная программа музея сообщает о стационарном пандусе у входа.",
        source: {
          name: "Программа «Доступная среда» — музей Крамского",
          url: "https://mkram.ru/ru/muzej/realizatsiya-gosudarstvennoj-programmy-dostupnaya-sreda/",
        },
      },
      toilet: {
        status: "unknown",
        note: "В программе упомянута реконструкция санитарного узла, но конкретные характеристики доступного туалета не описаны.",
        source: {
          name: "Программа «Доступная среда» — музей Крамского",
          url: "https://mkram.ru/ru/muzej/realizatsiya-gosudarstvennoj-programmy-dostupnaya-sreda/",
        },
      },
      route: { status: "unknown" },
      surface: { status: "unknown" },
    },
    accessibilityNote:
      "Официальная программа музея описывает отдельные меры доступности, но не подтверждает безбарьерность всех помещений и маршрутов. Уточните условия посещения заранее.",
    sources: [
      {
        name: "Официальный сайт музея Крамского",
        url: "https://mkram.ru/ru/",
      },
      {
        name: "О музее — музей Крамского",
        url: "https://mkram.ru/ru/muzej/o-nas/",
      },
      {
        name: "Постоянная экспозиция музея",
        url: "https://mkram.ru/ru/2024/01/19/postoyannaya-ekspozitsiya-muzeya/",
      },
      {
        name: "Контакты и адрес — музей Крамского",
        url: "https://mkram.ru/ru/muzej/rekvizit/",
      },
      {
        name: "Программа «Доступная среда» — музей Крамского",
        url: "https://mkram.ru/ru/muzej/realizatsiya-gosudarstvennoj-programmy-dostupnaya-sreda/",
      },
    ],
  },
];
