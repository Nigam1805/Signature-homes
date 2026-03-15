# Signature Homes SA – Project guide

## Folder structure

- **`src/content/siteContent.ts`** – Edit all website text, contact details, and image URLs here.
- **`src/pages/`** – Home, About, Our Homes, Gallery, Contact.
- **`src/components/`** – Navbar, Footer, Hero, cards, UI components.
- **`src/routes/AppRoutes.tsx`** – Defines URLs (/, /about, /our-homes, /gallery, /contact).

## Theme and colours (buttons, backgrounds, links)

**Single source:** **`src/styles/globals.css`**

Edit the `:root` section to change:

- **Primary** – main buttons, nav active state, links (`--primary`, `--primary-foreground`)
- **Secondary** – secondary buttons, muted sections (`--secondary`)
- **Accent** – outline/ghost button hover, highlights (`--accent`)
- **Background / foreground** – page and text (`--background`, `--foreground`)
- **Border, input, card** – borders, form fields, cards (`--border`, `--input`, `--card`)

Values are HSL (e.g. `221 64% 34%`). All UI components and buttons use these variables.

## Dynamic grids and lists (image + description)

All grids and lists read from **`src/content/siteContent.ts`**. When you **add or remove items** in these arrays, the UI updates automatically—no code changes needed.

| Data in siteContent.ts | Where it appears |
|------------------------|------------------|
| **SERVICES** (id, name, description, image, icon) | Home + Services page grid |
| **PROJECTS** (id, name, location, description, image) | Home (first 3) + Our home page grid |
| **GALLERY_ITEMS** (src, optional caption) | Gallery page grid + lightbox caption |
| **SINGLE_STOREY_PLANS** (id, name, image, optional description) | Design page – Single storey |
| **TWO_STOREY_PLANS** (id, name, image, optional description) | Design page – Two storey |
| **STATS** (value, label) | Home + About – “Our track record” |

Add a new service, project, gallery image, or plan by adding one object to the right array; give it the same fields as the others (see the comments above each array in siteContent.ts).

## Changing content

Open **`src/content/siteContent.ts`**. Update the strings in quotes for:

- `NAVIGATION` – menu links  
- `CONTACT_DETAILS` – phone (+61 449 740 286), address (461 Regency Road, Prospect, SA 5082), email  
- `HOME_CONTENT`, `ABOUT_CONTENT`, etc. – page copy  
- `IMAGES` – hero and gallery image URLs (replace with your own when ready)

## Running the project

1. **First time:** `npm install`  
2. **Develop:** `npm run dev` → open http://localhost:5173  
3. **Build:** `npm run build` → deploy the `dist` folder  

## Adding a new page

1. Create a new file in `src/pages/` (e.g. `Blog.tsx`).  
2. In `src/routes/AppRoutes.tsx`, add a route and import the page.  
3. In `siteContent.ts`, add the new link to the `NAVIGATION` array.
