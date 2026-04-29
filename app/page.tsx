import Link from 'next/link';
import Image from 'next/image';
import ReviewsSection from './components/ReviewsSection';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the gaming experience on Yaar Win fair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Yaar Win uses certified Random Number Generators (RNG) and fair-play algorithms to ensure every outcome is 100% unbiased."
        }
      },
      {
        "@type": "Question",
        "name": "How can I recover my Yaar Win account access?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the 'Forgot Password' option on the login page to reset your credentials via your registered mobile number."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Yaar Win portal optimised for mobile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The platform is fully responsive and optimised for mobile, tablet, and desktop use across all modern browsers."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="hero" className="hero-section">
        {/* ... existing hero content ... */}
        <div className="brand-circle">
          <Image src="/logo.webp" alt="Yaar Win Game — Official Logo" priority width={200} height={60} />
        </div>
        <h1>Yaar Win: India&apos;s Premier Online Skill Gaming App</h1>
        <p className="hero-p">
          Play your favorite skill games, compete in live tournaments, and win real cash rewards safely. 100% Secure, RNG Certified, and Instant UPI Withdrawals.
        </p>
        <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <Link href="/yarr-win-register" className="btn-premium">Register</Link>
          <Link href="/yarr-win-login" className="btn-premium btn-nav-alt" style={{ boxShadow: 'var(--shadow)' }}>Login</Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🔒 256-bit SSL</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🎲 RNG Certified</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>⚡ Instant UPI Withdrawals</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🎧 24/7 Support</span>
        </div>
      </section>

      <section id="introduction">
        <div className="content-container">
          <div className="two-column-grid" style={{ marginBottom: '4rem' }}>
            <div>
              <h2>What is the Yaar Win Game App?</h2>
              <p>
                Yaar Win is India&apos;s leading digital ecosystem designed for enthusiasts who want to transform their casual gaming time into a rewarding experience. The <strong>Yaar Win game app</strong> is an interactive, skill-based platform where players can compete in real-time, demonstrate their strategic superiority, and win real cash rewards securely.
              </p>
              <p>
                Unlike purely chance-based entertainment, our platform rewards knowledge, quick reflexes, and analytical thinking. We provide a seamless bridge between casual fun and competitive play. By joining the Yaar Win community, you are stepping into a transparent, secure environment powered by state-of-the-art server architecture and certified fair-play algorithms.
              </p>
              <p style={{ marginTop: '1rem' }}>
                In India&apos;s rapidly evolving digital landscape, Yaar Win stands out by offering a 100% legal and secure platform for skill-based gaming. Our games are carefully designed to eliminate the element of chance, ensuring that your success is entirely dependent on your strategic thinking and deep understanding of game mechanics. Whether you are a casual player looking to unwind or a competitive gamer aiming for the top of the leaderboards, Yaar Win provides the perfect arena to test your skills and earn real cash rewards.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <Image src="/about.webp" alt="Yaar Win gaming community — players on mobile and desktop" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--white)' }} width={600} height={400} />
              <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'var(--primary-green)', color: 'white', padding: '1rem 1.5rem', borderRadius: '12px', fontWeight: 700, boxShadow: 'var(--shadow)' }}>Official App</div>
            </div>
          </div>
        </div>
      </section>

      <section id="game-categories" className="container-green">
        <div className="content-container">
          <h2>Explore Our Game Categories</h2>
          <p style={{ marginBottom: '2rem' }}>Discover the perfect gaming style for you. Our platform hosts the most popular skill-based formats in India.</p>
          
          <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--black)', marginBottom: '0.5rem' }}>Strategy Card Games</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>Test your memory and strategic planning in classic Indian card games. Outsmart opponents to take home the prize pool.</p>
            </div>
            <div style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--black)', marginBottom: '0.5rem' }}>Board & Casual Games</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>Enjoy modern digital adaptations of beloved board games. Play <Link href="/best-browser-games" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 600 }}>best browser games</Link> instantly without heavy downloads.</p>
            </div>
            <div style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--black)', marginBottom: '0.5rem' }}>Esports & Tournaments</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>Join massive <Link href="/multiplayer-games-online" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 600 }}>multiplayer games online</Link> in our structured tournament system. Compete on leaderboards for massive payouts.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us">
        <div className="content-container">
          <h2>Why Yaar Win is India&apos;s Most Trusted Gaming Platform</h2>
          <p style={{ marginBottom: '2rem' }}>We prioritize your security, ensuring your focus remains entirely on the gameplay. Here is why thousands of players choose the Yaar Win app daily.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            <div>
              <h3>Certified Fair Play (RNG)</h3>
              <p>Every single card dealt, dice rolled, and game outcome generated on our platform is determined by a certified Random Number Generator (RNG). This mathematical algorithm is independently audited by top global testing agencies, ensuring 100% unpredictable and unbiased results for all players.</p>
            </div>
            <div>
              <h3>Instant Withdrawals & Secure Payments</h3>
              <p>When you win, you want your cash fast. We have integrated seamlessly with India&apos;s leading financial networks. Enjoy instant withdrawals to your bank account via UPI, Paytm, PhonePe, and IMPS. All financial transactions are protected by military-grade 256-bit SSL encryption.</p>
            </div>
            <div>
              <h3>Strict Anti-Fraud Systems</h3>
              <p>Our robust multi-tier security and strict one-account policy prevent collusion and automated bots. Our dedicated security team monitors the platform 24/7, guaranteeing that you are always playing against genuine, verified human opponents.</p>
            </div>
            <div>
              <h3>Play Free Games No Download</h3>
              <p>Don&apos;t want to commit right away? You can explore our platform and practice your skills in our <Link href="/free-games-no-download" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 600 }}>free games no download</Link> lobbies. Perfect your strategies before moving up to the cash tables.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" style={{ background: 'var(--section-bg)', padding: '6rem 2rem' }}>
        <div className="content-container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How to Start Playing on Yaar Win</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--white)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <div style={{ background: 'var(--primary-green)', color: 'var(--white)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>1</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Download & Register</h3>
                <p style={{ color: 'var(--text-muted)' }}>Get the Yaar Win APK or register directly on our secure web portal using your active mobile number. The process takes less than 60 seconds.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--white)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <div style={{ background: 'var(--primary-green)', color: 'var(--white)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>2</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Choose Your Game</h3>
                <p style={{ color: 'var(--text-muted)' }}>Navigate to our dynamic lobby. Choose from hundreds of skill games. You can start with free practice tables or dive straight into competitive cash contests.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', background: 'var(--white)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <div style={{ background: 'var(--primary-green)', color: 'var(--white)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>3</div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Play & Win</h3>
                <p style={{ color: 'var(--text-muted)' }}>Utilize your skills to outmaneuver opponents, top the leaderboards, and instantly transfer your hard-earned winnings directly to your UPI ID.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="legality-compliance" style={{ background: 'var(--white)', padding: '6rem 2rem' }}>
        <div className="content-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Legality & Compliance: Is Yaar Win Safe in India?</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>We adhere to the strictest legal and regulatory frameworks in India to provide a 100% safe and secure gaming environment.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--section-bg)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--black)' }}>⚖️ 100% Legal Skill Gaming</h3>
              <p style={{ color: 'var(--text-muted)' }}>Under Indian law, games of skill are protected under Article 19(1)(g) of the Constitution of India. The Supreme Court of India has established that playing games of skill, whether for free or for cash, is a legally protected business activity. Yaar Win strictly hosts games where player skill heavily outweighs chance.</p>
            </div>
            <div style={{ background: 'var(--section-bg)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--black)' }}>🚫 Restricted States</h3>
              <p style={{ color: 'var(--text-muted)' }}>While skill gaming is legal across most of India, we strictly comply with state-specific laws. Players residing in states such as Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana are restricted from participating in cash contests due to local state regulations, but can still enjoy our free practice games.</p>
            </div>
            <div style={{ background: 'var(--section-bg)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--black)' }}>🎲 RNG Certification</h3>
              <p style={{ color: 'var(--text-muted)' }}>Our platform uses a highly sophisticated Random Number Generator (RNG) algorithm. This ensures that every card dealt, dice rolled, and game element generated is statistically random and impossible to predict. Our RNG is audited and certified by leading independent testing laboratories.</p>
            </div>
            <div style={{ background: 'var(--section-bg)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--black)' }}>🔒 Data Privacy & SSL</h3>
              <p style={{ color: 'var(--text-muted)' }}>Your privacy is our priority. Yaar Win employs bank-grade 256-bit SSL encryption to protect all your personal and financial data. We comply with all relevant data protection regulations and never share your information with unauthorized third parties.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="content-container">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>Is the gaming experience fair?</h3>
              <p>Absolutely. We use certified Random Number Generators (RNG) and fair-play algorithms to ensure every outcome is 100% unbiased.</p>
            </div>
            <div className="faq-item">
              <h3>What is the minimum withdrawal amount on Yaar Win?</h3>
              <p>The minimum withdrawal amount is ₹50. You can withdraw your winnings instantly using UPI, Paytm, or direct bank transfer 24 hours a day, 7 days a week.</p>
            </div>
            <div className="faq-item">
              <h3>Are there any taxes (TDS) deducted on my winnings?</h3>
              <p>Yes, in compliance with the Government of India&apos;s Income Tax regulations, a 30% TDS is applicable on your net winnings at the time of withdrawal. We provide a complete ledger to help you track this.</p>
            </div>
            <div className="faq-item">
              <h3>Can I play Yaar Win games for free?</h3>
              <p>Absolutely! We offer comprehensive free practice lobbies where you can hone your skills without risking any real money. Practice as long as you want before entering cash contests.</p>
            </div>
            <div className="faq-item">
              <h3>How can I recover my account access?</h3>
              <p>Simply use the &quot;Forgot Password&quot; option on the secure login page to reset your credentials via your registered mobile number.</p>
            </div>
            <div className="faq-item">
              <h3>Is the portal optimized for mobile devices?</h3>
              <p>Yes, our platform is fully responsive and optimized for mobile, tablet, and desktop use across all modern browsers.</p>
            </div>
            <div className="faq-item">
              <h3>What support options are available?</h3>
              <p>We offer 24/7 customer support through multiple channels to assist with any registration or access issues you may encounter.</p>
            </div>
          </div>
        </div>
      </section>
      <ReviewsSection />
    </>
  );
}
