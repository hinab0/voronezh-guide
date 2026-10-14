import SquareIcon from "./icons/SquareIcon.jsx";
import EmbankmentIcon from "./icons/EmbankmentIcon.jsx";
import ShipIcon from "./icons/ShipIcon.jsx";
export const places = [
  {
    id: "admiralteyskaya",
    name: "Адмиралтейская площадь",
    type: "Городская площадь",
    description:
      "Историческая площадь Воронежа рядом с Петровской набережной.",
    icon: SquareIcon,
    detailsPath: "/places/admiralteyskaya",
    buttonLabel: "Об объекте →",
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
