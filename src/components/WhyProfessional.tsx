'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { comparisonData } from '@/lib/constants';
import { fadeUp, dramaticEase } from '@/lib/motion';

export default function WhyProfessional() {
  return (
    <section className="relative overflow-hidden bg-bg-surface-1">
      {/* Warm ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 opacity-[0.04] blur-[120px]"
        style={{ background: 'radial-gradient(ellipse, var(--lens-400) 0%, transparent 70%)' }}
      />

      <div className="relative py-24 lg:py-36">
        {/* Centered editorial layout — like a magazine spread */}
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: dramaticEase }}
            className="text-center text-text-primary"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            &ldquo;¿Y no puedo grabarlo con mi celular?&rdquo;
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: dramaticEase }}
            className="mt-10 space-y-6 text-text-secondary lg:mt-14"
            style={{
              fontFamily: 'var(--font-libre), serif',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              lineHeight: 1.85,
            }}
          >
            <p>
              Claro que puedes. Los celulares de hoy graban en 4K y tienen
              estabilización decente. Nadie te va a decir que no sirven — para
              ciertas cosas funcionan perfecto.
            </p>
            <p>
              Pero hay una diferencia enorme entre grabar y producir. Grabar es
              apretar un botón. Producir es decidir qué se cuenta, cómo se ilumina,
              dónde se pone la cámara, qué música acompaña, qué ritmo lleva la
              edición. Es pensar en quién va a ver ese video y qué queremos que
              sienta.
            </p>
            <p>
              Un video mal producido no solo se ve amateur — comunica que tu negocio,
              tu evento o tu proyecto no se toman en serio. Y en un mundo donde todo
              el mundo graba todo, lo que realmente destaca es lo que está bien pensado
              y bien hecho.
            </p>
            <p className="text-text-primary font-bold">
              Detrás de cada lente hay una mente creativa. Eso es lo que ofrecemos: no
              solo equipo profesional, sino criterio, experiencia y una obsesión
              genuina por contar bien las historias.
            </p>
          </motion.div>
        </div>

        {/* Comparison — below the text, constrained width */}
        <div className="mx-auto mt-14 max-w-2xl px-6 lg:mt-20 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {/* Celular */}
            <div className="rounded-[2px] bg-bg-surface-2 p-6">
              <p
                className="text-text-tertiary"
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                }}
              >
                Celular
              </p>
              <ul className="mt-4 space-y-3">
                {comparisonData.celular.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-tertiary/50" />
                    <span
                      className="text-text-tertiary"
                      style={{
                        fontFamily: 'var(--font-libre), serif',
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Productora */}
            <div className="rounded-[2px] border border-lens-400/20 bg-bg-surface-2 p-6">
              <p
                className="text-lens-400"
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                }}
              >
                Productora
              </p>
              <ul className="mt-4 space-y-3">
                {comparisonData.productora.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lens-400" />
                    <span
                      className="text-text-primary"
                      style={{
                        fontFamily: 'var(--font-libre), serif',
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
