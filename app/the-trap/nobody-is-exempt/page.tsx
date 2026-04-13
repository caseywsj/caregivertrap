"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function NobodyIsExempt() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>

          <div style={{ marginBottom: "2rem" }}>
            <a href="/the-trap" style={{ fontSize: "12px", color: "#BA7517", textDecoration: "none", letterSpacing: "0.5px" }}>
              ← The Trap
            </a>
          </div>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            The Trap
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1rem", color: "#2C2C2A" }}>
            Nobody Is Exempt
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            The caregiver trap doesn&apos;t care about your credentials, your income, your professional expertise, or how well you understand the system you&apos;re navigating. It finds everyone.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              I was on a telemedicine call with my GI doctor last week. Routine appointment — annual refill, five minutes, should have been unremarkable. I mentioned the caregivertrap.com project I&apos;ve been building. He asked about it. And then I asked how he was doing.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>He told me.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              His father is 80. Dementia and stage 4 prostate cancer. His mother is 75 and has breast cancer. He and his wife are the sole caregivers for both of them simultaneously. He used the word brutal. He dropped the f-bomb twice. He is a physician who spends his professional life navigating the medical system on behalf of patients — and when it&apos;s his own parents, when it&apos;s personal, when it&apos;s every evening and every weekend and every phone call that starts with a number he&apos;s already dreading — the clinical vocabulary evaporates. What&apos;s left is the same thing that&apos;s left for everyone. Exhaustion. Love. The feeling of being in over your head even when you know exactly what you&apos;re looking at.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>The caregiver trap found my GI doctor. Of course it did.</p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              The trap doesn&apos;t care about your credentials. It doesn&apos;t care how well you understand the system. It finds the people who love someone and can&apos;t stop showing up. That&apos;s everyone.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              I&apos;ve been thinking about the different shapes caregiving takes — because the trap shows up differently depending on your situation, but it always shows up.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              My journey was a spouse with a chronic illness that stretched across twenty-five years and ended with a double lung transplant and two more years of intensive medical management. That&apos;s one shape. Long, slow, medical, consuming. The caregiving became the architecture of my life without my ever deciding that was what I was building.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              A friend of mine recently lost his mother. His caregiving journey was shorter but no less real — and it came with something my journey didn&apos;t. Siblings. The negotiation, the disagreement, the old family dynamics suddenly activated under pressure. Who does more. Who decides. Who gets to be right about what Mom would have wanted. The trap in that situation isn&apos;t just the caregiving itself — it&apos;s the family system the caregiving runs through. That&apos;s its own specific kind of brutal.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Another friend cared for an aging parent and did what many families do — outsourced significant portions of the care. Professional aides, assisted living, the infrastructure of paid support. That&apos;s not avoidance. That&apos;s a legitimate and often necessary approach. But here&apos;s what nobody tells you about outsourced care: you still carry the coordination burden. You still manage the providers, field the calls, make the decisions, carry the guilt about whether it&apos;s enough. The trap finds you in the management layer even when you&apos;re not doing the hands-on work.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              And then there&apos;s dementia. Most of the people in my caregiver community were partners of someone with dementia — which is its own specific and devastating version of the trap. You lose the person incrementally, over years, while they&apos;re still physically present. You grieve someone who is still alive. You have conversations that don&apos;t land, moments of connection that disappear, a relationship that changes in ways you never agreed to. The person you&apos;re caring for can&apos;t fully understand what you&apos;re doing for them or why. That particular loneliness has no clean name.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              What all of these have in common is the thing this site is built around: the caregiver disappears into the caregiving. Not all at once. Gradually, without deciding to, without noticing until the distance from yourself has become significant. The identity erosion. The social contraction. The exhaustion that becomes the baseline. The love that never stops, even when everything else is depleted.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              That&apos;s the trap. And it doesn&apos;t matter whether you&apos;re a physician or an engineer or a teacher or a retired person who never planned for any of this. It doesn&apos;t matter whether you&apos;re caring for a spouse or a parent or a sibling. It doesn&apos;t matter whether the journey is two years or twenty-five. The trap is the trap.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              My GI doctor ended the call and went back to his patients. Then he went home to his parents. He will do this tomorrow and the day after. He will figure it out the way everyone figures it out — imperfectly, with love, one day at a time.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>That&apos;s all any of us do.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              If you&apos;re reading this, you probably already know that. You&apos;re not here because caregiving is easy. You&apos;re here because it isn&apos;t — and because knowing that someone else has been exactly where you are right now is worth something.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>
              You&apos;re not alone in it. Nobody is exempt. And that, strangely, is the most useful thing I can tell you.
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
            <a href="/the-trap/identity-erosion" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The Disappearing Act
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="You're not alone in it. Nobody is exempt." />
      </div>
      <Footer />
    </main>
  );
}
