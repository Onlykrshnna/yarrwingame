import Link from 'next/link';
import Image from 'next/image';
import ReviewsWrapper from './components/ReviewsWrapper';
import FAQWrapper from './components/FAQWrapper';

export default function Home() {
  const faqs = [
    {
      question: "Is the gaming experience fair?",
      answer: "Absolutely. We use certified Random Number Generators (RNG) and fair-play algorithms to ensure every outcome is 100% unbiased."
    },
    {
      question: "What is the minimum withdrawal amount on Yaar Win?",
      answer: "The minimum withdrawal amount is ₹50. You can withdraw your winnings instantly using UPI, Paytm, or direct bank transfer 24 hours a day, 7 days a week."
    },
    {
      question: "Are there any taxes (TDS) deducted on my winnings?",
      answer: "Yes, in compliance with the Government of India's Income Tax regulations, a 30% TDS is applicable on your net winnings at the time of withdrawal."
    },
    {
      question: "Can I play Yaar Win games for free?",
      answer: "Absolutely! We offer comprehensive free practice lobbies where you can hone your skills without risking any real money."
    },
    {
      question: "How can I recover my account access?",
      answer: "Simply use the 'Forgot Password' option on the secure login page to reset your credentials via your registered mobile number."
    },
    {
      question: "Is the portal optimized for mobile devices?",
      answer: "Yes, our platform is fully responsive and optimized for mobile, tablet, and desktop use across all modern browsers."
    },
    {
      question: "What support options are available?",
      answer: "We offer 24/7 customer support through multiple channels to assist with any registration or access issues you may encounter."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="hero" className="hero-section" style={{ padding: '6rem 2rem 4rem' }}>
        <div className="brand-circle">
          <Image src="/logo.webp" alt="Yaar Win Logo" priority width={180} height={54} />
        </div>
        <h1>Yaar Win: India&apos;s Premier Online Skill Gaming App</h1>
        <p className="hero-p">
          Play your favorite skill games and win real cash rewards safely. 100% Secure & RNG Certified.
        </p>
        <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Link href="/yarr-win-register" className="btn-premium" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Register & Play Now</Link>
        </div>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '2rem', flexWrap: 'wrap', background: 'var(--section-bg)', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>🔒 256-bit SSL</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>🎲 RNG Certified</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>⚡ Instant UPI</div>
      </div>

      <section id="introduction">
        <div className="content-container">
          <div className="two-column-grid" style={{ marginBottom: '4rem' }}>
            <div>
              <h2>What is Yaar Win?</h2>
              <p>Yaar Win is India&apos;s leading digital ecosystem for skill-based gaming. Our platform rewards knowledge, strategy, and analytical thinking.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ 100% Legal & Secure</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Fair-Play Algorithms</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Real Cash Rewards</li>
              </ul>
            </div>
            <div style={{ position: 'relative' }}>
              <Image src="/about.webp" alt="Yaar Win App" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} width={600} height={400} />
            </div>
          </div>
        </div>
      </section>

      <section id="game-categories" className="container-green">
        <div className="content-container">
          <h2>Game Categories</h2>
          <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3>Card Games</h3>
              <p>Test your strategy in classic Indian card games.</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3>Board Games</h3>
              <p>Enjoy digital adaptations of beloved board games.</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3>Esports</h3>
              <p>Join multiplayer tournaments for massive payouts.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="legality-compliance" style={{ background: 'var(--white)', padding: '6rem 2rem' }}>
        <div className="content-container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Legality & Safety</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3>⚖️ Legal Status</h3>
              <p>Skill games are protected under Article 19(1)(g) of the Constitution of India. Success depends on strategy, not chance.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3>🔒 Security</h3>
              <p>We use bank-grade 256-bit SSL encryption and certified RNG to ensure a safe environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="content-container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>FAQ</h2>
          <FAQWrapper faqs={faqs} />
        </div>
      </section>

      <ReviewsWrapper />
    </>
  );
}
