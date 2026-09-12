import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJs,
  FaJava,
  FaDocker,
} from "react-icons/fa";

import {
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const technologies = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    badge: "Popular",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    difficulty: "Beginner-Friendly",
    rating: 4.9,
  },

  {
    id: 2,
    name: "Vue.js",
    icon: <FaVuejs />,
    badge: "Versatile",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    difficulty: "Beginner-Friendly",
    rating: 4.8,
  },

  {
    id: 3,
    name: "Svelte",
    icon: <SiSvelte />,
    badge: "Fast",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    difficulty: "Intermediate",
    rating: 4.8,
  },

  {
    id: 4,
    name: "Next.js",
    icon: <SiNextdotjs />,
    badge: "",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    category: "Frontend",
    difficulty: "Intermediate",
    rating: 4.9,
  },

  {
    id: 5,
    name: "Node.js",
    icon: <FaNodeJs />,
    badge: "Standard",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    difficulty: "Intermediate",
    rating: 4.8,
  },

  {
    id: 6,
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    badge: "Top SQL",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    difficulty: "Intermediate",
    rating: 4.9,
  },

  {
    id: 7,
    name: "Redis",
    icon: <SiRedis />,
    badge: "Cache",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    difficulty: "Intermediate",
    rating: 4.8,
  },

  {
    id: 8,
    name: "JavaScript",
    icon: <FaJs />,
    badge: "Ubiquitous",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    difficulty: "Beginner-Friendly",
    rating: 4.9,
  },

  {
    id: 9,
    name: "TypeScript",
    icon: <SiTypescript />,
    badge: "Essential",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    difficulty: "Intermediate",
    rating: 4.9,
  },

  {
    id: 10,
    name: "Java",
    icon: <FaJava />,
    badge: "Robust",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    difficulty: "Intermediate",
    rating: 4.6,
  },

  {
    id: 11,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    badge: "Modern",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    difficulty: "Beginner-Friendly",
    rating: 4.9,
  },

  {
    id: 12,
    name: "Docker",
    icon: <FaDocker />,
    badge: "Containers",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    difficulty: "Intermediate",
    rating: 4.9,
  },
];

export default technologies;
