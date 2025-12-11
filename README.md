# SoloArtisan — Handcrafted Haven Lite

SoloArtisan is a full-stack artisan storefront built as part of **WDD 430 – Web Full-Stack Development**.  
This project simulates a minimal e-commerce experience featuring:

- A product catalog  
- Product detail pages  
- Artisan profiles  
- Search, filtering & sorting  
- Favorites system  
- API routes  
- A fully designed frontend with a custom design system

The project began in Week 02 and evolved through Weeks 03–07, following the course's project sprint structure.

---

# 🚀 Technologies Used

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **PostCSS + Autoprefixer**
- **ESLint + Prettier**
- **Lucide Icons**
- **LocalStorage (favorites system)**
- **Vercel (deployment)**

---

# 📂 Project Structure

./
├── app
│   ├── about/               # About the project
│   ├── contact/             # Contact page
│   ├── products/
│   │   ├── page.tsx         # Product catalog (search + filters + sorting)
│   │   └── [id]/page.tsx    # Product detail page
│   ├── artisans/
│   │   ├── page.tsx         # Artisan list
│   │   └── [id]/page.tsx    # Artisan profile
│   ├── api/
│   │   └── products/
│   │       ├── route.ts     # GET all products (API)
│   │       └── [id]/route.ts# GET product by ID (API)
│   ├── favorites/           # (Optional page for favorite products)
│   ├── globals.css          # Global styles & design variables
│   ├── layout.tsx           # Global layout (header/footer)
│   └── page.tsx             # Home
│
├── components/              # Reusable UI components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   └── ProductFilters.tsx
│
├── data/
│   ├── products.ts          # Mock product data
│   └── artisans.ts          # Mock artisan data
│
├── public/                  # Static assets (images, icons)
│
├── design/
│   ├── DESIGN.md            # Full design system documentation
│   └── pallete.png          # Color palette
│
├── tailwind.config.js
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json

# 🎨 Design System
The design system is defined in:

/design/DESIGN.md (complete documentation)

/design/pallete.png (color palette)

/app/globals.css (CSS variables: colors, typography, spacing)

The theme uses:

Primary color: #7A4F2B

Secondary color: #F5E9DE

Accent color: #A3C4BC

Neutral palette for backgrounds & typography

Inter (headings)

Roboto (body text)

Tailwind integrates these values through:

// tailwind.config.js
extend: {
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    accent: "var(--color-accent)"
  },
  fontFamily: {
    heading: "var(--font-heading)",
    body: "var(--font-body)"
  }
}

# 🛒 Features Implemented
✔️ Product Catalog
Live search

Category filtering

Sorting (price/name)

Pageless grid layout

✔️ Product Detail Page
Large product image

Price, description

“Add to Cart” placeholder

API integration for product fetch

✔️ Artisan Profiles
Artisan list

Detailed artisan profile page

Specialties section

✔️ API Routes
/api/products → returns all products

/api/products/[id] → returns product by ID

✔️ Favorites System
Heart icon on product cards

Saves in localStorage

Optional /favorites page supported

✔️ Clean UI Components
Header

Footer

Hero

Button

ProductCard

ProductFilters

# 🧩 Running the Project Locally
## 1. Clone the repository

git clone https://github.com/nunosilvaferreira/soloartisan
cd soloartisan

### 2. Install dependencies

npm install

##### 3. Start development server

npm run dev

###### 4. Open in your browser

http://localhost:3000

# 🔧 API Endpoints
GET all products

/api/products
GET a single product

/api/products/:id
Both return JSON and simulate a real backend.

# 📘 Project Board (BYU-I Weekly Tasks)
Weekly tasks, issues, and progress tracking:

🔗 https://github.com/users/nunosilvaferreira/projects/1

Includes:

Sprint planning

Weekly WDD430 tasks

To Do → In Progress → Done workflow

Evidence for weekly assignments

# 🌐 Deployment (Vercel)
SoloArtisan is deployed using Vercel.

Deploy manually:

vercel

Or import directly from GitHub:

https://vercel.com/new

# 📄 License
Academic project for educational purposes —
BYU-Idaho / Pathway Connect — WDD 430.

You may reuse this code for personal learning.

# 📬 Contact
Developed by Nuno Silva Ferreira
For academic use (WDD 430, Winter 2025).