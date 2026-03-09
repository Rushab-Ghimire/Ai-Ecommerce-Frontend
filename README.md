<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->
# AI-Ecommerce Website Project

## Project Overview
AI-Ecommerce Website is a web application designed to simulate a modern online shopping platform with AI-based concepts. The system focuses on providing a clean user interface, efficient product interaction, and scalable architecture using modern web technologies.

This project demonstrates practical implementation of frontend frameworks, API communication, database integration, and containerized deployment.

## Tech Stack

### Frontend
- React JS – Used for building a component-based user interface.
- Tailwind CSS – Utility-first CSS framework for responsive and modern design.
- JavaScript XML (JSX) – Syntax extension used in React for writing UI components.
- Axios – Used for making API calls and handling communication between services.

### Database
- PostgreSQL – Relational database used for storing application data.

### Deployment / Development Environment
- Docker – Used for containerization and consistent development environment.

## Key Features
- Responsive and modern user interface
- Component-based architecture using React
- API integration using Axios
- Structured data management with PostgreSQL
- Containerized environment using Docker
- Scalable and maintainable project structure

## Project Structure
ai-ecommerce/
│
├── frontend/ # React frontend application
├── backend/ # Backend services and APIs
├── database/ # PostgreSQL database configuration
├── docker/ # Docker related configuration
└── README.md # Project documentation

## Installation and Setup

Clone the repository:
https://github.com/Rushab-Ghimire/Ai-Ecommerce-Frontend.git


## Steps to open:
In Terminal: [Frontend]
Step-1 : cd ai-ecommerce 
Step-2 : npm run dev

Run the project using Docker:
[backend]
docker-compose up

After running the containers, open the application in your browser:
- http://localhost:3000


## Purpose of the Project
The purpose of this project is to demonstrate the development of a modern web application using React, API communication, relational databases, and containerization technologies.
