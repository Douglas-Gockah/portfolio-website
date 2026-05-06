# Douglas Gockah — Portfolio Website

Personal portfolio built with Next.js 14, Notion CMS, Cloudinary, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
# Copy .env.local and fill in your Notion token + database IDs

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with CSS custom properties
- **CMS:** Notion API
- **Media:** Cloudinary (next-cloudinary)
- **Hosting:** Vercel

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout (font, nav, metadata)
│   ├── page.tsx         # Home page
│   ├── work/            # Work listing + case studies
│   └── about/           # About page
├── components/
│   ├── layout/          # TopBar, BottomNav
│   ├── home/            # Home page sections
│   ├── work/            # Work page components
│   ├── about/           # About page components
│   ├── case-study/      # Case study components
│   └── ui/              # Shared UI components
├── lib/                 # Notion client, queries
├── types/               # TypeScript interfaces
└── styles/              # Global CSS + design tokens
```

## Deployment

Connected to Vercel for auto-deploy on push to `main`.
