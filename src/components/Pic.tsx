import manifest from '../data/images.json';

type Variant = { src: string; w: number; h: number };
type Entry = { variants: Variant[]; w: number; h: number };
const images = manifest as unknown as Record<string, Entry>;

interface Props {
  k: string;
  alt: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}

/** Responsive WebP image with intrinsic dimensions (no layout shift). */
export function Pic({ k, alt, sizes = '(max-width: 760px) 100vw, 50vw', eager = false, className }: Props) {
  const e = images[k];
  if (!e) throw new Error(`Unknown image key: ${k}`);
  const largest = e.variants[e.variants.length - 1];
  return (
    <img
      className={className}
      src={largest.src}
      srcSet={e.variants.map((v) => `${v.src} ${v.w}w`).join(', ')}
      sizes={sizes}
      width={e.w}
      height={e.h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
    />
  );
}

export const imageMeta = (k: string) => images[k];
