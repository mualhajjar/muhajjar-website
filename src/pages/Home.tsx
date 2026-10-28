import { CountUp } from '../components/motion';
import { Icon } from '../components/Icon';
import { Pic } from '../components/Pic';
import { Interlude } from '../components/Interlude';
import { moments as M } from '../data/moments';
import { ProjectStory, SectionHead } from '../components/Blocks';
import { expertiseGroups } from '../data/expertise';
import { award, experience, hero, metrics, overview, person } from '../data/profile';
import { featuredProjects, projects } from '../data/projects';
import { range, t, ui } from '../i18n';
import { pathFor, type Route } from '../routes';

/** Years where a role began (from the CV). */

export function Home({ route }: { route: Route }) {
  const { lang } = route;
  const s = ui.sec;
  return (
    <>
      <section className="hero wrap" aria-labelledby="hero-name">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="mono kicker">
              <span>{t(person.title, lang)}</span>
              <span>{t(ui.kicker, lang)}</span>
            </p>
            <h1 id="hero-name" className="name">
              {t(person.name, lang)}
            </h1>
            <p className="thesis">{t(hero.headline, lang)}</p>
            <p className="lead">{t(hero.lead, lang)}</p>
            <div className="cta-row">
              <a className="btn btn-ink" href={pathFor(lang, 'projects')}>
                {t(ui.ctaExplore, lang)} <Icon name="arrow" flip />
              </a>
              <a className="btn btn-line" href="#contact">
                {t(ui.ctaContact, lang)}
              </a>
              <a className="text-link" href={person.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" /> LinkedIn
              </a>
            </div>
          </div>
          <figure className="portrait">
            <Pic k="portrait" alt={t(ui.portraitAlt, lang)} sizes="(max-width: 860px) 260px, 30vw" eager className="portrait-img" />
            <figcaption className="mono">
              <span>{t(person.name, lang)}</span>
              <span>{t(person.location, lang)}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="wrap metrics-sec" aria-labelledby="metrics-title">
        <div className="brief">
          <p className="mono label" id="metrics-title">
            {t(s.overview, lang)}
          </p>
          <p className="brief-text">{t(overview, lang)}</p>
        </div>
        <ul className="nums" aria-label={t(s.metrics, lang)}>
          {metrics.map((m) => (
            <li className="num" key={m.label.en}>
              <CountUp value={m.value} suffix={m.suffix} lang={lang} />
              <span className="num-l">{t(m.label, lang)}</span>
            </li>
          ))}
        </ul>
      </section>

      <Interlude kind="film" items={[M.presentation, M.studio]} lang={lang} />

      <section className="wrap chapter" aria-labelledby="selected-title">
        <SectionHead id="selected-title" label={t(s.selected, lang)} title={t(s.selectedTitle, lang)} mute={t(s.selectedTitleMute, lang)}>
          <a className="link head-link" href={pathFor(lang, 'projects')}>
            {t(s.allProjects, lang)} ({projects.length}) <Icon name="arrow" flip />
          </a>
        </SectionHead>
        <div className="stories">
          {featuredProjects.map((p, i) => (
            <ProjectStory key={p.slug} p={p} lang={lang} index={i} />
          ))}
        </div>
      </section>

      <Interlude kind="wide" items={[M.event]} lang={lang} />

      <section className="wrap chapter" aria-labelledby="expertise-title">
        <SectionHead id="expertise-title" label={t(s.expertise, lang)} title={t(s.expertiseTitle, lang)} mute={t(s.expertiseTitleMute, lang)}>
          <a className="link head-link" href={pathFor(lang, 'expertise')}>
            {t(s.allExpertise, lang)} <Icon name="arrow" flip />
          </a>
        </SectionHead>
        <div className="caps">
          {expertiseGroups.map((g, i) => (
            <article className="cap rise" key={g.id}>
              <p className="mono">{String(i + 1).padStart(2, '0')}</p>
              <h3>{t(g.title, lang)}</h3>
              <p>{t(g.text, lang)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap chapter" aria-labelledby="career-title">
        <SectionHead id="career-title" label={t(s.career, lang)} title={t(s.careerTitle, lang)} mute={t(s.careerTitleMute, lang)}>
          <a className="link head-link" href={pathFor(lang, 'experience')}>
            {t(s.fullExperience, lang)} <Icon name="arrow" flip />
          </a>
        </SectionHead>
        <ol className="xp-mini">
          {experience.map((r) => (
            <li key={r.title.en + r.start.en}>
              <span className="mono">{range(r.start, r.end, lang)}</span>
              <b>{t(r.title, lang)}</b>
              <span>{t(r.company, lang)}</span>
            </li>
          ))}
        </ol>
        <div className="award-line rise">
          <span className="mono">{t(s.award, lang)} · 2022</span>
          <div>
            <b>{t(award.title, lang)}</b>
            {lang === 'ar' && (
              <span lang="en" dir="ltr" className="award-official">
                {award.official}
              </span>
            )}
            <span>{t(award.detail, lang)}</span>
            <span className="award-note">{t(award.note, lang)}</span>
          </div>
        </div>
      </section>

      <Interlude kind="trio" items={[M.gathering, M.site, M.awards]} lang={lang} more />
    </>
  );
}
