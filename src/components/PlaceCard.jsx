import { Link } from "react-router";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function PlaceCard({ name, type, description, icon: Icon, image, imageAlt, detailsPath, buttonLabel = "Подробнее об объекте", setNoticeMessage }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(image) && !imageFailed;

  return (
    <Card
      component={detailsPath ? Link : "article"}
      {...(detailsPath
        ? {
            to: detailsPath,
            "aria-label": `${name} — ${buttonLabel}`,
          }
        : {})}
      className={`card${detailsPath ? " card-link" : ""}`}
      data-name={name}
      elevation={0}
      sx={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
      }}
    >
      <div className="card-placeholder" aria-hidden={!showImage}>
        {showImage ? (
          <img
            className="card-image"
            src={image}
            alt={detailsPath ? "" : imageAlt || name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          Icon && <Icon />
        )}
      </div>

      <CardContent
        className="card-content"
        sx={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          padding: "23px",
          "&:last-child": { paddingBottom: "23px" },
        }}
      >
        <span className="card-type">{type}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="status">Доступность уточняется</span>

        {detailsPath ? (
          <span className="card-button">{buttonLabel}</span>
        ) : (
          <Button
            className="card-button"
            variant="text"
            type="button"
            onClick={() => setNoticeMessage(`Уведомим, когда появится страница «${name}».`)}
            sx={{
              minWidth: 0,
              minHeight: 44,
              alignSelf: "flex-start",
              marginTop: "22px",
              padding: "8px 0",
              color: "var(--primary)",
              fontFamily: "inherit",
              fontSize: "inherit",
              fontWeight: 700,
              lineHeight: "inherit",
              letterSpacing: "inherit",
              textTransform: "none",
              overflowWrap: "anywhere",
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
            }}
          >
            {buttonLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default PlaceCard;
