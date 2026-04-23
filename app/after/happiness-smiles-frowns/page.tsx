"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function HappinessSmilesFroms() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>

          <div style={{ marginBottom: "2rem" }}>
            <a href="/after" style={{ fontSize: "12px", color: "#BA7517", textDecoration: "none", letterSpacing: "0.5px" }}>
              ← After
            </a>
          </div>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            After
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1rem", color: "#2C2C2A" }}>
            Happiness = Smiles − Frowns
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            Steve Wozniak&apos;s formula. I found it on Day 30. Still the simplest true thing I know.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              I wrote it in my journal on August 28th. One line. No elaboration.
            </p>

            <p style={{ marginBottom: "1.5rem", fontStyle: "italic" }}>
              I need to employ Steve Woz&apos;s formula for happiness. Happiness = Smiles − Frowns.
            </p>

            <div style={{ fontFamily: "'Lora', serif", fontSize: "28px", fontWeight: 400, color: "#2C2C2A", textAlign: "center" as const, padding: "2rem", background: "#F5F0E8", borderRadius: "8px", margin: "2rem 0", letterSpacing: "-0.5px" }}>
              Happiness <span style={{ color: "#BA7517" }}>=</span> Smiles <span style={{ color: "#BA7517" }}>−</span> Frowns
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              The frowns are not fully in your control. Loss happens. Grief arrives without asking. You can&apos;t decide not to be sad when something sad occurs. That variable is mostly fixed.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The smiles are different. More controllable than you think. You manufacture them by creating experiences. Memories work — but new experiences are more powerful. A memory is fixed. A new experience is alive. It has surprise in it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              And community multiplies everything. A smile alone is good. A smile with people around you is better. You can manufacture solo smiles — a long drive, a sunset from the balcony — but community is the amplifier. I have found this to be consistently true.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              You can&apos;t always reduce the frowns. But you can almost always add more smiles. That&apos;s the whole formula.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              Happiness is not a persistent state. It&apos;s a score. It goes up and down. The goal is not to eliminate the frowns — impossible — but to keep generating enough smiles that the balance stays positive.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              And the opposite of happiness is not sadness. Sadness is a feeling — it moves through you if you let it. The opposite of happiness is boredom. Boredom goes nowhere. It generates nothing. It drains you without giving anything back.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              There&apos;s a companion rule I keep nearby: that which angers you controls you. Anger and boredom are both energy thieves. Recognize them. Name them. Then go find a smile.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>Don&apos;t be bored.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Go find something worth smiling about. Preferably with other people. Preferably something new.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>Woz had it right.</p>

          </div>

          <div style={{ padding: "1.5rem", background: "#F5F0E8", borderRadius: "8px", marginBottom: "3rem" }}>
            <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.7 }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>Casey King</strong> cared for his wife Lonna for over two decades. She passed on July 29, 2025. He is writing <em>The Caregiver&apos;s Trap: A Roadmap for When the Caregiver Needs Care</em> — for other caregivers, and specifically for his son Brian.
            </p>
          </div>

          <div style={{ borderTop: "0.5px solid #D3D1C7", paddingTop: "2rem", marginBottom: "3rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "1rem", fontWeight: 500 }}>
              Continue reading
            </p>
            <a href="/after/the-lonely-chapter" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The Lonely Chapter
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="You can't always reduce the frowns. But you can almost always add more smiles." />
      </div>
      <Footer />
    </main>
  );
}
