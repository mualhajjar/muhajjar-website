import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import { person } from '../data/profile';
import { t, ui } from '../i18n';
import { other, pathFor, type PageId, type Route } from '../routes';
import { Icon } from './Icon';

type NavItem = { page: PageId | 'contact'; key: keyof typeof ui.nav; hash?: string; desktop?: boolean };

/** `desktop: false` keeps an item out of the compact desktop bar (it stays in the full menu and footer). */
const NAV: NavItem[] = [
  { page: 'home', key: 'home', desktop: false },
  { page: 'about', key: 'about' },
  { page: 'experience', key: 'experience' },
  { page: 'projects', key: 'projects' },
  { page: 'work', key: 'work' },
  { page: 'journal', key: 'journal', desktop: false },
  { page: 'expertise', key: 'expertise' },
  { page: 'about', key: 'certifications', hash: 'certifications' },
  { page: 'contact', key: 'contact' },
];

export function navHref(route: Route, page: PageId | 'contact', hash?: string) {
  if (page === 'contact') return '#contact';
  // Same page: a bare #anchor scrolls without reloading.
  if (hash) return route.page === page ? `#${hash}` : `${pathFor(route.lang, page)}#${hash}`;
  return pathFor(route.lang, page);
}

function isCurrent(route: Route, page: PageId | 'contact', hash?: string) {
  if (page === 'contact' || hash) return false;
  if (page === 'projects') return route.page === 'projects' || route.page === 'project';
  return route.page === page;
}

export function ThemeToggle({ lang }: { lang: Route['lang'] }) {
  const toggle = () => {
    const root = document.documentElement;
    const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    root.classList.add('theme-anim');
    root.dataset.theme = next;
    try {
      localStorage.setItem('mh-theme', next);
    } catch {
      /* storage unavailable: the choice lasts for this page only */
    }
    window.setTimeout(() => root.classList.remove('theme-anim'), 400);
  };
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={t(ui.themeLabel, lang)} title={t(ui.themeLabel, lang)}>
      <Icon name="theme" />
    </button>
  );
}

export function Header({ route }: { route: Route }) {
  const { lang } = route;
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const altHref = pathFor(other(lang), route.page === 'notfound' ? 'home' : route.page, route.slug);

  /** Close the menu and return focus to the button that opened it. */
  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => openRef.current?.focus());
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    // The menu is a mobile layout: if the screen widens to the desktop bar, close it.
    const mq = matchMedia('(min-width: 1081px)');
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onMq);
    return () => {
      document.body.style.overflow = '';
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  /** Escape closes; Tab stays inside the open menu (it is announced as a modal dialog). */
  const onMenuKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') return close();
    if (e.key !== 'Tab') return;
    const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  /** Keep the reader's place: carry the current #section across languages. */
  const keepHash = (e: MouseEvent<HTMLAnchorElement>) => {
    if (location.hash) e.currentTarget.href = altHref + location.hash;
  };

  const langLink = (
    <a className="lang" href={altHref} hrefLang={other(lang)} lang={other(lang)} onClick={keepHash} title={t(ui.langSwitchLabel, lang)}>
      {t(ui.langSwitch, lang)}
    </a>
  );

  return (
    <>
      <a className="skip" href="#main">
        {t(ui.skip, lang)}
      </a>
      <header className="bar wrap">
        <a className="brand" href={pathFor(lang, 'home')}>
          <span className="brand-mark" aria-hidden="true">
            <img className="logo-dark-ink" src="/assets/images/logo-black.webp" alt="" width="222" height="72" />
            <img className="logo-light-ink" src="/assets/images/logo-white.webp" alt="" width="222" height="72" />
          </span>
          <span className="brand-name">{t(person.name, lang)}</span>
        </a>
        <nav className="nav" aria-label={t(ui.primaryNav, lang)}>
          {NAV.filter((n) => n.desktop !== false).map((n) => (
            <a key={n.key} href={navHref(route, n.page, n.hash)} aria-current={isCurrent(route, n.page, n.hash) ? 'page' : undefined}>
              {t(ui.nav[n.key], lang)}
            </a>
          ))}
        </nav>
        <div className="bar-tools">
          {langLink}
          <ThemeToggle lang={lang} />
          <button ref={openRef} type="button" className="icon-btn menu-btn" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
            {t(ui.menu, lang)}
          </button>
        </div>
      </header>
      <div id="site-menu" className="overlay" role="dialog" aria-modal="true" aria-label={t(ui.menu, lang)} hidden={!open} onKeyDown={onMenuKey}>
        <div className="overlay-top wrap">
          <span className="brand">
            <span className="brand-mark" aria-hidden="true">
              <img src="/assets/images/logo-white.webp" alt="" width="222" height="72" />
            </span>
            <span className="brand-name">{t(person.name, lang)}</span>
          </span>
          <button ref={closeRef} type="button" className="icon-btn" onClick={close}>
            {t(ui.close, lang)}
          </button>
        </div>
        <nav className="overlay-nav wrap" aria-label={t(ui.primaryNav, lang)}>
          {NAV.map((n, i) => (
            <a key={n.key} href={navHref(route, n.page, n.hash)} onClick={() => setOpen(false)} aria-current={isCurrent(route, n.page, n.hash) ? 'page' : undefined}>
              <span>{t(ui.nav[n.key], lang)}</span>
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
            </a>
          ))}
        </nav>
        <div className="overlay-foot wrap">
          {langLink}
          <span className="mono">{t(person.location, lang)}</span>
        </div>
      </div>
    </>
  );
}
