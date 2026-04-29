import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Register on Yaar Win | Free Account in Minutes",
  description: "Create your free Yaar Win account in under 2 minutes. Enter your mobile number, verify OTP, and start playing skill games instantly.",
  keywords: "yaar win register, yaarwin register, create account, free registration",
  alternates: {
    canonical: "/yarr-win-register",
  },
  openGraph: {
    title: "Register on Yaar Win | Free Account in Minutes",
    description: "Create your free Yaar Win account in under 2 minutes and start playing instantly.",
    url: "https://www.yarrwingame.com/yarr-win-register",
  }
};

export default function YarrWinRegister() {
  return (
    <>
      <section id="register-hero" className="two-column-grid" style={{ padding: '4rem 2rem', marginBottom: '0' }}>
        <div className="promo-content">
          <div className="brand-circle" style={{ marginLeft: '0' }}>
            <Image src="/logo.webp" alt="Yaar Win Game — Official Logo" width={200} height={60} priority />
          </div>
          <h1>Join Yaar Win</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--primary-green)', fontWeight: 600, marginBottom: '2rem' }}>Start Your Journey Today!</p>
          
          <div className="promo-features" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'var(--primary-green)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</div>
              <div>
                <h4 style={{ color: 'var(--black)', marginBottom: '0.2rem' }}>Quick Sign Up</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Register in under 60 seconds.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'var(--primary-green)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</div>
              <div>
                <h4 style={{ color: 'var(--black)', marginBottom: '0.2rem' }}>Safe & Secure</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Your data is protected by SSL.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'var(--primary-green)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</div>
              <div>
                <h4 style={{ color: 'var(--black)', marginBottom: '0.2rem' }}>Win Rewards</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Access exclusive games and events.</p>
              </div>
            </div>
          </div>

          <div className="promo-image" style={{ position: 'relative', maxWidth: '500px', marginTop: '3rem' }}>
            <div style={{ background: 'radial-gradient(circle, var(--primary-green) 0%, transparent 70%)', position: 'absolute', width: '400px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.2 }}></div>
            <div style={{ position: 'relative', zIndex: 1, border: '4px solid var(--white)', background: 'var(--white)', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
               <Image src="/register.webp" alt="Yaar Win Register Illustration" width={500} height={400} style={{ width: '100%', display: 'block' }} priority />
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', zIndex: 2, background: 'var(--white)', padding: '0.8rem 1.2rem', borderRadius: '12px', boxShadow: 'var(--shadow)', borderLeft: '4px solid var(--primary-green)' }}>
              <p style={{ color: 'var(--black)', fontWeight: 700, fontSize: '0.85rem', margin: 0 }}>OFFICIAL MEMBER STATUS</p>
              <p style={{ color: 'var(--primary-green)', fontSize: '0.7rem', marginTop: '0.2rem', fontWeight: 600 }}>SECURED • VERIFIED • ELITE</p>
            </div>
          </div>
        </div>

        <div className="register-redirect-container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem', background: 'var(--white)', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ border: 'none', padding: '0', marginBottom: '0.5rem', textAlign: 'center', fontSize: '1.5rem', color: 'var(--black)' }}>Official Registration</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Join the official Yaar Win community via our secure registration portal.</p>
            </div>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary-green)', fontWeight: 'bold' }}>Verified Official Link</p>
            </div>

            <a href="https://official.yarrwingame.com/register" className="btn-premium" style={{ display: 'block', textDecoration: 'none', padding: '1.2rem' }}>GO TO OFFICIAL REGISTER</a>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Already have an account? <Link href="/yarr-win-login" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Login Now</Link></p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
               <div style={{ textAlign: 'center' }}>
                 <span style={{ fontSize: '1.2rem' }}>🛡️</span>
                 <p style={{ fontSize: '0.7rem', color: '#888', margin: '0' }}>100% Secure</p>
               </div>
               <div style={{ textAlign: 'center' }}>
                 <span style={{ fontSize: '1.2rem' }}>⚡</span>
                 <p style={{ fontSize: '0.7rem', color: '#888', margin: '0' }}>Instant Access</p>
               </div>
               <div style={{ textAlign: 'center' }}>
                 <span style={{ fontSize: '1.2rem' }}>💬</span>
                 <p style={{ fontSize: '0.7rem', color: '#888', margin: '0' }}>24/7 Support</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="registration-details" style={{ background: 'var(--section-bg)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Official Membership Benefits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>Exclusive Rights</h3>
              <ul style={{ listStyle: 'none', padding: '0' }}>
                <li style={{ marginBottom: '0.8rem', color: 'var(--text-main)' }}>💎 Priority access to new Yaar Win modules</li>
                <li style={{ marginBottom: '0.8rem', color: 'var(--text-main)' }}>💎 Daily official loyalty rewards</li>
                <li style={{ marginBottom: '0.8rem', color: 'var(--text-main)' }}>💎 24/7 dedicated support channels</li>
              </ul>
            </div>
            <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>Protocol Security</h3>
              <p style={{ color: 'var(--text-main)' }}>We deploy military-grade encryption and zero-knowledge storage to ensure your Yaar Win membership remains private and protected at all times.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
