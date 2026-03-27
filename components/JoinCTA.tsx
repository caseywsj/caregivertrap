"use client";
import { useState } from "react";

export default function JoinCTA({ message }: { message?: string }) {
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
    <section style={{
      padding: "3rem 2rem",
      background: "#F5F0E8",
      borderTop: "0.5px solid #D3D1C7",
      borderBottom: "0.5px solid #D3D1C7",
    }}>
      <div style={{ maxWidth: "580px" }}>
        <p style={{
          fontFamily: "'Lora', serif",
          fontSize: "22px",
          fontWeight: 400,
          color: "#2C2C2A",
          marginBottom: "0.75rem",
          lineHeight: 1.4,
        }}>
          {message || "You don't have to figure this out alone."}
        </p>
        <p style={{
          fontSize: "15px",
          color: "#5F5E5A",
          lineHeight: 1.7,
          marginBottom: "1.5rem",
        }}>
          Join the community. Get access to tools, real stories, and content built for exactly where you are right now.
        </p>
        {submitted ? (
          <p style={{
            fontSize: "14px",
            color: "#BA7517",
            fontStyle: "italic",
            fontFamily: "'Lora', serif",
          }}>
            You&apos;re in. We&apos;ll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                fontSize: "13px",
                padding: "8px 16px",
                border: "0.5px solid #D3D1C7",
                borderRadius: "20px",
                background: "#FDFAF6",
                color: "#2C2C2A",
                fontFamily: "'Inter', sans-serif",
                width: "220px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                fontSize: "13px",
                padding: "8px 20px",
                borderRadius: "20px",
                background: "#BA7517",
                color: "#FDFAF6",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Saving..." : "Join free"}
            </button>
            {error && <p style={{ fontSize: "12px", color: "#E24B4A", width: "100%" }}>{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
