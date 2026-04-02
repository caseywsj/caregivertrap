"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function ThrowTheDamnParty() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article style={{ padding: "5rem 2rem 3rem", maxWidth: "680px" }}>

          <div style={{ marginBottom: "2rem" }}>
            <a href="/emotional-landscape" style={{ fontSize: "12px", color: "#BA7517", textDecoration: "none", letterSpacing: "0.5px" }}>
              ← Emotional Landscape
            </a>
          </div>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Emotional Landscape
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "1rem", color: "#2C2C2A" }}>
            Throw the Damn Party
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            Easter weekend. The weekend most people set aside for close family. A hundred and ten people chose to spend it with us.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              January 14, 2025 started like most hospital days — bad numbers getting worse. Lonna&apos;s pH was 6.8, her lactate was 9.8, and her kidneys were shutting down. I&apos;m a numbers guy. I looked those numbers up. You typically don&apos;t survive them.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>She did.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              And somewhere in those first terrifying days, sitting next to her hospital bed while she slept, I made a decision. When she got out of there, we were going to throw a party. Not someday. Not when things settled down. There is no settled down. We were going to throw it while she was still there to enjoy it. Robin, Lonna&apos;s sister, was fully onboard.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              April 19. The 55th floor of our building in Austin. We officially called it the second anniversary of Lonna&apos;s lung transplant. Everyone there knew what it really was.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              Don&apos;t save the good words for the eulogy. Say them now. In person. With an open bar and a magician in the corner.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              We spent months getting it right. Full catering. Open bar. A three-hour playlist where the first six songs were all about breathing and the rest had meaning I can&apos;t fully explain but felt exactly right. A magician. A tarot card reader. A hundred and ten people. On Easter weekend — a weekend most people set aside for close family — a hundred and ten friends chose to spend it with us. That vote still gets me.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I put together a 27-slide presentation. About twenty minutes. It covered the whole arc — scleroderma, rejected by three transplant centers, 100% oxygen, finally listed, the transplant, ten days on a vent, fifteen days in the ICU, thirty-three days in the hospital, then 2024 which had its own medical bingo card: RSV, Covid, influenza, a massive blood clot, pneumonia twice, compression fractures, and five teeth that still needed to come out. And January 14th.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>Then I got out of the way and let the stories begin.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              I told three stories about Lonna. The first was about her love of animals — bigger the better, always. The second was about her need for speed. Vespa. Snowmobile. Dirt bike. The black sports car in the garage. She liked going fast in whatever was available. The third story I called &ldquo;Get Your Checkbook Out.&rdquo; That one was about the day she gave me the green light to build my own experimental airplane from scratch. Not buy one. Build one. That&apos;s not a small thing to say yes to. That&apos;s trust.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Then I told three stories that Lonna had chosen about herself. She picked them. I told them.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Hiking the Franz-Josef Glacier in New Zealand — crawling through ice caves on hands and knees, laughing the whole way. Paragliding in Jackson Hole for her 50th birthday — she went off that mountain and came back with the look of someone who had just discovered something important about herself. And the Camino de Santiago in Spain — ten days of hiking more than ten miles a day over challenging terrain, in the rain, with a group of women who by the end were calling her Liz Taylor.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>She always walked out of everything she walked into.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Then I opened it up to the room. Before the party I had put out a call on CaringBridge asking people to send their Lonna stories. They delivered. I read them out loud while she stood there and listened.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              {[
                { quote: "The group on the Camino called her Liz Taylor.", attr: "— Kim Nixon" },
                { quote: "Wild women's adventure weekend. Dumped kayak. Broke out of camp. Graffiti.", attr: "— Kim Nixon" },
                { quote: "She encouraged me to do the Texas 4K bike ride to Alaska.", attr: "— Michael Gaydos" },
                { quote: "Front porch meetups. Chocolate cookies. Heavy driving foot. Some secrets locked away.", attr: "— Jackie Freedman" },
                { quote: "Looking at the Austonian window washers, Lonna said — That's my dream job!", attr: "— Gayle Braeckelin" },
                { quote: "Lonna is an adventurer and has a mischievous twinkle in her eyes.", attr: "— Dana Weltmann" },
                { quote: "Holding hands as we headed into Santiago de Compostela. Special day.", attr: "— Mary Haeslop" },
                { quote: "RV trip to Yellowstone and Glacier. Brian ate Casey's steak and all hell broke out.", attr: "— Robin Gaydos" },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: i < 7 ? "0.75rem" : "0", paddingBottom: i < 7 ? "0.75rem" : "0", borderBottom: i < 7 ? "0.5px solid #D3D1C7" : "none" }}>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "14px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.25rem" }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p style={{ fontSize: "11px", color: "#888780" }}>{item.attr}</p>
                </div>
              ))}
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              This is the thing nobody tells you about throwing a party like this while someone is still alive to attend it. You find out who they actually are to other people. You get to hear the version of your person that exists in someone else&apos;s memory, preserved there for years, waiting for a room like this to release it.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Lonna got to stand on the 55th floor with a glass in her hand and a hundred and ten people around her and hear what she meant to them. Most people never get that room. They get a eulogy instead.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              A few months later, after she was gone, a friend told me something. Betty had talked to Lonna not long before the end. Lonna had told her that every time she saw me, she still had butterflies. After forty-five years. She never told me directly. She told a friend. And the friend told me after she was gone.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              That&apos;s what happens when you wait. The stories stay inside people. They mean to say them. They think there will be time. And then there isn&apos;t.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I got lucky. Most of the stories came out that night in April. Lonna heard them. I watched her face while she listened. That is one of the things I will carry with me forever.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>She passed on July 29th. Three months and ten days after the party.</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Life is about the stories we make and share. I believed that when I first wrote it. I believe it more now.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              You don&apos;t need a transplant anniversary. You don&apos;t need a milestone or a medical scare or a specific reason. The reason is that they&apos;re alive and so are you and the window does not stay open forever.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>Throw the damn party.</p>

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
            <a href="/emotional-landscape" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                More from Emotional Landscape
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="Don't save the good words for the eulogy. Throw the damn party." />
      </div>
      <Footer />
    </main>
  );
}
