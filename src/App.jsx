import { useLayoutEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import PlacesPage from "./components/PlacesPage.jsx";
import PlaceDetailsPage from "./PlaceDetailsPage.jsx";
import { places } from "./place.js";

const SITE_TITLE = "Воронеж без барьеров";

function getDocumentTitle(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/") {
    return `${SITE_TITLE} — главная`;
  }

  if (normalizedPath === "/places") {
    return `Все места — ${SITE_TITLE}`;
  }

  const place = places.find((item) => item.detailsPath === normalizedPath);
  if (place) {
    return `${place.name} — ${SITE_TITLE}`;
  }

  if (/^\/places\/[^/]+$/.test(normalizedPath)) {
    return `Место не найдено — ${SITE_TITLE}`;
  }

  return `Страница не найдена — ${SITE_TITLE}`;
}

function App() {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    document.title = getDocumentTitle(pathname);

    if (previousPathname.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        К основному содержимому
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/places/:id" element={<PlaceDetailsPage />} />
        <Route
          path="*"
          element={
            <main id="main-content" tabIndex={-1}>
              <h1>Страница не найдена</h1>
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
