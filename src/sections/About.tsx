import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
      >
        About
      </motion.h2>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300">
        <p>
          I’m a software engineer based in Espoo, Finland, with experience across product,
          data, and engineering. I enjoy building fast, accessible interfaces and improving
          UX through careful state handling and clean UI patterns.
        </p>
        <p className="mt-3">
          I’m currently focusing on frontend engineering with React + TypeScript and
          building projects that demonstrate production-style practices: clear component
          structure, responsive design, and reliable behavior.
        </p>
      </div>
    </section>
  );
}
