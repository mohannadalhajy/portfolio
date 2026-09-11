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
  highlights: string[];
  technicalHighlights: string[];
  myContribution: string[];
  challengesSolved: string[];
  stack: string[];
  photos: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "vidnik",
    title: "Vidnik",
    subtitle:
      "A modern halal matchmaking platform that helps Muslims connect for marriage through secure and respectful interactions. The application includes a mobile app for users and a backend system supporting authentication, profile management, matchmaking, messaging, and AI-based identity verification. The platform emphasizes privacy, guardian (wali) involvement, and culturally aligned communication.",
    caseStudy: {
      problem:
        "Muslims looking for marriage needed a platform that felt safe, private, and culturally aligned — not a casual dating app — with real identity verification and guardian (wali) involvement built in from day one, not added later.",
      approach:
        "Architected and built the full backend for a scalable mobile app: real-time chat and video calling, AI-based identity verification via AWS Rekognition, cross-platform payment validation across Apple and Google, moderation tooling, and admin/super-admin dashboards for full platform control.",
      result:
        "A production platform with value-based matchmaking and privacy-first profile discovery, backed by a system engineered to hold up under concurrent real-time chat and video load.",
    },
    myContribution: [
      "Architected and developed the full backend system for a scalable mobile application",
      "Built a real-time chat system with video calling capabilities",
      "Implemented secure payment integrations with Google Play & Apple App Store",
      "Integrated QuickBooks for automated financial and transaction management",
      "Developed admin & super admin dashboards for full platform control",
      "Built a customer support system for handling user issues and moderation",
      "Designed and optimized scalable APIs, authentication, and data models",
    ],
    challengesSolved: [
      "Designed a scalable architecture to support real-time chat and video communication",
      "Handled secure cross-platform payment validation (Apple + Google ecosystems)",
      "Built moderation tools using image recognition services",
      "Ensured high performance under concurrent users using caching and async processing",
    ],
    technicalHighlights: [
      "Real-time communication using WebSockets (Socket.IO)",
      "Payment validation & subscription handling (Google Play / Apple Store)",
      "Cloud integrations (AWS Rekognition, Secrets Manager)",
      "Messaging & event-driven systems (Google Pub/Sub)",
      "Image processing & moderation pipelines",
      "Background jobs & schedulers (Cron jobs)",
      "Caching & performance optimization (Redis)",
      "Secure authentication (JWT, OAuth – Apple / Google)",
      "Logging & monitoring (Winston)",
    ],
    highlights: [
      "Value-based matchmaking focused on marriage, not casual dating",
      "Detailed profiles including faith, family background, and personal goals",
      "Smart discovery system based on location, preferences, and compatibility",
      "Privacy-first experience with respectful, principle-driven interactions",
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
      "/vidnik/vidnik-photo-0.webp",
      "/vidnik/vidnik-photo-1.webp",
      "/vidnik/vidnik-photo-2.webp",
      "/vidnik/vidnik-photo-3.webp",
      "/vidnik/vidnik-photo-4.webp",
      "/vidnik/vidnik-photo-5.webp",
      "/vidnik/vidnik-photo-6.webp",
      "/vidnik/vidnik-photo-7.webp",
      "/vidnik/vidnik-photo-8.webp",
      "/vidnik/vidnik-photo-9.webp",
      "/vidnik/vidnik-photo-10.webp",
      "/vidnik/vidnik-photo-11.webp",
      "/vidnik/vidnik-photo-12.webp",
      "/vidnik/vidnik-photo-13.webp",
    ],
  },
  {
    slug: "axiom",
    title: "Axiom",
    subtitle:
      "A scalable multi-client platform for discovering UAE properties and managing relocation services. The system integrates a web application, administrative dashboard, and Unity 3D client, powered by a modular NestJS backend supporting AI interactions, real-time communication, and cloud-based infrastructure.",
    caseStudy: {
      problem:
        "Expatriates relocating to the UAE needed one place to discover properties and manage relocation services — across three very different client types (public web, admin dashboard, and a Unity 3D application) that would normally mean three separate backends.",
      approach:
        "Designed a single modular NestJS backend serving all three clients from shared domain modules, added Redis + Redlock to handle concurrent and race-condition-prone operations safely, and integrated AWS speech and AI services (Polly, Comprehend, OpenAI) for voice and intelligent chat interactions.",
      result:
        "One backend, three clients, no duplicated logic — expatriates can discover properties and manage relocation end-to-end through a single unified platform.",
    },
    myContribution: [
      "Designed and implemented a scalable backend architecture using NestJS and TypeScript.",
      "Developed RESTful APIs supporting multiple clients including the public web platform, administrative dashboard, and Unity 3D application.",
      "Implemented secure authentication and authorization using JWT and OAuth strategies.",
      "Integrated AWS cloud services such as S3 for media storage, SES for email delivery, Polly for speech synthesis, and Comprehend for text analysis.",
      "Built real-time communication features using WebSockets to support chat and interactive services.",
      "Developed email notification systems and automated background tasks using NestJS Scheduler.",
      "Implemented secure file upload and asset delivery using AWS S3 with pre-signed URLs.",
      "Designed database schemas and implemented data validation and transformation using NestJS best practices.",
      "Improved system performance through Redis caching and distributed locking with Redlock.",
      "Managed deployment and production infrastructure including containerized services and cloud environments.",
    ],

    challengesSolved: [
      "Designed a backend architecture capable of supporting multiple client applications including a web platform, admin dashboard, and Unity 3D client.",
      "Implemented scalable and secure file storage and delivery using AWS S3 with signed URLs.",
      "Developed real-time communication infrastructure enabling chat and interactive Unity application features.",
      "Addressed concurrency and race condition issues using Redis and distributed locking with Redlock.",
      "Integrated AI and speech services for voice interaction and intelligent chat features.",
    ],

    technicalHighlights: [
      "Modular NestJS architecture organized by domain-driven modules.",
      "Multi-client API structure separating website, dashboard, and Unity services.",
      "Redis caching layer to improve performance and reduce database load.",
      "Distributed locking using Redlock for safe concurrent operations.",
      "Secure authentication and role-based authorization using JWT and Passport strategies.",
      "Background job scheduling and automation using NestJS Scheduler.",
      "Cloud integrations with AWS services including S3, SES, Polly, and Comprehend.",
      "Real-time WebSocket gateway implementation for chat and live communication.",
      "Centralized logging and monitoring using Winston.",
    ],

    highlights: [
      "Built a scalable multi-platform backend supporting web, admin, and Unity 3D applications.",
      "Integrated cloud services and AI-powered capabilities into the platform.",
      "Designed a modular architecture enabling maintainability and future scalability.",
      "Implemented secure authentication, infrastructure, and deployment workflows.",
      "Enabled expatriates to discover UAE properties and manage relocation services through a unified platform.",
    ],

    stack: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Redis",
      "Redlock",
      "WebSockets (Socket.IO)",
      "OpenAI APIs",
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
    photos: [],
  },
  {
    slug: "exyar",
    title: "Exyar",
    subtitle: `A full-featured luxury car rental platform that allows users to browse and book premium vehicles through a web application while administrators manage inventory, bookings, and customers through an administrative dashboard.
    
    The platform also integrates an AI-powered conversational assistant that helps users discover cars and get booking assistance through natural language interaction.
    
    The system was designed with a scalable modular backend architecture supporting high availability, secure authentication, and integration with external cloud services.`,
    caseStudy: {
      problem:
        "A car rental business needed customers to browse and book premium vehicles, with AI-assisted help discovering the right car, while giving admins full inventory and booking control — all from one backend serving three different consumers (website, dashboard, and AI assistant).",
      approach:
        "Built a modular NestJS backend with clear separation between the customer site, admin dashboard, and AI assistant layers; added Redis caching for frequently requested vehicle data, Firebase for real-time booking notifications, and secure multi-role authentication for both customers and staff.",
      result:
        "A single backend cleanly serving three different consumers, with an AI conversational layer for vehicle discovery built into the same system rather than bolted on separately.",
    },
    myContribution: [
      "Designed and implemented the backend architecture using NestJS and TypeScript following a modular domain-driven structure.",
      "Developed RESTful APIs powering the customer-facing website, admin dashboard, and AI assistant.",
      "Implemented authentication and authorization systems for both users and administrators using JWT.",
      "Built the vehicle management system including brands, car details, pricing packages, and media management.",
      "Implemented the booking system enabling users to reserve vehicles with flexible package options.",
      "Developed AI chat services allowing users to interact with the platform and discover vehicles via conversational interface.",
      "Built the notification system using Firebase for real-time alerts.",
      "Integrated AWS services including S3 for file storage and SES for transactional email delivery.",
      "Implemented Redis caching to optimize frequently requested data.",
      "Designed and implemented MongoDB schemas and data models using Mongoose.",
      "Developed secure email workflows for user verification and password recovery.",
      "Implemented admin activity logging and system monitoring features.",
      "Created reusable utilities, guards, and middleware to ensure consistent API security and validation.",
    ],
    challengesSolved: [
      "Designed a clean modular architecture separating API layers (Website, Dashboard, AI) from business modules.",
      "Implemented secure multi-role authentication handling both customers and admin users.",
      "Built an AI-driven chat interaction system capable of assisting users with vehicle discovery.",
      "Optimized system performance using Redis caching and efficient MongoDB queries.",
      "Implemented scalable media storage architecture using AWS S3.",
      "Ensured secure password handling and authentication using bcrypt and JWT.",
      "Created a notification pipeline using Firebase Cloud Messaging for real-time updates.",
      "Structured backend services to support future scaling and microservice transition.",
    ],
    technicalHighlights: [
      "Modular NestJS architecture with clear separation between API layers and domain modules.",
      "MongoDB + Mongoose schema-driven data models for scalable data handling.",
      "Redis caching layer for improved response times.",
      "AI conversational services integrated with backend APIs.",
      "AWS cloud integrations for storage and email infrastructure.",
      "Secure authentication system with role-based guards.",
      "Dockerized deployment environment with CI/CD pipeline.",
      "Centralized error handling and logging system using Winston.",
    ],
    highlights: [
      "Full backend system supporting web platform, admin dashboard, and AI assistant.",
      "Scalable architecture handling multiple service layers.",
      "Secure and production-ready infrastructure with cloud integrations.",
      "Advanced backend features including real-time notifications, caching, and AI interaction.",
      "Clean modular codebase with reusable services and utilities.",
    ],
    stack: ["NestJS", "Node.js", "TypeScript", "Next.js", "MongoDB", "AWS"],
    links: [],
    photos: [],
  },
  {
    slug: "pms",
    title: "PMS",
    subtitle: `A full-featured Agile project management platform designed to help teams plan, track, and deliver projects efficiently. The system supports project planning, sprint management, task tracking, team collaboration, approvals, notifications, and document management. It enables organizations to structure work using boards, epics, sprints, and tasks while maintaining visibility across teams and workflows.

    The backend was built with a scalable modular architecture using NestJS and MongoDB, integrating caching, cloud storage, real-time notifications, and role-based access control to support complex enterprise workflows.`,
    caseStudy: {
      problem:
        "Teams needed a full Agile workflow — boards, epics, sprints, tasks, approvals, document management — with enterprise-grade access control, essentially a Jira-equivalent built from scratch.",
      approach:
        "Designed a flexible data model to represent Agile hierarchies (project → board → epic → sprint → task), layered in role-based permissions, Redis caching for heavy task and project queries, Firebase push notifications, and PDF report generation via Puppeteer, all covered by Jest/Supertest tests.",
      result:
        "A working Jira-equivalent covering the full Agile lifecycle, architected to stay maintainable as the codebase and organization grow.",
    },
    myContribution: [
      "Designed and implemented the backend architecture using NestJS and TypeScript following a modular and scalable structure.",
      "Developed RESTful APIs supporting project management features such as projects, boards, epics, sprints, tasks, timelines, and approvals.",
      "Built role-based authentication and authorization using JWT and custom guards.",
      "Implemented team and employee management with permission and role systems.",
      "Designed task workflow features including comments, attachments, approvals, and status tracking.",
      "Integrated AWS services (S3, SES, SSM) for file storage, email notifications, and secure configuration management.",
      "Implemented real-time notifications using Firebase Cloud Messaging.",
      "Developed Redis caching layer to improve performance for frequently accessed data.",
      "Implemented document management and hierarchical document nodes for structured project documentation.",
      "Built PDF generation functionality for exporting project reports.",
      "Created system logging, error handling, and monitoring utilities.",
      "Containerized the application using Docker and Docker Compose for deployment.",
    ],
    challengesSolved: [
      "Designed a flexible data model capable of representing complex Agile structures (projects, boards, epics, sprints, tasks).",
      "Implemented granular permission and role management to support different team roles and access levels.",
      "Built a scalable notification system integrating Firebase push notifications and email services.",
      "Optimized performance using Redis caching for heavy project and task queries.",
      "Handled large file uploads and secure storage via AWS S3.",
      "Structured large codebase using clean modular architecture to keep the system maintainable and extensible.",
      "Implemented robust exception handling and centralized error management.",
    ],
    technicalHighlights: [
      "Modular NestJS architecture separating API layer and business logic.",
      "MongoDB + Mongoose schema design optimized for Agile workflows.",
      "Redis-based caching system for performance optimization.",
      "Firebase push notification integration for real-time alerts.",
      "AWS integrations including S3 for storage and SES for email delivery.",
      "JWT authentication with refresh token mechanism.",
      "Dockerized deployment environment.",
      "Automated testing using Jest and Supertest.",
    ],
    highlights: [
      "Jira-like Agile project management system.",
      "Supports Boards, Epics, Sprints, Tasks, and Timelines.",
      "Team collaboration features including comments and document management.",
      "Approval workflows for project processes.",
      "Push notifications and email alerts.",
      "Role-based permissions system.",
      "Scalable backend architecture suitable for enterprise environments.",
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
    photos: [],
  },
  {
    slug: "zadlaw",
    title: "Zadlaw",
    subtitle:
      "A full-featured web platform for a law firm, enabling clients to book consultation sessions and interact with services online, while providing administrators with a comprehensive dashboard to manage appointments, analytics, content, and user interactions efficiently. The backend is built with NestJS and TypeScript, ensuring scalable and secure operations.",
    caseStudy: {
      problem:
        "A law firm needed clients to book consultations and interact with services online, with staff needing a dashboard covering analytics, content, appointments, and subscriptions — coordinated across appointments, legal advisory, blogs, and analytics modules without the data drifting out of sync.",
      approach:
        "Built the backend in NestJS/TypeScript with Microsoft Graph API integration for real Outlook calendar scheduling, Stripe for subscription billing and webhook handling, and centralized middleware and exception handling to keep every module's API responses consistent.",
      result:
        "Clients book and manage consultations end-to-end online; staff run the firm's appointments, billing, and content from one dashboard instead of juggling separate tools.",
    },
    myContribution: [
      "Designed and implemented the backend architecture using NestJS and TypeScript.",
      "Developed REST APIs powering the web application and admin dashboard.",
      "Implemented authentication and authorization (JWT, Passport.js) for users and admin.",
      "Integrated with Microsoft Graph API for Outlook scheduling.",
      "Built payment processing and subscription handling using Stripe.",
      "Implemented email notifications and automated customer communications using AWS SES and EJS templates.",
      "Managed caching and performance optimization with Redis and cache-manager.",
      "Developed middleware and global exception handling for consistent API responses.",
      "Created modular and maintainable code with DTOs, services, and controllers for each feature (appointments, blogs, testimonials, TV videos, legal advisory, social media, permissions, working hours).",
    ],
    challengesSolved: [
      "Coordinating between multiple modules (appointments, legal advisory, blogs, analytics) to ensure data consistency.",
      "Integrating Outlook calendar scheduling via Microsoft Graph API for real-time client session management.",
      "Implementing secure authentication and role-based authorization across admin and client users.",
      "Ensuring reliable payment workflow and webhook handling with Stripe for subscription management.",
      "Handling asynchronous operations, caching, and notifications efficiently to prevent API bottlenecks.",
    ],
    technicalHighlights: [
      "Modular NestJS architecture for scalability and maintainability.",
      "Integration with AWS services (S3 for file storage, SES for email).",
      "Microsoft Graph API integration for Outlook calendar automation.",
      "Redis caching for improved performance and reduced database load.",
      "Secure authentication with JWT, Passport.js, and role-based guards.",
      "Stripe webhook handling for seamless payments.",
      "Comprehensive DTO validation and custom guards/middleware for robust request handling.",
    ],
    highlights: [
      "Fully functional admin dashboard with analytics, content management, and permission controls.",
      "Web application for clients with appointment booking, consultation tracking, and subscription management.",
      "Automated emails for session confirmation, reminders, and notifications.",
      "Payment integration and subscription management via Stripe.",
      "Multi-module architecture enabling future scalability.",
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
      "Stripe",
      "Jest",
      "Supertest",
      "Docker",
    ],
    links: [],
    photos: [],
  },
  {
    slug: "hr-software",
    title: "HR Software",
    subtitle: `A comprehensive HR workforce management platform designed to streamline employee attendance tracking, task management, and organizational administration. The system enables companies to manage employees, monitor clock-in/clock-out activity, assign and track daily tasks, control permissions and roles, and manage company resources through an administrative dashboard.
    The platform supports multi-company management, allowing a super-admin to oversee multiple organizations, while each company can manage its own employees, roles, and operations. The backend architecture is built to be scalable, secure, and modular, with integrations for cloud storage, email notifications, caching, and background services.`,
    caseStudy: {
      problem:
        "Companies needed to track attendance, assign tasks, and manage roles and permissions — with a single super-admin overseeing multiple independent companies without their data mixing.",
      approach:
        "Designed a multi-tenant architecture with isolated company data, a flexible RBAC system for dynamic permissions, a clock-in/clock-out system handling edge cases like duplicate punches, and Redis caching to keep the dashboards responsive at scale.",
      result:
        "One system, multiple companies, each fully isolated — with attendance, tasks, and permissions all manageable from a single super-admin view when needed.",
    },
    myContribution: [
      "Designed and implemented the backend architecture using NestJS and TypeScript.",
      "Built RESTful APIs for HR management features including employees, tasks, roles, permissions, and attendance tracking.",
      "Developed a clock-in/clock-out system to track employee working hours and attendance records.",
      "Implemented authentication and authorization with JWT and role-based access control.",
      "Designed a multi-level dashboard system including company dashboard and super-admin dashboard.",
      "Implemented file management and document uploads using AWS S3.",
      "Integrated email services using AWS SES and Nodemailer for password setup and notifications.",
      "Implemented Redis caching to improve API performance and reduce database load.",
      "Built task assignment and tracking system for employee daily activities.",
      "Developed role and permission management system to control system access.",
      "Implemented Excel export functionality for reporting and data analysis.",
      "Built reusable helper utilities and validation mechanisms for maintainable code.",
      "Implemented global exception handling and API response standardization.",
    ],
    challengesSolved: [
      "Designing a flexible RBAC (Role-Based Access Control) system capable of handling dynamic permissions.",
      "Implementing a reliable employee attendance tracking system while handling edge cases such as duplicate clock-ins.",
      "Supporting multi-company architecture with isolated data management.",
      "Integrating secure file storage and pre-signed URL uploads via AWS S3.",
      "Optimizing performance with Redis caching and efficient database queries.",
      "Ensuring secure password setup workflows using email-based activation links.",
      "Maintaining a modular and scalable architecture for long-term system growth.",
    ],
    technicalHighlights: [
      "Modular NestJS architecture with domain-driven module separation.",
      "Multi-dashboard system: Company Dashboard & Super Admin Dashboard.",
      "RBAC-based authorization system with permission validation.",
      "AWS integration for file storage and email communication.",
      "Redis caching layer to improve system responsiveness.",
      "Centralized exception handling and response formatting.",
      "File upload and management system with validation and storage abstraction.",
      "Excel report generation for HR analytics and exports.",
      "Secure password management with bcrypt and JWT.",
    ],
    highlights: [
      "Enterprise-ready HR management backend architecture.",
      "Scalable multi-tenant company management system.",
      "Secure authentication, authorization, and permission system.",
      "Integrated cloud services (AWS S3 + SES).",
      "Optimized performance using Redis caching.",
      "Clean and maintainable modular backend design.",
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
    photos: [],
  },
  {
    slug: "orders-delivery-system",
    title: "Orders Delivery System",
    subtitle:
      "Full-stack delivery platform with admin dashboard + client/driver apps and central backend.",
    caseStudy: {
      problem:
        "A delivery operation needed to track orders from placement to delivery across three different apps — admin dashboard, client, and driver — sharing one source of truth.",
      approach:
        "Built a central Node.js/Express backend with role-based access control and real-time order-status notifications so all three apps stay in sync.",
      result:
        "End-to-end order tracking from placement to delivery, with the backend and dashboard both public on GitHub.",
    },
    myContribution: [],
    challengesSolved: [],
    technicalHighlights: [],
    highlights: [
      "Role-based access control and authentication flows",
      "Order tracking and delivery status updates",
      "Real-time order updates via API notifications",
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
  },
  {
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
    myContribution: [],
    challengesSolved: [],
    technicalHighlights: [],
    highlights: [
      "Custom search engine using Vector Space Model",
      "Recommendation system based on user behavior and preferences",
      "Admin dashboard for managing listings and users",
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
  },
];
