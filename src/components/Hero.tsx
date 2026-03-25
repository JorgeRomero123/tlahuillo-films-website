'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { whatsappLinks } from '@/lib/whatsapp';
import { fadeUp, staggerContainer, dramaticEase } from '@/lib/motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-page">
      {/* Background image — soccer sunset */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/12.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-page via-bg-page/85 to-bg-page/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-page via-transparent to-bg-page/60" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-20 pb-16 lg:px-8">
        {/* Headline — full width, massive scale */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-text-primary leading-[0.92]"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            }}
          >
            Tu historia merece más que un celular en automático
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-text-secondary lg:mt-8"
            style={{
              fontFamily: 'var(--font-libre), serif',
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              lineHeight: 1.75,
            }}
          >
            Somos una productora audiovisual independiente en Cuernavaca. Creamos
            videos que la gente sí quiere ver — con la imagen, el sonido y la
            narrativa que tu proyecto necesita.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10"
          >
            <a
              href={whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold-400 px-7 py-3.5 font-semibold text-bg-page transition-all duration-300 hover:bg-gold-500 hover:shadow-[var(--shadow-gold)]"
              style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
            >
              Cotiza tu video ahora
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portafolio"
              className="group inline-flex items-center gap-2 px-2 py-3 text-text-secondary transition-colors duration-300 hover:text-gold-400"
              style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
            >
              <Play className="h-4 w-4" />
              Ver nuestro trabajo
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: dramaticEase }}
          className="mt-auto origin-left"
        >
          <div className="h-px w-full bg-gradient-to-r from-lens-400/30 via-gold-400/20 to-transparent" />
          <p
            className="mt-4 text-xs tracking-[0.3em] text-text-tertiary"
            style={{ fontFamily: 'var(--font-barlow), sans-serif', textTransform: 'uppercase' }}
          >
            Productora audiovisual &middot; Cuernavaca, Morelos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
