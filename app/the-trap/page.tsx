"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JoinCTA from "../../components/JoinCTA";

export default function TheTrap() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Section one
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            The Trap
          </h1>
          <p style={{ fontSize: "19px", fontFamily: "'Lora', serif", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A", marginBottom: "2rem" }}>
            The identity erosion nobody warns you about.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            You start by taking over a few things. Then suddenly you become a full-time scheduler, advocate, and gatekeeper. You emotionally buffer everyone — including the person you&apos;re caring for. You still try to do it all. Good spouse, good friend, good professional, good parent, and good to yourself.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            Here is the real trap: <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>you lose access to care because you&apos;ve become the source of it.</strong>
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            You&apos;re now the &ldquo;strong one.&rdquo; The &ldquo;you&apos;re so amazing&rdquo; one. The &ldquo;I don&apos;t know how you do it&rdquo; one. All of these are nice to hear. But it often means that people stop offering meaningful help — and you stop asking.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 2rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "0.75rem", fontWeight: 500 }}>
            🎧 Listen to this section
          </p>
          <p style={{ fontSize: "13px", color: "#888780", marginBottom: "1rem", fontStyle: "italic" }}>A 20-minute audio summary of The Trap — updated as new articles are added.</p>
          <div id="buzzsprout-player-19115413"></div>
          <script src="https://www.buzzsprout.com/2615249/episodes/19115413-the-caregiver-s-trap-a-roadmap-for-preservation-and-connection.js?container_id=buzzsprout-player-19115413&player=small" type="text/javascript"</script>
        </section>

                <section style={{ padding: "0 2rem 4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "2rem", fontWeight: 500 }}>
            Articles
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", maxWidth: "860px" }}>
            {[
              { title: "Nobody Is Exempt", desc: "The caregiver trap does not care about your credentials or expertise. It finds the people who love someone and cannot stop showing up. That's everyone.", href: "/the-trap/nobody-is-exempt" },
              { title: "The Disappearing Act", desc: "How competence and love quietly become a cage. The slow disappearance nobody notices — including you.", href: "/the-trap/identity-erosion" },
              { title: "\"You're So Amazing\" — The Loneliest Compliment", desc: "I had an extraordinary village. Not everyone does. Here's what the difference looks like and how to build one.", href: "/the-trap/youre-so-amazing" },
              { title: "Groundhog Day", desc: "The relentless rhythm of caregiving — and how to survive it without losing your mind.", href: "/the-trap/groundhog-day" },
              { title: "Husband First, Caregiver Second", desc: "The most important identity decision you'll make. And why the order matters more than anything.", href: "/the-trap/husband-first" },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{ textDecoration: "none" }}>
                <div
                  key={i}
                  style={{ padding: "1.5rem", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#fff", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "#BA7517"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.borderColor = "#D3D1C7"}
                >
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", lineHeight: 1.4 }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "0.75rem" }}>{item.desc}</p>
                  <p style={{ fontSize: "12px", color: "#BA7517" }}>Read →</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <JoinCTA message="You're not disappearing. You're just lost. Let's find you." />

        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;Over time, the better you get at caregiving, the less visible your own needs become.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — The Caregiver&apos;s Trap, Chapter 1
          </cite>
        </section>

      </div>
      <Footer />
    </main>
  );
}
