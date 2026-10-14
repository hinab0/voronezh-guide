import { Link } from "react-router";

function PlaceCard({ name, type, description, icon: Icon, detailsPath, buttonLabel = "Подробнее →", setNoticeMessage }) {
  return (
    <article className="card" data-name={name}>
      <div className="card-placeholder" aria-hidden="true">
        {Icon && <Icon />}
      </div>

      <div className="card-content">
        <span className="card-type">{type}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="status">Доступность уточняется</span>

        {detailsPath ? (
          <Link className="card-button" to={detailsPath}>
            {buttonLabel}
          </Link>
        ) : (
          <button
            className="card-button"
            type="button"
            onClick={() => setNoticeMessage(`Уведомим, когда появится страница «${name}».`)}
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </article>
  );
}

export default PlaceCard;
