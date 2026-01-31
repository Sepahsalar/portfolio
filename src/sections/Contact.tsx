import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold text-slate-900 dark:text-slate-100"
      >
        Contact
      </motion.h2>

      <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <MapPin size={16} />
          <span>Espoo, Finland</span>
        </div>

        <a
          className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          href="mailto:alireza.sohrabizadeh@gmail.com"
        >
          <Mail size={16} />
          alireza.sohrabizadeh@gmail.com
        </a>

      </div>
    </section>
  );
}
