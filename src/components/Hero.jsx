function Hero() {
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
          />
          <button className="primary-button" type="submit">
            Найти место
          </button>
        </form>
        <div className="filters" aria-label="Фильтры доступности">
          <button className="filter"
                  type="button"
                  data-filter="all"
                  aria-pressed="true">
            Все места
          </button>
          <button className="filter"
                  type="button"
                  data-filter="steps"
                  aria-pressed="false">
            Без ступеней
          </button>
          <button className="filter"
                  type="button"
                  data-filter="ramp"
                  aria-pressed="false">
            Пандус
          </button>
          <button className="filter"
                  type="button"
                  data-filter="toilet"
                  aria-pressed="false">
            Доступный туалет
          </button>

        </div>
      </div>
    </section>  
    );
}
export default Hero;