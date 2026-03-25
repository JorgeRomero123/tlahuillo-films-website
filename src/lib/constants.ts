export const services = [
  {
    id: 'promocional' as const,
    title: 'Videos Promocionales',
    description:
      'Hacemos que tu negocio se vea como se siente estar ahí. Videos pensados para vender, posicionar y conectar con tu audiencia — desde el guion hasta la entrega final lista para publicar.',
    icon: 'Clapperboard' as const,
    whatsapp: 'promocional' as const,
  },
  {
    id: 'eventos' as const,
    title: 'Cobertura de Eventos',
    description:
      'Capturamos lo que pasa cuando la gente se junta: la energía, los detalles, los momentos que no se repiten. Ya sea un festival cultural, una boda o un evento corporativo, nos encargamos de que quede registrado con calidad profesional.',
    icon: 'Camera' as const,
    whatsapp: 'eventos' as const,
  },
  {
    id: 'redes' as const,
    title: 'Contenido para Redes',
    description:
      'Reels, cápsulas, videos cortos — formateados y optimizados para cada plataforma. Nada de grabar por grabar: planeamos cada pieza para que funcione dentro de tu estrategia de comunicación.',
    icon: 'Smartphone' as const,
    whatsapp: 'redes' as const,
  },
  {
    id: 'documental' as const,
    title: 'Documentales y Cortometrajes',
    description:
      'Contamos historias que importan. Si tienes un proyecto documental, un cortometraje o una idea que necesita tiempo, investigación y sensibilidad para tomar forma, este es nuestro terreno.',
    icon: 'Film' as const,
    whatsapp: 'documental' as const,
  },
] as const;

export const steps = [
  {
    title: 'Platicamos',
    description:
      'Nos cuentas qué necesitas, para quién es y cuál es tu presupuesto. Sin compromiso, sin letra chiquita.',
  },
  {
    title: 'Planeamos',
    description:
      'Definimos el concepto, el guion, las locaciones y el calendario de producción. Aquí es donde tu idea empieza a tomar forma visual.',
  },
  {
    title: 'Grabamos',
    description:
      'Llegamos con equipo profesional, dirección creativa y todo listo. Tú te enfocas en lo tuyo; nosotros nos encargamos de la imagen y el sonido.',
  },
  {
    title: 'Editamos',
    description:
      'Selección de tomas, corrección de color, diseño sonoro, musicalización. Le damos forma final a tu video con el cuidado que merece.',
  },
  {
    title: 'Entregamos',
    description:
      'Recibes tu video en los formatos que necesites, listo para publicar, proyectar o compartir. Y si quieres ajustes, los hacemos.',
  },
] as const;

export const portfolioVideos = [
  {
    id: 'SPNQ-71mTjE',
    title: 'Tlahuillo Films — Showreel',
    description: 'Producción audiovisual independiente desde Cuernavaca, Morelos.',
    category: 'Showreel',
    featured: true,
  },
  {
    id: 'jvo5NoIm_zc',
    title: 'Producción Tlahuillo Films',
    description: '',
    category: 'Producción',
    featured: false,
  },
  {
    id: 'Qv7AeSQCevQ',
    title: 'Cobertura de Evento',
    description: '',
    category: 'Evento',
    featured: false,
  },
  {
    id: 'ZqlBMdwISs8',
    title: 'Video Corporativo',
    description: '',
    category: 'Corporativo',
    featured: false,
  },
  {
    id: 'bvWi32lZkp4',
    title: 'Proyecto Audiovisual',
    description: '',
    category: 'Producción',
    featured: false,
  },
] as const;

export const comparisonData = {
  celular: [
    'Grabas lo que pasa',
    'Audio del ambiente con ruido, viento y eco',
    'Un solo ángulo, sin iluminación controlada',
    'Un archivo en tu galería',
  ],
  productora: [
    'Planeas lo que se va a contar',
    'Sonido limpio, dirigido y musicalizado',
    'Múltiples tomas, iluminación profesional, dirección de cuadro',
    'Un video editado, con color corregido, listo para usar',
  ],
} as const;

export const socialLinks = {
  youtube: 'https://www.youtube.com/channel/UCvLOMGuNkWPH5bk_n7fVlwg',
  instagram: 'https://www.instagram.com/tlahuillofilms/',
  facebook: 'https://www.facebook.com/tlahuillofilmsmx',
} as const;
