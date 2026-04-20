import { useState, useEffect } from 'react';

const LogoSVG = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L28 10L38 8L34 18L42 24L34 30L38 40L28 38L22 46L16 38L6 40L10 30L2 24L10 18L6 8L16 10L22 2Z" fill="none" stroke="#c9a641" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="22" cy="24" r="8" fill="none" stroke="#c9a641" strokeWidth="1.5"/>
    <circle cx="22" cy="24" r="3" fill="#c9a641"/>
  </svg>
);

const navItems = [
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#programs', label: 'Programs' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#membership', label: 'Membership' },
  { href: '#gallery', label: 'Gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="nav-logo" id="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="nav-logo-icon">
            <LogoSVG />
          </div>
          <div className="nav-logo-text">Drona<span>charya</span></div>
        </a>

        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a href="#booking" className="nav-cta" onClick={(e) => handleNavClick(e, '#booking')}>
            Book Trial
          </a>
        </div>

        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
