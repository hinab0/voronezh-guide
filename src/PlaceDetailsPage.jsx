import { Link, useParams } from "react-router";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { places } from "./place.js";

const ACCESSIBILITY_ITEMS = [
  { key: "entrance", label: "Вход", statuses: { accessible: "Доступен", inaccessible: "Недоступен", partial: "Частично", unknown: "Не проверено" } },
  { key: "steps", label: "Ступени", statuses: { present: "Есть", absent: "Нет", partial: "Частично", unknown: "Не проверено" } },
  { key: "ramp", label: "Пандус", statuses: { present: "Есть", absent: "Нет", partial: "Частично", unknown: "Не проверено" } },
  { key: "toilet", label: "Туалет", statuses: { available: "Доступен", unavailable: "Недоступен", partial: "Частично", unknown: "Не проверено" } },
  { key: "route", label: "Маршрут", statuses: { accessible: "Доступен", inaccessible: "Недоступен", partial: "Частично", unknown: "Не проверено" } },
  { key: "surface", label: "Покрытие", statuses: { even: "Ровное", uneven: "Неровное", mixed: "Смешанное", unknown: "Не проверено" } },
];

function getCheckedDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return null;

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return null;

  return date.toLocaleDateString("ru-RU");
}

function getHttpUrl(value) {
  if (typeof value !== "string") return null;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function PlaceDetailsPage() {
  const { id } = useParams();
  const place = places.find((place) => place.id === id);
  if (!place) {
  return <h1>Место не найдено</h1>;
}

  const sources = Array.isArray(place.sources)
    ? place.sources
    : place.source
      ? [place.source]
      : [];
  const hasSourceInfo = sources.some(
    (source) => source.name || source.url || source.contact
  );

  return (
    <main className="container detail-page">
      {place.image ? (
        <figure className="detail-photo-figure">
          <img
            className="detail-photo"
            src={place.image}
            alt={place.imageAlt || place.name}
          />
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

        {place.visitorInfo && (
          <section className="detail-section" aria-labelledby="visitor-info">
            <h2 className="detail-section-title" id="visitor-info">
              Полезная информация
            </h2>
            <Typography component="p" variant="inherit" sx={{ margin: 0 }}>
              {place.visitorInfo}
            </Typography>
          </section>
        )}

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

        <section className="detail-section" aria-labelledby="accessibility-title">
          <h2 className="detail-section-title" id="accessibility-title">
            Доступность места
          </h2>
          <dl className="accessibility-list">
            {ACCESSIBILITY_ITEMS.map(({ key, label, statuses }) => {
              const item = place.accessibility?.[key];
              const status = statuses[item?.status] || "Не проверено";
              const source = item?.source;
              const sourceUrl = getHttpUrl(
                typeof source === "string" ? source : source?.url
              );
              const checkedDate = getCheckedDate(item?.checkedAt);

              return (
                <div className="accessibility-item" key={key}>
                  <dt>{label}</dt>
                  <dd>
                    <span>{status}</span>
                    {item?.note && <p>{item.note}</p>}
                    {sourceUrl && (
                      <p>
                        Источник: <a href={sourceUrl}>{source?.name || sourceUrl}</a>
                      </p>
                    )}
                    {checkedDate && <p>Проверено: {checkedDate}</p>}
                  </dd>
                </div>
              );
            })}
          </dl>
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

        {place.virtualTour?.url && (
          <section className="detail-section" aria-labelledby="virtual-tour">
            <h2 className="detail-section-title" id="virtual-tour">
              Виртуальный тур
            </h2>
            <div className="detail-source">
              <a href={place.virtualTour.url}>
                {place.virtualTour.name || place.virtualTour.url}
              </a>
            </div>
          </section>
        )}

        {hasSourceInfo && (
          <section className="detail-section" aria-labelledby="place-source">
            <h2 className="detail-section-title" id="place-source">
              {sources.length > 1 ? "Источники информации" : "Источник информации"}
            </h2>
            <div className="detail-source">
              {sources.map((source) => (
                <p key={source.url || source.name}>
                  {source.url ? (
                    <a href={source.url}>{source.name || source.url}</a>
                  ) : (
                    source.name
                  )}
                  {source.contact && <> — {source.contact}</>}
                </p>
              ))}
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
