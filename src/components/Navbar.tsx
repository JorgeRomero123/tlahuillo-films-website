'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { whatsappLinks } from '@/lib/whatsapp';
import { dramaticEase } from '@/lib/motion';
import { withPrefix } from '@/lib/prefix';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-page/90 backdrop-blur-md shadow-[var(--shadow-md)]'
          : 'bg-transparent'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="relative block shrink-0">
            <Image
              src={withPrefix('/logo.png')}
              alt="Tlahuillo Films Mx — Productora audiovisual en Cuernavaca"
              width={940}
              height={327}
              className="h-9 w-auto lg:h-11"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-ui text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-gold-400"
                style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-gold-400 px-5 py-2.5 text-sm font-semibold text-bg-page transition-all duration-300 hover:bg-gold-500 hover:shadow-[var(--shadow-gold)]"
              style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
            >
              Cotiza tu proyecto
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 lg:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: dramaticEase }}
            className="absolute inset-x-0 top-0 bg-bg-page/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-6 px-6 pb-8 pt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.4,
                    ease: dramaticEase,
                  }}
                  className="font-heading text-3xl tracking-[0.15em] text-text-secondary transition-colors duration-300 hover:text-gold-400"
                  style={{ fontFamily: 'var(--font-bebas), sans-serif', textTransform: 'uppercase' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + navLinks.length * 0.08,
                  duration: 0.4,
                  ease: dramaticEase,
                }}
                className="mt-2 inline-block w-fit rounded-sm bg-gold-400 px-6 py-3 text-sm font-semibold text-bg-page"
                style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
              >
                Cotiza tu proyecto
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
