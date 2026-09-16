// Single source of truth for the stack shown on Home (grouped, terse) and
// About (grouped, exhaustive) — keeps the two from drifting out of sync.
export const skillGroups = [
  {
    label: "Backend & Architecture",
    tools: "Node.js, NestJS, Microservices, REST / GraphQL, WebSockets",
  },
  {
    label: "Frontend & UX",
    tools: "TypeScript, React, Next.js, Redux / Zustand, Tailwind CSS",
  },
  {
    label: "Cloud & DevOps",
    tools: "AWS (EC2, S3, RDS, Lambda), Docker, CI/CD Pipelines",
  },
  {
    label: "Databases & Caching",
    tools: "MySQL, MongoDB, Redis",
  },
];

// Drawn from the actual stacks of the shipped projects listed in `projects.ts`
// (Vidnik, Axiom, Exyar, PMS, Zadlaw, HR Software, Save In Gold CRM, Orders
// Delivery, Real Estate) — every entry below is used in production code.
export const technologyGroups = [
  {
    label: "Languages & Runtime",
    items: ["TypeScript", "JavaScript", "Node.js", "SQL", "Sass / SCSS"],
  },
  {
    label: "Backend",
    items: [
      "NestJS",
      "Express.js",
      "REST APIs",
      "Swagger / OpenAPI",
      "WebSockets",
      "Socket.IO",
      "LiveKit",
      "JWT",
      "Passport.js",
      "class-validator",
      "Multer",
      "Helmet",
      "Rate Limiting",
    ],
  },
  {
    label: "Databases & Caching",
    items: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "PostgreSQL",
      "Sequelize",
      "Redis",
      "ioredis",
      "Redlock",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Radix UI / shadcn",
      "HeroUI",
      "Zustand",
      "Redux",
      "TanStack Query",
      "SWR",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "React Three Fiber",
      "Recharts",
      "ApexCharts",
      "Lexical",
      "TipTap",
      "Yjs",
      "Embla / Swiper",
      "i18next",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS S3",
      "AWS SES",
      "AWS Lambda",
      "AWS SSM",
      "AWS Secrets Manager",
      "AWS Rekognition",
      "AWS Polly",
      "AWS Comprehend",
      "Docker",
      "Docker Compose",
      "Nginx",
      "PM2",
      "CI/CD Pipelines",
      "Firebase",
      "Google Cloud Pub/Sub",
      "Google Cloud Speech",
    ],
  },
  {
    label: "Integrations & Services",
    items: [
      "Stripe",
      "QuickBooks",
      "OpenAI",
      "Google OAuth",
      "Apple Sign-In",
      "Google Play Billing",
      "Firebase Cloud Messaging",
      "Microsoft Graph",
      "Nodemailer",
      "SMSGlobal",
      "reCAPTCHA",
      "Mapbox",
      "Mixpanel",
      "Sentry",
      "New Relic",
    ],
  },
  {
    label: "Background Jobs & Observability",
    items: [
      "node-cron",
      "Agenda",
      "NestJS Schedule",
      "Winston",
      "Pino",
      "Elasticsearch Logging",
    ],
  },
  {
    label: "Testing & Tooling",
    items: [
      "Jest",
      "Supertest",
      "Cypress",
      "Testing Library",
      "ESLint",
      "Prettier",
      "Storybook",
      "Webpack",
      "Git",
    ],
  },
];

// Flat view, derived so it can never drift from the grouped source above.
export const technologies = technologyGroups.flatMap((g) => g.items);
