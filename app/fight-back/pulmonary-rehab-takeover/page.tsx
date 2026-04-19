"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function PulmonaryRehabTakeover() {
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
            The Pulmonary Rehab Takeover
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            The generic program was designed for the average patient. Lonna was not the average patient. So I ran my own sessions instead.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              Pulmonary rehab runs on a protocol. Warm up. Treadmill or bike at some prescribed intensity. Oxygen set to whatever keeps your sat above 92. Cool down. See you Thursday.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>It is a perfectly reasonable program for a perfectly average patient.</p>

            <p style={{ marginBottom: "1.5rem" }}>Lonna was not a perfectly average patient. And I was not a perfectly average caregiver.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              This was June 2021 — two years before the transplant. She had pulmonary hypertension and Raynaud&apos;s, and the combination meant the pulse ox sensors everybody relies on — the finger clip at the doctor&apos;s office, the sensor on the early Apple Watches — could not get a clean read on her. Her fingers were cold, her peripheral circulation was poor, and the sensor would sit there blinking at nothing or spitting out numbers that had no relationship to reality.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              This mattered because the whole world of pulmonary care is calibrated to a single number. O2 sat below 92 and clinicians start getting nervous — reaching for masks, cranking up flow. Except Lonna had been living in the 80s for a long time. Her body had adapted. She felt fine at 88 doing things that would have put a healthy 40-year-old on the floor. The number that terrified the clinicians did not terrify her body.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>So I had two questions. Big ones. Nobody was going to answer them for us.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>Question one.</strong> Is there a reliable, measurable proxy for O2 saturation that works on Lonna — something her Apple Watch can track accurately even when her fingers are cold? Heart rate was the obvious candidate. The watch got HR right every time. If HR and sat moved together in a predictable way, HR at the wrist could stand in for sat in the field.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>Question two.</strong> How low can her sat actually go before it is dangerous for her, specifically, given that her body was already acclimated to lower numbers? The conventional 92 floor was written for people whose bodies had not spent months or years at altitude, metaphorically speaking. Lonna had. I wanted to know where her real edge was — not the textbook edge.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              You do the experiments where the safety net is densest. Not where it is thinnest.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              I want to be clear about something. This was not me going rogue in the backyard with a pulse ox and a stopwatch. I picked the safest possible environment on the planet to push these edges: a hospital-affiliated pulmonary rehab center, with trained pulmonary therapists in the room, medical-grade oxygen delivery systems on hand, a crash cart somewhere down the hall, and actual pulmonologists a phone call away. If her sat had crashed, there were twenty people within fifty feet trained to deal with it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>And then I took the sessions over.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              I do not say that lightly and I do not apologize for it. I ran them. I decided what we were measuring that day, what O2 delivery mode we were testing, what treadmill intensity we were running, how long we were running it, and when we stopped to log numbers. The rehab therapists had their program. I had mine. Mine was the one we ran.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The therapists were not doing anything wrong. They were running a protocol designed for the middle of the bell curve. Lonna was not in the middle of the bell curve. Her Raynaud&apos;s meant the sensors didn&apos;t work on her. Her pulmonary hypertension meant her sat was not going to behave like an average patient&apos;s sat. The generic program, run as designed, was going to give us twelve weeks of cardio and no answers. So I brought my own questions, my own experimental design, and my own graph paper. The staff were gracious about it. I suspect they had not seen many spouses show up with hand-drawn plots and a testing plan, but they rolled with it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>Here is what I brought with me.</p>

            <div style={{ margin: "2rem 0", borderRadius: "8px", overflow: "hidden" }}>
              <img
                src="/pulmonary-metrics-graph.png"
                alt="Hand-drawn graph on graph paper showing O2 saturation plotted against effort with different oxygen delivery modes as separate curves, yellow operating envelope, red danger zone"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ fontSize: "12px", color: "#888780", fontStyle: "italic", marginTop: "-1rem", marginBottom: "1.5rem" }}>
              The graph I brought to rehab. Y-axis: O2 saturation. X-axis: effort, with heart rate as the proxy candidate. Each line is a different oxygen delivery configuration. The yellow arrow is the operating envelope. The red band is the conventionally defined danger zone — drawn as a question, not a wall.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The permission slip for the hypothesis came from a Duke research blog I had found — a climbing expedition to Everest where healthy humans landed at Lukla with sats in the mid-80s and felt fine. Walking around, they dropped into the 70s. At night, into the 60s. Everyone was fine. The body is resilient. The 92 floor is a convention for a particular population in a particular setting. It is not a physiological law.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Over a couple of sessions on the treadmill, varying intensity and oxygen delivery and logging the numbers, the pattern emerged. At intensity 3.0 on the treadmill, with O2 at 8 liters, it took about 7 to 8 minutes to get her heart rate up to 130. And that was the inflection point. Sat went from 95 to 88. Consistently. We repeated it. We tried different O2 delivery modes — continuous versus pulse, different flow rates. The heart rate number held.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Around HR 130, her sat stepped down. That was the proxy. That was the answer to question one.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Question two got answered by Lonna&apos;s Austin pulmonologist when I brought him the data. He looked at what we had measured and signed off on the envelope: sat in the 80s with exertion was acceptable for Lonna. Not the 70s. At rest, no supplemental O2 unless she genuinely needed it. Six-minute walk test: 365 feet with O2 at 8.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>The body acclimates to what it can get. Not ideal. But we do what we can do.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              What this bought us was everything. Lonna could not wear a reliable sat monitor out in the world. But she wore her Apple Watch all the time. And now we had a number on the watch — 130 — that meant sit down for a minute. She could walk, hike slowly, do her life. When HR hit 130, we stopped. Heart rate would come back down, sat would stabilize, and we would go again.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              It turned a continuous medical decision — am I okay, am I okay, am I okay — into a discrete one. Watch the number. When it hits the threshold, rest. When it comes back down, go.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>It gave her her world back in increments.</p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                Three things for other caregivers
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>Be curious.</strong> The generic answer is designed to be safe for the average patient. Your person is not the average patient. Be curious about where the real edges are for them, specifically. Be curious about why a number means what it means and whether it applies to your situation. Most of what looks like a wall is actually a convention. Conventions are useful. They are not laws.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>Learn.</strong> I am not a pulmonologist. I am a retired technologist with graph paper and a habit of treating problems like systems. That was enough to ask the right questions, design a test, and collect data. You do not need a medical degree. You need to put in the time. Read. Ask. Draw pictures. Find the Everest clipping that reframes the problem. Get yourself to the point where you can walk into a conversation with a pulmonologist and have him look at your numbers and nod.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }}>
                <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>Advocate.</strong> Once you have the curiosity and the learning, you have to actually do something with it. That means interrupting the protocol. It means running the session yourself when the generic version is not going to get your person where she needs to go. It means taking your data to the doctor and asking for the envelope he is willing to sign off on. Nobody else is going to do this for your person. You are the one who is there. You are the one who has to ask.
              </p>
            </div>

            <p style={{ marginBottom: "2.5rem" }}>So ask.</p>

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
            <a href="/fight-back/the-45-minute-argument" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The 45-Minute Argument
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="You do the experiments where the safety net is densest. Not where it is thinnest." />
      </div>
      <Footer />
    </main>
  );
}
