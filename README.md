# Builders Group – Community Website

A modern React community website for **Builders Group**, built with React 19, Vite, TypeScript, TailwindCSS, shadcn-style UI, and Motion (Framer Motion).

## Tech Stack

- **React 19** – UI library
- **Vite** – Build tool and dev server
- **TypeScript** – Type safety
- **TailwindCSS** – Styling
- **shadcn-style UI** – Button, Card, Input, Dialog, etc. (Radix-based)
- **Motion** – Animations (Framer Motion)
- **React Router DOM** – Routing

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output is in the `dist` folder. Deploy `dist` to any static host (Vercel, Netlify, etc.).

### Preview production build locally

```bash
npm run preview
```

## Project structure (overview)

- `src/content/siteContent.ts` – **Central content file** (edit all text here)
- `src/components/` – Reusable UI and layout components
- `src/pages/` – Page components (Home, About, Community, etc.)
- `src/routes/AppRoutes.tsx` – Route definitions
- `src/layout/MainLayout.tsx` – Shared layout (Navbar + Footer)

For a beginner-friendly walkthrough, see **PROJECT_GUIDE.md**.

## Editing content

Edit **`src/content/siteContent.ts`** to change:

- Navigation labels and paths
- Hero title and subtitle
- About, Community, Events, Members, Contact copy
- Contact details (email, phone, address)
- Footer text and social links

No need to touch component code for simple text changes.

## License

Private / All rights reserved.
