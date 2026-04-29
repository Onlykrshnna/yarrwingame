import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Download Yaar Win App | Android & iOS",
  description: "Download the Yaar Win app for Android and iOS. Play skill games on the go with our lightweight, fast, and secure mobile application.",
  keywords: "yaar win download, yaarwin apk, download game app, skill game app download",
  alternates: {
    canonical: "/yarr-win-download",
  },
  openGraph: {
    title: "Download Yaar Win App | Android & iOS",
    description: "Download the Yaar Win app and play skill games on the go.",
    url: "https://www.yarrwingame.com/yarr-win-download",
  }
};

export default function YarrWinDownload() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Yaar Win Game App",
    "operatingSystem": "Android, iOS",
    "applicationCategory": "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "url": "https://www.yarrwingame.com/yarr-win-download"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <section className="hero-section">
        <div className="brand-circle">
          <Image src="/logo.webp" alt="Yaar Win Game — Official Logo" width={200} height={60} priority />
        </div>
        <h1>Download the Yaar Win App</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Get the official Yaar Win application for the fastest gaming experience on mobile.</p>
        <Link href="#" className="btn-premium" style={{ marginBottom: '1.5rem' }}>Download APK (v2.0)</Link>
        <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/yarr-win-register" className="btn-premium" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>Register</Link>
          <Link href="/yarr-win-login" className="btn-premium btn-nav-alt" style={{ padding: '0.8rem 2rem', fontSize: '1rem', boxShadow: 'var(--shadow)' }}>Login</Link>
        </div>
      </section>

      <section id="download-guide" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2>Installation Guide</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          The Yaar Win app is built for speed. Follow these steps to install it on your device safely.
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginTop: '1rem' }}>
          <strong>For Android:</strong> Download the APK directly from this page. Open the file and allow installation from unknown sources in your settings.
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginTop: '1rem' }}>
          <strong>For iOS:</strong> Use our browser-optimized web app for a smooth experience on Safari or Chrome.
        </p>

        <div className="table-container" style={{ marginTop: '2rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <thead>
              <tr style={{ background: 'var(--section-bg)', textAlign: 'left' }}>
                <th style={{ padding: '1rem' }}>Requirement</th>
                <th style={{ padding: '1rem' }}>Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem' }}><strong>Operating System</strong></td>
                <td style={{ padding: '1rem' }}>Android 5.0+ / iOS 12.0+</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem' }}><strong>File Size</strong></td>
                <td style={{ padding: '1rem' }}>Approx. 12.5 MB</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem' }}><strong>RAM</strong></td>
                <td style={{ padding: '1rem' }}>2 GB Minimum</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem' }}><strong>Storage</strong></td>
                <td style={{ padding: '1rem' }}>50 MB Free Space</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="features" className="container-green" style={{ background: 'var(--primary-green)', padding: '6rem 2rem', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--white)' }}>App Features</h2>
          <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="category-card" style={{ background: 'var(--white)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow)', padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>Fast Load</h3>
              <p style={{ color: 'var(--text-main)' }}>Near-instant loading with local asset storage.</p>
            </div>
            <div className="category-card" style={{ background: 'var(--white)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow)', padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>Live Alerts</h3>
              <p style={{ color: 'var(--text-main)' }}>Get push notifications for new rewards and events.</p>
            </div>
            <div className="category-card" style={{ background: 'var(--white)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow)', padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>Secure Login</h3>
              <p style={{ color: 'var(--text-main)' }}>Full support for biometric and secure authentication.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2>Safe Download</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          Every build of our app is scanned for safety. Only download from this official site to ensure a clean and secure file.
        </p>
      </section>

      <section id="faq" style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>FAQ</h2>
        <div className="faq-container" style={{ display: 'grid', gap: '1.5rem' }}>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>How big is the file?</h3>
            <p style={{ color: 'var(--text-muted)' }}>The APK is only 12MB.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>How to update?</h3>
            <p style={{ color: 'var(--text-muted)' }}>The app will notify you when a new update is ready.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Play on PC?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Yes, use any Android emulator to play on your computer.</p>
          </div>
          <div className="faq-item" style={{ background: 'var(--section-bg)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Requirements?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Android 5.0 and above.</p>
          </div>
        </div>
      </section>
    </>
  );
}
