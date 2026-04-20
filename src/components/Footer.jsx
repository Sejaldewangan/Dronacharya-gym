const LogoSVG = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L28 10L38 8L34 18L42 24L34 30L38 40L28 38L22 46L16 38L6 40L10 30L2 24L10 18L6 8L16 10L22 2Z" fill="none" stroke="#d3af37" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="22" cy="24" r="8" fill="none" stroke="#d3af37" strokeWidth="1.5"/>
    <circle cx="22" cy="24" r="3" fill="#d3af37"/>
  </svg>
);

const scrollTo = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const pos = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  }
};

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" onClick={(e) => scrollTo(e, '#hero')}>
              <div className="nav-logo-icon">
                <LogoSVG />
              </div>
              <div className="nav-logo-text">Drona<span>charya</span></div>
            </a>
            <p>Where warriors are forged through discipline, dedication, and the timeless pursuit of physical mastery. The Gurukul of Fitness since 2015.</p>
          </div>

          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#philosophy" onClick={(e) => scrollTo(e, '#philosophy')}>Philosophy</a></li>
              <li><a href="#programs" onClick={(e) => scrollTo(e, '#programs')}>Programs</a></li>
              <li><a href="#trainers" onClick={(e) => scrollTo(e, '#trainers')}>Trainers</a></li>
              <li><a href="#membership" onClick={(e) => scrollTo(e, '#membership')}>Membership</a></li>
              <li><a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')}>Gallery</a></li>
              <li><a href="#booking" onClick={(e) => scrollTo(e, '#booking')}>Book Trial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Programs</h4>
            <ul className="footer-links">
              <li><a href="#program-strength" onClick={(e) => scrollTo(e, '#program-strength')}>Strength &amp; Conditioning</a></li>
              <li><a href="#program-fatloss" onClick={(e) => scrollTo(e, '#program-fatloss')}>Fat Loss</a></li>
              <li><a href="#program-coaching" onClick={(e) => scrollTo(e, '#program-coaching')}>Personal Coaching</a></li>
              <li><a href="#program-functional" onClick={(e) => scrollTo(e, '#program-functional')}>Functional Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-links">
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><a href="mailto:info@dronacharyagym.com">info@dronacharyagym.com</a></li>
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dronacharya Gym. All rights reserved.</p>
          <p>Forging Warriors Since 2015</p>
        </div>
      </div>
    </footer>
  );
}
