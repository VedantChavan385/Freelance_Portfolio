// Data content for the portfolio sections

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface CaseStudyData {
  id: string;
  tag: string;
  title: string;
  highlightedWord: string; // The word to render in italic serif font
  titleSuffix: string; // The rest of the title after the italicized word
  description: string;
  metrics: Metric[];
  testimonial: Testimonial;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: 'web' | 'app' | 'branding' | 'illustration' | 'motion' | 'logo';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: 'discover' | 'define' | 'design' | 'refine' | 'deliver';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Differentiator {
  title: string;
  description: string;
  emoji: string;
}

export interface StatItem {
  value: string;
  label: string;
}

// 1. Projects List
export const projects: Project[] = [
  {
    id: 'verto-studio',
    title: 'Verto Studio',
    subtitle: 'Elegant website for creative agency.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop', // Laptop overlay
    link: '#',
  },
  {
    id: 'elan-collective',
    title: 'Élan Collective',
    subtitle: 'Minimal identity for luxury fashion.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop', // Fashion B&W
    link: '#',
  },
  {
    id: 'solas-studio',
    title: 'Solas Studio',
    subtitle: 'High-end interactive art gallery.',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop', // Abstract lines
    link: '#',
  },
  {
    id: 'aether-motion',
    title: 'Aether Motion',
    subtitle: 'Immersive 3D audio-visual site.',
    category: '3D Motion',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop', // B&W structural light
    link: '#',
  },
];

// Categories for filters
export const projectCategories = ['All', 'Web Design', 'Branding', 'Development', '3D Motion'];

// 2. Case Studies List
export const caseStudies: CaseStudyData[] = [
  {
    id: 'flowspace',
    tag: 'Case study',
    title: 'Powering ',
    highlightedWord: 'activation',
    titleSuffix: ' from first click.',
    description: "Flowspace's onboarding was confusing. I improved it with a clearer hierarchy, simpler navigation, and a cleaner dashboard for faster activation and better experience.",
    metrics: [
      { value: '5.6M', label: 'Revenue Impact' },
      { value: '97%', label: 'Client Satisfaction' },
    ],
    testimonial: {
      quote: 'The redesign greatly improved usability and engagement. The process was structured, collaborative, and detail-oriented.',
      author: 'Sophia Bennett',
      role: 'Product Designer at Flowspace',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop', // B&W net/threads visual
  },
  {
    id: 'elan-studio',
    tag: 'Case study',
    title: 'Fashion ',
    highlightedWord: 'reimagined',
    titleSuffix: ' through story.',
    description: "Élan Studio's site had great products but lacked emotional impact and clear navigation. I improved hierarchy, layouts, and product discovery to tell a compelling story and elevate branding.",
    metrics: [
      { value: '+140%', label: 'Conversion Rate' },
      { value: '2.4x', label: 'Time on Site' },
    ],
    testimonial: {
      quote: 'The final result felt elevated, intentional, and perfectly matched our brand vision. Our engagement has skyrocketed.',
      author: 'Julien Mercier',
      role: 'Founder of Élan Studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop', // Model in glasses
  },
];

// 3. Services List
export const services: Service[] = [
  {
    title: 'Web Design',
    description: 'Designing responsive sites balancing clarity and UX.',
    iconName: 'web',
  },
  {
    title: 'App Design',
    description: 'Creating intuitive mobile and web interfaces that are easy to use.',
    iconName: 'app',
  },
  {
    title: 'Branding',
    description: 'Building visual identities that clearly and consistently represent brand.',
    iconName: 'branding',
  },
  {
    title: 'Illustration',
    description: 'Creating custom visuals that add personality and boost storytelling.',
    iconName: 'illustration',
  },
  {
    title: '3D Motion',
    description: 'Designing 3D visuals and motion to add depth and energy.',
    iconName: 'motion',
  },
  {
    title: 'Logo Design',
    description: 'Crafting unique logos that clearly express your unique brand.',
    iconName: 'logo',
  },
];

// Services marquee tags
export const servicesMarquee = [
  'Synchronization',
  'Performance',
  'Data Integration',
  'Visual Reports',
  'Automation',
  'Smart Workflow',
  'Adaptive Environments',
  'Pixel-Perfect Design',
  'Clean React Code',
  'Framer Motion Animations',
];

// 4. How I Work Process Steps
export const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Discover',
    description: 'Understanding goals, users, and challenges through active consultation.',
    iconName: 'discover',
  },
  {
    number: '2',
    title: 'Define',
    description: 'Structuring flows, wireframing pages, and defining the visual direction.',
    iconName: 'define',
  },
  {
    number: '3',
    title: 'Design',
    description: 'Creating intuitive, refined, and aesthetically stunning interfaces in Figma.',
    iconName: 'design',
  },
  {
    number: '4',
    title: 'Refine',
    description: 'Iterating through collaborative feedback cycles and usability testing.',
    iconName: 'refine',
  },
  {
    number: '5',
    title: 'Deliver',
    description: 'Developing with clean code and launching a flawless, high-performance site.',
    iconName: 'deliver',
  },
];

export const processQuote = {
  text: 'Great design is rarely accidental. It is the natural outcome of a structured, intentional, and collaborative process.',
  author: 'Elian Moreau',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', // White flower / minimalist B&W
};

// 5. FAQ List
export const faqs: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer: 'I offer end-to-end digital solutions including UI/UX design, custom web design, app design, corporate branding, interactive front-end development, and custom design systems.',
  },
  {
    question: 'Who do you work with?',
    answer: 'I work with forward-thinking startups, creative digital agencies, and established businesses looking to elevate their online brand and convert visitors into loyal clients.',
  },
  {
    question: 'What tools do you use?',
    answer: 'For design, I rely heavily on Figma. For development, I build clean, high-performance web applications using React, Tailwind CSS, TypeScript, Vite, and Framer Motion or GSAP for animations.',
  },
  {
    question: 'How long does a project take?',
    answer: 'A typical project spans 4 to 8 weeks. This timeline includes discovery, custom design, feedback revisions, frontend development, and rigorous testing before launch.',
  },
  {
    question: 'Do you work worldwide?',
    answer: 'Yes, I work with clients globally. I utilize structured async communication tools, Slack, and Zoom to ensure we stay perfectly aligned regardless of timezone differences.',
  },
];

// 6. Why Choose Me
export const differentiators: Differentiator[] = [
  {
    title: 'Pixel-Perfect Execution',
    description: 'Every layout is meticulously designed and aligned to guarantee a premium and cohesive visual experience across all screen sizes.',
    emoji: '🎯',
  },
  {
    title: 'Clean & Scalable Code',
    description: 'I write clean, modular, and performant React code that is easy to maintain, scale, and optimize for search engines.',
    emoji: '💻',
  },
  {
    title: 'Structured Collaborative Process',
    description: 'My structured workflow ensures transparency, allowing you to track exactly what stage of design or development we are in.',
    emoji: '🔄',
  },
  {
    title: 'Proactive Clear Communication',
    description: 'No guessing games. You will receive consistent updates and direct communication channels for smooth collaboration.',
    emoji: '💬',
  },
];

export const stats: StatItem[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'On-Time Rate' },
  { value: '4.9★', label: 'Client Rating' },
  { value: '3+ Yrs', label: 'Industry Experience' },
];
