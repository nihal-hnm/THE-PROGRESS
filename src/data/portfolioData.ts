export interface Project {
  title: string;
  tagline: string;
  year: string;
  role: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Production" | "Prototype" | "Archived";
}

export interface EngineeringLog {
  date: string;
  topic: string;
  status: "Currently Building" | "Researching" | "Completed";
  notes: string;
  tags: string[];
}

export interface Milestone {
  date: string;
  title: string;
  context: string;
  description: string;
}

export interface ToolboxCategory {
  category: string;
  description: string;
  items: string[];
}

export interface DeveloperProfile {
  name: string;
  handle: string;
  role: string;
  location: string;
  education: string;
  availability: string;
  bio: string;
  email: string;
  links: {
    label: string;
    url: string;
    platform: "github" | "linkedin" | "instagram" | "email";
  }[];
}

export const developerProfile: DeveloperProfile = {
  name: "Nihal Mahore",
  handle: "nihal-hnm",
  role: "Full-Stack Engineer & Computer Science Undergrad",
  location: "India",
  education: "B.Tech in Computer Science & Engineering — NIAT x Geeta University",
  availability: "Available for internships & builds",
  bio: "Computer Science undergraduate at NIAT x Geeta University with a keen interest in mastering modern tech stacks, new-generation web technologies, and full-stack software development. Driven by building thoughtful, real-world digital products with high attention to user experience and clean architecture.",
  email: "harshmahore240@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/nihal-hnm", platform: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nihal-mahore-4981a1394/", platform: "linkedin" },
    { label: "Instagram", url: "https://www.instagram.com/_harsh_mahore/", platform: "instagram" },
    { label: "Email", url: "mailto:harshmahore240@gmail.com", platform: "email" },
  ],
};

export const projects: Project[] = [
  {
    title: "Couch Critics",
    tagline: "A comprehensive cinema journal and entertainment tracker recording watch journeys, providing smart OTT provider redirection, and organizing personal movie/show catalogs.",
    year: "3/10/2026",
    role: "Full-Stack Engineer & Creator",
    techStack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "TMDB API",
      "Zod",
      "Vercel",
    ],
    highlights: [
      "Engineered an interactive cinema journaling workflow featuring a tripartite classification system ('Watched', 'Watching', and 'Want to Watch') paired with custom score ratings and personal review logs.",
      "Integrated TMDB API to dynamically fetch rich streaming metadata, high-resolution poster art, episodic guides, and deep-link redirection to active regional OTT platforms.",
      "Architected backend persistence using Supabase (PostgreSQL) with Row-Level Security (RLS) policies, session-based authentication, and cloud storage to ensure strict user-partitioned data privacy.",
      "Constructed a responsive 'Midnight Cinema' aesthetic using Next.js 16 App Router and React 19, backed by hybrid state synchronization between local storage and cloud databases.",
    ],
    githubUrl: "https://github.com/nihal-hnm",
    status: "Production",
  },
];

export const engineeringLogs: EngineeringLog[] = [
  {
    date: "08/10/2026",
    topic: "OTT Platform Discovery & TMDB Watch Provider Integration",
    status: "Completed",
    notes: "Mapped TMDB watch provider streaming APIs to automatically redirect users to available regional OTT platforms (Netflix, Prime Video, JioHotstar). Designed graceful fallbacks for streaming region variations.",
    tags: ["TMDB", "APIs", "Next.js", "CouchCritics"],
  },
  {
    date: "03/10/2026",
    topic: "Couch Critics Launch & Midnight Cinema Architecture",
    status: "Completed",
    notes: "Officially shipped and launched Couch Critics v1.0. Configured complete telemetry, full-catalog search, dynamic poster caching, and instant watchlist classification.",
    tags: ["Next.js 16", "Supabase", "Production", "Launch"],
  },
  {
    date: "28/09/2026",
    topic: "Next.js 16 App Router & React 19 Hybrid State Synchronization",
    status: "Completed",
    notes: "Benchmarked client-side optimistic UI updates with React 19 and local cache fallback, ensuring zero-latency transitions when logging ratings across extensive media catalogues.",
    tags: ["React 19", "Next.js 16", "TypeScript", "Performance"],
  },
  {
    date: "22/09/2026",
    topic: "Row-Level Security (RLS) & Multi-Tier Watchlist Schema in Supabase",
    status: "Completed",
    notes: "Modeled relational PostgreSQL schemas supporting tri-state watch status tracking ('Watched', 'Watching', 'Want to Watch'). Configured strict RLS policies to isolate and protect user review logs.",
    tags: ["Supabase", "PostgreSQL", "RLS", "Database"],
  },
  {
    date: "15/09/2026",
    topic: "Python Scripting & Core Computer Science Foundations",
    status: "Researching",
    notes: "Deepening algorithmic understanding and automation workflows with Python. Exploring data manipulation pipelines and algorithmic problem-solving alongside undergraduate studies.",
    tags: ["Python", "Algorithms", "Automation", "CS"],
  },
];

export const milestones: Milestone[] = [
  {
    date: "Present",
    title: "B.Tech in Computer Science & Engineering",
    context: "NIAT x Geeta University",
    description: "Pursuing Bachelor of Technology in CSE. Actively studying core computing principles, data structures, algorithms, and applied software engineering.",
  },
  {
    date: "3/10/2026",
    title: "Shipped Couch Critics (Cinema Journal)",
    context: "Production Build",
    description: "Designed and deployed a full-stack media journaling platform with live TMDB integration, OTT provider routing, and Supabase PostgreSQL persistence.",
  },
  {
    date: "Sep 2026",
    title: "Modern Full-Stack Exploration & Runtimes",
    context: "Continuous Learning",
    description: "Hands-on exploration of next-generation technologies: Next.js 16 App Router, React 19, TypeScript typing systems, and relational cloud architectures.",
  },
];

export const toolboxCategories: ToolboxCategory[] = [
  {
    category: "Languages",
    description: "Core programming languages and web foundations",
    items: ["HTML5 & CSS3", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend & Web Frameworks",
    description: "Modern application frameworks and component systems",
    items: ["Next.js 16 (App Router)", "React 19", "Tailwind CSS v4", "Lucide React"],
  },
  {
    category: "Backend, Database & APIs",
    description: "Cloud database persistence, authentication, and external data services",
    items: ["Supabase", "PostgreSQL", "Row-Level Security (RLS)", "REST APIs", "TMDB API"],
  },
  {
    category: "Tools & Workflow",
    description: "Developer tooling, version control, and continuous delivery",
    items: ["Git", "GitHub", "VS Code", "Zod", "Vercel"],
  },
];
