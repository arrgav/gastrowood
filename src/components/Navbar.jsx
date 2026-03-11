import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'Меню', href: '#menu' },
    { name: 'Услуги', href: '#services' },
    { name: 'Калькулятор', href: '#calculator' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none',
        padding: isScrolled ? '1rem 0' : '1.5rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-primary)' }}>
          <span style={{ color: 'var(--color-accent)' }}>Gastro</span>Wood
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              return (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    style={{ 
                      fontWeight: 500, 
                      color: isScrolled ? 'var(--color-text)' : 'var(--color-surface)',
                      transition: 'color 0.2s',
                      textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = isScrolled ? 'var(--color-primary)' : 'var(--color-wood-light)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = isScrolled ? 'var(--color-text)' : 'var(--color-surface)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="#calculator" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
                <Phone size={18} />
                Заказать
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ 
            display: 'block', 
            background: 'none', 
            border: 'none', 
            color: isScrolled || mobileMenuOpen ? 'var(--color-primary)' : 'var(--color-surface)' 
          }}
        >
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-surface)',
          padding: '2rem',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderTop: '1px solid var(--color-primary-light)'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                fontSize: '1.25rem', 
                fontWeight: 500, 
                color: 'var(--color-text)' 
              }}
            >
              {link.name}
            </a>
          ))}
          <a href="#calculator" className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => setMobileMenuOpen(false)}>
            Рассчитать в калькуляторе
          </a>
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
