import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JoinCTA from "../../components/JoinCTA";

export default function After() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Section six
          </p>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#2C2C2A" }}>
            After
          </h1>
          <p style={{ fontSize: "19px", fontFamily: "'Lora', serif", fontStyle: "italic", lineHeight: 1.7, color: "#5F5E5A", marginBottom: "2rem" }}>
            The closet going barren. The pillow and backpack walking out alone. And then.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            I knew healing would not happen inside my condo. So I made the effort to be as forward-facing as possible. Talk to people. Travel. Play tennis. Fly airplanes. Meet new people. Have lunches and dinners. Only watch sports on TV. Write in my journal. Read books. Be with my son as much as possible.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            I still think of Lonna every single day. And I wake up, open the blinds, look at the view and say — wow. How lucky am I to be alive. Let&apos;s do something awesome.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "2rem", fontWeight: 500 }}>
            Coming soon
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", maxWidth: "860px" }}>
            {[
              { title: "Apathy vs. depression", desc: "The distinction that matters. Not caring if you lived or died — that's not the same as being suicidal. What the early days actually feel like." },
              { title: "Healing doesn't happen inside your condo", desc: "The first and most important decision. Get out. Forward facing. Do the opposite of spiraling." },
              { title: "The van trip alone", desc: "New Mexico and Colorado. Journals, music, books, making sense of it all. Running toward something even when you don't know what it is." },
              { title: "The list of 20 friends", desc: "What Casey observed about how others navigated loss. The pattern that made him determined to do the opposite." },
              { title: "The reinvention", desc: "Look for inspiring things every day. Get comfortable being uncomfortable. Have less of a filter. The three principles that carried him forward." },
              { title: "Soaring Spirits and Camp Widow", desc: "Places where you can always bring your person. Resources for the long after that actually understand what this is." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "1.5rem", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#fff" }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", lineHeight: 1.4 }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <JoinCTA message="There is an after. And it can be genuinely good." />

        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;I was never meant to control the outcome. Only to show up with everything I had. And we both did that.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — Casey King, journal entry 2025
          </cite>
        </section>
      </div>
      <Footer />
    </main>
  );
}
