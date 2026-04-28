import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLang } from "@/i18n/LangContext";
import { langFlag, langLabel } from "@/i18n/translations";

type Props = {
  progress?: number; // 0..100
};

export const TopBar = ({ progress = 0 }: Props) => {
  const { lang, cycle, tr } = useLang();

  return (
    <header className="sticky top-0 z-50 px-4 md:px-8 pt-4">
      <div className="glass rounded-3xl px-4 md:px-6 py-3 flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-2xl gradient-forest grid place-items-center text-xl shadow-md">
            🦉
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-forest-deep leading-tight">
              {tr("appTitle")}
            </div>
            <div className="text-xs text-muted-foreground -mt-0.5">{tr("grade")}</div>
          </div>
        </div>

        <div className="flex-1 flex items-center gap-3">
          <span className="text-xs font-bold text-forest-mid hidden md:inline">
            {tr("progress")}
          </span>
          <div className="relative h-3 flex-1 rounded-full bg-forest-pale/60 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--forest-light)), hsl(var(--sun)))",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          </div>
          <span className="text-sm font-bold text-forest-deep tabular-nums w-10 text-right">
            {Math.round(progress)}%
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={cycle}
          className="shrink-0 flex items-center gap-2 px-3 md:px-4 py-2 rounded-2xl bg-forest-deep text-forest-cream font-bold text-sm shadow-lg hover:bg-forest-mid transition-colors"
          aria-label="Switch language"
        >
          <Languages className="w-4 h-4" />
          <span>{langFlag[lang]}</span>
          <span className="hidden sm:inline">{langLabel[lang]}</span>
        </motion.button>
      </div>
    </header>
  );
};
