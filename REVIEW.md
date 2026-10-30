# Design & production review — October 2026

## Starting point (what was audited)

- Three concept artifacts: *Studio* (grey paper, heavy Arabic display, rail chapters, ink bands), *Folio* (serif editorial chapters, work index with hover preview, light/dark), *Signature* (the hybrid of both). All three were opened and read in full.
- The live site muhajjar.com: a single long page (`index.html` with Tailwind from a CDN), Arabic with an English toggle.
- The Arabic and English CVs (source of truth) and the project files (HAWYIA portfolios, the IPA submission for Bader Villas, the HAWYIA project list).
- No React/Vite build of the brief existed in this project or in earlier conversations, so this delivery builds it, keeping the *Signature* visual language.

## What changed against the concepts

**Structure (your main note)** — the home page is now short: hero → six metrics → four featured projects → four capability groups → a five-line career summary with the award → contact. Full detail moved to its own pages: About (story, education, certifications, award, languages, organisations), Experience (full timeline), Projects (index + 10 case studies), Expertise.

**Design** — warm ivory/charcoal/deep-navy/bronze palette (brief) instead of grey paper; grain overlay removed; display name reduced from 262 px to a calmer scale; squared buttons; hairline grids kept; one serif family across both languages for consistency; typographic plates instead of stand-in photos where no project imagery exists.

**Content removed because the CVs do not support it**
- The quote attributed to you («كل عقد أوقّعه يبدأ بسؤالين…») — invented.
- "Dubai" as the award location; "PMP 2025" (CV: 2024); Bader figures 89.9M / 54.3M / 11.5M and the 60/40 budget split (from the award PDF, not the CV); site area 95,000 m².
- The 37-project HAWYIA directory, the Al-Basateen 30-day digital plan, the launch-tools grid, Harf customer journey, and external links to Vimeo/X (not verifiable from the CVs).
- (Restored on request, 28 Oct 2026) the eight logos from the live site that are not in the CVs: Al-Khoyool, Al-Buyut Al-Maktabiya, Al-Nakhla, Al-Mashreq, Riyadh Front, Qusour Al-Amariyah, Bader Contracting, Al-Subaie Charity.

**Bugs fixed from the concepts / live site**
- Arabic text had letter-spacing applied (breaks Arabic letter joining) — removed for Arabic.
- Language switch had no target on the live site — now a real link to the same page in the other language, preserving `#section`.
- Generic image alts on the live site ("Event", "Portrait") — every image now has a meaningful alt in both languages.
- Mixed Arabic/Latin lines with parentheses (award, PMP) rendered out of order in RTL — rewritten.
- Dividers that ran past the content margins — inset to the grid.

## Flagged for your review (not changed silently)

1. **Bader Villas figures — resolved 28 Oct 2026.** On your instruction the case study now uses the award-submission data: 95,000+ m² site, 83,000+ m² built-up area, 89.9M impressions, 54.3M views, 11.5M website visits, 1.39M buyer messages and calls, and the 40% on-ground / 60% digital channel mix. The CVs still say "1.39M+ impressions"; update them to "1.39M+ buyer messages and calls".
2. **Overlapping dates.** Harf Gallery (Oct 2021 – Apr 2022) overlaps HAWYIA Media Project Manager (Oct 2020 – Apr 2022). Shown exactly as in the CV; confirm they were concurrent.
3. **Job title — resolved 30 Oct 2026.** Confirmed by the owner: *مدير المشاريع الإعلامية وتطوير الأعمال* / *Media Project Manager & Business Development*, as already used in `person.title`. No change needed.
4. **Portrait.** The only portrait available is `memories/memory-15-portrait.jpg` from the current site. Please confirm it is you and that you want it used. Its orange background has a fine line pattern that can shimmer when scaled; a photo on a plain background would look better.
5. **Yamam "visual identity".** The brief lists it; the CVs mention brand strategy and multi-channel marketing only. Kept because the brief comes from you — remove it if not accurate.
6. **Project dates.** Only Business Compound (Dec 2025), Sukina (Mar 2026), and the Bader award (2022) have dates in the CVs; other projects show none rather than guessed years.
7. **CV PDFs** in `public/files/` are the ones currently on muhajjar.com (generated 14 Oct 2026). Replace them if the CVs have changed since.
8. **Thmanyah font licence.** The font files carry Thmanyah's own licence text; confirm it permits use on a personal website.

## Verification performed (this build)

- `npm run build` passes (TypeScript strict, Vite, prerender of 30 pages + 2 × 404). Also built and tested with React itself (`USE_REACT=1`).
- Automated browser crawl of all 30 pages: HTTP 200, correct `lang`/`dir` per language, one `h1` per page, valid canonical + `hreflang` (ar, en, x-default), valid JSON-LD, meta descriptions present, no images without alt, no broken images after lazy loading, no dangling `#` anchors, CV/cover PDFs reachable, no console errors or warnings, no horizontal overflow.
- Interactions tested in a real browser: theme toggle and persistence across pages, project filter counts, language switch keeping page and `#section`, mobile menu (open, focus, Escape, focus return, navigation), copy-email, skip link as first focus.
- Visual review at 375, 390, 768, and 1440 px in Arabic and English, light and dark.
- Lighthouse (mobile, simulated slow 4G, local server with gzip): Accessibility 100, Best Practices 100, SEO 100, Performance 83–88 (LCP ≈ 3.5 s, CLS ≈ 0).

## Not verified

- Deployment to Hostinger, DNS, and HTTPS (not performed from here). The `.htaccess` was written for Apache/LiteSpeed but has not run on Hostinger's servers.
- Real devices and Safari/Firefox (tests used Chromium).
- External links were checked for correct URLs, not fetched (LinkedIn/WhatsApp block automated requests).

## Update — 28 Oct 2026: HAWYIA media files and the marketing plan

On your instruction, the HAWYIA media PDFs and the digital marketing plan are now used on the site:

- **New page: Media Work** (`/media-work/`, `/en/media-work/`) — real-estate launch solutions (12 items, from *Marketing Solutions 2020*), profiles and reports (4, from *Profiles & Annual Reports*), social responsibility (4, from the 2021 CSR presentation), and a filterable directory of the 38 projects in your HAWYIA list.
- **New case study: Harf Gallery** — collections catalogue (A+, A, B, S), desktop and oud gifts, companion items, the three-step B2B client journey, and six images from the Harf catalogues.
- **Al-Basateen case study** — goals, content standards, platforms, and the 30-day workstreams (social, website, Google) from *الخطة التسويقية الجديدة*.

Kept out on purpose: the HAWYIA team photos, client logos sheets, financial proposal, and any page showing third-party people without context. Several HAWYIA proposals (e.g. the launch toolkit) describe the agency's service offering; the page labels them as work of the HAWYIA team that you were part of, not as your sole work.

## Update — 28 Oct 2026: Enterprise Systems section

Added to the Expertise page (`/expertise/#systems`). Three evidence levels are kept visibly apart:

| Platform | Level shown | Basis |
| --- | --- | --- |
| SAP ERP · MM | Hands-on experience | CV: MM procurement cycle PR → RFQ → PO → GR → SES; SAP ERP training 2024 |
| Bitrix24 | Documented training | CV: Bitrix24 Program 2026; Bitrix24 CRM in core competencies |
| monday.com | Platform of interest | Not in the CV — no claim of experience |

Not added: Microsoft Project, Power BI, Excel, Jira, Asana, Salesforce. None appears in the CVs. Confirm any you use and they can be added at the right level (edit `src/data/systems.ts`).
Product logos are not used: the site shows product names in its own typography, with links to each official site and a trademark note. Official logos can be added later if you prefer, subject to each vendor's brand guidelines.

## Update — 28 Oct 2026: photographs and local assets

- All site images now live inside the project at `public/assets/images/` (served at `/assets/images/`): `projects/`, `moments/`, `logos/`, the portrait, and the HAJJAR wordmark. The video is at `/assets/media/`. Nothing loads from Google Drive. Old `/images/...` links redirect (301) via `.htaccess`.
- The 14 "memories" photographs were re-encoded from the originals: WebP at 900, 1200 and 1600 px with light sharpening (quality 82). The originals top out at 1600 px, so that is the maximum true resolution; nothing is upscaled.
- Colour filters removed in the light theme (photos shown as shot); a slight dim only in the dark theme.
- Captions now state only what the file name and picture show (e.g. "Event", "Construction site", "Bussma") — no invented dates, places, or stories.
- New page: Visual Journal (`/journal/`, `/en/journal/`) — all 14 photographs at their natural proportions, with a lightbox. Linked from the menu, footer, and home page.
- The contact section has a faint photograph behind it under a navy veil; text contrast is unchanged.

## Update — opening case studies (Business Compound, Sakenah)
- Both rebuilt as leadership case studies (`lead`, `challenge`, `film`, `outcome`, `facts`, `officialUrl` fields; renderer `src/components/CaseLead.tsx`).
- Role: «قائد إدارة وتنفيذ الافتتاح / حفل الافتتاح» · Opening Event Lead, with four responsibility groups.
- Official films embedded via the Vimeo player (lazy iframe, no autoplay, `dnt=1`, fallback link to vimeo.com).
- Project facts taken from alsoliman.com.sa official pages (land, built-up area, units/offices, parking, unit mix, amenities).
- 90M funding kept as a project-level result he supported, not a personal achievement. No budgets, attendance or sales figures added for either opening.
- Slug `sukina-compound` → `sakenah-compound`; 301 redirect in `.htaccess`.
- Not done: official project photos (alsoliman.com.sa unreachable from the build workspace). The Vimeo player could not be loaded locally for the same reason; verify playback on the live site.

## Update — 29 Oct 2026: SEO, navigation, measurement

Audit first (build crawl of every page, browser checks at 390 and 1440 px, Lighthouse mobile on a local gzip server). The site already had clean basics: one `h1` per page, canonical + `hreflang`, sitemap and robots, meaningful alts, no CLS. Changes:

**Search and AI understanding**
- JSON-LD on every indexable page as one linked graph: `Person` (with `@id`), current employer `Organization` (name from the Experience page, URL the official site the case studies already cite), `WebSite`, and a page node — `ProfilePage` for home and About, `CollectionPage` + `ItemList` for Projects, `WebPage` + `CreativeWork` for each case study, `WebPage` elsewhere — plus `BreadcrumbList` on all inner pages. Only facts shown on the site are used.
- `robots: index, follow, max-image-preview:large` on indexable pages (404 keeps `noindex`).
- Share previews: case studies with a large enough cover now get their own 1200 × 630 JPEG card (`public/og/`, `npm run og`); others keep the site card. Added `og:image:type` and `twitter:image:alt`.
- Not added: `llms.txt` or other AI-specific files. No major search or answer engine documents using them; the prerendered HTML, sitemap and structured data are what these systems read, and nothing in robots.txt blocks them.

**Performance and quality**
- About: the portrait (its LCP element) was lazy-loaded; now eager with high priority and a correct `sizes` plus a new 640 px variant.
- 480 px WebP variants for 60 project and moment images (picked up automatically by `npm run images`); corrected `sizes` for the film/pair interludes and the home stories.
- Organisation logos now carry width/height (`src/data/logos.json`, generated).
- Header wordmark: was squeezed out of proportion on phones; now scales with `object-fit` and ships as a 4.6 KB WebP instead of a 14 KB PNG.
- Lighthouse (mobile, local): SEO 100 and Best Practices 100 on all tested pages; Accessibility 100 except a contrast flag Lighthouse raises on photo captions mid-fade-in (the settled colour passes). Performance varies ±8 between runs in this environment; side-by-side runs showed About LCP improving (~4.3 s → ~3.5 s) and the home page unchanged within noise. Home LCP is the hero paragraph waiting on the Arabic web fonts (~80 KB each); subsetting the Thmanyah fonts is the next lever, not done here because it needs the licence check in item 8 above.

**Navigation**
- "Certifications" link (to `/about/#certifications`) in the desktop bar, the full menu and the footer; desktop spacing tightened between 1081 and 1240 px so all links fit.
- About page gets the same "On this page" strip as home (story, organisations, education, certifications, awards, languages). Current-section highlighting now works by position, so it is right both in the two-column desktop layout and when stacked.
- Anchors inside sections no longer land under the sticky bars.

**Featured projects carousel (phones only)**
- Evaluated: on phones the four stacked stories took ~2,450 px of scrolling; on desktop the editorial rows read well. So the carousel applies only below 760 px: CSS scroll-snap with the next card peeking, previous/next buttons (44 px targets), a "2 / 4" counter announced politely, arrow-key support, and `region`/`group` carousel semantics. No autoplay. All four projects stay in the HTML in every mode, and without JavaScript the stacked list remains. Section height on phones: ~920 px.

**Meta Pixel and privacy** — see `ANALYTICS.md`. Off until an ID is configured; consent required; Global Privacy Control honoured; no personal data in events; new Privacy page (`/privacy/`) and a "Privacy settings" control.

**Search Console** — no previous verification file or tag existed in either branch. Domain property via DNS TXT is recommended (steps in `ANALYTICS.md`); an optional HTML-tag path is wired through `GOOGLE_SITE_VERIFICATION`.

Verification: `npm run build` (typecheck + 38 prerendered pages), crawl of all pages (titles, descriptions, one `h1`, no heading skips, alts, JSON-LD parses and every `@id` reference resolves), browser tests for the carousel (buttons, swipe, arrow keys, focus, both languages), the Certifications anchor, the menu, and the full consent flow against a test Pixel ID with Meta's script stubbed (no request before consent, decline persists, accept → `consent grant` / `autoConfig false` / `init` / `PageView`, each conversion event, revoke clears `_fbp`, GPC). The test ID was never committed.

**Font licence check (29 Oct 2026, item 8).** The licence embedded in the Thmanyah font files allows commercial use on websites, but forbids modifying, adapting, or creating derivative fonts; font subsetting therefore stays off the table unless Thmanyah grants it in writing (Ask@thmanyah.com). The same licence allows web embedding "only as part of a bundled, packaged or obfuscated product" and forbids making the files extractable or downloadable on their own. The site currently serves the WOFF2 files from `/fonts/` like any self-hosted web font; ask Thmanyah to confirm this is acceptable for a personal website (not legal advice).

## Update — 30 Oct 2026: SEO audit, round 2

Audit of the build and the live site (robots.txt, sitemap.xml, every page's head, structured data, links, images). The 29 Oct pass already covered indexing, canonical/hreflang, JSON-LD, alts, and performance; this round fixes what remained. Page bodies are unchanged (compared byte for byte with the published build).

- **Case-study descriptions**: were the client overview cut at 158 characters, ending mid-sentence with "…" (Business Compound, Bader Villas, Sakenah, Al-Basateen, Harf). Now the overview when it fits whole, otherwise the first-person summary already shown on the Projects page. No new wording or facts.
- **About description**: started mid-paragraph ("ومنذ 2022 …"). Now a one-line summary of the three story paragraphs, naming only employers shown there.
- **Case-study titles**: "Name · first category | Munther AlHajjar" (e.g. "Sahab GovTech · Brand Strategy") when it stays within ~60 characters and the name does not already say it.
- **404 pages**: own description instead of the home page's (they stay `noindex`).
- **og:type**: `profile` only for home and About, `article` for case studies, `website` elsewhere.
- **Sitemap lastmod**: was the build date on every page at every release, which makes it meaningless to search engines. The build now compares each page's title, description, structured data and `<main>` with the published copy (`PREV_SITE`, passed by the workflow) and keeps the previous date for unchanged pages.

Checked and left as is: robots.txt (allows all, points to the sitemap), 38 sitemap URLs with reciprocal hreflang, canonical on every indexable page, one `h1` per page, alts on all images, prev/next and breadcrumb links on case studies, no tracking loaded (Meta Pixel paused; the old release's script that still holds its ID is dropped by the next publish). Not changed: the English home description (169 characters, it is the hero text) and the job title (confirmed, item 3 above).
