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
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [noticeMessage]);

  return (
    <main id="home">
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
          <p>Первые места нашего путевoдителя</p>
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
