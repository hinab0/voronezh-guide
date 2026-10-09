import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PlaceCard from "./components/PlaceCard";
import Notice from "./components/Notice";
import SquareIcon from "./icons/SquareIcon.jsx";
import EmbankmentIcon from "./icons/EmbankmentIcon.jsx";
import ShipIcon from "./icons/ShipIcon.jsx";

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
             icon={<SquareIcon />}
          />
          <PlaceCard
            name="Петровская набережная"
            type="Общественное пространство"
            description="Пространство для прогулок вдоль Воронежского водохранилища."
           
            icon={<EmbankmentIcon />}
          />
          <PlaceCard
            name="Гото Предестинация"
            type="Корабль-музей"
            description="Исторический корабль-музей. Для знакомства с объектом также существует виртуальный тур."
            icon={<ShipIcon />}
          />
        </div>
      </section>
      <Footer />
      <Notice />
    </main>
  );
}

export default App;