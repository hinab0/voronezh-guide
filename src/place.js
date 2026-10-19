import SquareIcon from "./icons/SquareIcon.jsx";
import EmbankmentIcon from "./icons/EmbankmentIcon.jsx";
import ShipIcon from "./icons/ShipIcon.jsx";
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
    image: "/images/admiralteyskaya.jpg",
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
    image: "/images/petrovskaya-naberezhnaya.jpg",
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
    image: "/images/goto-predestinatsiya.jpg",
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
];
