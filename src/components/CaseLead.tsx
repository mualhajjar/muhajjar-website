import type { CSSProperties } from 'react';
import type { Lang, Project } from '../data/types';
import { t, ui } from '../i18n';
import { Icon } from './Icon';

/** Official film, embedded with Vimeo's player (no autoplay, sound only on the viewer's request). */
export function VimeoFilm({ film, lang }: { film: NonNullable<Project['film']>; lang: Lang }) {
  const title = t(film.title, lang);
  const src = `https://player.vimeo.com/video/${film.vimeoId}?badge=0&autopause=0&dnt=1&title=0&byline=0&portrait=0`;
  return (
    <figure className="film rise">
      <div className="film-frame" style={{ '--ratio': String(film.ratio) } as CSSProperties}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <figcaption>
        <span>{title}</span>
        <a className="link mono" href={`https://vimeo.com/${film.vimeoId}`} target="_blank" rel="noopener">
          {t(ui.projects.filmFallback, lang)} <Icon name="external" />
        </a>
      </figcaption>
    </figure>
  );
}

function Facts({ p, lang }: { p: Project; lang: Lang }) {
  const pr = ui.projects;
  if (!p.facts) return null;
  return (
    <section className="case-sec" aria-labelledby="facts">
      <h2 className="mono label" id="facts">{t(pr.projectFacts, lang)}</h2>
      <div>
        <ul className="fact-cards">
          {p.facts.map((f) => (
            <li key={f.value + f.label.en}>
              <b dir="ltr">{f.value}</b>
              <span>{t(f.label, lang)}</span>
            </li>
          ))}
        </ul>
        <p className="mono fact-src">{t(pr.factsSource, lang)}</p>
      </div>
    </section>
  );
}

/** Body of a leadership case study: project, challenge, leadership, film, outcome, facts. */
export function LeadBody({ p, lang }: { p: Project; lang: Lang }) {
  const pr = ui.projects;
  const lead = p.lead!;
  return (
    <>
      <div className="wrap case-body">
        <section className="case-sec">
          <h2 className="mono label">{t(pr.project, lang)}</h2>
          <p className="case-overview">{t(p.overview, lang)}</p>
        </section>
        {p.factsAt === 'intro' && <Facts p={p} lang={lang} />}
        {p.challenge && (
          <section className="case-sec">
            <h2 className="mono label">{t(pr.challenge, lang)}</h2>
            <p>{t(p.challenge, lang)}</p>
          </section>
        )}
        <section className="case-sec lead-sec" aria-labelledby="leadership">
          <h2 className="mono label" id="leadership">{t(pr.leadership, lang)}</h2>
          <div className="lead-card">
            <p className="mono lead-k">{t(pr.personal, lang)}</p>
            <p className="lead-role">{t(lead.title, lang)}</p>
            <p className="lead-sum">{t(lead.summary, lang)}</p>
          </div>
        </section>
        <section className="case-sec" aria-labelledby="planning">
          <h2 className="mono label" id="planning">{t(pr.planning, lang)}</h2>
          <ol className="lead-groups">
            {lead.groups.map((g, i) => (
              <li key={g.title.en}>
                <h3>
                  <span className="mono" dir="ltr">{String(i + 1).padStart(2, '0')}</span>
                  {t(g.title, lang)}
                </h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.en}>{t(it, lang)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {p.film && (
        <section className="wrap case-film" id="film" aria-labelledby="film-h">
          <h2 className="mono label" id="film-h">{t(pr.film, lang)}</h2>
          <VimeoFilm film={p.film} lang={lang} />
        </section>
      )}

      <div className="wrap case-body">
        {(p.outcome || p.results.length > 0) && (
          <section className="case-sec">
            <h2 className="mono label">{t(pr.outcome, lang)}</h2>
            <div className="outcome">
              {p.outcome && <p>{t(p.outcome, lang)}</p>}
              {p.results.length > 0 && (
                <ul className={p.results.length === 4 ? 'res res-4' : 'res'}>
                  {p.results.map((r) => (
                    <li key={r.value}>
                      <b dir="ltr">{r.value}</b>
                      <span>{t(r.label, lang)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}
        {p.factsAt !== 'intro' && <Facts p={p} lang={lang} />}
        {p.sections && (
          <div className="case-sections">
            {p.sections.map((sec) => (
              <section className="case-sec" key={sec.title.en}>
                <h2 className="mono label">{t(sec.title, lang)}</h2>
                <ul className="ticks">
                  {sec.items.map((it) => (
                    <li key={it.en}>{t(it, lang)}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
        {p.officialUrl && (
          <section className="case-sec">
            <h2 className="mono label">{t(pr.official, lang)}</h2>
            <p>
              <a className="btn btn-line" href={p.officialUrl} target="_blank" rel="noopener">
                {t(pr.official, lang)} · alsoliman.com.sa <Icon name="external" />
              </a>
            </p>
          </section>
        )}
      </div>
    </>
  );
}
