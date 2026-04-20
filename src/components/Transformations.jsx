import { useScrollReveal } from '../hooks/useScrollReveal';

const transformations = [
  {
    id: 'transform-rahul',
    beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop&q=80',
    name: 'Rahul Mehta',
    journey: '12-week Maharathi program under Guru Vikram',
    results: [
      { value: '-18 KG', label: 'Fat Lost' },
      { value: '+6 KG', label: 'Muscle' },
      { value: '12 WK', label: 'Duration' },
    ],
  },
  {
    id: 'transform-sneha',
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=500&fit=crop&q=80',
    name: 'Sneha Kapoor',
    journey: '16-week Atirathi program under Guru Priya',
    results: [
      { value: '-14 KG', label: 'Fat Lost' },
      { value: '+4 KG', label: 'Muscle' },
      { value: '16 WK', label: 'Duration' },
    ],
  },
  {
    id: 'transform-arjun',
    beforeImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=500&fit=crop&q=80',
    name: 'Arjun Desai',
    journey: '8-week strength intensive under Guru Arjun',
    results: [
      { value: '-10 KG', label: 'Fat Lost' },
      { value: '+8 KG', label: 'Muscle' },
      { value: '8 WK', label: 'Duration' },
    ],
  },
];

function TransformCard({ transform, index }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      className={`transform-card reveal${isVisible ? ' active' : ''}`}
      id={transform.id}
      ref={ref}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="transform-images">
        <div className="transform-before">
          <img src={transform.beforeImg} alt="Before transformation" loading="lazy" />
          <span className="transform-label">Before</span>
        </div>
        <div className="transform-after">
          <img src={transform.afterImg} alt="After transformation" loading="lazy" />
          <span className="transform-label">After</span>
        </div>
        <div className="transform-divider"></div>
      </div>
      <div className="transform-info">
        <h3 className="transform-name">{transform.name}</h3>
        <p className="transform-journey">{transform.journey}</p>
        <div className="transform-results">
          {transform.results.map(r => (
            <div className="transform-result" key={r.label}>
              <div className="result-value">{r.value}</div>
              <div className="result-label">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Transformations() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section transformations" id="transformations">
      <div className="container">
        <div className={`section-header reveal${headerVisible ? ' active' : ''}`} ref={headerRef}>
          <div className="section-label">Real Results</div>
          <h2 className="section-title">Warrior <span className="gold-text">Transformations</span></h2>
          <p className="section-subtitle">
            Real people. Real discipline. Real results. These aren't stock photos — these are battles won.
          </p>
        </div>

        <div className="transform-grid">
          {transformations.map((t, i) => (
            <TransformCard key={t.id} transform={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
