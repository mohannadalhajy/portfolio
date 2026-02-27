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
      "Scalable backend powering a real-time communication and subscription-based mobile app.",
    highlights: [
      "Implemented Apple & Google subscription lifecycle handling",
      "Integrated secure payment validation flows",
      "Built real-time messaging and video communication backend",
      "Focused on scalability and reliability",
    ],
    stack: ["NestJS", "Node.js", "MongoDB", "Redis", "Socket.IO"],
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
    stack: ["Node.js", "NestJS/Express", "MongoDB/MySQL", "REST API"],
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
    subtitle: "Listings management system with custom search and personalized recommendations.",
    highlights: [
      "Custom search engine using Vector Space Model",
      "Recommendation system based on user behavior/preferences",
      "Admin dashboard for managing listings and users",
    ],
    stack: ["Node.js", "MongoDB", "React/Next.js", "Search/Ranking"],
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
