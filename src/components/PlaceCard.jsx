function PlaceCard({ name, type, description, icon, setNoticeMessage }) {
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

        <button className="card-button" type="button" onClick={() => setNoticeMessage(`Карточка ${name} появится в следующем обновлении.`)}>
          Подробнее →
        </button>

      </div>

    </article>
  );
}

export default PlaceCard;