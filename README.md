# Eason Chang - Personal Homepage

A modern, animated personal homepage built with Next.js 15, featuring a beautiful Bento box layout inspired by Apple's design language.

## ✨ Features

- **🎨 Modern Bento Grid Layout** - Apple-inspired card-based design
- **🌙 Dark/Light Mode** - Seamless theme switching with next-themes
- **🎭 Smooth Animations** - Micro-interactions powered by Framer Motion
- **📱 Fully Responsive** - Optimized for all devices
- **🚀 Performance Optimized** - Built with Next.js 15 and TailwindCSS v4
- **🔍 SEO Friendly** - Comprehensive meta tags, sitemap, and structured data
- **⚡ Fast Loading** - Optimized for Core Web Vitals

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **SEO**: next-seo + next-sitemap
- **Language**: TypeScript
- **Package Manager**: pnpm

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Run the development server**
   ```bash
   pnpm dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO and theme provider
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles and animations
├── components/
│   ├── cards/              # Individual Bento cards
│   │   ├── profile-card.tsx
│   │   ├── github-card.tsx
│   │   └── ...
│   ├── ui/                 # Reusable UI components
│   │   ├── bento-card.tsx  # Base card component
│   │   └── theme-toggle.tsx
│   ├── bento-grid.tsx      # Main grid layout
│   ├── theme-provider.tsx  # Theme configuration
│   └── structured-data.tsx # SEO structured data
```

## 🎨 Customization

### Adding New Cards

1. Create a new card component in `src/components/cards/`
2. Follow the existing pattern using the `BentoCard` wrapper
3. Add your card to the `BentoGrid` component

### Updating Personal Information

Update the following files with your information:
- `src/components/cards/profile-card.tsx` - Name and title
- `src/components/cards/*.tsx` - Social media links
- `src/app/layout.tsx` - SEO metadata
- `src/components/structured-data.tsx` - Structured data

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with optimized settings

### Build for Production

```bash
pnpm build
```

## 📊 Performance

- **Lighthouse Score**: Optimized for 100/100 across all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimal with code splitting
- **SEO**: Comprehensive optimization

## 🔗 Social Links

The homepage includes cards for:
- GitHub
- Twitter/X
- LinkedIn
- Email
- Personal Website
- Resume
- Buy Me a Coffee
- Facebook

---

Built with ❤️ by [Eason Chang](https://easonchang.com)
