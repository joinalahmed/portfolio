# Firebase Studio Next.js Project

This is a Next.js application bootstrapped with Firebase Studio.

## Getting Started

This project uses Next.js, React, Tailwind CSS, ShadCN UI components, and Genkit for AI functionalities.

### Prerequisites

- Node.js (version 18.x or higher recommended)
- npm or yarn

### Development

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `dev` script) with your browser to see the result.

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Genkit Development

If your project uses Genkit for AI features, you might need to run the Genkit development server separately:

```bash
npm run genkit:dev
# or for watching changes
npm run genkit:watch
```

Ensure your Genkit flows are correctly referenced and imported (e.g., in `src/ai/dev.ts`).

## Key Technologies

- **Next.js**: React framework for production.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Tailwind CSS**: Utility-first CSS framework.
- **ShadCN UI**: Re-usable UI components.
- **Genkit**: Toolkit for building AI-powered applications.

## Project Structure

- `src/app/`: Contains the core application pages using the Next.js App Router.
- `src/components/`: Shared UI components.
  - `src/components/ui/`: ShadCN UI components.
- `src/lib/`: Utility functions, data fetching logic, etc.
- `src/ai/`: Genkit related code, including flows.
  - `src/ai/flows/`: Genkit flow implementations.
- `src/content/blog/`: Markdown files for blog posts.
- `public/`: Static assets.

## Learn More

To learn more about the technologies used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [React Documentation](https://react.dev/) - learn about React.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
- [ShadCN UI Documentation](https://ui.shadcn.com/docs) - learn about ShadCN UI components.
- [Genkit Documentation](https://firebase.google.com/docs/genkit) - learn about Genkit.

## Deployment

This application is configured for deployment on Firebase App Hosting. Refer to the [Firebase App Hosting documentation](https://firebase.google.com/docs/app-hosting) for more details.
