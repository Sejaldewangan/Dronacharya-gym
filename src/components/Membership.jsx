import { useCallback, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const plans = [
  {
    id: 'plan-basic',
    tier: 'Yoddha',
    price: '₹2,499',
    period: 'Billed monthly • No lock-in',
    features: [
      'Full gym access (6 AM – 10 PM)',
      'Basic fitness assessment',
      'Group training sessions',
      'Locker & changing room',
      'Access to community events',
    ],
    cta: 'Begin the Journey',
    btnClass: 'btn btn-outline',
    featured: false,
  },
  {
    id: 'plan-pro',
    tier: 'Maharathi',
    price: '₹4,999',
    period: 'Billed quarterly • Save 15%',
    features: [
      'Everything in Yoddha',
      'Personalized training program',
      'Monthly body composition analysis',
      'Custom nutrition plan',
      '2 personal coaching sessions/week',
      'Supplement guidance',
    ],
    cta: 'Claim Your Spot',
    btnClass: 'btn btn-primary',
    featured: true,
    popularLabel: 'Most Popular',
  },
  {
    id: 'plan-elite',
    tier: 'Atirathi',
    price: '₹9,999',
    period: 'Billed annually • Save 25%',
    features: [
      'Everything in Maharathi',
      'Unlimited personal coaching',
      '24/7 gym access',
      'Weekly progress reviews',
      'Priority booking for all events',
      'Exclusive merchandise & supplements',
      'Direct WhatsApp with your guru',
    ],
    cta: 'Become Atirathi',
    btnClass: 'btn btn-outline',
    featured: false,
  },
];

function PricingCard({ plan, index }) {
  const [ref, isVisible] = useScrollReveal();
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(201, 166, 65, 0.05) 0%, transparent 50%), linear-gradient(145deg, #141414, #1a1a1a)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    if (plan.featured) {
      card.style.background = 'linear-gradient(145deg, #1a1a1a, #1f1d16)';
    } else {
      card.style.background = 'linear-gradient(145deg, #141414, #1a1a1a)';
    }
  }, [plan.featured]);

  const scrollTo = (e) => {
    e.preventDefault();
    const target = document.querySelector('#booking');
    if (target) {
      const pos = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`pricing-card reveal${plan.featured ? ' featured' : ''}${isVisible ? ' active' : ''}`}
      id={plan.id}
      ref={(el) => {
        ref.current = el;
        cardRef.current = el;
      }}
      style={{ transitionDelay: `${index * 0.15}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {plan.popularLabel && <div className="pricing-popular">{plan.popularLabel}</div>}
      <div className="pricing-tier">{plan.tier}</div>
      <div className="pricing-price">{plan.price}<span>/mo</span></div>
      <div className="pricing-period">{plan.period}</div>
      <ul className="pricing-features">
        {plan.features.map((feature, i) => (
          <li key={i}>
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
      <a href="#booking" className={plan.btnClass} onClick={scrollTo}>
        {plan.cta}
      </a>
    </div>
  );
}

export default function Membership() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section membership" id="membership">
      <div className="container">
        <div className={`section-header reveal${headerVisible ? ' active' : ''}`} ref={headerRef}>
          <div className="section-label">Membership Plans</div>
          <h2 className="section-title">Your <span className="gold-text">Commitment</span></h2>
          <p className="section-subtitle">
            Invest in yourself. Every tier is designed to deliver maximum value and real transformation.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
