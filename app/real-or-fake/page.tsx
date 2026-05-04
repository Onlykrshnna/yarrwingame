import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ReviewsSection = dynamic(() => import('../components/ReviewsSection'), { 
  ssr: false,
  loading: () => <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading reviews...</div>
});

export const metadata: Metadata = {
  title: "Yaar Win Real or Fake? Honest Platform Review & Safety Report",
  description: "Is Yaar Win real or fake? Read our comprehensive review. We analyze the Yaar Win game mechanics, security, and community feedback for transparency.",
  keywords: "yaar win real or fake, yaarwin review, is yaarwin safe, yaarwin transparency",
  alternates: {
    canonical: "/real-or-fake",
  },
  openGraph: {
    title: "Yaar Win Real or Fake? Honest Platform Review & Safety Report",
    description: "Is Yaar Win real or fake? Read our honest review and safety report.",
    url: "https://www.yarrwingame.com/real-or-fake",
  }
};

export default function RealOrFake() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Is Yaar Win Real or Fake? The Complete Transparency Report",
    "description": "A deep dive into the legality, security, and reality of the Yaar Win gaming platform in India.",
    "author": {
      "@type": "Organization",
      "name": "Yaar Win Trust & Safety Team"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="hero-section">
        <div className="brand-circle">
          <Image src="/logo.webp" alt="Yaar Win Game — Official Logo" width={200} height={60} priority />
        </div>
        <h1>Is Yaar Win Real or Fake?</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Is Yaar Win real? We provide the facts about our platform&apos;s security and fair-play standards.</p>
        <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/yarr-win-register" className="btn-premium">Register</Link>
          <Link href="/yarr-win-login" className="btn-premium btn-nav-alt" style={{ boxShadow: 'var(--shadow)' }}>Login</Link>
        </div>
      </section>

      <section id="review-analysis" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Brutal Truth: Is Yaar Win a Scam?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          In the rapidly growing Indian real-money gaming market, players are right to be skeptical. Searches for &quot;Yaar Win real or fake&quot; or &quot;Yaar Win scam&quot; are common because players want to protect their hard-earned money. Let us be entirely transparent: <strong>Yaar Win is a 100% real, legally compliant, and secure skill gaming platform.</strong>
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
          Unlike unregulated offshore casinos or shady betting apps, Yaar Win operates strictly within the legal framework of the Constitution of India, offering games where skill heavily predominates over chance. Here is the undeniable proof of our legitimacy.
        </p>
      </section>

      <section id="proof-of-legitimacy" style={{ background: 'var(--section-bg)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>4 Pillars of Yaar Win&apos;s Legitimacy</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
            <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '3rem' }}>🏛️</div>
              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>1. Legally Protected Under Indian Law</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Yaar Win does NOT offer gambling or betting. We exclusively host games of skill. The Supreme Court of India has ruled that playing games of skill is a constitutionally protected business activity under Article 19(1)(g). We strictly geoblock users from restricted states (like Assam and Telangana) to ensure 100% legal compliance.</p>
              </div>
            </div>

            <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '3rem' }}>🔢</div>
              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>2. Certified Random Number Generator (RNG)</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>A common fear is that the game is &quot;rigged&quot; by bots. Yaar Win utilizes an internationally certified RNG algorithm. This ensures that every card shuffle, dice roll, and match pairing is mathematically random and impossible to manipulate by players or our own developers.</p>
              </div>
            </div>

            <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '3rem' }}>💳</div>
              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>3. Instant, Verified Payouts via UPI</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Fake apps block your withdrawals. Yaar Win is integrated directly with RBI-approved payment gateways. We guarantee instant withdrawals to your UPI ID or Bank Account 24/7. Your winnings are kept in a separate escrow account, ensuring we can always pay out 100% of player balances.</p>
              </div>
            </div>

            <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '3rem' }}>🪪</div>
              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>4. Strict KYC & No-Bot Policy</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>To prevent fraud, we mandate PAN card verification for real-money withdrawals, complying with government TDS (Tax Deducted at Source) regulations. Our advanced AI monitoring instantly bans any account exhibiting bot-like behavior or collusion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section id="faq" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Transparency FAQ</h2>
        <div className="faq-container" style={{ display: 'grid', gap: '1.5rem' }}>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Is Yaar Win a scam or legit?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Yaar Win is 100% legit. We are a registered entity operating strictly within Indian laws governing games of skill. We process thousands of successful UPI withdrawals daily.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Why does Yaar Win ask for my PAN Card?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Asking for a PAN card is actually proof of our legitimacy. The Government of India mandates a 30% TDS deduction on net winnings from online games. Fake apps do not care about taxes; we strictly comply with the Income Tax Act.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Are there bots playing on the app?</h3>
            <p style={{ color: 'var(--text-muted)' }}>No. Our strict KYC policy and anti-fraud AI algorithms guarantee that you are always playing against real, verified human opponents in India.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>What if my withdrawal fails?</h3>
            <p style={{ color: 'var(--text-muted)' }}>If a banking network timeout occurs, the funds are instantly reversed to your Yaar Win wallet. Our 24/7 customer support team is always available to manually process any stuck transactions.</p>
          </div>
        </div>
      </section>
    </>
  );
}
