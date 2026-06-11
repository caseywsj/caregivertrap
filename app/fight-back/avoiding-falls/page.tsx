"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function AvoidingFalls() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>

          <div style={{ marginBottom: "2rem" }}>
            <a href="/fight-back" style={{ fontSize: "12px", color: "#BA7517", textDecoration: "none", letterSpacing: "0.5px" }}>
              ← Fight Back
            </a>
          </div>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Fight Back
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1rem", color: "#2C2C2A" }}>
            Avoiding Falls
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            Falls are almost never one dramatic event. They&apos;re a cascade. Most of it can be rewritten before gravity gets involved.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              Lonna fell twice that I know of.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The first one was in the hospital, with a nurse standing right next to her. I&apos;m still not sure how that happens physically. The human body needs at least two failures to hit the floor when someone is already touching you. But it happened. The bruising was unbelievable. She was sore for weeks.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The second one was at home, in the bathroom, navigating to the toilet. She pitched sideways onto the edge of our big soaking tub. If you&apos;ve ever seen Shamu slide up onto the show platform at SeaWorld and raise his tail to the crowd, that&apos;s the visual. She was fine. Uneventful. We laughed about it later.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I was terrified she would fall.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The anti-rejection meds destroy your bone density. That&apos;s not an opinion or a side effect on a pamphlet. It&apos;s the central engineering problem of long-term transplant survival. By 2024 and into 2025, Lonna had four compression fractures in her back. The chart phrase was &ldquo;significant and worsening osteoporosis.&rdquo; We were trying to get her on the bone-building infusions, but you can&apos;t start those until you&apos;ve had any infected or at-risk teeth extracted, and she needed five out. The teeth were on the schedule. The schedule kept getting blown up by hospitalizations. So we lived in a window where one good fall would undo everything the transplant team had built. Every pill. Every infusion. Every thirty-five-night hotel stay before she got listed. All of it. Gone.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              A hip fracture in a heavily immunosuppressed sixty-something with already-compromised lungs isn&apos;t a setback. It&apos;s the end of the story.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              Lonna&apos;s mom fractured her hip. She never came out of the hospital. Lonna knew that. I knew that.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              So yes. I was terrified.
            </p>

            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "24px", fontWeight: 400, lineHeight: 1.3, color: "#2C2C2A", marginTop: "3rem", marginBottom: "1.5rem" }}>
              This is everywhere now
            </h2>

            <p style={{ marginBottom: "1.5rem" }}>
              Three conversations in the last two weeks.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              A friend&apos;s ex-husband fell the night after back surgery. A neighborhood friend&apos;s spouse was already in an assisted living facility, already in a wheelchair, and somehow managed to fall <em>out</em> of the wheelchair. WTF. Then at a memorial service yesterday I ran into another friend who&apos;s actively training on some balance pad contraption.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              And this fall at the UT OLLI seminar, the topic was balance. When the instructor asked who in the room was worried about falling, ninety percent of the hands went up. Ninety percent.
            </p>

            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "24px", fontWeight: 400, lineHeight: 1.3, color: "#2C2C2A", marginTop: "3rem", marginBottom: "1.5rem" }}>
              What I came up with
            </h2>

            <p style={{ marginBottom: "1.5rem" }}>
              This is my list. Then I went and read a bunch of research and added the things I had missed.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>1. Stay active.</strong> Functional strength training. Pilates. Tennis. Dancing. Golf. Honestly anything that gets your ass off the couch. I&apos;ve heard horror stories about pickleball injuries so be careful out there. The alternative is worse.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>2. Specifically train your balance.</strong> Feet, ankles, quads. The goal isn&apos;t to never stumble. The goal is that when you <em>do</em> stumble, you can catch yourself before gravity wins.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>3. Stop doing the moves that start falls.</strong> Crossover steps are a top one. I have to crossover step when I play tennis, so I get that you can&apos;t always avoid them. But most people in their kitchen don&apos;t need to.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>4. Learn how to fall. Learn how to get up.</strong> We fell constantly as kids and most of us walked away. There&apos;s a way to do it. Stay low. Roll. Don&apos;t catch yourself with a locked wrist. And then practice getting <em>up</em> off the floor. This part shocked me. Lonna could not get herself off the floor by herself. Not even close. When the moment came, that mattered.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>5. Fall-proof the house.</strong> We baby-proofed for the kids thirty years ago. Do it again, for yourself. Grab bars in the bathroom. Rugs out of hallways. Declutter. Soft-edged furniture if you&apos;re buying new. Built-in handrail paths from bedroom to bathroom. Nightlights. Smart home automation so you&apos;re not fumbling for light switches at 3am. Raise the toilets. Raise the chairs. Your house gets smaller out of necessity whether you like it or not. Better to do it on your terms.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Then I did some research and was annoyed I had missed these:
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>6. Does this medication increase fall risk?</strong> Pilots use a checklist before they fly called IMSAFE. Illness, Medication, Stress, Alcohol, Fatigue, Eating. It&apos;s not a bad checklist for getting out of bed in the morning either. Run yourself through it. If even one box is lit up, slow down.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>7. Stand up slower than your ego thinks you need to.</strong> Obvious. Also true.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>8. Use all your senses.</strong> Vision matters. Hearing matters. Get the eye exam. Get the hearing test. Stop pretending.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>9. Wear the right shoes.</strong> Just wear them.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>10. Hydration.</strong> This is technically the E in IMSAFE but it deserves its own line. Dehydration drops your blood pressure, dizzies you up on standing, and is one of the single biggest preventable causes of falls. Drink the water.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>11. Use mobility aids before you need them.</strong> A cane is a fashion choice. A broken hip is not.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>12. Practice recovery.</strong> I&apos;m going to ask this directly. If you laid down on your living room floor right now, are you one hundred percent sure you could get back up? If the answer isn&apos;t an immediate yes, that&apos;s the work.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>13. Have a plan for when it happens.</strong> Can someone get into your house? Will anyone know? Don&apos;t be the news story where someone laid on the floor for six hours.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>14. Be especially vigilant after a hospitalization.</strong> Coming home from the hospital is a high-risk window. New meds. Weakness from being in bed. Disorientation. Different routine. This is when falls happen, and this is when they&apos;re most catastrophic.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                Try these three right now
              </p>
              {[
                { label: "Balance on one leg.", text: "Both sides. Time it. Eyes open is the easy version; eyes closed is the real test. Under ten seconds at sixty-plus is a flag. Have a chair or counter within arm's reach before you start." },
                { label: "Stand up from a chair without using your hands.", text: "Once. Then five times in a row, no pause. If your hands reach for the armrest, your quads aren't where they need to be." },
                { label: "Lay down on the floor and get back up.", text: "No couch-assist. No grabbing the coffee table. If you can't, that's the work. Now you know. Search YouTube for \"senior get off floor\" and you'll find exactly what to practice." },
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>{item.label}</strong> {item.text}
                </p>
              ))}
            </div>

            <h2 style={{ fontFamily: "'Lora', serif", fontSize: "24px", fontWeight: 400, lineHeight: 1.3, color: "#2C2C2A", marginTop: "3rem", marginBottom: "1.5rem" }}>
              Back to aviation
            </h2>

            <p style={{ marginBottom: "1.5rem" }}>
              Airplane crashes are almost never caused by one thing. They&apos;re a cascade. A small problem missed, then a second small problem on top of it, then a decision made in the wrong order, then weather, then fatigue, then the thing that finally pushes it past recovery.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Falls work the same way. They&apos;re rarely one dramatic event. They&apos;re the last chapter of a story that started with weaker legs, worse balance, fading vision, a new prescription, dehydration, a rug in the hallway, fatigue, and one moment of bad luck.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The good news is most of those earlier chapters can be rewritten long before gravity gets involved.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>
              The bad news is nobody&apos;s going to rewrite them for you.
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
            <a href="/fight-back/brian-letter" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The Brian Letter
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="Most chapters can be rewritten before gravity gets involved. Start now." />
      </div>
      <Footer />
    </main>
  );
}
