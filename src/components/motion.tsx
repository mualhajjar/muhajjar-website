import { useEffect, useRef, useState } from 'react';
import type { Lang } from '../data/types';

const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Soft reveal for `.rise` elements that start below the fold.
 * Content is fully visible in the HTML; nothing is hidden if JS is off.
 */
export function useReveal() {
  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rise')).filter((el) => el.getBoundingClientRect().top > innerHeight);
    els.forEach((el) => el.classList.add('pre'));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('pre');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/**
 * A number that counts up once when scrolled into view.
 * Renders the final value on the server; animates only if it starts off-screen.
 */
export function CountUp({ value, suffix, lang }: { value: number; suffix: string; lang: Lang }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !('IntersectionObserver' in window)) return;
    if (el.getBoundingClientRect().top < innerHeight) return;
    setShown(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1100;
        const step = (now: number) => {
          const k = Math.min(1, (now - t0) / dur);
          setShown(Math.round(value * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);
  // Western digits in both languages, as in the CVs; Arabic puts the plus sign first, as the Arabic CV does.
  const fmt = (n: number) => (suffix === '%' ? `${n}%` : lang === 'ar' ? `+${n}` : `${n}+`);
  return (
    <span ref={ref} dir="ltr" className="num-v">
      <span aria-hidden="true">{fmt(shown)}</span>
      <span className="sr">{fmt(value)}</span>
    </span>
  );
}
