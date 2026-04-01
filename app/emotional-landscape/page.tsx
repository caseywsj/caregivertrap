"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JoinCTA from "../../components/JoinCTA";

export default function EmotionalLandscape() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Section four
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            The Emotional Landscape
          </h1>
          <p style={{ fontSize: "19px", fontFamily: "'Lora', serif", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A", marginBottom: "2rem" }}>
            The feelings nobody prepares you for. And the ones that save you.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            Caregiving is not just a logistical challenge. It&apos;s an emotional one that operates on a completely different frequency — one that doesn&apos;t respond to spreadsheets or schedules or medication logs. This section is about the inner life of the caregiver. The anger you&apos;re not supposed to feel. The joy you&apos;re surprised to find. The music that gets you through the night.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            And the party you should throw while there&apos;s still time.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "2rem", fontWeight: 500 }}>
            Articles
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", maxWidth: "860px" }}>
            {[
              { title: "Throw the Damn Party", desc: "Easter weekend. A hundred and ten people. Don't save the good words for the eulogy — say them now, while your person is still there to hear them.", href: "/emotional-landscape/throw-the-damn-party" },
              { title: "Miranda Lambert on Loop", desc: "The playlist that got me through the ICU. Music as medicine — and why the right song at the right moment is not a small thing.", href: null },
              { title: "The Waiter Trick", desc: "Give people something specific to do. Vague offers of help disappear. Specific asks get answered. How to let your village actually help you.", href: null },
              { title: "Avoid Anger", desc: "That which angers you controls you. The hardest emotional discipline in caregiving — and why it matters more than you think.", href: null },
              { title: "The World Getting Smaller", desc: "It happens gradually. The friendships, the activities, the range of motion. What contracts during caregiving and how to keep it from closing entirely.", href: null },
              { title: "Finding Normal Inside the Chaos", desc: "Dinner when she couldn't eat. Movies. Museums. The ordinary things that kept us us.", href: null },
            ].map((item, i) => (
              item.href ? (
                <a key={i} href={item.href} style={{ textDecoration: "none" }}>
                  <div
                    style={{ padding: "1.5rem", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#fff", cursor: "pointer" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "#BA7517"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "#D3D1C7"}
                  >
                    <p style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", lineHeight: 1.4 }}>{item.title}</p>
                    <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "0.75rem" }}>{item.desc}</p>
                    <p style={{ fontSize: "12px", color: "#BA7517" }}>Read →</p>
                  </div>
                </a>
              ) : (
                <div key={i} style={{ padding: "1.5rem", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#fff" }}>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", lineHeight: 1.4 }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "0.75rem" }}>{item.desc}</p>
                  <p style={{ fontSize: "11px", color: "#888780" }}>Coming soon</p>
                </div>
              )
            ))}
          </div>
        </section>

        <JoinCTA message="The feelings nobody prepares you for. And the ones that save you." />

        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;Life is about the stories we make and share.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — Casey King, CaringBridge
          </cite>
        </section>

      </div>
      <Footer />
    </main>
  );
}
