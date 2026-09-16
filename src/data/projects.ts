export type CaseStudy = {
  problem: string;
  approach: string;
  result: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  caseStudy: CaseStudy;
  myContribution: string[];
  stack: string[];
  photos: string[];
  links: { label: string; href: string }[];
};
const vidnikProject = {
  slug: "vidnik",
  title: "Vidnik",
  subtitle:
    "A modern halal matchmaking platform that helps Muslims connect for marriage through secure and respectful interactions. The application includes a mobile app for users and a backend system supporting authentication, profile management, matchmaking, messaging, and AI-based identity verification. The platform emphasizes privacy, guardian (wali) involvement, and culturally aligned communication.",
  caseStudy: {
    problem:
      "Muslims looking for marriage needed a platform that felt safe, private, and culturally aligned — not a casual dating app — with real identity verification, Shariah-conscious content standards, and guardian (wali) involvement built in from day one, not added later.",
    approach:
      "Architected and built the full backend for a scalable mobile app: real-time chat, AWS Rekognition-based liveness verification for identity checks, an OpenAI vision pipeline that screens uploaded photos for Shariah-compliant modesty and content standards, cross-platform payment validation across Apple and Google with Play Integrity anti-fraud checks, and admin/super-admin dashboards for full platform control — all under Redis caching and async processing to stay responsive at scale.",
    result:
      "A production platform serving 30,000+ registered users with over 1,000 chats and matches created, running wali-mediated, value-based matchmaking with privacy-first profile discovery under real-time chat, AI verification, and monetization traffic.",
  },
  myContribution: [
    "Architected and built the full backend for a scalable mobile app: real-time chat, auth, profiles, matchmaking",
    "Built an OpenAI vision pipeline for Shariah-compliant photo moderation alongside AWS Rekognition liveness verification",
    "Designed the guardian (wali) recommendation workflow connecting dependents, matches, and approvals",
    "Built monetization: Apple/Google payment validation, a virtual coin economy, profile boost packages, and QuickBooks integration for financial reporting",
    "Built admin & super-admin dashboards and a customer support system for moderation and issue handling",
  ],
  stack: [
    "NestJS",
    "Node.js",
    "TypeScript",
    "Express",
    "React",
    "Next.js",
    "MySQL",
    "MongoDB",
    "QuickBooks",
    "Redis",
    "OpenAI",
    "AWS S3",
    "AWS SES",
    "AWS Rekognition",
    "AWS Secrets Manager",
    "AWS EC2",
    "AWS ECS",
    "AWS CloudFront",
  ],
  links: [],
  photos: [
    "/vidnik/vidnik-photo-8.webp",
    "/vidnik/vidnik-photo-1.webp",
    "/vidnik/vidnik-photo-13.webp",
    "/vidnik/vidnik-photo-16.webp",
    "/vidnik/vidnik-photo-3.webp",
    "/vidnik/vidnik-photo-4.webp",
    "/vidnik/vidnik-photo-5.webp",
    "/vidnik/vidnik-photo-7.webp",
    "/vidnik/vidnik-photo-9.webp",
    "/vidnik/vidnik-photo-21.webp",
    "/vidnik/vidnik-photo-22.webp",
    "/vidnik/vidnik-photo-23.webp",
    "/vidnik/vidnik-photo-24.webp",
  ],
};
const vidnikCrmProject = {
  slug: "vidnik-crm",
  title: "Vidnik CRM",
  subtitle: `The internal operations console behind the Vidnik matchmaking platform — a role-based admin system covering user moderation, AI-assisted identity verification review, guardian (wali) oversight, matchmaking analytics, subscription and coin revenue, and a full customer support desk.

    Built for four distinct staff roles (Super Admin, Sub Admin, Tech Support, Customer Service) with granular per-screen permissions, so each team sees only the tools its job requires.`,
  caseStudy: {
    problem:
      "A matchmaking platform handling 30,000+ users generates constant human-in-the-loop work: every selfie and profile bio needs review against Shariah-conscious content standards, reported users and flagged photos need triage, guardian approvals need tracking, and payment disputes need resolving. Doing that through database queries doesn't scale, and giving every staff member full access to a platform holding sensitive personal data isn't acceptable.",
    approach:
      "Built a permission-driven admin platform where a single permission set resolves both the sidebar and the routing table, so access control is defined once and enforced everywhere. Moderation queues surface AWS Rekognition liveness results and OpenAI photo-moderation verdicts for a human approve/reject decision. Operational screens cover matchmaking funnel analytics, the wali recommendation workflow, subscription and coin revenue with refund handling, and a support desk with ticket priority, assignment, SLA-style ticket ageing, and threaded replies. Every admin action is written to an audit log.",
    result:
      "The day-to-day control plane for the Vidnik platform: moderation, guardian oversight, revenue operations, and customer support handled by four separate staff roles across roughly 90 screens, with a full audit trail of who changed what.",
  },
  myContribution: [
    "Built the permission system: ~87 granular permission keys resolving to both sidebar visibility and route access, across four admin roles.",
    "Built the moderation queues surfacing AWS Rekognition liveness checks and OpenAI photo-moderation verdicts for human approve/reject review.",
    "Built the support desk: ticket priority, assignment, ticket ageing, threaded replies, and per-agent performance reporting.",
    "Built revenue operations: subscription and coin dashboards, cross-platform purchase records, and refund handling for Apple and Google payments.",
    "Built matchmaking oversight: funnel analytics, the guardian (wali) recommendation workflow, and dependent relationship tracking.",
    "Built admin activity logging and super-admin tooling for role management, app settings, and email templates.",
  ],
  stack: [
    "React",
    "TypeScript",
    "NestJS",
    "Node.js",
    "MUI",
    "React Query",
    "Zustand",
    "Socket.IO",
    "ApexCharts",
    "i18next",
    "MySQL",
    "MongoDB",
    "Redis",
    "OpenAI",
    "AWS Rekognition",
    "AWS SES",
  ],
  links: [],
  photos: [
    "/vidnik-crm/vidnik-crm-dashboard.webp",
    "/vidnik-crm/vidnik-crm-users-male.webp",
    "/vidnik-crm/vidnik-crm-users-female.webp",
    "/vidnik-crm/vidnik-crm-users-registered.webp",
    "/vidnik-crm/vidnik-crm-user-details.webp",
    "/vidnik-crm/vidnik-crm-walis.webp",
    "/vidnik-crm/vidnik-crm-selfie-waiting.webp",
    "/vidnik-crm/vidnik-crm-selfie-verification.webp",
    "/vidnik-crm/vidnik-crm-flagged-photos.webp",
    "/vidnik-crm/vidnik-crm-reported-users.webp",
    "/vidnik-crm/vidnik-crm-match-dashboard.webp",
    "/vidnik-crm/vidnik-crm-match-list.webp",
    "/vidnik-crm/vidnik-crm-match-summary.webp",
    "/vidnik-crm/vidnik-crm-recommendations.webp",
    "/vidnik-crm/vidnik-crm-subscription-dashboard.webp",
    "/vidnik-crm/vidnik-crm-subscriptions.webp",
    "/vidnik-crm/vidnik-crm-subscription-summary.webp",
    "/vidnik-crm/vidnik-crm-refund-subscriptions.webp",
    "/vidnik-crm/vidnik-crm-refund-coins.webp",
    "/vidnik-crm/vidnik-crm-user-coins.webp",
    "/vidnik-crm/vidnik-crm-support-dashboard.webp",
    "/vidnik-crm/vidnik-crm-support-tickets.webp",
    "/vidnik-crm/vidnik-crm-trending.webp",
    "/vidnik-crm/vidnik-crm-app-settings.webp",
  ],
};
const axiomProject = {
  slug: "axiom",
  title: "Axiom",
  subtitle:
    "A scalable multi-client platform for discovering UAE properties and managing relocation services. The system integrates a web application, administrative dashboard, and Unity 3D client, powered by a modular NestJS backend supporting AI interactions, real-time communication, and cloud-based infrastructure.",
  caseStudy: {
    problem:
      "Expatriates relocating to the UAE needed one place to discover properties and manage relocation services — across four very different client types (public web, admin dashboard, a Unity 3D application, and a companion AI microservice) that would normally mean four separate backends.",
    approach:
      "Designed a single modular NestJS backend serving all clients from shared domain modules, with a dedicated Unity API layer exposing voice interaction (Whisper speech-to-text, AWS Polly text-to-speech) so the 3D client can be driven by voice, and an AI gateway (x-api-key secured) that proxies conversational property search and price-negotiation chat to a companion Python/FastAPI AI service. Added Redis + Redlock to handle concurrent and race-condition-prone booking/inquiry operations safely.",
    result:
      "One backend, four clients, no duplicated logic — powers over 1,000 property listings and 100+ AI negotiation sessions, with expatriates able to browse and voice-negotiate UAE properties inside the Unity app or manage relocation end-to-end through the web platform.",
  },
  myContribution: [
    "Designed a modular NestJS backend serving four clients (web, admin dashboard, Unity 3D app, AI gateway) from shared domain modules.",
    "Built the Unity voice-interaction layer: speech-to-text via OpenAI Whisper and text-to-speech via AWS Polly, streamed through S3 pre-signed URLs.",
    "Built the AI gateway proxying conversational property search and price-negotiation chat to a companion Python/FastAPI AI microservice.",
    "Addressed concurrency and race conditions in property inquiries and bookings using Redis caching and distributed locking with Redlock.",
    "Implemented JWT/OAuth authentication across web, dashboard, and Unity auth guards, plus AWS integrations (S3, SES, Comprehend) and NestJS-scheduled background jobs.",
  ],

  stack: [
    "NestJS",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Unity",
    "MongoDB",
    "Redis",
    "Redlock",
    "WebSockets (Socket.IO)",
    "OpenAI (Whisper, GPT)",
    "Docker",
    "CI/CD",
    "Linux",
    "AWS S3",
    "AWS SES",
    "AWS Polly",
    "AWS Comprehend",
    "AWS Secrets Manager",
    "AWS EC2",
    "AWS ECS",
    "AWS CloudFront",
  ],
  links: [],
  photos: [
    "/aqxom/axiom-website-home.webp",
    "/aqxom/axiom-website-about.webp",
    "/aqxom/axiom-admin-dashboard.webp",
    "/aqxom/axiom-admin-listings.webp",
    "/aqxom/axiom-admin-new-listing.webp",
    "/aqxom/axiom-admin-login.webp",
  ],
};
const exyarProject = {
  slug: "exyar",
  title: "Exyar",
  subtitle: `A full-featured luxury car rental platform that allows users to browse and book premium vehicles through a web application while administrators manage inventory, bookings, and customers through an administrative dashboard.
    
    The platform also integrates an AI-powered conversational assistant that helps users discover cars and get booking assistance through natural language interaction.
    
    The system was designed with a scalable modular backend architecture supporting high availability, secure authentication, and integration with external cloud services.`,
  caseStudy: {
    problem:
      "A car rental business needed customers to browse and book premium vehicles, with AI-assisted help discovering the right car, while giving admins full inventory and booking control — all from one backend serving three different consumers (website, dashboard, and AI assistant).",
    approach:
      "Built a modular NestJS backend with clear separation between the customer site, admin dashboard, and an AI gateway (x-api-key secured) that a companion AI service uses for vehicle discovery chat; added Redis caching for frequently requested vehicle data, Firebase Cloud Messaging for real-time booking notifications, and secure multi-role JWT authentication for both customers and staff.",
    result:
      "A single backend cleanly serving three different consumers, powering over 100 vehicle listings and 1,000+ bookings made, with an AI conversational layer for vehicle discovery built into the same system rather than bolted on separately.",
  },
  myContribution: [
    "Designed the modular NestJS backend architecture separating website, admin dashboard, and AI gateway API layers.",
    "Built the vehicle management and booking system: brands, car details, pricing packages, media, and flexible booking options.",
    "Built the AI gateway exposing vehicle data to a companion conversational AI service for natural-language car discovery.",
    "Implemented multi-role JWT authentication, Redis caching for frequently requested data, and Firebase Cloud Messaging for real-time booking alerts.",
    "Integrated AWS S3 for media storage and SES for transactional email, with secure verification/password-recovery email workflows.",
  ],
  stack: ["NestJS", "Node.js", "TypeScript", "Next.js", "MongoDB", "AWS"],
  links: [],
  photos: [
    "/exyar/exyar-home.webp",
    "/exyar/exyar-car-list.webp",
    "/exyar/exyar-car-detail.webp",
    "/exyar/exyar-my-car.webp",
    "/exyar/exyar-contact-us.webp",
    "/exyar/exyar-admin-dashboard.webp",
    "/exyar/exyar-admin-car-listing.webp",
    "/exyar/exyar-admin-bookings.webp",
    "/exyar/exyar-admin-users.webp",
    "/exyar/exyar-admin-settings.webp",
  ],
};
const pmsProject = {
  slug: "pms",
  title: "PMS",
  subtitle: `A full-featured Agile project management platform designed to help teams plan, track, and deliver projects efficiently. The system supports project planning, sprint management, task tracking, team collaboration, approvals, notifications, and document management. It enables organizations to structure work using boards, epics, sprints, and tasks while maintaining visibility across teams and workflows.

    The backend was built with a scalable modular architecture using NestJS and MongoDB, integrating caching, cloud storage, real-time notifications, and role-based access control to support complex enterprise workflows.`,
  caseStudy: {
    problem:
      "Teams needed a full Agile workflow — boards, epics, sprints, tasks, approvals, document management — with enterprise-grade access control, essentially a Jira-equivalent built from scratch.",
    approach:
      "Designed a flexible data model to represent Agile hierarchies (project → board → epic → sprint → task), layered in granular role-based permissions, Redis caching for heavy task and project queries, Firebase push notifications and Slack webhook alerts for task/doc/update events, HTML-to-PDF report generation, and a design-asset review module with access and approval status, all covered by Jest/Supertest tests.",
    result:
      "A working Jira-equivalent in active use tracking over 20,000 tasks across 20 active projects for 5 onboarded teams, architected to stay maintainable as the codebase and organization grow.",
  },
  myContribution: [
    "Designed the backend data model for Agile hierarchies: projects, boards, epics, sprints, tasks, timelines, and approvals.",
    "Built role-based authentication, team/employee management, and granular permission systems.",
    "Built document management with hierarchical document nodes, plus a design-asset review module with access/approval status.",
    "Integrated Firebase push notifications, Slack webhook alerts, and HTML-to-PDF report generation.",
    "Optimized performance with Redis caching for heavy task/project queries, and integrated AWS S3/SES/SSM for storage, email, and config.",
  ],
  stack: [
    "NestJS",
    "Node.js",
    "TypeScript",
    "Next.js",
    "MongoDB",
    "Docker",
    "AWS S3",
    "AWS SES",
    "AWS SSM",
    "Redis",
    "Firebase Cloud Messaging",
    "Puppeteer",
    "Winston",
    "Jest",
  ],
  links: [],
  photos: [
    "/pms/pms-login.webp",
    "/pms/pms-dashboard.webp",
    "/pms/pms-board.webp",
    "/pms/pms-sprint.webp",
    "/pms/pms-team.webp",
    "/pms/pms-business-plan.webp",
    "/pms/pms-design.webp",
    "/pms/pms-approval.webp",
    "/pms/pms-admin-projects.webp",
  ],
};
const zadlawProject = {
  slug: "zadlaw",
  title: "Zadlaw",
  subtitle:
    "A full-featured web platform for a law firm, enabling clients to book consultation sessions and interact with services online, while providing administrators with a comprehensive dashboard to manage appointments, analytics, content, and user interactions efficiently. The backend is built with NestJS and TypeScript, ensuring scalable and secure operations.",
  caseStudy: {
    problem:
      "A law firm needed clients to book consultations and interact with services online, with staff needing a dashboard covering analytics, content, appointments, and subscriptions — coordinated across appointments, legal advisory, blogs, and analytics modules without the data drifting out of sync.",
    approach:
      "Built the backend in NestJS/TypeScript with Microsoft Graph API integration for real Outlook calendar scheduling and Zoom's API to auto-create meeting links for each booked consultation, Stripe for subscription billing and webhook handling, and centralized middleware and exception handling so appointments, legal advisory, blogs, and analytics modules stay consistent and don't drift out of sync.",
    result:
      "Clients book a consultation and get a real Outlook slot with a Zoom link automatically attached; staff run the firm's appointments, billing, and content from one dashboard instead of juggling separate tools.",
  },
  myContribution: [
    "Designed the modular NestJS backend architecture powering the web application and admin dashboard.",
    "Integrated Microsoft Graph API for Outlook scheduling and Zoom's API to auto-generate meeting links for bookings.",
    "Built Stripe payment processing, subscription billing, and webhook handling.",
    "Implemented JWT/Passport authentication and role-based authorization for clients and admin staff.",
    "Built automated email workflows (AWS SES, EJS templates) and Redis caching for performance.",
  ],
  stack: [
    "NestJS",
    "Node.js",
    "TypeScript",
    "Next.js",
    "MongoDB",
    "Redis",
    "AWS S3",
    "AWS SES",
    "Microsoft Graph API (Outlook)",
    "Zoom API",
    "Stripe",
    "Jest",
    "Supertest",
    "Docker",
  ],
  links: [],
  photos: [
    "/zadlaw/zadlaw-website-home.webp",
    "/zadlaw/zadlaw-website-about.webp",
    "/zadlaw/zadlaw-website-pricing.webp",
    "/zadlaw/zadlaw-website-contact.webp",
    "/zadlaw/zadlaw-admin-login.webp",
    "/zadlaw/zadlaw-admin-dashboard.webp",
    "/zadlaw/zadlaw-admin-appointments.webp",
    "/zadlaw/zadlaw-admin-new-blog.webp",
    "/zadlaw/zadlaw-admin-legal-advisory.webp",
  ],
};
const hrSoftware = {
  slug: "hr-software",
  title: "HR Software",
  subtitle: `A comprehensive HR workforce management platform designed to streamline employee attendance tracking, task management, and organizational administration. The system enables companies to manage employees, monitor clock-in/clock-out activity, assign and track daily tasks, control permissions and roles, and manage company resources through an administrative dashboard.
    The platform supports multi-company management, allowing a super-admin to oversee multiple organizations, while each company can manage its own employees, roles, and operations. The backend architecture is built to be scalable, secure, and modular, with integrations for cloud storage, email notifications, caching, and background services.`,
  caseStudy: {
    problem:
      "Companies needed to track attendance, assign tasks, and manage roles and permissions — with a single super-admin overseeing multiple independent companies without their data mixing.",
    approach:
      "Designed a multi-tenant architecture with isolated company data, a flexible RBAC system for dynamic permissions, a clock-in/clock-out system handling edge cases like duplicate punches, secure email-activation password setup, and Redis caching to keep the dashboards responsive at scale.",
    result:
      "One system, multiple companies, each fully isolated — with attendance, tasks, and permissions all manageable from a single super-admin view when needed.",
  },
  myContribution: [
    "Designed the multi-tenant NestJS backend with isolated per-company data and a super-admin oversight layer.",
    "Built a flexible RBAC system for dynamic roles and permissions across company and super-admin dashboards.",
    "Developed the clock-in/clock-out attendance system, handling edge cases like duplicate punches.",
    "Built task assignment/tracking, Excel report exports, and AWS S3 file management with pre-signed uploads.",
    "Integrated AWS SES/Nodemailer for email-based password activation, plus Redis caching for API performance.",
  ],
  stack: [
    "NestJS",
    "Node.js",
    "TypeScript",
    "React",
    "MongoDB",
    "AWS S3",
    "AWS SES",
    "Redis",
    "Docker",
    "Jest",
    "GitLab CI",
  ],
  links: [],
  photos: [
    "/hr-software/hr-login.webp",
    "/hr-software/hr-super-admin-companies.webp",
    "/hr-software/hr-employees.webp",
    "/hr-software/hr-add-employee.webp",
    "/hr-software/hr-tasks.webp",
    "/hr-software/hr-time-sheet.webp",
    "/hr-software/hr-roles.webp",
    "/hr-software/hr-create-role.webp",
  ],
};
const SIGProject = {
  slug: "save-in-gold-crm",
  title: "Save In Gold CRM",
  subtitle: `A multi-role CRM built for Save In Gold's sales operation, managing leads, agents, tasks, and customer conversations across three access levels: Admin, Sales Manager, and Sales Agent.

    The platform tracks leads from multiple acquisition sources (mobile app, kiosk, website, social media), assigns them to agents, manages follow-up tasks, and centralizes customer communication in a unified inbox — all backed by role-based dashboards and reporting.`,
  caseStudy: {
    problem:
      "Save In Gold needed a CRM to manage a high volume of leads (eventually 300,000+) coming from multiple sources — mobile app, kiosks, website, social media — with different staff needing different levels of access: admins overseeing branches and roles, sales managers overseeing agents and performance, and agents working their own leads and tasks.",
    approach:
      "Built the backend powering a role-based CRM with granular permission management, lead assignment and tracking across sources, a task/follow-up system tied to leads with automated cron jobs for auto-assignment, overdue escalation, and reminders, real-time updates over Socket.IO, a unified inbox for lead conversations, and branch/exhibition management for admins — with dashboards aggregating leads, tasks, and account performance by source and by agent.",
    result:
      "A production CRM in daily use managing over 300,000 leads and chats across multiple lead sources, with clean role separation between Admin, Sales Manager, and Sales Agent access levels.",
  },
  myContribution: [
    "Built the role-based CRM backend distinguishing Admin, Sales Manager, and Sales Agent access levels.",
    "Built lead management across multiple acquisition sources (mobile app, kiosk, website, social/WhatsApp) with assignment and status tracking.",
    "Built the task/follow-up system with cron-driven auto-assignment, overdue escalation, and reminder notifications.",
    "Built real-time dashboard updates via Socket.IO and a unified inbox with message templates for lead communication.",
    "Built branch/exhibition management and reporting endpoints aggregating leads, tasks, and performance by source and agent.",
  ],
  stack: ["Node.js", "Express", "MongoDB", "Mongoose", "Socket.IO", "Next.js"],
  links: [],
  photos: [
    "/sig-crm/sig-crm-login.webp",
    "/sig-crm/sig-crm-dashboard.webp",
    "/sig-crm/sig-crm-leads.webp",
    "/sig-crm/sig-crm-agents.webp",
    "/sig-crm/sig-crm-tasks.webp",
    "/sig-crm/sig-crm-inbox.webp",
    "/sig-crm/sig-crm-role-management.webp",
    "/sig-crm/sig-crm-branches.webp",
    "/sig-crm/sig-crm-settings.webp",
  ],
};
const ordersProject = {
  slug: "orders-delivery-system",
  title: "Orders Delivery System",
  subtitle:
    "Full-stack delivery platform with an admin dashboard, client and driver apps, and a central backend.",
  caseStudy: {
    problem:
      "A delivery operation needed to track orders from placement to delivery across three different apps — admin dashboard, client, and driver — sharing one source of truth.",
    approach:
      "Built a central Node.js/Express backend with role-based access control and real-time order-status notifications so all three apps stay in sync.",
    result:
      "End-to-end order tracking from placement to delivery, with the backend and dashboard both public on GitHub.",
  },
  myContribution: [
    "Built a central Node.js/Express backend with role-based access control and authentication flows",
    "Implemented order tracking and delivery status updates across admin, client, and driver apps",
    "Built real-time order-status notifications to keep all three apps in sync",
  ],
  stack: ["Node.js", "Express", "React", "MongoDB"],
  links: [
    {
      label: "Backend Repo",
      href: "https://github.com/mohannadalhajy/Delivery_Backend",
    },
    {
      label: "Dashboard Repo",
      href: "https://github.com/mohannadalhajy/Delivery_Dashboard_Web",
    },
  ],
  photos: [],
};
const realestateProject = {
  slug: "real-estate-management",
  title: "Real Estate Management",
  subtitle:
    "Listings management system with custom search and personalized recommendations.",
  caseStudy: {
    problem:
      "A property listings platform needed search that actually understood relevance, not just keyword matching, plus recommendations tailored to each user.",
    approach:
      "Implemented a custom search engine using a Vector Space Model rather than reaching for an off-the-shelf search service, paired with a recommendation system driven by user behavior and preferences.",
    result:
      "A working search-and-recommend listings platform with its own retrieval logic, backend and dashboard both public on GitHub.",
  },
  myContribution: [
    "Implemented a custom search engine using a Vector Space Model instead of an off-the-shelf search service",
    "Built a recommendation system driven by user behavior and preferences",
    "Built an admin dashboard for managing listings and users",
  ],
  stack: ["Node.js", "Express", "React", "MongoDB"],
  links: [
    {
      label: "Backend Repo",
      href: "https://github.com/mohannadalhajy/real-estate-backend",
    },
    {
      label: "Dashboard Repo",
      href: "https://github.com/mohannadalhajy/real-estate-dashboard",
    },
  ],
  photos: [],
};
export const projects: Project[] = [
  vidnikProject,
  vidnikCrmProject,
  exyarProject,
  pmsProject,
  zadlawProject,
  axiomProject,
  SIGProject,
  hrSoftware,
  ordersProject,
  realestateProject,
];
