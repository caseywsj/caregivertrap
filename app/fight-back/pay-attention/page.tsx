"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function PayAttention() {
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
            PAY ATTENTION to What They&apos;re Putting In
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            The medication prescribed in the ICU that nobody came back to reevaluate. How asking one casual question changed everything.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              On day eight after Lonna&apos;s double lung transplant, I casually asked the nurse what she was about to give her before nighttime. It was not a planned advocacy moment. I was not following a checklist. I was just paying attention — the way you do when you&apos;ve been in the ICU long enough to know that things happen and not everything gets communicated and you are the one constant in a rotating cast of providers.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The nurse listed the medications. I stopped her partway through. An antipsychotic. An ADHD medication. I had not heard of either being prescribed. I asked when they were started. Eight days ago, during the worst of the ICU delirium. I asked who prescribed them. A consulting doctor I had never met, and a physician assistant. I asked when someone had last evaluated whether she still needed them.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Nobody had. Nobody had come back. Nobody had re-evaluated. The medications had been prescribed in a crisis and were still running eight days later on autopilot.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              PAY ATTENTION to the stuff they are putting in your loved one&apos;s body. This is the most important sentence in this article.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              I made it my mission the next day to get those medications stopped. It is harder than you think to find the right doctor who can actually make that change. You can&apos;t just ask a nurse. You have to find the physician with the authority to modify the medication orders, make the case, and get it done. It took most of a day. I finally reached a transplant pulmonologist who agreed — the psychiatric medications were coming off. Aripiprazole. Guanfacine. Gone.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Her confusion was measurably less the next morning. I can&apos;t say with certainty that removing those medications was the cause — her sodium levels had also been elevated, and high sodium causes confusion, and that was being addressed simultaneously. But I can say that an antipsychotic prescribed eight days earlier by someone who had never come back to reevaluate was not helping. And I can say that nobody would have removed it if I hadn&apos;t asked about it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>Nobody.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              This is the fundamental reality of hospital caregiving that nobody prepares you for. The system is not designed to catch everything. Providers rotate. Shift changes happen. Consulting doctors prescribe things and move on. The hospitalist who ordered something on Monday may not be the hospitalist on Thursday. Nobody has the complete picture of your person except you. Which means the job of maintaining that complete picture — and flagging when something doesn&apos;t add up — falls to you by default, whether you asked for it or not.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                The medication audit — do this regularly
              </p>
              {[
                "Every few days during a hospitalization, ask a nurse or the attending physician to walk you through every medication currently being administered. Not just the ones you know about. All of them.",
                "For each one ask: What is this for? When was it started? Who prescribed it? Has anyone re-evaluated whether it's still needed?",
                "You are not being difficult. You are doing the job that the system assumes someone is doing but often isn't.",
                "Also ask: Is there anything being given that might be contraindicated with her existing medications? The transplant pharmacy team should review any new medication before it's started. If it wasn't reviewed, ask why.",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>{item}</p>
              ))}
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              There is a specific dynamic at play in complex medical cases that makes this harder. Your person is being treated by multiple teams simultaneously — transplant, ICU, hospitalists, and various consulting specialists. Each team sees their piece. Nobody owns the whole picture. The caregiver is.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              That proximity is your greatest asset. You see everything. You notice when something changes. You know what baseline looks like because you&apos;ve been watching for days or weeks. You know that she&apos;s sensitive to medication changes because you&apos;ve watched it happen a dozen times. That knowledge is not in any chart. It lives in you. Use it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              A few specific things worth knowing. Pulse oximetry readings from a finger can be unreliable for patients with Raynaud&apos;s phenomenon. Lonna had severe Raynaud&apos;s. Finger readings were consistently inaccurate. An ear probe gave much more reliable numbers. We had to tell every new nurse, every new technician, every new team. Every time.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Similarly — Lonna was a very difficult venous access patient. Ultrasound-guided access was significantly more effective than standard phlebotomy. We told every new person who came to draw blood. Every time. Because the information that should have been obvious from the chart was not being communicated reliably between shifts.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Write these things down. Put them in your care coordination document. Hand it to every new provider who walks into the room. Don&apos;t assume the chart tells the story. The chart tells part of the story. You tell the rest.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>
              No one cares more than you. That is not a burden. That is your advantage. Use it every single day.
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
            <a href="/fight-back/the-45-minute-argument" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The 45-Minute Argument — How to Fight for Your Person
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="No one cares more than you. That is not a burden. That is your advantage." />
      </div>
      <Footer />
    </main>
  );
}
