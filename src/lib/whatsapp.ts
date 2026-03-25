const PHONE = '527775347501';

export const whatsappLinks = {
  promocional: `https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, Tlahuillo Films. Me interesa un video promocional para mi negocio. ¿Podrían darme información sobre paquetes y precios? Gracias.')}`,
  eventos: `https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, Tlahuillo Films. Estoy buscando cobertura de video para un evento. ¿Podrían compartirme su disponibilidad y costos? Gracias.')}`,
  redes: `https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, Tlahuillo Films. Necesito contenido de video para mis redes sociales. ¿Qué opciones manejan y cuáles son sus precios? Gracias.')}`,
  documental: `https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, Tlahuillo Films. Tengo un proyecto de documental/cortometraje y me gustaría platicar sobre cómo podrían apoyarme. ¿Podemos agendar una llamada? Gracias.')}`,
  general: `https://wa.me/${PHONE}?text=${encodeURIComponent('Hola, Tlahuillo Films. Me interesa conocer más sobre sus servicios de producción de video. Gracias.')}`,
} as const;
