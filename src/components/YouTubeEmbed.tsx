'use client';

import { useEffect, useRef } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function YouTubeEmbed({ videoId, title, className = '' }: YouTubeEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    import('lite-youtube-embed').then(() => {
      // lite-youtube-embed registers the custom element on import
    });
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {/* @ts-expect-error - lite-youtube is a web component */}
      <lite-youtube
        videoid={videoId}
        playlabel={`Reproducir: ${title}`}
        style={{ backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)` }}
      />
    </div>
  );
}
