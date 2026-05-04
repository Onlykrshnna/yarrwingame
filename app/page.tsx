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
        <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <Link href="/yarr-win-register" className="btn-premium" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', minWidth: '200px' }}>Register Now</Link>
          <Link href="/yarr-win-login" className="btn-premium btn-nav-alt" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', minWidth: '200px', background: 'white', color: 'var(--primary-green)', border: '2px solid var(--primary-green)' }}>Login Access</Link>
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
              <p>Yaar Win is India&apos;s leading digital ecosystem for skill-based gaming. Our platform rewards knowledge, strategy, and analytical thinking. In an era where mobile gaming has become a cornerstone of entertainment, Yaar Win stands out by offering a secure and transparent environment where your expertise directly translates into rewards.</p>
              <p>Our commitment to fair play is backed by industry-leading technology. Every game hosted on our platform undergoes rigorous testing to ensure that outcomes are determined solely by the player&apos;s skill level and strategic decisions. Whether you are a casual gamer or a competitive pro, Yaar Win provides the perfect arena to showcase your talents.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>✓</span> 
                  100% Legal & Constitutionally Protected Skill Gaming
                </li>
                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>✓</span> 
                  Advanced Fair-Play Algorithms & RNG Certification
                </li>
                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>✓</span> 
                  Real Cash Rewards with 24/7 Instant Withdrawals
                </li>
              </ul>
            </div>
            <div style={{ position: 'relative' }}>
              <Image src="/about.webp" alt="Yaar Win App" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} width={600} height={400} />
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h2>The Evolution of Skill Gaming in India</h2>
            <p>The landscape of online gaming in India has undergone a massive transformation. No longer just a pastime, it is now a platform for competitive excellence. Yaar Win has been at the forefront of this movement, championing the rights of skill gamers across the nation. By adhering to strict regulatory standards and providing a platform that prioritizes user safety, we have built a community of millions of trusted players.</p>
            <p>Our platform is designed with the Indian user in mind. From seamless UPI integrations to local customer support, every aspect of Yaar Win is optimized for a superior user experience. We understand the importance of trust in the digital age, which is why we employ bank-grade encryption and transparent payout systems.</p>
          </div>
        </div>
      </section>

      <section id="game-categories" className="container-green">
        <div className="content-container">
          <h2>Explore Diverse Game Categories</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem' }}>Discover the perfect game for your skill set. From classic favorites to modern competitive formats, Yaar Win offers something for everyone.</p>
          <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3>Strategic Card Games</h3>
              <p>Test your memory, probability assessment, and psychological strategy in classic Indian card games. Outsmart real opponents in high-stakes lobbies where every move counts.</p>
              <Link href="/yarr-win-game" style={{ color: 'var(--primary-green)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>Learn More →</Link>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3>Skill-Based Board Games</h3>
              <p>Experience digital adaptations of beloved board games. These aren&apos;t just games of luck; they are digital battlegrounds where strategy and foresight lead to victory.</p>
              <Link href="/yarr-win-guide" style={{ color: 'var(--primary-green)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>View Guide →</Link>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3>Competitive Esports</h3>
              <p>Join multiplayer tournaments and compete against the best players in the country. Our leaderboard-driven systems ensure that only the most skilled gamers rise to the top.</p>
              <Link href="/yarr-win-download" style={{ color: 'var(--primary-green)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>Download App →</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="safety-first" style={{ padding: '6rem 2rem' }}>
        <div className="content-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Why Players Trust Yaar Win</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>Safety and transparency aren&apos;t just features; they are the foundation of everything we do at Yaar Win.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <div>
              <h3>24/7 Secure Withdrawals</h3>
              <p>We understand the importance of your winnings. That&apos;s why we offer instant withdrawals through India&apos;s most trusted payment networks including UPI, IMPS, and digital wallets. Your money is always accessible, 364 days a year.</p>
            </div>
            <div>
              <h3>Advanced Anti-Fraud Systems</h3>
              <p>Our platform is protected by cutting-edge anti-collusion and anti-bot technology. We ensure that you are always playing against genuine human opponents, maintaining the integrity of every single contest.</p>
            </div>
            <div>
              <h3>Responsible Gaming Framework</h3>
              <p>Yaar Win is committed to a safe gaming environment. We provide tools for self-exclusion, deposit limits, and time management to ensure that your gaming experience remains fun and within your control.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="legality-compliance" style={{ background: 'var(--section-bg)', padding: '6rem 2rem' }}>
        <div className="content-container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Legality & Regulatory Compliance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3>⚖️ Constitutionally Protected</h3>
              <p>Under the Constitution of India and various Supreme Court judgments, &quot;Games of Skill&quot; are recognized as a legitimate business activity. Unlike gambling, skill gaming relies on a player&apos;s superior knowledge and training, making it 100% legal in most Indian states.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3>🔒 Bank-Grade Security</h3>
              <p>We employ 256-bit SSL encryption to protect your data. Our platform is RNG certified by global testing labs, ensuring that the software is impossible to manipulate and provides a truly fair environment for all users.</p>
            </div>
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <p>*Please note: Users from Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana are restricted from participating in cash contests due to local state laws.</p>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="content-container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>Find quick answers to common questions about registration, security, and gameplay on the Yaar Win platform.</p>
          <FAQWrapper faqs={faqs} />
        </div>
      </section>

      <ReviewsWrapper />
    </>
  );
}
