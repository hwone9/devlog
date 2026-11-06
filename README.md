# Devlog

A minimal black-and-white personal developer knowledge base built with React, TypeScript and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Add or edit notes

Edit `src/data/notes.ts`. Each note has:

- `id`: URL-friendly unique identifier
- `title`, `description`, `category`, `tags`, `date`
- `content`: Markdown string

The site is intentionally static: no login, database, or admin panel is required. Add notes directly to the data file and deploy the updated project.

## Deploy

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the default settings: build command `npm run build`, output directory `dist`.
4. Deploy.

## Customize

- Site name and intro: `src/data/site.ts`
- Categories and sample notes: `src/data/notes.ts`
- Styling: `src/styles.css`
