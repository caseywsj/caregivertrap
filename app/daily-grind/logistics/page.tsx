"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function Logistics() {
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
            The Logistics Nobody Talks About
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            Where do you sleep? What do you bring? How do you survive a year away from home? The operational burden of long-term caregiving that nobody prepares you for.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              The night Lonna got the call for her double lung transplant, I drove two and a half hours to Houston Methodist alone — record time. I needed somewhere to sleep. It was Houston Rodeo weekend in March — one of the largest events in the country. Every hotel within fifteen miles was either booked solid or charging rodeo premium rates. I ended up across the street from the hospital on night one. Fifteen miles away on night two. And then, mercifully, Nora&apos;s Home.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              If you are navigating a long-term hospitalization near a major medical center and you don&apos;t know about places like Nora&apos;s Home — a residence serving transplant patients and families across multiple Houston hospital groups — then you are paying too much, sleeping too far away, and missing one of the most practically useful resources available to you. Most caregivers don&apos;t find out these places exist until they&apos;ve already been scrambling for weeks.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              The logistics of long-term caregiving are a part-time job that nobody hired you for and nobody told you about.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              Nora&apos;s Home was extraordinary. My own shelf in the refrigerator. A commercial kitchen where I could cook instead of eating out every meal. Free laundry. A garden. A gym. A community of other transplant families — hearts, lungs, livers — each with their own story. A commercial crushed ice machine that I still think about. And the kind of quiet solidarity that only exists among people who are all living through something enormous at the same time.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I stayed there through Lonna&apos;s thirty-three days in the hospital. Then she joined me there when she was discharged, in the lung transplant room with the specialized air filtration system. Then we found a longer-term apartment in the Rice Village area for the year we were required to live within an hour of the transplant center. That&apos;s the arc that most people don&apos;t see coming. It&apos;s not a hospitalization. It&apos;s a relocation.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                What to know about extended stay near major medical centers
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                Most large transplant centers have affiliated or nearby housing options specifically for patient families. Ask your transplant coordinator or social worker on day one — not week three. These places fill up.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                Search for: Ronald McDonald Houses, Hope Lodges (American Cancer Society), hospital-affiliated family housing, and extended stay hotels with medical rates.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }}>
                For Houston: Nora&apos;s Home. Look it up. Add it to your charity list when this is over.
              </p>
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              The parking situation at major medical centers deserves its own paragraph. Ask your coordinator about discounted parking passes on day one. There was a 30-day pass program at Houston Methodist that the coordinator helped set up — I got it extended another 30 days with some persistence. When it expired I was back to full rate like everyone else, but those two months were a genuine game changer. The passes disappear. Know they exist, get one early, and plan for the day it runs out.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Beyond parking — you will park in the same garage hundreds of times over a long hospitalization and occasionally still forget where you parked. This is not a memory problem. This is what happens when your cognitive load is maxed out on things that actually matter. Keep a simple system — same entrance, same level, same section, every time.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                Set up your outpost — first week checklist
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.25rem" }}>You are moving. Treat it like one. Find these before you need them urgently:</p>
              {[
                "Local pharmacy near your housing — not the hospital pharmacy",
                "Primary care backup for yourself — Amazon One Medical or equivalent. You will get sick. You cannot afford an ER visit for a sinus infection.",
                "Grocery store — know the route before you need it at 9pm exhausted",
                "Gas station, ATM, bank branch",
                "Laundry — if not included in your housing",
                "A reliable takeout option for the nights you have nothing left",
                "Parking pass — ask the coordinator on day one",
                "Retail stores for the things you forgot to bring",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.25rem" }}>
                  — {item}
                </p>
              ))}
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              What to bring for a long hospitalization is something nobody puts in a pamphlet. Comfortable clothes for sitting in a chair for eight hours. A good pillow from home. Your own snacks. Something to do during the long stretches of waiting. Headphones. A charger for every device and a power strip. A small notebook. Cash for parking machines. And non-skid socks — though if you go to REI for those you may end up at Anthropologie next door buying dresses for a wedding your person may or may not attend. True story.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The first night home after discharge — before any of the systems are in place — is the hardest logistically. We needed supplies we didn&apos;t have. I made a midnight pharmacy run. The next day I placed a large Amazon order to stock up properly. After that we were ahead of the problem instead of behind it. Get ahead of it before discharge if you can.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              One more thing about living away from home for an extended period: the ordinary tasks accumulate. Bills. Mail. Plants that die. Cats that need care. Cars that don&apos;t get driven. A condo that feels increasingly foreign every time you visit. The caregiver becomes the logistics manager for two households simultaneously. Build systems for both before you leave if you can. Automate what can be automated. Ask someone you trust to check on the rest.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>
              You are managing a small logistics operation. Treat it like one. Write things down, set reminders, delegate what you can, and don&apos;t be surprised when you occasionally drive three miles past your destination without noticing. That just means you&apos;re human and you&apos;re doing a lot.
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
            <a href="/fight-back/pay-attention" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                PAY ATTENTION to What They&apos;re Putting In
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="You are managing a small logistics operation. Treat it like one." />
      </div>
      <Footer />
    </main>
  );
}
