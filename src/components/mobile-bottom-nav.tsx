'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Package, BookOpen, Send, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navItems = [
  { label: 'Inicio', href: '/', icon: Home },
  { label: 'Nosotros', href: '/quienes-somos', icon: Users },
  { label: 'Servicios', href: '/servicios', icon: Package },
  { label: 'Blog', href: '/blog', icon: BookOpen },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on scroll down, show on scroll up — with smooth behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      // Only hide if scrolling DOWN significantly
      if (delta > 5 && currentScrollY > 200) {
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
            {/* Glass background */}
            <div className="relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-femar-orange/40 to-transparent" />

              {/* Main nav bar */}
              <div className="bg-femar-dark/95 backdrop-blur-xl border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-around h-14 px-1 max-w-md mx-auto">
                  {/* Regular nav items */}
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`relative flex flex-col items-center justify-center gap-0.5 min-w-[44px] py-1 transition-all duration-200 ${
                          active ? 'scale-105' : ''
                        }`}
                      >
                        {/* Active indicator */}
                        {active && (
                          <motion.div
                            layoutId="bottom-nav-active"
                            className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-femar-orange rounded-full"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        <div className={`relative p-1 rounded-lg transition-all duration-200 ${
                          active
                            ? 'bg-femar-orange/15 text-femar-orange'
                            : 'text-white/40 hover:text-white/70'
                        }`}>
                          <Icon className="w-[18px] h-[18px]" strokeWidth={active ? 2.5 : 1.5} />
                        </div>
                        <span className={`text-[9px] font-semibold transition-all duration-200 ${
                          active ? 'text-femar-orange' : 'text-white/40'
                        }`}>
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}

                  {/* CTA Button — elevated, prominent */}
                  <Link
                    href="/contacto"
                    className="relative flex flex-col items-center justify-center gap-0.5 min-w-[48px] -mt-3 transition-all duration-200"
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gradient-to-br from-femar-orange to-femar-orange-light rounded-xl flex items-center justify-center shadow-lg shadow-femar-orange/40 relative"
                    >
                      <Send className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
                    </motion.div>
                    <span className="text-[9px] font-bold text-femar-orange mt-0.5">Cotizar</span>
                  </Link>

                  {/* WhatsApp — integrated into bottom nav */}
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col items-center justify-center gap-0.5 min-w-[44px] py-1 transition-all duration-200"
                  >
                    <div className="p-1 rounded-lg text-green-400 hover:text-green-300 transition-all duration-200">
                      <MessageCircle className="w-[18px] h-[18px] fill-green-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-[9px] font-semibold text-white/40">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Bottom spacer for mobile so content isn't hidden behind nav */}
      <div className="h-16 md:hidden" />
    </>
  );
}
