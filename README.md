# Dipal Katuwal — Portfolio

A production-ready Next.js 14 portfolio site converted from a single HTML file.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Playfair Display, Courier Prime, Share Tech Mono, VT323)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

This is a standard Next.js app — it deploys anywhere Next.js runs (Netlify, Railway, Render, self-hosted).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with font imports & metadata
│   ├── page.tsx         # Home page composition
│   └── globals.css      # Global styles, CSS variables, animations
├── components/
│   ├── Navbar.tsx        # Fixed nav with active section tracking
│   ├── HeroSection.tsx   # Hero + profile grid
│   ├── SkillsSection.tsx # Skills table
│   ├── ProjectsSection.tsx # Project cards + modal
│   ├── ProjectModal.tsx  # Project detail modal
│   ├── WorksSection.tsx  # Experience + education
│   └── Footer.tsx        # Footer
├── lib/
│   ├── data.ts           # All portfolio content (projects, skills, experience)
│   └── useScrollReveal.ts # Scroll reveal hook
└── types/
    └── index.ts          # TypeScript interfaces
```

## Customization

All portfolio content lives in `src/lib/data.ts`. Edit:
- `PROJECTS` — your projects
- `SKILLS` — your tech stack
- `EXPERIENCE` — work history
- `EDUCATION` — education details

Personal info (name, email, photo) is in `src/components/HeroSection.tsx`.

## Adding a Resume

Drop your `resume.pdf` into the `public/` directory. The download link is already wired up.
