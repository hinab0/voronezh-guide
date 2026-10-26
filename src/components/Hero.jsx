import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function Hero({ query, setQuery, activeFilter, setActiveFilter, categories }) {
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
        <form
          className="search"
          id="search-form"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
<TextField
  sx={{ flex: 1, minWidth: 0 }}
  id="search-input"
  type="search"
  placeholder="Название места..."
  inputProps={{ "aria-label": "Поиск места" }}
  autoComplete="off"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
/>
<Button type="submit" variant="contained">
  Найти место
</Button>
        </form>
<ToggleButtonGroup
  className="filters"
  value={activeFilter}
  exclusive
  aria-label="Фильтры по категориям"
  onChange={(event, newFilter) => {
    if (newFilter !== null) {
      setActiveFilter(newFilter);
    }
  }}
  sx={{
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
    {activeFilter === "all" && (
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
      {activeFilter === category && (
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
      </div>
    </section>  
    );
}
export default Hero;
