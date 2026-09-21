import { useEffect, useRef, useState } from 'react';
import { scrollToSection } from '../utils/scroll';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

const WebSwinger = () => (
  <>
    <DesktopSwinger />
    <MobileAgent />
  </>
);

const DesktopSwinger = () => {
  const agentRef = useRef(null);
  const pathRef = useRef(null);
  const pathGlowRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach((section, index) => {
      const node = document.getElementById(section.id);
      if (!node) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
      );
      observer.observe(node);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const desktop = window.matchMedia('(min-width: 1280px)');
    let raf = 0;
    let running = false;
    let currentY = 140;
    let currentX = 0;
    let currentRot = 0;
    let lastScroll = window.scrollY;
    let velocity = 0;

    const loop = () => {
      if (!running) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const rawVel = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      velocity = velocity * 0.82 + rawVel * 0.18;

      const targetY = 110 + progress * (window.innerHeight - 240);
      const swing =
        Math.sin(progress * Math.PI * 7) * (34 + Math.min(Math.abs(velocity) * 1.6, 48));
      const targetRot = Math.sin(progress * Math.PI * 7) * 28 + velocity * 0.5;

      currentY += (targetY - currentY) * 0.16;
      currentX += (swing - currentX) * 0.16;
      currentRot += (targetRot - currentRot) * 0.14;

      const originX = window.innerWidth - 46;
      const agentX = originX + currentX - 36;
      const agentY = currentY;
      const anchorY = Math.max(80, agentY - 170 + Math.sin(progress * 12) * 20);
      const controlX = originX - 90 - Math.abs(currentX);
      const controlY = (anchorY + agentY) / 2;

      if (agentRef.current) {
        agentRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRot}deg)`;
      }

      const d = `M ${originX} ${anchorY} Q ${controlX} ${controlY} ${agentX + 36} ${agentY + 8}`;
      pathRef.current?.setAttribute('d', d);
      pathGlowRef.current?.setAttribute('d', d);

      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || !motionOk.matches || !desktop.matches) return;
      running = true;
      lastScroll = window.scrollY;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    };

    const sync = () => {
      if (motionOk.matches && desktop.matches) start();
      else stop();
    };

    sync();
    motionOk.addEventListener('change', sync);
    desktop.addEventListener('change', sync);
    window.addEventListener('resize', sync);

    return () => {
      stop();
      motionOk.removeEventListener('change', sync);
      desktop.removeEventListener('change', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden xl:block" aria-hidden>
      <svg className="absolute inset-0 h-full w-full overflow-visible">
        <path
          ref={pathGlowRef}
          fill="none"
          stroke="#e45a3c"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.22"
        />
        <path
          ref={pathRef}
          className="web-strand"
          fill="none"
          stroke="#1b3d3a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute right-5 top-28 flex flex-col items-center gap-4">
        {SECTIONS.map((section, index) => (
          <button
            key={section.id}
            type="button"
            title={section.label}
            onClick={() => scrollToSection(`#${section.id}`)}
            className="pointer-events-auto group relative"
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                active === index
                  ? 'scale-125 bg-coral shadow-[0_0_0_6px_rgba(228,90,60,0.18)]'
                  : 'bg-ink/25 group-hover:bg-teal'
              }`}
            />
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-cream opacity-0 transition group-hover:opacity-100">
              {section.label}
            </span>
          </button>
        ))}
      </div>

      <div
        ref={agentRef}
        className="absolute right-6 top-0 will-change-transform"
        style={{ transform: 'translate3d(0, 140px, 0)' }}
      >
        <div className="relative h-[76px] w-[76px]">
          <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-ink" />
          <img
            src="/agent-swing.png"
            alt=""
            className="h-full w-full rounded-full object-cover shadow-[0_16px_30px_rgba(27,61,58,0.28)] ring-[3px] ring-coral/40"
          />
        </div>
      </div>
    </div>
  );
};

const MobileAgent = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapRef.current) return;
      wrapRef.current.style.opacity = window.scrollY > 400 ? '1' : '0';
      wrapRef.current.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      ref={wrapRef}
      type="button"
      aria-label="Back to top"
      onClick={() => scrollToSection('#top')}
      className="fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 h-11 w-11 rounded-full opacity-0 shadow-lg ring-2 ring-coral/40 transition-opacity duration-300 xl:hidden"
    >
      <img
        src="/agent-icon.png"
        alt=""
        className="h-full w-full rounded-full object-cover"
      />
    </button>
  );
};

export default WebSwinger;
