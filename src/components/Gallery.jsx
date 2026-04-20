import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const galleryItems = [
  { id: 'gallery-item-1', src: '/images/gallery-1.png', alt: 'Heavy weights area', label: 'Iron Temple', tall: true },
  { id: 'gallery-item-2', src: '/images/gallery-2.png', alt: 'Battle rope training', label: 'Battle Ready' },
  { id: 'gallery-item-3', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80', alt: 'Deadlift training', label: 'Raw Power' },
  { id: 'gallery-item-4', src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80', alt: 'Boxing training', label: 'Warrior Spirit' },
  { id: 'gallery-item-5', src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop&q=80', alt: 'Pull-up training', label: 'Rise Above' },
  { id: 'gallery-item-6', src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=400&fit=crop&q=80', alt: 'Equipment', label: 'Arsenal' },
];

function Lightbox({ src, alt, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img src={src} alt={alt} className="lightbox-img" />
    </div>
  );
}

export default function Gallery() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((item) => {
    setLightbox(item);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  // Close on escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') closeLightbox();
  }, [closeLightbox]);

  return (
    <section className="section gallery" id="gallery" onKeyDown={handleKeyDown}>
      <div className="container">
        <div className={`section-header reveal${headerVisible ? ' active' : ''}`} ref={headerRef}>
          <div className="section-label">The Arena</div>
          <h2 className="section-title">Inside the <span className="gold-text">Gurukul</span></h2>
          <p className="section-subtitle">
            Raw. Authentic. No filters. This is where warriors are forged.
          </p>
        </div>

        <div className={`gallery-grid reveal-scale${gridVisible ? ' active' : ''}`} ref={gridRef}>
          {galleryItems.map(item => (
            <div
              className={`gallery-item${item.tall ? ' tall' : ''}`}
              key={item.id}
              id={item.id}
              onClick={() => openLightbox(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-overlay"><span>{item.label}</span></div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
      )}
    </section>
  );
}
