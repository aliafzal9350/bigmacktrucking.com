# Big Mack Trucking — baseline SEO audit (live crawl 12 Nov 2026)

- Site: https://www.bigmacktrucking.com (apex 308 → www) · Repo: aliafzal9350/bigmacktrucking.com
- Stack: Next.js 14.2.35 App Router, static/SSG; metadata via `lib/seo.js` + `components/EditorialPage.jsx`; JSON-LD sitewide from `businessJsonLd()` in the root layout; `app/sitemap.js`, `app/robots.js`; apex→www in `next.config.js`; hosted on Vercel (`server: Vercel`). No IndexNow.
- Baseline build: pass. Baseline `scripts/check-site.mjs`: pass.
- Ahrefs (emails 4 and 11 Nov): health 100, 0 errors, 14 warnings, 22 notices. The API returned *Insufficient plan*, so affected URLs below come from this crawl, not from Ahrefs.

## Verified defects (priority)
- **P1** Sitewide Organization JSON-LD uses `openingHoursSpecification` (invalid on Organization) → the 20 schema-validation URLs.
- **P1** 5 descriptions under 100 chars, 5 over 160 (exact match to the Ahrefs counts).
- **P2** 2 titles over 60 chars; duplicate brand in the /about title; /resources description identical to Cargo Kings'.
- **P2** No IndexNow.
- **P3** Hosting-level redirect chain for http://apex (2 hops); FMCSA link 403 to bots.

## Live crawl inventory

| URL | Status | Hops | Title (len) | Description len | Canonical | og:url = canonical | In sitemap | JSON-LD types |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| https://www.bigmacktrucking.com/ | 200 | 0 | Big Mack Trucking \| 26 ft Box Truck, Liftgate & Expedited Freight (65) | 136 | https://www.bigmacktrucking.com | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite |
| https://www.bigmacktrucking.com/resources | 200 | 0 | Freight Planning Guides \| Big Mack Trucking (43) | 99 | https://www.bigmacktrucking.com/resources | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite |
| https://www.bigmacktrucking.com/resources/multi-stop-box-truck-delivery-planning | 200 | 0 | Multi-Stop Box Truck Delivery Planning \| Big Mack Trucking (58) | 143 | https://www.bigmacktrucking.com/resources/multi-stop-box-truck-delivery-planning | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, Article |
| https://www.bigmacktrucking.com/resources/liftgate-delivery-site-checklist | 200 | 0 | Liftgate Delivery: A Site Preparation Checklist \| Big Mack Trucking (67) | 125 | https://www.bigmacktrucking.com/resources/liftgate-delivery-site-checklist | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, Article |
| https://www.bigmacktrucking.com/resources/dedicated-box-truck-vs-ltl | 200 | 0 | Dedicated Box Truck vs. LTL: Compare the Full Trip \| Big Mack Trucking (70) | 128 | https://www.bigmacktrucking.com/resources/dedicated-box-truck-vs-ltl | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, Article |
| https://www.bigmacktrucking.com/editorial-policy | 200 | 0 | About Our Freight Guides \| Big Mack Trucking (44) | 111 | https://www.bigmacktrucking.com/editorial-policy | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite |
| https://www.bigmacktrucking.com/about | 200 | 0 | About Big Mack Trucking \| Big Mack Trucking (43) | 82 | https://www.bigmacktrucking.com/about | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite |
| https://www.bigmacktrucking.com/contact | 200 | 0 | Contact Dispatch & Request a Quote \| Big Mack Trucking (54) | 88 | https://www.bigmacktrucking.com/contact | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite |
| https://www.bigmacktrucking.com/privacy-policy | 200 | 0 | Privacy Policy \| Big Mack Trucking (34) | 71 | https://www.bigmacktrucking.com/privacy-policy | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite |
| https://www.bigmacktrucking.com/terms | 200 | 0 | Website Terms \| Big Mack Trucking (33) | 90 | https://www.bigmacktrucking.com/terms | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite |
| https://www.bigmacktrucking.com/services/expedited-freight | 200 | 0 | Expedited Box Truck Freight \| Big Mack Trucking (47) | 159 | https://www.bigmacktrucking.com/services/expedited-freight | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/services/liftgate-delivery | 200 | 0 | Liftgate Delivery Service \| Big Mack Trucking (45) | 177 | https://www.bigmacktrucking.com/services/liftgate-delivery | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/services/26ft-dock-high-box-truck | 200 | 0 | 26 ft Dock-High Box Truck \| Big Mack Trucking (45) | 164 | https://www.bigmacktrucking.com/services/26ft-dock-high-box-truck | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/services/twic-port-trucking | 200 | 0 | TWIC Port & Terminal Trucking \| Big Mack Trucking (49) | 165 | https://www.bigmacktrucking.com/services/twic-port-trucking | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/services/air-cargo-recovery | 200 | 0 | JFK & Newark Air Cargo Recovery \| Big Mack Trucking (51) | 166 | https://www.bigmacktrucking.com/services/air-cargo-recovery | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/services/pallet-delivery | 200 | 0 | Direct Pallet Delivery \| Big Mack Trucking (42) | 161 | https://www.bigmacktrucking.com/services/pallet-delivery | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/service-areas/new-york-city | 200 | 0 | NYC Box Truck Freight Delivery \| Big Mack Trucking (50) | 159 | https://www.bigmacktrucking.com/service-areas/new-york-city | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, Place, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/service-areas/long-island | 200 | 0 | Long Island Box Truck Freight \| Big Mack Trucking (49) | 160 | https://www.bigmacktrucking.com/service-areas/long-island | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, Place, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/service-areas/new-jersey | 200 | 0 | New Jersey Box Truck Freight \| Big Mack Trucking (48) | 156 | https://www.bigmacktrucking.com/service-areas/new-jersey | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, Place, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/service-areas/nationwide | 200 | 0 | Nationwide Expedited Box Truck \| Big Mack Trucking (50) | 160 | https://www.bigmacktrucking.com/service-areas/nationwide | yes | yes | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite, Place, BreadcrumbList, ListItem, FAQPage, Question, Answer |
| https://www.bigmacktrucking.com/fleet | 200 | 0 | Our Fleet: Freightliner M2 Box Truck \| Big Mack Trucking (56) | 154 | https://www.bigmacktrucking.com/fleet | yes | no | Organization, Person, PropertyValue, City, AdministrativeArea, State, Country, OpeningHoursSpecification, OfferCatalog, Offer, Service, WebSite |

**Host / protocol variants**

- 308 http://www.bigmacktrucking.com/ → 200 https://www.bigmacktrucking.com/
- 308 http://bigmacktrucking.com/ → 308 https://bigmacktrucking.com/ → 200 https://www.bigmacktrucking.com/
- 308 https://bigmacktrucking.com/ → 200 https://www.bigmacktrucking.com/

**External links (non-200 to an automated client)**

- 403 https://safer.fmcsa.dot.gov/CompanySnapshot.aspx

**robots.txt**

```
User-Agent: *
Allow: /

Sitemap: https://www.bigmacktrucking.com/sitemap.xml
```
