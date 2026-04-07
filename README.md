# The Saints Center 🏛️

> **The Citadel of Revelation and Power** — Raising Messengers

A modern, immersive church web application for **The Saints Center** located in Iba, Lagos State, Nigeria. Built with Vue 3, designed for creativity, animation, and seamless user experience — PWA-ready from day one.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Vue 3](https://vuejs.org/) | ^3.5 | Progressive JavaScript framework |
| [Vite](https://vite.dev/) | ^8.0 | Lightning-fast build tool |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first CSS framework |
| [PrimeVue](https://primevue.org/) | ^4.5 | UI component library (Aura theme) |
| [PrimeIcons](https://primevue.org/icons/) | ^7.0 | Icon library |
| [GSAP](https://gsap.com/) | ^3.14 | Professional-grade animations |
| [Vue Router](https://router.vuejs.org/) | ^4.6 | Client-side routing |
| [Axios](https://axios-http.com/) | ^1.14 | HTTP client |
| [TanStack Query](https://tanstack.com/query) | ^5.96 | Server state management |
| [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) | ^1.2 | Progressive Web App support |

---

## 📁 Project Structure

```
src/
├── assets/                    # Static assets (images, fonts)
├── components/
│   ├── public/                # Public-facing components
│   │   ├── Navbar.vue         # Transparent-to-solid sticky navbar
│   │   ├── Footer.vue         # Multi-column footer with church info
│   │   ├── SectionHeading.vue # Reusable section title + subtitle
│   │   ├── SermonCard.vue     # Sermon preview card with hover effects
│   │   └── ProgrammeCard.vue  # Event/programme card with status badge
│   ├── admin/                 # Admin panel components
│   │   ├── Sidebar.vue        # Collapsible sidebar navigation
│   │   ├── StatsCard.vue      # Dashboard stats with trend indicators
│   │   └── DataTable.vue      # Reusable data table with slot cells
│   └── shared/                # Cross-cutting shared components
│       ├── AppButton.vue      # Multi-variant button (primary/outline/ghost)
│       ├── AppInput.vue       # Glassmorphism input with icon support
│       └── AppLoader.vue      # Dual-ring brand-color spinner
├── composables/
│   └── useGsap.js             # GSAP context wrapper with auto-cleanup
├── layouts/
│   ├── PublicLayout.vue       # Navbar + Footer + animated slot
│   ├── AdminLayout.vue        # Sidebar + TopBar + content area
│   └── AuthLayout.vue         # Centered glassmorphism card
├── views/
│   ├── public/
│   │   ├── Home.vue           # Hero landing with GSAP animations
│   │   ├── Sermons.vue        # Sermon grid with category filter
│   │   ├── Programmes.vue     # Events grid with ScrollTrigger
│   │   └── Contact.vue        # Contact form + church info
│   ├── auth/
│   │   ├── Login.vue          # Email/password login
│   │   └── Register.vue       # Registration form
│   └── admin/
│       ├── Dashboard.vue      # Stats overview + recent data
│       ├── Evangelism.vue      # Outreach tracking table
│       ├── FollowUps.vue      # New convert follow-up management
│       ├── Disciples.vue      # Discipleship progress tracking
│       ├── Reports.vue        # Analytics with bar charts
│       ├── Users.vue          # User/role management
│       └── Settings.vue       # Church settings + logout
├── router/
│   └── index.js               # Route definitions + auth guard
├── services/
│   └── api.js                 # Axios instance with JWT interceptors
├── App.vue                    # Root component with page transitions
├── main.js                    # App entry with plugin registration
└── style.css                  # Tailwind + global styles + transitions
```

---

## 🎨 Color Theme

| Name | Hex | Usage |
|---|---|---|
| **Onyx** | `#0c0b0b` | Dark backgrounds, footer, scrollbar |
| **Ghost White** | `#f4f4f9` | Light backgrounds, text on dark |
| **Prussian Blue** | `#05204c` | Primary brand, navbar, hero, admin sidebar |
| **Wisteria Blue** | `#8297bb` | Secondary text, muted elements |
| **Bronze** | `#d48021` | CTAs, accents, active states, highlights |

---

## 🔤 Typography

- **Display**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — headings, hero text
- **Body**: [Inter](https://fonts.google.com/specimen/Inter) — all body text, UI elements

---

## 🛣️ Routes

### Public
| Path | Page | Description |
|---|---|---|
| `/` | Home | Hero landing page |
| `/sermons` | Sermons | Sermon archive with category filter |
| `/programmes` | Programmes | Upcoming church events |
| `/contact` | Contact | Contact form + church information |

### Auth
| Path | Page | Description |
|---|---|---|
| `/auth/login` | Login | Email/password sign-in |
| `/auth/register` | Register | Account creation |

### Admin (Protected)
| Path | Page | Description |
|---|---|---|
| `/admin` | Dashboard | Overview stats & tables |
| `/admin/evangelism` | Evangelism | Outreach activity records |
| `/admin/follow-ups` | Follow Ups | New convert management |
| `/admin/disciples` | Disciples | Discipleship progress |
| `/admin/reports` | Reports | Analytics & metrics |
| `/admin/users` | Users | User/role management |
| `/admin/settings` | Settings | Church configuration |

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/The-Saints-Center-Church.git
cd The-Saints-Center-Church

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:5173` |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 📱 PWA Features

This app is configured for Progressive Web App functionality:
- **Auto-updating** service worker (`registerType: 'autoUpdate'`)
- **Installable** on mobile and desktop
- **Offline-capable** (after first visit)
- **Custom theme color** (`#05204c` — Prussian Blue)
- Icons and manifest auto-generated via `vite-plugin-pwa`

---

## 🎭 Animation System

GSAP is used throughout the public pages for immersive animations:

- **`useGsap` composable** — Automatic `gsap.context()` scoping and cleanup on component unmount
- **ScrollTrigger** — Cards, sections, and content reveal on scroll
- **Stagger animations** — Sequential fade-in for grid items
- **Floating orbs** — Ambient background motion on hero section
- **Page transitions** — Slide-up transitions between routes via Vue `<Transition>`
- **Micro-interactions** — Hover effects on cards, buttons, and links via Tailwind

---

## 🔐 Authentication

- Admin routes are protected with a route guard checking for `tsc_token` in localStorage
- Currently uses demo authentication (placeholder)
- Ready for backend API integration via the Axios service

---

## 🔌 API Integration

The `src/services/api.js` module provides:
- Pre-configured Axios instance
- Automatic JWT Bearer token injection
- 401 response handling (auto-redirect to login)
- Base URL from `VITE_API_URL` environment variable

Set your API URL in `.env`:
```
VITE_API_URL=https://your-api.example.com/api
```

---

## 🗺️ Roadmap

- [ ] Figma design integration for all pages
- [ ] Backend API connection
- [ ] Real authentication flow
- [ ] Sermon audio/video player
- [ ] Google Maps integration on Contact page
- [ ] Push notifications (PWA)
- [ ] Admin dashboard charts (Chart.js / ApexCharts)
- [ ] Dark mode toggle

---

## 📍 Location

**The Saints Center**
Iba, Lagos State, Nigeria

---

## 📄 License

This project is private and proprietary to The Saints Center.
