function Notice({ message }) {
  return (
    <div
      className={`notice ${message ? "visible" : ""}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}

export default Notice;