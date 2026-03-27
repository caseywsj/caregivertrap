"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function WhenWordsArentPossible() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>

          <div style={{ marginBottom: "2rem" }}>
            <a href="/daily-grind" style={{ fontSize: "12px", color: "#BA7517", textDecoration: "none", letterSpacing: "0.5px" }}>
              ← Daily Grind
            </a>
          </div>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Daily Grind
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1rem", color: "#2C2C2A" }}>
            When Words Aren&apos;t Possible
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            The communication system we built in real time — and what you should build before you ever need it.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              She was intubated. Sedated. Ten days on a ventilator after a double lung transplant. When she started coming back — when the sedation lifted enough that she could open her eyes, track movement, respond — we had a problem. She was in there. Fully in there, as it turned out. Opinionated, observant, frustrated, funny. And completely unable to speak.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              We had not prepared for this. Not even a little. In the year of pre-transplant evaluation and testing and preparation, nobody — not us, not the transplant team, not any of the literature — suggested we think about how we would communicate when she couldn&apos;t talk. It seems obvious in retrospect. It was not obvious at the time.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>So we improvised.</p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              Don&apos;t improvise this. Twenty minutes before admission could change everything about those first days.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              The first system was pure necessity. I wrote the alphabet on a piece of paper — A through Z — and held it up. She would point to letters. Slowly, painfully, one at a time, she would spell out what she needed to say.
            </p>

            <div style={{ background: "#F5F0E8", border: "0.5px solid #D3D1C7", borderRadius: "8px", padding: "2rem", textAlign: "center" as const, marginBottom: "0.5rem" }}>
              <p style={{ fontSize: "13px", color: "#888780", fontStyle: "italic" }}>[Photo: The A-Z board — handwritten on paper, Houston Methodist ICU]</p>
            </div>
            <p style={{ fontSize: "12px", color: "#888780", fontStyle: "italic", textAlign: "center" as const, marginBottom: "2rem" }}>
              The original A-Z board. A piece of paper, a pencil, and two people who needed to talk to each other.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              It worked. It was exhausting for both of us. It took fifteen minutes to figure out that she wanted to know the time. It took longer to figure out that she thought I was running a spacecraft cult. And she spelled out &ldquo;HURTS&rdquo; and &ldquo;BK&rdquo; — our son Brian — with equal urgency, because both mattered equally.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Hand signals developed organically over days. We wrote them down as they emerged so neither of us would forget:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[
                { gesture: "Thumbs up", meaning: "I need to be cleaned up. (Yes — this was the first signal. Necessity is the mother of invention.)" },
                { gesture: "Middle finger", meaning: "Throat hurts. Also repurposed for general displeasure as the situation evolved." },
                { gesture: "Hand in circles", meaning: "Spinning / nausea." },
                { gesture: "Peace sign V", meaning: "Nausea coming." },
                { gesture: "Both hands opening outward", meaning: "I'm hot — remove blankets." },
                { gesture: "Both hands closing inward", meaning: "I'm cold — add blankets." },
                { gesture: "Hula hand motion", meaning: "Happy. Things are good." },
                { gesture: "BK", meaning: "Our son Brian. Asked about every single visit. First thing." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fff", border: "0.5px solid #D3D1C7", borderRadius: "6px", padding: "0.75rem 1rem" }}>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.25rem" }}>{item.gesture}</p>
                  <p style={{ fontSize: "12px", color: "#5F5E5A" }}>{item.meaning}</p>
                </div>
              ))}
            </div>

            <div style={{ background: "#F5F0E8", border: "0.5px solid #D3D1C7", borderRadius: "8px", padding: "2rem", textAlign: "center" as const, marginBottom: "0.5rem" }}>
              <p style={{ fontSize: "13px", color: "#888780", fontStyle: "italic" }}>[Photo: The hand signals key — handwritten reference sheet]</p>
            </div>
            <p style={{ fontSize: "12px", color: "#888780", fontStyle: "italic", textAlign: "center" as const, marginBottom: "2rem" }}>
              The written key kept at the bedside. You make the system and then you document it so the night nurse knows too.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              There&apos;s a third piece of this that gets overlooked. Communication when you&apos;re not there. Despite telling her where I was going and when I&apos;d be back, she would forget. The sedation, the delirium, the medications — her sense of time and place was unreliable. So I started leaving a note. &ldquo;Where is Casey?&rdquo; answered in writing at the bedside — today&apos;s schedule, tomorrow&apos;s schedule, when to expect visits and from whom.
            </p>

            <div style={{ background: "#F5F0E8", border: "0.5px solid #D3D1C7", borderRadius: "8px", padding: "2rem", textAlign: "center" as const, marginBottom: "0.5rem" }}>
              <p style={{ fontSize: "13px", color: "#888780", fontStyle: "italic" }}>[Photo: &ldquo;Where is Casey?&rdquo; — the schedule note left at the bedside]</p>
            </div>
            <p style={{ fontSize: "12px", color: "#888780", fontStyle: "italic", textAlign: "center" as const, marginBottom: "2rem" }}>
              One important caveat written nowhere on this paper but understood completely: seeing &ldquo;bathroom&rdquo; on a schedule did not mean she could get up and walk there herself. At this point there was no leaving the bed. The communication system has to account for what the body can and cannot do.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              That last point matters. When you&apos;re building a communication system for someone in acute care, you have to account for the gap between what a patient wants and what their body is capable of. She might signal that she needs the bathroom. That doesn&apos;t mean she can get there. The signal system and the physical reality have to be understood separately and together.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                Build this before you need it
              </p>
              {[
                { label: "Yes and No.", text: "One clear signal for each. Eyes up for yes, eyes down for no. One squeeze for yes, two for no." },
                { label: "Pain.", text: "A scale signal — one hand low, both hands raised high." },
                { label: "I need something.", text: "A pointing gesture, combined with yes/no questions from you." },
                { label: "I'm okay / Not okay.", text: "The most basic reassurance. You need to be able to look at them and know." },
                { label: "An A-Z board.", text: "Print it before you go. Keep it at the bedside. It's slow. It's worth it." },
                { label: "Basic ASL.", text: "If you have time — look up basic American Sign Language signs for water, help, stop, more, tired, pain. Ten signs. Twenty minutes of practice. It costs nothing and gives you a richer vocabulary than thumbs and middle fingers alone." },
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>{item.label}</strong> {item.text}
                </p>
              ))}
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginTop: "0.5rem" }}>
                Write down every signal as it develops. Leave the key at the bedside so the night nurse has it too. And leave a note answering &ldquo;where are you&rdquo; so they know even when they can&apos;t remember being told.
              </p>
            </div>

            <p style={{ marginBottom: "2.5rem" }}>
              She&apos;s still in there. Even when it doesn&apos;t seem like it. Build the system that lets her reach you.
            </p>

          </div>

          <div style={{ padding: "1.5rem", background: "#F5F0E8", borderRadius: "8px", marginBottom: "3rem" }}>
            <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.7 }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>Casey King</strong> spent over two decades as a caregiver for his wife Lonna, who lived with scleroderma and underwent a double lung transplant in 2023. He is writing <em>The Caregiver&apos;s Trap: A Roadmap for When the Caregiver Needs Care</em>.
            </p>
          </div>

          <div style={{ borderTop: "0.5px solid #D3D1C7", paddingTop: "2rem", marginBottom: "3rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "1rem", fontWeight: 500 }}>
              Continue reading
            </p>
            <a href="/daily-grind/logistics" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The Logistics Nobody Talks About
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="She's still in there. Build the system that lets her reach you." />
      </div>
      <Footer />
    </main>
  );
}
