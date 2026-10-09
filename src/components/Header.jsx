function Header() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#home">
            <strong>Воронеж без барьеров</strong>
            <span>Город, открытый каждому</span>
          </a>
                <nav className="navigation" aria-label="Основная навигация">
        <a href="#home">Главная</a>
        <a href="#places">Места</a>
        <a href="#footer">О проекте</a>
      </nav>
        </div>  
      </header>
    </>
  );
}

export default Header;