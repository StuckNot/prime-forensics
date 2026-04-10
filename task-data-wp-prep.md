# Task: Data Loading & Headless WordPress Prep

## Overview
Set the architectural data-fetching patterns now, guaranteeing a seamless backend integration without sacrificing page load speeds.

## Sub-Tasks

- [ ] **Create Fetching Utility for WordPress API**
  - **File:** `src/lib/wp-fetch.ts` (Create new)
  - **Action:** Map out a centralized fetch wrapper. Instead of standard REST calls, enforce Next.js cache and `revalidate` properties for Incremental Static Regeneration (ISR).

- [ ] **Implement Strict Skeleton Loaders for Dynamic Content**
  - **File:** `app/page.tsx`
  - **Action:** Currently, `next/dynamic` is used for `Footer` and `ExpertOpinionCTA` without loading fallbacks. Add a basic `loading: () => <Skeleton />` to avoid Cumulative Layout Shift (CLS) when chunks load.

- [ ] **Rich-Text Parser Integration Plan**
  - **Action:** Research and install a safe HTML replacement wrapper (like `html-react-parser`). This is essential because standard WP returns raw HTML containing `<img>` and `<a>` tags. We must intercept these and swap them for Next.js `<Image>` and `<Link>` components to maintain high Core Web Vitals.
