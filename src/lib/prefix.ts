export const basePath = process.env.NODE_ENV === 'production' ? '/tlahuillo-films-website' : '';

export function withPrefix(path: string) {
  return `${basePath}${path}`;
}
