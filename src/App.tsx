import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Tabs } from "./components/Tabs";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const tabs = [
    { key: "projects", label: "Projects" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ] as const;

  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("projects");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "projects" || hash === "about" || hash === "contact") {
      setActive(hash);
    }
  }, []);

  const onTabChange = (key: (typeof tabs)[number]["key"]) => {
    setActive(key);
    window.history.replaceState(null, "", `#${key}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
	{/* <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100"> */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="rounded-3xl border border-slate-300 bg-white p-6 shadow-sm
            dark:border-slate-800 dark:bg-transparent">
		{/* <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-transparent dark:shadow-none"> */}
          <Hero />

          <Tabs tabs={tabs as any} active={active} onChange={onTabChange as any} />

          <div className="mt-8">
			<AnimatePresence mode="wait">
				<motion.div
				key={active}
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -8 }}
				transition={{ duration: 0.18, ease: "easeOut" }}
				>
				{active === "projects" ? <Projects /> : null}
				{active === "about" ? <About /> : null}
				{active === "contact" ? <Contact /> : null}
				</motion.div>
			</AnimatePresence>
		</div>

          <footer className="mt-12 text-sm text-slate-500 dark:text-slate-400">
            Built with React, TypeScript, Tailwind, and Framer Motion.
          </footer>
        </div>
      </div>
    </div>
  );
}
