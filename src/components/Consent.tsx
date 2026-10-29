import { useEffect, useRef, useState } from 'react';
import { CONSENT_EVENT, currentConsent, OPEN_SETTINGS_EVENT, openConsentSettings, setConsent, startAnalytics, type Consent } from '../analytics';
import { TRACKING_ENABLED } from '../config';
import { t, ui } from '../i18n';
import { pathFor, type Route } from '../routes';

/**
 * Consent notice for advertising measurement (Meta Pixel).
 * Rendered only in the browser and only when a Pixel ID is configured, so prerendered
 * pages and search engines never see it. Accept and Decline carry equal weight.
 * It is not a modal: the page stays usable while it is open.
 */
export function ConsentBanner({ route }: { route: Route }) {
  const { lang } = route;
  const c = ui.consent;
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<Consent | null>(null);
  const [manual, setManual] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TRACKING_ENABLED) return;
    startAnalytics();
    const now = currentConsent();
    setState(now);
    if (now === null) setOpen(true);
    const onOpen = () => {
      setState(currentConsent());
      setManual(true);
      setOpen(true);
    };
    const onChange = (e: Event) => setState((e as CustomEvent<Consent>).detail);
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
      window.removeEventListener(CONSENT_EVENT, onChange);
    };
  }, []);

  // Opened from "Privacy settings": move focus in so keyboard users land on the choice.
  useEffect(() => {
    if (open && manual) boxRef.current?.focus();
  }, [open, manual]);

  if (!TRACKING_ENABLED || !open) return null;

  const choose = (v: Consent) => {
    setConsent(v);
    setOpen(false);
    setManual(false);
  };

  return (
    <div
      ref={boxRef}
      className="consent"
      role="region"
      aria-labelledby="consent-title"
      tabIndex={-1}
      onKeyDown={(e) => e.key === 'Escape' && manual && setOpen(false)}
    >
      <div className="consent-in">
        <p id="consent-title" className="consent-title">
          {t(c.title, lang)}
        </p>
        <p className="consent-text">
          {t(c.text, lang)}{' '}
          <a href={pathFor(lang, 'privacy')}>{t(c.more, lang)}</a>
        </p>
        {state && (
          <p className="mono consent-state" aria-live="polite">
            {t(state === 'granted' ? c.stateOn : c.stateOff, lang)}
          </p>
        )}
        <div className="consent-actions">
          <button type="button" className="btn btn-line" onClick={() => choose('denied')}>
            {t(c.decline, lang)}
          </button>
          <button type="button" className="btn btn-line" onClick={() => choose('granted')}>
            {t(c.accept, lang)}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer / privacy-page button that reopens the choice. Hidden when no tracking is configured. */
export function ConsentSettingsButton({ lang, className }: { lang: Route['lang']; className?: string }) {
  if (!TRACKING_ENABLED) return null;
  return (
    <button type="button" className={className ?? 'linkish'} onClick={openConsentSettings}>
      {t(ui.consent.settings, lang)}
    </button>
  );
}
