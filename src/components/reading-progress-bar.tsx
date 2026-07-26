'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');

  // Spring-based smooth progress
  const springProgress = useSpring(0, { stiffness: 100, damping: 25, mass: 0.4 });

  // Dynamic height: starts at 3px, scales up to 5px as user scrolls deeper
  const barHeight = useTransform(springProgress, [0, 100], [3, 5]);

  // Dynamic opacity: starts subtle, becomes more vivid with progress
  const barOpacity = useTransform(springProgress, [0, 15, 60, 100], [0.6, 1, 1, 1]);

  // Glow intensity increases with progress
  const glowIntensity = useTransform(springProgress, [0, 50, 100], [0, 0.5, 0.8]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(progress);
    springProgress.set(progress);

    // Track scrolling state for animations
    setIsScrolling(true);
    setScrollDirection(scrollTop > 0 ? 'down' : 'up');
  }, [springProgress]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const onScroll = () => {
      handleScroll();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initialize
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  return (
    <>
      {/* ===== PRIMARY PROGRESS BAR — Fixed top ===== */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] origin-left"
        style={{
          scaleX: springProgress / 100,
          height: barHeight,
          opacity: barOpacity,
        }}
      >
        {/* Main gradient line */}
        <div className="h-full bg-gradient-to-r from-femar-orange via-femar-orange-light to-femar-orange rounded-r-full" />

        {/* Inner shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-r-full"
          animate={{
            backgroundPosition: isScrolling ? ['0% 0%', '200% 0%'] : '0% 0%',
          }}
          transition={{ duration: 1.5, repeat: isScrolling ? Infinity : 0, ease: 'linear' }}
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
            backgroundSize: '200% 100%',
          }}
        />

        {/* Glow halo — intensity scales with scroll depth */}
        <motion.div
          className="absolute inset-x-0 -top-[3px] rounded-r-full"
          style={{
            height: 12,
            opacity: glowIntensity,
            background: 'linear-gradient(to bottom, rgba(232,119,34,0.6), rgba(232,119,34,0.1), transparent)',
            filter: 'blur(3px)',
          }}
        />

        {/* Edge sparkle at progress tip */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2"
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#f5a623',
            opacity: scrollProgress > 5 ? 1 : 0,
            boxShadow: isScrolling
              ? '0 0 8px 2px rgba(232,119,34,0.6), 0 0 16px 4px rgba(232,119,34,0.3)'
              : '0 0 4px 1px rgba(232,119,34,0.4)',
          }}
          animate={{
            scale: isScrolling ? [1, 1.4, 1] : 1,
          }}
          transition={{ duration: 0.8, repeat: isScrolling ? Infinity : 0, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ===== SECONDARY MICRO INDICATOR — Thin baseline line ===== */}
      <div className="fixed top-0 left-0 right-0 z-[59] h-[1px] bg-gradient-to-r from-transparent via-femar-orange/10 to-transparent" />
    </>
  );
}
