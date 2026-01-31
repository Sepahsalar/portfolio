import { cn } from "../lib/cn";

type Tab = {
  key: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
};

export function Tabs({ tabs, active, onChange }: Props) {
  return (
    <div
      className={cn(
        "mt-10 inline-flex rounded-2xl border p-1",
        "border-slate-200 bg-slate-50",
        "dark:border-slate-800 dark:bg-slate-900/40"
      )}
      role="tablist"
      aria-label="Sections"
    >
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(t.key)}
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-semibold transition",
              isActive
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            )}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
