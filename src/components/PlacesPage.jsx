import PlaceCard from "./PlaceCard.jsx";
import { places } from "../place.js";

function PlacesPage() {
  return (
    <main>
      <div className="container places-page">
        <div className="section-heading">
          <h1>Все места Воронежа</h1>
        </div>
        <div className="cards">
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              name={place.name}
              type={place.type}
              description={place.description}
              icon={place.icon}
              image={place.image}
              imageAlt={place.imageAlt}
              detailsPath={place.detailsPath}
              buttonLabel={place.buttonLabel}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default PlacesPage;
