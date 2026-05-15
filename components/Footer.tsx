export default function Footer() {
  return (
    <footer style={{
      borderTop: "0.5px solid #D3D1C7",
      padding: "2rem",
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap" as const,
      gap: "1rem",
    }}>
      <div style={{
        fontFamily: "'Lora', serif",
        fontSize: "14px",
        color: "#2C2C2A",
      }}>
        The Caregiver&apos;s <span style={{ color: "#BA7517" }}>Trap</span>
      </div>
      <div style={{
        fontSize: "11px",
        color: "#888780",
        letterSpacing: "1px",
        textTransform: "uppercase" as const,
      }}>
        An OpenRoads Project
      </div>
      <div style={{
        fontSize: "11px",
        color: "#888780",
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
      }}>
        <span>© 2026 OpenRoads Consulting</span>
        <a href="/privacy" style={{ color: "#888780", textDecoration: "none" }}>Privacy</a>
        <a href="/terms" style={{ color: "#888780", textDecoration: "none" }}>Terms</a>
      </div>
    </footer>
  );
}
