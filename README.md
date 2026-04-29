# Aura Mart: Local Store E-commerce Platform

A polished, internship-ready React e-commerce project for a local store. It uses React state, Tailwind CSS, and Lucide-React icons to demonstrate clean component structure, cart logic, filtering, sorting, responsive design, and modern UI polish.

## Features

- Product catalog with high-quality product images, titles, descriptions, categories, and prices
- Filter by category: Electronics, Groceries, Lifestyle
- Sort by price: low to high, high to low
- Functional shopping cart with add, remove, quantity updates, and real-time total calculation
- Slide-out cart panel with smooth interactions
- Product detail modal with expanded information
- Modern glassmorphism UI using soft gradients, translucent panels, blur, and smooth hover states
- Responsive layout for mobile, tablet, and desktop
- Clear comments explaining cart logic and filtering/sorting state

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide-React

## Project Structure

```text
src/
  components/
    Cart.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    ProductCard.jsx
    ProductModal.jsx
  data/
    products.js
  App.jsx
  index.css
  main.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

This project includes deployment settings for both Netlify and GitHub Pages.

For Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

For GitHub Pages, the included GitHub Actions workflow uses the `build:github-pages` script so assets load correctly from the `/auramart/` path.

Expected GitHub Pages URL:

```text
https://kalakonda-akshay.github.io/auramart/
```

## Portfolio Note

This project intentionally uses standard React `useState` instead of external state management so the cart, modal, filter, and sorting logic are easy to read and explain during internship interviews.
