import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ReviewsSection from '../components/ReviewsSection';

export const metadata: Metadata = {
  title: "Play Yaar Win | Online Skill Games Dashboard",
  description: "Explore the Yaar Win gaming dashboard. Play a range of skill-based online games with real-money rewards, live tournaments, and fair-play certification.",
  keywords: "yaar win game, play yaarwin, online skill games, gaming dashboard",
  alternates: {
    canonical: "/yarr-win-game",
  },
  openGraph: {
    title: "Play Yaar Win | Online Skill Games Dashboard",
    description: "Explore the Yaar Win gaming dashboard and play skill-based games with real rewards.",
    url: "https://www.yarrwingame.com/yarr-win-game",
  }
};

export default function YarrWinGame() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Yaar Win Game - Official Master Guide",
    "description": "Comprehensive resource for everything related to Yarr Win and the Yaar Win game.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yarrwingame.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Yarr Win Game",
        "item": "https://yarrwingame.com/yarr-win-game"
      }]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the official yarr win game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The yarr win game is a premier digital entertainment experience hosted on the yarr win platform, known for its engaging mechanics and secure environment."
        }
      },
      {
        "@type": "Question",
        "name": "How do I ensure a secure yarr win login?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To ensure security, always use the official yarr win login portal and never share your credentials with third parties."
        }
      },
      {
        "@type": "Question",
        "name": "Is yarr win real or fake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yarr win is a legitimate platform with a verified track record and a large community of active yarr win game players."
        }
      },
      {
        "@type": "Question",
        "name": "Can I play yarr win game on Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can download the official yarr win APK from our website to play the yarr win game on any Android device."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="hero-section">
        <div className="brand-circle">
          <Image src="/logo.webp" alt="Yaar Win Game — Official Logo" width={200} height={60} priority />
        </div>
        <h1>Yaar Win Game Dashboard</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>Everything you need to know about the Yarr Win game. Master the mechanics and join the winning community today.</p>
        <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <Link href="/yarr-win-register" className="btn-premium">Register</Link>
          <Link href="/yarr-win-login" className="btn-premium btn-nav-alt" style={{ boxShadow: 'var(--shadow)' }}>Login</Link>
        </div>
      </section>

      <section id="introduction" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2>Welcome to Yaar Win</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          Yaar Win is a premium gaming platform known for its security and great user interface. Our mission is to provide an enjoyable and fair gaming experience for everyone.
        </p>
      </section>

      <section id="what-is-it" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2>What is Yaar Win?</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          It&apos;s a high-performance digital environment where players can test their skills. The Yarr Win game is our flagship experience, built for fairness and speed.
        </p>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginTop: '1rem' }}>
            Whether you play on mobile or desktop, the experience is fast, fluid, and secure.
          </p>

          <div className="table-container" style={{ marginTop: '2rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <thead>
                <tr style={{ background: 'var(--section-bg)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem' }}>Game Component</th>
                  <th style={{ padding: '1rem' }}>Technical Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}><strong>Engine</strong></td>
                  <td style={{ padding: '1rem' }}>High-Performance Fair-Play Engine</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}><strong>RNG Certification</strong></td>
                  <td style={{ padding: '1rem' }}>Level 3 Mathematical Integrity</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}><strong>Latency</strong></td>
                  <td style={{ padding: '1rem' }}>&lt; 50ms (Global Average)</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem' }}><strong>Platforms</strong></td>
                  <td style={{ padding: '1rem' }}>Android, iOS, Web Browser</td>
                </tr>
              </tbody>
            </table>
          </div>
      </section>

      <section id="tips-guide" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2>Elite Tactics for Yaar Win Dominance</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          Winning at the Yaar Win game requires a tactical mindset. This official Yaar Win guide recommends an &quot;observe and adapt&quot; strategy. Spend time analyzing the pulse of the Yarr Win platform before committing to a session. This heightened awareness allows you to predict shifts in the Yaar Win game momentum.
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginTop: '1.5rem' }}>
          Emotional intelligence is your greatest weapon. The most successful Yaar Win players are those who remain detached and analytical. By applying the advanced frameworks found in this <Link href="/yarr-win-guide" style={{ color: 'var(--primary-green)' }}>Yaar Win Master Guide</Link>, you can transform your gameplay from casual participation to professional-level mastery.
        </p>
      </section>

      <ReviewsSection />
    </>
  );
}
