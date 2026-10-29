import type { ReactNode } from 'react';
import { categories } from '../data/projects';
import type { Lang, Project } from '../data/types';
import { t, ui } from '../i18n';
import { pathFor } from '../routes';
import { Icon } from './Icon';
import { Pic } from './Pic';

/** Section heading in the editorial "rail" style: small label + serif title with a muted tail. */
export function SectionHead({ label, title, mute, id, as: H = 'h2', children }: { label: string; title: string; mute?: string; id?: string; as?: 'h1' | 'h2'; children?: ReactNode }) {
  return (
    <div className="sec-head">
      <p className="mono label">{label}</p>
      <H id={id} className="sec-title">
        {title}
        {mute && <span>{mute}</span>}
      </H>
      {children}
    </div>
  );
}

export function catLabel(p: Project, lang: Lang) {
  return p.categories.map((c) => t(categories.find((x) => x.id === c)!.label, lang)).join(' · ');
}

/** Typographic plate used where no real project imagery exists — never a stand-in photo. */
export function Plate({ p, lang, big = false, compact = false }: { p: Project; lang: Lang; big?: boolean; compact?: boolean }) {
  return (
    <div className={big ? 'plate plate-big' : 'plate'} role="img" aria-label={t(p.name, lang)}>
      {p.plateLogo && !compact && <img className="plate-logo" src={`/assets/images/logos/${p.plateLogo}.webp`} alt="" width="160" height="160" loading="lazy" />}
      <b>{p.plate ? t(p.plate.word, lang) : t(p.name, lang)}</b>
      {p.plate && !compact && <small>{t(p.plate.sub, lang)}</small>}
    </div>
  );
}

export function ProjectMedia({ p, lang, sizes, eager }: { p: Project; lang: Lang; sizes?: string; eager?: boolean }) {
  if (p.cover) return <Pic k={p.cover.key} alt={t(p.cover.alt, lang)} sizes={sizes} eager={eager} />;
  return <Plate p={p} lang={lang} />;
}

/** Editorial project row: media + text, used on the home page. */
export function ProjectStory({ p, lang, index }: { p: Project; lang: Lang; index: number }) {
  const lead = p.results[0];
  return (
    <a className="story rise" href={pathFor(lang, 'project', p.slug)}>
      <div className="story-media">
        <ProjectMedia p={p} lang={lang} sizes="(max-width: 760px) 86vw, (max-width: 860px) 100vw, 55vw" />
      </div>
      <div className="story-body">
        <p className="mono">
          {String(index + 1).padStart(2, '0')} · {catLabel(p, lang)}
          {p.date ? ` · ${t(p.date, lang)}` : ''}
        </p>
        <h3>{t(p.name, lang)}</h3>
        <p className="story-sum">{t(p.summary, lang)}</p>
        <div className="story-foot">
          {lead ? (
            <span className="story-metric">
              <b dir="ltr">{lead.value}</b>
              <span>{t(lead.label, lang)}</span>
            </span>
          ) : (
            <span />
          )}
          <span className="link">
            {t(ui.projects.view, lang)} <Icon name="arrow" flip />
          </span>
        </div>
      </div>
    </a>
  );
}
