# Devlog

A minimal black-and-white personal developer knowledge base built with React, TypeScript, and Vite.

## Live Demo

[Visit Devlog](https://devlog-five-kappa.vercel.app/)

## Overview

Devlog is a personal knowledge base designed to organize and revisit programming concepts while learning software development.

It provides a structured space to document technical knowledge, code examples, and solutions to development problems.

## Features

- **Category Navigation** — Browse notes by programming topics.
- **Markdown Support** — Write and display structured technical notes.
- **Code Examples** — Present code snippets in readable code blocks.
- **Search** — Search notes by title, category, and tags.
- **Responsive Design** — Optimized for desktop and mobile devices.
- **Minimal UI** — Clean black-and-white interface focused on readability.

## Tech Stack

- **Frontend:** React, TypeScript
- **Build Tool:** Vite
- **Routing:** React Router
- **Markdown:** React Markdown
- **Styling:** CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure

```text
src/
├── components/
├── pages/
├── data/
│   └── notes.ts
├── styles/
├── App.tsx
└── main.tsx
```

## Getting Started

### Run Locally

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Content Management

Learning notes are stored as structured data and Markdown content in:

```text
src/data/notes.ts
```

Each note includes:

- `id`: URL-friendly unique identifier
- `title`, `description`, `category`, `tags`, `date`
- `content`: Markdown content

The site is intentionally static, with no login, database, or admin panel required. New notes can be added or existing ones updated directly in the data file, then deployed.
