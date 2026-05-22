import { useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 2000 }) {
  const [ref, isVisible] = useScrollReveal(0.3);
  const [count, setCount] = useState(0);

  const numericValue = typeof value === 'string'
    ? parseFloat(value.replace(/[^0-9.]/g, ''))
    : value;

  useEffect(() => {
    if (!isVisible || isNaN(numericValue)) return;

    let start = 0;
    const end = numericValue;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, numericValue, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{isNaN(numericValue) ? value : count.toLocaleString()}{suffix}
    </span>
  );
}
