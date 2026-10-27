import { projects } from './data/projects';
import type { Lang } from './data/types';

export type PageId = 'home' | 'about' | 'experience' | 'projects' | 'project' | 'work' | 'expertise' | 'notfound';

export interface Route {
  lang: Lang;
  page: PageId;
  slug?: string;
}

const SEGMENT: Record<Exclude<PageId, 'home' | 'project' | 'notfound'>, string> = {
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  work: 'media-work',
  expertise: 'expertise',
};

/** Arabic is the default language at the root; English lives under /en/. */
export function pathFor(lang: Lang, page: PageId, slug?: string): string {
  const base = lang === 'en' ? '/en/' : '/';
  if (page === 'home') return base;
  if (page === 'notfound') return base;
  if (page === 'project') return `${base}projects/${slug}/`;
  return `${base}${SEGMENT[page]}/`;
}

export function resolve(pathname: string): Route {
  let p = pathname.replace(/index\.html$/, '');
  if (!p.endsWith('/')) p += '/';
  let lang: Lang = 'ar';
  if (p === '/en/' || p.startsWith('/en/')) {
    lang = 'en';
    p = p.slice(3);
  }
  const parts = p.split('/').filter(Boolean);
  if (parts.length === 0) return { lang, page: 'home' };
  if (parts.length === 1) {
    const hit = (Object.keys(SEGMENT) as (keyof typeof SEGMENT)[]).find((k) => SEGMENT[k] === parts[0]);
    if (hit) return { lang, page: hit };
  }
  if (parts.length === 2 && parts[0] === 'projects' && projects.some((x) => x.slug === parts[1])) {
    return { lang, page: 'project', slug: parts[1] };
  }
  return { lang, page: 'notfound' };
}

/** Every prerendered URL (both languages). */
export function allRoutes(): Route[] {
  const out: Route[] = [];
  for (const lang of ['ar', 'en'] as Lang[]) {
    for (const page of ['home', 'about', 'experience', 'projects', 'work', 'expertise'] as PageId[]) out.push({ lang, page });
    for (const p of projects) out.push({ lang, page: 'project', slug: p.slug });
  }
  return out;
}

export const other = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');
