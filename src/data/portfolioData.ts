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

export interface InterestItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: "film" | "code" | "palette" | "gamepad";
  accentColor: string;
  badge: string;
}

export interface DeveloperProfile {
  name: string;
  handle: string;
  role: string;
  location: string;
  education: string;
  availability: string;
  bio: string;
  introduction: string;
  careerInterests: string[];
  educationDetails: {
    institution: string;
    program: string;
    duration: string;
    status: string;
    academicHighlights: string[];
  };
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
  introduction: "Hi, I'm Nihal Mahore — a full-stack engineer and computer science undergraduate passionate about architecting resilient web applications, distributed databases, and high-performance interactive interfaces.",
  bio: "Computer Science undergraduate at NIAT x Geeta University with a keen interest in mastering modern tech stacks, new-generation web technologies, and full-stack software development. Driven by building thoughtful, real-world digital products with high attention to user experience and clean architecture.",
  careerInterests: [
    "Full-Stack Web Architecture & Cloud Systems",
    "Next-Gen Frontend Runtimes & Micro-Interactions (React 19, Next.js)",
    "Relational Database Modeling & Row-Level Security (Supabase / PostgreSQL)",
    "High-Efficiency Algorithmic Design & Automation (Python)",
  ],
  educationDetails: {
    institution: "NIAT x Geeta University",
    program: "B.Tech in Computer Science & Engineering",
    duration: "2024 – 2028",
    status: "Active Undergraduate Student",
    academicHighlights: [
      "Core Computing Principles & Applied Systems",
      "Data Structures & Algorithmic Problem Solving",
      "Relational Database Management & Cloud Infrastructure",
      "Modern Web Development & Production Software Engineering",
    ],
  },
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
    category: "Programming Languages",
    description: "Core languages for software engineering and dynamic web applications",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Python"],
  },
  {
    category: "Technical Skills",
    description: "Architectural disciplines, design patterns, and engineering capabilities",
    items: [
      "Full-Stack Web Architecture",
      "RESTful API Design & Integration",
      "Relational Database Modeling",
      "Row-Level Security (RLS)",
      "Optimistic State Synchronization",
      "Responsive Layout Engineering",
    ],
  },
  {
    category: "Tools",
    description: "Modern developer tooling, IDEs, version control, and continuous deployment",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Zod", "npm / pnpm"],
  },
  {
    category: "Technologies",
    description: "Next-gen frameworks, libraries, cloud databases, and runtime platforms",
    items: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS v4",
      "Supabase (PostgreSQL)",
      "TMDB API",
      "Lucide React",
    ],
  },
];

export const interests: InterestItem[] = [
  {
    id: "cinema",
    title: "Cinema, Film Curation & Media Tracking",
    subtitle: "Narrative storytelling, visual direction & OTT architecture",
    category: "Storytelling & Arts",
    description:
      "Passionate cinephile with an appreciation for deep narrative world-building, screenwriting, and cinematic pacing. This passion served as the primary genesis behind building Couch Critics — logging journeys, tracking episodic progress, and solving OTT fragmentation.",
    highlights: [
      "Currently watching & analyzing: Vinland Saga, Suits, Succession, Pulp Fiction, Dune",
      "Tracking streaming catalog APIs and regional OTT provider metadata",
      "Exploring cinematic color grading, soundtrack composition, and episodic tension",
    ],
    tags: ["Film Curation", "Cinema Journal", "OTT Providers", "Screenwriting", "TMDB Telemetry"],
    icon: "film",
    accentColor: "#E6552F",
    badge: "Core Inspiration",
  },
  {
    id: "web-architecture",
    title: "Modern Web Architecture & Cloud Systems",
    subtitle: "Reactive runtimes, distributed databases & high-performance frontends",
    category: "Engineering Focus",
    description:
      "Constantly exploring bleeding-edge web infrastructure, serverless runtimes, and relational database paradigms. Driven by clean architecture, Row-Level Security, and optimistic UI transitions that feel instant.",
    highlights: [
      "Hands-on building with Next.js 16 App Router, React 19 concurrent features, and Turbopack",
      "Architecting secure, isolated backend persistence using Supabase (PostgreSQL) and RLS",
      "Benchmarking optimistic client state synchronization against cloud endpoints",
    ],
    tags: ["Next.js 16", "React 19", "Supabase", "PostgreSQL", "Cloud Architecture"],
    icon: "code",
    accentColor: "#6366F1",
    badge: "Active Pursuit",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Product Design & Micro-Interactions",
    subtitle: "Glassmorphism, spatial layout & tactile feedback",
    category: "Creative Craft",
    description:
      "Firm believer that software should not just work flawlessly—it should feel magical to interact with. Obsessed with refined design details: frosted glass refraction, dynamic ambient spotlights, silky physics, and typographic hierarchy.",
    highlights: [
      "Crafting multi-layered glassmorphic panels with backdrop filters and specular lighting",
      "Engineering zero-latency hardware-accelerated cursor illumination and micro-animations",
      "Designing responsive, content-dense layouts with bespoke editorial typography",
    ],
    tags: ["Glassmorphism", "Micro-Interactions", "Tailwind CSS v4", "Design Systems", "Motion Physics"],
    icon: "palette",
    accentColor: "#10B981",
    badge: "Aesthetic Standard",
  },
  {
    id: "gaming-scifi",
    title: "Gaming, Pop Culture & Sci-Fi Media",
    subtitle: "Immersive lore, virtual world-building & interactive mechanics",
    category: "Media & Exploration",
    description:
      "Fascinated by immersive gaming worlds, speculative sci-fi literature, and interactive media. Video games and futuristic narratives serve as an endless well of creative inspiration for intuitive user experience patterns and spatial interfaces.",
    highlights: [
      "Deep interest in dystopian cyberpunk aesthetics, retro-futurism, and sci-fi universes",
      "Studying interactive HUDs, diegetic game interfaces, and player feedback loops",
      "Exploring narrative branch design and game mechanics as models for user flows",
    ],
    tags: ["Interactive Lore", "Sci-Fi Aesthetics", "Diegetic HUDs", "World-Building", "Pop Culture"],
    icon: "gamepad",
    accentColor: "#F59E0B",
    badge: "Creative Horizon",
  },
];
