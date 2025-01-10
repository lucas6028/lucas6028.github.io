# Hao-Ping's Portfolio

This project is a personal portfolio website built using React, TypeScript, and Vite. It showcases various projects, skills, and experiences.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that provides a fast development environment.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Framer Motion**: A library for animations and gestures in React.
- **Three.js**: A JavaScript 3D library for creating 3D graphics in the browser.

## Project Structure

```plaintext
.env
.github/
  workflows/
    deploy.yml
.gitignore
.npmrc
eslint.config.js
index.html
notes.md
package.json
pnpm-lock.yaml
postcss.config.js
public/
  desktop_pc/
    license.txt
    scene.gltf
    textures/
  planet/
    license.txt
    scene.gltf
    textures/
README.md
src/
  App.tsx
  assets/
    company/
    index.ts
    tech/
  components/
    ...
  constant/
    ...
  hoc/
  index.css
  main.tsx
  style.ts
  types/
  utils/
  vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Create a `.env` file and add necessary environment variables.

## Development

To start the development server, run:

```sh
pnpm run dev
```

## Build

To build the project for production, run:

```sh
pnpm run build
```

## Lint

To lint the code, run:

```sh
pnpm run lint
```

## Preview

To preview the production build, run:

```sh
pnpm run preview
```

## Deployment

The project is configured to deploy to GitHub Pages using a GitHub Actions workflow. The deployment configuration can be found in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Contribution

- **Javascript Mastery**: `https://github.com/adrianhajdin/project_3D_developer_portfolio`
- **Gaming Desktop PC**: `https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66`
- **Stylized planet**: `https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70`
- **Hao-Ping Logo**: `https://logo.com`
- **Email Receiving**: `https://www.emailjs.com/`
