# AgriIntel AI Dashboard

An AI-Powered Smart Farming Platform built with **Next.js**, **TypeScript**, and modern web technologies.

## Overview

AgriIntel AI helps farmers monitor crops, predict yields, detect diseases, and track market prices with intelligent, data-driven insights.

## Project Structure

```
src/
├── app/
│   ├── auth/            # Authentication routes
│   ├── dashboard/       # Dashboard routes
│   ├── favicon.ico
│   ├── globals.scss     # Global design tokens & styles
│   ├── layout.tsx       # Root layout
│   ├── page.module.scss # Home page CSS module
│   └── page.tsx         # Home page
├── assets/              # Static assets (images, icons, fonts)
└── components/
    ├── common/          # Shared, reusable UI components
    │   ├── Button/
    │   │   ├── Button.module.scss
    │   │   └── Button.tsx
    │   ├── DatePicker/
    │   │   ├── DatePicker.tsx
    │   │   └── index.ts
    │   └── Header/
    │       ├── Header.tsx
    │       └── index.ts
    └── sections/        # Page-level section components
        ├── Challenges.tsx
        ├── DashboardMockup.tsx
        ├── Features.tsx
        └── Hero.tsx
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules + Tailwind CSS
- **UI Library**: shadcn/ui
- **State**: TanStack Query

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
