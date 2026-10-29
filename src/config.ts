/**
 * Site integrations that need a value from the site owner.
 *
 * Each value can be set in one of two ways (the build variable wins):
 *   1. A build variable. On GitHub: Settings → Secrets and variables → Actions → Variables,
 *      add VITE_META_PIXEL_ID / VITE_GOOGLE_SITE_VERIFICATION. The publish workflow passes them to the build.
 *   2. The constants below, then rebuild.
 *
 * Empty values switch the integration off completely: no script, no cookie, no consent banner.
 * See ANALYTICS.md for the setup and how to check that it works.
 */

/** Meta Pixel (Facebook/Instagram ads) dataset ID: digits only, from Meta Events Manager. */
const META_PIXEL_ID_IN_FILE = '';

/**
 * Google Search Console "HTML tag" token (the content="…" value only), used only if you verify
 * with the HTML-tag method. Domain verification through DNS needs nothing here.
 */
const GOOGLE_SITE_VERIFICATION_IN_FILE = '';

const env = (import.meta.env ?? {}) as Record<string, string | undefined>;
const pick = (fromEnv: string | undefined, fromFile: string) => (fromEnv ?? '').trim() || fromFile.trim();

const rawPixel = pick(env.VITE_META_PIXEL_ID, META_PIXEL_ID_IN_FILE);
/** A malformed ID is ignored (the Pixel stays off) rather than shipped broken. */
export const META_PIXEL_ID = /^\d{8,20}$/.test(rawPixel) ? rawPixel : '';
export const META_PIXEL_INVALID = rawPixel !== '' && META_PIXEL_ID === '';

const rawGsc = pick(env.VITE_GOOGLE_SITE_VERIFICATION, GOOGLE_SITE_VERIFICATION_IN_FILE);
export const GOOGLE_SITE_VERIFICATION = /^[A-Za-z0-9_-]{20,100}$/.test(rawGsc) ? rawGsc : '';

/** True when any tracking is configured: shows the consent banner and the privacy settings link. */
export const TRACKING_ENABLED = META_PIXEL_ID !== '';
