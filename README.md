# SoloArtisan — Handcrafted Haven Lite

SoloArtisan is a project developed for **WDD 430 – Web Full-Stack Development**, designed to build a Next.js artisan storefront demo.  
The goal is to create a minimal e-commerce experience with an artisan profile, a product catalog, product pages, and a clean design system.

This repository includes the foundational setup, design planning, dependencies, and initial file structure required for Week 02.

---

## 🚀 Technologies Used

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **PostCSS & Autoprefixer**
- **ESLint + Prettier (with Tailwind plugin)**
- **CSS Variables for the design system**
- **Node.js 18+**

---

## 📂 Project Structure

```bash
./
├── app
│   ├── globals.css        # Global styles + color & typography variables
│   ├── layout.tsx         # Global layout (Header + Footer integration)
│   └── page.tsx           # Home page
├── design
│   ├── DESIGN.md          # Design documentation (palette, typography, spacing)
│   └── pallete.png        # Official color palette
├── public                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.js     # Tailwind config extended with design variables
└── tsconfig.json
🎨 Design System
The visual system is located under:

bash
Copiar código
/design
This includes:

Color palette (pallete.png)

Full design documentation (DESIGN.md) covering:

Primary / Secondary / Accent colors

Typography guidelines

Spacing system

Component principles

Accessibility notes

Design variables are implemented in:

bash
Copiar código
/app/globals.css
And integrated into Tailwind via:

arduino
Copiar código
/tailwind.config.js
🧩 Running the Project
1. Clone the repository
bash
Copiar código
git clone https://github.com/nunosilvaferreira/soloartisan
cd soloartisan
2. Install dependencies
bash
Copiar código
npm install
3. Start the development server
bash
Copiar código
npm run dev
4. Open in browser
arduino
Copiar código
http://localhost:3000
✅ GitHub Project Board
All project planning for Week 02 is available here:

🔗 Project Board:
https://github.com/users/nunosilvaferreira/projects/1

The board includes:

User stories (issues)

Task progression

Week 02 work items

To Do → In Progress → Review → Done workflow

📘 Important Documentation
Design System: /design/DESIGN.md

Color Palette: /design/pallete.png

Global Styles: /app/globals.css

Tailwind Configuration: /tailwind.config.js

📄 License
Academic project for educational purposes — BYU-Idaho / Pathway.
You may reuse this code for learning.

📬 Contact
Developed by Nuno Silva Ferreira.