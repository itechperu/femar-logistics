'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig, navItems } from '@/config/site';
import { Menu, X, ChevronDown, Ship, Phone } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-femar-navy rounded-lg flex items-center justify-center group-hover:bg-femar-orange transition-colors duration-300">
              <Ship className="w-6 h-6 text-white" />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-femar-navy' : 'text-white'
              }`}
            >
              FEMAR
            </span>
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    isActive(item.href)
                      ? scrolled
                        ? 'text-femar-orange bg-femar-orange/10'
                        : 'text-femar-orange bg-white/10'
                      : scrolled
                        ? 'text-femar-navy hover:text-femar-orange hover:bg-femar-orange/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.slug && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                            isActive(child.href)
                              ? 'text-femar-orange bg-femar-orange/5 font-medium'
                              : 'text-femar-navy hover:text-femar-orange hover:bg-femar-orange/5'
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

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-femar-navy' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contacto"
              className="px-5 py-2.5 bg-femar-orange text-white rounded-lg text-sm font-semibold hover:bg-femar-orange/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Cotización Gratis
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-femar-navy' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white rounded-xl shadow-xl mt-2 overflow-hidden border border-border"
            >
              <div className="py-4 px-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-femar-orange bg-femar-orange/10'
                          : 'text-femar-navy hover:text-femar-orange hover:bg-femar-orange/5'
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
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                              isActive(child.href)
                                ? 'text-femar-orange bg-femar-orange/10'
                                : 'text-femar-navy/70 hover:text-femar-orange'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-border">
                  <Link
                    href="/contacto"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 bg-femar-orange text-white rounded-lg text-sm font-semibold text-center hover:bg-femar-orange/90 transition-colors"
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
