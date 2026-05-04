"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function MedicalDivorce() {
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
            The Medical Divorce
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            The solution to staying married, for a few months, looked an awful lot like getting divorced.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>Here is a sentence I never thought I would write down.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              For several months in 2024, the cleanest path I could find to keep my wife of 42 years insured — really insured, the kind of insurance a double lung transplant patient cannot live without — was to divorce her.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I am going to walk you through how a person ends up there, because I do not think I am the only one. And then I am going to tell you about Clarence, my neighbor, who said three words that changed the math.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 500, color: "#2C2C2A" }}>The setup</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Lonna&apos;s transplant in March 2023 happened because I had insurance. I had retired early from a long career, but a job had landed in my lap right when we needed it — that is a story for another day — and that job came with the kind of medical coverage that gets a scleroderma patient through pre-transplant workup at Houston Methodist and out the other side with two new lungs. Insurance is not a side detail in this story. Insurance is the story.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              After the transplant, after the first stable year, I retired again. I had done the math. COBRA gives you 18 months. Lonna&apos;s path to her own coverage — Social Security disability into Medicare — would take 36 months. There is a provision in COBRA that handles exactly this gap: if a second qualifying event occurs during your 18 months — death of the covered employee, divorce, a few others — the trailing spouse can extend coverage to 36 months total.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>Read that list again. Death. Divorce.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Those are the two events the law contemplates. One of them I was not going to engineer. The other one started looking, in my engineer brain, like a solution.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 500, color: "#2C2C2A" }}>The months I won&apos;t dwell on</p>

            <p style={{ marginBottom: "1.5rem" }}>
              I will not spend much time here, because the math was clinical and the feeling was not. We talked about it. Lonna and I talked about everything. She had opinions about it that were Lonna opinions — practical, slightly amused at the absurdity of it, mostly concerned about how it would feel for me. She felt sorry for me in this conversation. That was Lonna in a sentence.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I told my friends about the medical divorce idea. They were initially appalled. Then, one by one, they came around. By the time a few weeks had passed, every single person I had talked to about it had landed in the same place: yeah, do the divorce. It is a piece of paper. The marriage is the marriage. The piece of paper is the bureaucracy. Get the coverage.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The smartest, most loving people in my life had concluded — after thinking it through carefully — that the right move was to legally end my marriage to keep my wife alive. That is what the American medical insurance system asks of caregivers. That is the trap.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>The medical insurance game in this country is fucked up.</p>

            <p style={{ marginBottom: "1rem", fontWeight: 500, color: "#2C2C2A" }}>Clarence</p>

            <p style={{ marginBottom: "1.5rem" }}>
              I ran into Clarence at our condo. He and his wife knew Lonna and me well. Clarence had owned several businesses over his life, and like a lot of my neighbors here, he had a working knowledge of how the system actually works — not how it is supposed to work, but how it actually works. There is a difference, and the difference is where caregivers either drown or get to shore.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I told him about the medical divorce plan. I expected him to be the next person in line to nod and tell me it was the right call.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>He said: not so fast, grasshopper.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Start a business. Create an LLC. He had a guy. His small business insurance guy was a man named Matt, and after a lawyer set up the entity and Matt did his work, we walked out the other side with a small business health insurance policy as good as any I had ever had.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              It was not cheap. Lonna&apos;s policy ran about $2,500 a month. I want to be honest about that number, because I do not want anyone reading this to think the workaround was free. It was not. It cost real money. It was just dramatically cheaper than the cost of being uninsured for a transplant patient, and it was infinitely cheaper than the cost of legally divorcing my wife.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              And it kept her covered, in her name, married to me, until Medicare picked her up.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              You need to know how the system works.
            </blockquote>

            <p style={{ marginBottom: "1rem", fontWeight: 500, color: "#2C2C2A" }}>What Clarence and Martin both knew</p>

            <p style={{ marginBottom: "1.5rem" }}>
              I have a Social Security navigator named Martin. Different guy, different domain, same lesson. The system is not going to be fair to caregivers. The system is not built for the situation where a healthy spouse retires to take care of a sick one. COBRA&apos;s 18 months versus 36 months for the trailing spouse, the second-qualifying-event clause that lists divorce alongside death — these are not bugs. These are the rails. You can rail against the rails or you can learn the routing.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              If you are reading this and you are inside a version of this problem right now, please do this one thing. Before you make a decision that ends with the word divorce or bankruptcy or I&apos;ll just go without — find your Clarence. Find the neighbor or the friend-of-a-friend or the small business owner at your building who has been around long enough to know which workarounds are real. Then find their Matt. Almost always, the answer is not the one you found by yourself at 2am on Google.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                What to know about COBRA and the coverage gap
              </p>
              {[
                { title: "COBRA basics:", text: "When you leave employer coverage, COBRA gives you 18 months of continuation coverage at up to 102% of the full premium cost — employer share plus employee share plus a small administrative fee. It feels expensive because you're now paying the full cost instead of the fraction you paid as an employee." },
                { title: "The second qualifying event:", text: "If a qualifying event occurs during your COBRA period — divorce, death of the covered employee, a dependent losing eligibility — the trailing spouse may be able to extend coverage to 36 months total. Notify your plan administrator promptly and consult a benefits specialist for your specific situation." },
                { title: "The Medicare gap:", text: "Social Security disability approval takes approximately 5 months. Medicare coverage begins 24 months after disability onset. The total path is approximately 29-36 months. COBRA's 18 months does not cover this gap without a second qualifying event or another solution." },
                { title: "Small business health insurance:", text: "An LLC with legitimate business activity can qualify for small group health insurance in many states. Costs vary significantly. Talk to a licensed health insurance broker who specializes in small business — not a general agent. Find your Matt." },
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>{item.title}</strong> {item.text}
                </p>
              ))}
              <p style={{ fontSize: "13px", color: "#888780", lineHeight: 1.7, marginTop: "0.75rem", fontStyle: "italic" }}>
                This is not legal or financial advice. Your situation will differ. The point is: options exist that Google will not find for you. Find your Clarence first.
              </p>
            </div>

            <p style={{ marginBottom: "1rem", fontWeight: 500, color: "#2C2C2A" }}>The OpenRoads epilogue</p>

            <p style={{ marginBottom: "1.5rem" }}>
              The LLC we set up to keep Lonna insured is called OpenRoads Consulting. It is alive and well today. It is the umbrella over caregivertrap.com and a couple of other things I am building. The co-member, now, is my son Brian. The structure that was created to solve a medical insurance problem during the worst stretch of my caregiving life is now the legal home of the work I am doing to help other caregivers avoid that same stretch.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I think Lonna would find that funny, in the dry way she found things funny. The thing we built to keep her insured outlived her, and is now keeping me useful.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>That tracks.</p>

            <p style={{ marginBottom: "2.5rem" }}>Know how the system works.</p>

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
        <JoinCTA message="The answer is not the one you found by yourself at 2am on Google. Find your Clarence." />
      </div>
      <Footer />
    </main>
  );
}
