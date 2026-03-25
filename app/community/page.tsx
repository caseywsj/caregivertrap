"use client";
import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Community() {
  const [submitted, setSubmitted] = useState(false);
  const [story, setStory] = useState("");
  const [phase, setPhase] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (story && phase) setSubmitted(true);
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Community
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            You&apos;re Not Alone in This
          </h1>
          <p style={{ fontSize: "19px", fontFamily: "'Lora', serif", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A", marginBottom: "2rem" }}>
            The path forward is through community.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            I received over 200 text messages the morning after Lonna passed. While sad and lonely, I knew the path forward was through community. Not pity. Not performance. Real people who had been there and come out the other side.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            This is that community. Share your story. Read someone else&apos;s. Know that whatever phase you&apos;re in right now, someone else has been exactly there.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "1.5rem", fontWeight: 500 }}>
            Share your story
          </p>
          {submitted ? (
            <div style={{ padding: "2rem", border: "0.5px solid #BA7517", borderRadius: "8px", background: "#FAEEDA" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", marginBottom: "0.5rem" }}>
                Thank you for sharing.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }}>
                Your story will be reviewed and added to the community. It matters more than you know.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: "1rem" }}>
              <div>
                <label style={{ fontSize: "12px", color: "#888780", letterSpacing: "0.5px", display: "block", marginBottom: "6px" }}>
                  Where are you in the journey?
                </label>
                <select
                  value={phase}
                  onChange={(e) => setPhase(e.target.value)}
                  required
                  style={{ fontSize: "14px", padding: "8px 14px", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#FDFAF6", color: "#2C2C2A", fontFamily: "'Inter', sans-serif", width: "100%", outline: "none" }}
                >
                  <option value="">Select your phase</option>
                  <option>I just got the call</option>
                  <option>Deep in the grind</option>
                  <option>In crisis</option>
                  <option>New normal</option>
                  <option>Approaching the end</option>
                  <option>After</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "#888780", letterSpacing: "0.5px", display: "block", marginBottom: "6px" }}>
                  Your story (200–500 words)
                </label>
                <textarea
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  required
                  rows={8}
                  placeholder="What do you wish someone had told you? What got you through? What are you still figuring out?"
                  style={{ fontSize: "14px", padding: "12px 14px", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#FDFAF6", color: "#2C2C2A", fontFamily: "'Inter', sans-serif", width: "100%", outline: "none", lineHeight: 1.7, resize: "vertical" }}
                />
              </div>
              <div>
                <label style={{ fontSize: "12px", color: "#888780", letterSpacing: "0.5px", display: "block", marginBottom: "6px" }}>
                  First name (optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="How you'd like to be credited"
                  style={{ fontSize: "14px", padding: "8px 14px", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#FDFAF6", color: "#2C2C2A", fontFamily: "'Inter', sans-serif", width: "100%", outline: "none" }}
                />
              </div>
              <button type="submit" style={{ fontSize: "14px", padding: "10px 24px", borderRadius: "20px", background: "#BA7517", color: "#FDFAF6", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", alignSelf: "flex-start" as const }}>
                Share my story
              </button>
              <p style={{ fontSize: "11px", color: "#888780", lineHeight: 1.6 }}>
                Stories are reviewed before publishing. Your first name only will be shown unless you prefer anonymous.
              </p>
            </form>
          )}
        </section>

        <section style={{ padding: "3rem 2rem 4rem", background: "#F5F0E8", borderTop: "0.5px solid #D3D1C7" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "2rem", fontWeight: 500 }}>
            From the community
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              { phase: "Deep in the grind", text: "You make me feel like I am there. Like someone finally understands what this actually looks like." },
              { phase: "After", text: "She had so much to complain about and yet I never heard her complain about anything." },
              { phase: "New normal", text: "Please include me on your available to help list." },
            ].map((story, i) => (
              <div key={i} style={{ padding: "1.5rem", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#FDFAF6" }}>
                <span style={{ fontSize: "10px", color: "#BA7517", letterSpacing: "0.5px", textTransform: "uppercase" as const, fontWeight: 500, display: "block", marginBottom: "8px" }}>{story.phase}</span>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "14px", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A" }}>&ldquo;{story.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
