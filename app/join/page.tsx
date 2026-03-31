"use client";
import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Join() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <section style={{ padding: "8rem 2rem 4rem", maxWidth: "560px" }}>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1.5rem", fontWeight: 500 }}>
            Join the community
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            You don&apos;t have to figure this out alone.
          </h1>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1rem" }}>
            Join The Caregiver&apos;s Trap community. We&apos;ll let you know when new articles are published, when the book launches, and when there&apos;s something worth sharing.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "3rem" }}>
            No spam. No noise. Just real content for people in the middle of something hard.
          </p>

          {submitted ? (
            <div style={{ padding: "2rem", border: "0.5px solid #BA7517", borderRadius: "8px", background: "#FAEEDA" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "20px", color: "#2C2C2A", marginBottom: "0.5rem" }}>
                You&apos;re in.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }}>
                Welcome to the community. We&apos;ll be in touch when something is worth sharing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: "1rem", maxWidth: "400px" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ fontSize: "15px", padding: "12px 18px", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#fff", color: "#2C2C2A", fontFamily: "'Inter', sans-serif", outline: "none", width: "100%" }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{ fontSize: "15px", padding: "12px 24px", borderRadius: "8px", background: "#BA7517", color: "#FDFAF6", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", opacity: loading ? 0.7 : 1, fontWeight: 500 }}
              >
                {loading ? "Joining..." : "Join free"}
              </button>
              {error && <p style={{ fontSize: "12px", color: "#E24B4A" }}>{error}</p>}
              <p style={{ fontSize: "11px", color: "#888780", lineHeight: 1.6 }}>
                Your email is never shared or sold. Unsubscribe anytime.
              </p>
            </form>
          )}

        </section>

        <section style={{ padding: "0 2rem 6rem", maxWidth: "560px" }}>
          <div style={{ borderTop: "0.5px solid #D3D1C7", paddingTop: "3rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "1.5rem", fontWeight: 500 }}>
              What you&apos;ll get
            </p>
            {[
              "New articles as they&apos;re published — across all six sections",
              "First access when the book launches",
              "Community stories worth reading",
              "No fluff. No filler. Just the real stuff.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ color: "#BA7517", fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3rem 2rem 4rem", borderTop: "0.5px solid #D3D1C7", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;The caregiver trap isn&apos;t a metaphor. It&apos;s a genuine risk to your health, your identity, and sometimes your life. You are not alone in it.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — Casey King, The Caregiver&apos;s Trap
          </cite>
        </section>

      </div>
      <Footer />
    </main>
  );
}
