# House of Wings – Website Clone

A TypeScript + React clone of [House of Wings NYC](https://houseofwingsnyc.com/), built with Vite.

## Stack

- **React 18** + **TypeScript**
- **Vite** for dev and build
- No UI framework; custom CSS with CSS variables

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/` – Header, Hero, ImageSlider, About, OrderCta, FollowSection, Testimonials, Locations, Footer
- `src/data/content.ts` – Copy, testimonials, locations, and external links
- `src/types/index.ts` – TypeScript types for content
- `src/index.css` – Global styles and layout

## Features

- Responsive layout with mobile nav
- Image slider (Unsplash placeholders)
- Testimonials and locations from the original site
- Order link to Make It Butter; Instagram and Restaurantji links
- Dark theme with orange accent
