function Hero({ query, setQuery, activeFilter, setActiveFilter, setNoticeMessage }) {
const onClickFilter = (filter) => {
  setActiveFilter(filter);

  if (filter === "all") {
    return;
  }

  setNoticeMessage(
    "Фильтр появится после добавления проверенных данных о доступности."
  );
};
return ( <section className="hero">
      <div className="container">
        <div className="eyebrow">
          Путеводитель по Воронежу
        </div>
        <h1>
          Откройте Воронеж
          без лишних препятствий
        </h1>
        <p className="hero-description">
          Находите интересные места и заранее
          узнавайте об их доступности.
          Планируйте прогулки с уверенностью.
        </p>
        <form className="search" id="search-form"
              role="search">
          <input
            id="search-input"
            type="search"
            placeholder="Название места..."
            aria-label="Поиск места"
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="primary-button" type="submit">
            Найти место
          </button>
        </form>
        <div className="filters" aria-label="Фильтры доступности">
          <button className="filter"
                  type="button"
                  data-filter="all"
                  onClick={() => onClickFilter("all")}>
            Все места
          </button>
          <button className="filter"
                  type="button"
                  data-filter="steps"
                  onClick={() => onClickFilter("steps")}
                  aria-pressed={activeFilter === "steps"}>
            Без ступеней
          </button>
          <button className="filter"
                  type="button"
                  data-filter="ramp"
                  onClick={() => onClickFilter("ramp")}
                  aria-pressed={activeFilter === "ramp"}>
            Пандус
          </button>
          <button className="filter"
                  type="button"
                  data-filter="toilet"
                  onClick={() => onClickFilter("toilet")}
                  aria-pressed={activeFilter === "toilet"}>
            Доступный туалет
          </button>

        </div>
      </div>
    </section>  
    );
}
export default Hero;