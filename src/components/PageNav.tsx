import { useEffect, useRef, useState } from 'react';
import type { Lang, T } from '../data/types';
import { t, ui } from '../i18n';

export interface PageSection {
  id: string;
  label: T;
}

/** Below this width the links collapse behind a toggle button (matches `.toc` in global.css). */
const COMPACT = '(max-width: 900px)';

/**
 * "On this page" navigation for long pages: real links to section anchors.
 * - Wide screens: a slim strip that sticks under the header.
 * - Narrow screens: a disclosure button (aria-expanded) that opens the same list.
 * - Without JavaScript the strip simply scrolls sideways; every link still works.
 * The current section is highlighted with a cheap, rAF-throttled scroll check.
 */
export function PageNav({ sections, lang }: { sections: PageSection[]; lang: Lang }) {
  const [current, setCurrent] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setReady(true), []);

  // Current section = the last one whose top has passed under the sticky bars.
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const bar = document.querySelector<HTMLElement>('.bar');
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = (bar?.offsetHeight ?? 0) + (navRef.current?.offsetHeight ?? 0) + 40;
      // By position, not list order: on the About page some sections sit side by side
      // on wide screens and stack in a different order on phones.
      let id: string | null = null;
      let best = -Infinity;
      let lowest: HTMLElement = els[0];
      for (const el of els) {
        const top = el.getBoundingClientRect().top;
        if (top <= line && top >= best) {
          best = top;
          id = el.id;
        }
        if (top >= lowest.getBoundingClientRect().top) lowest = el;
      }
      // At the very bottom the last section may never reach the line.
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) id = lowest.id;
      setCurrent((prev) => (prev === id ? prev : id));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [sections]);

  // Compact list: close on Escape (focus back to the button), on a tap outside, and when the screen widens.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      btnRef.current?.focus();
    };
    const onDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const mq = matchMedia(COMPACT);
    const onMq = () => !mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    mq.addEventListener('change', onMq);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const now = sections.find((s) => s.id === current);
  const cls = ['toc', ready && 'toc-js', open && 'toc-open'].filter(Boolean).join(' ');

  return (
    <nav ref={navRef} className={cls} aria-label={t(ui.pageNav.label, lang)}>
      <div className="wrap toc-in">
        <button ref={btnRef} type="button" className="toc-toggle" aria-expanded={open} aria-controls="toc-list" onClick={() => setOpen((o) => !o)}>
          <span className="mono">{t(ui.pageNav.label, lang)}</span>
          {now && (
            <span className="toc-now">
              <span className="sr">: </span>
              {t(now.label, lang)}
            </span>
          )}
          <span className="toc-chev" aria-hidden="true" />
        </button>
        <ol id="toc-list" className="toc-list">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-current={current === s.id ? 'true' : undefined} onClick={() => setOpen(false)}>
                <span className="mono" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{t(s.label, lang)}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
