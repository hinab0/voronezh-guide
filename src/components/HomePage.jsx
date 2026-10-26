import "../App.css";
import Hero from "./Hero";
import { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard.jsx";
import Notice from "./Notice";
import { places } from "../place.js";
function HomePage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [noticeMessage, setNoticeMessage] = useState("");
  const categories = [...new Set(places.map((place) => place.type).filter(Boolean))];

  const normalizedQuery = query.trim().toLowerCase();
  const filteredPlaces = places.filter((place) => {
    const matchesQuery = place.name.toLowerCase().includes(normalizedQuery);
    const matchesCategory = activeFilter === "all" || place.type === activeFilter;
    return matchesQuery && matchesCategory;
  });

  useEffect(() => {
    if (!noticeMessage) return;

    const timeoutId = setTimeout(() => {
      setNoticeMessage("");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [noticeMessage]);

  return (
    <main id="main-content" tabIndex={-1}>
<Hero
  query={query}
  setQuery={setQuery}
  activeFilter={activeFilter}
  setActiveFilter={setActiveFilter}
  categories={categories}
/>
<section className="places container" id="places">
        <div className="section-heading">
          <h2>Исследуйте город</h2>
          <p>Первые места нашего путевoдителя</p>
        </div>
        <div className="cards">
        {filteredPlaces.length === 0 && (
  <p className="search-result">
    По выбранным условиям ничего не найдено.
  </p>
)}
          {filteredPlaces.map((place) => (
            <PlaceCard
              key={place.name}
              name={place.name}
              type={place.type}
              description={place.description}
              icon={place.icon}
              image={place.image}
              imageAlt={place.imageAlt}
              detailsPath={place.detailsPath}
              buttonLabel={place.buttonLabel}
              setNoticeMessage={setNoticeMessage}
            />
          ))}
        </div>
      </section>
      <Notice message={noticeMessage} />
    </main>
  );
}
export default HomePage;
