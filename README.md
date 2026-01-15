# Infonexa

Modern IT solutions and digital services website built with React, TypeScript, and Tailwind CSS.

![Infonexa](https://img.shields.io/badge/Infonexa-IT%20Solutions-blue)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)

## Overview

Infonexa is a professional IT services company website showcasing cloud computing, cybersecurity, digital transformation, and AI solutions. The site features a modern, responsive design with smooth animations and optimal performance.

## Features

- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- **SEO Ready** - Meta tags, semantic HTML, sitemap, and structured data
- **Modern UI** - Smooth animations with Framer Motion, video hero sections
- **Accessible** - ARIA labels, keyboard navigation, and semantic markup

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router | Navigation |
| Embla Carousel | Sliders |

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/infonexa.git
cd infonexa

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder, ready for deployment.

## Project Structure

```
infonexa/
├── public/              # Static assets
│   ├── videos/          # Hero section videos
│   └── images/          # Logo and static images
├── src/
│   ├── components/
│   │   ├── home/        # Homepage sections
│   │   ├── layout/      # Header, Footer, Layout
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities
│   ├── pages/           # Route pages
│   ├── App.tsx          # App entry point
│   └── main.tsx         # React entry point
├── index.html           # HTML template
└── tailwind.config.ts   # Tailwind configuration
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, testimonials |
| `/services` | Full services and solutions listing |
| `/about` | Company story and mission |
| `/team` | Team members |
| `/contact` | Contact form and information |

## Deployment

The site can be deployed to any static hosting provider:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - Use `gh-pages` package
- **Custom Server** - Serve the `dist` folder

## Performance

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## License

MIT License - See [LICENSE](LICENSE) for details.

## Contact

**Infonexa**
- Website: [infonexa.com](https://infonexa.com)
- Email: contact@infonexa.com
