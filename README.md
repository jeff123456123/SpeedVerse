# SPEEDVERSE

**SPEEDVERSE** is an unofficial fan site celebrating YouTuber IShowSpeed—his SIUUU celebrations, world tours, football and sports videos, and reactions.

**Live site:** [SPEEDVERSE | IShowSpeed Fan Site](https://speed-verse.vercel.app)

> Started from the JavaScript Mastery Zentry tutorial template. Redesigned and rebranded for IShowSpeed, with a new /join page, routing, and a Web3Forms signup backend.

## Tech stack

- React
- Vite
- Tailwind CSS
- GSAP and `@gsap/react`
- React Router DOM
- Web3Forms for the Speed Squad signup form

## Run locally

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Configure the signup form

Create a `.env` file in the project root and add your Web3Forms access key:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

Vite exposes `VITE_` variables to client-side code. Do not put private or privileged secrets in this variable.

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite. The home page is at `/`, and the Speed Squad signup page is at `/join`.

## Available scripts

```bash
npm run dev    # Start Vite's development server
npm run build  # Create a production build in dist/
npm run preview # Preview the production build locally
npm run lint   # Run ESLint
```

## Features

- Responsive pages for the IShowSpeed fan site and Speed Squad signup.
- GSAP-powered scroll animations, video transitions, and interactive card effects.
- Client-side routing for `/` and `/join`, with Vercel rewrites for direct route visits.
- Signup form with validation and loading, success, and error feedback, submitted to Web3Forms.
- Hero and feature videos with deferred loading where possible.

This is an unofficial fan project and is not affiliated with or endorsed by IShowSpeed.
