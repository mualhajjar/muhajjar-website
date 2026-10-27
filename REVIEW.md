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
3. **Job title.** The brief and CVs use *Media Project Manager & Business Development*. You also approved *Media Projects Management & Development Manager / مدير إدارة وتطوير المشاريع الإعلامية* in October 2026. The site uses the CV title; change `person.title` in `src/data/profile.ts` if you prefer the newer one.
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
