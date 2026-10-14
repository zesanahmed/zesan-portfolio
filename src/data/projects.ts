import type { Project } from "../types";
import sports from "../assets/project_img/sports.png";
import agencyops from "../assets/project_img/agencyops-profile.png";
import gearup from "../assets/project_img/gearup-profile.png";

// Tip: for a project that has separate frontend and backend repos, add
// `githubServerUrl: "https://github.com/you/project-server"` alongside
// `githubClientUrl`. The detail page will then show two buttons
// ("Frontend Repo" / "Backend Repo") instead of one.

export const projects: Project[] = [
  {
    id: "agencyops",
    name: "AgencyOps",
    tagline: "A SaaS platform for managing software agencies",
    image: agencyops,
    techStack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma"],
    description:
      "A multi-tenant SaaS platform for managing agency teams, projects, tasks, clients, and invoices. It features role-based access control, team collaboration, a dedicated client portal, and secure authentication, with a responsive interface designed to streamline agency workflows.",
    liveUrl: "https://agencyops-frontend.vercel.app/",
    githubClientUrl: "https://github.com/zesanahmed/agencyops-frontend",
    githubServerUrl: "https://github.com/zesanahmed/agencyops-api",
    challenges:
      "Designing a secure multi-tenant architecture with strict organization-level data isolation, role-based permissions, and a separate authentication boundary for client users required careful API design and consistent access-control checks.",
    improvements:
      "Future plans include completing Stripe payment integration, adding AI-powered assistance for agency workflows, and expanding automated testing, monitoring, and reporting capabilities.",
  },
  {
    id: "gearup",
    name: "GearUp",
    tagline: "Rent sports & outdoor gear instantly",
    image: gearup,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
    ],
    description:
      "A full-stack rental platform where customers browse gear, book it for a date range, and pay through Stripe Checkout. Providers manage their inventory and move orders through confirmation, pickup, and return, while admins moderate users and listings. The UI and route access adapt to each of the three roles.",
    liveUrl: "https://<your-frontend-domain>.vercel.app",
    githubClientUrl: "https://github.com/zesanahmed/gearup-frontend",
    githubServerUrl: "https://github.com/zesanahmed/gearupA4",
    challenges:
      "Next.js Middleware can only read cookies, not localStorage, so protecting role-based routes with a JWT needed a backend-for-frontend layer. I added Next.js API routes that call the real backend and store the token in an httpOnly cookie, then verify it with jose inside Middleware.",
    improvements:
      "Future plans include SSLCommerz support for BDT payments, real image uploads instead of URLs, server-side pagination for the admin panel, and split orders so one cart can include gear from multiple providers.",
  },
  {
    id: "sports-genius-hub",
    name: "Sports Genius Hub",
    tagline: "A learning platform for sports enthusiasts",
    image: sports,
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    description:
      "A full-stack platform where users can browse and enroll in sports-related courses. It includes user authentication, course management, and an admin dashboard for managing content, with a responsive interface designed for both learners and administrators.",
    liveUrl: "https://sports-genius-hub.web.app/",
    githubClientUrl: "https://github.com/zesanahmed/Sports-genius-hub-client",
    challenges:
      "Coordinating state between the client and server for course enrollment status, while keeping the admin dashboard and the public-facing course catalog in sync, required a clear separation of protected and public API routes.",
    improvements:
      "Future plans include adding a progress-tracking system for enrolled courses, payment integration for premium content, and a review/rating system for courses.",
  },
  {
    id: "premium-shop",
    name: "Premium Shop",
    tagline: "An e-commerce platform for phones, laptops and books",
    image: "https://i.ibb.co/D14hCkD/localhost-5174.png",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    description:
      "A full e-commerce web application for buying and selling electronics and books, featuring user authentication, product management, and an admin dashboard for inventory control, all wrapped in a responsive, user-friendly interface.",
    liveUrl: "https://premium-shop.vercel.app/",
    githubClientUrl: "https://github.com/zesanahmed/premium-shop",
    challenges:
      "Managing product inventory state accurately across concurrent user sessions, and structuring the MongoDB schema to support fast filtering and search across categories, were the biggest technical hurdles.",
    improvements:
      "Next steps include integrating a real payment gateway, adding order tracking, and introducing product recommendations based on browsing history.",
  },
  {
    id: "banglar-rannaghor",
    name: "Banglar RannaGhor",
    tagline: "A recipe-sharing platform for Bangladeshi cuisine",
    image:
      "https://i.ibb.co/XX4RWx4/banglar-rannaghor-5de0c-web-app-main-Layout.png",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    description:
      "A community platform where users can explore, post, and share traditional Bangladeshi recipes. It includes user authentication, recipe management, and an admin dashboard, built with a focus on making recipe discovery simple and visual.",
    liveUrl: "https://banglar-rannaghor-5de0c.web.app/",
    githubClientUrl: "https://github.com/zesanahmed/Banglar-Rannaghor-Client",
    challenges:
      "Handling image uploads for recipes efficiently, and designing a data model flexible enough to support varying ingredient lists and preparation steps across very different recipe types, took several iterations to get right.",
    improvements:
      "Planned additions include a rating and comment system for recipes, category-based filtering, and a 'save for later' feature for users.",
  },
  {
    id: "frozen-fairy-dolls",
    name: "Frozen Fairy Dolls",
    tagline: "An e-commerce store for fairy-tale-themed toys",
    image: "https://i.ibb.co/gr7YXmB/frozen-fairytales-dolls-web-app.png",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    description:
      "A niche e-commerce storefront for fairy doll toys, with user authentication, product management, and an admin dashboard, designed with a clean and responsive interface tailored to a younger, gift-buying audience.",
    liveUrl: "https://frozen-fairytales-dolls.web.app/",
    githubClientUrl:
      "https://github.com/zesanahmed/Frozen-fairytales-dolls-client",
    challenges:
      "Building a visually appealing product catalog for a niche audience while keeping the codebase reusable and consistent with the team's other e-commerce projects was the main design-versus-engineering trade-off.",
    improvements:
      "Future improvements include wishlist functionality, gift-wrapping options at checkout, and a curated 'collections' view for themed bundles.",
  },
];
