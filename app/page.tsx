"use client";

import { useState } from "react";
import Nav from "../components/Nav";

const communityStories = [
  { phase: "Deep in the grind", text: "You make me feel like I am there. Like someone finally understands what this actually looks like." },
  { phase: "After", text: "She had so much to complain about and yet I never heard her complain about anything." },
  { phase: "New normal", text: "Please include me on your available to help list." },
  { phase: "The trap", text: "You are doing an amazing job. Those words made me feel more alone, not less. Now I finally understand why." },
  { phase: "Crisis", text: "I didn't know there was a name for what I was feeling. The Caregiver's Trap. That's exactly it." },
  { phase: "After", text: "Healing doesn't happen inside your condo. I needed someone to say that out loud." },
  { phase: "Daily grind", text: "I thought I was the only one counting the pills at midnight and calling it a win." },
  { phase: "I just got the call", text: "Nobody warned me about the parking garage. Nobody warned me about any of it." },
  { phase: "New normal", text: "We went to dinner and she watched me eat. And it was still the best night we'd had in months." },
];

const phases = [
  { text: "I just got the call. Everything changed overnight.", href: "/the-trap" },
  { text: "I'm deep in it. Every day is a grind and I'm running on empty.", href: "/daily-grind" },
  { text: "We're in a crisis right now — hospital, decisions, fear.", href: "/fight-back" },
  { text: "We've found our footing. Life is almost normal but different.", href: "/emotional-landscape" },
  { text: "I can see the end coming. I need to be ready.", href: "/hard-conversations" },
  { text: "It's over. I'm trying to figure out what comes next.", href: "/after" },
];

const recentArticles = [
  { title: "The 45-Minute Argument", section: "Fight Back", desc: "I have had dozens of tense interactions with physicians over the years. This one had an audience.", href: "/fight-back/the-45-minute-argument" },
  { title: "The Morning Ritual", section: "After", desc: "Day two. Open all the blinds. Look at the view. Say it out loud. It sounds small. It wasn't small.", href: "/after/the-morning-ritual" },
  { title: "The Camera", section: "After", desc: "Day 23. Colorado. I turned on the home security feed to check on the cats.", href: "/after/the-camera" },
  { title: "Throw the Damn Party", section: "Emotional Landscape", desc: "Easter weekend. A hundred and ten people. Don't save the good words for the eulogy — say them now.", href: "/emotional-landscape/throw-the-damn-party" },
];

export default function Home() {
  const [storyOffset, setStoryOffset] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const visibleStories = [
    communityStories[storyOffset % communityStories.length],
    communityStories[(storyOffset + 1) % communityStories.length],
    communityStories[(storyOffset + 2) % communityStories.length],
  ];

  const handleEmailSubmit = async (e: React.FormEvent) => {
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FDFAF6; }
        .intake-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; max-width: 680px; }
        .recent-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; max-width: 860px; }
        .proof-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; }
        .story-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
        .book-strip { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
        .phase-btn { padding: 1.1rem 1.25rem; border: 0.5px solid #D3D1C7; border-radius: 8px; cursor: pointer; background: #FDFAF6; text-align: left; font-family: 'Lora', serif; font-size: 14px; font-style: italic; line-height: 1.5; color: #2C2C2A; transition: border-color 0.15s, background 0.15s; text-decoration: none; display: block; }
        .phase-btn:hover { border-color: #BA7517; background: #FAEEDA; }
        .recent-card { padding: 1.5rem; border: 0.5px solid #D3D1C7; border-radius: 8px; background: #fff; text-decoration: none; display: block; transition: border-color 0.15s; }
        .recent-card:hover { border-color: #BA7517; }
        @media (max-width: 768px) {
          .intake-grid { grid-template-columns: 1fr !important; }
          .recent-grid { grid-template-columns: 1fr !important; }
          .proof-grid { grid-template-columns: 1fr !important; }
          .story-grid { grid-template-columns: 1fr !important; }
          .book-strip { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <Nav />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Hero */}
        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#BA7517", marginBottom: "1.5rem", fontWeight: 500 }}>
            A resource for caregivers
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 400, lineHeight: 1.35, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            It happens slowly. The isolation. The responsibility. Until one day you realize you&apos;ve been so busy taking care of someone else that you{" "}
            <em style={{ color: "#BA7517" }}>forgot to take care of yourself.</em>
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#5F5E5A", fontWeight: 300, marginBottom: "2.5rem" }}>
            The Caregiver&apos;s Trap is real. You&apos;re not alone in it. This site was built by someone who lived it for over two decades — and came out the other side.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        {/* Intake */}
        <section style={{ padding: "0 2rem 4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#888780", marginBottom: "1.5rem", fontWeight: 500 }}>
            Where are you right now?
          </p>
          <div className="intake-grid">
            {phases.map((phase, i) => (
              <a key={i} href={phase.href} className="phase-btn">
                {phase.text}
              </a>
            ))}
          </div>
        </section>

        {/* Recently Added */}
        <section style={{ padding: "0 2rem 4rem", borderTop: "0.5px solid #D3D1C7" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", paddingTop: "2rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#888780", fontWeight: 500 }}>
              Recently added
            </p>
            <a href="/the-trap" style={{ fontSize: "11px", color: "#BA7517", textDecoration: "none", letterSpacing: "0.5px" }}>
              Browse all sections →
            </a>
          </div>
          <div className="recent-grid">
            {recentArticles.map((article, i) => (
              <a key={i} href={article.href} className="recent-card">
                <p style={{ fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: "#BA7517", fontWeight: 500, marginBottom: "0.5rem" }}>
                  {article.section}
                </p>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                  {article.title}
                </p>
                <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                  {article.desc}
                </p>
                <p style={{ fontSize: "12px", color: "#BA7517" }}>Read →</p>
              </a>
            ))}
          </div>
        </section>

        {/* Proof quotes */}
        <section style={{ padding: "3rem 2rem", borderTop: "0.5px solid #D3D1C7" }}>
          <div className="proof-grid">
            {[
              { quote: '"I\'m an engineer playing a doctor on the internet."', attr: "CaringBridge — March 2023" },
              { quote: '"I was never meant to control the outcome. Only to show up with everything I had."', attr: "Casey's journal — August 2025" },
              { quote: '"It was a privilege of a lifetime to take care of Lonna."', attr: "CaringBridge — July 2025" },
            ].map((item, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.6, color: "#2C2C2A", marginBottom: "0.75rem" }}>{item.quote}</p>
                <span style={{ fontSize: "11px", color: "#888780", letterSpacing: "0.3px" }}>{item.attr}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Community stories */}
        <section style={{ padding: "3rem 2rem", background: "#F5F0E8", borderTop: "0.5px solid #D3D1C7" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#888780", fontWeight: 500 }}>
              From the community
            </p>
            <button onClick={() => setStoryOffset((prev) => (prev + 3) % communityStories.length)} style={{ fontSize: "11px", color: "#BA7517", background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", letterSpacing: "0.5px" }}>
              See more stories →
            </button>
          </div>
          <div className="story-grid">
            {visibleStories.map((story, i) => (
              <div key={i} style={{ background: "#FDFAF6", border: "0.5px solid #D3D1C7", borderRadius: "8px", padding: "1.1rem 1.25rem" }}>
                <span style={{ fontSize: "10px", color: "#BA7517", letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 500, display: "block", marginBottom: "8px" }}>{story.phase}</span>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "13px", fontStyle: "italic", lineHeight: 1.6, color: "#5F5E5A" }}>&ldquo;{story.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* Book strip */}
        <section style={{ padding: "2rem", borderTop: "0.5px solid #D3D1C7" }}>
          <div className="book-strip">
            <div>
              <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "15px", color: "#2C2C2A", marginBottom: "4px" }}>
                The Caregiver&apos;s Trap: A Roadmap for When the Caregiver Needs Care
              </p>
              <p style={{ fontSize: "13px", color: "#5F5E5A" }}>The book is coming. Be the first to know.</p>
            </div>
            {submitted ? (
              <p style={{ fontSize: "13px", color: "#BA7517", fontStyle: "italic" }}>Thank you — we&apos;ll be in touch.</p>
            ) : (
              <form onSubmit={handleEmailSubmit} style={{ display: "flex", gap: "8px", flexShrink: 0, flexWrap: "wrap" }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: "13px", padding: "7px 14px", border: "0.5px solid #D3D1C7", borderRadius: "20px", background: "#FDFAF6", color: "#2C2C2A", fontFamily: "'Inter', sans-serif", width: "200px", outline: "none" }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{ fontSize: "13px", padding: "7px 18px", borderRadius: "20px", background: "#BA7517", color: "#FDFAF6", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap", opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Saving..." : "Notify me"}
                </button>
                {error && <p style={{ fontSize: "12px", color: "#E24B4A", width: "100%" }}>{error}</p>}
              </form>
            )}
          </div>
        </section>

        {/* Footer quote */}
        <section style={{ padding: "2.5rem 2rem 4rem", borderTop: "0.5px solid #D3D1C7", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;I am tired of clinging. Though I cannot see it with my eyes, I trust that the current knows where it is going. I shall let go, and let it take me where it will.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", letterSpacing: "0.3px", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — Richard Bach, Illusions
          </cite>
        </section>

      </div>
    </main>
  );
}
