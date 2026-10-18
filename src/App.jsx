import { useLayoutEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import PlacesPage from "./components/PlacesPage.jsx";
import PlaceDetailsPage from "./PlaceDetailsPage.jsx";
function App() {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    if (previousPathname.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/places/:id" element={<PlaceDetailsPage />} />
        <Route path="*" element={<p>Страница не найдена</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
