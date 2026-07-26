'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const springProgress = useSpring(0, { stiffness: 120, damping: 30, mass: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      springProgress.set(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, [springProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
      style={{ scaleX: springProgress / 100 }}
    >
      {/* Main progress line */}
      <div className="h-full bg-gradient-to-r from-femar-orange via-femar-orange-light to-femar-orange" />

      {/* Glow effect behind the progress line */}
      <div className="absolute inset-0 h-[6px] -top-[1.5px] bg-gradient-to-r from-femar-orange/40 via-femar-orange-light/30 to-femar-orange/40 blur-[2px]" />
    </motion.div>
  );
}
