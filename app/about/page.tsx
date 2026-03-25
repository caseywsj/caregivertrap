import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JoinCTA from "../../components/JoinCTA";

export default function About() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "720px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            About
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            Built by someone who lived it.
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            My wife Lonna was diagnosed with scleroderma over twenty-five years ago. For most of those years we lived a full, adventurous life — the Camino de Santiago, Colorado summers, tennis, travel, building something real together. The disease was always there. We just didn&apos;t let it be in charge.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            When her pulmonary function started declining, I became more than a husband. I became a scheduler, an advocate, a medical analyst, a logistics coordinator, and eventually a full-time caregiver. I refer to my professional career as prolific — Amazon Kuiper, streaming video, low earth satellites. None of it compares to Project LonnasLungs.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            On March 6, 2023, Lonna received a double lung transplant at Houston Methodist. What followed was two and a half years of the most intense, exhausting, meaningful work of my life. She fought through everything — the ICU, the delirium, the feeding tube, the infusions, the setbacks, the recovery, the adventures. She was a bad ass mofo. I use the present tense deliberately.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            Lonna passed on July 29, 2025. She was 63. The last few hours were beautiful and peaceful. Her room faced the morning sun.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            This site exists because of her. And for the next person sitting in a hospital room at 3am who needs to know that someone else has been there — and that there&apos;s a way through.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem", maxWidth: "720px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "1.5rem", fontWeight: 500 }}>
            About Lonna
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            Lonna Stacy King was petite and mighty. She went hang gliding for her 50th birthday. She hiked the Camino de Santiago. She had an emerald ring from Disney World, a leather jacket, jewelry she made herself, and an opinion about everything. She never complained. She felt sorry for me even though I never felt sorry for myself.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "2rem" }}>
            She was always up for some epic adventure. She still is.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              { text: "She had so much to complain about and yet I never heard her complain about anything. She took it all in stride.", attr: "A neighbor" },
              { text: "She was gentle when it mattered, fierce in her convictions and a true fighter. She inspired us throughout her journey with her strength and grace.", attr: "A close friend" },
              { text: "She had that rare gift of making people feel fully seen and heard — you knew she truly cared when she spoke with you.", attr: "A friend" },
            ].map((quote, i) => (
              <div key={i} style={{ padding: "1.5rem", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#fff" }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "14px", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A", marginBottom: "0.75rem" }}>
                  &ldquo;{quote.text}&rdquo;
                </p>
                <span style={{ fontSize: "11px", color: "#888780" }}>— {quote.attr}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3rem 2rem", borderTop: "0.5px solid #D3D1C7", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "1rem", fontWeight: 500 }}>
            The book
          </p>
          <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "20px", color: "#2C2C2A", marginBottom: "1rem", lineHeight: 1.4 }}>
            The Caregiver&apos;s Trap: A Roadmap for When the Caregiver Needs Care
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1rem" }}>
            Lonna and I started writing this together a couple months before she passed. Technically I&apos;m writing it — but she did contribute to the foreword. The audience is primarily for other caregivers, and specifically written for our son Brian. Look for it where books are found.
          </p>
          <p style={{ fontSize: "13px", color: "#BA7517", fontStyle: "italic", fontFamily: "'Lora', serif" }}>
            Keep me accountable.
          </p>
        </section>

        <JoinCTA message="This site is the roadmap made public." />

        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;It was a privilege of a lifetime to take care of Lonna. And she is the one who always took care of me.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — Casey King, July 2025
          </cite>
        </section>
      </div>
      <Footer />
    </main>
  );
}
