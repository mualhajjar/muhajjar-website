import { catLabel } from './components/Blocks';
import { GOOGLE_SITE_VERIFICATION } from './config';
import { award, bio, education, experience, hero, person, SITE_URL } from './data/profile';
import ogCards from './data/og.json';
import { projects } from './data/projects';
import type { Lang, T } from './data/types';
import { t, ui } from './i18n';
import { other, pathFor, type PageId, type Route } from './routes';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const clip = (s: string, n = 158) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n - 1)) + '…');

const L = (ar: string, en: string, lang: Lang) => (lang === 'ar' ? ar : en);

export function meta(route: Route): { title: string; description: string } {
  const { lang } = route;
  const name = t(person.name, lang);
  const title = t(person.title, lang);
  switch (route.page) {
    case 'home':
      return { title: `${name} | ${title}`, description: t(hero.lead, lang) };
    case 'about':
      return { title: L(`نبذة | ${name}`, `About | ${name}`, lang), description: clip(t(bio[2], lang)) };
    case 'experience':
      return {
        title: L(`الخبرات | ${name}`, `Experience | ${name}`, lang),
        description: L(
          'المسار المهني لمنذر الحجار: شركة السليمان العقارية، وحرف جاليري، ووكالة هوية الإعلامية، وخبرات سابقة في التصميم والإنتاج والمبيعات.',
          'Career of Munther AlHajjar: Alsoliman Real Estate Company, Harf Gallery, HAWYIA Agency, and earlier roles in design, production, and sales.',
          lang,
        ),
      };
    case 'projects':
      return {
        title: L(`المشاريع المختارة | ${name}`, `Selected Projects | ${name}`, lang),
        description: L(
          'مشاريع مختارة في العقار واستراتيجية العلامة والفعاليات: السليمان بزنس كمباوند، فلل البدر، سكينة كمباوند، سحاب، وغيرها.',
          'Selected work in real estate, brand strategy, and events: Al-Sulaiman Business Compound, Bader Villas, Sakenah Compound, Sahab, and more.',
          lang,
        ),
      };
    case 'project': {
      const p = projects.find((x) => x.slug === route.slug)!;
      return { title: `${t(p.name, lang)} | ${name}`, description: clip(t(p.overview, lang)) };
    }
    case 'work':
      return {
        title: L(`الأعمال الإعلامية | ${name}`, `Media Work | ${name}`, lang),
        description: L(
          'أعمال إعلامية وتسويقية ضمن فريق وكالة هوية (2019 إلى 2022): حلول إطلاق المشاريع العقارية، والملفات التعريفية، والمسؤولية الاجتماعية، ودليل المشاريع.',
          'Media and marketing work with HAWYIA Agency (2019 to 2022): real-estate launch solutions, corporate profiles, social responsibility, and a project directory.',
          lang,
        ),
      };
    case 'journal':
      return {
        title: L(`يوميات مصوّرة | ${name}`, `Visual Journal | ${name}`, lang),
        description: L(
          'صور من الأرشيف الشخصي لمنذر الحجار: لحظات من المكاتب ومواقع المشاريع والمعارض والفعاليات.',
          'Photographs from Munther AlHajjar’s personal archive: moments from offices, project sites, exhibitions, and events.',
          lang,
        ),
      };
    case 'expertise':
      return {
        title: L(`مجالات الخبرة | ${name}`, `Expertise | ${name}`, lang),
        description: L(
          'إدارة المشاريع والحوكمة، وتطوير الأعمال والتعاقد، والمشتريات وSAP ERP (MM) وBitrix24، والإعلام والعلامة والتسويق العقاري.',
          'Project delivery and governance, business development and contracts, procurement with SAP ERP (MM) and Bitrix24, and media, brand, and real estate marketing.',
          lang,
        ),
      };
    case 'privacy':
      return {
        title: L(`الخصوصية | ${name}`, `Privacy | ${name}`, lang),
        description: L(
          'كيف يتعامل موقع منذر الحجار مع بيانات الزوار: ما يُجمع، وملفات تعريف الارتباط، وخيار الموافقة على قياس الإعلانات أو رفضه.',
          'How Munther AlHajjar’s website handles visitor data: what is collected, cookies, and the choice to accept or decline advertising measurement.',
          lang,
        ),
      };
    default:
      return { title: L(`الصفحة غير موجودة | ${name}`, `Page not found | ${name}`, lang), description: t(hero.lead, lang) };
  }
}

const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;
const EMPLOYER_ID = `${SITE_URL}/#employer`;

/** Page names used in breadcrumbs and WebPage nodes. */
const PAGE_NAME: Record<Exclude<PageId, 'home' | 'project' | 'notfound'>, T> = {
  about: ui.nav.about,
  experience: ui.nav.experience,
  projects: ui.nav.projects,
  work: ui.nav.work,
  journal: ui.nav.journal,
  expertise: ui.nav.expertise,
  privacy: ui.privacy.title,
};

/**
 * Person entity. Every property mirrors something visible on the site (profile data,
 * contact band, About page); nothing here exists only for search engines.
 */
function personLd(lang: Lang) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: person.name.en,
    alternateName: person.name.ar,
    description: t(hero.lead, lang),
    jobTitle: t(person.title, lang),
    url: `${SITE_URL}/`,
    image: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/portrait-900.jpg`, width: 900, height: 900 },
    email: `mailto:${person.email}`,
    telephone: '+966555947624',
    address: { '@type': 'PostalAddress', addressLocality: 'Riyadh', addressCountry: 'SA' },
    worksFor: { '@id': EMPLOYER_ID },
    // Graduates only: a programme still in progress ("Present") is not alumni status.
    alumniOf: education.filter((e) => !/Present/.test(e.dates.en)).map((e) => ({ '@type': 'EducationalOrganization', name: e.school.en })),
    award: `${award.title.en}, ${award.detail.en} (company award; campaign team member)`,
    knowsLanguage: ['ar', 'en'],
    knowsAbout: ['Project Management', 'Business Development', 'RFP Development', 'Contract Negotiation', 'Procurement', 'SAP ERP (MM)', 'Bitrix24 CRM', 'Real Estate Marketing', 'Brand Strategy', 'Media Production', 'Events & Exhibitions'],
    sameAs: [person.linkedin],
  };
}

/** Current employer, as named on the Experience page; the URL is the official site the case studies link to. */
const employerLd = () => ({
  '@type': 'Organization',
  '@id': EMPLOYER_ID,
  name: experience[0].company.en,
  alternateName: experience[0].company.ar,
  url: 'https://alsoliman.com.sa/',
});

const websiteLd = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: person.name.en,
  alternateName: person.name.ar,
  inLanguage: ['ar', 'en'],
  publisher: { '@id': PERSON_ID },
});

function crumbs(route: Route, self: string, last: string) {
  const { lang } = route;
  const items = [{ name: t(person.name, lang), item: SITE_URL + pathFor(lang, 'home') }];
  if (route.page === 'project') items.push({ name: t(ui.nav.projects, lang), item: SITE_URL + pathFor(lang, 'projects') });
  items.push({ name: last, item: self });
  return { '@type': 'BreadcrumbList', '@id': `${self}#breadcrumb`, itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, ...x })) };
}

/** Social preview image: the project cover where there is one, otherwise the site card. */
function ogImage(route: Route) {
  if (route.page === 'project') {
    const p = projects.find((x) => x.slug === route.slug)!;
    const card = (ogCards as Record<string, { src: string; w: number; h: number }>)[p.slug];
    if (p.cover && card) return { url: SITE_URL + card.src, w: card.w, h: card.h, type: 'image/jpeg', alt: t(p.cover.alt, route.lang) };
  }
  return { url: `${SITE_URL}/og-image.jpg`, w: 1200, h: 630, type: 'image/jpeg', alt: `${t(person.name, route.lang)} · ${t(person.title, route.lang)}` };
}

export function head(route: Route): string {
  const { lang } = route;
  const m = meta(route);
  const isNF = route.page === 'notfound';
  const self = SITE_URL + pathFor(lang, route.page, route.slug);
  const alt = SITE_URL + pathFor(other(lang), route.page, route.slug);
  const arUrl = lang === 'ar' ? self : alt;
  const enUrl = lang === 'en' ? self : alt;
  const og = ogImage(route);

  const serif = lang === 'ar' ? 'thmanyahserifdisplay-Bold' : 'thmanyahserifdisplay-Medium';
  const tags = [
    `<link rel="preload" href="/fonts/${serif}.woff2" as="font" type="font/woff2" crossorigin>`,
    '<link rel="preload" href="/fonts/ThmanyahSans-Regular.woff2" as="font" type="font/woff2" crossorigin>',
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}">`,
    isNF ? '<meta name="robots" content="noindex">' : '<meta name="robots" content="index, follow, max-image-preview:large">',
    ...(isNF
      ? []
      : [
          `<link rel="canonical" href="${self}">`,
          `<link rel="alternate" hreflang="ar" href="${arUrl}">`,
          `<link rel="alternate" hreflang="en" href="${enUrl}">`,
          `<link rel="alternate" hreflang="x-default" href="${arUrl}">`,
        ]),
    ...(route.page === 'home' && GOOGLE_SITE_VERIFICATION ? [`<meta name="google-site-verification" content="${esc(GOOGLE_SITE_VERIFICATION)}">`] : []),
    `<meta property="og:type" content="${route.page === 'project' ? 'article' : 'profile'}">`,
    `<meta property="og:site_name" content="${esc(t(person.name, lang))}">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(m.description)}">`,
    `<meta property="og:url" content="${self}">`,
    `<meta property="og:image" content="${og.url}">`,
    `<meta property="og:image:type" content="${og.type}">`,
    `<meta property="og:image:width" content="${og.w}">`,
    `<meta property="og:image:height" content="${og.h}">`,
    `<meta property="og:image:alt" content="${esc(og.alt)}">`,
    `<meta property="og:locale" content="${lang === 'ar' ? 'ar_SA' : 'en_US'}">`,
    `<meta property="og:locale:alternate" content="${lang === 'ar' ? 'en_US' : 'ar_SA'}">`,
    ...(route.page === 'home' || route.page === 'about' ? ['<meta property="profile:first_name" content="Munther">', '<meta property="profile:last_name" content="AlHajjar">'] : []),
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${esc(m.title)}">`,
    `<meta name="twitter:description" content="${esc(m.description)}">`,
    `<meta name="twitter:image" content="${og.url}">`,
    `<meta name="twitter:image:alt" content="${esc(og.alt)}">`,
  ];

  if (!isNF) {
    const pageNode: Record<string, unknown> = {
      '@id': `${self}#webpage`,
      url: self,
      name: m.title,
      description: m.description,
      inLanguage: lang,
      isPartOf: { '@id': SITE_ID },
      ...(route.page !== 'home' ? { breadcrumb: { '@id': `${self}#breadcrumb` } } : {}),
    };
    const graph: object[] = [personLd(lang), employerLd(), websiteLd()];

    if (route.page === 'home' || route.page === 'about') {
      // A page about one person: Google's ProfilePage type, with the Person as its main entity.
      graph.push({ '@type': 'ProfilePage', ...pageNode, mainEntity: { '@id': PERSON_ID }, about: { '@id': PERSON_ID } });
    } else if (route.page === 'projects') {
      graph.push({
        '@type': 'CollectionPage',
        ...pageNode,
        about: { '@id': PERSON_ID },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: projects.length,
          itemListElement: projects.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE_URL + pathFor(lang, 'project', p.slug), name: t(p.name, lang) })),
        },
      });
    } else if (route.page === 'project') {
      const p = projects.find((x) => x.slug === route.slug)!;
      graph.push({ '@type': 'WebPage', ...pageNode, mainEntity: { '@id': `${self}#work` } });
      graph.push({
        '@type': 'CreativeWork',
        '@id': `${self}#work`,
        name: t(p.name, lang),
        description: t(p.overview, lang),
        url: self,
        inLanguage: lang,
        genre: catLabel(p, lang),
        contributor: { '@id': PERSON_ID },
        mainEntityOfPage: { '@id': `${self}#webpage` },
        ...(p.cover ? { image: `${SITE_URL}/assets/images/projects/${p.cover.key}-720.webp` } : {}),
        ...(p.officialUrl ? { sameAs: p.officialUrl } : {}),
      });
    } else {
      graph.push({ '@type': 'WebPage', ...pageNode, about: { '@id': PERSON_ID } });
    }

    if (route.page !== 'home') {
      const last = route.page === 'project' ? t(projects.find((x) => x.slug === route.slug)!.name, lang) : t(PAGE_NAME[route.page as keyof typeof PAGE_NAME], lang);
      graph.push(crumbs(route, self, last));
    }
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.join('\n    ');
}
