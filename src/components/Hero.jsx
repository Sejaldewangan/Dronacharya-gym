import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight && heroImgRef.current) {
        const offset = window.scrollY * 0.3;
        heroImgRef.current.style.transform = `scale(1.05) translateY(${offset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const pos = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img
          ref={heroImgRef}
          src="/images/hero-bg.png"
          alt="Warrior training at Dronacharya Gym"
          loading="eager"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-pattern"></div>

      <div className="hero-content">
        <div className="hero-badge">Est. 2015 — The Gurukul of Fitness</div>
        <h1 className="hero-title">
          Train Like a <span className="highlight">Warrior.</span><br />
          Master Your Body.
        </h1>
        <p className="hero-subtitle">
          Under the guidance of discipline and strength — where every rep forges
          character, and every session builds legacy.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn btn-primary" onClick={(e) => scrollTo(e, '#booking')}>
            Start Your Training
          </a>
          <a href="#philosophy" className="btn btn-outline" onClick={(e) => scrollTo(e, '#philosophy')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Our Philosophy
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
