import { useScrollReveal } from '../hooks/useScrollReveal';

const trainers = [
  {
    id: 'trainer-vikram',
    img: '/images/trainer-1.png',
    alt: 'Guru Vikram Singh',
    title: 'Head Guru',
    name: 'Vikram Singh',
    spec: 'Strength & Conditioning Specialist — NSCA-CSCS certified with 15+ years of competitive powerlifting',
    stats: [
      { value: '15+', label: 'Years' },
      { value: '800+', label: 'Trained' },
      { value: '3x', label: 'National' },
    ],
  },
  {
    id: 'trainer-priya',
    img: '/images/trainer-2.png',
    alt: 'Guru Priya Sharma',
    title: 'Senior Coach',
    name: 'Priya Sharma',
    spec: 'Fat Loss & HIIT Expert — ACE certified, former national-level athlete, nutrition specialist',
    stats: [
      { value: '10+', label: 'Years' },
      { value: '600+', label: 'Trained' },
      { value: '5x', label: 'Certified' },
    ],
  },
  {
    id: 'trainer-arjun',
    img: '/images/trainer-3.png',
    alt: 'Guru Arjun Patel',
    title: 'Movement Coach',
    name: 'Arjun Patel',
    spec: 'Functional Training & Mobility — Corrective exercise specialist, CrossFit L3, yoga practitioner',
    stats: [
      { value: '8+', label: 'Years' },
      { value: '400+', label: 'Trained' },
      { value: '4x', label: 'Certified' },
    ],
  },
];

function TrainerCard({ trainer, index }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      className={`trainer-card reveal${isVisible ? ' active' : ''}`}
      id={trainer.id}
      ref={ref}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="trainer-img">
        <img src={trainer.img} alt={trainer.alt} loading="lazy" />
      </div>
      <div className="trainer-info">
        <div className="trainer-title">{trainer.title}</div>
        <h3 className="trainer-name">{trainer.name}</h3>
        <p className="trainer-spec">{trainer.spec}</p>
        <div className="trainer-stats">
          {trainer.stats.map(stat => (
            <div className="trainer-stat" key={stat.label}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Trainers() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section trainers" id="trainers">
      <div className="container">
        <div className={`section-header reveal${headerVisible ? ' active' : ''}`} ref={headerRef}>
          <div className="section-label">The Gurus</div>
          <h2 className="section-title">Your <span className="gold-text">Mentors</span></h2>
          <p className="section-subtitle">
            Our trainers aren't just instructors — they're mentors who walk the path alongside you,
            each bringing decades of expertise and warrior discipline.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, i) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
