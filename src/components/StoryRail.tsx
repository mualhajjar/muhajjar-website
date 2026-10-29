import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import type { Lang, Project } from '../data/types';
import { t, ui } from '../i18n';
import { ProjectStory } from './Blocks';
import { Icon } from './Icon';

/** Same breakpoint as `.rail` in global.css. */
const COMPACT = '(max-width: 760px)';

/**
 * Featured projects.
 * - Wide screens, or no JavaScript: the editorial stacked list, unchanged.
 * - Phones: a swipeable row (CSS scroll-snap) with previous / next buttons and a position counter.
 * Every project stays in the HTML at all times (nothing is hidden from search engines or
 * screen readers), there is no autoplay, and the arrow keys move between projects.
 */
export function StoryRail({ items, lang }: { items: Project[]; lang: Lang }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [compact, setCompact] = useState(false);
  const [index, setIndex] = useState(0);
  const r = ui.rail;

  useEffect(() => {
    const mq = matchMedia(COMPACT);
    const on = () => setCompact(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  // Track the slide that is mostly in view (swipe, buttons, or keyboard focus all move it).
  useEffect(() => {
    const list = listRef.current;
    if (!compact || !list) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setIndex(Number((e.target as HTMLElement).dataset.i));
      },
      { root: list, threshold: 0.6 },
    );
    list.querySelectorAll('.rail-slide').forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, [compact]);

  const go = (i: number) => {
    const list = listRef.current;
    const n = Math.max(0, Math.min(items.length - 1, i));
    const li = list?.children[n] as HTMLElement | undefined;
    if (!list || !li) return;
    const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Scroll only the row, never the page (works the same in RTL and LTR).
    const delta = li.getBoundingClientRect().left - list.getBoundingClientRect().left - (lang === 'ar' ? list.clientWidth - li.offsetWidth : 0);
    list.scrollBy({ left: delta, behavior: smooth ? 'smooth' : 'auto' });
    setIndex(n);
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!compact || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
    // In Arabic the next project sits to the left.
    const forward = (e.key === 'ArrowLeft') === (lang === 'ar');
    e.preventDefault();
    const n = Math.max(0, Math.min(items.length - 1, index + (forward ? 1 : -1)));
    go(n);
    // Keep keyboard focus on the project now in view (only when focus was already inside a slide).
    if ((e.target as HTMLElement).closest('.stories')) listRef.current?.children[n]?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
  };

  const carousel = compact
    ? { role: 'region', 'aria-roledescription': lang === 'ar' ? 'عرض دوّار' : 'carousel', 'aria-label': t(r.label, lang) }
    : {};

  return (
    <div className={compact ? 'rail rail-on' : 'rail'} {...carousel} onKeyDown={onKey}>
      <div ref={listRef} className="stories">
        {items.map((p, i) => (
          <div
            key={p.slug}
            className="rail-slide"
            data-i={i}
            {...(compact ? { role: 'group', 'aria-roledescription': lang === 'ar' ? 'شريحة' : 'slide', 'aria-label': `${i + 1} ${t(r.of, lang)} ${items.length}` } : {})}
          >
            <ProjectStory p={p} lang={lang} index={i} />
          </div>
        ))}
      </div>
      {compact && (
        <div className="rail-ctrl">
          <button type="button" className="icon-btn rail-btn" onClick={() => go(index - 1)} disabled={index === 0} aria-label={t(r.prev, lang)}>
            <Icon name="arrow" />
          </button>
          <p className="mono rail-count" aria-live="polite" aria-atomic="true">
            <span className="sr">{t(r.label, lang)}: </span>
            {index + 1} / {items.length}
          </p>
          <button type="button" className="icon-btn rail-btn" onClick={() => go(index + 1)} disabled={index === items.length - 1} aria-label={t(r.next, lang)}>
            <Icon name="arrow" flip />
          </button>
        </div>
      )}
    </div>
  );
}
