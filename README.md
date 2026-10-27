# HopeBridge Foundation

A responsive React + Vite home page for an elder-care NGO. Page content comes from promise-based local mock APIs in `src/api/`; the custom TanStack Query hooks in `src/hooks/` provide the component data boundary for a future backend.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, or preview it with `npm run preview`.

## Neue Montreal fonts

Drop the supplied WOFF2 font files into these public folders using the filenames below:

- `public/fonts/NeueMontreal-Regular/NeueMontreal-Regular.woff2`
- `public/fonts/NeueMontreal-Medium/NeueMontreal-Medium.woff2`
- `public/fonts/NeueMontreal-Bold/NeueMontreal-Bold.woff2`

If these files are not present, display text falls back to Inter Tight and then sans-serif. Poppins is loaded from Google Fonts.

## Mock data

Edit the data in `src/api/` to adjust the site content. Each API function returns a Promise with a short delay, and page components consume it through the hooks in `src/hooks/`.
