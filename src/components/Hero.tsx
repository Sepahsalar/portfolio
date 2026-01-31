// import { motion } from "framer-motion";
// import { Github, Linkedin } from "lucide-react";
// import { ThemeToggle } from "./ThemeToggle";
// import { cn } from "../lib/cn";

// let meSrc: string | null = null;
// try {
//   meSrc = new URL("../assets/me.jpg", import.meta.url).toString();
// } catch {
//   meSrc = null;
// }

// export function Hero() {
//   return (
//     <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
//       <motion.div
//         initial={{ opacity: 0, y: 14 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-xl"
//       >
//         <div
//           className={cn(
//             "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm",
//             "border-slate-200 bg-white text-slate-700",
//             "dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200"
//           )}
//         >
//           <span>Frontend</span>
//           <span className="text-slate-400 dark:text-slate-500">•</span>
//           <span>React + TypeScript</span>
//         </div>

//         <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
//           Alireza Sohrabizadeh
//         </h1>

//         <p className="mt-3 text-slate-700 dark:text-slate-300">
//           I build clean, user-focused web experiences with React + TypeScript.
//           Currently applying for the Wolt Software Engineering Internship (Frontend).
//         </p>

//         <div className="mt-5 flex flex-wrap items-center gap-2">
//           <a
//             href="#projects"
//             className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition
//                        bg-indigo-600 text-white hover:bg-indigo-700"
//           >
//             View projects
//           </a>

//           <a
//             href="https://github.com/sepahsalar"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition
//                        border-slate-200 bg-white text-slate-900 hover:bg-slate-50
//                        dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
//           >
//             <Github size={16} />
//             GitHub
//           </a>

//           <a
//             href="https://www.linkedin.com/in/alireza-sohrabizadeh/"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition
//                        border-slate-200 bg-white text-slate-900 hover:bg-slate-50
//                        dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
//           >
//             <Linkedin size={16} />
//             LinkedIn
//           </a>

// 		  <a
// 			href="/cv.pdf"
// 			target="_blank"
//   			rel="noopener noreferrer"
// 			className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition
// 						border border-slate-200 bg-white text-slate-900 hover:bg-slate-50
// 						dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
// 			>
// 			View CV
// 		  </a>

//           <ThemeToggle />
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.55, delay: 0.05 }}
//         className="flex items-center justify-start sm:justify-end"
//       >
//         <div className="relative">
//           <div className="absolute -inset-3 rounded-full bg-indigo-500/10 blur-xl" />
//           <div
//             className={cn(
//               "relative h-28 w-28 overflow-hidden rounded-full border shadow-sm",
//               "border-slate-200 bg-white",
//               "dark:border-slate-800 dark:bg-slate-950"
//             )}
//           >
//             {meSrc ? (
//               <img
//                 src={meSrc}
//                 alt="Alireza"
//                 className="h-full w-full object-cover"
//               />
//             ) : (
//               <div className="flex h-full w-full items-center justify-center text-4xl">
//                 👋
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/cn";

let meSrc: string | null = null;
try {
  meSrc = new URL("../assets/me.jpg", import.meta.url).toString();
} catch {
  meSrc = null;
}

export function Hero() {
  return (
    <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-xl"
      >
        {/* Badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm",
            "border-slate-200 bg-white text-slate-700",
            "dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200"
          )}
        >
          <span>Frontend Developer</span>
          <span className="text-slate-400 dark:text-slate-500">•</span>
          <span>React + TypeScript</span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Alireza Sohrabizadeh
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
          I build clean, fast, and user-focused web applications. Passionate
          about polished interfaces, strong UX patterns, and scalable frontend
          architecture. Currently applying for the Wolt Software Engineering
          Internship (Frontend).
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition
                       bg-indigo-600 text-white hover:bg-indigo-700"
          >
            View Projects
          </a>

          {/* Secondary actions grouped */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/sepahsalar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition
                         border-slate-200 bg-white text-slate-900 hover:bg-slate-50
                         dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alireza-sohrabizadeh/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition
                         border-slate-200 bg-white text-slate-900 hover:bg-slate-50
                         dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition
                         border border-slate-200 bg-white text-slate-900 hover:bg-slate-50
                         dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              View CV
            </a>

            <ThemeToggle />
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="flex items-center justify-start sm:justify-end"
      >
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-indigo-500/20 blur-xl" />

          <div
            className={cn(
              "relative h-32 w-32 overflow-hidden rounded-full border shadow-sm",
              "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
            )}
          >
            {meSrc ? (
              <img
                src={meSrc}
                alt="Alireza"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-4xl">
                👋
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
