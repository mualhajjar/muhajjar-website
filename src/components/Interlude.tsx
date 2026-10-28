import { useEffect, useRef } from 'react';
import { atWorkVideo, type Moment } from '../data/moments';
import type { Lang } from '../data/types';
import { t, ui } from '../i18n';
import { pathFor } from '../routes';
import { Icon } from './Icon';
import { Pic } from './Pic';

/**
 * Visual pause between sections: real photographs, shown large and quiet.
 * - wide:  one full-bleed photograph
 * - pair:  two photographs, offset
 * - trio:  three photographs in an editorial mosaic
 * - film:  the at-work video beside two photographs
 */
type Props =
  | { kind: 'wide'; items: [Moment]; lang: Lang; more?: boolean }
  | { kind: 'pair'; items: [Moment, Moment]; lang: Lang; more?: boolean }
  | { kind: 'trio'; items: [Moment, Moment, Moment]; lang: Lang; more?: boolean }
  | { kind: 'film'; items: [Moment, Moment]; lang: Lang; more?: boolean };

function More({ lang }: { lang: Lang }) {
  return (
    <a className="link il-more" href={pathFor(lang, 'journal')}>
      {t(ui.journal.more, lang)} <Icon name="arrow" flip />
    </a>
  );
}

function Shot({ m, lang, sizes }: { m: Moment; lang: Lang; sizes: string }) {
  return (
    <figure className="shot rise">
      <div className="shot-frame">
        <Pic k={m.key} alt={t(m.alt, lang)} sizes={sizes} />
      </div>
      <figcaption className="mono">{t(m.caption, lang)}</figcaption>
    </figure>
  );
}

function Film({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Play only while visible, to save battery and data.
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <figure className="shot shot-film rise">
      <div className="shot-frame">
        <video ref={ref} src={atWorkVideo.src} poster={atWorkVideo.poster} muted loop playsInline preload="none" aria-label={t(atWorkVideo.alt, lang)} width={196} height={360} />
      </div>
      <figcaption className="mono">{t(atWorkVideo.caption, lang)}</figcaption>
    </figure>
  );
}

export function Interlude(p: Props) {
  const { lang } = p;
  if (p.kind === 'wide') {
    return (
      <section className="interlude il-wide" aria-label={t(p.items[0].caption, lang)}>
        <Shot m={p.items[0]} lang={lang} sizes="100vw" />
      </section>
    );
  }
  if (p.kind === 'film') {
    return (
      <section className="interlude il-film wrap" aria-label={t(atWorkVideo.caption, lang)}>
        <Film lang={lang} />
        <Shot m={p.items[0]} lang={lang} sizes="(max-width: 760px) 100vw, 40vw" />
        <Shot m={p.items[1]} lang={lang} sizes="(max-width: 760px) 100vw, 30vw" />
      </section>
    );
  }
  const cls = p.kind === 'pair' ? 'il-pair' : 'il-trio';
  return (
    <section className={`interlude ${cls} wrap`} aria-label={p.items.map((m) => t(m.caption, lang)).join(' · ')}>
      {p.items.map((m, i) => (
        <Shot key={m.key} m={m} lang={lang} sizes={i === 0 ? '(max-width: 760px) 100vw, 55vw' : '(max-width: 760px) 100vw, 35vw'} />
      ))}
      {p.more && <More lang={lang} />}
    </section>
  );
}
