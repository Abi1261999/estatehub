# EstateHub — Real Estate Marketplace Frontend

A responsive real estate marketplace frontend built with React, Vite, TypeScript, Tailwind CSS v4, React Router, Motion, Zustand, React Hook Form, and Zod-ready form dependencies.

## Features
- Responsive landing page and mobile navigation
- Property listings with search, sale/rent filters, property type, bedroom, max price, sorting, grid/list view, and pagination
- Property details with image gallery, amenities, pricing, location links, and agent enquiry form
- Wishlist persisted in localStorage
- Compare up to three homes side by side
- Agent directory and agent profile pages
- Login/register UI with demo-only success states
- Multi-step property submission form
- About page, newsletter UI, animated cards, responsive layouts

## Run locally
Requires Node.js 20.19+ or 22.12+ for Vite 7.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. To make a production build:

```bash
npm run build
npm run preview
```

## Notes
- Property and agent records are sample data in `src/data/properties.ts`.
- Images are served from Unsplash URLs and therefore require an internet connection.
- Wishlist and comparison selections persist in browser localStorage.
- Authentication, enquiries, newsletter subscriptions, and listing submission are frontend demonstrations only. Connect an API/backend for real accounts, data persistence, image uploads, and messaging.
- The map section links to Google Maps search rather than embedding a paid map provider.
