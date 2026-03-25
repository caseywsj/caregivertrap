import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JoinCTA from "../../components/JoinCTA";

export default function Tools() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Tools
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            Tools Built From Experience
          </h1>
          <p style={{ fontSize: "19px", fontFamily: "'Lora', serif", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A", marginBottom: "2rem" }}>
            Not designed by committee. Built at 3am out of necessity.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            Every tool on this page came from a real problem that needed solving. The medication manager came from managing three dozen pills across multiple pharmacies. The care coordinator came from a January crisis when two hospital systems couldn&apos;t talk to each other. The letter tool came from something more personal. They work because they were built by someone who needed them.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", maxWidth: "960px" }}>
            {[
              {
                label: "Coming soon",
                title: "Medication Manager",
                desc: "The pill box deserves its own tool. Add your medications, get a printable daily schedule, flag timing conflicts across multiple pharmacies, and track why things changed. Built for the reality of managing three dozen medications.",
                cta: "Join the waitlist →",
              },
              {
                label: "Coming soon",
                title: "Care Coordinator",
                desc: "The v0.1 document built during a crisis — now interactive. Build your personalized care coordination document. Provider directory, emergency action plan, patient-specific knowledge, medication protocols. Export and share with any new provider.",
                cta: "Join the waitlist →",
              },
              {
                label: "Coming soon",
                title: "The Letter Tool",
                desc: "Help preserve and hear the voice of the person you love. Two pathways — the archive path uses existing writing to build a voice profile, the interview path works through structured questions. For before and after.",
                cta: "Join the waitlist →",
              },
              {
                label: "Coming soon",
                title: "Daily Caregiver Checklist",
                desc: "Not a generic list. An adaptive checklist that branches based on where you are in the journey. Early stage vs. late stage. At home vs. in a facility. Starting with one question: what phase are you in?",
                cta: "Join the waitlist →",
              },
            ].map((tool, i) => (
              <div key={i} style={{ padding: "2rem", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#fff", display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
                <span style={{ fontSize: "10px", color: "#BA7517", letterSpacing: "1px", textTransform: "uppercase" as const, fontWeight: 500 }}>{tool.label}</span>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "20px", fontWeight: 500, color: "#2C2C2A", lineHeight: 1.3 }}>{tool.title}</p>
                <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, flexGrow: 1 }}>{tool.desc}</p>
                <a href="/community" style={{ fontSize: "13px", color: "#BA7517", textDecoration: "none", fontWeight: 500, marginTop: "0.5rem" }}>{tool.cta}</a>
              </div>
            ))}
          </div>
        </section>

        <JoinCTA message="Tools built by a caregiver for caregivers." />

      </div>
      <Footer />
    </main>
  );
}
