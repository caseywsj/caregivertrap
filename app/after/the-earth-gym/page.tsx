"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import JoinCTA from "../../../components/JoinCTA";

export default function TheEarthGym() {
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
            The Earth Gym
          </h1>

          <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", color: "#5F5E5A", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            Put down the devices. Get outside. Meet people. Use your body. This is not a wellness tip — it&apos;s a survival strategy.
          </p>

          <div style={{ width: "40px", height: "1.5px", background: "#BA7517", marginBottom: "2.5rem" }} />

          <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              On Day 11 after Lonna passed I drove out to Georgetown Airport alone for an EAA chapter meeting. Spent five or six hours out there looking at airplanes, talking to people who love airplanes, being somewhere that had nothing to do with grief or loss or the medical system or the last two years of my life. Then I drove to Salt Lick and had dinner by myself.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              It was not comfortable. I&apos;m not going to pretend it was comfortable. Eating alone at a barbecue restaurant eleven days after your wife dies is not a healing moment from a movie. It was just a guy eating brisket by himself because he needed to be somewhere other than his condo.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              That&apos;s the Earth Gym. Not a concept. A practice. Get off the devices, get out of the building, put your body in the actual physical world and let the world do its work on you.
            </p>

            <blockquote style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontStyle: "italic", lineHeight: 1.7, color: "#2C2C2A", paddingLeft: "1.5rem", borderLeft: "2px solid #BA7517", margin: "2.5rem 0" }}>
              Passive recovery keeps you in your head. The Earth Gym gets you out of it. Your nervous system needs real inputs. Give it some.
            </blockquote>

            <p style={{ marginBottom: "1.5rem" }}>
              Here&apos;s what I mean by passive versus active. In the weeks after Lonna passed I had plenty of opportunities to stay inside and watch things on screens. The NFL preseason was on. There was plenty to stream. And I did some of that — I&apos;m not suggesting you become a monk. But I noticed early that the passive hours left me feeling worse, not better. The TV didn&apos;t ask anything of me. My brain stayed in the same loop it had been running all day, just with background noise added.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The active hours were different. Not easier — different. When I was at the EAA meeting I had to pay attention to other people and their projects and their ideas. When I was playing tennis I had to track a ball moving at speed and make decisions in real time. When I went to the Counter Cafe on Day 9 and ended up talking to strangers, I came home with two actual invitations — a monthly motorcycle club meetup and a weekly Old Farts gathering. Real things. Real people. Neither of which I would have found from my couch.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The caregiving years had contracted the world significantly. Not the friendships — those held. But the range of motion. The spontaneous things. The ability to just go somewhere without calculating what it meant for Lonna&apos;s schedule and medications and needs. After she passed the condo felt enormous and silent and I needed to get out of it as much as possible without making it mean anything more than that. Just movement. Just friction. Just the ordinary sensory input of being a person in the world.
            </p>

            <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "1.5rem", margin: "2rem 0" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", fontWeight: 500, marginBottom: "0.75rem" }}>
                The Earth Gym toolkit — what actually worked
              </p>
              {[
                { label: "Movement with other people.", text: "Tennis at 10am. Golf. The Broadmoor in Colorado — tennis and golf both in the same day. Two hours where your nervous system cares about something other than the caregiving brain. Keep that going. Expand it." },
                { label: "Solo trips that require navigation.", text: "The van to New Mexico and Colorado. Georgetown Airport alone. Ojo Caliente. Being in an unfamiliar place by yourself requires just enough low-level problem solving to keep the brain engaged. It also forces you to talk to strangers, which is underrated." },
                { label: "Dust off the old activities.", text: "EAA. Flying. Guitar. Dance lessons. Things that were always yours but got pushed to the margins during caregiving. They're still there. They still work. Picking them back up doesn't require being ready — it just requires showing up." },
                { label: "Say yes to new things with a beginner's mind.", text: "Motorcycle club invite from a stranger at a coffee shop. Old Farts gathering. The point isn't to join everything — it's to stay permeable. Let new things in. Some will stick. Most won't. That's fine." },
                { label: "Feed yourself properly.", text: "The Salt Lick alone was partly about brisket and partly about the ritual of sitting down and eating a real meal. Cook when you can. Eat with people when you can. Food is not incidental." },
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#5F5E5A", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#2C2C2A", fontWeight: 500 }}>{item.label}</strong> {item.text}
                </p>
              ))}
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              The Earth Gym is also about beginner&apos;s mind — approaching familiar things as if for the first time, without the accumulated weight of expertise and expectation. After twenty-five years of caregiving, after losing Lonna, after the identity reconstruction that follows both — almost everything qualifies as new. The solo van trip was new. Eating dinner alone was new. Dating was new. Being a widower was new. Being a grandfather-to-be was new.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              You don&apos;t have to be good at new things. You just have to be willing to be bad at them for a while. That&apos;s beginner&apos;s mind. That&apos;s the Earth Gym applied to the interior as well as the exterior.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The Fit Generation — a documentary I&apos;ve thought about a lot — makes the point that the people who age well aren&apos;t the ones who found the perfect exercise routine. They&apos;re the ones who never stopped moving. Not because they were disciplined. Because they built an identity around being active people. <em>I am someone who moves. I am someone who shows up. I am someone who is out in the world.</em> That identity drives behavior long after motivation has come and gone.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              You don&apos;t stop because you age. You age because you stop.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Same principle applies here. You don&apos;t recover by waiting to feel better. You feel better by doing the things that a person who is getting better does. Movement first. Feeling follows. Not the other way around.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Get outside. Put your body somewhere real. Let the world be the gym.
            </p>

            <p style={{ marginBottom: "2.5rem" }}>
              It&apos;s open. It&apos;s free. It&apos;s been waiting for you.
            </p>

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
            <a href="/after/the-camera" style={{ textDecoration: "none" }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: "#2C2C2A", lineHeight: 1.4, marginBottom: "0.5rem" }}>
                The Camera
              </p>
              <p style={{ fontSize: "13px", color: "#BA7517" }}>Read next →</p>
            </a>
          </div>

        </article>
        <JoinCTA message="Movement first. Feeling follows. Get in the world." />
      </div>
      <Footer />
    </main>
  );
}
