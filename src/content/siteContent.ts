/**
 * ============================================
 * CONSTRUCTION COMPANY - CENTRAL CONTENT FILE
 * ============================================
 * Edit ALL website text and images here.
 * Non-developers: change only the strings inside quotes.
 *
 * Theme colours (buttons, primary, accent, backgrounds):
 * Edit src/styles/globals.css – :root section (single source for all UI/theme colours).
 */

// --- NAVIGATION ---
export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Floor Plans', path: '/designs' },
  { name: 'Our home', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
] as const

// --- DESIGNS (House plans) - 7 single storey + 7 two storey images ---
export const DESIGNS_PAGE_CONTENT = {
  title: 'House Designs',
  subtitle: 'Browse our single storey and two storey plans.',
  singleStoreyTitle: 'Single storey',
  singleStoreySubtitle: 'Seven single-level floor plans to choose from.',
  twoStoreyTitle: 'Two storey',
  twoStoreySubtitle: 'Seven two-level floor plans to choose from.',
  viewPlanLabel: 'View plan',
} as const

/** Single storey. Dynamic: add/remove plans here; each needs id, name, image, optional description. */
export const SINGLE_STOREY_PLANS = [
  { id: 's1', name: 'Plan 1', image: '/designs/single-storey/IMG_0184.PNG', description: '' },
  { id: 's2', name: 'Plan 2', image: '/designs/single-storey/IMG_0185.PNG', description: '' },
  { id: 's3', name: 'Plan 3', image: '/designs/single-storey/IMG_0186.PNG', description: '' },
  { id: 's4', name: 'Plan 4', image: '/designs/single-storey/IMG_0187.PNG', description: '' },
  { id: 's5', name: 'Plan 5', image: '/designs/single-storey/IMG_0188.PNG', description: '' },
  { id: 's6', name: 'Plan 6', image: '/designs/single-storey/IMG_0189.PNG', description: '' },
  { id: 's7', name: 'Plan 7', image: '/designs/single-storey/IMG_0190.PNG', description: '' },
] as const

/** Two storey. Dynamic: add/remove plans here; each needs id, name, image, optional description. */
export const TWO_STOREY_PLANS = [
  { id: 't1', name: 'Plan 1', image: '/designs/two-storey/IMG_0191.PNG', description: '' },
  { id: 't2', name: 'Plan 2', image: '/designs/two-storey/IMG_0192.PNG', description: '' },
  { id: 't3', name: 'Plan 3', image: '/designs/two-storey/IMG_0193.PNG', description: '' },
  { id: 't4', name: 'Plan 4', image: '/designs/two-storey/IMG_0194.PNG', description: '' },
  { id: 't5', name: 'Plan 5', image: '/designs/two-storey/IMG_0195.PNG', description: '' },
  { id: 't6', name: 'Plan 6', image: '/designs/two-storey/IMG_0196.PNG', description: '' },
  { id: 't7', name: 'Plan 7', image: '/designs/two-storey/IMG_0199.PNG', description: '' },
] as const

// --- COMPANY BRANDING ---
export const SITE_NAME = 'Signature Homes SA'
export const SITE_TAGLINE = 'Building the Future with Strength and Precision'
/** Logo image (in public folder). Used in Navbar and Footer. */
export const LOGO_URL = '/logo/logo.png'

// --- HERO (Home) ---
export const HERO_CONTENT = {
  title: 'Building the Future with Strength and Precision',
  subtitle:
    'We deliver reliable construction solutions for residential projects and custom build projects.',
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Get a Quote',
  backgroundImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
} as const

// --- SERVICES ---
// Dynamic: add/remove items here; each needs id, name, description, image, icon (hammer|layers|clipboard|drafting|calculator|clipboard-check|tree|building).
export const SERVICES = [
  {
    id: '1',
    name: 'Customised interior with personal choice of carpentry',
    description:
      'Tailored interior finishes and carpentry to match your style and preferences throughout your home.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    icon: 'hammer',
  },
  {
    id: '2',
    name: 'Huge range of selections',
    description:
      'Choose from an extensive range of materials, finishes, and fixtures to create your ideal space.',
    image: 'https://images.pexels.com/photos/14613134/pexels-photo-14613134.png?w=800&q=80',
    icon: 'layers',
  },
  {
    id: '3',
    name: 'Pre-construction and planning consultation',
    description:
      'Expert guidance from the start—we help you plan and prepare before construction begins.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    icon: 'clipboard',
  },
  {
    id: '4',
    name: 'In-house draftsperson',
    description:
      'Our in-house drafting team works with you to turn your vision into detailed plans and drawings.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    icon: 'drafting',
  },
  {
    id: '5',
    name: 'Estimate budgeting',
    description:
      'Transparent estimates and careful budgeting so you know what to expect at every stage.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    icon: 'calculator',
  },
  {
    id: '6',
    name: 'Project Management',
    description:
      'Dedicated project management to keep your build on schedule and on track from start to finish.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    icon: 'clipboard-check',
  },
  {
    id: '7',
    name: 'In-house landscaper',
    description:
      'Complete the look with professional landscaping—our in-house team designs and builds outdoor spaces.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    icon: 'tree',
  },
] as const

// --- PROJECTS ---
// Dynamic: add/remove items here; each needs id, name, location, description, image.
export const PROJECTS = [
  {
    id: '1',
    name: 'Riverside Residential Complex',
    location: 'Adelaide, SA',
    description: 'Multi-unit residential development with modern amenities and sustainable design.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: '2',
    name: 'Premium Residential Apartments',
    location: 'Adelaide CBD',
    description: 'Modern apartments designed for comfortable and stylish living, offering spacious layouts, quality construction, and convenient access to essential city amenities.',
    image: 'https://plus.unsplash.com/premium_photo-1670275658703-33fb95fe50d8?w=800&q=80',
  },
  {
    id: '3',
    name: 'Heritage Building Restoration',
    location: 'North Adelaide',
    description: 'Full restoration and adaptive reuse of a heritage-listed building.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: '4',
    name: 'Industrial Logistics Hub',
    location: 'Port Adelaide',
    description: 'Large-scale industrial facility with advanced logistics and warehousing.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: '5',
    name: 'Coastal Family Home',
    location: 'Glenelg, SA',
    description: 'Custom luxury residence with ocean views and high-end finishes.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    id: '6',
    name: 'Luxury Residential Villas',
    location: 'Mount Barker',
    description: 'Beautifully designed independent villas that provide privacy, space, and a premium lifestyle within a secure and peaceful residential environment.',
    image: 'https://plus.unsplash.com/premium_photo-1764695672967-119262a30b54?w=800&q=80',
  },
] as const

// --- GALLERY ---
// Dynamic: add/remove items here; each needs src (image URL) and optional caption. UI updates automatically.
export const GALLERY_ITEMS = [
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', caption: '' },
  { src: 'https://plus.unsplash.com/premium_photo-1764695672967-119262a30b54?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80', caption: '' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', caption: '' },
] as const

// --- STATISTICS ---
// Dynamic: add/remove items here; each needs value (e.g. '250+') and label.
export const STATS = [
  { value: '250+', label: 'Projects Completed' },
  { value: '25', label: 'Years of Experience' },
  { value: '180+', label: 'Clients Served' },
] as const

// --- ABOUT PAGE ---
export const ABOUT_CONTENT = {
  heroImage:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
  title: 'Welcome to Signature Homes SA',
  subtitle: 'Building Dreams Across South Australia & Western Australia',
  intro:
    'At Signature Homes SA, we don\'t just build houses; we craft the backdrop for your life\'s best moments. As a premier custom-design builder, we specialize in turning "what if" into "welcome home." Whether you are looking to build in the heart of SA or across the landscapes of WA, our mission is to deliver a seamless, high-quality construction experience that stays on schedule.',
  missionTitle: 'The Signature Advantage: Our In-House Expertise',
  missionText:
    'The biggest challenge in building today is the wait. We\'ve solved that by moving away from the "outsourced" model. We employ a dedicated, internal team of master tradespeople to ensure your home moves forward without the typical industry delays.',
  valuesTitle: 'Our In-House Expertise',
  values: [
    {
      title: 'Custom Architectural Drafting',
      description:
        'Our in-house draftspeople work directly with you to design a floor plan that fits your lifestyle, land, and budget perfectly.',
    },
    {
      title: 'Precision Carpentry & Painting',
      description:
        'Our craftsmen treat every detail with the care it deserves, ensuring a luxury finish from the framing to the final coat of paint.',
    },
    {
      title: 'Reliable Bricklaying',
      description:
        'By keeping our bricklayers in-house, we eliminate the scheduling bottlenecks that often stall construction, keeping your project moving toward the finish line.',
    },
  ],
  teamTitle: 'Why Choose Us?',
  teamText:
    'We believe in transparency, craftsmanship, and momentum. When you build with Signature Homes SA, you aren\'t just hiring a contractor—you\'re partnering with a team of designers and builders who are as invested in your dream home as you are. From the first sketch to the moment we hand over the keys, we pride ourselves on a construction duration that respects your time without ever compromising on structural integrity or aesthetic beauty.',
} as const

// --- CONTACT ---
export const CONTACT_CONTENT = {
  title: 'Contact Us',
  subtitle: 'Get in touch for a quote or to discuss your project.',
  formTitle: 'Send us a message',
  formNameLabel: 'Name',
  formPhoneLabel: 'Phone',
  formEmailLabel: 'Email',
  formProjectDetailsLabel: 'Project Details',
  formSubmitText: 'Send message',
  formSuccessMessage: 'Thank you. We will get back to you shortly.',
  mapTitle: 'Find us',
} as const

export const CONTACT_DETAILS = {
  address: '461 Regency Road, Prospect, SA 5082',
  phone: '+61 449 740 286',
  email: 'enquiries@signaturehomessa.com.au',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.274022!2d138.6!3d-34.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU0JzAwLjAiUyAxMzjCsDM2JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1',
} as const

// --- FOOTER ---
export const FOOTER_CONTENT = {
  description:
    'Signature Homes SA, reliable construction solutions for residential, commercial, and infrastructure projects. Building the Future with Strength and Precision. Powered by Netralink.',
  linksTitle: 'Quick links',
  contactTitle: 'Contact',
  copyright: '© Netralink. All rights reserved.',
  socialLinks: [
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],
} as const

// --- HOME PAGE SECTION TITLES ---
export const HOME_SECTIONS = {
  servicesTitle: 'Our Services',
  servicesSubtitle: 'Full-service construction for every scale and sector.',
  projectsTitle: 'Featured Projects',
  projectsSubtitle: 'A selection of our completed work.',
  projectsCta: 'View Project Details',
  viewAllProjects: 'View all projects',
  statsTitle: 'Our track record',
  aboutTitle: 'Why choose us',
  aboutSubtitle: 'Strength, reliability, and engineering excellence.',
  aboutCta: 'Learn more about us',
  finalCtaTitle: 'Ready to start your project?',
  finalCtaSubtitle: 'Get a free quote or discuss your next build with our team.',
  finalCtaButton: 'Get a Quote',
} as const

// --- GALLERY PAGE ---
export const GALLERY_CONTENT = {
  title: 'Gallery',
  subtitle: 'High-quality construction and project imagery.',
  description: 'Browse our portfolio of completed and in-progress projects.',
} as const

// --- SERVICES PAGE ---
export const SERVICES_PAGE_CONTENT = {
  title: 'Our Services',
  subtitle: 'From residential to infrastructure—we deliver across the board.',
} as const

// --- PROJECTS PAGE ---
export const PROJECTS_PAGE_CONTENT = {
  title: 'Our Projects',
  subtitle: 'Completed work across residential, commercial, and infrastructure.',
} as const
