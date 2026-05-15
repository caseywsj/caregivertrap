import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Terms() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#FDFAF6", color: "#2C2C2A", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article style={{ padding: "5rem 2rem 4rem", maxWidth: "680px" }}>

          <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: "#BA7517", marginBottom: "1rem", fontWeight: 500 }}>
            Legal
          </p>

          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.5px", marginBottom: "0.5rem", color: "#2C2C2A" }}>
            Terms of Service
          </h1>

          <p style={{ fontSize: "13px", color: "#888780", marginBottom: "3rem" }}>Last updated: May 15, 2026</p>

          <div style={{ fontSize: "15px", lineHeight: 1.9, color: "#444441", fontWeight: 300 }}>

            <p style={{ marginBottom: "1.5rem" }}>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of caregivertrap.com and any associated services, including the Proof of Life mobile application (collectively, the &ldquo;Services&rdquo;), operated by OpenRoads Consulting, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By using the Services, you agree to these Terms.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Use of the Services</p>

            <p style={{ marginBottom: "1.5rem" }}>
              You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for the accuracy of any information you provide and for any activity that occurs through your use of the Services.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>The Proof of Life Application</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Proof of Life is a wellness tool that helps a user share a brief daily status with a small list of people they choose (&ldquo;the village&rdquo;). The application is not a medical device, does not diagnose any condition, and is not a substitute for professional medical advice, emergency services, or routine medical care. In an emergency, call 911 or your local emergency number.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              The user is solely responsible for selecting who receives messages on their behalf and for the accuracy of any information they provide about those recipients.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>SMS Terms of Service</p>

            <p style={{ marginBottom: "1.5rem" }}>
              By providing a recipient&apos;s phone number through the Proof of Life application, you (&ldquo;the app user&rdquo;) confirm that you have obtained the recipient&apos;s consent to receive SMS messages from this service on your behalf. Recipients are people you have personally designated by name and phone number to receive a brief daily wellness status. You agree not to add recipients without their prior consent.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Recipients will receive a brief daily wellness status from the app user, typically one message per day. <strong style={{ color: "#2C2C2A" }}>Message and data rates may apply.</strong> <strong style={{ color: "#2C2C2A" }}>Message frequency varies</strong> based on the app user&apos;s activity and configuration.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Recipients can opt out at any time by replying STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, REVOKE, or OPTOUT. Upon opt-out, the recipient will receive one confirmation message and no further messages from the service. Recipients can resubscribe by replying START, UNSTOP, or YES.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Recipients can request information about the service at any time by replying HELP or INFO.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#2C2C2A" }}>Carriers are not liable for delayed or undelivered messages.</strong> Delivery of SMS messages depends on factors outside our control, including the recipient&apos;s carrier and device.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              For support related to SMS messages, contact us at the address below.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>No Medical or Emergency Service</p>

            <p style={{ marginBottom: "1.5rem" }}>
              The Services are wellness tools only. They are not designed to detect medical emergencies, are not monitored by medical professionals, and do not replace any form of emergency response system. The absence of a message, the delay of a message, or any specific content of a message must not be relied upon as an indicator of a medical condition or emergency. Recipients and users should contact appropriate medical or emergency services directly when needed.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Privacy</p>

            <p style={{ marginBottom: "1.5rem" }}>
              Your use of the Services is also governed by our Privacy Policy, available at <a href="/privacy" style={{ color: "#BA7517", textDecoration: "none" }}>caregivertrap.com/privacy</a>, which is incorporated into these Terms by reference.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Intellectual Property</p>

            <p style={{ marginBottom: "1.5rem" }}>
              All content, software, and materials made available through the Services are owned by OpenRoads Consulting, LLC or its licensors and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works from any portion of the Services without our prior written permission.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Disclaimer of Warranties</p>

            <p style={{ marginBottom: "1.5rem", textTransform: "uppercase" as const, fontSize: "13px", letterSpacing: "0.3px" }}>
              The services are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, express or implied, including without limitation warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the services will be uninterrupted, error-free, or free of harmful components.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Limitation of Liability</p>

            <p style={{ marginBottom: "1.5rem", textTransform: "uppercase" as const, fontSize: "13px", letterSpacing: "0.3px" }}>
              To the fullest extent permitted by law, OpenRoads Consulting, LLC and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, use, or goodwill, arising out of or in connection with your use of the services.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Changes to These Terms</p>

            <p style={{ marginBottom: "1.5rem" }}>
              We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top indicates when these Terms were last revised. Material changes will be announced on caregivertrap.com. Your continued use of the Services after a change constitutes acceptance of the updated Terms.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Governing Law</p>

            <p style={{ marginBottom: "1.5rem" }}>
              These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws principles.
            </p>

            <p style={{ fontSize: "16px", fontWeight: 500, color: "#2C2C2A", marginBottom: "0.75rem", marginTop: "2rem" }}>Contact</p>

            <p style={{ marginBottom: "0.5rem" }}>For questions about these Terms, contact:</p>
            <p style={{ marginBottom: "0.5rem" }}>OpenRoads Consulting, LLC</p>
            <p style={{ marginBottom: "1.5rem" }}>Email: <a href="mailto:caseywsj@gmail.com" style={{ color: "#BA7517", textDecoration: "none" }}>caseywsj@gmail.com</a></p>

          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
