/**
 * Meta Pixel, loaded only after the visitor agrees.
 *
 * - Nothing loads, and no cookie is set, while META_PIXEL_ID is empty (see src/config.ts).
 * - With an ID, the Pixel script is requested only after "Accept" in the consent banner.
 *   "Decline", a later withdrawal, or a browser Global Privacy Control signal keep it off.
 * - Automatic event detection (autoConfig) is off, so Meta does not read button text or
 *   page content; only the events below are sent, and none carries personal data.
 *
 * Events
 *   PageView                         every page, after consent
 *   Contact      { method }          email link, copy-email button, WhatsApp, phone
 *   ViewResume   (custom)            résumé link
 *   OutboundClick { destination }    LinkedIn profile (custom)
 */
import { META_PIXEL_ID, TRACKING_ENABLED } from './config';

export type Consent = 'granted' | 'denied';

const KEY = 'mh-consent';
/** Bump when the privacy notice changes in a way that needs asking again. */
const VERSION = 1;
export const CONSENT_EVENT = 'mh-consent-change';
export const OPEN_SETTINGS_EVENT = 'mh-consent-open';

type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue: unknown[][]; push: unknown; loaded: boolean; version: string };
declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

export function storedConsent(): Consent | null {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (v && v.v === VERSION && (v.c === 'granted' || v.c === 'denied')) return v.c;
  } catch {
    /* storage blocked or malformed: treat as no answer yet */
  }
  return null;
}

/** The browser asks sites not to share or sell data: honour it as a "decline" unless the visitor opts in. */
export const gpcOn = () => typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true;

export function currentConsent(): Consent | null {
  return storedConsent() ?? (gpcOn() ? 'denied' : null);
}

let loaded = false;

function loadPixel() {
  if (loaded || !META_PIXEL_ID) return;
  loaded = true;
  // Meta's standard loader, written out: a queue until fbevents.js arrives.
  const q = function (...args: unknown[]) {
    if (q.callMethod) q.callMethod(...args);
    else q.queue.push(args);
  } as Fbq;
  q.push = q;
  q.loaded = true;
  q.version = '2.0';
  q.queue = [];
  window.fbq = q;
  window._fbq = q;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);

  q('consent', 'grant');
  q('set', 'autoConfig', false, META_PIXEL_ID);
  q('init', META_PIXEL_ID);
  q('track', 'PageView');
}

/** Remove Meta's first-party cookies after a withdrawal. */
function clearCookies() {
  const host = location.hostname;
  const domains = ['', host, '.' + host.replace(/^www\./, '')];
  for (const name of ['_fbp', '_fbc']) for (const d of domains) document.cookie = `${name}=; Max-Age=0; path=/${d ? '; domain=' + d : ''}`;
}

export function setConsent(c: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ v: VERSION, c, at: new Date().toISOString().slice(0, 10) }));
  } catch {
    /* the choice then lasts for this page only */
  }
  if (c === 'granted') loadPixel();
  else {
    if (loaded) window.fbq?.('consent', 'revoke');
    clearCookies();
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: c }));
}

const granted = () => loaded && currentConsent() === 'granted';

export function track(event: string, params?: Record<string, string>, custom = false) {
  if (!granted()) return;
  window.fbq?.(custom ? 'trackCustom' : 'track', event, params ?? {});
}

/** Which click means what. Links are matched by address, so no markup needs to change. */
function classify(el: Element): [string, Record<string, string>?, boolean?] | null {
  const tag = (el as HTMLElement).dataset?.track;
  if (tag === 'copy-email') return ['Contact', { method: 'copy_email' }];
  if (!(el instanceof HTMLAnchorElement)) return null;
  const href = el.getAttribute('href') || '';
  if (href.startsWith('mailto:')) return ['Contact', { method: 'email' }];
  if (href.startsWith('tel:')) return ['Contact', { method: 'phone' }];
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return ['Contact', { method: 'whatsapp' }];
  if (/muhajjar\.com\/drive|\/files\/Munther-AlHajjar-CV/.test(href)) return ['ViewResume', undefined, true];
  if (/linkedin\.com\/in\//.test(href)) return ['OutboundClick', { destination: 'linkedin' }, true];
  return null;
}

let started = false;

/** Call once in the browser: loads the Pixel if consent was given earlier, and listens for conversion clicks. */
export function startAnalytics() {
  if (started || !TRACKING_ENABLED) return;
  started = true;
  if (currentConsent() === 'granted') loadPixel();
  document.addEventListener(
    'click',
    (e) => {
      const el = (e.target as Element | null)?.closest('a[href], [data-track]');
      const hit = el && classify(el);
      if (hit) track(hit[0], hit[1], hit[2]);
    },
    { capture: true },
  );
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
