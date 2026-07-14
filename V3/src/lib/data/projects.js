export const PROJECTS = [
  {
    title: "Inventory CRM",
    slug: "inventory-crm",
    description: "A high-performance enterprise resource planning and client management suite built for logistics startups.",
    thumbnail: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    overview: "Inventory CRM bridges the gap between warehouses, product inventory systems, and customer relationships. It enables real-time tracking of logistics hubs and automates customer updates during transport.",
    problem: "Logistics companies struggle to sync inventory data with customer relations software. This lag leads to customer dissatisfaction due to inaccurate shipment schedules and stock levels.",
    solution: "We designed a unified dashboard using WebSockets for live hub synchronization. We implemented automated email/SMS updates for transit changes and optimized PostgreSQL queries to handle millions of item updates daily.",
    development: "Developed in modular phases: first setting up database models and real-time synchronization hooks, followed by UI/UX dashboard panels, and ending with integration tests for message queues.",
    challenges: "Handling rapid websocket connection state changes on mobile devices during low-connectivity logistics transits was the largest hurdle, solved using progressive local-first caching.",
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Tailwind CSS", category: "Design" }
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop", alt: "Logistics Dashboard interface showcase" },
      { src: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop", alt: "Analytics graphs preview" }
    ],
    results: [
      { metric: "Synchronization Lag", value: "< 150ms", description: "Near-instant hub updates" },
      { metric: "Customer Support Tickets", value: "-45%", description: "Due to automated tracking updates" },
      { metric: "Query Latency", value: "-60%", description: "PostgreSQL index tuning optimization" }
    ],
    lessonsLearned: "Local-first optimistic UI updates improve user experiences in logistics fields with unreliable mobile data connectivity.",
    github: "https://github.com/example/inventory-crm",
    liveDemo: "https://inventory-crm.example.com",
    nextProject: "codebase-doc",
    prevProject: "word-blog"
  },
  {
    title: "CodeBaseDoc",
    slug: "codebase-doc",
    description: "An AI-powered documentation generator that analyzes workspace repositories and outputs semantic markdown files.",
    thumbnail: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    tags: ["Next.js", "OpenAI API", "LangChain", "TypeScript"],
    overview: "CodeBaseDoc scans directories, creates structured graphs of code connections, and uses LLMs to compile precise markdown documentation pages for developers.",
    problem: "Developers spend thousands of hours writing and maintaining documentation, which quickly becomes stale as new features are merged.",
    solution: "We created an automated pipeline that integrates into GitHub workflows. It parses abstract syntax trees (AST) to map code relationships, feeds clean contexts to generative models, and commits updated markdown docs.",
    development: "Built as a CLI utility first, then wrapped in a Next.js web application for user-friendly repository connections and interactive editing panels.",
    challenges: "Managing rate-limiting and context limits when feeding massive open-source repositories to LLMs was solved using chunking algorithms and structural summaries.",
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "OpenAI API", category: "AI Integration" },
      { name: "LangChain", category: "Agent Control" },
      { name: "TypeScript", category: "Language" }
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=1200&auto=format&fit=crop", alt: "Documentation panel interface" }
    ],
    results: [
      { metric: "Documentation Time Saved", value: "85%", description: "Fully automated markdown pipelines" },
      { metric: "Code Review Speed", value: "+20%", description: "Smarter context summaries" }
    ],
    lessonsLearned: "Tree-sitter structures provide a far cleaner context than feeding raw code file chunks directly to language models.",
    github: "https://github.com/example/codebase-doc",
    liveDemo: "https://codebase-doc.example.com",
    nextProject: "digital-mentor",
    prevProject: "inventory-crm"
  },
  {
    title: "Digital Mentor",
    slug: "digital-mentor",
    description: "A personalized e-learning workspace connecting students with automated guides and video-call tutors.",
    thumbnail: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    tags: ["React", "WebRTC", "Firebase", "Node.js"],
    overview: "Digital Mentor facilitates remote learning by pairing WebRTC peer-to-peer audio-video calls with collaborative code and text editors.",
    problem: "Static learning management systems lack direct human interactions and collaborative focus rooms, making distance learning feel isolated.",
    solution: "We integrated a real-time collaborative workspace containing multi-user document synchronization, alongside audio-video channels for classrooms.",
    development: "Developed the Firebase backend for auth and real-time DB states first, then set up the WebRTC signaling flow and React responsive workspaces.",
    challenges: "Synchronizing state edits across whiteboard canvases on low-end tablets without input lag required optimizing redraw intervals using requestAnimationFrame.",
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "WebRTC", category: "Media Streams" },
      { name: "Firebase", category: "Backend / Signalling" },
      { name: "Node.js", category: "Server" }
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop", alt: "Online workspace visual view" }
    ],
    results: [
      { metric: "Course Completion Rates", value: "+30%", description: "Better student retention rates" },
      { metric: "Session Startup Speed", value: "< 2s", description: "Firebase real-time DB routing" }
    ],
    lessonsLearned: "User feedback is far higher when video streams are accompanied by zero-install drawing whiteboards.",
    github: "https://github.com/example/digital-mentor",
    liveDemo: "https://digital-mentor.example.com",
    nextProject: "edfinlo",
    prevProject: "codebase-doc"
  },
  {
    title: "EdFinlo",
    slug: "edfinlo",
    description: "A financial planning dashboard aimed at managing student debt and creating custom scholarship paths.",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
    tags: ["Vue.js", "Express", "MongoDB", "Tailwind CSS"],
    overview: "EdFinlo assists high school graduates in estimating real tuition budgets and matches them with active grant proposals using query classification APIs.",
    problem: "Searching for college funding is a disjointed process, and students struggle to project compound interest levels on their private loans.",
    solution: "We created visual charting tools and math engines for debt forecasts, accompanied by aggregated query scrapers that look for minor state grants.",
    development: "Designed financial estimation tools first, integrated with standard Plaid APIs for banking connections, and wrapped the dashboard inside Vue pages.",
    challenges: "Building a accessible, non-intimidating design for complex compound interest structures required extensive user interviews and layout tweaks.",
    techStack: [
      { name: "Vue.js", category: "Frontend" },
      { name: "Express", category: "Backend API" },
      { name: "MongoDB", category: "Database" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    gallery: [],
    results: [
      { metric: "Debt Projection Time", value: "3 mins", description: "Easy calculation flow" },
      { metric: "Scholarship Matches Found", value: "24k+", description: "Aggregate index scrapers daily" }
    ],
    lessonsLearned: "Clear visual charting does more to reduce debt stress than complex spreadsheet analysis models.",
    github: "https://github.com/example/edfinlo",
    liveDemo: "https://edfinlo.example.com",
    nextProject: "murph",
    prevProject: "digital-mentor"
  },
  {
    title: "Murph",
    slug: "murph",
    description: "A focus-oriented developer portfolio showcasing hardware integrations and custom terminal command utilities.",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    overview: "Murph is a developer dashboard showing real-time desktop monitoring statistics, command logs, and project directories inside a retro UI shell.",
    problem: "Most developer portfolios are static pages that do not show real hardware integration capabilities or live code actions.",
    solution: "We integrated terminal consoles allowing users to run harmless shell sandbox commands, showcasing live memory updates and visual logs.",
    development: "Created standard visual components, built the web-based shell terminal emulator, and wrapped monitoring components using lightweight state loops.",
    challenges: "Managing keyboard trap states in the terminal window for mobile layout views was solved using overlay keypads.",
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Framer Motion", category: "Animations" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Vite", category: "Build Tools" }
    ],
    gallery: [],
    results: [
      { metric: "Visitor Interaction Time", value: "4.5m", description: "Terminal sandbox command logs" },
      { metric: "Page Load Speed", value: "0.4s", description: "Minimal JS script weights" }
    ],
    lessonsLearned: "Gamification and sandboxed CLI utilities are extremely good hooks for developer interactions.",
    github: "https://github.com/example/murph",
    liveDemo: "https://murph.example.com",
    nextProject: "word-blog",
    prevProject: "edfinlo"
  },
  {
    title: "WordBlog",
    slug: "word-blog",
    description: "A developer blog platform prioritizing typographic hierarchy, dark mode variations, and light markdown imports.",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    overview: "WordBlog parses file layouts to compile statically served web posts with clean typographic hierarchy and light code snippet blocks.",
    problem: "Content systems are bloated with JavaScript, loading large chunks of scripts for basic text displays.",
    solution: "We compiled posts into pure HTML at build time using Next.js static page generation, resulting in near-instant page load responses.",
    development: "Set up the MDX layout engine, configured syntax highlighters for code blocks, and designed customizable typography presets.",
    challenges: "Designing fluid code-highlighting blocks that look correct in both dark mode and light accents without script layout shifts.",
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "MDX", category: "Content Engine" },
      { name: "Tailwind CSS", category: "Design System" }
    ],
    gallery: [],
    results: [
      { metric: "Lighthouse Performance", value: "100/100", description: "Statically compiled HTML assets" },
      { metric: "Total Bundle size", value: "48KB", description: "Extremely light footprint" }
    ],
    lessonsLearned: "Markdown structures are the cleanest format for technical write-ups and fast build deployments.",
    github: "https://github.com/example/word-blog",
    liveDemo: "https://word-blog.example.com",
    nextProject: "inventory-crm",
    prevProject: "murph"
  }
];
