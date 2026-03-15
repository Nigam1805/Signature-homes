# Builders Group – Project Guide (Beginner-Friendly)

This guide explains how the project is organized and how to change things without breaking the site. You do not need to be a developer to edit content.

---

## 1. Project folder structure

```
builders-group/
├── public/              # Static files (e.g. favicon)
├── src/
│   ├── components/      # Reusable pieces of the UI
│   │   ├── ui/          # Button, Card, Input, etc. (shadcn-style)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── FeatureCard.tsx
│   │   └── EventCard.tsx
│   ├── content/
│   │   └── siteContent.ts   ← EDIT ALL WEBSITE TEXT HERE
│   ├── layout/
│   │   └── MainLayout.tsx   # Wraps every page with Navbar + Footer
│   ├── pages/               # One file per page
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Community.tsx
│   │   ├── Events.tsx
│   │   ├── Members.tsx
│   │   └── Contact.tsx
│   ├── routes/
│   │   └── AppRoutes.tsx    # Defines which URL shows which page
│   ├── styles/
│   │   └── globals.css      # Global styles and theme variables
│   ├── lib/
│   │   └── utils.ts         # Small helpers (e.g. for CSS classes)
│   ├── App.tsx
│   └── main.tsx             # Entry point (loads React and the app)
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── README.md
└── PROJECT_GUIDE.md         # This file
```

- **Pages** = what you see at each URL (Home, About, etc.).
- **Components** = smaller building blocks (navbar, cards, buttons) used inside pages.
- **Content** = all text and labels in one file so you can edit from a single place.

---

## 2. Where to change website text

**File:** `src/content/siteContent.ts`

This file holds:

- **NAVIGATION** – Menu item names and links (Home, About Us, Community, etc.)
- **SITE_NAME**, **SITE_TAGLINE** – Brand name and short tagline
- **HOME_CONTENT** – Hero title, subtitle, button labels, section titles
- **ABOUT_CONTENT** – About page headings and paragraphs
- **COMMUNITY_CONTENT** – Community page text
- **EVENTS_CONTENT** – Events page titles and “no events” message
- **MEMBERS_CONTENT** – Members page intro
- **CONTACT_CONTENT** – Contact page titles and form labels
- **CONTACT_DETAILS** – Email, phone, address (used on Contact page and footer)
- **FOOTER_CONTENT** – Footer description, “Quick links”, “Contact”, copyright, social links
- **FEATURES_LIST**, **UPCOMING_EVENTS**, **TESTIMONIALS** – Data for the landing page (features, events, testimonials)

**How to edit:** Open `siteContent.ts`, find the string you want (e.g. `heroTitle`), and change only the text inside the quotes. Save the file; the dev server will refresh automatically.

Example:

```ts
// Before
heroTitle: 'Build. Connect. Grow.',

// After
heroTitle: 'Welcome to Builders Group',
```

Do not remove the commas or the quotes.

---

## 3. How navigation works

- The **Navbar** component reads the **NAVIGATION** array from `siteContent.ts`.
- Each item has `name` (what appears in the menu) and `path` (the URL, e.g. `/about`).
- To add a new menu item:
  1. Add a new object to **NAVIGATION** in `siteContent.ts`, e.g. `{ name: 'Blog', path: '/blog' }`.
  2. Add the corresponding route and page in the app (see “How to add a new page” below).

The same **NAVIGATION** array is used in the **Footer** for “Quick links”.

---

## 4. How routing works

**File:** `src/routes/AppRoutes.tsx`

- **Routing** means: “When someone visits a URL, which page (component) do we show?”
- The app uses **React Router**. Routes are defined in `AppRoutes.tsx`.
- Current routes:
  - `/` → Home
  - `/about` → About
  - `/community` → Community
  - `/events` → Events
  - `/members` → Members
  - `/contact` → Contact

All of these are “children” of **MainLayout**, so they all show the same Navbar and Footer.

---

## 5. How animations work

- Animations use the **Motion** library (same idea as Framer Motion).
- **AnimatedSection** – Used to fade in and slide up a block of content when it scrolls into view. You can wrap any section in `<AnimatedSection>` and optionally pass `delay` (in seconds).
- **FeatureCard** and **EventCard** – Have built-in “in view” and hover animations.
- The **Hero** on the home page animates the headline, subtitle, and buttons with simple fade/slide on load.

To add an animation to a new section: wrap it in `<AnimatedSection>` (see usage in `Home.tsx` or `About.tsx`).

---

## 6. How to add a new page

1. **Create the page component**  
   In `src/pages/`, create a new file, e.g. `Blog.tsx`, and export a component (you can copy the structure from `About.tsx` or `Community.tsx`).

2. **Add the route**  
   In `src/routes/AppRoutes.tsx`:
   - Import the new page: `import { Blog } from '@/pages/Blog'`
   - Inside the `children` array, add: `{ path: 'blog', element: <Blog /> }`

3. **Add it to the menu**  
   In `src/content/siteContent.ts`, add a new item to **NAVIGATION**, e.g. `{ name: 'Blog', path: '/blog' }`.

After saving, the new page will appear at `/blog` and in the navbar.

---

## 7. How to edit content (summary)

| What you want to change      | Where to do it                |
|-----------------------------|-------------------------------|
| Menu labels and links       | `siteContent.ts` → NAVIGATION |
| Hero title / subtitle / CTA| `siteContent.ts` → HOME_CONTENT|
| About / Community / Events / Members / Contact page text | `siteContent.ts` → ABOUT_CONTENT, COMMUNITY_CONTENT, etc. |
| Contact email, phone, address | `siteContent.ts` → CONTACT_DETAILS |
| Footer text and links      | `siteContent.ts` → FOOTER_CONTENT |
| Features, events, testimonials on the home page | `siteContent.ts` → FEATURES_LIST, UPCOMING_EVENTS, TESTIMONIALS |

Keep all edits in the **strings inside quotes**; avoid deleting commas, brackets, or the structure of the file.

---

## 8. Running and building the project

- **Install dependencies (first time):**  
  `npm install`

- **Start the development server:**  
  `npm run dev`  
  Then open the URL shown in the terminal (usually http://localhost:5173).

- **Build for production:**  
  `npm run build`  
  The built site will be in the `dist` folder, ready to upload to your hosting.

If something doesn’t update after editing, save the file again or refresh the browser; the dev server usually hot-reloads automatically.
