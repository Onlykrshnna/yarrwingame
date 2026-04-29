import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h3 style={{ marginBottom: '1rem' }}>About Yaar Win</h3>
          <p style={{ fontSize: '0.85rem' }}>Yaar Win is India&apos;s leading skill-based gaming platform, offering a secure and fair environment for players nationwide.</p>
          <div className="social-links">
            <a href="https://facebook.com/yarrwin" className="social-icon" aria-label="Facebook">FB</a>
            <a href="https://x.com/yarrwin" className="social-icon" aria-label="X">X</a>
            <a href="https://instagram.com/yarrwin" className="social-icon" aria-label="Instagram">IG</a>
            <a href="https://www.youtube.com/@yarrwin" className="social-icon" aria-label="YouTube">YT</a>
            <a href="https://www.linkedin.com/company/yarrwin" className="social-icon" aria-label="LinkedIn">IN</a>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Game Categories</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/best-browser-games" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Best Browser Games</Link></li>
            <li><Link href="/multiplayer-games-online" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Multiplayer Games Online</Link></li>
            <li><Link href="/free-games-no-download" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Free Games No Download</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Home</Link></li>
            <li><Link href="/about" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>About Us</Link></li>
            <li><Link href="/contact" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Contact Us</Link></li>
            <li><Link href="/responsible-gaming" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Responsible Gaming</Link></li>
            <li><Link href="/yarr-win-guide" style={{ color: '#888', textDecoration: 'none', fontSize: '0.85rem' }}>Game Guide</Link></li>
          </ul>
        </div>
      </div>
      <p style={{ marginTop: '2rem' }}>© 2026 Yaar Win (Yaar Win Game Private Ltd.) • 123 Gaming Hub, Cyber City, New Delhi, 110001, India</p>
      <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        Disclaimer: This platform is for 18+ only. Gaming involves financial risk. Please play responsibly.{' '}
        <Link href="/responsible-gaming" style={{ color: 'var(--primary-green)' }}>Responsible Gaming</Link>
      </p>
    </footer>
  );
}
