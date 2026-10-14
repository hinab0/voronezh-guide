import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="logo" to="/" aria-label="На главную">
          <strong>Воронеж без барьеров</strong>
          <span>Город, открытый каждому</span>
        </Link>

        <nav className="navigation" aria-label="Основная навигация">
          <Link to="/">Главная</Link>
          <Link to="/places">Все места</Link>
          <Link reloadDocument to="/#footer">О проекте</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
