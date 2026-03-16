export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "vidnik",
    title: "Vidnik Mobile Platform",
    subtitle:
      "Mobile app where Muslims can connect with their potential life partners.",
    highlights: [
      "Implemented Apple & Google subscription lifecycle handling",
      "Integrated secure payment validation flows",
      "Built real-time messaging and video communication backend",
      "Focused on scalability and reliability",
    ],
    stack: ["NestJS", "Node.js", "React", "Next.JS", "MySQL", "MongoDB"],
    links: [],
  },
  {
    slug: "axiom",
    title: "Axiom",
    subtitle: "Gateway to UAE Properties and Effortless Expat Living, Find the Perfect Home and Settle Smoothly.",
    highlights: [],
    stack: ["NestJS", "Next.JS", "MongoDB"],
    links: [],
  },
  {
    slug: "exyar",
    title: "Exyar",
    subtitle: "Web application to find luxury cars for rent.",
    highlights: [],
    stack: ["NestJS", "Next.js", "MongoDB"],
    links: [],
  },
  {
    slug: "pms",
    title: "PMS",
    subtitle: "Agile Project Management Platform (Jira-like System)",
    highlights: [],
    stack: ["NestJS", "Next.js", "MongoDB"],
    links: [],
  },
  {
    slug: "zadlaw",
    title: "Zadlaw",
    subtitle: "Web application to book legal advisory session.",
    highlights: [],
    stack: ["NestJS", "Next.js", "MongoDB"],
    links: [],
  },
  {
    slug: "hr-software",
    title: "Hr Software",
    subtitle: "Employee Attendance & Task Management System.",
    highlights: [],
    stack: ["NestJS", "React", "MongoDB"],
    links: [],
  },
  {
    slug: "stepbytech",
    title: "Stepbytech",
    subtitle: "Landing page for Step By Tech company",
    highlights: [],
    stack: ["NestJS", "Next.js", "MongoDB"],
    links: [],
  },
  {
    slug: "mark-media",
    title: "Mark Media",
    subtitle: "Landing page for Mark Media company",
    highlights: [],
    stack: ["NestJS", "Next.js", "MongoDB"],
    links: [],
  },
  {
    slug: "xygma",
    title: "Xygma",
    subtitle: "Landing page for Xygma company",
    highlights: [],
    stack: ["NestJS", "Next.js", "MongoDB"],
    links: [],
  },
  {
    slug: "orders-delivery-system",
    title: "Orders Delivery System",
    subtitle:
      "Full-stack delivery platform with admin dashboard + client/driver apps and central backend.",
    highlights: [
      "Role-based access control and authentication flows",
      "Order tracking and delivery status updates",
      "Real-time updates via APIs/notifications",
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
  },
  {
    slug: "real-estate-management",
    title: "Real Estate Management",
    subtitle:
      "Listings management system with custom search and personalized recommendations.",
    highlights: [
      "Custom search engine using Vector Space Model",
      "Recommendation system based on user behavior/preferences",
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
  },
];
