"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function The45MinuteArgument() {
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
            The 45-Minute Argument
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            I have had dozens of tense interactions with physicians over the years. This one had an audience.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              It was February 2023. We had just been through the dry run — Lonna called to Houston Methodist at 10:30pm, record time down the highway, all the prep and the waiting and the hope, and then the donor lungs didn&apos;t pass inspection. Damaged in the upper section, visible discoloration the scans couldn&apos;t detect. We drove home to Austin exhausted and deflated. A week later came the real call. Lonna got her transplant on March 6th.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              But this story is about the dry run discharge. After the false alarm, you still have to be formally discharged before you can leave. And discharge at a major hospital is famously slow. It&apos;s like Hotel California — you can check out anytime you like, but you can never leave. Lonna and I were exhausted. Emotionally wrung out. We had been through a year of pre-transplant evaluation, three rejected transplant centers before Houston Methodist agreed to take a scleroderma patient, and now this. We just wanted to go home.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The doctor assigned to discharge us that day was someone we had never met. An on-call physician. And within minutes of meeting us, he pretty much berated us for pursuing a double lung transplant without first going through his specialty.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              His specialty was intravenous prostacyclin therapy — specifically Remodulin — a treatment for PAH patients after the standard oral medications like Opsummit, Uptravi, and Adempas have run their course. He believed we had skipped a step. He had opinions about that.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>I let him make his case. Then I started asking questions.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Are these experimental treatments available now? No. Are they approved? No — he was planning to present the data at a conference later in the year. Are they being shown to be effective? He said yes, there was measurable improvement. I asked him to quantify measurable. He said a couple of percentage points. Maybe.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              At Amazon, I would have been verbally abused for walking into a meeting and using the word &ldquo;measurable&rdquo; without a single data point to back it up.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              I told him that at Amazon, where I had spent years as a Senior Principal Technologist, I would have been fired for walking into a meeting with no data and calling it a presentation. No papers. No conference results. No timeline. Just a vague assertion of effectiveness from a doctor who hadn&apos;t been involved in Lonna&apos;s care for one day of the previous year. I told him he was being lazy and not helpful.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Then I asked the only question that actually mattered: would this treatment allow Lonna to go back to the mountains? To walk, to hike, to dance, to play tennis, to get on a bicycle, to live?
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              No, he said. The treatment required a subcutaneous pump to be surgically inserted. It would extend life — but life in a lounger, watching television.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              We had been through all of this. Her local pulmonologist had thought about this. The three transplant centers that rejected her had thought about this. The team at Houston Methodist that had managed her care for over a year had thought about this. This doctor had thought about it for about twenty minutes.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The back and forth went on for 45 minutes. Three nurses were in the room the entire time. They could not bring themselves to leave — they were absolutely riveted. Lonna just wanted to curl up and disappear into the hospital bed. In some twisted way, I enjoyed every minute of it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Trust has to be earned. I do not trust new doctors, and they certainly don&apos;t trust me. That&apos;s fine. That&apos;s the correct posture for both sides of this relationship. What I won&apos;t accept is a physician who leads with authority instead of data, who uses words like &ldquo;measurable improvement&rdquo; and gets irritated when someone asks what that actually means.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              We were right to push back. We were right to go to transplant. And here is the part that we didn&apos;t know until after the surgery — when they removed Lonna&apos;s damaged lungs and could finally examine them directly, they discovered she had PCH. Pulmonary capillary hemangiomatosis. A rare condition that her Austin pulmonologist had suspected but could never confirm, because you cannot biopsy damaged lungs in a living patient. You don&apos;t know until they come out.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Remodulin would have had no effect on PCH. It could have been actively harmful. The doctor arguing so confidently for his treatment had no way to know what was actually wrong with her lungs — and neither did we. But he was presenting an unapproved, data-thin, experimental treatment as if the decision were obvious, to a patient and caregiver who had lived this disease for six years and spent a year being evaluated at one of the top transplant centers in the country.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                What this means for your advocacy
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                You are the only person in that room who has been paying attention every single day — who knows the full history, who has read the papers, who has lived inside the decisions. That knowledge is not nothing. That voice deserves to be in the room.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                You don&apos;t have to be combative. But you do have to be present, informed, and willing to ask the question that nobody else will ask. In this case it was: will this treatment let her actually live — or just not die as fast?
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }}>
                Those are different questions. Know which one you&apos;re asking.
              </p>
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              No one cares more than you. Not the on-call physician you&apos;ve never met. Not the specialist with a conference paper to promote. You. That doesn&apos;t mean you&apos;re always right. It doesn&apos;t mean doctors are always wrong. What it means is that your voice — informed, persistent, specific — belongs in every room where decisions are being made about your person.
            </p>

            <p style={{ marginBottom: "2rem" }}>
              Pick your battles. But when you pick one, be prepared to go 45 minutes.
            </p>

            <div style={{ background: "#F5F0E8", borderLeft: "2px solid #D3D1C7", padding: "1rem 1.25rem", borderRadius: "0 8px 8px 0" }}>
              <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.7 }}>
                <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>For the medically curious:</strong> The literature on prostacyclin therapy in PCH patients is unsettled at best and dangerous at worst. A published case report documents a patient with pulmonary hypertension due to connective tissue disease — a profile similar to Lonna&apos;s — whose subcutaneous treprostinil infusion worsened her hypoxemia. She did not survive. PCH was confirmed at autopsy. The medical consensus remains that lung transplantation is the only proven cure for PCH. There is no approved medical therapy.
              </p>
            </div>

          </div>

          <div style={{ padding: "1.5rem", background: "#F5F0E8", borderRadius: "8px", marginTop: "2rem", marginBottom: "3rem" }}>
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
        <JoinCTA message="Pick your battles. But when you pick one, be prepared to go 45 minutes." />
      </div>
      <Footer />
    </main>
  );
}
