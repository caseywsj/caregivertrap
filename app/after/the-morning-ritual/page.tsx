"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function TheMorningRitual() {
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
            The Morning Ritual
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            Day two. Open all the blinds. Look at the view. Say it out loud. It sounds small. It wasn&apos;t small. It was the whole thing.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              Lonna never liked the blinds open in the morning. Particularly in the bedroom — which has arguably the best view in the condo, looking out over Congress Avenue, Second Street, and Town Lake. The reason was simple: she didn&apos;t want anyone seeing her walk around naked. Me — I could not care less.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              On Day 2 — July 30th, the morning after she passed — I walked through the condo and opened every blind. All of them. The bedroom, the living room, the office, all of it. Morning light came through and hit the floors and the walls and the view opened up — Austin below, the hills in the distance, the sky doing whatever the sky was doing that day.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I stood there for a moment and said it out loud: <em>I&apos;m alive for another day.</em>
            </p>

            <p style={{ marginBottom: "1.5rem" }}>That&apos;s it. That&apos;s the whole ritual. It sounds like nothing. It was not nothing.</p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              Grief will find you in the evenings. The morning ritual is your answer to it. Build one before you need it.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              Here&apos;s what I understood, almost immediately, about the structure of early grief. The nights are the hardest. Between 8pm and 10pm — that window before sleep when the day&apos;s momentum runs out and the quiet arrives — that&apos;s when it hits. There&apos;s nothing to do. Nowhere to be. The caregiving brain that ran at full capacity for years suddenly has nothing to process. The silence is enormous.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>The mornings are different. The mornings are yours to design.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              I had written in my journal the night before — the night she passed, at 3:50am in the hospital — thinking forward to what comes next. The funeral home. The calls to make. The CaringBridge post. The facility meeting. I had a list before she was gone. Not because I&apos;m cold. Because I&apos;m an engineer and lists are how I process the unprocessable.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              But underneath the list was something simpler. A decision about how to start each day. Not a productivity hack. Not a grief strategy. Just a small deliberate act that said: I am still here. I am still me. The day is beginning and I am choosing to begin it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Opening the blinds was that act. Specific to me, specific to Lonna — a tiny rebellion and a tiny tribute simultaneously. She didn&apos;t like the blinds open. I do. And now I get to have them open. That&apos;s not disrespect. That&apos;s life continuing on its own terms.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The ritual expanded over the first few days. Glass of water first thing. Step outside onto the balcony if the weather allowed. Look at the view. Say the words. <em>I&apos;m alive for another day.</em> Then — and this part matters — decide what awesome thing I was going to do with it. Not a grand plan. Just one thing. Today I have lunch with William. Today I drive to Georgetown Airport. Today I go to the pool and talk to whoever is there.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>One thing. Then do it.</p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                On building a morning ritual in grief
              </p>
              {[
                "It doesn't have to be opening blinds. It has to be yours — specific to you, repeatable, and done before the day has a chance to tell you how to feel.",
                "The ritual works because it establishes agency before anything else. Before the texts come in. Before the to-do list. Before the grief has fully loaded for the day. You did one thing on purpose. That matters more than it sounds.",
                "Keep it simple. Keep it physical. Opening blinds, making water, stepping outside, saying something out loud — these are not metaphors. They are actual things your body does in the actual world. That's the point.",
                "The caregiving years had a built-in morning ritual whether you wanted one or not — medications, tube feeds, vitals, the log. Structure arrived automatically. In the After, you have to build it yourself. Build it small. Build it on purpose. Build it before you need it.",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>{item}</p>
              ))}
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              I still open the blinds every morning. Every single one. I still step onto the balcony when the weather allows. I still say it — sometimes out loud, sometimes just in my head. <em>I&apos;m alive for another day.</em>
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Some mornings it feels like a statement of fact. Some mornings it feels like an argument I&apos;m making to myself. Some mornings it&apos;s the only thing I know for certain.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>All of those mornings, it&apos;s enough to start.</p>

            <p style={{ marginBottom: "2.5rem" }}>
              Lonna would have found this mildly ridiculous. She would have pointed out that someone on Congress Avenue could see straight into the bedroom. She would have been right. I open them anyway.
            </p>

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
            <a href="/after/the-letter" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The Letter
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="I'm alive for another day. That's enough to start." />
      </div>
      <Footer />
    </main>
  );
}
