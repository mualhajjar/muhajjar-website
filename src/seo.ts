import { award, bio, education, hero, person, SITE_URL } from './data/profile';
import { projects } from './data/projects';
import type { Lang } from './data/types';
import { t } from './i18n';
import { other, pathFor, type Route } from './routes';

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
    default:
      return { title: L(`الصفحة غير موجودة | ${name}`, `Page not found | ${name}`, lang), description: t(hero.lead, lang) };
  }
}

function personLd(lang: Lang) {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: person.name.en,
    alternateName: person.name.ar,
    jobTitle: t(person.title, lang),
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/assets/images/portrait-900.jpg`,
    email: `mailto:${person.email}`,
    telephone: '+966555947624',
    address: { '@type': 'PostalAddress', addressLocality: 'Riyadh', addressCountry: 'SA' },
    worksFor: { '@type': 'Organization', name: 'Alsoliman Real Estate Company' },
    alumniOf: education.map((e) => ({ '@type': 'EducationalOrganization', name: e.school.en })),
    award: `${award.title.en}, ${award.detail.en} (company award; campaign team member)`,
    knowsLanguage: ['ar', 'en'],
    knowsAbout: ['Project Management', 'Business Development', 'RFP Development', 'Contract Negotiation', 'Procurement', 'SAP ERP (MM)', 'Bitrix24 CRM', 'Real Estate Marketing', 'Brand Strategy', 'Media Production', 'Events & Exhibitions'],
    sameAs: [person.linkedin],
  };
}

export function head(route: Route): string {
  const { lang } = route;
  const m = meta(route);
  const isNF = route.page === 'notfound';
  const self = SITE_URL + pathFor(lang, route.page, route.slug);
  const alt = SITE_URL + pathFor(other(lang), route.page, route.slug);
  const arUrl = lang === 'ar' ? self : alt;
  const enUrl = lang === 'en' ? self : alt;
  const og = `${SITE_URL}/og-image.jpg`;

  const serif = lang === 'ar' ? 'thmanyahserifdisplay-Bold' : 'thmanyahserifdisplay-Medium';
  const tags = [
    `<link rel="preload" href="/fonts/${serif}.woff2" as="font" type="font/woff2" crossorigin>`,
    '<link rel="preload" href="/fonts/ThmanyahSans-Regular.woff2" as="font" type="font/woff2" crossorigin>',
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}">`,
    isNF ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${self}">`,
    ...(isNF
      ? []
      : [
          `<link rel="alternate" hreflang="ar" href="${arUrl}">`,
          `<link rel="alternate" hreflang="en" href="${enUrl}">`,
          `<link rel="alternate" hreflang="x-default" href="${arUrl}">`,
        ]),
    `<meta property="og:type" content="${route.page === 'project' ? 'article' : 'profile'}">`,
    `<meta property="og:site_name" content="${esc(t(person.name, lang))}">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(m.description)}">`,
    `<meta property="og:url" content="${self}">`,
    `<meta property="og:image" content="${og}">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    `<meta property="og:image:alt" content="${esc(t(person.name, lang) + ' · ' + t(person.title, lang))}">`,
    `<meta property="og:locale" content="${lang === 'ar' ? 'ar_SA' : 'en_US'}">`,
    `<meta property="og:locale:alternate" content="${lang === 'ar' ? 'en_US' : 'ar_SA'}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${esc(m.title)}">`,
    `<meta name="twitter:description" content="${esc(m.description)}">`,
    `<meta name="twitter:image" content="${og}">`,
  ];

  const graph: object[] = [];
  if (route.page === 'home' || route.page === 'about') {
    graph.push(personLd(lang));
    graph.push({ '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: person.name.en, inLanguage: ['ar', 'en'], publisher: { '@id': `${SITE_URL}/#person` } });
  }
  if (route.page === 'project') {
    const p = projects.find((x) => x.slug === route.slug)!;
    graph.push({
      '@type': 'CreativeWork',
      name: t(p.name, lang),
      description: t(p.overview, lang),
      url: self,
      inLanguage: lang,
      contributor: { '@type': 'Person', name: person.name.en, url: `${SITE_URL}/` },
      ...(p.cover ? { image: `${SITE_URL}/assets/images/projects/${p.cover.key}-720.webp` } : {}),
    });
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t(person.name, lang), item: SITE_URL + pathFor(lang, 'home') },
        { '@type': 'ListItem', position: 2, name: L('المشاريع', 'Projects', lang), item: SITE_URL + pathFor(lang, 'projects') },
        { '@type': 'ListItem', position: 3, name: t(p.name, lang), item: self },
      ],
    });
  }
  if (graph.length) {
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.join('\n    ');
}
