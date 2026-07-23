'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  // Parse the numeric part from strings like "15+", "5000+", "200+", "50+"
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);

  const startAnimation = useCallback(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(numericValue * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [numericValue, duration]);

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView, startAnimation]);

  return (
    <div ref={ref} className={className}>
      <span className="text-4xl md:text-5xl font-bold gradient-text">
        {prefix}{displayValue || 0}{suffix}
      </span>
    </div>
  );
}
