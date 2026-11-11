# Big Mack Trucking — test results (12 Nov 2026, local production build)

| Check | Result |
| --- | --- |
| `npm run build` (Next 14.2.35) | PASS: 21 sitemap routes prerendered, /fleet included |
| `scripts/check-site.mjs` (extended) against `next start` | PASS: 21 pages, 21 internal paths, 0 warnings |
| New asserts: description 100–165 chars, unique titles/descriptions, og:title/description/type, absolute https og:image, no `openingHoursSpecification` on Organization, Article schema on every guide | PASS |
| `check-google-tag.mjs GTM-WNJ6ZSD4` | PASS (analytics container unchanged) |
| `check-publisher.mjs` | PASS (AdSense verification + ads.txt unchanged) |
| `check-guide-content.mjs` | multi-stop guide PASS; the other two guides are under the script's 1,000-word rule (pre-existing, not changed here) |
| JSON-LD | Parses on all 21 pages. Types: Organization, ContactPoint, WebSite, Service, BreadcrumbList, FAQPage, Article. |
| Redirects | http→https and apex→www intentional (308). 0 internal links or sitemap entries point to a redirect. No loops. |
| Sitemap / robots | Valid XML, 200, canonical host only; robots allows all and lists the sitemap |
| Broken links | 0 internal. External: FMCSA SAFER 403 to automated clients (bot blocking). |
| IndexNow key file | 200 locally at `/d037a8ae6f2a85cc4b8c19112e55e8ab.txt` |
| Lighthouse | Not run (not installed in this environment) |
| Schema.org Validator / Rich Results Test | Not run: they need the deployed URL. Run on `/` and one `/services/*` page after deploy. |
