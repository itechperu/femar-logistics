'use client';

import Image from 'next/image';

interface HeroSlideshowProps {
  className?: string;
}

export default function HeroSlideshow({ className = '' }: HeroSlideshowProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Full-bleed background image */}
      <Image
        src="/images/fermar-fondo-horizontal.webp"
        alt="FERMAR Logística & Aduanas — fondo corporativo"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-center"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-femar-navy/70 via-femar-navy/50 to-femar-dark/80" />

      {/* Accent glow overlays */}
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
    </div>
  );
}
