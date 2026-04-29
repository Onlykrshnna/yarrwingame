import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Yaar Win Guide | How to Play & Win",
  description: "New to Yaar Win? Read the complete beginner's guide — how to register, deposit, play, and withdraw winnings on India's leading skill gaming platform.",
  keywords: "yaar win guide, how to play yaarwin, yaarwin tutorial, skill game strategy",
  alternates: { canonical: "/yarr-win-guide" },
  openGraph: {
    title: "Yaar Win Guide | How to Play & Win",
    description: "Master Yaar Win with our comprehensive beginner's guide. Learn to play and win.",
    url: "https://www.yarrwingame.com/yarr-win-guide",
  }
};

export default function YarrWinGuide() {
  return (
    <>
      <section className="hero-section">
        <div className="brand-circle">
          <Image src="/logo.webp" alt="Yaar Win Game — Official Logo" width={200} height={60} priority />
        </div>
        <h1>How to Play Yaar Win: Complete Beginner&apos;s Guide</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Master the mechanics and join the thousands of winning players in the Yaar Win ecosystem.</p>
        <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/yarr-win-register" className="btn-premium">Register</Link>
          <Link href="/yarr-win-login" className="btn-premium btn-nav-alt" style={{ boxShadow: 'var(--shadow)' }}>Login</Link>
        </div>
      </section>

      <section id="step-by-step" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Step-by-Step Guide to Getting Started</h2>
        <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="category-card" style={{ textAlign: 'left', padding: '1.5rem', background: 'var(--white)', border: '1px solid var(--glass-border)', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary-green)' }}>Step 1: Registration</h3>
            <p>Visit the official registration page and enter your mobile number. You&apos;ll receive a secure OTP to verify your identity. Create a strong password to protect your account.</p>
          </div>
          <div className="category-card" style={{ textAlign: 'left', padding: '1.5rem', background: 'var(--white)', border: '1px solid var(--glass-border)', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary-green)' }}>Step 2: Deposit Funds</h3>
            <p>Once logged in, navigate to the &apos;Wallet&apos; section. Select &apos;Add Cash&apos; and choose your preferred UPI method (GPay, PhonePe, Paytm). Transactions are encrypted and instant.</p>
          </div>
          <div className="category-card" style={{ textAlign: 'left', padding: '1.5rem', background: 'var(--white)', border: '1px solid var(--glass-border)', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary-green)' }}>Step 3: Choose a Game</h3>
            <p>Head to the game lobby. We offer various skill-based tournaments and 1v1 matches. Review the entry fees and prize pools before joining a session.</p>
          </div>
          <div className="category-card" style={{ textAlign: 'left', padding: '1.5rem', background: 'var(--white)', border: '1px solid var(--glass-border)', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary-green)' }}>Step 4: Withdraw Winnings</h3>
            <p>Winning is easy, and so is withdrawing. Enter your UPI ID or bank details in the withdrawal section. Most payouts are processed within 30 minutes.</p>
          </div>
        </div>
      </section>

      <section id="advanced-strategies" style={{ background: 'var(--section-bg)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Pro Strategies for Success</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem' }}>Success on Yaar Win isn&apos;t just about luck—it&apos;s about strategy and discipline.</p>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ background: 'var(--primary-green)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold' }}>01</span>
              <div>
                <strong>Bankroll Management:</strong> Never commit more than 10% of your wallet to a single session. This ensures you can sustain a long-term winning streak.
              </div>
            </li>
            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ background: 'var(--primary-green)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold' }}>02</span>
              <div>
                <strong>Analyze Patterns:</strong> Spend the first few minutes of any session observing the game trends without placing heavy stakes. Adapt your strategy to the current momentum.
              </div>
            </li>
            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ background: 'var(--primary-green)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold' }}>03</span>
              <div>
                <strong>Stay Disciplined:</strong> Set daily win and loss limits. Knowing when to stop is the hallmark of a professional Yaar Win player.
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="faq" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>FAQ</h2>
        <div className="faq-container" style={{ display: 'grid', gap: '1.5rem' }}>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Is this for beginners?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Yes, it covers everything from basic registration to pro strategies.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>How often is it updated?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Whenever the Yarr Win platform releases new features or game modes.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Are there cheats?</h3>
            <p style={{ color: 'var(--text-muted)' }}>No. Success comes from skill, strategy, and following this guide.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>What is the golden rule?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Play within your limits and stay informed.</p>
          </div>
        </div>
      </section>
    </>
  );
}
