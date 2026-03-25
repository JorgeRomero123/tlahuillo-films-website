import type { Metadata } from 'next';
import { Bebas_Neue, Libre_Baskerville, Barlow } from 'next/font/google';
import 'lite-youtube-embed/src/lite-yt-embed.css';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre',
  display: 'swap',
});

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tlahuillo Films | Productora de Video en Cuernavaca, Morelos',
  description:
    'Productora audiovisual en Cuernavaca. Videos promocionales, cobertura de eventos, contenido para redes sociales y documentales. Cotiza sin compromiso.',
  openGraph: {
    title: 'Tlahuillo Films | Productora de Video en Cuernavaca, Morelos',
    description:
      'Productora audiovisual en Cuernavaca. Videos promocionales, cobertura de eventos, contenido para redes sociales y documentales. Cotiza sin compromiso.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.tlahuillofilms.mx/',
    siteName: 'Tlahuillo Films Mx',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness'],
  name: 'Tlahuillo Films Mx',
  description: 'Productora audiovisual en Cuernavaca, Morelos.',
  telephone: '+527775347501',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cuernavaca',
    addressRegion: 'Morelos',
    addressCountry: 'MX',
  },
  foundingDate: '2018',
  sameAs: [
    'https://www.facebook.com/tlahuillofilmsmx',
    'https://www.instagram.com/tlahuillofilms/',
    'https://www.youtube.com/@tlahuillofilmsmx',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${libreBaskerville.variable} ${barlow.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#servicios"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-bg-page focus:outline-none"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
