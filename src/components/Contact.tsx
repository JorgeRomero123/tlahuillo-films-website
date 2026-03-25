'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, AlertCircle } from 'lucide-react';
import { whatsappLinks } from '@/lib/whatsapp';
import { fadeUp, dramaticEase } from '@/lib/motion';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      if (!response.ok) throw new Error('Network error');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="bg-bg-surface-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: dramaticEase }}
        >
          <h2
            className="text-text-primary"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            Hagamos tu próximo video
          </h2>
          <p
            className="mt-4 max-w-2xl text-text-secondary"
            style={{
              fontFamily: 'var(--font-libre), serif',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}
          >
            Cuéntanos qué tienes en mente. Te respondemos en menos de 24 horas con una
            propuesta clara: qué incluye, cuánto cuesta y cuánto tarda. Cubrimos
            Cuernavaca, Morelos y alrededores — y sí, también viajamos.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-5 lg:gap-16">
          {/* WhatsApp CTA — left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2"
          >
            <div className="rounded-[2px] bg-bg-surface-1 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/10">
                <MessageCircle className="h-7 w-7 text-whatsapp" />
              </div>
              <h3
                className="mt-6 text-text-primary"
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '1.4rem',
                }}
              >
                La vía rápida
              </h3>
              <p
                className="mt-3 text-text-secondary"
                style={{
                  fontFamily: 'var(--font-libre), serif',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                Si prefieres ir al grano, escríbenos directo por WhatsApp. Te
                respondemos el mismo día.
              </p>
              <a
                href={whatsappLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-whatsapp px-6 py-4 text-base font-semibold text-bg-page transition-all duration-300 hover:bg-whatsapp/90 hover:shadow-lg"
                style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form — right */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="flex h-full items-center justify-center rounded-[2px] bg-bg-surface-1 p-12">
                <div className="text-center">
                  <div
                    className="text-3xl text-lens-400"
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Mensaje enviado
                  </div>
                  <p
                    className="mt-3 text-text-secondary"
                    style={{
                      fontFamily: 'var(--font-libre), serif',
                      fontSize: '0.95rem',
                    }}
                  >
                    Te respondemos en menos de 24 horas. Gracias por tu interés.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-[2px] bg-bg-surface-1 p-8"
              >
                {/* Web3Forms access key — client will replace this */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Nuevo mensaje desde tlahuillofilms.mx"
                />

                {/* Error banner */}
                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-sm border border-red-900/50 bg-red-950/30 p-4">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <div>
                      <p
                        className="text-sm text-red-300"
                        style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                      >
                        No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directo por WhatsApp.
                      </p>
                      <a
                        href={whatsappLinks.general}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-whatsapp hover:underline"
                        style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Contactar por WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary"
                    style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-sm border border-neutral-700 bg-bg-surface-2 px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-lens-400 focus:outline-none focus:ring-1 focus:ring-lens-400"
                    style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary"
                    style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-sm border border-neutral-700 bg-bg-surface-2 px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-lens-400 focus:outline-none focus:ring-1 focus:ring-lens-400"
                    style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project_type"
                    className="block text-sm font-medium text-text-secondary"
                    style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    className="mt-2 w-full rounded-sm border border-neutral-700 bg-bg-surface-2 px-4 py-3 text-text-primary focus:border-lens-400 focus:outline-none focus:ring-1 focus:ring-lens-400"
                    style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="promocional">Video Promocional</option>
                    <option value="eventos">Cobertura de Evento</option>
                    <option value="redes">Contenido para Redes</option>
                    <option value="documental">Documental / Cortometraje</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary"
                    style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none rounded-sm border border-neutral-700 bg-bg-surface-2 px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-lens-400 focus:outline-none focus:ring-1 focus:ring-lens-400"
                    style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 rounded-sm bg-lens-400 px-7 py-3.5 font-semibold text-bg-page transition-all duration-300 hover:bg-lens-500 hover:shadow-[var(--shadow-accent)] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'var(--font-barlow), sans-serif' }}
                >
                  <Send className="h-4 w-4" />
                  {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
