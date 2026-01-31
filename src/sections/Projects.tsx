import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Projects</h2>

      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
	  {/* <div className="grid gap-6 sm:grid-cols-2"> */}
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            tech={p.tech}
            demo={p.demo}
            github={p.github}
          />
        ))}
      </div>
    </section>
  );
}
