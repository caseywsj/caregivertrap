"use client";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        .ct-nav-desktop { display: flex; align-items: center; gap: 1.5rem; list-style: none; }
        .ct-nav-join { display: block; }
        .ct-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .ct-mobile-menu { display: none; flex-direction: column; background: #FDFAF6; border-top: 0.5px solid #D3D1C7; padding: 1rem 2rem 1.5rem; }
        .ct-mobile-menu.open { display: flex; }
        @media (max-width: 768px) {
          .ct-nav-desktop { display: none !important; }
          .ct-nav-join { display: none !important; }
          .ct-hamburger { display: flex !important; }
        }
      `}</style>

      <nav style={{ borderBottom: "0.5px solid #D3D1C7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>

          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 400, letterSpacing: "-0.3px", color: "#2C2C2A", whiteSpace: "nowrap" }}>
              The Caregiver&apos;s <span style={{ color: "#BA7517" }}>Trap</span>
            </span>
          </a>

          <ul className="ct-nav-desktop">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} style={{ fontSize: "13px", color: "#5F5E5A", textDecoration: "none", whiteSpace: "nowrap" }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="ct-nav-join" style={{ fontSize: "13px", padding: "7px 18px", border: "0.5px solid #BA7517", borderRadius: "20px", color: "#BA7517", background: "transparent", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>
            Join free
          </button>

          <button className="ct-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ display: "block", width: "22px", height: "1.5px", background: menuOpen ? "#BA7517" : "#2C2C2A" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: menuOpen ? "#BA7517" : "#2C2C2A" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: menuOpen ? "#BA7517" : "#2C2C2A" }} />
          </button>
        </div>

        <div className={`ct-mobile-menu${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontSize: "15px", color: "#2C2C2A", textDecoration: "none", padding: "0.75rem 0", borderBottom: "0.5px solid #D3D1C7", fontFamily: "'Inter', sans-serif" }}>
              {item.label}
            </a>
          ))}
          <button style={{ fontSize: "14px", padding: "10px 20px", border: "0.5px solid #BA7517", borderRadius: "20px", color: "#BA7517", background: "transparent", cursor: "pointer", fontFamily: "'Inter', sans-serif", marginTop: "1rem", alignSelf: "flex-start" as const }}>
            Join free
          </button>
        </div>
      </nav>
    </>
  );
}
