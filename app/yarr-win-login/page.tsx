import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Login to Yaar Win | Secure Member Access",
  description: "Log in to your Yaar Win account securely. Access your gaming dashboard, check your balance, and continue playing your favourite skill games.",
  keywords: "yaar win login, yaarwin login, secure member access, gaming dashboard login",
  alternates: {
    canonical: "/yarr-win-login",
  },
  openGraph: {
    title: "Login to Yaar Win | Secure Member Access",
    description: "Log in to your Yaar Win account securely. Access your gaming dashboard and start playing.",
    url: "https://www.yarrwingame.com/yarr-win-login",
  }
};

export default function YarrWinLogin() {
  return (
    <>
      <section id="login-hero" className="two-column-grid" style={{ padding: '6rem 2rem', marginBottom: '0' }}>
        <div className="promo-content">
          <div className="brand-circle" style={{ marginLeft: '0' }}>
            <Image src="/logo.webp" alt="Yaar Win Game — Official Logo" width={200} height={60} priority />
          </div>
          <h1>Login to Yaar Win</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--primary-green)', fontWeight: 600, marginBottom: '2rem' }}>Welcome back!</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>Access your Yaar Win account securely and continue your journey.</p>
          
          <div style={{ marginBottom: '3rem' }}>
            <Image src="/login.webp" alt="Yaar Win Login — Secure member access portal illustration" width={400} height={300} style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', boxShadow: 'var(--shadow)', border: '2px solid var(--glass-border)' }} />
          </div>

          <div style={{ background: 'var(--section-bg)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '15px' }}>
            <h4 style={{ color: 'var(--black)', marginBottom: '0.5rem' }}>Security Tip</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We use full encryption to keep your login safe. Always check for the official SSL certificate.</p>
          </div>
        </div>

        <div className="login-redirect-container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem', background: 'var(--white)', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ border: 'none', padding: '0', marginBottom: '0.5rem', textAlign: 'center', fontSize: '1.5rem', color: 'var(--black)' }}>Official Login Portal</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>You are being redirected to the secure Yaar Win server.</p>
            </div>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary-green)', fontWeight: 'bold' }}>Security Status: VERIFIED</p>
            </div>

            <a href="https://official.yarrwingame.com/login" className="btn-premium" style={{ display: 'block', textDecoration: 'none', padding: '1.2rem' }}>ACCESS OFFICIAL LOGIN</a>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>New to Yarr Win? <Link href="/yarr-win-register" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Create Official Account</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section id="login-guide" style={{ background: 'var(--section-bg)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Official Login Protocol</h2>
          <div className="category-grid">
            <div className="category-card" style={{ textAlign: 'left', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-green)' }}>1. Verified Access</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>Exclusively use the official Yaar Win gateway to protect your account integrity.</p>
            </div>
            <div className="category-card" style={{ textAlign: 'left', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-green)' }}>2. Real-time Sync</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>Ensure a stable connection for instant synchronization with the Yaar Win game servers.</p>
            </div>
            <div className="category-card" style={{ textAlign: 'left', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary-green)' }}>3. Account Privacy</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>Your login credentials are encrypted. Never share your password with third parties.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
