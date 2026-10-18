import { Link, useParams } from "react-router";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { places } from "./place.js";

function PlaceDetailsPage() {
  const { id } = useParams();
  const place = places.find((place) => place.id === id);
  if (!place) {
  return <h1>Место не найдено</h1>;
}

  const hasSourceInfo =
    place.source?.name || place.source?.url || place.source?.contact;

  return (
    <main className="container detail-page">
      {place.image ? (
        <figure className="detail-photo-figure">
          <img
            className="detail-photo"
            src={place.image}
            alt={place.imageAlt || place.name}
          />
          {(place.imageCredit || place.imageSource?.name || place.imageSource?.url) && (
            <figcaption className="detail-photo-caption">
              {place.imageCredit && <span>Фото: {place.imageCredit}</span>}
              {(place.imageSource?.name || place.imageSource?.url) && (
                <span>
                  Источник: {" "}
                  {place.imageSource.url ? (
                    <a href={place.imageSource.url}>
                      {place.imageSource.name || place.imageSource.url}
                    </a>
                  ) : (
                    place.imageSource.name
                  )}
                </span>
              )}
            </figcaption>
          )}
        </figure>
      ) : (
        <div
          className="detail-photo-placeholder"
          role="img"
          aria-label={`Фотография места «${place.name}» пока не добавлена`}
        >
          Фотография места пока не добавлена
        </div>
      )}

      <article className="detail-content">
        <header className="detail-overview">
          <Typography
            component="h1"
            variant="inherit"
            sx={{
              maxWidth: 760,
              margin: "16px auto",
              color: "var(--primary-dark)",
              fontSize: "clamp(32px, 5vw, 52px)",
              lineHeight: 1.18,
              letterSpacing: "-0.035em",
            }}
          >
            {place.name}
          </Typography>
          <Typography
            component="p"
            variant="inherit"
            sx={{ fontSize: "1.05em", fontWeight: 700, margin: "0 0 12px", color: "var(--primary)" }}
          >
            {place.type}
          </Typography>
          <Typography component="p" variant="inherit" sx={{ margin: 0 }}>
            {place.description}
          </Typography>
        </header>

        <section className="detail-section" aria-labelledby="what-to-see">
          <h2 className="detail-section-title" id="what-to-see">
            Что посмотреть
          </h2>
          {Array.isArray(place.highlights) && place.highlights.length > 0 ? (
            <ul className="detail-list">
              {place.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : (
            <Typography component="p" variant="inherit" sx={{ margin: 0 }}>
              Информация о том, что посмотреть, пока не добавлена.
            </Typography>
          )}
        </section>

        <section className="detail-section" aria-labelledby="before-visit">
          <h2 className="detail-section-title" id="before-visit">
            Перед посещением
          </h2>
          <Alert
            severity="info"
            sx={{
              backgroundColor: "var(--accent)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              "& .MuiAlert-icon": { color: "var(--primary)" },
            }}
          >
            {place.accessibilityNote ||
              "Условия посещения и доступность необходимо уточнить перед поездкой."}
          </Alert>
        </section>

        {place.address && (
          <section className="detail-section" aria-labelledby="place-address">
            <h2 className="detail-section-title" id="place-address">
              Адрес и ориентир
            </h2>
            <Typography component="p" variant="inherit" sx={{ margin: 0 }}>
              {place.address}
            </Typography>
          </section>
        )}

        {place.excursion && (
          <section className="detail-section" aria-labelledby="place-excursion">
            <h2 className="detail-section-title" id="place-excursion">
              Экскурсия
            </h2>
            <Typography component="p" variant="inherit" sx={{ margin: 0 }}>
              {place.excursion}
            </Typography>
          </section>
        )}

        {hasSourceInfo && (
          <section className="detail-section" aria-labelledby="place-source">
            <h2 className="detail-section-title" id="place-source">
              Источник информации
            </h2>
            <div className="detail-source">
              {place.source.name && place.source.url ? (
                <p>
                  <a href={place.source.url}>{place.source.name}</a>
                </p>
              ) : (
                <>
                  {place.source.name && <p>{place.source.name}</p>}
                  {place.source.url && (
                    <p>
                      <a href={place.source.url}>{place.source.url}</a>
                    </p>
                  )}
                </>
              )}
              {place.source.contact && <p>{place.source.contact}</p>}
            </div>
          </section>
        )}

        <Link className="back-link" to="/places">
          ← Ко всем местам
        </Link>
      </article>
    </main>
  );
}

export default PlaceDetailsPage;
