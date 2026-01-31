import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
      >
        Projects
      </motion.h2>

      <p className="mt-2 text-slate-700 dark:text-slate-300">
        A curated selection — focused on frontend polish and strong engineering fundamentals.
      </p>

      <div className="mt-6 space-y-4">
        {featured.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
          >
            <ProjectCard project={p} variant="horizontal" />
          </motion.div>
        ))}
      </div>

      {others.length > 0 ? (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            More projects
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {others.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
              >
                <ProjectCard project={p} variant="vertical" />
              </motion.div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
