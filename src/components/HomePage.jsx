import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard.jsx";
import SquareIcon from "../icons/SquareIcon.jsx";
import EmbankmentIcon from "../icons/EmbankmentIcon.jsx";
import ShipIcon from "../icons/ShipIcon.jsx";
import Notice from "./Notice";
const places = [
  {
    name: "Адмиралтейская площадь",
    type: "Городская площадь",
    description:
      "Историческая площадь Воронежа рядом с Петровской набережной.",
    icon: <SquareIcon />,
  },
  {
    name: "Петровская набережная",
    type: "Общественное пространство",
    description:
      "Пространство для прогулок вдоль Воронежского водохранилища.",
    icon: <EmbankmentIcon />,
  },
  {
    name: "Гото Предестинация",
    type: "Корабль-музей",
    description:
      "Исторический корабль-музей. Для знакомства с объектом также существует виртуальный тур.",
    icon: <ShipIcon />,
  },
];
function HomePage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [noticeMessage, setNoticeMessage] = useState("");

  let filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  if (activeFilter !== "all") {
    filteredPlaces = filteredPlaces.filter((place) => place.type === activeFilter);
  }

  useEffect(() => {
    if (!noticeMessage) return;

    const timeoutId = setTimeout(() => {
      setNoticeMessage("");
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [noticeMessage]);

  return (
    <main id="home">
      <Header />
<Hero
  query={query}
  setQuery={setQuery}
  activeFilter={activeFilter}
  setActiveFilter={setActiveFilter}
  setNoticeMessage={setNoticeMessage}
/>
<section className="places container" id="places">
        <div className="section-heading">
          <h2>Исследуйте город</h2>
          <p>Первые места нашего путевodителя</p>
        </div>
        <div className="cards">
        {filteredPlaces.length === 0 && (
  <p className="search-result">
    По вашему запросу ничего не найдено.
  </p>
)}
          {filteredPlaces.map((place) => (
            <PlaceCard
              key={place.name}
              name={place.name}
              type={place.type}
              description={place.description}
              icon={place.icon}
            setNoticeMessage={setNoticeMessage}
            />
          ))}
        </div>
      </section>
      <Footer />
      <Notice message={noticeMessage} />
    </main>
  );
}
export default HomePage;
