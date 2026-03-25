declare module 'lite-youtube-embed' {
  // The module registers a custom element, no exports needed
}

declare namespace JSX {
  interface IntrinsicElements {
    'lite-youtube': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        videoid?: string;
        playlabel?: string;
        params?: string;
      },
      HTMLElement
    >;
  }
}
