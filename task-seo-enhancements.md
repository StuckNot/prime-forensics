# Task: Technical SEO Scaling

## Overview
Build upon the already existing SEO meta tags to construct a scalable foundation for future dynamic content indexing (page 1 readiness).

## Sub-Tasks

- [ ] **Automate Sitemaps**
  - **File:** `app/sitemap.ts`
  - **Action:** Create this file to dynamically generate `sitemap.xml`. Configure it to crawl static routes (`/`, `/about`, `/services`, etc.). Later, this will be expanded to ping WordPress for dynamic blog routes.

- [ ] **Implement Robots.txt Generator**
  - **File:** `app/robots.ts`
  - **Action:** Setup automated instructions for crawlers. Hard-link the absolute URL to your generated `sitemap.xml`. Ensure environments block indexing in staging but allow it in production.

- [ ] **Enforce Trailing Slash Rules**
  - **File:** `next.config.ts`
  - **Action:** Add `trailingSlash: false` explicitly. This avoids Google indexing two versions of a page (e.g. `/services` vs `/services/`).

- [ ] **Review `<main>` Tag Structure across new components**
  - **Action:** Since we corrected the `<body>` nesting in `app/page.tsx` previously, verify that any new nested layout components strictly abide by semantic HTML5 tags corresponding perfectly with the existing JSON-LD setup.
