"use client";
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
            The caregiving is over. Now what?
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            Nobody prepares you for the After. The grief, yes — but not the emptiness where the purpose used to be. Not the hours that used to be filled with medications and logistics and advocacy and love, now just hours. This section is about what comes next. The rebuilding. The identity that has to be reconstructed from scratch. The surprising ways life finds you again.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            Written from the inside. Still happening.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "2rem", fontWeight: 500 }}>
            Articles
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", maxWidth: "860px" }}>
            {[
              { title: "The Lonely Chapter", desc: "The space between who you were and who you're becoming. It wasn't the friendships that contracted. It was the activities. And then you get to work.", href: "/after/the-lonely-chapter" },
              { title: "The Earth Gym", desc: "Put down the devices. Get outside. Meet people. Use your body. Day 11 — EAA meeting, then Salt Lick alone for dinner. This is not a wellness tip. It's a survival strategy.", href: "/after/the-earth-gym" },
              { title: "The Letter", desc: "Day 19. I asked ChatGPT to write me a letter from Lonna. What came back stopped me cold.", href: "/after/the-letter" },
              { title: "The Camera", desc: "I turned on the home security feed to check on the cats. The living room cam came on and there was Lonna. A stored frame from the last time I'd looked. She was in her chair, waiting for me to help her up. Gutted.", href: "/after/the-camera" },
              { title: "The Morning Ritual", desc: "Day two. Open all the blinds. Look at the view. Say it out loud: I'm alive for another day. It sounds small. It wasn't small. It was the whole thing.", href: "/after/the-morning-ritual" },
              { title: "The Days Have Too Many Hours in Them", desc: "Nobody warns you about this part. Not the sadness — the emptiness. The hours that used to be filled with purpose and are now just hours. The operational reality of early grief.", href: "/after/the-days-have-too-many-hours" },
              { title: "Happiness = Smiles − Frowns", desc: "Steve Wozniak's formula for happiness. Found it on Day 30. Still the simplest true thing I know about grief and rebuilding.", href: "/after/happiness-smiles-frowns" },
              { title: "Apathy Is Not Depression", desc: "I didn't care if I lived or died. That's not the same as being suicidal. The distinction matters enormously — and I named it accurately on day one.", href: null },
              { title: "Not Without Her — With Her", desc: "She answers back. The playlist. The ring on Carolina's finger. The blinds open every morning. Moving forward doesn't mean leaving behind — it means bringing her along.", href: null },
              { title: "The Van Trip", desc: "New Mexico. Colorado. The LonnaLungs playlist for the first time — tragic and tears. Brian proposing in Italy with her ring. The healing that happens in motion.", href: null },
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

        <JoinCTA message="The caregiving is over. Now what? Written from the inside. Still happening." />

        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;Live your life now as fully as possible enriched with their memory.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — Soaring Spirits
          </cite>
        </section>

      </div>
      <Footer />
    </main>
  );
}
