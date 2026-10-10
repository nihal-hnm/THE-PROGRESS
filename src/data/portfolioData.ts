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
  availability: string;
  bio: string;
  email: string;
  links: {
    label: string;
    url: string;
    monoLabel: string;
  }[];
}

export const developerProfile: DeveloperProfile = {
  name: "Nihal",
  handle: "nihal-hnm",
  role: "Full-Stack Engineer & Systems Builder",
  location: "Bengaluru, India",
  availability: "Available for internships & builds",
  bio: "Engineering high-throughput systems, distributed primitives, and editorial-grade web applications. Obsessed with high signal-to-noise ratio, memory efficiency, and mechanical sympathy.",
  email: "nihal@example.com",
  links: [
    { label: "GitHub", url: "https://github.com/nihal-hnm", monoLabel: "gh/nihal-hnm" },
    { label: "LinkedIn", url: "https://linkedin.com/in/nihal-hnm", monoLabel: "in/nihal-hnm" },
    { label: "Email", url: "mailto:nihal@example.com", monoLabel: "mail/nihal" },
    { label: "Resume", url: "/resume.pdf", monoLabel: "doc/resume" },
  ],
};

export const projects: Project[] = [
  {
    title: "LoomDB",
    tagline: "Zero-dependency embedded storage engine implementing log-structured merge-trees with memtable WAL recovery.",
    year: "2024",
    role: "Core Engine Author",
    techStack: ["Go", "POSIX", "Bitcask", "mmap", "B-Tree"],
    highlights: [
      "Engineered an immutable memtable flush pipeline to disk SSTables with bloom filter indexing, achieving sub-millisecond point lookups under heavy concurrent read pressure.",
      "Designed a deterministic size-tiered compaction loop reducing read amplification by 42% on write-heavy workloads compared to naïve append logs.",
      "Built crash-consistent write-ahead log (WAL) with strict crc32 checksum verification and deterministic replay on unexpected SIGKILL interruptions.",
    ],
    liveUrl: "https://github.com/nihal-hnm/loomdb",
    githubUrl: "https://github.com/nihal-hnm/loomdb",
    status: "Production",
  },
  {
    title: "PulseGrid",
    tagline: "High-throughput edge telemetry pipeline routing WebSocket heartbeats into clustered analytical stores.",
    year: "2024",
    role: "Full-Stack & Distributed Systems",
    techStack: ["TypeScript", "Next.js", "ClickHouse", "Redis Streams", "Tailwind CSS"],
    highlights: [
      "Architected backpressure buffer with Redis Streams sustaining bursts up to 25,000 telemetry events/sec per node with zero dropped frames.",
      "Constructed a canvas-accelerated timeseries inspector rendering 100,000 data points smoothly at 60 FPS without DOM thrashing.",
      "Reduced p99 analytical query latency from 1.4s to 82ms by provisioning materialized column projections and partitioned sorting keys.",
    ],
    liveUrl: "https://github.com/nihal-hnm/pulsegrid",
    githubUrl: "https://github.com/nihal-hnm/pulsegrid",
    status: "Production",
  },
  {
    title: "KubeSync",
    tagline: "Lightweight GitOps reconcile daemon verifying GPG-signed commits before applying Kubernetes manifests.",
    year: "2023",
    role: "Infrastructure & Systems",
    techStack: ["Go", "Kubernetes client-go", "Docker", "OpenSSL"],
    highlights: [
      "Eliminated third-party webhook dependencies by utilizing direct controller-runtime reconciliation loops with jittered exponential backoff.",
      "Designed cryptographic verification pipeline ensuring manifest trees are signed by authorized cluster maintainers before dispatching apply requests.",
      "Implemented dry-run server-side diffing, capturing drift detection within 1.2 seconds of git branch push events.",
    ],
    githubUrl: "https://github.com/nihal-hnm/kubesync",
    status: "Prototype",
  },
  {
    title: "Strata",
    tagline: "Local-first collaborative whiteboard featuring Conflict-Free Replicated Data Types (CRDT) and offline persistence.",
    year: "2023",
    role: "Frontend & Architecture",
    techStack: ["TypeScript", "React", "Yjs", "WebSockets", "IndexedDB"],
    highlights: [
      "Integrated Yjs binary state vector synchronization over raw WebSocket channels, maintaining convergence across unreliable network connections.",
      "Engineered differential snapshotting layer in IndexedDB restoring full document workspace state in under 45ms upon cold boot.",
      "Built bespoke spatial spatial-indexing quadrant tree to cull off-screen vector node calculations during high-speed zooming.",
    ],
    liveUrl: "https://github.com/nihal-hnm/strata",
    githubUrl: "https://github.com/nihal-hnm/strata",
    status: "Production",
  },
];

export const engineeringLogs: EngineeringLog[] = [
  {
    date: "2024-10-04",
    topic: "Zero-Copy Deserialization with FlatBuffers & Protobuf",
    status: "Currently Building",
    notes: "Profiling GC allocations in high-throughput binary RPC dispatchers. Replacing traditional JSON and Gob encoders with pointer-based zero-copy structs to eliminate memory churn in hot network loops.",
    tags: ["Go", "Memory", "Protobuf", "Profiling"],
  },
  {
    date: "2024-09-18",
    topic: "PostgreSQL Indexing & Partitioning Internals",
    status: "Researching",
    notes: "Benchmarking BRIN (Block Range Index) vs B-Tree behavior on monotonically increasing timeseries records. Achieved a 3.1x disk space reduction while maintaining identical range scan query throughput.",
    tags: ["PostgreSQL", "Databases", "Performance"],
  },
  {
    date: "2024-08-30",
    topic: "Optimistic State Convergence via LWW CRDTs",
    status: "Completed",
    notes: "Completed formal state-based LWW-Element-Set implementation with exhaustive property-based randomized test harness verifying idempotence and commutative merging.",
    tags: ["Distributed Systems", "CRDT", "Algorithms"],
  },
  {
    date: "2024-07-14",
    topic: "Kernel eBPF Tracepoints for Network Socket Profiling",
    status: "Researching",
    notes: "Investigating packet drop dynamics and TCP retransmissions directly inside the Linux network stack using BCC python bindings and clang/libbpf bytecode probes.",
    tags: ["Linux", "eBPF", "Networking", "Kernel"],
  },
  {
    date: "2024-06-02",
    topic: "Turbopack Module Graph Optimization & Font Subsetting",
    status: "Completed",
    notes: "Audited client boundary tree imports and pruned dead AST parser bundles. Shaved 38KB off first-load JS transfer and eliminated Layout Shift (CLS: 0.00).",
    tags: ["Next.js", "WebPerf", "Architecture"],
  },
];

export const milestones: Milestone[] = [
  {
    date: "2024",
    title: "1st Place — National Systems Hackathon",
    context: "Hackathon / Competition",
    description: "Built a fault-tolerant, peer-to-peer disaster recovery dispatch ledger over local mesh networks within 36 hours. Scored highest in architecture rigor.",
  },
  {
    date: "2024",
    title: "Core Contributor — Distributed Tracing Suite",
    context: "Open Source",
    description: "Authored connection pool lifecycle improvements and backpressure mitigation for high-cardinality span exporters, merged upstream.",
  },
  {
    date: "2023",
    title: "Cloud Native Systems Fellowship",
    context: "Fellowship Cohort",
    description: "Selected into an intensive 12-week systems engineering program focused on consensus protocols (Raft/Paxos) and container runtime primitives.",
  },
  {
    date: "2023",
    title: "Best Infrastructure Track — Collegiate Hackathon",
    context: "Hackathon / Competition",
    description: "Architected a zero-config isolated staging preview bot for pull requests using lightweight container micro-VMs.",
  },
];

export const toolboxCategories: ToolboxCategory[] = [
  {
    category: "Languages",
    description: "Core programming languages used for systems & application development",
    items: ["TypeScript", "Go", "Python", "C++", "SQL"],
  },
  {
    category: "Frameworks & Web",
    description: "Modern application frameworks and interface architecture",
    items: ["Next.js (App Router)", "React", "Node.js", "Tailwind CSS", "WebSockets"],
  },
  {
    category: "Backend & Storage",
    description: "Data storage, stream processing, and distributed infrastructure",
    items: ["PostgreSQL", "Redis Streams", "ClickHouse", "Docker", "Supabase", "POSIX / Linux"],
  },
  {
    category: "Tools & Workflow",
    description: "Engineering toolchain, versioning, and development environment",
    items: ["Git", "Neovim / VS Code", "Turbopack", "GitHub Actions", "Postman", "Figma"],
  },
];
