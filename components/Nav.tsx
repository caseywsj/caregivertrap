"use client";

export default function Nav() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FDFAF6; }
        .nav-link:hover { color: #2C2C2A !important; }
        .join-btn:hover { background: #BA7517 !important; color: #FDFAF6 !important; }
      `}</style>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 2rem",
        borderBottom: "0.5px solid #D3D1C7",
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <div style={{
            fontFamily: "'Lora', serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.3px",
            whiteSpace: "nowrap",
            color: "#2C2C2A",
          }}>
            The Caregiver&apos;s <span style={{ color: "#BA7517" }}>Trap</span>
          </div>
        </a>
        <ul style={{
          display: "flex",
          gap: "1.5rem",
          listStyle: "none",
          alignItems: "center",
        }}>
          {[
            { label: "The trap", href: "/the-trap" },
            { label: "Daily grind", href: "/daily-grind" },
            { label: "Fight back", href: "/fight-back" },
            { label: "Tools", href: "/tools" },
            { label: "Community", href: "/community" },
            { label: "After", href: "/after" },
            { label: "About", href: "/about" },
          ].map((item) => (
            <li key={item.label}>
              <a href={item.href} className="nav-link" style={{
                fontSize: "13px",
                color: "#5F5E5A",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="join-btn" style={{
          fontSize: "13px",
          padding: "7px 18px",
          border: "0.5px solid #BA7517",
          borderRadius: "20px",
          color: "#BA7517",
          background: "transparent",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontFamily: "'Inter', sans-serif",
          transition: "background 0.15s, color 0.15s",
        }}>
          Join free
        </button>
      </nav>
    </>
  );
}
