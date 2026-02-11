export default function App() {
  return (
    <div style={styles.page}>
      <h1>Single Page React</h1>
      <p>This is just App.jsx. Nothing else matters.</p>

      <button onClick={() => alert("It works 🚀")}>
        Click me
      </button>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    color: "#e5e7eb",
    fontFamily: "sans-serif",
    gap: "12px",
  },
};
