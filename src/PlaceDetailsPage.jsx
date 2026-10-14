import { Link, useParams } from "react-router";
import {places} from "./place.js";
function PlaceDetailsPage() {
  const { id } = useParams();
  const place = places.find((place) => place.id === id);
  if (!place) {
  return <h1>Место не найдено</h1>;
}
  return (
    <div className="container detail-page">
      <h1>{place.name}</h1>
      <h3>{place.type}</h3>
      <p>{place.description}</p>
      <p>Данные о доступности уточняются.</p>
      <Link className="back-link" to="/places">
        ← Ко всем местам
      </Link>
    </div>
  );
}

export default PlaceDetailsPage;
