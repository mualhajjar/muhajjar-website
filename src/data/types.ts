export type Lang = 'ar' | 'en';

/** A string in both languages. */
export interface T {
  ar: string;
  en: string;
}

export interface ImageRef {
  /** Key in images.json */
  key: string;
  alt: T;
  caption?: T;
}

export type ProjectCategory = 'real-estate' | 'brand' | 'events' | 'media' | 'products';

export interface Project {
  slug: string;
  name: T;
  /** One line used on cards and the index. */
  summary: T;
  categories: ProjectCategory[];
  /** Only dates stated in the CV. */
  date?: T;
  /** Context line, e.g. organisation or location — only when stated in the CV. */
  context?: T;
  overview: T;
  role: T;
  scope: T[];
  deliverables: T[];
  /** Verified results only. `value` is shown large. */
  results: { value: string; label: T; note?: T }[];
  /** Campaign performance figures (company-level results), shown separately from project facts. */
  campaign?: { value: string; label: T }[];
  /** Marketing channel mix, with each channel's share of the budget. */
  channels?: { title: T; share: string; items: T[] }[];
  /** Extra titled lists (e.g. plan goals, content standards). */
  sections?: { title: T; items: T[] }[];
  /** Sequential workstreams, each a chain of steps (e.g. a 30-day plan). */
  tracks?: { title: T; note?: T; steps: T[] }[];
  /** Typographic plate when no real imagery is available. */
  plate?: { word: T; sub: T };
  /** Logo shown on the typographic plate. */
  plateLogo?: string;
  cover?: ImageRef;
  gallery?: ImageRef[];
  /** 'grid' crops gallery images to equal tiles (for square or mixed images). */
  galleryLayout?: 'grid';
  /** Short attribution for project imagery. */
  imageSource?: T;
  featured?: boolean;
}

export interface Role {
  title: T;
  company: T;
  location: T;
  start: T;
  end: T;
  promoted?: boolean;
  points: T[];
}
