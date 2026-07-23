'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig, navItems } from '@/config/site';
import { Menu, X, ChevronDown, Ship, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname.startsWith(href);
    },
    [pathname]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-femar-navy/5 border-b border-femar-navy/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-11 h-11 bg-femar-navy rounded-xl flex items-center justify-center group-hover:bg-femar-orange transition-all duration-300 shadow-lg shadow-femar-navy/20 group-hover:shadow-femar-orange/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Ship className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-femar-navy' : 'text-white'
                }`}
              >
                FEMAR
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? 'text-femar-orange' : 'text-femar-orange'
                }`}
              >
                LOGISTICS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.slug!)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isActive(item.href)
                      ? scrolled
                        ? 'text-femar-orange'
                        : 'text-femar-orange'
                      : scrolled
                        ? 'text-femar-navy/70 hover:text-femar-orange'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  {/* Active indicator dot */}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-1 bg-femar-orange rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown with glass effect */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.slug && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl shadow-femar-navy/10 border border-femar-navy/8 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-3.5 text-sm transition-all duration-200 ${
                            isActive(child.href)
                              ? 'text-femar-orange bg-femar-orange/5 font-medium'
                              : 'text-femar-navy/70 hover:text-femar-orange hover:bg-femar-orange/5'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Phone + WhatsApp + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-green-500' : 'text-green-400'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-femar-navy/70' : 'text-white/70'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{siteConfig.phone}</span>
            </a>
            <MagneticButtonWrapper>
              <Link
                href="/contacto"
                className="px-6 py-2.5 bg-femar-orange text-white rounded-lg text-sm font-bold shadow-md shadow-femar-orange/30 hover:bg-femar-orange-light transition-colors duration-200 inline-flex items-center gap-2"
              >
                Cotización Gratis
              </Link>
            </MagneticButtonWrapper>
          </div>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-lg transition-colors ${
              scrolled ? 'text-femar-navy hover:bg-femar-navy/5' : 'text-white hover:bg-white/10'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl rounded-xl shadow-xl mt-2 overflow-hidden border border-femar-navy/8"
            >
              <div className="py-4 px-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-femar-orange bg-femar-orange/8'
                          : 'text-femar-navy/70 hover:text-femar-orange hover:bg-femar-orange/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                              isActive(child.href)
                                ? 'text-femar-orange bg-femar-orange/8 font-medium'
                                : 'text-femar-navy/50 hover:text-femar-orange'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-femar-navy/8 space-y-2">
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 bg-green-500 text-white rounded-lg text-sm font-bold text-center hover:bg-green-600 transition-colors shadow-md shadow-green-500/20 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp {siteConfig.whatsappNumber}
                  </a>
                  <Link
                    href="/contacto"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 bg-femar-orange text-white rounded-lg text-sm font-bold text-center hover:bg-femar-orange-light transition-colors shadow-md shadow-femar-orange/20"
                  >
                    Cotización Gratis
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

// Simple wrapper for magnetic effect on nav CTA
function MagneticButtonWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({ x: (e.clientX - centerX) * 0.2, y: (e.clientY - centerY) * 0.2 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
