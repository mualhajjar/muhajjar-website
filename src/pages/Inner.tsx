import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { catLabel, Plate, SectionHead } from '../components/Blocks';
import { Icon } from '../components/Icon';
import { Pic } from '../components/Pic';
import { expertiseGroups, process } from '../data/expertise';
import { award, bio, certifications, earlierExperience, education, experience, languages, organisations, person } from '../data/profile';
import { categories, projects } from '../data/projects';
import type { ProjectCategory } from '../data/types';
import { range, t, ui } from '../i18n';
import { pathFor, type Route } from '../routes';

/* ------------------------------------------------------------------ About */
export function About({ route }: { route: Route }) {
  const { lang } = route;
  const a = ui.about;
  return (
    <>
      <section className="wrap page-head">
        <SectionHead as="h1" label={t(a.label, lang)} title={t(a.title, lang)} mute={t(a.titleMute, lang)} />
      </section>

      <section className="wrap chapter split" aria-labelledby="story">
        <figure className="portrait portrait-about">
          <Pic k="portrait" alt={t(ui.portraitAlt, lang)} sizes="(max-width: 860px) 80vw, 30vw" className="portrait-img" />
          <figcaption className="mono">
            <span>{t(person.name, lang)}</span>
            <span>{t(person.title, lang)}</span>
          </figcaption>
        </figure>
        <div className="prose">
          <p className="mono label" id="story">
            {t(a.story, lang)}
          </p>
          {bio.map((b, i) => (
            <p key={i} className={i === 0 ? 'prose-first' : undefined}>
              {t(b, lang)}
            </p>
          ))}
          <div className="cta-row">
            <a className="btn btn-ink" href={person.cvDrive} target="_blank" rel="noopener">
              {t(ui.contact.cvDrive, lang)} <Icon name="external" />
            </a>
          </div>
        </div>
      </section>

      <section className="wrap chapter" aria-labelledby="orgs">
        <SectionHead id="orgs" label={t(a.organisations, lang)} title={t(a.organisations, lang)} />
        <ul className="logos">
          {organisations.map((o) => (
            <li key={o.logo}>
              <img src={`/images/logos/${o.logo}.${o.ext ?? 'webp'}`} alt="" loading="lazy" decoding="async" />
              <span className="mono">{t(o.name, lang)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap chapter cred-grid" aria-label={t(a.education, lang)}>
        <div>
          <h2 className="mini-title" id="education">
            {t(a.education, lang)}
          </h2>
          <ul className="rows">
            {education.map((e) => (
              <li key={e.title.en}>
                <span className="mono">{t(e.dates, lang)}</span>
                <b>{t(e.title, lang)}</b>
                <span>
                  {t(e.school, lang)}
                  {e.note ? ` · ${t(e.note, lang)}` : ''}
                </span>
              </li>
            ))}
          </ul>
          <h2 className="mini-title" id="awards">
            {t(a.awards, lang)}
          </h2>
          <div className="award-card">
            <span className="mono">2022</span>
            <b>{t(award.title, lang)}</b>
            {lang === 'ar' && (
              <span lang="en" dir="ltr" className="award-official">
                {award.official}
              </span>
            )}
            <span>{t(award.detail, lang)}</span>
            <span className="award-note">{t(award.note, lang)}</span>
          </div>
          <h2 className="mini-title" id="languages">
            {t(a.languages, lang)}
          </h2>
          <ul className="rows rows-tight">
            {languages.map((l) => (
              <li key={l.name.en}>
                <b>{t(l.name, lang)}</b>
                <span>{t(l.level, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mini-title" id="certifications">
            {t(a.certifications, lang)}
          </h2>
          <ul className="rows">
            {certifications.map((c) => (
              <li key={c.title.en}>
                <span className="mono">{c.year ?? '—'}</span>
                <b>{t(c.title, lang)}</b>
                {c.issuer && <span>{t(c.issuer, lang)}</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------- Experience */
export function Experience({ route }: { route: Route }) {
  const { lang } = route;
  const x = ui.experience;
  return (
    <>
      <section className="wrap page-head">
        <SectionHead as="h1" label={t(x.label, lang)} title={t(x.title, lang)} mute={t(x.titleMute, lang)} />
      </section>
      <section className="wrap chapter" aria-label={t(x.label, lang)}>
        <ol className="timeline">
          {experience.map((r) => (
            <li key={r.title.en + r.start.en} className="role rise">
              <div className="role-meta">
                <span className="mono">{range(r.start, r.end, lang)}</span>
                <span className="role-co">{t(r.company, lang)}</span>
                <span className="mono">{t(r.location, lang)}</span>
                {r.promoted && <span className="tag">{t(x.promoted, lang)}</span>}
              </div>
              <div className="role-body">
                <h2>{t(r.title, lang)}</h2>
                <ul>
                  {r.points.map((p) => (
                    <li key={p.en}>
                      {t(p, lang)}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <h2 className="mini-title">{t(x.earlier, lang)}</h2>
        <ul className="rows">
          {earlierExperience.map((r) => (
            <li key={r.title.en}>
              <span className="mono">{range(r.start, r.end, lang)}</span>
              <b>{t(r.title, lang)}</b>
              <span>{t(r.company, lang)}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

/* --------------------------------------------------------------- Projects */
export function Projects({ route }: { route: Route }) {
  const { lang } = route;
  const pr = ui.projects;
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const peek = useRef<HTMLDivElement>(null);
  const [peekSrc, setPeekSrc] = useState<string | null>(null);
  const [fine, setFine] = useState(false);

  useEffect(() => setFine(matchMedia('(hover: hover) and (pointer: fine)').matches), []);

  const shown = projects.filter((p) => filter === 'all' || p.categories.includes(filter));
  const move = (e: MouseEvent) => {
    if (peek.current) peek.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  return (
    <>
      <section className="wrap page-head">
        <SectionHead as="h1" label={t(pr.label, lang)} title={t(pr.title, lang)} mute={t(pr.titleMute, lang)} />
      </section>
      <section className="wrap chapter" aria-label={t(pr.label, lang)}>
        <div className="fbar" role="group" aria-label={t(pr.filterLabel, lang)}>
          <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
            {t(pr.filterAll, lang)} <sup>{projects.length}</sup>
          </button>
          {categories.map((c) => (
            <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
              {t(c.label, lang)} <sup>{projects.filter((p) => p.categories.includes(c.id)).length}</sup>
            </button>
          ))}
        </div>
        <p className="sr" aria-live="polite">
          {shown.length} {t(pr.count, lang)}
        </p>
        <ul className="index" onMouseMove={fine ? move : undefined}>
          {shown.map((p) => {
            const n = projects.indexOf(p) + 1;
            return (
              <li key={p.slug}>
                <a
                  href={pathFor(lang, 'project', p.slug)}
                  onMouseEnter={() => fine && setPeekSrc(p.cover ? `/images/projects/${p.cover.key}-720.webp` : null)}
                  onMouseLeave={() => setPeekSrc(null)}
                >
                  <span className="thumb" aria-hidden="true">
                    {p.cover ? <Pic k={p.cover.key} alt="" sizes="96px" /> : <Plate p={p} lang={lang} compact />}
                  </span>
                  <span className="n mono">{String(n).padStart(2, '0')}</span>
                  <span className="ti">{t(p.name, lang)}</span>
                  <span className="su">{t(p.summary, lang)}</span>
                  <span className="k mono">{catLabel(p, lang)}</span>
                  <span className="go">
                    <Icon name="arrow" flip />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <div ref={peek} className={peekSrc ? 'peek on' : 'peek'} aria-hidden="true">
          {peekSrc && <img src={peekSrc} alt="" />}
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------- Project detail */
export function ProjectDetail({ route }: { route: Route }) {
  const { lang } = route;
  const pr = ui.projects;
  const i = projects.findIndex((p) => p.slug === route.slug);
  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return (
    <article>
      <header className="wrap case-head">
        <a className="mono back" href={pathFor(lang, 'projects')}>
          <Icon name="arrow" /> {t(pr.back, lang)}
        </a>
        <p className="mono label">
          {catLabel(p, lang)}
          {p.date ? ` · ${t(p.date, lang)}` : ''}
          {p.context ? ` · ${t(p.context, lang)}` : ''}
        </p>
        <h1 className="case-title">{t(p.name, lang)}</h1>
        <p className="lead case-lead">{t(p.summary, lang)}</p>
      </header>
      <div className="wrap case-cover">
        {p.cover ? <Pic k={p.cover.key} alt={t(p.cover.alt, lang)} sizes="100vw" eager /> : <Plate p={p} lang={lang} big />}
      </div>

      <div className="wrap case-body">
        <section className="case-sec">
          <h2 className="mono label">{t(pr.overview, lang)}</h2>
          <p className="case-overview">{t(p.overview, lang)}</p>
        </section>
        <section className="case-sec">
          <h2 className="mono label">{t(pr.role, lang)}</h2>
          <p>{t(p.role, lang)}</p>
        </section>
        <div className="case-lists">
          <section className="case-sec">
            <h2 className="mono label">{t(pr.scope, lang)}</h2>
            <ul className="ticks">
              {p.scope.map((s) => (
                <li key={s.en}>
                  {t(s, lang)}
                </li>
              ))}
            </ul>
          </section>
          <section className="case-sec">
            <h2 className="mono label">{t(pr.deliverables, lang)}</h2>
            <ul className="ticks">
              {p.deliverables.map((s) => (
                <li key={s.en}>{t(s, lang)}</li>
              ))}
            </ul>
          </section>
        </div>
        {p.results.length > 0 && (
          <section className="case-sec">
            <h2 className="mono label">{t(pr.results, lang)}</h2>
            <ul className="res">
              {p.results.map((r) => (
                <li key={r.value}>
                  <b dir="ltr">{r.value}</b>
                  <span>{t(r.label, lang)}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {p.gallery && p.gallery.length > 0 && (
        <section className="wrap case-gallery" aria-labelledby="imagery">
          <h2 className="mono label" id="imagery">
            {t(pr.imagery, lang)}
          </h2>
          <div className={`gal gal-${Math.min(p.gallery.length, 3)}`}>
            {p.gallery.map((g) => (
              <figure key={g.key} className="rise">
                <Pic k={g.key} alt={t(g.alt, lang)} sizes="(max-width: 760px) 100vw, 45vw" />
                {g.caption && <figcaption>{t(g.caption, lang)}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}
      {p.imageSource && (
        <p className="wrap mono source">{t(p.imageSource, lang)}</p>
      )}

      <nav className="wrap case-nav" aria-label={t(pr.label, lang)}>
        <a href={pathFor(lang, 'project', prev.slug)} rel="prev">
          <span className="mono">{t(pr.prev, lang)}</span>
          <b>{t(prev.name, lang)}</b>
        </a>
        <a href={pathFor(lang, 'project', next.slug)} rel="next" className="next">
          <span className="mono">{t(pr.next, lang)}</span>
          <b>{t(next.name, lang)}</b>
        </a>
      </nav>
    </article>
  );
}

/* -------------------------------------------------------------- Expertise */
export function Expertise({ route }: { route: Route }) {
  const { lang } = route;
  const e = ui.expertise;
  return (
    <>
      <section className="wrap page-head">
        <SectionHead as="h1" label={t(e.label, lang)} title={t(e.title, lang)} mute={t(e.titleMute, lang)} />
      </section>
      <section className="wrap chapter" aria-label={t(e.label, lang)}>
        <div className="groups">
          {expertiseGroups.map((g, i) => (
            <article className="group rise" key={g.id}>
              <p className="mono">{String(i + 1).padStart(2, '0')}</p>
              <h2>{t(g.title, lang)}</h2>
              <p className="group-text">{t(g.text, lang)}</p>
              <ul>
                {g.items.map((it) => (
                  <li key={it.en}>
                    {t(it, lang)}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap chapter" aria-labelledby="process">
        <SectionHead id="process" label={t(e.process, lang)} title={t(e.process, lang)} />
        <ol className="steps">
          {process.map((s, i) => (
            <li className="step rise" key={s.title.en}>
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t(s.title, lang)}</h3>
              <p>{t(s.text, lang)}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

/* --------------------------------------------------------------- 404 page */
export function NotFound({ route }: { route: Route }) {
  const { lang } = route;
  return (
    <section className="wrap page-head nf">
      <p className="mono label">404</p>
      <h1 className="sec-title">{t(ui.notfound.title, lang)}</h1>
      <p className="lead">{t(ui.notfound.text, lang)}</p>
      <div className="cta-row">
        <a className="btn btn-ink" href={pathFor(lang, 'home')}>
          {t(ui.notfound.home, lang)}
        </a>
      </div>
    </section>
  );
}
