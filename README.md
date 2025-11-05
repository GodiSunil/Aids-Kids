# Ravi Teja Childrens Home - Modern Homepage

A modern, responsive homepage redesign for Ravi Teja Childrens Home built with Next.js (App Router) and Tailwind CSS.

## Features

- ✅ **Modern, Clean UI** with Tailwind CSS
- ✅ **Fully Responsive** design for mobile, tablet, and desktop
- ✅ **Smooth Animations** (fade-in, slide-up, hover effects)
- ✅ **Accessible** semantic HTML structure
- ✅ **All Original Content Preserved** from the original website

## Sections Included

1. **Header/Navigation** - Sticky navigation with logo and menu
2. **Hero Section** - Full-width hero with gradient overlay and call-to-action
3. **Statistics Banner** - Eye-catching statistics with icons
4. **Welcome Section** - Two-column layout with content and image
5. **Our Programs** - Three responsive program cards with hover effects
6. **We In Media** - Video and article section
7. **Mission Section** - Clean mission statement
8. **Footer** - Comprehensive footer with links and social media

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the homepage.

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**
- **React Icons** (for icons)

## Customization

### Colors

The color palette is defined in `tailwind.config.js`:
- Primary Dark: `#1a1a2e`
- Primary Teal: `#00d4ff`
- Primary Cyan: `#00b8d4`

### Fonts

The project uses Poppins and Inter fonts, loaded from Google Fonts in `app/globals.css`.

### Images

Replace placeholder images in `app/page.tsx` with your actual images. Current placeholders use Unsplash for demonstration.

## Project Structure

```
.
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main homepage component
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Notes

- The YouTube video embed URL is a placeholder. Replace it with your actual video ID.
- All images are using placeholder URLs. Replace them with your actual image assets.
- The navigation links use hash anchors for smooth scrolling. Update them based on your routing needs.
