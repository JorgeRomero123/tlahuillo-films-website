'use client';

import { motion } from 'framer-motion';
import { Clapperboard, Camera, Smartphone, Film, ArrowRight } from 'lucide-react';
import { services } from '@/lib/constants';
import { whatsappLinks } from '@/lib/whatsapp';
import { dramaticEase } from '@/lib/motion';

const iconMap = {
  Clapperboard,
  Camera,
  Smartphone,
  Film,
} as const;

export default function Services() {
  return (
    <section id="servicios" className="bg-bg-page py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: dramaticEase }}
          className="text-text-primary"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          Lo que hacemos
        </motion.h2>

        {/* Varied layout — NOT a uniform grid */}
        <div className="mt-12 space-y-1 lg:mt-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: dramaticEase,
                }}
                className="group border-t border-neutral-800"
              >
                <a
                  href={whatsappLinks[service.whatsapp]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 py-8 transition-colors duration-500 lg:items-center lg:gap-10 lg:py-10"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-bg-surface-1 transition-colors duration-500 group-hover:bg-bg-surface-2">
                    <Icon className="h-5 w-5 text-text-tertiary transition-colors duration-500 group-hover:text-lens-400" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
                    <h3
                      className="shrink-0 text-text-primary transition-colors duration-500 group-hover:text-lens-400 lg:w-64"
                      style={{
                        fontFamily: 'var(--font-bebas), sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="max-w-lg text-text-secondary"
                      style={{
                        fontFamily: 'var(--font-libre), serif',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-text-tertiary/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-lens-400 lg:mt-0" />
                </a>
              </motion.div>
            );
          })}
          <div className="border-t border-neutral-800" />
        </div>
      </div>
    </section>
  );
}
