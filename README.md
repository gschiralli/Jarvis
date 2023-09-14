# Jarvis
Jarvis is an AI-SAAS project that offers a suite of AI tools.

## Description
This project was created with the primary goal of gaining hands-on experience with various AI technologies and APIs. It provides a practical playground to explore and experiment with cutting-edge AI tools. Below are the key features of the project:

## Features:
- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
## Demo and Known Issues

- **Demo Link:** You can access the project's demo https://jarvis-zeta.vercel.app/

- **Known Issues:**
  - Due to the hobby-tier hosting on Vercel, some routes may encounter errors or limitations, especially when dealing with high API usage.
  - Certain features may be limited or restricted in the demo version.
  
### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/gschiralli/Jarvis.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```
