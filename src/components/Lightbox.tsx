import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Moment } from '../data/moments';
import type { Lang } from '../data/types';
import { t, ui } from '../i18n';
import { Pic } from './Pic';

/**
 * Full-size, uncropped view of a photograph in a native <dialog>.
 * Escape, the close button, or a click on the backdrop closes it.
 */
export function useLightbox(lang: Lang): { open: (m: Moment) => void; node: ReactNode } {
  const dlg = useRef<HTMLDialogElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [cur, setCur] = useState<Moment | null>(null);
  useEffect(() => {
    if (cur) closeBtn.current?.focus();
  }, [cur]);
  const open = (m: Moment) => {
    setCur(m);
    dlg.current?.showModal();
  };
  const node = (
    <dialog ref={dlg} className="lightbox" onClick={(e) => e.target === dlg.current && dlg.current?.close()} onClose={() => setCur(null)}>
      {cur && (
        <figure>
          <Pic k={cur.key} alt={t(cur.alt, lang)} sizes="100vw" eager />
          <figcaption>
            <span className="mono">{t(cur.caption, lang)}</span>
            <button ref={closeBtn} type="button" className="icon-btn" onClick={() => dlg.current?.close()}>
              {t(ui.journal.close, lang)}
            </button>
          </figcaption>
        </figure>
      )}
    </dialog>
  );
  return { open, node };
}
