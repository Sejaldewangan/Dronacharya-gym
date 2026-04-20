import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        root: null,
        rootMargin: options.rootMargin || '0px 0px -80px 0px',
        threshold: options.threshold || 0.15,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  return [ref, isVisible];
}

export function useStaggerReveal(options = {}) {
  const ref = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll('[data-stagger]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.stagger);
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * (options.staggerDelay || 150));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15,
      }
    );

    children.forEach(child => observer.observe(child));
    return () => observer.disconnect();
  }, [options.staggerDelay]);

  return [ref, visibleItems];
}
