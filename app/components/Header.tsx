'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <Link href="/">Yaar<span>Win</span> <div className="swoosh"></div></Link>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link href="/yarr-win-game" onClick={() => setIsMenuOpen(false)}>Gaming Portal</Link>
          <Link href="/yarr-win-login" onClick={() => setIsMenuOpen(false)}>Member Login</Link>
          <Link href="/yarr-win-register" onClick={() => setIsMenuOpen(false)}>Secure Register</Link>
          <Link href="/yarr-win-download" onClick={() => setIsMenuOpen(false)}>Download App</Link>
          <Link href="/yarr-win-guide" onClick={() => setIsMenuOpen(false)}>Official Guide</Link>
        </nav>

        <div className="nav-cta">
          <Link href="/yarr-win-login" className="btn-nav btn-nav-alt">Login</Link>
          <Link href="/yarr-win-register" className="btn-nav">Register</Link>
        </div>
      </div>
    </header>
  );
}
