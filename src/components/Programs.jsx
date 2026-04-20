import { useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const programs = [
  {
    id: 'program-strength',
    number: '01',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.5 6.5h-3a1 1 0 00-1 1v9a1 1 0 001 1h3m0-11v11m0-11h2a1 1 0 011 1v9a1 1 0 01-1 1h-2m11-11h3a1 1 0 011 1v9a1 1 0 01-1 1h-3m0-11v11m0-11h-2a1 1 0 00-1 1v9a1 1 0 001 1h2M9.5 12h5"/>
      </svg>
    ),
    name: 'Strength & Conditioning',
    desc: 'Build raw power and functional strength through progressive overload systems designed by our expert coaches. Compound lifts, Olympic movements, and periodized programming.',
    levels: ['Intermediate', 'Advanced'],
  },
  {
    id: 'program-fatloss',
    number: '02',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    name: 'Fat Loss Programs',
    desc: 'Scientifically structured HIIT and metabolic conditioning to shred fat while preserving lean muscle. Includes personalized nutrition guidance and accountability tracking.',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    id: 'program-coaching',
    number: '03',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    name: 'Personal Coaching',
    desc: "One-on-one mentorship from our senior gurus. Custom programming, form analysis, nutrition plans, and direct accountability. The warrior's path, perfected for you.",
    levels: ['All Levels'],
  },
  {
    id: 'program-functional',
    number: '04',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    name: 'Functional Training',
    desc: 'Move better, feel stronger. Dynamic training that enhances real-world performance — agility, mobility, balance, and core stability for the complete warrior.',
    levels: ['Beginner', 'Intermediate'],
  },
];

function ProgramCard({ program, index }) {
  const [ref, isVisible] = useScrollReveal();
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.transition = 'transform 0.1s ease';
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    card.style.transition = 'transform 0.5s ease';
  }, []);

  return (
    <div
      className={`program-card reveal${isVisible ? ' active' : ''}`}
      id={program.id}
      ref={(el) => {
        ref.current = el;
        cardRef.current = el;
      }}
      style={{ transitionDelay: `${index * 0.15}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="program-number">{program.number}</div>
      <div className="program-icon">{program.icon}</div>
      <h3 className="program-name">{program.name}</h3>
      <p className="program-desc">{program.desc}</p>
      <div className="program-levels">
        {program.levels.map(level => (
          <span className="level-tag" key={level}>{level}</span>
        ))}
      </div>
    </div>
  );
}

export default function Programs() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section programs" id="programs">
      <div className="container">
        <div className={`section-header reveal${headerVisible ? ' active' : ''}`} ref={headerRef}>
          <div className="section-label">Training Programs</div>
          <h2 className="section-title">Forge Your <span className="gold-text">Path</span></h2>
          <p className="section-subtitle">
            Every warrior needs a battle plan. Choose your path and let our gurus guide your transformation.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
