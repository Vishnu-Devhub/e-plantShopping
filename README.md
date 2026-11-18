# e-plantShopping — Paradise Nursery
 
**Paradise Nursery** is an online houseplant shop built with React, Redux Toolkit and Vite. This repository, `e-plantShopping`, is the final project for the IBM React course.
 
## Features
- **Landing page** with a background image, the company name, an About Us paragraph and a **Get Started** button.
- **Product listing page** with houseplants grouped into categories (Air Purifying, Aromatic Fragrant, Insect Repellent, Medicinal, Low Maintenance). Each plant shows a thumbnail, name, description and price, plus an **Add to Cart** button that disables after the plant is added.
- **Navbar** with links to Home, Plants and the Cart, and a cart icon that shows the live number of items.
- **Shopping cart page** with the total number of plants, the total cost, and for each plant its thumbnail, unit price, subtotal, +/- quantity buttons and a Delete button. It also has **Continue Shopping** and **Checkout** (Coming Soon) buttons.
## Tech stack
- React 18 and Vite
- Redux Toolkit (`createSlice`, `configureStore`) and React Redux
- Deployed with GitHub Pages (`gh-pages`)
## Run locally
```bash
npm install
npm run dev
```
 
## Deploy
```bash
npm run deploy
```