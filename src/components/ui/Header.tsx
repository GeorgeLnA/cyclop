import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-green-900/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center space-x-2 group">
          <Shield className="w-8 h-8 text-4CAF50 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold text-white tracking-wider font-mono">CYCLOP</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className="text-white font-medium hover:text-4CAF50 transition-colors px-2 py-1 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-green-900/30 px-4 pb-4 pt-2 flex flex-col space-y-2 animate-fade-in-down">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className="text-white font-medium hover:text-4CAF50 transition-colors px-2 py-2 rounded"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header; 