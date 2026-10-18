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
    buttonLabel: "Об объекте →",
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
    type: "Общественное пространство",
    description:
      "Пространство для прогулок вдоль Воронежского водохранилища.",
    icon: EmbankmentIcon,
    detailsPath: "/places/petrovskaya-naberezhnaya",
    buttonLabel: "Подробнее о набережной →",
  },
  {
    id: "goto-predestinatsiya",
    name: "Гото Предестинация",
    type: "Корабль-музей",
    description:
      "Исторический корабль-музей. Для знакомства с объектом также существует виртуальный тур.",
    icon: ShipIcon,
    buttonLabel: "Подробнее о корабле →",
    detailsPath: "/places/goto-predestinatsiya",
  },
];
