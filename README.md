# Kör Body Website

React + TypeScript site for Kör Body Chiropractic & Wellness, built with Vite.

```bash
npm install
npm run dev        # start local dev server
npm run build      # type check, then production build into dist/
npm run typecheck  # type check only
npm run lint       # lint
```

## Where things live

- `src/pages/<Page>/` holds each page: `<Page>.tsx` and `<Page>.css`
- `src/sections/<Section>/` holds the sections of the home page, each with its own `.tsx` and `.css`
- `src/components/<Component>/` holds shared pieces like the navbar, footer and buttons
- `src/content/site.ts` holds shared copy: FAQ answers, steps, links, credentials
- `src/styles/colors.css` holds every brand color; no other file uses hex codes
- `src/index.css` holds shared base styles: type, buttons, cards and layout
- `public/images/` holds photos
