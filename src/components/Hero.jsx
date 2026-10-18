import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function Hero({ query, setQuery, activeFilter, setActiveFilter, setNoticeMessage }) {
const onClickFilter = (filter) => {
  setActiveFilter(filter);

  if (filter === "all") {
    return;
  }

  setNoticeMessage(
    "Фильтр появится после добавления проверенных данных о доступности."
  );
};
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
  aria-label="Фильтры доступности"
  onChange={(event, newFilter) => {
    if (newFilter !== null) {
      onClickFilter(newFilter);
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
    Все места
  </ToggleButton>
  <ToggleButton value="steps">
    Без ступеней
  </ToggleButton>
  <ToggleButton value="ramp">
    Пандус
  </ToggleButton>
  <ToggleButton value="toilet">
    Доступный туалет
  </ToggleButton>
</ToggleButtonGroup>
      </div>
    </section>  
    );
}
export default Hero;
