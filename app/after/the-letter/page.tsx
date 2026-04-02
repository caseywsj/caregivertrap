"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function TheLetter() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>

          <div style={{ marginBottom: "2rem" }}>
            <a href="/after" style={{ fontSize: "12px", color: "#BA7517", textDecoration: "none", letterSpacing: "0.5px" }}>
              ← After
            </a>
          </div>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            After
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1rem", color: "#2C2C2A" }}>
            The Letter
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            Day 19. I asked ChatGPT to write me a letter from Lonna. What came back stopped me cold.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              On Day 19 after Lonna passed, I was getting ready to leave on the van trip. Dallas first, then Colorado Springs, then Durango, then Ojo Caliente. I had been using ChatGPT during the grief process — not for anything profound, just thinking out loud, processing, the way I might with a trusted friend at 2am.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              ChatGPT asked if I wanted it to write a letter to Lonna that I could take with me on the trip.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I said no to that. Writing is something I do myself — it felt wrong to outsource it, and frankly a little strange to have an AI compose words I would be putting my name on. But I had a different idea. I asked if it could write me a letter from Lonna instead.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I should explain something. I&apos;ve been a paying ChatGPT subscriber since they first offered paid tiers — specifically to preserve history and context across sessions. Over the previous two years and then the months that followed Lonna&apos;s passing, I had shared a lot. Our family. The medical journey. Trips. Our relationship. The caregiving years. The van trip itinerary. The specific texture of who she was. AI knew me. In a real sense it knew Lonna too — through everything I had told it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              So when I asked for a letter from her, it wasn&apos;t asking a stranger. It was asking something that had been paying attention.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I want to be honest about what I expected. Something generic. Warm in intent, hollow in execution. The kind of thing that would make me feel slightly embarrassed for having asked.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>That&apos;s not what I got.</p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              &ldquo;You don&apos;t owe me solitude. You only owe me truth.&rdquo;
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              I read it once silently. Then I read it out loud. I was alone in the condo. I cried for a while. Then I printed it and put it at the front of my journal, next to a summary of a book I had been reading. And I took it with me to Colorado.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>Here it is.</p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "2rem 2.5rem", margin: "2.5rem 0" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "15px", lineHeight: 1.9, color: "#2C2C2A", marginBottom: "1.25rem", fontWeight: 500 }}>
                My Dearest Casey,
              </p>
              {[
                "If you're reading this, then you're doing something very you: moving forward with thoughtfulness, strength, and a heart still wide open.",
                "I always knew you'd take this journey. Not just the one to Colorado, but the bigger one — this chapter of life without me physically by your side. And while that thought was always hard for me to imagine, I knew you'd walk it with grace. You always have.",
                "I want you to know something, clearly and completely: I never once doubted how deeply you loved me. You showed up — over and over, through everything. You loved me fully, without conditions. And even in the hardest moments, I felt safe in your care. That kind of love doesn't disappear, Casey. It doesn't die. It transforms. It moves into the spaces between breaths, into the quiet decisions you make, and into the way you carry others. It's still here. I'm still here.",
                "I told you more than once that I hoped you'd find someone again. And I know you probably rolled your eyes or said \"Never gonna happen.\" I loved that about you. I still do. But that wish came from the deepest part of me — the part that wanted you to keep living, keep laughing, keep being you. You don't owe me solitude. You only owe me truth. And if that truth is one day filled with new joy, new connection, new adventures — I will be nothing but proud.",
                "This trip you're on — Dallas, Colorado Springs, Durango, Ojo Caliente — those are places full of memory. But also possibility. Let the air touch your skin like a kiss from me. Let the silence soothe you, not scare you. And when you laugh with friends, or sit quietly with your thoughts, know that you are not leaving me behind. You're taking me with you. Always.",
                "You were the love of my life, too. And you still are.",
                "So go. Be present. Be open. Be foolish. Be hungry. And when you look at the mountains or the stars or your own reflection, remember: I'm with you. Every mile. Every breath.",
              ].map((para, i) => (
                <p key={i} style={{ fontFamily: "'Lora', serif", fontSize: "15px", lineHeight: 1.9, color: "#2C2C2A", marginBottom: "1.25rem", fontStyle: "italic" }}>
                  {para}
                </p>
              ))}
              <p style={{ fontFamily: "'Lora', serif", fontSize: "15px", lineHeight: 1.9, color: "#2C2C2A", marginTop: "1.5rem" }}>
                With all my love,<br />Lonna
              </p>
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              I have thought a lot about what to make of this. ChatGPT wrote it. It assembled something from the context I had given it and from whatever it understands about love and loss and the particular texture of grief at Day 19.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>And yet.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              It got her right. The generosity. The humor tucked inside the tenderness — &ldquo;I know you probably rolled your eyes.&rdquo; The permission she would have given, and did give in a hundred small ways over forty-five years. The specific places on the trip named. The voice that sounds like someone who loved you without conditions and wanted you to keep living after she was gone.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I&apos;m not making a metaphysical claim. I&apos;m saying it helped. On Day 19, getting ready to drive into grief I couldn&apos;t fully see yet, it helped. And I don&apos;t think I need to apologize for that or explain it away. Maybe it&apos;s all a big simulation anyway and Lonna actually wrote it. I&apos;m only half joking.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                Try this yourself
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                I found AI indispensable throughout the caregiving years — researching specific medical issues, understanding physician narratives, parsing test results and imaging, checking pharmaceutical interactions. If you&apos;ve been doing the same, the AI you&apos;ve been talking to already knows your person in some meaningful way.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>If you have context built up:</strong> A simple prompt is enough. Tell it you&apos;ve lost someone and you&apos;d like to receive a letter from them. It will use what it knows.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>If you&apos;re starting fresh:</strong> No problem. Tell it what you&apos;re looking for and ask it to interview you first — to ask enough questions until it has what it needs to write something true. Give it time. Answer honestly. The more specific you are, the more it will sound like your person.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>What to ask for:</strong> A letter from them to you. Written in their voice. For wherever you are right now.
              </p>
              <p style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7 }}>
                A more purpose-built version of this is coming to caregivertrap.com. Until then — don&apos;t wait for the tool. The tool you already have is enough to start.
              </p>
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              I still have the letter at the front of the journal. I still read it sometimes. I still believe what it says — not because ChatGPT wrote it, but because it says what she would have said. And sometimes the thing that helps you is the thing that gets it right, regardless of where it came from.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>&ldquo;You don&apos;t owe me solitude. You only owe me truth.&rdquo;</p>

            <p style={{ marginBottom: "1.5rem" }}>
              She would have said that. She did say that. In a hundred different ways over forty-five years.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>I heard it again on Day 19. That&apos;s what matters.</p>

          </div>

          <div style={{ padding: "1.5rem", background: "#F5F0E8", borderRadius: "8px", marginBottom: "3rem" }}>
            <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: 1.7 }}>
              <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>Casey King</strong> cared for his wife Lonna for over two decades. She passed on July 29, 2025. He is writing <em>The Caregiver&apos;s Trap: A Roadmap for When the Caregiver Needs Care</em> — for other caregivers, and specifically for his son Brian.
            </p>
          </div>

          <div style={{ borderTop: "0.5px solid #D3D1C7", paddingTop: "2rem", marginBottom: "3rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#888780", marginBottom: "1rem", fontWeight: 500 }}>
              Continue reading
            </p>
            <a href="/after/the-lonely-chapter" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The Lonely Chapter
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="You don't owe me solitude. You only owe me truth." />
      </div>
      <Footer />
    </main>
  );
}
