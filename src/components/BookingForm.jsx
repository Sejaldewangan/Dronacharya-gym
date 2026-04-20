import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Notification({ message, onDone }) {
  const [visible, setVisible] = useState(true);

  useState(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 500);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={`notification${visible ? ' visible' : ''}`}>
      {message}
    </div>
  );
}

export default function BookingForm() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();
  const [formState, setFormState] = useState('idle'); // idle, loading, success
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setFormState('loading');

    setTimeout(() => {
      setFormState('success');
      setNotification('🎯 Trial booked! Our team will contact you within 24 hours.');

      setTimeout(() => {
        setFormState('idle');
        setFormData({ name: '', phone: '', email: '', program: '', message: '' });
      }, 3000);
    }, 1500);
  }, []);

  return (
    <section className="section booking" id="booking">
      <div className="container">
        <div className={`section-header reveal${headerVisible ? ' active' : ''}`} ref={headerRef}>
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Book Your <span className="gold-text">Trial</span></h2>
          <p className="section-subtitle">
            Begin your warrior journey. Book a free trial session and experience the Dronacharya difference.
          </p>
        </div>

        <div className="booking-grid">
          <div className={`booking-form reveal-left${formVisible ? ' active' : ''}`} ref={formRef}>
            <h3 className="form-title">Book a Free Trial Session</h3>
            <p className="form-subtitle">
              Fill in your details and our team will get in touch within 24 hours to schedule your session.
            </p>
            <form onSubmit={handleSubmit} id="trialForm">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  id="phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="program">Interested Program</label>
                <select
                  className="form-input"
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a program</option>
                  <option value="strength">Strength &amp; Conditioning</option>
                  <option value="fatloss">Fat Loss Program</option>
                  <option value="personal">Personal Coaching</option>
                  <option value="functional">Functional Training</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Additional Message</label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  placeholder="Tell us about your fitness goals..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn btn-primary submit-btn${formState === 'success' ? ' success' : ''}`}
                id="submit-form"
                disabled={formState !== 'idle'}
                style={{ width: '100%' }}
              >
                {formState === 'loading' && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="spin">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    Processing...
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Session Booked!
                  </>
                )}
                {formState === 'idle' && (
                  <>
                    Join the Gurukul
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className={`contact-info reveal-right${contactVisible ? ' active' : ''}`} ref={contactRef}>
            <div className="contact-block">
              <h3 className="contact-block-title">Reach Us</h3>
              <a href="tel:+919876543210" className="contact-detail" id="contact-phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" className="contact-detail" target="_blank" rel="noopener noreferrer" id="contact-whatsapp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
                WhatsApp Us
              </a>
              <a href="mailto:info@dronacharyagym.com" className="contact-detail" id="contact-email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@dronacharyagym.com
              </a>
            </div>

            <div className="contact-block">
              <h3 className="contact-block-title">Location</h3>
              <div className="contact-detail" id="contact-address">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>
                  Dronacharya Gym,<br/>
                  Sector 15, Gurugram,<br/>
                  Haryana 122001
                </span>
              </div>
            </div>

            <div className="contact-hours">
              <h3 className="contact-block-title">Training Hours</h3>
              <div className="hours-grid">
                <div className="hours-row">
                  <span className="hours-day">Monday – Friday</span>
                  <span className="hours-time">5:00 AM – 11:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">6:00 AM – 10:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">7:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 className="contact-block-title">Follow the Path</h3>
              <div className="footer-social" style={{ marginTop: '1rem' }}>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {notification && (
        <Notification message={notification} onDone={() => setNotification(null)} />
      )}
    </section>
  );
}
