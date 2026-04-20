import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Philosophy() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  const values = [
    { icon: '⚔️', label: 'Discipline' },
    { icon: '🔥', label: 'Strength' },
    { icon: '🎯', label: 'Mastery' },
    { icon: '🏛️', label: 'Legacy' },
  ];

  return (
    <section className="section philosophy" id="philosophy">
      <div className="container">
        <div className="philosophy-grid">
          <div
            className={`philosophy-content reveal-left${leftVisible ? ' active' : ''}`}
            ref={leftRef}
          >
            <div className="section-label">Our Philosophy</div>
            <h2 className="philosophy-quote">
              The body is your <span className="gold-text">first weapon.</span> Master it.
            </h2>
            <p className="philosophy-text">
              In the ancient gurukuls, warriors didn't just train their bodies — they forged their minds,
              their discipline, their very character. Dronacharya Gym carries this legacy forward into the modern age.
            </p>
            <p className="philosophy-text">
              Here, every barbell lifted is a battle won against mediocrity. Every drop of sweat is
              a step closer to the warrior within. We don't follow trends — we build traditions.
              We don't hype — we deliver results through unwavering discipline.
            </p>
            <div className="philosophy-values">
              {values.map(v => (
                <div className="value-item" key={v.label}>
                  <div className="value-icon">{v.icon}</div>
                  <div className="value-label">{v.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`philosophy-visual reveal-right${rightVisible ? ' active' : ''}`}
            ref={rightRef}
          >
            <div className="philosophy-img-wrapper">
              <img src="/images/gallery-1.png" alt="The Dronacharya training environment" />
            </div>
            <div className="phi-accent phi-accent-1"></div>
            <div className="phi-accent phi-accent-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
