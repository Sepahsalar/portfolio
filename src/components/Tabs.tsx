import { motion } from "framer-motion";

type TabItem = { key: string; label: string };

type Props = {
  tabs: readonly TabItem[];
  active: string;
  onChange: (key: string) => void;
};

export function Tabs({ tabs, active, onChange }: Props) {
  return (
    <div className="relative mt-8 w-full overflow-x-auto px-1 scrollbar-hide">
	{/* <div className="relative mt-8 w-full overflow-x-auto"> */}
      <div className="flex items-center gap-5 border-b border-slate-200 pb-1 dark:border-slate-700">

        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              onClick={() => onChange(tab.key)}
              className={`
                relative pb-2 text-sm font-medium transition
                ${isActive
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"}
              `}
            >
              {tab.label}

              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500 dark:bg-indigo-400"
                />
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
}
