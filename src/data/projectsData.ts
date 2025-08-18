export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  status: "Live" | "In Development" | "Code Review";
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

import weatherApp from "../assets/image5.png";
import botDashboard from "../assets/image6.png";
import invoiceApp from "../assets/image7.png";
import liberteMaisonettes from "../assets/image.png";
import colorPalette from "../assets/image8.png";
import studentManagement from "../assets/image3.png";
import loginSignup from "../assets/image4.png";

export const projectData: Project[] = [
  {
    id: 1,
    name: "Invoice Generator - App",
    description: "A simple and efficient invoice generator application that allows users to create, manage, and send invoices with ease.",
    imageUrl:  invoiceApp,
    category: "App Development",
    status: "Code Review",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/2GreekDevs/invoice-generator"
  },
  {
    id: 2,
    name: "Discord Bot Dashboard - Website",
    description: "Modern discord bot dashboard with user authentication, role management and real time updates.",
    imageUrl:  botDashboard,
    category: "Website",
    status: "Code Review",
    technologies: ["React", "TypeScript", "Tailwindcss", "0Auth2"],
    githubUrl: "https://github.com/2GreekDevs/Discord-Bot-Dashboard"

  },
  {
    id: 3,
    name: "Weather App - App",
    description: "A sleek and responsive weather application that provides real-time weather updates, forecasts, and location-based services using OpenWeatherMap API.",
    imageUrl:  weatherApp,
    category: "App",
    status: "Code Review",
    technologies: ["React", "OpenWeatherMap API", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/2GreekDevs/weather-app"
  },
  {
    id: 4,
    name: "Login/Signup Page - Website",
    description: "A sleek and modern login/signup page template designed for easy integration into web applications, featuring responsive design and smooth animations.",
    imageUrl: loginSignup,
    githubUrl: "https://github.com/2GreekDevs/login-signup-page",
    category: "Web Development",
    technologies: ["HTML","CSS","Javascript", "PHP", "MySQL"],
    status: "Code Review"
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
    name: "Task-Manager - App",
    description: "A comprehensive task management application with project organization, deadline tracking, and team collaboration features.",
    imageUrl:  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    category: "App",
    status: "In Development",
    technologies: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    githubUrl: "https://github.com/2GreekDevs/task-manager"
  },
  {
    id: 7,
    name: "Student Management System - App",
    description: "A comprehensive student management system built with modern web technologies, featuring user authentication, course management, and student profiles.",
    imageUrl: studentManagement,
    githubUrl: "https://github.com/2GreekDevs/Student-Management-System-Python-CLI-App-",
    category: "App Development",
    technologies: ["Python", "matplotlib","JSON"],
    status: "Code Review"
  },
  {
    id: 8,
    name: "Color Palette Generator - Website",
    description: "A simple yet powerful web application that allows users to generate and save custom color palettes for their design projects.",
    imageUrl: colorPalette,
    githubUrl: "https://github.com/2GreekDevs/Color-Pallete-Generator",
    category: "Web Development",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    status: "Code Review"
  },
  {
    id: 9,
    name: "Liberté Maisonettes - Website",
    description: "A modern, responsive website for Liberté Maisonettes, showcasing their luxury accommodations with stunning visuals and user-friendly navigation.",
    imageUrl:  liberteMaisonettes,
    category: "Website",
    status: "Live",
    technologies: ["React","HTML5", "TailwindCSS", "TypeScript","JavaScript"],
    liveUrl: "https://pargaresidenceliberte.com",
    featured: true
  }
];

export const allCategories = ["All", "Discord", "Website", "App", "Design", "WIP"];


