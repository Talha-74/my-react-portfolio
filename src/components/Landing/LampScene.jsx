import React, { useEffect, useRef, useState } from 'react';

function LampScene() {
  const shellRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = shellRef.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const node = shellRef.current;
    if (!node || reduceMotion) return undefined;

    const handlePointerMove = (event) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty('--lamp-x', `${x}%`);
      node.style.setProperty('--lamp-y', `${y}%`);
      node.style.setProperty('--lamp-rotate', `${(x - 50) / 9}deg`);
    };

    node.addEventListener('pointermove', handlePointerMove);
    return () => node.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className={`lamp-scene lamp-scene--css ${visible ? 'lamp-scene--visible' : ''}`} ref={shellRef} aria-hidden="true">
      <span className="lamp-scene__cable" />
      <span className="lamp-scene__shade" />
      <span className="lamp-scene__beam" />
      <span className="lamp-scene__dust lamp-scene__dust--one" />
      <span className="lamp-scene__dust lamp-scene__dust--two" />
    </div>
  );
}

export default LampScene;
