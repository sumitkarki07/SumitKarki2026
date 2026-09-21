import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({
  end,
  decimals = 0,
  suffix = '',
  prefix = '',
  duration = 1.35,
  className = '',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(end);
      return undefined;
    }

    const start = performance.now();
    let frame = 0;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - (1 - progress) ** 3;
      setValue(end * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export default CountUp;
