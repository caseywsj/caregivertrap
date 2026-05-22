import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JoinCTA from "@/components/JoinCTA";

export const metadata = {
  title: "The Playlist — The Caregiver's Trap",
  description:
    "Music as the load-bearing structure across the whole arc. ICU delirium, a celebration of life playlist, and the songs that mean one thing before and another thing after.",
};

export default function ThePlaylist() {
  return (
    <div className="min-h-screen bg-[#FDFAF6] text-[#2C2C2A]">
      <Nav />

      <article className="max-w-2xl mx-auto px-6 pt-24 pb-20">
        <Link
          href="/emotional-landscape"
          className="text-sm text-[#5F5E5A] hover:text-[#BA7517] transition-colors"
        >
          ← Emotional Landscape
        </Link>

        <p className="mt-8 text-sm uppercase tracking-widest text-[#888780]">
          Emotional Landscape
        </p>

        <h1
          className="mt-3 text-5xl md:text-6xl font-normal leading-tight"
          style={{ fontFamily: "Lora, serif" }}
        >
          The Playlist
        </h1>

        <div
          className="mt-10 space-y-6 text-lg font-light leading-[1.9]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <p>
            It was somewhere around day eight or nine in the ICU and Lonna had
            lost her mind.
          </p>

          <p>
            That's not a figure of speech. ICU delirium is a real thing —
            bright lights, beeping monitors, drugs, sleep deprivation, no day,
            no night, no idea where you are or how long you've been there. The
            patient in the next bay had been screaming for three days straight.
            Lonna had spent ten days intubated and was now extubated but still
            rough. She couldn't speak. She was tugging at her bracelet, the
            blood pressure cuff, her mid-line. She tried to bite a nurse. She
            was begging me to take her home. I'd say I couldn't. She'd nod,
            understand, and ask again thirty seconds later.
          </p>

          <p>
            The staff was kind. The drugs weren't working. Nothing I said was
            landing.
          </p>

          <p>
            I tried family photos on the iPad. Nothing.
            <br />
            I tried Ted Lasso. Nothing.
            <br />
            I tried talking. Nothing.
            <br />
            I tried being quiet. Nothing.
          </p>

          <p>
            Eventually I queued up Miranda Lambert and put the iPad next to her
            pillow on a loop.
          </p>

          <p>
            Why Miranda Lambert? Because for years we had driven Austin to
            Houston and back, over and over, for appointments and clinics and
            tests, and Miranda Lambert was the soundtrack. It wasn't a
            thoughtful choice. It was the default. It was what we listened to
            when there was nothing to talk about and a long road ahead.
          </p>

          <p>
            The agitation went down. She wasn't fixed. She was still in the ICU
            and still tied to half a dozen machines. But she settled. Something
            in her — under all the drugs and the delirium and the panic —
            recognized the music and recognized that she was somewhere
            familiar.
          </p>

          <p>
            Here's the part I didn't understand until later: it calmed me down
            too.
          </p>

          <p>
            Lonna has no conscious memory of any of those days. She doesn't
            remember Miranda Lambert or the iPad or the looping. So in one
            sense the music was for her — the agitation was real, and it eased
            — and in another sense it was entirely for me. I was the one
            watching the monitors. I was the one who needed something to do
            that wasn't useless. Hitting play on a familiar song was the one
            thing in that room that worked. Both things are true. The music
            reached her. The music reached me. That is most of what I learned
            about caregiving in the ICU, compressed into one observation.
          </p>

          <hr className="my-12 border-t border-[#D3D1C7] w-16 mx-auto" />

          <p>
            Two years later, when we threw Lonna's Lungs Party on April 19, the
            playlist was the first thing I built. Before the catering, before
            the magician, before the slides. Three hours.
          </p>

          <p>
            The first songs were about breathing. I had searched for them
            deliberately. <em>Catch My Breath, Breathless, Still Breathing,
            Every Breath You Take, Breathe.</em> Five songs to open the
            playlist, to tell anyone listening closely what the playlist was
            actually about. The sixth breathing song — Florence + the Machine's{" "}
            <em>Dog Days Are Over</em> — I tucked in later, because the album
            it came from was called <em>Lungs</em>. Most people wouldn't catch
            that. I would.
          </p>

          <p>
            The rest of the songs came from a personal archive I'd been
            building for years. Songs I'd Shazam in a store or a car or a
            hotel lobby, songs from TV shows that didn't sound like anything
            else, songs from old albums I kept coming back to. When it was
            time to build the playlist, I went through the archive and pulled
            the ones that still moved me. Some were Lonna's. Some were ours.
            Several were mine.
          </p>

          <p>
            A few I will tell you about. Most I won't, because every song on
            this list has a story like the ones below, and most of those
            stories are mine and Lonna's and not for the internet.
          </p>

          <p>
            <em>Viva La Vida</em> — the Sofia Karlberg cover. Softer than
            Coldplay, a woman's voice carrying it. The song is about fame and
            power, but I always heard it as something else: that to fully
            embrace being alive, you have to accept both the glorious successes
            and the painful downfalls. Track six on the playlist, right after
            the five breathing songs. The pivot from <em>stay alive</em> into{" "}
            <em>this is what being alive actually cost us.</em>
          </p>

          <p>
            <em>Beautiful Things</em> — Benson Boone, the acoustic version. He
            spends the whole song begging not to have this person taken from
            him. <em>I found a girl my parents loved. Thank God every day for
            the girl he sent my way. I want to hold you every night. I'm
            terrified, oh, I'm terrified.</em> I put it on the playlist for
            the party. Lonna was alive and in the room when it played. It was
            a love song.
          </p>

          <p>Now it's a different song.</p>

          <p>
            <em>Beautiful Crazy</em> — Luke Combs. That one is Lonna. Starts
            with a coffee. Takes forever to get ready. Never on time. Drives
            you wild. Lonna in a song.
          </p>

          <p>
            <em>Rebel Yell</em> — Billy Idol, 1983. We were already married.
            Lonna loved this song from our young years, when there was nothing
            to do about it but turn it up. I will think of her every time I
            hear it for the rest of my life.
          </p>

          <p>
            <em>Angel from Montgomery</em> — John Prine. The song I would play
            for her on the guitar. Lonna bought me the guitar.
          </p>

          <p>
            <em>Leader of the Band</em> — the Zac Brown cover of Dan Fogelberg.
            That one is mine. I'd like it played when I go.
          </p>

          <p>
            <em>Knockin' on Heaven's Door</em> — the Eric Clapton reggae
            version, not Dylan or Guns N' Roses. In January 2025 Lonna was
            knocking on heaven's door for real and somehow came back to me.
            That song earned its place on the list the hard way.
          </p>

          <p>
            <em>How Far I'll Go</em> — the Alessia Cara version, from Moana.
            Lonna saw herself in this song and she was right to. Loved the
            water. Loved adventure. Independent. Connected to community. Sat at
            the edge of the water forever. Wanted to be the perfect daughter.
            And she loved Disney. It is one of the most accurate songs about
            my wife that exists.
          </p>

          <p>
            <em>Stay</em> — Rihanna and Mikky Ekko. The only song on the entire
            three-hour playlist that Lonna explicitly asked me to add. It was
            her song, not mine. I love it now anyway. I did not put it on the
            list to send her a message. She put it on the list and the message
            arrived later.
          </p>

          <p>
            <em>Cover Me</em> — Springsteen, <em>Born in the U.S.A.</em> The
            deliberate closer. Three hours of music and this is what I wanted
            in the room when the last song played. I will leave it at that.
          </p>

          <p>There are thirty-five more.</p>

          <p>
            A hundred and ten people came to that party. Most of them, as I
            wrote elsewhere, never noticed the music. That was fine. The music
            was not for them. Lonna heard it. She moved to it. She was there.
            I watched her face.
          </p>

          <hr className="my-12 border-t border-[#D3D1C7] w-16 mx-auto" />

          <p>She passed on July 29.</p>

          <p>
            In mid-August I packed up the van and drove. Dallas first, then
            twelve hours to Raton, New Mexico. Somewhere on that drive I queued
            up Lonna's Lungs for the first time since the party.
          </p>

          <p>I made it six songs.</p>

          <p>
            The breathing songs. The five I had picked on purpose. Five songs
            about breathing, played in a van driven by a man whose wife could
            no longer breathe at all. I turned it off. The journal entry from
            that night just says <em>tragic &amp; tears.</em> For a minute I
            felt like I had failed her. I knew that wasn't true — scleroderma
            did this, not me — but the playlist did not care what was true.
            The playlist just played her back to me, and six songs in I could
            not do it anymore.
          </p>

          <p>
            A week or so later I made it to Durango to see friends — Peter and
            Anne. We sat down for dinner. At some point one of them put the
            playlist on. I don't remember which one. I didn't object. We just
            let it run.
          </p>

          <p>It was wonderful.</p>

          <p>
            The same songs. The same order. The same five about breathing
            right at the front. Eight days apart. One time gutted me. The next
            time held me. The difference wasn't the playlist. The difference
            was that I wasn't alone with it.
          </p>

          <p>
            I don't listen to the playlist often now. Maybe every couple of
            months. It's not in my regular rotation and it shouldn't be — that
            would wear it out, which would be its own kind of loss. But when I
            put it on, I love it. The songs that meant one thing while she was
            alive mean something else now. <em>Stay</em> especially.{" "}
            <em>Beautiful Crazy.</em> <em>Rebel Yell.</em> <em>Cover Me.</em> I
            built the playlist for a party. I didn't realize I was also
            building a record. Not a memorial — a record. Something I'd reach
            for in five years, or ten, that would land me somewhere specific
            in my own life.
          </p>

          <hr className="my-12 border-t border-[#D3D1C7] w-16 mx-auto" />

          <p>
            One last thing, because this is the part I'm still figuring out.
          </p>

          <p>
            I have started sharing playlists with friends. Not Lonna's Lungs —
            mostly other playlists, mine and theirs. When someone you care
            about is going through something hard and they send you fifteen
            songs they've been listening to, you can feel where they are. It is
            more honest than most conversations. You can hear what they're
            avoiding and what they're sitting with. You can hear the song they
            keep coming back to even though they don't know why yet. Music is
            one of the few channels we have left for telling another person
            what we feel without having to find the words.
          </p>

          <p>
            That is also a kind of caregiving. It does not look like
            caregiving. It looks like swapping song titles in a text thread.
            But it is the same act: noticing someone, paying attention,
            sending back something that says <em>I hear you.</em>
          </p>

          <p>
            So that is the lesson, if there is one. Music reached Lonna in the
            ICU when nothing else did. Music reached me when nothing else did,
            in a van between Dallas and Raton, and again a week later in
            Durango when I wasn't alone with it. And music is reaching me now,
            in both directions, with the people who are still here.
          </p>

          <p>It's the same songs the whole time. It's the rest of us who keep changing.</p>

          <p className="pt-4">
            🎧{" "}
            
            <a href="https://music.apple.com/us/playlist/lonnas-lungs/pl.u-Wao7cRk50qR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BA7517] underline underline-offset-4 hover:no-underline"
            >
              Lonna's Lungs — three hours, the songs that held us
            </a>
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[#D3D1C7]">
          <p
            className="text-sm text-[#5F5E5A] leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <strong className="text-[#2C2C2A]">Casey King</strong> spent over
            two decades as a caregiver for his wife Lonna, who lived with
            scleroderma and underwent a double lung transplant in 2023. He is
            writing <em>The Caregiver's Trap: A Roadmap for When the Caregiver
            Needs Care.</em>
          </p>
        </div>

        <div className="mt-16">
          <Link
            href="/emotional-landscape"
            className="text-sm text-[#BA7517] hover:underline"
          >
            More from Emotional Landscape →
          </Link>
        </div>
      </article>

      <JoinCTA />
      <Footer />
    </div>
  );
}
