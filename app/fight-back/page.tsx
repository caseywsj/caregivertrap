"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JoinCTA from "../../components/JoinCTA";

export default function FightBack() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Section three
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            Fight the Machine
          </h1>
          <p style={{ fontSize: "19px", fontFamily: "'Lora', serif", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A", marginBottom: "2rem" }}>
            Advocacy, coordination, and knowing more than you&apos;re supposed to.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            You can be irritated and frustrated with the system — but that does no good. You have to learn how to live in the system we have and own it. That includes knowing more than you ever wanted to know about insurance, advocacy, the legal side, and where your line in the sand is.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            No one cares more than you. That&apos;s not a burden — it&apos;s your greatest advantage.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "2rem", fontWeight: 500 }}>
            Articles
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", maxWidth: "860px" }}>
            {[
              { title: "PAY ATTENTION to What They're Putting In", desc: "The anti-psychotic prescribed in the ICU that nobody came back to reevaluate. How asking one casual question changed everything.", href: "/fight-back/pay-attention" },
              { title: "Brian, I'm Starting to Forget Things", desc: "A letter to my son — and a system to help when it's your turn. Build it before the fog rolls in.", href: "/fight-back/brian-letter" },
              { title: "The 45-Minute Argument", desc: "How to fight for your person. The doctor who wanted to put her on a subcutaneous pump. Why I pushed back and why it mattered.", href: "/fight-back/the-45-minute-argument" },
              { title: "Multi-Provider Care Coordination", desc: "The v0.1 document built during a crisis. How to keep multiple specialist teams aligned when the system is designed to keep them apart.", href: null },
              { title: "Rejected by Three Transplant Centers", desc: "What to do when the answer is no. How to keep pushing when every institution says stop.", href: null },
              { title: "Decoding the Discharge Process", desc: "The little d, the big D, the big red C. What hospital discharge actually looks like from the inside.", href: null },
              { title: "The Coordination Gap", desc: "What happens when providers don't talk to each other. The amlodipine story. The limits of advocacy and the honest reckoning with what it can and cannot prevent.", href: null },
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

        <JoinCTA message="The system is broken. Here's how to navigate it anyway." />

        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;I told him he was being lazy and not helpful. Trust has to be earned. I do not trust new doctors and they certainly don&apos;t trust me. Pick your battles — but push back. No one cares more than you.&rdquo;
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
