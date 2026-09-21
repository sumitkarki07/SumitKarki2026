import { useEffect, useRef } from 'react';

const AmbientCursor = () => {
  const spotRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const onMove = (event) => {
      if (!spotRef.current) return;
      spotRef.current.style.background = `radial-gradient(520px circle at ${event.clientX}px ${event.clientY}px, rgba(26,122,109,0.14), rgba(228,90,60,0.08) 28%, transparent 62%)`;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      aria-hidden
    />
  );
};

export default AmbientCursor;
