# Dean Burger

Welcome to Dean Burger! This is a demo burger ordering app created in NextJS / React.

The name is inspired by my son, Dean! :smiley:

## Demo

- App: https://dean-burger.vercel.app/
- Storybook: https://dean-burger-storybook.vercel.app/

## Features

- Menu (Product List)
  - Searchable via input in the header
- Product Details
  - Add To Cart
- Cart
  - Update quantities and delete items from the Cart page
  - Cart/order is persisted in a real database
    - If authenticated, the order is tied to the user. If user signs out and back in, 
    the order will be returned
    - If not authenticated, user can continue as a guest. A session cookie is stored
    with the order id. Refreshing/changing pages maintains the order
    - If an order is started as a guest and the user signs in, the order will then be 
    linked to the user (unless user had an active order already)
- Authentication
    - Create Account and Sign In functional and storing to a real database (passwords are hashed)
- [Storybook](https://dean-burger-storybook.vercel.app/) contains presentational components
- Dark Mode / Light Mode Themes
  - Defaults to system preference but can be changed by toggle in the header

## Tech Stack

- [Next.js](https://nextjs.org) and [React](https://react.dev/): originally created 
via [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- [Typescript](https://www.typescriptlang.org/): type-safety
- [Tailwind](https://tailwindcss.com/): styling - all components are custom written
- [Class Variance Authority](https://cva.style/docs): to cleanly handle complex variant styling
- [Next Auth](https://next-auth.js.org/): authentication (with Credentials provider)
- [PostgreSQL](https://www.postgresql.org/): database (users and orders) - hosted on Vercel
- [Prisma](https://www.prisma.io/): ORM query system
- [Vitest](https://vitest.dev/api/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
for unit tests
- Hosted on [Vercel](https://vercel.com/)
- [Font Awesome](https://docs.fontawesome.com/v5/web/use-with/react) for icons
- [Lefthook](https://github.com/evilmartians/lefthook) for git hooks

## TODO
Things I would have liked to get to if I had more time:

- Zod validations on API inputs/responses
- Theme toggle (dark/light) in Storybook
- More unit testing
- Playwright tests
- Custom error.tsx page(s)

## Running Locally

Install dependencies:
```bash
npm i
```
This will automatically run `npm run prisma:generate` to generate the prisma client.

Sync environment variables with Vercel (requires [Vercel CLI](https://vercel.com/docs/cli) and authentication):
```bash
vercel env pull .env.development.local
```

Run the Next server:
```bash
npm run dev
```

Run Storybook:
```bash
npm run storybook
```

## Database

The PostgreSQL database is hosted on Vercel. The connection details are in
Vercel's ENV variables.

After making changes to table structure, the Prisma Schema and Client need to be regenerated:

```bash
npm run prisma:pull
npm run prisma:generate
```
