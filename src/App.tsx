import { Hero } from "./components/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-transparent dark:shadow-none">
          <Hero />
          <Projects />
          <About />
          <Contact />

          <footer className="mt-12 text-sm text-slate-500 dark:text-slate-400">
            Built with React, TypeScript, Tailwind, and Framer Motion.
          </footer>
        </div>
      </div>
    </div>
  );
}
