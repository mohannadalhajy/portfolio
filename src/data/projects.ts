export type CaseStudy = {
  problem: string;
  approach: string;
  result: string;
};

export type Project = {
  slug: string;
  title: string;
  /** One line on the hard part — shown in the projects list (<=120 chars). */
  tagline: string;
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
  tagline:
    "Matchmaking backend with AWS Rekognition liveness checks, OpenAI photo moderation, and Apple/Google payment validation.",
  subtitle:
    "Halal matchmaking where every account passes an AWS Rekognition liveness check, every photo is screened by an OpenAI vision model against Shariah modesty standards, and a guardian (wali) can take part in the match. The backend serves 30,000+ registered users.",
  caseStudy: {
    problem:
      "Muslims looking for marriage needed a platform that felt safe, private, and culturally aligned — not a casual dating app — with real identity verification, Shariah-conscious content standards, and guardian (wali) involvement built in from day one, not added later.",
    approach:
      "Architected and built the full backend for a scalable mobile app: real-time chat, AWS Rekognition-based liveness verification for identity checks, an OpenAI vision pipeline that screens uploaded photos for Shariah-compliant modesty and content standards, cross-platform payment validation across Apple and Google with Play Integrity anti-fraud checks, and admin/super-admin dashboards for full platform control — all under Redis caching and async processing to stay responsive at scale.",
    result:
      "A production platform serving 30,000+ registered users with over 1,000 chats and matches created, running wali-mediated, value-based matchmaking with privacy-first profile discovery under real-time chat, AI verification, and monetization traffic.",
  },
  myContribution: [
    "Put identity verification in the signup path, not after it: AWS Rekognition liveness checks gate every account, and an OpenAI vision pipeline screens each uploaded photo for Shariah-compliant modesty.",
    "Modeled guardian (wali) involvement as its own workflow linking dependents, matches, and approvals, rather than a flag on a profile.",
    "Validated Apple and Google purchases server-side with Play Integrity anti-fraud checks, backing a virtual coin economy, profile boosts, and QuickBooks financial reporting.",
    "Kept real-time chat, auth, profiles, and matchmaking responsive for 30,000+ users with Redis caching and async processing.",
    "Gave staff admin and super-admin dashboards plus a support system, so moderation and user issues are handled in tooling, not in the database.",
  ],
  stack: [
    "ASP.NET Core",
    "C#",
    "React",
    "TypeScript",
    "Next.js",
    "MySQL",
    "MongoDB",
    "QuickBooks",
    "Redis",
    "OpenAI",
    "AWS Rekognition",
    "AWS",
  ],
  links: [],
  photos: [
    "/vidnik/vidnik-photo-16.webp",
    "/vidnik/vidnik-photo-21.webp",
    "/vidnik/vidnik-photo-1.webp",
    "/vidnik/vidnik-photo-3.webp",
    "/vidnik/vidnik-photo-4.webp",
    "/vidnik/vidnik-photo-7.webp",
    "/vidnik/vidnik-photo-5.webp",
    "/vidnik/vidnik-photo-22.webp",
    "/vidnik/vidnik-photo-8.webp",
    "/vidnik/vidnik-photo-13.webp",
    "/vidnik/vidnik-photo-9.webp",
    "/vidnik/vidnik-photo-23.webp",
    "/vidnik/vidnik-photo-24.webp",
  ],
};
const vidnikCrmProject = {
  slug: "vidnik-crm",
  title: "Vidnik CRM",
  tagline:
    "Admin console where ~87 permission keys resolve both sidebar and routing, across ~90 moderation and revenue screens.",
  subtitle:
    "Staff tooling for a 30,000-user matchmaking platform holding sensitive personal data: ~87 permission keys drive both the sidebar and the routing table, so each of four staff roles reaches only the screens its job needs, out of ~90, and every action lands in an audit log.",
  caseStudy: {
    problem:
      "A matchmaking platform handling 30,000+ users generates constant human-in-the-loop work: every selfie and profile bio needs review against Shariah-conscious content standards, reported users and flagged photos need triage, guardian approvals need tracking, and payment disputes need resolving. Doing that through database queries doesn't scale, and giving every staff member full access to a platform holding sensitive personal data isn't acceptable.",
    approach:
      "Built a permission-driven admin platform where a single permission set resolves both the sidebar and the routing table, so access control is defined once and enforced everywhere. Moderation queues surface AWS Rekognition liveness results and OpenAI photo-moderation verdicts for a human approve/reject decision. Operational screens cover matchmaking funnel analytics, the wali recommendation workflow, subscription and coin revenue with refund handling, and a support desk with ticket priority, assignment, SLA-style ticket ageing, and threaded replies. Every admin action is written to an audit log.",
    result:
      "The day-to-day control plane for the Vidnik platform: moderation, guardian oversight, revenue operations, and customer support handled by four separate staff roles across roughly 90 screens, with a full audit trail of who changed what.",
  },
  myContribution: [
    "Defined access once: ~87 permission keys resolve both sidebar visibility and route access across four admin roles, so a hidden screen is also an unreachable one.",
    "Kept a human on every AI verdict: moderation queues surface AWS Rekognition liveness results and OpenAI photo-moderation calls for an explicit approve/reject.",
    "Gave support leads per-agent performance reporting on top of ticket priority, assignment, ticket ageing, and threaded replies.",
    "Handled Apple and Google refunds from the same screens as the subscription and coin revenue dashboards and cross-platform purchase records.",
    "Exposed the matchmaking funnel and the guardian (wali) recommendation workflow to staff, including dependent relationship tracking.",
    "Logged every admin action, and gave super-admins control over roles, app settings, and email templates.",
  ],
  stack: [
    "React",
    "TypeScript",
    "ASP.NET Core",
    "MySQL",
    "Redis",
    "React Query",
    "Socket.IO",
    "OpenAI",
  ],
  links: [],
  photos: [
    "/vidnik-crm/vidnik-crm-dashboard.webp",
    "/vidnik-crm/vidnik-crm-users-registered.webp",
    "/vidnik-crm/vidnik-crm-user-details.webp",
    "/vidnik-crm/vidnik-crm-selfie-verification.webp",
    "/vidnik-crm/vidnik-crm-selfie-waiting.webp",
    "/vidnik-crm/vidnik-crm-flagged-photos.webp",
    "/vidnik-crm/vidnik-crm-reported-users.webp",
    "/vidnik-crm/vidnik-crm-walis.webp",
    "/vidnik-crm/vidnik-crm-recommendations.webp",
    "/vidnik-crm/vidnik-crm-match-dashboard.webp",
    "/vidnik-crm/vidnik-crm-match-list.webp",
    "/vidnik-crm/vidnik-crm-match-summary.webp",
    "/vidnik-crm/vidnik-crm-subscription-dashboard.webp",
    "/vidnik-crm/vidnik-crm-subscriptions.webp",
    "/vidnik-crm/vidnik-crm-subscription-summary.webp",
    "/vidnik-crm/vidnik-crm-refund-subscriptions.webp",
    "/vidnik-crm/vidnik-crm-refund-coins.webp",
    "/vidnik-crm/vidnik-crm-user-coins.webp",
    "/vidnik-crm/vidnik-crm-support-dashboard.webp",
    "/vidnik-crm/vidnik-crm-support-tickets.webp",
    "/vidnik-crm/vidnik-crm-users-male.webp",
    "/vidnik-crm/vidnik-crm-users-female.webp",
    "/vidnik-crm/vidnik-crm-trending.webp",
    "/vidnik-crm/vidnik-crm-app-settings.webp",
  ],
};
const axiomProject = {
  slug: "axiom",
  title: "Axiom",
  tagline:
    "One modular ASP.NET Core backend for four clients, with Whisper/Polly voice for Unity and Redlock locking on booking races.",
  subtitle:
    "Four clients (a public site, an admin dashboard, a voice-driven Unity 3D app, and an AI microservice) served by one modular ASP.NET Core backend, with Redlock guarding bookings against race conditions. Built for expatriates finding property and relocating to the UAE.",
  caseStudy: {
    problem:
      "Expatriates relocating to the UAE needed one place to discover properties and manage relocation services — across four very different client types (public web, admin dashboard, a Unity 3D application, and a companion AI microservice) that would normally mean four separate backends.",
    approach:
      "Designed a single modular ASP.NET Core backend serving all clients from shared domain modules, with a dedicated Unity API layer exposing voice interaction (Whisper speech-to-text, AWS Polly text-to-speech) so the 3D client can be driven by voice, and an AI gateway (x-api-key secured) that proxies conversational property search and price-negotiation chat to a companion Python/FastAPI AI service. Added Redis + Redlock to handle concurrent and race-condition-prone booking/inquiry operations safely.",
    result:
      "One backend, four clients, no duplicated logic — powers over 1,000 property listings and 100+ AI negotiation sessions, with expatriates able to browse and voice-negotiate UAE properties inside the Unity app or manage relocation end-to-end through the web platform.",
  },
  myContribution: [
    "One backend instead of four: web, admin, Unity 3D, and the AI gateway share ASP.NET Core domain modules, so no business logic is duplicated per client.",
    "Made the Unity app voice-driven: OpenAI Whisper speech-to-text in, AWS Polly text-to-speech out, audio streamed through S3 pre-signed URLs.",
    "Kept AI in its own Python/FastAPI service behind an x-api-key gateway that proxies conversational property search and price negotiation (100+ negotiation sessions so far).",
    "Closed race conditions on concurrent inquiries and bookings with Redlock distributed locking over Redis.",
    "Gave each client its own auth guard (JWT/OAuth for web, dashboard, and Unity), backed by AWS S3, SES, Comprehend, and scheduled background jobs.",
  ],

  stack: [
    "ASP.NET Core",
    "C#",
    "Unity",
    "MongoDB",
    "Redis",
    "Redlock",
    "OpenAI (Whisper, GPT)",
    "AWS",
  ],
  links: [],
  photos: [
    "/aqxom/axiom-website-home.webp",
    "/aqxom/axiom-admin-dashboard.webp",
    "/aqxom/axiom-admin-listings.webp",
    "/aqxom/axiom-admin-new-listing.webp",
    "/aqxom/axiom-website-about.webp",
    "/aqxom/axiom-admin-login.webp",
  ],
};
const exyarProject = {
  slug: "exyar",
  title: "Exyar",
  tagline:
    "One ASP.NET Core backend serving a booking site, an admin dashboard, and an API-key-gated AI gateway for car discovery.",
  subtitle:
    "Luxury car rental where the booking site, the admin dashboard, and an AI assistant for natural-language car discovery all run on one ASP.NET Core backend. The assistant reads vehicle data through an API-key-gated gateway instead of keeping its own copy. 100+ vehicles, 1,000+ bookings.",
  caseStudy: {
    problem:
      "A car rental business needed customers to browse and book premium vehicles, with AI-assisted help discovering the right car, while giving admins full inventory and booking control — all from one backend serving three different consumers (website, dashboard, and AI assistant).",
    approach:
      "Built a modular ASP.NET Core backend with clear separation between the customer site, admin dashboard, and an AI gateway (x-api-key secured) that a companion AI service uses for vehicle discovery chat; added Redis caching for frequently requested vehicle data, Firebase Cloud Messaging for real-time booking notifications, and secure multi-role JWT authentication for both customers and staff.",
    result:
      "A single backend cleanly serving three different consumers, powering over 100 vehicle listings and 1,000+ bookings made, with an AI conversational layer for vehicle discovery built into the same system rather than bolted on separately.",
  },
  myContribution: [
    "Split the backend into three API layers (website, admin, AI gateway) over shared modules, so the assistant reads the same vehicle data customers book against.",
    "Modeled bookings around brands, car details, pricing packages, and flexible booking options, now carrying 1,000+ bookings across 100+ vehicles.",
    "Cached frequently requested vehicle data in Redis and pushed booking alerts in real time through Firebase Cloud Messaging.",
    "Ran customers and staff through one multi-role JWT auth system rather than two.",
    "Stored vehicle media on AWS S3 and sent verification and password-recovery email through SES.",
  ],
  stack: ["ASP.NET Core", "C#", "Next.js", "MongoDB", "Redis", "AWS"],
  links: [],
  photos: [
    "/exyar/exyar-home.webp",
    "/exyar/exyar-car-list.webp",
    "/exyar/exyar-car-detail.webp",
    "/exyar/exyar-admin-dashboard.webp",
    "/exyar/exyar-admin-bookings.webp",
    "/exyar/exyar-admin-car-listing.webp",
    "/exyar/exyar-my-car.webp",
    "/exyar/exyar-admin-users.webp",
    "/exyar/exyar-contact-us.webp",
    "/exyar/exyar-admin-settings.webp",
  ],
};
const pmsProject = {
  slug: "pms",
  title: "PMS",
  tagline:
    "Agile data model from project to board, epic, sprint and task, under granular RBAC and Redis-cached task queries.",
  subtitle:
    "A Jira-equivalent built from scratch: a project → board → epic → sprint → task hierarchy under granular role-based permissions, with Redis caching on the heavy task queries. Tracks 20,000+ tasks across 20 projects for 5 teams.",
  caseStudy: {
    problem:
      "Teams needed a full Agile workflow — boards, epics, sprints, tasks, approvals, document management — with enterprise-grade access control, essentially a Jira-equivalent built from scratch.",
    approach:
      "Designed a flexible data model to represent Agile hierarchies (project → board → epic → sprint → task), layered in granular role-based permissions, Redis caching for heavy task and project queries, Firebase push notifications and Slack webhook alerts for task/doc/update events, HTML-to-PDF report generation, and a design-asset review module with access and approval status, all covered by automated tests.",
    result:
      "A working Jira-equivalent in active use tracking over 20,000 tasks across 20 active projects for 5 onboarded teams, architected to stay maintainable as the codebase and organization grow.",
  },
  myContribution: [
    "Settled the Agile hierarchy (project → board → epic → sprint → task, plus timelines and approvals) in the data model first, so every feature hangs off one consistent structure.",
    "Scoped every screen and action with granular role-based permissions across teams and employees.",
    "Moved heavy task and project queries behind Redis caching to hold up at 20,000+ tasks.",
    "Pushed task, doc, and update events out through Firebase and Slack webhooks, and generated PDF reports from HTML.",
    "Stored documents as hierarchical nodes and added a design-asset review module with access and approval status, covered by automated tests.",
  ],
  stack: [
    "ASP.NET Core",
    "C#",
    "Next.js",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
  ],
  links: [],
  photos: [
    "/pms/pms-dashboard.webp",
    "/pms/pms-board.webp",
    "/pms/pms-sprint.webp",
    "/pms/pms-approval.webp",
    "/pms/pms-team.webp",
    "/pms/pms-business-plan.webp",
    "/pms/pms-design.webp",
    "/pms/pms-admin-projects.webp",
    "/pms/pms-login.webp",
  ],
};
const zadlawProject = {
  slug: "zadlaw",
  title: "Zadlaw",
  tagline:
    "Consultations that book real Outlook slots via Microsoft Graph, auto-attach Zoom links, and bill through Stripe.",
  subtitle:
    "Law-firm booking where a consultation reserves a real Outlook slot through Microsoft Graph, gets a Zoom link attached automatically, and bills through Stripe, while staff run appointments, content, and subscriptions from one dashboard.",
  caseStudy: {
    problem:
      "A law firm needed clients to book consultations and interact with services online, with staff needing a dashboard covering analytics, content, appointments, and subscriptions — coordinated across appointments, legal advisory, blogs, and analytics modules without the data drifting out of sync.",
    approach:
      "Built the backend in ASP.NET Core/C# with Microsoft Graph API integration for real Outlook calendar scheduling and Zoom's API to auto-create meeting links for each booked consultation, Stripe for subscription billing and webhook handling, and centralized middleware and exception handling so appointments, legal advisory, blogs, and analytics modules stay consistent and don't drift out of sync.",
    result:
      "Clients book a consultation and get a real Outlook slot with a Zoom link automatically attached; staff run the firm's appointments, billing, and content from one dashboard instead of juggling separate tools.",
  },
  myContribution: [
    "Booked against the firm's real Outlook calendars via Microsoft Graph instead of a separate availability table, and auto-created a Zoom meeting for each consultation.",
    "Drove Stripe subscription billing from webhooks.",
    "Centralized middleware and exception handling so the appointments, legal advisory, blogs, and analytics modules stay consistent with each other.",
    "Separated client and staff roles with JWT-based authorization.",
    "Automated email workflows on AWS SES with templated emails, with Redis caching for frequent reads.",
  ],
  stack: [
    "ASP.NET Core",
    "C#",
    "MongoDB",
    "Redis",
    "Microsoft Graph API (Outlook)",
    "Zoom API",
    "Stripe",
    "AWS",
  ],
  links: [
    {
      label: "Live Website",
      href: "https://arashzad.com",
    },
  ],
  photos: [
    "/zadlaw/zadlaw-website-home.webp",
    "/zadlaw/zadlaw-admin-dashboard.webp",
    "/zadlaw/zadlaw-admin-appointments.webp",
    "/zadlaw/zadlaw-admin-legal-advisory.webp",
    "/zadlaw/zadlaw-website-pricing.webp",
    "/zadlaw/zadlaw-website-about.webp",
    "/zadlaw/zadlaw-admin-new-blog.webp",
    "/zadlaw/zadlaw-website-contact.webp",
    "/zadlaw/zadlaw-admin-login.webp",
  ],
};
const hrSoftware = {
  slug: "hr-software",
  title: "HR Software",
  tagline:
    "Multi-tenant RBAC backend with isolated per-company data and a clock-in system that handles duplicate punches.",
  subtitle:
    "Multi-tenant HR backend where one super-admin oversees many companies whose data never mixes, with a dynamic RBAC system and a clock-in/clock-out service that tolerates duplicate punches.",
  caseStudy: {
    problem:
      "Companies needed to track attendance, assign tasks, and manage roles and permissions — with a single super-admin overseeing multiple independent companies without their data mixing.",
    approach:
      "Designed a multi-tenant architecture with isolated company data, a flexible RBAC system for dynamic permissions, a clock-in/clock-out system handling edge cases like duplicate punches, secure email-activation password setup, and Redis caching to keep the dashboards responsive at scale.",
    result:
      "One system, multiple companies, each fully isolated — with attendance, tasks, and permissions all manageable from a single super-admin view when needed.",
  },
  myContribution: [
    "Isolated data per company, with a super-admin layer above that sees across companies while they never see each other.",
    "Made roles and permissions dynamic data rather than hardcoded, configurable per company.",
    "Handled attendance edge cases like duplicate clock-in punches on the server.",
    "Added task assignment and tracking with Excel exports, and file uploads straight to S3 via pre-signed URLs.",
    "Activated accounts through an emailed password-setup link (AWS SES), with Redis caching keeping dashboards responsive.",
  ],
  stack: [
    "ASP.NET Core",
    "C#",
    "React",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
  ],
  links: [],
  photos: [
    "/hr-software/hr-employees.webp",
    "/hr-software/hr-time-sheet.webp",
    "/hr-software/hr-tasks.webp",
    "/hr-software/hr-add-employee.webp",
    "/hr-software/hr-super-admin-companies.webp",
    "/hr-software/hr-roles.webp",
    "/hr-software/hr-create-role.webp",
    "/hr-software/hr-login.webp",
  ],
};
const SIGProject = {
  slug: "save-in-gold-crm",
  title: "Save In Gold CRM",
  tagline:
    "Lead pipeline for 300k+ leads with cron-driven auto-assignment, overdue escalation, and Socket.IO dashboard updates.",
  subtitle:
    "Sales CRM for 300,000+ leads arriving from the mobile app, kiosks, website, and social media. Cron jobs auto-assign them and escalate overdue follow-ups, and Socket.IO pushes changes live to Admin, Sales Manager, and Agent dashboards.",
  caseStudy: {
    problem:
      "Save In Gold needed a CRM to manage a high volume of leads (eventually 300,000+) coming from multiple sources — mobile app, kiosks, website, social media — with different staff needing different levels of access: admins overseeing branches and roles, sales managers overseeing agents and performance, and agents working their own leads and tasks.",
    approach:
      "Built the backend powering a role-based CRM with granular permission management, lead assignment and tracking across sources, a task/follow-up system tied to leads with automated cron jobs for auto-assignment, overdue escalation, and reminders, real-time updates over Socket.IO, a unified inbox for lead conversations, and branch/exhibition management for admins — with dashboards aggregating leads, tasks, and account performance by source and by agent.",
    result:
      "A production CRM in daily use managing over 300,000 leads and chats across multiple lead sources, with clean role separation between Admin, Sales Manager, and Sales Agent access levels.",
  },
  myContribution: [
    "Let cron jobs own lead auto-assignment, overdue escalation, and reminders, so routing and follow-up don't depend on someone remembering.",
    "Split access into Admin, Sales Manager, and Sales Agent levels with granular permissions, so agents work only their own leads.",
    "Tagged every lead with its source (mobile app, kiosk, website, social/WhatsApp) so reporting breaks down by source and by agent.",
    "Pushed dashboard changes live over Socket.IO and put lead conversations in one inbox with message templates.",
    "Added branch and exhibition management for admins.",
  ],
  stack: ["ASP.NET Core", "C#", "MongoDB", "Socket.IO", "Next.js"],
  links: [],
  photos: [
    "/sig-crm/sig-crm-dashboard.webp",
    "/sig-crm/sig-crm-leads.webp",
    "/sig-crm/sig-crm-agents.webp",
    "/sig-crm/sig-crm-tasks.webp",
    "/sig-crm/sig-crm-inbox.webp",
    "/sig-crm/sig-crm-role-management.webp",
    "/sig-crm/sig-crm-branches.webp",
    "/sig-crm/sig-crm-settings.webp",
    "/sig-crm/sig-crm-login.webp",
  ],
};
const ordersProject = {
  slug: "orders-delivery-system",
  title: "Orders Delivery System",
  tagline:
    "One ASP.NET Core backend keeping admin, client, and driver apps in sync through real-time order-status notifications.",
  subtitle:
    "Three apps (admin, client, driver) reading one ASP.NET Core backend, with real-time order-status notifications keeping them in sync from placement to delivery.",
  caseStudy: {
    problem:
      "A delivery operation needed to track orders from placement to delivery across three different apps — admin dashboard, client, and driver — sharing one source of truth.",
    approach:
      "Built a central ASP.NET Core backend with role-based access control and real-time order-status notifications so all three apps stay in sync.",
    result:
      "End-to-end order tracking from placement to delivery, with the backend and dashboard both public on GitHub.",
  },
  myContribution: [
    "Made one backend the source of truth for the admin, client, and driver apps, with role-based access per app.",
    "Pushed order-status changes in real time so all three apps show the same state.",
    "Tracked orders from placement to delivery; backend and dashboard are public on GitHub.",
  ],
  stack: ["ASP.NET Core", "C#", "React", "MongoDB"],
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
  tagline:
    "Custom Vector Space Model search engine instead of an off-the-shelf service, plus behavior-driven recommendations.",
  subtitle:
    "Property search built on a hand-written Vector Space Model instead of an off-the-shelf search service, with recommendations driven by each user's behavior.",
  caseStudy: {
    problem:
      "A property listings platform needed search that actually understood relevance, not just keyword matching, plus recommendations tailored to each user.",
    approach:
      "Implemented a custom search engine using a Vector Space Model rather than reaching for an off-the-shelf search service, paired with a recommendation system driven by user behavior and preferences.",
    result:
      "A working search-and-recommend listings platform with its own retrieval logic, backend and dashboard both public on GitHub.",
  },
  myContribution: [
    "Wrote the search engine on a Vector Space Model rather than adding a hosted search service, so relevance ranking is my own code.",
    "Drove recommendations from user behavior and preferences.",
    "Added an admin dashboard for listings and users.",
  ],
  stack: ["ASP.NET Core", "C#", "React", "MongoDB"],
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
