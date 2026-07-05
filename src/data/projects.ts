import type { Project } from "../types";

// Tip: for a project that has separate frontend and backend repos, add
// `githubServerUrl: "https://github.com/you/project-server"` alongside
// `githubClientUrl`. The detail page will then show two buttons
// ("Frontend Repo" / "Backend Repo") instead of one.

export const projects: Project[] = [
  // {
  //   id: "devpulse",
  //   name: "DevPulse",
  //   tagline: "Internal tech issue tracker with role-based access control",
  //   image: "",
  //   techStack: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "JWT"],
  //   description:
  //     "DevPulse is a backend-focused issue-tracking system built for internal engineering teams to log, assign, and resolve technical issues. It uses the raw 'pg' driver (no ORM) for direct control over queries, JWT-based authentication, and role-based access control so that admins, managers, and reporters each see only what they need.",
  //   liveUrl: "#",
  //   githubClientUrl: "#",
  //   challenges:
  //     "Designing a clean relational schema without an ORM meant writing and maintaining raw SQL queries by hand, which made it easy to introduce subtle bugs around joins and transactions. Getting role-based permissions right — so that each role could only access and modify the correct resources — also required careful middleware design and thorough testing of edge cases.",
  //   improvements:
  //     "Planned improvements include adding a notification system for issue status changes, introducing an ORM layer (Prisma) for safer query building, adding automated tests for the permission middleware, and building an analytics dashboard to track issue resolution time.",
  //   featured: true,
  // },
  {
    id: "sports-genius-hub",
    name: "Sports Genius Hub",
    tagline: "A learning platform for sports enthusiasts",
    image: "https://i.ibb.co/XJyK7GM/sports-genius-hub-web-app.png",
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
