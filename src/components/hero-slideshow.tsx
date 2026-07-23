'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Professional gradient backgrounds that simulate logistics imagery
const heroSlides = [
  {
    gradient: 'linear-gradient(135deg, #0c2340 0%, #1a3a5c 40%, #0a1628 100%)',
    accent: 'radial-gradient(ellipse 80% 50% at 30% 40%, rgba(232,119,34,0.15) 0%, transparent 50%)',
    label: 'Logística Global',
  },
  {
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0c2340 50%, #1a3a5c 100%)',
    accent: 'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(232,119,34,0.12) 0%, transparent 50%)',
    label: 'Carga Marítima',
  },
  {
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #0c2340 60%, #0a1628 100%)',
    accent: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(232,119,34,0.10) 0%, transparent 50%)',
    label: 'Despacho Aduanero',
  },
  {
    gradient: 'linear-gradient(135deg, #0c2340 0%, #0a1628 40%, #1a3a5c 100%)',
    accent: 'radial-gradient(ellipse 80% 40% at 20% 70%, rgba(232,119,34,0.08) 0%, transparent 50%)',
    label: 'Carga Terrestre',
  },
];

interface HeroSlideshowProps {
  className?: string;
}

export default function HeroSlideshow({ className = '' }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 1500);
  }, [isTransitioning]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Slideshow backgrounds */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
          style={{
            background: heroSlides[currentSlide].gradient,
          }}
        />
      </AnimatePresence>

      {/* Accent glow overlay for current slide */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`accent-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background: heroSlides[currentSlide].accent,
          }}
        />
      </AnimatePresence>

      {/* Persistent animated mesh blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-femar-orange/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-femar-orange/10 rounded-full blur-[80px] animate-float-reverse" />
        <div className="absolute top-[60%] left-[40%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] animate-pulse-glow" />
        {/* Animated grid dots */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* SVG shipping route lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e87722" stopOpacity="0" />
            <stop offset="50%" stopColor="#e87722" stopOpacity="1" />
            <stop offset="100%" stopColor="#e87722" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M100,400 Q400,200 700,350 T1300,300" stroke="url(#routeGrad)" strokeWidth="2" fill="none" strokeDasharray="10 20" className="animate-dash-flow" />
        <path d="M200,600 Q500,400 800,500 T1400,450" stroke="url(#routeGrad)" strokeWidth="1.5" fill="none" strokeDasharray="8 16" className="animate-dash-flow" style={{ animationDelay: '0.5s' }} />
        <path d="M50,150 Q300,300 600,200 T1200,150" stroke="url(#routeGrad)" strokeWidth="1" fill="none" strokeDasharray="6 12" className="animate-dash-flow" style={{ animationDelay: '1s' }} />
        <circle cx="100" cy="400" r="4" fill="#e87722" opacity="0.6"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" /></circle>
        <circle cx="700" cy="350" r="4" fill="#e87722" opacity="0.6"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.3s" /></circle>
        <circle cx="1300" cy="300" r="4" fill="#e87722" opacity="0.6"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.6s" /></circle>
      </svg>

      {/* Noise/grain texture for premium feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
      }} />

      {/* Slide indicators (bottom) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none md:pointer-events-auto md:bottom-8">
        {heroSlides.map((slide, i) => (
          <button
            key={i}
            onClick={() => { setCurrentSlide(i); setIsTransitioning(true); setTimeout(() => setIsTransitioning(false), 1500); }}
            className="group pointer-events-auto"
          >
            <div className={`h-1 rounded-full transition-all duration-500 ${
              i === currentSlide
                ? 'w-8 bg-femar-orange shadow-sm shadow-femar-orange'
                : 'w-3 bg-white/20 hover:bg-white/40'
            }`} />
          </button>
        ))}
      </div>

      {/* Current slide label (fades in/out) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`label-${currentSlide}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 right-8 text-white/30 text-xs font-medium tracking-widest uppercase hidden md:block"
        >
          {heroSlides[currentSlide].label}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
