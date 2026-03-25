'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappLinks } from '@/lib/whatsapp';
import { dramaticEase } from '@/lib/motion';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contacto');
      if (!contactSection) return;

      const rect = contactSection.getBoundingClientRect();
      const isContactVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(!isContactVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.4,
            ease: dramaticEase,
          }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg transition-transform duration-300 hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-bg-page" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
