# Prime Forensics: SEO & Scalability Suggestions

## 1. Critical HTML Structure Fix
**Issue**: `app/page.tsx` is currently wrapping its returning elements in a `<body>` tag. However, Next.js already renders the main `<body>` tag inside `app/layout.tsx`. This causes nested `<body>` elements, which is invalid HTML, negatively impacts SEO indexability, and breaks accessibility features.
**Fix**: Change the `<body>` tag in `app/page.tsx` to a semantic `<main>` tag.

## 2. Meta Tags and SEO Optimization
**Issue**: The default `app/layout.tsx` contains boilerplate Next.js metadata (`title: "Create Next App"`). There's also a lack of advanced SEO configurations.
**Fix**:
- **Title & Description**: Update immediately to relevant phrasing (e.g., "Prime Forensics | Industry Leading Investigation Services").
- **Open Graph & Twitter Cards**: Add `openGraph` and `twitter` configuration within the Next.js `metadata` export to ensure rich previews on social media and messaging apps.
- **Canonical URLs**: Define the `metadataBase` property in `layout.tsx` to generate correct absolute canonical links automatically.
- **Structured Data**: Inject JSON-LD (such as LocalBusiness or Organization structured data scripts) in the head to enhance Google search rich snippet results.

## 3. Scalable File Structure & Imports
**Issue**: The imports within `app/page.tsx` mix path aliases (`@/src/components/...`) and relative paths (`../src/components/...`).
**Fix**: Enforce the use of absolute path aliases (e.g., `@/src/...`) across the board. This prevents broken imports and simplifies refactoring as the component library grows.

## 4. Headless WordPress Integration Architecture
Since the content will be hosted on an external WordPress instance:
- **Data Fetching Strategy**: Leverage Next.js App Router caching. Utilize Incremental Static Regeneration (ISR) by passing `{ next: { revalidate: 3600 } }` to fetch requests from WordPress endpoints. This scales far better than Server Side Rendering (SSR) for read-heavy content like blogs while staying fresher than Static Site Generation (SSG).
- **Environment Parity**: Store your GraphQL/REST WordPress endpoint URLs in strongly typed `.env` environments right from the beginning to ensure smooth deployment scaling.

## 5. Performance Scalability
- **next/image configuration**: Prepare `next.config.ts` to accept image host domains from WordPress (`remotePatterns`), allowing Next.js built-in image optimization mechanisms to shrink WP assets.
- **Component Lazy Loading**: For components below the fold, adopt `next/dynamic` to lazy-load them. This improves the initial Time To Interactive (TTI), which strongly correlates with better Core Web Vitals rankings for SEO.
