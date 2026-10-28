import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { person } from '../data/profile';
import { t, ui } from '../i18n';
import { other, pathFor, type PageId, type Route } from '../routes';
import { Icon } from './Icon';

const NAV: { page: PageId | 'contact'; key: keyof typeof ui.nav }[] = [
  { page: 'home', key: 'home' },
  { page: 'about', key: 'about' },
  { page: 'experience', key: 'experience' },
  { page: 'projects', key: 'projects' },
  { page: 'work', key: 'work' },
  { page: 'journal', key: 'journal' },
  { page: 'expertise', key: 'expertise' },
  { page: 'contact', key: 'contact' },
];

export function navHref(route: Route, page: PageId | 'contact') {
  return page === 'contact' ? '#contact' : pathFor(route.lang, page);
}

function isCurrent(route: Route, page: PageId | 'contact') {
  if (page === 'contact') return false;
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
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

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
            <img className="logo-dark-ink" src="/assets/images/logo-black.png" alt="" width="371" height="120" />
            <img className="logo-light-ink" src="/assets/images/logo-white.png" alt="" width="371" height="120" />
          </span>
          <span className="brand-name">{t(person.name, lang)}</span>
        </a>
        <nav className="nav" aria-label={t(ui.primaryNav, lang)}>
          {NAV.slice(1).filter((n) => n.page !== 'journal').map((n) => (
            <a key={n.key} href={navHref(route, n.page)} aria-current={isCurrent(route, n.page) ? 'page' : undefined}>
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
      <div id="site-menu" className="overlay" role="dialog" aria-modal="true" aria-label={t(ui.menu, lang)} hidden={!open} onKeyDown={(e) => e.key === 'Escape' && close()}>
        <div className="overlay-top wrap">
          <span className="brand">
            <span className="brand-mark" aria-hidden="true">
              <img src="/assets/images/logo-white.png" alt="" width="371" height="120" />
            </span>
            <span className="brand-name">{t(person.name, lang)}</span>
          </span>
          <button ref={closeRef} type="button" className="icon-btn" onClick={close}>
            {t(ui.close, lang)}
          </button>
        </div>
        <nav className="overlay-nav wrap" aria-label={t(ui.primaryNav, lang)}>
          {NAV.map((n, i) => (
            <a key={n.key} href={navHref(route, n.page)} onClick={() => setOpen(false)} aria-current={isCurrent(route, n.page) ? 'page' : undefined}>
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
