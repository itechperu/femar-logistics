'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Package, Send, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

// Simplified: 3 core nav items + 1 elevated CTA = 4 total (clean UX)
const navItems = [
  { label: 'Inicio', href: '/', icon: Home },
  { label: 'Servicios', href: '/servicios', icon: Package },
  { label: 'Contacto', href: '/contacto', icon: Phone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      if (delta > 8 && currentScrollY > 300) {
        setIsVisible(false);
      } else if (delta < -5 || currentScrollY <= 100) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom"
          >
            <div className="relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-femar-orange/40 to-transparent" />

              {/* Nav bar — glass effect */}
              <div className="bg-femar-dark/95 backdrop-blur-xl border-t border-white/5 shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between h-[58px] px-4 max-w-sm mx-auto">
                  {/* 3 core nav items */}
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="relative flex flex-col items-center justify-center gap-0.5 min-w-[52px] transition-all duration-200"
                      >
                        {active && (
                          <motion.div
                            layoutId="bottom-nav-indicator"
                            className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-femar-orange rounded-full"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        <div className={`p-2 rounded-xl transition-all duration-300 ${
                          active
                            ? 'bg-femar-orange/20 text-femar-orange'
                            : 'text-white/35 hover:text-white/60 active:text-white/80'
                        }`}>
                          <Icon className="w-[20px] h-[20px]" strokeWidth={active ? 2.5 : 1.5} />
                        </div>
                        <span className={`text-[10px] font-semibold tracking-wide transition-all duration-200 ${
                          active ? 'text-femar-orange' : 'text-white/35'
                        }`}>
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}

                  {/* Elevated CTA — Cotizar WhatsApp */}
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col items-center justify-center gap-0.5 -mt-5 transition-all duration-200"
                  >
                    <motion.div
                      whileTap={{ scale: 0.92 }}
                      className="w-[44px] h-[44px] bg-gradient-to-br from-femar-orange to-femar-orange-light rounded-2xl flex items-center justify-center shadow-lg shadow-femar-orange/50 relative overflow-hidden"
                    >
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 bg-white/10 rounded-2xl" />
                      <Send className="w-[20px] h-[20px] text-white relative z-10" strokeWidth={2.5} />
                    </motion.div>
                    <span className="text-[10px] font-bold text-femar-orange tracking-wide mt-0.5">Cotizar</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Bottom spacer */}
      <div className="h-[60px] md:hidden" />
    </>
  );
}
