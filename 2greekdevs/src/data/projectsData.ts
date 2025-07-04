export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  status: "Live" | "In Development" | "Coming Soon";
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectData: Project[] = [
  {
    id: 1,
    name: "Discord Server",
    description: "A comprehensive Discord community platform with advanced moderation, custom commands, and interactive features for Greek developers.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "Discord",
    status: "Live",
    technologies: [""],
    liveUrl: "https://discord.gg/2greek",
    featured: true
  },
  {
    id: 2,
    name: "Shopify Dropshipping Site",
    description: "Modern e-commerce platform with automated product sourcing, inventory management, and seamless payment integration.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "Website",
    status: "Live",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Payment APIs"],
    liveUrl: "https://example-shop.com"
  },
  {
    id: 3,
    name: "Mobile AI Chatbot App",
    description: "Intelligent mobile application featuring natural language processing, voice commands, and personalized user experiences.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "App",
    status: "In Development",
    technologies: ["React Native", "OpenAI API", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/2greekdevs/ai-chatbot"
  },
  {
    id: 4,
    name: "Crypto Tracker Dashboard",
    description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "Website",
    status: "Coming Soon",
    technologies: ["React", "TypeScript", "Chart.js", "CoinGecko API", "Tailwind"],
    githubUrl: "https://github.com/2greekdevs/crypto-tracker"
  },
  {
    id: 5,
    name: "Modern Landing Page Design",
    description: "Sleek and responsive landing page template with smooth animations, contact forms, and SEO optimization.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "Design",
    status: "Live",
    technologies: ["Figma", "HTML5", "CSS3", "GSAP", "Responsive Design"],
    liveUrl: "https://landing-demo.com",
    featured: true
  },
  {
    id: 6,
    name: "SaaS Dashboard Admin Panel",
    description: "Comprehensive admin dashboard with user management, analytics, billing integration, and role-based access control.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "App",
    status: "Coming Soon",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "NextAuth"],
    githubUrl: "https://github.com/2greekdevs/saas-dashboard"
  },
  {
    id: 7,
    name: "Advanced Moderation Bot",
    description: "Intelligent Discord bot with auto-moderation, custom commands, music playback, and server analytics.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "Discord",
    status: "Live",
    technologies: ["Python", "Discord.py", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/2greekdevs/mod-bot",
    liveUrl: "https://discord.com/oauth2/authorize?client_id=123456"
  },
  {
    id: 8,
    name: "E-Learning Platform",
    description: "Interactive online learning platform with video streaming, progress tracking, and certificate generation.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "Website",
    status: "In Development",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3", "Socket.io"],
    featured: true
  },
  {
    id: 9,
    name: "Portfolio Website Template",
    description: "Modern, responsive portfolio template with dark mode, smooth animations, and contact integration.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "Design",
    status: "Live",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "EmailJS"],
    liveUrl: "https://portfolio-template.com",
    githubUrl: "https://github.com/2greekdevs/portfolio-template"
  }
];

export const allCategories = ["All", "Discord", "Website", "App", "Design", "WIP"];
