"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function Pillbox() {
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
            The Pill Box Deserves Its Own Chapter
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            Three dozen medications. Three pharmacies. One caregiver in the middle of all of it.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ borderRadius: "8px", overflow: "hidden", marginBottom: "0.5rem" }}>
            <img
              src="/lonna-pillbox.jpeg"
              alt="Lonna's full medication spread — every bottle numbered, rainbow pill organizer in the center"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <p style={{ fontSize: "12px", color: "#888780", fontStyle: "italic", textAlign: "center" as const, marginBottom: "2rem" }}>
            A typical week. Every bottle numbered, every time of day accounted for. This is what three dozen medications looks like.
          </p>

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              I want you to look at that photo for a moment before you read any further. Count the bottles if you want — I stopped counting after a while. The rainbow pill organizer in the center is a seven-day, four-time-of-day system. Morning, midday, afternoon, evening. Twenty-eight compartments. None of them were ever empty at the same time.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              That photo was taken on an ordinary Tuesday. Not during a hospitalization. Not during a crisis. Just a regular week of post-transplant maintenance medications for a double lung transplant patient with scleroderma, pulmonary arterial hypertension, and the immunosuppression requirements that come with carrying someone else&apos;s lungs in your body.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              This is what three dozen medications looks like. And this is nowhere close to the full picture.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              The pill box isn&apos;t a container. It&apos;s the physical manifestation of everything you have to hold in your head at once.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              The medications came from three sources. Healthco Pharmacy in Houston was the specialty pharmacy that handled the majority — the immunosuppressants, the antivirals, the transplant-specific medications that a regular pharmacy either can&apos;t stock or doesn&apos;t know how to handle. Walgreens handled the rest. Tarrytown Pharmacy in Austin filled in the gaps. Three pharmacies, one insurance company that didn&apos;t always agree with any of them, and a rotating cast of prescribers whose left hands were not always aware of what their right hands were doing.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              At some point during the post-transplant year, Houston Methodist&apos;s transplant team stopped being the prescriber for several of the maintenance medications. Reasonable from their perspective — these were drugs that any doctor could manage. What nobody fully accounted for was that the local PCPs and specialists who picked up the prescribing responsibility didn&apos;t have the full picture. They knew their piece. They didn&apos;t know the whole board. I did. Which meant I was now not just filling prescriptions but actively managing the handoffs between prescribers to make sure nothing fell through the gap.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Nothing fell through the gap. But that was not an accident.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Here is what the medication management system actually looked like in practice. Every bottle got a number. The numbers corresponded to a spreadsheet — a living document that tracked not just the medication name and dose, but the current dosage history, the reason for any changes, the manufacturer identifier (because the same drug from a different manufacturer looks different and you need to know which pill is which), the pharmacy, the quantity on hand, and notes about anything unusual. Prograf changed dosage seven times over two years. Sirolimus changed five times. Eliquis toggled on and off based on DVTs, bronchoscopies, creatinine levels, and which doctor was currently managing it. Every change got logged. Every reason got noted.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The manufacturer identifier column sounds obsessive until the day you open a bottle labeled 10mg and find pills marked 058 — which is the 5mg identifier. That happened. It was caught because of the spreadsheet. It would not have been caught otherwise.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The timing matters as much as the what. Some medications need food. Some need to be separated from others by at least two hours — iron and calcium compete for absorption and should never be taken together. Some need to be given at consistent times because the tacrolimus level — the immunosuppressant the transplant team watches most closely — is sensitive to timing variability. The spreadsheet tracked all of this. The pill box enforced it physically.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                The system that worked for us
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }}>
                Number every bottle. Build a spreadsheet with columns for: medication name, dose, timing, reason, manufacturer identifier, pharmacy, quantity on hand, and a notes column for changes. Update it every time anything changes. Print a copy for the clinic. Keep the digital version current. When a new provider walks into the room, hand them the printed version before they ask. They will ask.
              </p>
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              The reorder management was its own discipline. Specialty medications from Healthco required insurance pre-authorization that could take days. Running out of tacrolimus is not a &ldquo;we&apos;ll get it tomorrow&rdquo; situation — missing doses of immunosuppressants can trigger rejection. I kept a running count of every medication and set reorder triggers at two weeks of supply remaining. For the ones that required pre-authorization, three weeks.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Then there&apos;s the insurance layer, which deserves its own article and its own therapy session. Pre-authorizations that expire at the plan year and start over from scratch on January 1st — with a new person on the phone who has no context, no history, and no understanding of why this medication is non-negotiable. Every year. From zero. As if last year didn&apos;t happen. Formulary changes. The year a manufacturer coupon stopped being accepted and we were suddenly on the hook for a four-figure monthly bill until I figured out what had changed and fixed it. Insurance management is a part-time job embedded inside the caregiving job and nobody tells you that either.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I am sharing all of this not to impress you with the complexity — though it is genuinely complex — but because I know that somewhere right now there is a caregiver staring at a dining room table covered in orange bottles feeling overwhelmed and alone and like they are the only person who has ever had to figure this out. You are not the only person. This is survivable. It requires a system, not superpowers.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Build the system before you need it. Number the bottles. Build the spreadsheet. Set the reorder triggers. Learn which pills can&apos;t live next to each other. Know your pharmacies by name — and let them know you.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>
              At Healthco, I called and a pharmacist answered. Not a phone tree. Not a recording. A real person who did this every day and knew what they were talking about. In the world of specialty medications and complex post-transplant care, that is not a small thing. That is everything.
            </p>

          </div>

          <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
              Download the template
            </p>
            <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }}>
              A blank version of the medication tracking spreadsheet — adapted from the system used during Lonna&apos;s post-transplant care. Free to download, adapt, and use. Coming soon as part of the Tools section.
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
        <JoinCTA message="The system is survivable. It requires a system, not superpowers." />
      </div>
      <Footer />
    </main>
  );
}
