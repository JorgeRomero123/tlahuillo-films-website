'use client';

import { motion } from 'framer-motion';
import { steps } from '@/lib/constants';
import { dramaticEase } from '@/lib/motion';

export default function Process() {
  return (
    <section id="proceso" className="bg-bg-page py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
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
          Así trabajamos
        </motion.h2>

        {/* Editorial stacked steps — like film credits */}
        <div className="mt-14 space-y-0 lg:mt-20">
          {steps.map((step, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: dramaticEase,
                }}
                className="group border-t border-neutral-800 py-8 lg:py-10"
              >
                <div className="flex items-start gap-6 lg:gap-10">
                  {/* Number */}
                  <span
                    className="shrink-0 text-lens-400/60 transition-colors duration-500 group-hover:text-lens-400"
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </span>

                  <div className="flex-1">
                    <h3
                      className="text-text-primary"
                      style={{
                        fontFamily: 'var(--font-bebas), sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                        lineHeight: 1.1,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-2 max-w-lg text-text-secondary"
                      style={{
                        fontFamily: 'var(--font-libre), serif',
                        fontSize: '0.9rem',
                        lineHeight: 1.75,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          {/* Final border */}
          <div className="border-t border-neutral-800" />
        </div>
      </div>
    </section>
  );
}
