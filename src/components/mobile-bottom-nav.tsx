'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Package, BookOpen, MessageSquare, Phone, Send } from 'lucide-react';
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

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
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
      {/* Bottom Navigation Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          >
            {/* Glass background with top border */}
            <div className="relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-femar-orange/40 to-transparent" />
              
              {/* Main nav bar */}
              <div className="bg-femar-dark/95 backdrop-blur-xl border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-around h-16 px-2 safe-area-bottom">
                  {/* Regular nav items */}
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`relative flex flex-col items-center justify-center gap-0.5 min-w-[48px] transition-all duration-200 ${
                          active ? 'scale-105' : ''
                        }`}
                      >
                        {/* Active indicator */}
                        {active && (
                          <motion.div
                            layoutId="bottom-nav-active"
                            className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-femar-orange rounded-full"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        <div className={`relative p-1.5 rounded-xl transition-all duration-200 ${
                          active
                            ? 'bg-femar-orange/15 text-femar-orange'
                            : 'text-white/40 hover:text-white/70'
                        }`}>
                          <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 1.5} />
                          {/* Active glow dot */}
                          {active && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-1 -right-1 w-2 h-2 bg-femar-orange rounded-full shadow-sm shadow-femar-orange"
                            />
                          )}
                        </div>
                        <span className={`text-[10px] font-semibold transition-all duration-200 ${
                          active ? 'text-femar-orange' : 'text-white/40'
                        }`}>
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}

                  {/* PRIORITY: Contact/CTA Button — larger and prominent */}
                  <Link
                    href="/contacto"
                    className="relative flex flex-col items-center justify-center gap-0.5 min-w-[56px] -mt-4 transition-all duration-200"
                  >
                    {/* Elevated CTA button */}
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-br from-femar-orange to-femar-orange-light rounded-2xl flex items-center justify-center shadow-lg shadow-femar-orange/40 relative"
                    >
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-2xl bg-femar-orange/30 animate-ping" style={{ animationDuration: '3s' }} />
                      <Send className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </motion.div>
                    <span className="text-[10px] font-bold text-femar-orange mt-0.5">Cotizar</span>
                  </Link>

                  {/* WhatsApp quick action */}
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col items-center justify-center gap-0.5 min-w-[48px] transition-all duration-200"
                  >
                    <div className="p-1.5 rounded-xl text-green-400 hover:text-green-300 transition-all duration-200">
                      <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-semibold text-white/40">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Bottom padding for mobile to prevent content being hidden */}
      <div className="h-16 md:hidden" />
    </>
  );
}
