import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="text-center"
    >
      <h2 className="text-2xl font-bold tracking-tight">Contact</h2>

      <p className="mt-3 max-w-md mx-auto text-slate-600 dark:text-slate-300 leading-relaxed">
        Feel free to reach out — I’m always happy to talk about projects,
        frontend engineering, or opportunities.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
        <a
          href="mailto:alireza.sohrabizadeh@gmail.com"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold 
                     bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          <Mail size={16} />
          Email Me
        </a>

        <a
          href="https://github.com/sepahsalar"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold 
                     border-slate-200 bg-white text-slate-900 hover:bg-slate-50
                     dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900 transition"
        >
          <Github size={16} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/alireza-sohrabizadeh/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold 
                     border-slate-200 bg-white text-slate-900 hover:bg-slate-50
                     dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900 transition"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>

      <p className="mt-6 text-sm text-slate-400 dark:text-slate-500">
        I usually reply within 24 hours.
      </p>
    </section>
  );
}
