import { useEffect, useRef, type CSSProperties } from 'react';
import { atWorkVideo, type Moment } from '../data/moments';
import type { Lang } from '../data/types';
import { t, ui } from '../i18n';
import { pathFor } from '../routes';
import { Icon } from './Icon';
import { imageMeta, Pic } from './Pic';
import { useLightbox } from './Lightbox';

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

function Shot({ m, lang, sizes, onOpen }: { m: Moment; lang: Lang; sizes: string; onOpen: (m: Moment) => void }) {
  const meta = imageMeta(m.key);
  const style = meta ? ({ '--native': `${meta.w}px`, '--ar': `${meta.w} / ${meta.h}` } as CSSProperties) : undefined;
  return (
    <figure className="shot rise" style={style}>
      <button type="button" className="shot-frame" onClick={() => onOpen(m)} aria-label={`${t(ui.journal.open, lang)}: ${t(m.alt, lang)}`}>
        <Pic k={m.key} alt={t(m.alt, lang)} sizes={sizes} />
      </button>
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
  const lb = useLightbox(lang);
  if (p.kind === 'wide') {
    return (
      <section className="interlude il-wide wrap" aria-label={t(p.items[0].caption, lang)}>
        <Shot m={p.items[0]} lang={lang} sizes="100vw" onOpen={lb.open} />
        {lb.node}
      </section>
    );
  }
  if (p.kind === 'film') {
    return (
      <section className="interlude il-film wrap" aria-label={t(atWorkVideo.caption, lang)}>
        <Film lang={lang} />
        <Shot m={p.items[0]} lang={lang} sizes="(max-width: 760px) 100vw, 40vw" onOpen={lb.open} />
        <Shot m={p.items[1]} lang={lang} sizes="(max-width: 760px) 100vw, 30vw" onOpen={lb.open} />
        {lb.node}
      </section>
    );
  }
  const cls = p.kind === 'pair' ? 'il-pair' : 'il-trio';
  return (
    <section className={`interlude ${cls} wrap`} aria-label={p.items.map((m) => t(m.caption, lang)).join(' · ')}>
      {p.items.map((m, i) => (
        <Shot key={m.key} m={m} lang={lang} sizes={i === 0 ? '(max-width: 760px) 100vw, 55vw' : '(max-width: 760px) 100vw, 35vw'} onOpen={lb.open} />
      ))}
      {p.more && <More lang={lang} />}
      {lb.node}
    </section>
  );
}
