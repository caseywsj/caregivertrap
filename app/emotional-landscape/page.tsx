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
            Your fitness. Your tennis. The world getting smaller. The waiter trick.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300, marginBottom: "1.5rem" }}>
            Even from the beginning, I was aware of the need to take care of the caregiver. I would take long walks around Rice University. I found tennis buddies. I wrote CaringBridge entries most days. We had a lot of support.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5F5E5A", fontWeight: 300 }}>
            But over time, the enthusiasm from the community weakens. And normal is not chronic illness. You have to fight to keep yourself intact — your hobbies, your friendships, your sense of humor. Especially your sense of humor.
          </p>
        </section>

        <div style={{ width: "40px", height: "1.5px", background: "#BA7517", margin: "0 0 3rem 2rem" }} />

        <section style={{ padding: "0 2rem 4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "2rem", fontWeight: 500 }}>
            Coming soon
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", maxWidth: "860px" }}>
            {[
              { title: "The waiter trick", desc: "How to actually ask for help. Not \"let me know if you need anything\" — a real list, specific asks, and why it works." },
              { title: "Avoid anger — that which angers you controls you", desc: "The discipline of not letting the system's failures become your emotional state. How to stay effective when everything is frustrating." },
              { title: "Hold a party. Seriously.", desc: "The April 19 celebration of life while she was still alive to attend it. Why you don't wait for the eulogy." },
              { title: "Finding normal inside the chaos", desc: "Date nights when she watched me eat. Museums. Movies. How to keep the relationship alive inside the caregiving." },
              { title: "Miranda Lambert on loop", desc: "Music, media, and managing the sensory environment. What you pipe into the room shapes everything." },
              { title: "The world getting smaller — and how to push back", desc: "Social contraction is real. How to keep the door open even when it feels impossible." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "1.5rem", border: "0.5px solid #D3D1C7", borderRadius: "8px", background: "#fff" }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.5rem", lineHeight: 1.4 }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <JoinCTA message="Taking care of yourself isn't selfish. It's the job." />

        <section style={{ padding: "3rem 2rem 4rem", maxWidth: "580px" }}>
          <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "15px", fontStyle: "italic", lineHeight: 1.8, color: "#5F5E5A", paddingLeft: "1.25rem", borderLeft: "2px solid #BA7517", marginBottom: "0.75rem" }}>
            &ldquo;When Lonna feels good — which is most of the time — we do things. When she doesn&apos;t feel great... we still do things.&rdquo;
          </blockquote>
          <cite style={{ fontSize: "11px", color: "#888780", paddingLeft: "1.25rem", display: "block", fontStyle: "normal" }}>
            — Casey King, CaringBridge 2025
          </cite>
        </section>
      </div>
      <Footer />
    </main>
  );
}
