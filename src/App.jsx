import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PlaceCard from "./components/PlaceCard";
import Notice from "./components/Notice";

function App() {
  return (
    <main>
      <Header />

      <Hero />

      <section className="places container" id="places">
        <div className="section-heading">
          <h2>Исследуйте город</h2>
          <p>Первые места нашего путеводителя</p>
        </div>
        <div className="cards">
          <PlaceCard
            name="Адмиралтейская площадь"
            type="Городская площадь"
            description="Историческая площадь Воронежа рядом с Петровской набережной."
            icon={
          <svg viewBox="0 0 64 64">
            <path d="M8 26 L32 10 L56 26"/>
            <path d="M12 28 H52"/>
            <path d="M17 32 V49 M27 32 V49 M37 32 V49 M47 32 V49"/>
            <path d="M10 53 H54 M7 58 H57"/>
          </svg>
        }
          />
          <PlaceCard
            name="Петровская набережная"
            type="Общественное пространство"
            description="Пространство для прогулок вдоль Воронежского водохранилища."
            icon={
              <svg viewBox="0 0 64 64">
                <path d="M4 26 Q12 20 20 26 T36 26 T52 26 T68 26" />
                <path d="M4 37 Q12 31 20 37 T36 37 T52 37 T68 37" />
                <path d="M4 48 Q12 42 20 48 T36 48 T52 48 T68 48" />
              </svg>
            }
          />
          <PlaceCard
            name="Гото Предестинация"
            type="Корабль-музей"
            description="Исторический корабль-музей. Для знакомства с объектом также существует виртуальный тур."
            icon={
            <svg viewBox="0 0 64 64">
              <path d="M32 6 V42" />
              <path d="M29 12 L10 38 H29 Z" />
              <path d="M35 15 L51 38 H35 Z" />
              <path d="M8 43 H56 L47 53 H18 Z" />
              <path d="M8 58 Q16 53 24 58 T40 58 T56 58" />
            </svg>
            }
          />
        </div>
      </section>
      <Footer />
      <Notice />
    </main>
  );
}

export default App;