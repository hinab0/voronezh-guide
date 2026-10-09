function PlaceCard({ name, type, description, icon }) {
  return (
    <article className="card" data-name={name}>

      <div className="card-placeholder" aria-hidden="true">
        {icon}
      </div>

      <div className="card-content">

        <span className="card-type">
          {type}
        </span>

        <h3>{name}</h3>

        <p>{description}</p>

        <span className="status">
          Доступность уточняется
        </span>

        <button className="card-button" type="button">
          Подробнее →
        </button>

      </div>

    </article>
  );
}

export default PlaceCard;