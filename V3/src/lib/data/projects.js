export const PROJECTS = [
  {
    title: "OrganicSense",
    slug: "organic-sense",
    description: "An organic e-commerce catalog featuring fast checkout routes and responsive custom filters.",
    thumbnail: "/OrganicSense/OrganicSenses Home page.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    overview: "OrganicSense is a direct-to-consumer e-commerce marketplace for organic agricultural products and wellness oils.",
    problem: "Traditional wellness platforms suffer from slow cart interactions, unoptimized search queries, and high dropoff rates on checkout pages.",
    solution: "I designed an optimized checkout funnel, integrated instant search queries, and built a custom responsive inventory map.",
    development: "Drafted database catalogs first, built card filter maps, integrated Stripe checkouts, and optimized server queries.",
    challenges: "Managing inventory stock synchronization during concurrent checkout orders was resolved using ACID-compliant transaction controls.",
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "MongoDB", category: "Database" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    gallery: [
      { src: "/OrganicSense/OrganicSenses Home page.png", alt: "OrganicSense ecommerce catalog store" }
    ],
    results: [
      { metric: "Checkout Dropoff", value: "-30%", description: "Frictionless checkout transitions" },
      { metric: "Search Query Speed", value: "< 50ms", description: "Indexed agricultural database tags" }
    ],
    lessonsLearned: "One-click express checkout options increase store orders and lower cart dropoffs.",
    github: "",
    liveDemo: "",
    nextProject: "remitout",
    prevProject: "word-blog"
  },
  {
    title: "Remitout",
    slug: "remitout",
    description: "A cross-border currency conversion rate comparer and secure remittance booking landing page.",
    thumbnail: "/Remitout/Home page.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    overview: "Remitout is a comprehensive cross-border remittance and international money transfer marketing and booking platform.",
    problem: "International money transfers involve obscure exchange rate margins and confusing fee structures, reducing client trust.",
    solution: "I developed a high-fidelity visual calculator with real-time rate comparison APIs, live transaction trackers, and a pixel-perfect design.",
    development: "Built exchange calculation utilities first, integrated third-party currency API pools, and styled responsive pages matching precise Figma wireframes.",
    challenges: "Synchronizing rapid market rate feeds without rendering jitter was solved using dynamic state debounce locks.",
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Framework" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Framer Motion", category: "Animations" }
    ],
    gallery: [
      { src: "/Remitout/Home page.png", alt: "Remitout international remittance homepage calculator" }
    ],
    results: [
      { metric: "Rate Query Speed", value: "< 150ms", description: "Cached currency rate endpoints" },
      { metric: "Design Fidelity", value: "100%", description: "Pixel-perfect Figma code translation" }
    ],
    lessonsLearned: "Real-time indicators and fee breakdowns reduce client conversion friction and build trust.",
    github: "",
    liveDemo: "https://edfinlo.vercel.app/",
    nextProject: "murph",
    prevProject: "organic-sense"
  },
  {
    title: "Murph",
    slug: "murph",
    description: "An interactive developer hub featuring custom terminal simulators, hardware graphs, and fluid motions.",
    thumbnail: "/Murph/Home page.png",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    overview: "Murph is a developer-focused interactive workspace featuring custom terminal dashboards, real-time metrics, and animations.",
    problem: "Standard developer portfolios are static and fail to demonstrate interactive animations or clean CLI shell emulation capabilities.",
    solution: "I built a retro-futuristic terminal UI with sandboxed command execution, dynamic memory tracking graphs, and custom Framer Motion page exits.",
    development: "Designed standard visual components, built the web-based shell terminal emulator, and wrapped monitoring components using lightweight state loops.",
    challenges: "Managing keyboard trap states in the terminal window for mobile layout views was solved using overlay keypads.",
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Framer Motion", category: "Animations" },
      { name: "Tailwind CSS", category: "Design" },
      { name: "Vite", category: "Build Tools" }
    ],
    gallery: [
      { src: "/Murph/Home page.png", alt: "Murph retro-interactive workspace homepage" }
    ],
    results: [
      { metric: "User Interactions", value: "+80%", description: "High retention CLI sandbox logs" },
      { metric: "Page Load Speed", value: "99/100", description: "Minimal javascript weight footprint" }
    ],
    lessonsLearned: "Gamification and sandboxed CLI utilities are extremely good hooks for developer interactions.",
    github: "",
    liveDemo: "https://murph-eight.vercel.app/",
    nextProject: "inventry-crm",
    prevProject: "remitout"
  },
  {
    title: "Inventry CRM",
    slug: "inventry-crm",
    description: "A high-performance customer resource dashboard and WhatsApp-integrated communications hub built for real estate inventory managers.",
    thumbnail: "/Inventry CRM/Home page.png",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    overview: "Inventry CRM is a high-performance customer relationship management and property tracker application designed for real estate and logistics managers. It bridges the gap between client requirements, active property listings, and WhatsApp communications.",
    problem: "Real estate and inventory agents struggle to manage client requirements, property details, and location maps in unified dashboards. Valuable leads are lost due to delayed manually-typed WhatsApp follow-ups.",
    solution: "I built a real-time web portal integrating properties mapping, WhatsApp template dispatchers, and requirements filtering to match client profiles to matching inventory slots.",
    development: "Developed in modular phases: first setting up database models and real-time synchronization hooks, followed by UI/UX dashboard panels, and ending with integration tests for message queues.",
    challenges: "Handling rapid websocket connection state changes on mobile devices during low-connectivity logistics transits was the largest hurdle, solved using progressive local-first caching.",
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Socket.io", category: "WebSockets" }
    ],
    gallery: [
      { src: "/Inventry CRM/Dashboard.png", alt: "Logistics Dashboard interface showcase" },
      { src: "/Inventry CRM/Properties on maps.png", alt: "Interactive properties mapped coordinate overlays" },
      { src: "/Inventry CRM/Property details.png", alt: "Detailed inventory listing details panel" },
      { src: "/Inventry CRM/Requirements page.png", alt: "Client requirements filtering criteria setup" },
      { src: "/Inventry CRM/Whatsapp integration page.png", alt: "Integrated WhatsApp message templates setup" },
      { src: "/Inventry CRM/Screenshot 2026-04-08 003246.png", alt: "Client database information overview" }
    ],
    results: [
      { metric: "Synchronization Lag", value: "< 100ms", description: "Real-time updates" },
      { metric: "WhatsApp Delivery", value: "1-Click", description: "Automated template dispatches" },
      { metric: "Query Latency", value: "-55%", description: "PostgreSQL query index improvements" }
    ],
    lessonsLearned: "Local-first optimistic UI updates improve user experiences in logistics fields with unreliable mobile data connectivity.",
    github: "",
    liveDemo: "https://inventory-crm-i73a.vercel.app/login",
    nextProject: "edfinlo",
    prevProject: "murph"
  },
  {
    title: "Edfinlo",
    slug: "edfinlo",
    description: "A secure financial loan compound calculator and scholarship match tool built for study-abroad student funding.",
    thumbnail: "/Edfinlo/Home page.png",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    overview: "Edfinlo is a financial planning and compound interest calculation engine that maps college tuition budgets and matches high school graduates with active scholarship grant databases.",
    problem: "Students struggle to calculate tuition loan interest rates over long periods, and state grants databases are disjointed and difficult to navigate.",
    solution: "I designed responsive debt charts, interest calculators, and scrapers to pull and index active state-sponsored scholarships.",
    development: "Created compound interest mathematical models first, integrated scholarship aggregators, and wrapped them in interactive React chart dashboards.",
    challenges: "Building an accessible, non-intimidating design for complex compound interest structures required extensive user interviews and layout tweaks.",
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "MongoDB", category: "Database" }
    ],
    gallery: [
      { src: "/Edfinlo/Home page.png", alt: "Edfinlo financial calculator homepage" }
    ],
    results: [
      { metric: "Amortization Math", value: "100%", description: "Precise interest calculator outputs" },
      { metric: "Page Load Speed", value: "0.3s", description: "Optimized static caching assets" }
    ],
    lessonsLearned: "Clear visual charting does more to reduce debt stress than complex spreadsheet analysis models.",
    github: "",
    liveDemo: "https://edfinlo.com/",
    nextProject: "remitout-loan",
    prevProject: "inventry-crm"
  },
  {
    title: "Remitout Loan",
    slug: "remitout-loan",
    description: "An eligibility check portal and secure document upload panel matching study-abroad students to bank lenders.",
    thumbnail: "/Remitout loan/Home page.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    overview: "Remitout Loan is a secure financial loan matching portal designed for student study-abroad applications, tracking credit scores and matching users with bank partnerships.",
    problem: "Applying for international study-abroad loans is a complex process. Students struggle to compare interest rates and upload financial verifications securely.",
    solution: "I built an interactive portal with loan eligibility calculators, secure document upload pipelines, and direct partner lender routing integrations.",
    development: "Constructed the multi-step form workflow first, integrated the file storage API pipeline, and connected partner eligibility webhooks.",
    challenges: "Ensuring secure uploads for large financial PDF documents while maintaining responsive form states was resolved using chunked storage uploads.",
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "API Router" },
      { name: "MongoDB", category: "Database" }
    ],
    gallery: [
      { src: "/Remitout loan/Home page.png", alt: "Remitout student loan application dashboard" }
    ],
    results: [
      { metric: "Application conversion", value: "+45%", description: "Simplified interactive multi-steps" },
      { metric: "File Processing", value: "< 2s", description: "Encrypted document pipeline uploads" }
    ],
    lessonsLearned: "Reducing form complexity from one long list into structured tabs dramatically increases user completions.",
    github: "",
    liveDemo: "https://loan-remitout-com.vercel.app/",
    nextProject: "word-blog",
    prevProject: "edfinlo"
  },
  {
    title: "WordBlog",
    slug: "word-blog",
    description: "A fast statically generated markdown technical blog utilizing zero cumulative layout shifts.",
    thumbnail: "/WordBlog/Home Page.png",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    overview: "WordBlog is a developer-focused blog publication platform prioritizing high-performance static rendering, clean syntax highlights, and markdown content compilation.",
    problem: "Common blog frameworks load excess JavaScript bundles, leading to slow page performance and layout shifts.",
    solution: "I built a statically compiled blog using Next.js static site generation (SSG) with MDX files and zero cumulative layout shift (CLS).",
    development: "Set up the MDX layout engine, configured syntax highlighters for code blocks, and designed customizable typography presets.",
    challenges: "Designing fluid code-highlighting blocks that look correct in both dark mode and light accents without script layout shifts.",
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "MDX", category: "MDX Content Compiler" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    gallery: [
      { src: "/WordBlog/Home Page.png", alt: "WordBlog main homepage feed" },
      { src: "/WordBlog/Home page 2.png", alt: "Alternative blogs feed page layout" },
      { src: "/WordBlog/About Section.png", alt: "Blog about author page panel view" },
      { src: "/WordBlog/Blogs slideshow.png", alt: "Statically served featured posts slider" },
      { src: "/WordBlog/Loading Screen.png", alt: "Seamless custom loading visual overlay" },
      { src: "/WordBlog/Various Blogs.png", alt: "Technical articles lists view panel" }
    ],
    results: [
      { metric: "Lighthouse Score", value: "100/100", description: "Statically compiled HTML scripts" },
      { metric: "Static bundle size", value: "48KB", description: "Lightweight javascript weight" }
    ],
    lessonsLearned: "Markdown static compiling produces search-engine friendly pages that load immediately.",
    github: "",
    liveDemo: "",
    nextProject: "organic-sense",
    prevProject: "remitout-loan"
  }
];
