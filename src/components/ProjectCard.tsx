import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";
import { cn } from "../lib/cn";

type Props = {
  project: Project;
  variant?: "horizontal" | "vertical";
};

export function ProjectCard({ project, variant = "horizontal" }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={cn(
        "rounded-2xl border p-5 shadow-sm transition",
        "border-slate-200 bg-white",
        "dark:border-slate-800 dark:bg-slate-900/40",
        variant === "horizontal" ? "flex flex-col gap-4 sm:flex-row" : "flex flex-col gap-4"
      )}
    >
      {/* Thumbnail placeholder */}
      <div
        className={cn(
          "rounded-xl border bg-gradient-to-b from-slate-50 to-slate-100",
          "dark:from-slate-900 dark:to-slate-950 dark:border-slate-800",
          variant === "horizontal" ? "h-28 w-full sm:h-32 sm:w-48" : "h-40 w-full",
          "border-slate-200"
        )}
      />

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border px-2.5 py-1 text-xs
                         border-slate-200 bg-slate-50 text-slate-700
                         dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition
                       border-slate-200 bg-white text-slate-900 hover:bg-slate-50
                       dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            <Github size={16} />
            Repo
          </a>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition
                         bg-indigo-600 text-white hover:bg-indigo-700"
            >
              <ExternalLink size={16} />
              Live
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
