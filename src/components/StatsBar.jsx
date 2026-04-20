import { useCounter } from '../hooks/useCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';

function StatItem({ target, suffix, text, index }) {
  const [counterRef, count] = useCounter(target);
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <div
      className={`stat-item${isVisible ? ' active' : ''}`}
      ref={(el) => {
        revealRef.current = el;
        counterRef.current = el;
      }}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="stat-number">
        <span className="counter">{count.toLocaleString()}</span>{suffix}
      </div>
      <div className="stat-text">{text}</div>
    </div>
  );
}

const stats = [
  { target: 2500, suffix: '+', text: 'Warriors Trained' },
  { target: 10, suffix: '+', text: 'Years of Legacy' },
  { target: 15, suffix: '+', text: 'Expert Gurus' },
  { target: 98, suffix: '%', text: 'Transformation Rate' },
];

export default function StatsBar() {
  return (
    <section className="stats-bar" id="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatItem key={stat.text} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
