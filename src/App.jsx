import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage.jsx";
import PlacesPage from "./components/PlacesPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/places" element={<PlacesPage />} />
      <Route path="*" element={<p>Страница не найдена</p>} />
    </Routes>
  );
}

export default App;
