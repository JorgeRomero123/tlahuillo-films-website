'use client';

import { motion } from 'framer-motion';
import { portfolioVideos } from '@/lib/constants';
import { fadeUp, dramaticEase } from '@/lib/motion';
import YouTubeEmbed from './YouTubeEmbed';

export default function Showreel() {
  const featured = portfolioVideos.find((v) => v.featured);
  const rest = portfolioVideos.filter((v) => !v.featured);

  return (
    <section id="portafolio" className="bg-bg-surface-1 py-24 lg:py-32">
      {/* Full-bleed container — no max-width constraint */}
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
          Nuestro trabajo habla
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: dramaticEase }}
          className="mt-3 max-w-xl text-text-secondary"
          style={{ fontFamily: 'var(--font-libre), serif', lineHeight: 1.7 }}
        >
          Del Chinelazo 2019 al Down Tepoz 2018 — cada video tiene una razón de ser. Dale play y juzga tú mismo.
        </motion.p>
      </div>

      {/* Featured video — full bleed, cinematic */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: dramaticEase }}
          className="group relative mt-10 lg:mt-14"
        >
          <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
            <div className="relative overflow-hidden rounded-[2px]" style={{ aspectRatio: '21/9' }}>
              <YouTubeEmbed
                videoId={featured.id}
                title={featured.title}
                className="absolute inset-0 [&_lite-youtube]{width:100%;height:100%}"
              />
            </div>
            {/* Caption overlay */}
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <div>
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
                {featured.description && (
                  <p
                    className="mt-1 text-sm text-text-tertiary"
                    style={{ fontFamily: 'var(--font-libre), serif' }}
                  >
                    {featured.description}
                  </p>
                )}
              </div>
              {featured.category && (
                <span
                  className="hidden shrink-0 text-xs tracking-[0.2em] text-gold-400 sm:block"
                  style={{ fontFamily: 'var(--font-barlow), sans-serif', textTransform: 'uppercase' }}
                >
                  {featured.category}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid of remaining videos */}
      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: dramaticEase }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2px]" style={{ aspectRatio: '16/9' }}>
                <YouTubeEmbed
                  videoId={video.id}
                  title={video.title}
                  className="absolute inset-0 [&_lite-youtube]{width:100%;height:100%}"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <div>
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
                  {video.description && (
                    <p
                      className="mt-1 text-sm text-text-tertiary"
                      style={{ fontFamily: 'var(--font-libre), serif' }}
                    >
                      {video.description}
                    </p>
                  )}
                </div>
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

        {/* Link to YouTube channel */}
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
            className="inline-flex items-center gap-2 text-sm text-text-tertiary transition-colors duration-300 hover:text-gold-400"
            style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
          >
            Ver más proyectos en YouTube
            <span className="text-xs">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
