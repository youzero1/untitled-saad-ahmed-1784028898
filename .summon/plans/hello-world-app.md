---
status: pending
title: Basic Hello World App
---

1. Create /app/index.html — the root HTML entry point with a `<div id="root">` mount point and a script tag pointing to /app/src/main.tsx.

2. Create /app/src/styles/global.css — start with `@import "tailwindcss";` to enable Tailwind v4 styles globally.

3. Create /app/src/main.tsx — import global.css, import React and ReactDOM, and render the top-level App component into the #root element.

4. Create /app/src/App.tsx — a simple page component that displays a centered "Hello, World!" heading with a short welcome subtitle, styled with Tailwind utility classes.

5. Create /app/vite.config.ts — configure Vite with the React plugin and the @tailwindcss/vite plugin so styles are processed correctly.

6. Create /app/tsconfig.json and /app/tsconfig.node.json — TypeScript configuration files with path alias `@/*` pointing to `src/*`, strict mode enabled, and ESM module output.

7. Create /app/package.json — define project metadata, scripts (dev, build, preview), and dependencies: react, react-dom, @tailwindcss/vite, and dev dependencies: vite, @vitejs/plugin-react, typescript.

Expected outcome: Running `npm install && npm run dev` starts a local server showing a clean, centered "Hello, World!" page with Tailwind styling applied.
