'use client';

import { siteConfig } from '@/config/site';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
    >
      {/* Pulse ring */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />

      {/* Main button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.9 }}
            className="absolute right-full mr-3 bg-white rounded-xl shadow-lg shadow-femar-navy/10 text-femar-navy px-5 py-2.5 font-semibold text-sm whitespace-nowrap hidden md:block border border-femar-navy/5"
          >
            💬 Chat con nosotros
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
