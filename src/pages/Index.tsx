import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, BookOpen } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { useLang } from "@/i18n/LangContext";
import { lessons } from "@/data/lessons";

const Index = () => {
  const { lang, tr } = useLang();
  const navigate = useNavigate();

  // Read completed lessons from localStorage for progress
  const completed = (() => {
    try {
      return JSON.parse(localStorage.getItem("completed") || "[]") as number[];
    } catch {
      return [];
    }
  })();
  const progress = (completed.length / lessons.length) * 100;

  return (
    <div className="min-h-screen pb-12">
      <TopBar progress={progress} />

      <main className="px-4 md:px-8 mt-8 max-w-7xl mx-auto">
        {/* Book layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-2 items-stretch"
        >
          {/* LEFT page */}
          <section className="glass rounded-[2rem] lg:rounded-r-md p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-1 top-8 bottom-8 w-px bg-forest-mid/20 hidden lg:block" />
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-forest-light/30 -z-0" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl bg-sun/20 -z-0" />

            <div className="relative z-10 h-full flex flex-col">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-forest-deep text-forest-cream text-xs font-bold tracking-wider uppercase"
              >
                <Sparkles className="w-3.5 h-3.5" /> {tr("grade")}
              </motion.div>

              <h1 className="mt-6 font-display text-5xl md:text-7xl font-black leading-[0.95] text-forest-deep text-balance">
                {tr("sectionTitle")}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-forest-mid font-semibold max-w-md text-balance">
                {tr("sectionSubtitle")}
              </p>

              <div className="mt-8 flex-1 flex items-end">
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[8rem] md:text-[10rem] leading-none"
                >
                  🦉
                </motion.div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-forest-mid">
                <BookOpen className="w-5 h-5" />
                <span className="font-bold">
                  {lessons.length} {tr("lessons")}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="font-bold">
                  {completed.length} ✓
                </span>
              </div>
            </div>
          </section>

          {/* RIGHT page – lesson list */}
          <section className="glass rounded-[2rem] lg:rounded-l-md p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {lessons.map((l, idx) => {
                const done = completed.includes(l.id);
                return (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.05 + idx * 0.015, type: "spring", stiffness: 200, damping: 18 }}
                    whileHover={{ scale: 1.06, y: -4, rotate: -1 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => navigate(`/lesson/${l.id}`)}
                    className="group relative text-left p-4 rounded-2xl bg-white/70 border border-white hover:border-forest-light transition-colors overflow-hidden"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-forest-pale/50 group-hover:bg-sun/40 transition-colors" />

                    <div className="relative">
                      <div className="text-3xl md:text-4xl mb-2">{l.icon}</div>
                      <div className="text-[10px] font-bold tracking-wider text-forest-light uppercase">
                        {tr("lesson")} {l.id}
                      </div>
                      <div className="font-display font-bold text-forest-deep text-sm md:text-base leading-tight mt-0.5 line-clamp-2">
                        {l.title[lang]}
                      </div>
                      {done && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-sun grid place-items-center text-[12px] shadow">
                          ⭐
                        </div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
