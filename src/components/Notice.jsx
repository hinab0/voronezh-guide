
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Notice({ message }) {
  return (
    <Snackbar
      open={Boolean(message)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Alert
        severity="info"
        variant="filled"
        sx={{
  width: "fit-content",
  maxWidth: "min(380px, calc(100vw - 32px))",
  boxSizing: "border-box",
  backgroundColor: "var(--accent)",
  color: "var(--text)",
  border: "1px solid var(--border)",
  borderRadius: "14px",
  boxShadow: "var(--shadow)",
  "& .MuiAlert-icon": {
    color: "var(--primary)",
  },
          transitionProperty: "transform !important",
}}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Notice;
