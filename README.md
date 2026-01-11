# Sumit Karki - React Portfolio Website

## 🎨 Website Overview

A **production-ready, modern dark-themed portfolio** built with React, Vite, and Framer Motion. Features glassmorphism effects, smooth animations, responsive design, and interactive timeline components.

**Live Features:**
- ⚡ **Vite + React** - Lightning fast development and builds
- 🎬 **Framer Motion** - Smooth scroll-triggered animations
- 🎨 **Tailwind CSS v4** - Modern utility-first styling
- 📱 **Fully responsive** - Mobile-first design
- 🌌 **Dark mode** with cyan/blue neon accents
- 💫 **Interactive timeline** for leadership & activities
- 🎴 **Premium project cards** with hover effects
- 📊 **Skill tags** organized by category
- 🏆 **Awards showcase** with icon badges
- 📧 **Contact form** with validation
- ♿ **Accessibility optimized**

---

## 📁 Project Structure

```
SumitPortfolia/
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Leadership.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Awards.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  # All portfolio content
│   ├── index.css         # Tailwind + custom animations
│   └── App.jsx
├── public/
│   ├── Image/
│   │   └── Sumit.jpeg    # Profile photo
│   └── CNAME             # Custom domain
├── dist/                 # Build output (after npm run build)
├── package.json
├── vite.config.js
└── vercel.json           # Vercel configuration
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control

### Installation & Running
```bash
# Clone or navigate to the project
cd SumitPortfolia

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your app.

### Building for Production
```bash
npm run build
```
Builds the app for production to the `dist` folder.

---

## 🌐 Deployment to Vercel

### Option 1: Automatic (Recommended)
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: migrate portfolio to React with animations"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy
   - Add your custom domain `www.sumit-karki.com.np` in settings

### Option 2: Manual Deploy
```bash
# Build the project
npm run build

# Deploy using Vercel CLI (if installed)
npx vercel --prod

# Or upload the dist/ folder manually
```

### Custom Domain Setup
Your `CNAME` file is already configured in `public/CNAME` with `www.sumit-karki.com.np`.

---

## 🎨 Customization Guide

### Update Portfolio Content
Edit `src/data/portfolioData.js` to change:
- Personal information
- Experience and projects
- Skills and awards
- Contact details

### Change Colors
Update the color scheme in `tailwind.config` within `src/index.css`:
```css
:root {
  --color-primary: #06b6d4; /* Cyan */
  --color-secondary: #0ea5e9; /* Blue */
}
```

### Add New Sections
Create new components in `src/components/` and import them in `src/App.jsx`.

---

## 🛠️ Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Vercel** - Hosting platform

---

## 📝 Scripts Available

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: ~380KB (gzipped: ~115KB)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2s

---

## 📞 Need Help?

- Check the [Vite docs](https://vite.dev/) for build issues
- Visit [Vercel docs](https://vercel.com/docs) for deployment help
- Open issues on GitHub for bugs or feature requests

---

**Built with ❤️ by Sumit Karki using React & Vite**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
