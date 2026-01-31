// export type Project = {
//   title: string;
//   description: string;
//   tech: string[];
//   repoUrl: string;
//   liveUrl?: string;
//   featured?: boolean;
// };

// export const projects: Project[] = [
//   {
//     title: "Dictionary App",
//     description:
//       "A polished dictionary web app with light/dark theme, search-on-submit UX, audio playback (with fallback), and source links.",
//     tech: ["React", "TypeScript", "Tailwind", "Vite", "Netlify"],
//     repoUrl: "https://github.com/sepahsalar/dictionary-app",
//     liveUrl: "https://ali-dictionary.netlify.app/",
//     featured: true,
//   },
//   {
//     title: "Spring Boot Library",
//     description:
//       "A backend library management service built with Spring Boot. Focus on clean APIs, validation, and maintainable structure.",
//     tech: ["Java", "Spring Boot", "REST", "SQL"],
//     repoUrl: "https://github.com/Sepahsalar/springboot-library",
//     featured: true,
//   },
//   {
//     title: "42 Webserv",
//     description:
//       "A C++ HTTP server project (42 curriculum) focusing on request parsing, routing, and robust error handling.",
//     tech: ["C++", "HTTP", "Systems"],
//     repoUrl: "https://github.com/Sepahsalar/42-webserv",
//   },
//   {
//     title: "42 Minishell",
//     description:
//       "A minimal Unix shell implementation with pipes, redirections, and process management (42 curriculum).",
//     tech: ["C", "Unix", "Processes"],
//     repoUrl: "https://github.com/Sepahsalar/42-minishell",
//   },
//   {
//     title: "42 Cub3D",
//     description:
//       "A raycasting-based 3D game project (42 curriculum) emphasizing graphics fundamentals and performance.",
//     tech: ["C", "Graphics", "Raycasting"],
//     repoUrl: "https://github.com/Sepahsalar/42-cub3D",
//   },
//   {
//     title: "Junction 2023",
//     description:
//       "A hackathon project built under time pressure with a team — focused on shipping and iteration.",
//     tech: ["Teamwork", "Hackathon"],
//     repoUrl: "https://github.com/Sepahsalar/junction-2023",
//   },
// ];

// export const projects = [
//   {
//     title: "Dictionary App",
//     description:
//       "A React + TypeScript dictionary with audio pronunciation, history, theme toggle, and an improved UI built with Tailwind.",
//     tech: ["React", "TypeScript", "Tailwind", "Vite"],
//     demo: "https://ali-dictionary.netlify.app/",
//     github: "https://github.com/sepahsalar/dictionary-app",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "Responsive personal portfolio with dark mode, animated tabs, reusable components, and clean frontend architecture.",
//     tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
//     demo: "https://alirezasohrabizadeh.netlify.app/",
//     github: "https://github.com/sepahsalar/portfolio",
//   },
//   {
//     title: "Spring Boot Library API",
//     description:
//       "A Java/Spring Boot library management API with CRUD operations, request validation, and modular architecture.",
//     tech: ["Java", "Spring Boot", "REST API"],
//     demo: null,
//     github: "https://github.com/sepahsalar/springboot-library",
//   },
// ];

export const projects = [
  {
    title: "Dictionary App",
    description:
      "A modern React + TypeScript dictionary with audio pronunciation, clean UI states, dark/light themes, search history, and reusable components. Built using Tailwind and Vite.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    demo: "https://ali-dictionary.netlify.app/",
    github: "https://github.com/sepahsalar/dictionary-app",
  },

  {
    title: "Spring Boot Library API",
    description:
      "A modular Java Spring Boot REST API for managing books, authors, and borrowing logic. Includes layered architecture, validation, structured error handling, and well-defined CRUD endpoints.",
    tech: ["Java", "Spring Boot", "REST", "Postman"],
    demo: null,
    github: "https://github.com/sepahsalar/springboot-library",
  },

  {
    title: "Webserv (HTTP Server)",
    description:
      "A full HTTP/1.1 server written in C++ as part of the 42 curriculum. Supports request parsing, routing, CGI handling, chunked transfer, persistent connections, async I/O, and config parsing with Nginx-like syntax.",
    tech: ["C++", "Networking", "HTTP", "Concurrency"],
    demo: null,
    github: "https://github.com/sepahsalar/webserv", // change if needed
  },

  {
    title: "Cub3D (Raycasting Engine)",
    description:
      "A lightweight 3D raycasting engine inspired by Wolfenstein 3D. Implemented in C with focus on rendering, textures, input handling, game loop architecture, and performance optimization.",
    tech: ["C", "Math", "Raycasting", "Rendering"],
    demo: null,
    github: "https://github.com/sepahsalar/Cub3D", // change if needed
  },

  {
    title: "Hackathon Project",
    description:
      "A team-built hackathon product created under time constraints. Focused on rapid prototyping, collaboration, and delivering a functional MVP with clear user value.",
    tech: ["React", "API Integration", "Teamwork"],
    demo: null,
    github: "https://github.com/sepahsalar", // replace with exact repo
  },
];
