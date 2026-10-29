import { useEffect, useState } from 'react';
import { person } from '../data/profile';
import { t, ui } from '../i18n';
import { pathFor, type Route } from '../routes';
import { ConsentSettingsButton } from './Consent';
import { Icon } from './Icon';

declare const __BUILD_YEAR__: number;

function CopyEmail({ lang }: { lang: Route['lang'] }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setDone(true);
      window.setTimeout(() => setDone(false), 2200);
    } catch {
      const el = document.getElementById('contact-email');
      if (el) {
        const r = document.createRange();
        r.selectNodeContents(el);
        const s = getSelection();
        s?.removeAllRanges();
        s?.addRange(r);
      }
    }
  };
  return (
    <button type="button" className="copy" onClick={copy} aria-live="polite" data-track="copy-email">
      {done ? t(ui.contact.copied, lang) : t(ui.contact.copy, lang)}
    </button>
  );
}

function Clock() {
  const [now, setNow] = useState('--:--');
  useEffect(() => {
    const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Riyadh', hour: '2-digit', minute: '2-digit' });
    const tick = () => setNow(f.format(new Date()));
    tick();
    const id = window.setInterval(tick, 20000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="clock" dir="ltr">
      {now}
    </span>
  );
}

export function ContactBand({ route }: { route: Route }) {
  const { lang } = route;
  const c = ui.contact;
  const channels = [
    { icon: 'mail' as const, label: c.email, value: person.email, href: `mailto:${person.email}` },
    { icon: 'whatsapp' as const, label: c.whatsapp, value: person.phoneDisplay, href: person.whatsapp, ext: true },
    { icon: 'linkedin' as const, label: c.linkedin, value: 'in/munther-alhajjar', href: person.linkedin, ext: true },
    { icon: 'download' as const, label: c.cvDrive, value: 'muhajjar.com/drive', href: person.cvDrive, ext: true },
  ];
  return (
    <section className="band contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-in">
        <p className="mono label">{t(c.label, lang)}</p>
        <h2 id="contact-title" className="contact-title">
          {t(c.title, lang)}
          <span>{t(c.titleMute, lang)}</span>
        </h2>
        <p className="contact-lead">{t(c.lead, lang)}</p>
        <div className="cta-row">
          <a className="btn btn-light" href={`mailto:${person.email}`}>
            {t(c.write, lang)} <Icon name="arrow" flip />
          </a>
          <a className="btn btn-ghost-light" href={person.whatsapp} target="_blank" rel="noopener noreferrer">
            {t(c.chat, lang)}
          </a>
        </div>
        <div className="mail-row">
          <span id="contact-email" className="mail" dir="ltr">
            {person.email}
          </span>
          <CopyEmail lang={lang} />
        </div>
        <ul className="channels">
          {channels.map((ch) => (
            <li key={ch.href}>
              <a href={ch.href} {...(ch.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <Icon name={ch.icon} />
                <span className="ch-label">{t(ch.label, lang)}</span>
                <span className="ch-value" dir="ltr">
                  {ch.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer({ route }: { route: Route }) {
  const { lang } = route;
  const f = ui.footer;
  return (
    <footer className="band foot">
      <div className="wrap foot-grid">
        <div className="foot-col foot-id">
          <span className="foot-name">{t(person.name, lang)}</span>
          <span className="foot-title">{t(person.title, lang)}</span>
        </div>
        <nav className="foot-col" aria-label={t(f.pages, lang)}>
          <span className="mono">{t(f.pages, lang)}</span>
          <a href={pathFor(lang, 'about')}>{t(ui.nav.about, lang)}</a>
          <a href={pathFor(lang, 'experience')}>{t(ui.nav.experience, lang)}</a>
          <a href={pathFor(lang, 'projects')}>{t(ui.nav.projects, lang)}</a>
          <a href={pathFor(lang, 'work')}>{t(ui.nav.work, lang)}</a>
          <a href={pathFor(lang, 'journal')}>{t(ui.nav.journal, lang)}</a>
          <a href={pathFor(lang, 'expertise')}>{t(ui.nav.expertise, lang)}</a>
          <a href={`${pathFor(lang, 'about')}#certifications`}>{t(ui.nav.certifications, lang)}</a>
        </nav>
        <div className="foot-col">
          <span className="mono">{t(f.elsewhere, lang)}</span>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={person.cvDrive} target="_blank" rel="noopener">
            {t(ui.contact.cvDrive, lang)}
          </a>
          <a href={person.phoneHref} dir="ltr" className="foot-phone">
            {person.phoneDisplay}
          </a>
        </div>
        <div className="foot-col foot-end">
          <span className="mono">{t(f.time, lang)}</span>
          <Clock />
          <span className="foot-loc">{t(person.location, lang)}</span>
        </div>
      </div>
      <div className="wrap legal">
        <span className="mono">
          © {__BUILD_YEAR__} {t(person.name, lang)} · {t(f.rights, lang)}
        </span>
        <span className="legal-links">
          <a className="mono" href={pathFor(lang, 'privacy')}>
            {t(ui.privacy.label, lang)}
          </a>
          <ConsentSettingsButton lang={lang} className="mono linkish" />
          <a className="mono" href="#top">
            {t(f.top, lang)} ↑
          </a>
        </span>
      </div>
    </footer>
  );
}
