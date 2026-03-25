'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioVideos } from '@/lib/constants';
import { dramaticEase } from '@/lib/motion';
import { withPrefix } from '@/lib/prefix';
import YouTubeEmbed from './YouTubeEmbed';

const galleryImages = [
  { src: '/gallery/04.jpg', alt: 'Ciclista descendiendo por sendero boscoso — Down Tepoz' },
  { src: '/gallery/01.jpg', alt: 'Anillo de compromiso en estuche — fotografía de producto' },
  { src: '/gallery/05.jpg', alt: 'Audi RS5 en taller automotriz — video corporativo' },
  { src: '/gallery/06.jpg', alt: 'Ciclistas saltando obstáculos — Down Tepoz' },
  { src: '/gallery/09.jpg', alt: 'Nadador en competencia — cobertura deportiva' },
  { src: '/gallery/02.jpg', alt: 'Detalle de anillo de compromiso — macro fotografía' },
  { src: '/gallery/07.jpg', alt: 'Evento de ciclismo con patrocinadores — cobertura de eventos' },
  { src: '/gallery/10.jpg', alt: 'Deportista en moto acuática — fotografía deportiva' },
  { src: '/gallery/15.jpg', alt: 'Podio de ganadores — Down Tepoz' },
  { src: '/gallery/03.jpg', alt: 'Trabajo de precisión en laboratorio dental — video industrial' },
] as const;

export default function Showreel() {
  const featured = portfolioVideos.find((v) => v.featured);
  const rest = portfolioVideos.filter((v) => !v.featured);

  return (
    <section id="portafolio" className="bg-bg-surface-1 py-24 lg:py-32">
      {/* Header */}
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
          Nuestro trabajo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: dramaticEase }}
          className="mt-3 max-w-xl text-text-secondary"
          style={{ fontFamily: 'var(--font-libre), serif', lineHeight: 1.7 }}
        >
          Eventos deportivos, productos, corporativos — cada proyecto es diferente. Dale play y juzga tú mismo.
        </motion.p>
      </div>

      {/* Featured video — full bleed */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: dramaticEase }}
          className="mt-10 lg:mt-14"
        >
          <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
            <div className="relative overflow-hidden rounded-[2px]" style={{ aspectRatio: '21/9' }}>
              <YouTubeEmbed
                videoId={featured.id}
                title={featured.title}
                className="absolute inset-0 [&_lite-youtube]{width:100%;height:100%}"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <p
                className="text-lg text-text-primary lg:text-xl"
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {featured.title}
              </p>
              {featured.category && (
                <span
                  className="hidden shrink-0 text-xs tracking-[0.2em] text-lens-400 sm:block"
                  style={{ fontFamily: 'var(--font-barlow), sans-serif', textTransform: 'uppercase' }}
                >
                  {featured.category}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Video grid */}
      {rest.length > 0 && (
        <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: dramaticEase }}
              >
                <div className="relative overflow-hidden rounded-[2px]" style={{ aspectRatio: '16/9' }}>
                  <YouTubeEmbed
                    videoId={video.id}
                    title={video.title}
                    className="absolute inset-0 [&_lite-youtube]{width:100%;height:100%}"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <p
                    className="text-text-primary"
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {video.title}
                  </p>
                  {video.category && (
                    <span
                      className="hidden shrink-0 text-xs tracking-[0.15em] text-text-tertiary sm:block"
                      style={{ fontFamily: 'var(--font-barlow), sans-serif', textTransform: 'uppercase' }}
                    >
                      {video.category}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Photo gallery */}
      <div className="mx-auto mt-14 max-w-[1400px] px-4 lg:mt-20 lg:px-6">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: dramaticEase }}
              className="group relative overflow-hidden rounded-[1px]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={withPrefix(img.src)}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-bg-page/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* YouTube channel link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: dramaticEase }}
        className="mt-10 text-center"
      >
        <a
          href="https://www.youtube.com/channel/UCvLOMGuNkWPH5bk_n7fVlwg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-tertiary transition-colors duration-300 hover:text-lens-400"
          style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
        >
          Ver más en YouTube
          <span className="text-xs">&rarr;</span>
        </a>
      </motion.div>
    </section>
  );
}
