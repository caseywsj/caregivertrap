"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navItems = [
    { label: "The trap", href: "/the-trap" },
    { label: "Daily grind", href: "/daily-grind" },
    { label: "Fight back", href: "/fight-back" },
    { label: "Tools", href: "/tools" },
    { label: "Community", href: "/community" },
    { label: "After", href: "/after" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FDFAF6; }
      `}</style>

      <nav style={{ borderBottom: "0.5px solid #D3D1C7", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 2rem", maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

          <a href="/" style={{ textDecoration: "none" }}>
            <div style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 400, letterSpacing: "-0.3px", whiteSpace: "nowrap", color: "#2C2C2A" }}>
              The Caregiver&apos;s <span style={{ color: "#BA7517" }}>Trap</span>
            </div>
          </a>

          {!isMobile && (
            <>
              <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", alignItems: "center" }}>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} style={{ fontSize: "13px", color: "#5F5E5A", textDecoration: "none", whiteSpace: "nowrap" }}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button style={{ fontSize: "13px", padding: "7px 18px", border: "0.5px solid #BA7517", borderRadius: "20px", color: "#BA7517", background: "transparent", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "'Inter', sans-serif" }}>
                Join free
              </button>
            </>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", width: "22px", height: "1.5px", background: menuOpen ? "#BA7517" : "#2C2C2A" }} />
              <span style={{ display: "block", width: "22px", height: "1.5px", background: menuOpen ? "#BA7517" : "#2C2C2A" }} />
              <span style={{ display: "block", width: "22px", height: "1.5px", background: menuOpen ? "#BA7517" : "#2C2C2A" }} />
            </button>
          )}
        </div>

        {isMobile && menuOpen && (
          <div style={{ display: "flex", flexDirection: "column", background: "#FDFAF6", borderTop: "0.5px solid #D3D1C7", padding: "1rem 2rem 1.5rem" }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontSize: "15px", color: "#2C2C2A", textDecoration: "none", padding: "0.75rem 0", borderBottom: "0.5px solid #D3D1C7", fontFamily: "'Inter', sans-serif" }}>
                {item.label}
              </a>
            ))}
            <button style={{ fontSize: "14px", padding: "10px 20px", border: "0.5px solid #BA7517", borderRadius: "20px", color: "#BA7517", background: "transparent", cursor: "pointer", fontFamily: "'Inter', sans-serif", marginTop: "1rem", alignSelf: "flex-start" as const }}>
              Join free
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
