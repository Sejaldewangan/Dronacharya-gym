import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = '';
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader${hidden ? ' hidden' : ''}`} id="pageLoader">
      <div className="loader-logo">Dronacharya</div>
      <div className="loader-bar"></div>
    </div>
  );
}
