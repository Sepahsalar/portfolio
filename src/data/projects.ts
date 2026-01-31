export type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Dictionary App",
    description:
      "A polished dictionary web app with light/dark theme, search-on-submit UX, audio playback (with fallback), and source links.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Netlify"],
    repoUrl: "https://github.com/sepahsalar/dictionary-app",
    liveUrl: "https://ali-dictionary.netlify.app/",
    featured: true,
  },
  {
    title: "Spring Boot Library",
    description:
      "A backend library management service built with Spring Boot. Focus on clean APIs, validation, and maintainable structure.",
    tech: ["Java", "Spring Boot", "REST", "SQL"],
    repoUrl: "https://github.com/Sepahsalar/springboot-library",
    featured: true,
  },
  {
    title: "42 Webserv",
    description:
      "A C++ HTTP server project (42 curriculum) focusing on request parsing, routing, and robust error handling.",
    tech: ["C++", "HTTP", "Systems"],
    repoUrl: "https://github.com/Sepahsalar/42-webserv",
  },
  {
    title: "42 Minishell",
    description:
      "A minimal Unix shell implementation with pipes, redirections, and process management (42 curriculum).",
    tech: ["C", "Unix", "Processes"],
    repoUrl: "https://github.com/Sepahsalar/42-minishell",
  },
  {
    title: "42 Cub3D",
    description:
      "A raycasting-based 3D game project (42 curriculum) emphasizing graphics fundamentals and performance.",
    tech: ["C", "Graphics", "Raycasting"],
    repoUrl: "https://github.com/Sepahsalar/42-cub3D",
  },
  {
    title: "Junction 2023",
    description:
      "A hackathon project built under time pressure with a team — focused on shipping and iteration.",
    tech: ["Teamwork", "Hackathon"],
    repoUrl: "https://github.com/Sepahsalar/junction-2023",
  },
];
