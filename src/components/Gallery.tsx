'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { dramaticEase } from '@/lib/motion';
import { withPrefix } from '@/lib/prefix';

const galleryImages = [
  { src: '/gallery/04.jpg', alt: 'Ciclista descendiendo por sendero boscoso — Down Tepoz, cobertura por Tlahuillo Films', aspect: 'landscape' },
  { src: '/gallery/01.jpg', alt: 'Anillo de compromiso en estuche — fotografía de producto por Tlahuillo Films', aspect: 'square' },
  { src: '/gallery/05.jpg', alt: 'Audi RS5 en taller automotriz — video corporativo por Tlahuillo Films', aspect: 'landscape' },
  { src: '/gallery/06.jpg', alt: 'Ciclistas saltando obstáculos — competencia Down Tepoz filmada por Tlahuillo Films', aspect: 'landscape' },
  { src: '/gallery/09.jpg', alt: 'Nadador en competencia de nado — cobertura deportiva por Tlahuillo Films', aspect: 'landscape' },
  { src: '/gallery/02.jpg', alt: 'Detalle de anillo de compromiso — macro fotografía por Tlahuillo Films', aspect: 'square' },
  { src: '/gallery/07.jpg', alt: 'Evento de ciclismo con patrocinadores Fox y BMC — cobertura de eventos Tlahuillo Films', aspect: 'landscape' },
  { src: '/gallery/10.jpg', alt: 'Deportista en moto acuática Sea-Doo — fotografía deportiva por Tlahuillo Films', aspect: 'landscape' },
  { src: '/gallery/15.jpg', alt: 'Podio de ganadores en competencia de ciclismo — Down Tepoz por Tlahuillo Films', aspect: 'landscape' },
  { src: '/gallery/03.jpg', alt: 'Trabajo de precisión en laboratorio dental — video industrial por Tlahuillo Films', aspect: 'landscape' },
] as const;

export default function Gallery() {
  return (
    <section className="bg-bg-page py-24 lg:py-32">
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
          Lo que capturamos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: dramaticEase }}
          className="mt-3 max-w-xl text-text-secondary"
          style={{ fontFamily: 'var(--font-libre), serif', lineHeight: 1.7 }}
        >
          Eventos deportivos, productos, corporativos, deportes extremos — cada proyecto es diferente.
        </motion.p>
      </div>

      {/* Masonry-ish grid with varied spans */}
      <div className="mx-auto mt-10 max-w-[1400px] px-4 lg:mt-14 lg:px-6">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3">
          {galleryImages.map((img, i) => {
            // Vary the grid spans for visual interest
            const spanClass =
              i === 0 ? 'md:col-span-2 md:row-span-2' :    // First image large
              i === 4 ? 'md:col-span-2' :                    // Wide
              i === 6 ? 'lg:col-span-2' :                    // Wide on desktop
              '';

            return (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: dramaticEase,
                }}
                className={`group relative overflow-hidden rounded-[1px] ${spanClass}`}
              >
                <div className={`relative overflow-hidden ${
                  i === 0 ? 'aspect-square md:aspect-auto md:h-full' :
                  img.aspect === 'square' ? 'aspect-square' :
                  'aspect-[4/3]'
                }`}>
                  <Image
                    src={withPrefix(img.src)}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes={
                      i === 0 ? '(max-width: 768px) 100vw, 50vw' :
                      i === 4 || i === 6 ? '(max-width: 768px) 50vw, 50vw' :
                      '(max-width: 768px) 50vw, 25vw'
                    }
                  />
                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-bg-page/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
