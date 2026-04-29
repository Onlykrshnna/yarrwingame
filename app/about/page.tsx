import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Yaar Win | India's Trusted Online Skill Gaming Platform",
  description: "Learn about Yaar Win, India's premier skill gaming destination. Founded in 2024, we provide a secure, fair, and transparent gaming experience for all players.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Yaar Win | India's Trusted Online Skill Gaming Platform",
    description: "Learn about Yaar Win, India's premier skill gaming destination.",
    url: "https://www.yarrwingame.com/about",
  }
};

export default function About() {
  return (
    <>
      <section className="hero-section">
        <h1>About Yaar Win</h1>
        <p className="hero-p">
          Redefining the online skill-based gaming experience in India with transparency, security, and integrity at our core.
        </p>
      </section>

      <section>
        <div className="content-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Our Mission</h2>
          <p>
            Founded in 2024, Yaar Win was created with a single vision: to provide Indian players with a world-class platform for skill-based gaming. We believe that gaming should be fair, rewarding, and, above all, secure.
          </p>
          <p>
            Our platform is built on the foundation of the Indian IT Act 2000, ensuring all operations are conducted within the legal framework of the country. We specialize in skill-based games where player expertise and strategy determine the outcome.
          </p>

          <h2 style={{ marginTop: '3rem' }}>Why Trust Us?</h2>
          <div className="category-grid">
            <div className="category-card">
              <span className="icon">🛡️</span>
              <h3>Secure Platform</h3>
              <p>We use 256-bit SSL encryption to protect every transaction and user account.</p>
            </div>
            <div className="category-card">
              <span className="icon">⚖️</span>
              <h3>Fair Play</h3>
              <p>Our algorithms are certified for fairness, ensuring a level playing field for everyone.</p>
            </div>
            <div className="category-card">
              <span className="icon">🚀</span>
              <h3>Fast Payouts</h3>
              <p>We understand the value of your winnings and ensure lightning-fast withdrawal processing.</p>
            </div>
          </div>

          <h2 style={{ marginTop: '3rem' }}>Company Information</h2>
          <div className="table-container" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}>Company Name</td>
                  <td style={{ padding: '1rem' }}><strong>Yaar Win Game Private Ltd.</strong></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}>Founded</td>
                  <td style={{ padding: '1rem' }}>2024</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}>Headquarters</td>
                  <td style={{ padding: '1rem' }}>New Delhi, India</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}>Legal Status</td>
                  <td style={{ padding: '1rem' }}>Registered under Indian IT Act 2000</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem' }}>Certified</td>
                  <td style={{ padding: '1rem' }}>ISO 27001 (Data Security)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
