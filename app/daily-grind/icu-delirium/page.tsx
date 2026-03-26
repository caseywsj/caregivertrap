"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function ICUDelirium() {
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
            Elvis Has Left the Building
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            ICU delirium is common, terrifying, and temporary. Here&apos;s what it actually looks like — and what to do when your person tries to escape a locked transplant floor three times in one night.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              Nobody warned us about ICU delirium. Not the transplant team, not the discharge nurses, not any of the literature we had consumed in the year of pre-transplant preparation. We knew about rejection. We knew about infection. We knew about the immunosuppression protocol and the feeding tube and the long recovery timeline. We did not know that on day twenty-one, Lonna would pack a bag, lead a parade of three nurses and a wheelchair through the hallways of Houston Methodist, break through the locked exit doors three times, and announce that she was either driving herself to Austin or calling an Uber — and that I was decidedly not invited.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I was not offended. I was watching her oxygen saturation the whole time.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              When we finally got her back to the room, the nurses immediately moved to put her on supplemental oxygen. I stopped them. I asked them to check her saturation first. It read 100%. On no supplemental oxygen. After ninety minutes of power-walking through hospital hallways, talking continuously, breaking through locked doors. Those new lungs were working perfectly. The brain was temporarily somewhere else entirely.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              ICU delirium is not a sign that something has gone permanently wrong. It is a sign that the brain has been through something extraordinary and is having trouble finding its footing.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              ICU delirium affects between 20% and 80% of ICU patients depending on the population. For patients sedated for extended periods — Lonna was on the ventilator for ten days — the rates are even higher. The brain loses track of time, place, and reality in ways that range from mild confusion to vivid hallucinations to full paranoid conviction.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Lonna&apos;s delirium had a personality. It was very specifically Lonna-flavored delirium. She was convinced I had a side job with her brother Andy that involved some kind of mafia connection. She was certain I was part of a Heaven&apos;s Gate-style cult attempting to abduct her into a spacecraft — she had seen an HBO documentary about Heaven&apos;s Gate about a year before, and apparently it had lodged somewhere. She believed various nurses were incompetent, conspiring against her, or both. She was not wrong about one of them, for the record. The night nurse who used a stinging wipe on her extremely sensitive skin and then denied it — Lonna spelled out her complaints letter by letter on the A-Z communication board we had built, and I took her completely seriously, and I raised it with the staff, and the floating nurses disappeared from our rotation. My default position as her advocate: she is telling me the truth until proven otherwise.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The Elvis moment happened on day twenty-one. She had been building toward it. By the time I arrived after getting a call that she was &ldquo;a bit more confused,&rdquo; she had packed a bag and was not accepting any arguments for staying. So we walked. All of us. Lonna in the lead, three nurses trailing, me alongside, a wheelchair following hopefully behind. She made it through the locked doors twice before the magnetic lock stopped her. The third time she found a gap. We made it to the elevator bank. I stood next to her and didn&apos;t touch her and didn&apos;t argue with her and didn&apos;t tell her she couldn&apos;t leave. You cannot reason someone out of ICU delirium with logic. You can only stay present, stay calm, and wait for the window when they&apos;ll accept comfort.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              After about ninety minutes she let me walk alongside her back to the room. I cuddled up next to her in the bed for four hours. She slept. I did not.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The next morning she was significantly clearer. The delirium lifted over several days, not all at once. She remembered almost none of it. I remember all of it.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                What to know about ICU delirium
              </p>
              {[
                "It is common. Don't be surprised by it — be prepared for it.",
                "It is not permanent. The brain recovers. It takes days to weeks, not forever.",
                "Do not argue with the delusion. You will not win and it will make things worse. Stay present and stay calm.",
                "Take their complaints seriously anyway. Delirium does not mean they can't perceive real things accurately. Lonna's conviction that a nurse was hurting her turned out to be correct.",
                "Ask about medications. Some sedatives significantly worsen delirium. In our case, an antipsychotic and an ADHD medication prescribed during the worst of it were still being given days later with no re-evaluation. I caught it. I got them removed. Her confusion improved the next morning.",
                "Familiar things help. Miranda Lambert on the iPad, on loop, was the thing that finally calmed her when nothing else could. Know your person's anchors. Bring them.",
                "Get them out of the room when the unit allows it. Load up the wheelchair, drag the gear, ignore the sighs. The chapel, the garden, the cafeteria, the window that faces outside — all of it is medicine. The ICU won't allow it. The step-down unit will. Do it every day.",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                  {item}
                </p>
              ))}
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              There is a version of this story that is frightening. Lonna remembers it as frightening, in the fragments she does remember. But parts of it were also, in a very dark way, remarkable. She was twenty-one days post double lung transplant, sedated for ten of them, and she had enough fire left to organize an escape. Enough personality to deploy the middle finger with precision timing. Enough Lonna-ness to be, recognizably, completely herself — even when her brain had temporarily lost the plot.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The spacecraft cult thing was a bit much. But I&apos;ve heard worse.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              If you are sitting in a hospital room right now watching someone you love say things that make no sense, convinced of things that aren&apos;t true, frightened of things that aren&apos;t there — know that this is one of the most common experiences in critical care and one of the least discussed. You are not alone in it. It is not permanent. And somewhere in the middle of the confusion, your person is still in there.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>
              Stay close. Play their music. Wait for them to find their way back. They will.
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
            <a href="/daily-grind/when-words-arent-possible" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                When Words Aren&apos;t Possible — Building a Communication System from Scratch
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="Stay close. Play their music. Wait for them to find their way back." />
      </div>
      <Footer />
    </main>
  );
}
