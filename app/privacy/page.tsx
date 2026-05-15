import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Privacy() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article style={{ padding: "5rem 2rem 4rem", maxWidth: "680px" }}>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Legal
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "0.5rem", color: "#2C2C2A" }}>
            Privacy Policy
          </h1>

          <p style={{ fontSize: "13px", color: "#888780", marginBottom: "3rem" }}>Last updated: May 15, 2026</p>

          <div style={{ fontSize: "15px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              Caregiver Trap is operated by OpenRoads Consulting, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). This Privacy Policy describes how we collect, use, and protect information when you use our website and any associated services, including the Proof of Life mobile application.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Information We Collect</p>

            <p style={{ marginBottom: "1rem" }}>We collect only the information necessary to provide our services. This may include:</p>

            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Information you provide directly, such as your name and email address when you contact us or sign up for updates.</li>
              <li style={{ marginBottom: "0.5rem" }}>Information you enter into the Proof of Life mobile application, including your own first name and the names and phone numbers of people you choose to share daily wellness status with (&ldquo;recipients&rdquo;).</li>
              <li style={{ marginBottom: "0.5rem" }}>Standard web analytics about how visitors use caregivertrap.com.</li>
            </ul>

            <p style={{ marginBottom: "1.5rem" }}>
              The Proof of Life mobile application stores the recipient list locally on your device. We do not have access to your recipient list unless you use a feature that explicitly transmits a message through our servers.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>How We Use Information</p>

            <p style={{ marginBottom: "1.5rem" }}>
              We use the information we collect to operate, maintain, and improve our services, to respond to your questions, and to send messages on your behalf when you request that we do so through the Proof of Life application.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>SMS Communications</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Proof of Life sends SMS messages on behalf of users who choose to share a brief daily wellness status with people they have explicitly designated. Phone numbers entered into the app for this purpose are used solely to deliver these messages and are not sold, rented, or shared with third parties for marketing purposes.
            </p>

            <p style={{ marginBottom: "1.5rem", fontWeight: 500, color: "#2C2C2A" }}>
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with third parties is limited to subprocessors necessary to deliver SMS messages (such as our telecommunications provider).
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Recipients of SMS messages can opt out at any time by replying STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, REVOKE, or OPTOUT. Recipients can request information about the service by replying HELP or INFO.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Message and data rates may apply. Message frequency varies based on the app user&apos;s activity.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Health Information</p>

            <p style={{ marginBottom: "1.5rem" }}>
              The Proof of Life application reads activity, heart rate, sleep, and related data from Apple HealthKit on the user&apos;s own device. This data is processed on the device to compute a daily wellness summary. Raw health data is not transmitted to our servers. The summary messages sent on your behalf do not contain raw health data; they describe whether the day was within the user&apos;s normal range.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Data Retention</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Information you provide is retained only as long as necessary to provide our services or as required by law. You may request deletion of any information we hold about you by contacting us at the address below.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Children</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Our services are not directed to children under 13, and we do not knowingly collect information from children under 13.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Changes to This Policy</p>

            <p style={{ marginBottom: "1.5rem" }}>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this policy indicates when it was last revised. Material changes will be announced on caregivertrap.com.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Contact</p>

            <p style={{ marginBottom: "0.5rem" }}>For questions about this Privacy Policy or how we handle your information, contact:</p>
            <p style={{ marginBottom: "0.5rem" }}>OpenRoads Consulting, LLC</p>
            <p style={{ marginBottom: "1.5rem" }}>Email: <a href="mailto:casey@caregivertrap.com" style={{ color: "#BA7517", textDecoration: "none" }}>casey@caregivertrap.com</a></p>

          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
