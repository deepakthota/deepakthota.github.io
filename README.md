# Deepak Thota / Systems & Software

A responsive personal portfolio built with React, TypeScript, Vite and Tailwind. The visual language uses charcoal surfaces, editorial typography, restrained sage accents, precise borders and a live topology canvas. Original design inspired by enterprise technology websites; no copied brand assets.

## Run

Node 22+ recommended.

```sh
npm ci
npm run dev
npm run build
```

`package-lock.json` pins the resolved dependency versions. The stack uses supported package ranges rather than claiming unverified latest releases.

## Architecture and file structure

```text
index.html                        Metadata and React entry
package.json                      Dependencies and dev/build scripts
package-lock.json                 Reproducible dependency graph
vite.config.ts                    React build pipeline
postcss.config.js                 Tailwind and Autoprefixer
 tailwind.config.js               Dark-tech palette and type tokens
 tsconfig.json                    Strict TypeScript configuration
src/
  main.tsx                        React root
  App.tsx                         Main page and navigation
  styles.css                      Responsive layout, effects and motion policy
  data/portfolio.ts               Capabilities and case-study content
  components/
    Topology.tsx                  Interactive canvas network
    Reveal.tsx                    Scroll reveal wrapper
    ContactTerminal.tsx           Validated local inquiry draft
.openai/hosting.json               Site hosting identity and static output
```

The browser renders the page from local typed content. Capability filters and project accordions hold component-local state. Navigation uses native anchors. Contact drafts use Blob downloads with no network transmission.

## Layout

Hero → executive summary → capability filters/grid → expandable case studies → contact terminal.

Mobile navigation collapses below 700px. Capabilities move from three columns to two to one. Typography uses clamp and sections avoid fixed text heights. Native buttons, labels, expanded/pressed state, focus indicators and a skip link support keyboard access.

## Animation design

`Topology.tsx` uses a single Canvas2D layer with 68 deterministic nodes, distance-based edges, pointer displacement and requestAnimationFrame. Device pixel ratio is capped at 1.5. Animation pauses when the canvas leaves the viewport or the document is hidden. ResizeObserver maintains resolution. Reduced-motion users receive a static render. Event listeners, observers and frames are cleaned up on unmount.

CSS view-timeline reveals provide progressive enhancement. Browsers without support keep content visible. Native smooth scrolling, subtle hover transitions and linework provide the remaining motion. Framer Motion/Three.js are unnecessary for this scope.

## Content provenance

Professional content derives from the supplied career background: Comcast cybersecurity engineering, enterprise APIs/IAM, LDAP, RabbitMQ, database and portal modernization, and the access-request agent development project. No private enterprise data or endpoint details are included. Reported career metrics are labeled self-reported and require substantiation before public use. Agent work is explicitly labeled development; future LLM integration is not represented as production functionality.

## Contact boundary

No verified email or profile URL was supplied. The contact terminal validates fields and downloads a text draft; it does not send messages and does not claim encryption, authentication or secure delivery. No input is persisted to localStorage or a server.

For production messaging, first configure an owned destination, then add a server endpoint with server-side validation, length limits, rate limits, bot controls and a transactional email provider. Keep provider secrets on the server. Confirm successful delivery before displaying a sent state. Never trust client-side validation as a security boundary.

## Validation

`npm run build` runs strict TypeScript checking followed by the optimized Vite production build. Browser review should cover 390px mobile, tablet and desktop widths, navigation, filters, accordion expansion, form validation/download, keyboard navigation and reduced motion.

## Experience update

Experience.tsx adds selected Comcast IAM and network analytics roles, APA, Ericsson via TCS, and NAIC/SBS engagements. Conflicting historical dates are omitted. John Deere is omitted because available context does not confirm completed work.

Official logo sources:
- Comcast: https://corporate.comcast.com/media/img/original/2024/03/corporate_NewComcastLogo_16x9.png
- APA: https://www.planning.org/static/content/image/APA_horizontal_647_370x108.png
- Ericsson: inline SVG from https://www.ericsson.com/
- NAIC: https://content.naic.org/themes/custom/naic/images/logo/naic-blue.svg

Logos are local assets. IntersectionObserver tracks the middle 35% of the viewport to toggle grayscale and opacity. Focus and hover also reveal color; reduced motion disables transitions. Text stays readable. Logos identify engagements, not endorsement.

CAMP-A is named explicitly. Shopping Search Relevance & Ranking is labeled in progress with planned retrieval/ranking/evaluation work, without invented model metrics or repository URLs.

## Theme and identity update

The header uses the user-provided geometric emblem in matching light and dark variants. CSS displays the emblem without changing the original images. ThemeSwitch offers System (default), Light and Dark. Explicit overrides persist in localStorage; System clears the override and responds to OS preference changes. An early head script applies the preference before paint, with storage-denied fallback. Ericsson/TCS and NAIC/SBS experience entries have been removed; the current experience list contains the two Comcast roles and APA.
