# Sumit Karki - Portfolio Website

## 🎨 Website Overview

A **production-ready, modern dark-themed portfolio** with an integrated admin dashboard for easy content management. Built with React, Vite, and Framer Motion.

**Live Features:**
- ⚡ **Vite + React** - Lightning fast development and builds
- 🎬 **Framer Motion** - Smooth scroll-triggered animations
- 🎨 **Tailwind CSS v4** - Modern utility-first styling
- 🎛️ **Admin Dashboard** - Edit content without coding
- 📱 **Fully responsive** - Mobile-first design
- 🌌 **Dark mode** with cyan/blue neon accents
- 💫 **Interactive timeline** for leadership & activities
- 🎴 **Premium project cards** with hover effects
- 📊 **Skill tags** organized by category
- 🏆 **Awards showcase** with icon badges
- 📧 **Contact form** with validation
- ♿ **Accessibility optimized**
- 🔍 **SEO optimized** with structured data, meta tags, sitemap
- 📊 **Google Analytics** integration
- ⚡ **Performance monitoring** with Web Vitals tracking
- 🔐 **Secure admin** with environment variable password

---

## 🎛️ Admin Dashboard

**Manage your entire portfolio without touching code!**

- **Access**: `/admin`
- **Password**: Set via environment variable `VITE_ADMIN_PASSWORD`
- **Features**: Add/edit/delete experience, projects, skills, awards, and more

See `DASHBOARD_GUIDE.md` for complete documentation.

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
│   │   ├── Blog.jsx     # SEO blog section
│   │   ├── FAQ.jsx      # SEO FAQ section
│   │   ├── Awards.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  # All portfolio content
│   ├── utils/
│   │   └── performance.js    # Performance monitoring
│   ├── index.css         # Tailwind + custom animations
│   └── App.jsx
├── public/
│   ├── Image/
│   │   └── Sumit.jpeg    # Profile photo
│   ├── robots.txt        # Search engine instructions
│   ├── sitemap.xml       # SEO sitemap
│   ├── manifest.json     # PWA manifest
│   ├── google-analytics.js  # Analytics helpers
│   └── CNAME             # Custom domain
├── dist/                 # Build output (after npm run build)
├── SEO_SETUP_GUIDE.md    # Complete SEO implementation guide
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

# Create .env file and set admin password
echo "VITE_ADMIN_PASSWORD=your_password_here" > .env

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view your portfolio.
Access admin at [http://localhost:5173/admin](http://localhost:5173/admin).

### Building for Production
```bash
npm run build
```
Builds the app for production to the `dist` folder.

---

## 🌐 Deployment to Vercel

### Prerequisites
1. Create `.env` file with `VITE_ADMIN_PASSWORD=your_secure_password`
2. Add `.env` to `.gitignore` (already done)

### Deployment Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: Ready for production deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - **IMPORTANT**: Add environment variable:
     - Name: `VITE_ADMIN_PASSWORD`
     - Value: Your secure password
   - Click "Deploy"

3. **Add Custom Domain**:
   - In Vercel: Settings → Domains
   - Add `www.sumit-karki.com.np`
   - Update DNS at your registrar (see `DEPLOYMENT.md`)

**📖 See `DEPLOYMENT.md` for detailed deployment guide.**

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

## 🔍 SEO Features

This portfolio is **fully optimized for search engines** to rank #1 for "Sumit Karki":

### Technical SEO
- ✅ **Comprehensive meta tags** (title, description, keywords, author)
- ✅ **Open Graph tags** for social media sharing
- ✅ **Twitter Card** integration
- ✅ **Canonical URL** to prevent duplicate content
- ✅ **Structured Data (JSON-LD)** for Person, WebSite, and Projects schemas
- ✅ **robots.txt** for crawler instructions
- ✅ **sitemap.xml** for all pages and sections
- ✅ **PWA manifest** for progressive web app features

### Content for SEO
- ✅ **Blog section** with 4 SEO-optimized articles
- ✅ **FAQ section** with 8 keyword-rich Q&As and FAQ schema
- ✅ **Semantic HTML** (h1, h2, main, header tags)
- ✅ **Accessibility features** (skip links, ARIA labels, alt text)

### Analytics & Performance
- ✅ **Google Analytics 4** integration
- ✅ **Google Search Console** verification ready
- ✅ **Core Web Vitals** monitoring (LCP, FID, CLS, TTFB)
- ✅ **Performance tracking** utilities
- ✅ **Code splitting** for optimal bundle size
- ✅ **Lazy loading** support

### Setup Required
1. **Google Search Console**: Replace `YOUR_VERIFICATION_CODE_HERE` in `index.html`
2. **Google Analytics**: Replace `G-XXXXXXXXXX` in `index.html` with your Measurement ID
3. **Content**: Write actual blog posts (templates provided in Blog component)
4. **Backlinks**: Add website URL to LinkedIn, GitHub, and other profiles

📖 **See `SEO_SETUP_GUIDE.md` for complete step-by-step instructions!**

---

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: ~380KB (gzipped: ~115KB)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2s
- **Core Web Vitals**: All metrics in "Good" range

---

## 📞 Need Help?

- Check the [Vite docs](https://vite.dev/) for build issues
- Visit [Vercel docs](https://vercel.com/docs) for deployment help
- Open issues on GitHub for bugs or feature requests

---

**Built by Sumit Karki using React & Vite**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

