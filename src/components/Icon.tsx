import type { ReactNode } from 'react';

type Name = 'arrow' | 'mail' | 'whatsapp' | 'linkedin' | 'link' | 'phone' | 'download' | 'theme' | 'external';

const paths: Record<Name, ReactNode> = {
  arrow: <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />,
  external: <path d="M5 11l6-6M6 5h5v5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />,
  mail: (
    <>
      <rect x="2" y="3.5" width="12" height="9" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.5 4.5L8 9l5.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M8 2a6 6 0 0 0-5.2 9l-.8 3 3.1-.8A6 6 0 1 0 8 2z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M6 5.6c.2-.3.6-.3.7 0l.4 1c.1.2 0 .4-.2.6l-.3.3c.4.8 1 1.4 1.8 1.8l.3-.3c.2-.2.4-.2.6-.1l1 .4c.3.1.3.5 0 .7-.5.5-1.2.7-1.9.4A5.6 5.6 0 0 1 5.6 7.5c-.3-.7-.1-1.4.4-1.9z" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2" y="2" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 7v4M5 5v.01M7.5 11V7m0 1.8c0-1 .7-1.8 1.6-1.8S10.5 7.6 10.5 8.6V11" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  link: (
    <path d="M6.5 9.5l3-3M7 4.5l1-1a2.5 2.5 0 0 1 3.5 3.5l-1 1M9 11.5l-1 1A2.5 2.5 0 0 1 4.5 9l1-1" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  ),
  phone: (
    <path d="M4.5 2.5h2l1 3-1.3.9a7 7 0 0 0 3.4 3.4l.9-1.3 3 1v2a1.5 1.5 0 0 1-1.6 1.5A10.5 10.5 0 0 1 3 4.1 1.5 1.5 0 0 1 4.5 2.5z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  ),
  download: <path d="M8 2.5v8M4.5 7L8 10.5 11.5 7M3 13.5h10" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />,
  theme: (
    <>
      <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 2.5a5.5 5.5 0 0 1 0 11z" fill="currentColor" />
    </>
  ),
};

/** Decorative 16px line icon. `flip` mirrors it in RTL (for directional arrows). */
export function Icon({ name, flip = false, size = 16 }: { name: Name; flip?: boolean; size?: number }) {
  return (
    <svg className={flip ? 'ico ico-flip' : 'ico'} width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
