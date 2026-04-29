import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Yaar Win | 24/7 Customer Support & Help",
  description: "Need help with Yaar Win? Contact our 24/7 customer support team via email or WhatsApp. We're here to assist with registration, login, and gameplay.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Yaar Win | 24/7 Customer Support & Help",
    description: "Need help with Yaar Win? Contact our 24/7 customer support team.",
    url: "https://www.yarrwingame.com/contact",
  }
};

export default function Contact() {
  return (
    <>
      <section className="hero-section">
        <h1>Contact Customer Support</h1>
        <p className="hero-p">
          Have questions or need assistance? Our dedicated support team is available 24/7 to help you with anything you need.
        </p>
      </section>

      <section>
        <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="category-grid">
            <div className="category-card" style={{ background: 'var(--white)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow)' }}>
              <span className="icon">✉️</span>
              <h3>Email Support</h3>
              <p>For detailed inquiries or documentation support.</p>
              <p><strong>support@yarrwingame.com</strong></p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary-green)' }}>Response time: &lt; 2 hours</p>
            </div>
            <div className="category-card" style={{ background: 'var(--white)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow)' }}>
              <span className="icon">💬</span>
              <h3>WhatsApp Support</h3>
              <p>For instant assistance and quick resolutions.</p>
              <p><strong>+91 98765 43210</strong></p>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary-green)' }}>Available: 24/7</p>
            </div>
          </div>

          <div className="glass-card" style={{ marginTop: '3rem', textAlign: 'left' }}>
            <h2>Frequently Asked Contact Topics</h2>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
              <li style={{ marginBottom: '1rem' }}><strong>Account Access:</strong> If you&apos;re having trouble logging in or haven&apos;t received your OTP.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Withdrawal Status:</strong> For updates on your pending withdrawal requests.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Technical Issues:</strong> To report bugs or performance issues on the app or website.</li>
              <li><strong>Verification:</strong> For help with completing your profile verification.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
