"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JoinCTA from "../../components/JoinCTA";

export default function HardConversations() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Section five
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            The Hard Conversations
          </h1>
          <p style={{ fontSize: "19px", fontFamily: "'Lora', serif", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A", marginBottom: "2rem" }}>
            The redlines. The documents. The 1:49am phone call.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            We have some hard redlines that we&apos;d talked about for a long time: no intubation, no dialysis, no more transplants. Of course these redlines could be modified under the right conditions. But there is a point when you know what the right thing to do is — and when intervention is just making life miserable.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            The gift you give each other by having these conversations early is immeasurable. At 1:49am when the hospitalist calls, you don&apos;t have time to figure out what they would have wanted. You need to already know.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "2rem", fontWeight: 500 }}>
            Coming soon
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", maxWidth: "860px" }}>
            {[
              { title: "Full Comfort Care", desc: "Knowing what those words mean before you hear them at 1:49am. The most important three words in end-of-life care.", href: "/hard-conversations/full-comfort-care" },
              { title: "The Redlines Conversation", desc: "How to have it before you need it. What to cover, how to document it, and how to revisit it as circumstances change.", href: null },
              { title: "Advance Directives, DNRs, and Wills", desc: "Plain English guide to the legal documents every caregiver needs. Not scary — necessary.", href: null },
              { title: "Palliative vs. Hospice", desc: "What the words actually mean. The difference between managing symptoms and accepting the end.", href: null },
              { title: "Lonna's List", desc: "The patient perspective. What she wished the caregiver knew. No sacred cows.", href: null },
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

        <JoinCTA message="Have the conversation before you need to have the conversation." />

        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;I can only hope that in my final hours I have a compassionate advocate taking care of me.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — Casey King, 3:50am, July 29 2025
          </cite>
        </section>
      </div>
      <Footer />
    </main>
  );
}
