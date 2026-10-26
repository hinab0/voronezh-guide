import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PlaceCard from "./PlaceCard.jsx";
import { places } from "../place.js";

function PlacesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeAccessibility, setActiveAccessibility] = useState("all");
  const categories = [...new Set(places.map((place) => place.type).filter(Boolean))];
  const normalizedQuery = query.trim().toLowerCase();
  const filteredPlaces = places.filter((place) => {
    const name = (place.name ?? "").toLowerCase();
    const matchesQuery = name.includes(normalizedQuery);
    const matchesCategory = activeCategory === "all" || place.type === activeCategory;
    const matchesAccessibility =
      activeAccessibility === "all" ||
      (activeAccessibility === "ramp" &&
        place.accessibility?.ramp?.status === "present") ||
      (activeAccessibility === "steps" &&
        place.accessibility?.steps?.status === "absent");
    return matchesQuery && matchesCategory && matchesAccessibility;
  });

  const resetFilters = () => {
    setQuery("");
    setActiveCategory("all");
    setActiveAccessibility("all");
  };

  return (
    <main id="main-content" tabIndex={-1}>
      <div className="container places-page">
        <div className="section-heading">
          <h1>Все места Воронежа</h1>
        </div>

        <form
          className="search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            sx={{ flex: 1, minWidth: 0 }}
            type="search"
            placeholder="Название места..."
            inputProps={{ "aria-label": "Поиск места в каталоге" }}
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>

        <ToggleButtonGroup
          className="filters"
          value={activeCategory}
          exclusive
          aria-label="Фильтры мест по категории"
          onChange={(event, category) => {
            if (category !== null) {
              setActiveCategory(category);
            }
          }}
          sx={{
            marginBottom: "22px",
            "& .MuiToggleButton-root": {
              borderColor: "var(--border)",
              borderRadius: "30px",
              color: "var(--muted)",
              backgroundColor: "var(--surface)",
              padding: "10px 17px",
              textTransform: "none",
            },
            "& .MuiToggleButton-root.Mui-selected": {
              backgroundColor: "var(--primary)",
              color: "#fff",
              borderColor: "var(--primary)",
            },
            "& .MuiToggleButton-root.Mui-selected:hover": {
              backgroundColor: "var(--primary-dark)",
            },
          }}
        >
          <ToggleButton value="all">
            {activeCategory === "all" && (
              <span
                aria-hidden="true"
                style={{ marginRight: 9, fontSize: "1.1em", lineHeight: 1 }}
              >
                ✓
              </span>
            )}
            Все места
          </ToggleButton>
          {categories.map((category) => (
            <ToggleButton key={category} value={category}>
              {activeCategory === category && (
                <span
                  aria-hidden="true"
                  style={{ marginRight: 9, fontSize: "1.1em", lineHeight: 1 }}
                >
                  ✓
                </span>
              )}
              {category}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <ToggleButtonGroup
          className="filters"
          value={activeAccessibility}
          exclusive
          aria-label="Фильтры мест по доступности"
          onChange={(event, criterion) => {
            if (criterion !== null) {
              setActiveAccessibility(criterion);
            }
          }}
          sx={{
            marginBottom: "22px",
            "& .MuiToggleButton-root": {
              borderColor: "var(--border)",
              borderRadius: "30px",
              color: "var(--muted)",
              backgroundColor: "var(--surface)",
              padding: "10px 17px",
              textTransform: "none",
            },
            "& .MuiToggleButton-root.Mui-selected": {
              backgroundColor: "var(--primary)",
              color: "#fff",
              borderColor: "var(--primary)",
            },
            "& .MuiToggleButton-root.Mui-selected:hover": {
              backgroundColor: "var(--primary-dark)",
            },
          }}
        >
          <ToggleButton value="all">
            {activeAccessibility === "all" && (
              <span
                aria-hidden="true"
                style={{ marginRight: 9, fontSize: "1.1em", lineHeight: 1 }}
              >
                ✓
              </span>
            )}
            Без фильтра доступности
          </ToggleButton>
          <ToggleButton value="ramp">
            {activeAccessibility === "ramp" && (
              <span
                aria-hidden="true"
                style={{ marginRight: 9, fontSize: "1.1em", lineHeight: 1 }}
              >
                ✓
              </span>
            )}
            Есть пандус
          </ToggleButton>
          <ToggleButton value="steps">
            {activeAccessibility === "steps" && (
              <span
                aria-hidden="true"
                style={{ marginRight: 9, fontSize: "1.1em", lineHeight: 1 }}
              >
                ✓
              </span>
            )}
            Без ступеней
          </ToggleButton>
        </ToggleButtonGroup>

        <div className="section-heading">
          <h2>Список мест Воронежа</h2>
        </div>

        <div className="cards">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                name={place.name}
                type={place.type}
                description={place.description}
                icon={place.icon}
                image={place.image}
                imageAlt={place.imageAlt}
                detailsPath={place.detailsPath}
                buttonLabel={place.buttonLabel}
              />
            ))
          ) : (
            <div className="empty" role="status">
              <p>По выбранным условиям ничего не найдено.</p>
              <Button
                variant="outlined"
                type="button"
                onClick={resetFilters}
                sx={{
                  minHeight: 44,
                  marginTop: "16px",
                  borderColor: "var(--border)",
                  borderRadius: "var(--radius)",
                  color: "var(--primary)",
                  textTransform: "none",
                }}
              >
                Сбросить все условия
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default PlacesPage;
