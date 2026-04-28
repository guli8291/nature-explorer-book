import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Sparkles, BookOpen, Volume2 } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Owl, type OwlAccessory } from "@/components/Owl";
import { useLang } from "@/i18n/LangContext";
import { useSpeech } from "@/hooks/useSpeech";
import { lessons } from "@/data/lessons";
import type { TKey } from "@/i18n/translations";

type SectionDef = {
  key: string;
  titleKey: TKey;
  range: [number, number];
  /** main color (HSL string) */
  hsl: string;
  /** soft tint for backgrounds */
  tint: string;
  emoji: string;
  accessory: OwlAccessory;
};

const SECTIONS: SectionDef[] = [
  { key: "explorer", titleKey: "sec_explorer", range: [1, 1],   hsl: "35 85% 50%",  tint: "45 90% 92%",  emoji: "🔬", accessory: "magnifier" },
  { key: "living",   titleKey: "sec_living",   range: [2, 12],  hsl: "130 55% 32%", tint: "120 45% 90%", emoji: "🌳", accessory: "leaf" },
  { key: "phys1",    titleKey: "sec_physics1", range: [13, 16], hsl: "12 70% 48%",  tint: "15 80% 92%",  emoji: "🔥", accessory: "flame" },
  { key: "space",    titleKey: "sec_space",    range: [17, 22], hsl: "230 60% 30%", tint: "225 55% 92%", emoji: "🌍", accessory: "astronaut" },
  { key: "phys2",    titleKey: "sec_physics2", range: [23, 33], hsl: "265 50% 45%", tint: "265 55% 93%", emoji: "💧", accessory: "droplet" },
];

const Index = () => {
  const { lang, tr } = useLang();
  const { speak } = useSpeech();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].key);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const completed = (() => {
    try { return JSON.parse(localStorage.getItem("completed") || "[]") as number[]; }
    catch { return []; }
  })();
  const progress = (completed.length / lessons.length) * 100;

  // Track which section is currently in view → owl follows
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const key = (visible.target as HTMLElement).dataset.section;
          if (key) setActiveSection(key);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pb-12">
      <TopBar progress={progress} />

      <main className="px-4 md:px-8 mt-8 max-w-7xl mx-auto">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden mb-8"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-forest-light/30 -z-0" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl bg-sun/20 -z-0" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-deep text-forest-cream text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" /> {tr("grade")}
              </div>
              <h1 className="mt-4 font-display text-4xl md:text-6xl font-black leading-[0.95] text-forest-deep text-balance">
                {tr("appTitle")}
              </h1>
              <p className="mt-3 text-base md:text-lg text-forest-mid font-semibold max-w-md">
                {tr("sectionSubtitle")}
              </p>
              <div className="mt-5 flex items-center gap-3 text-forest-mid">
                <BookOpen className="w-5 h-5" />
                <span className="font-bold">{lessons.length} {tr("lessons")}</span>
                <span className="text-muted-foreground">•</span>
                <span className="font-bold">{completed.length} ✓</span>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="text-[6rem] md:text-[8rem] leading-none self-center"
            >
              🦉
            </motion.div>
          </div>
        </motion.section>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((sec) => {
            const items = lessons.filter((l) => l.id >= sec.range[0] && l.id <= sec.range[1]);
            const title = tr(sec.titleKey);
            const isActive = activeSection === sec.key;
            return (
              <div
                key={sec.key}
                data-section={sec.key}
                ref={(el) => (sectionRefs.current[sec.key] = el)}
              >
                {/* Section header */}
                <motion.button
                  type="button"
                  onClick={() => speak(title, lang, `sec-${sec.key}`)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group w-full text-left rounded-2xl px-5 md:px-7 py-4 md:py-5 mb-4 flex items-center gap-4 relative overflow-hidden transition-shadow"
                  style={{
                    background: `linear-gradient(100deg, hsl(${sec.hsl}) 0%, hsl(${sec.hsl} / 0.85) 60%, hsl(${sec.tint}) 100%)`,
                    boxShadow: isActive
                      ? `0 12px 40px -12px hsl(${sec.hsl} / 0.6), inset 0 0 0 2px hsl(0 0% 100% / 0.4)`
                      : `0 6px 24px -10px hsl(${sec.hsl} / 0.45)`,
                  }}
                >
                  <div
                    className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl grid place-items-center text-2xl md:text-3xl"
                    style={{ background: "hsl(0 0% 100% / 0.85)" }}
                  >
                    {sec.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                      {tr("lesson")} {sec.range[0]}{sec.range[0] !== sec.range[1] ? `–${sec.range[1]}` : ""}
                    </div>
                    <h2 className="font-display text-xl md:text-3xl font-black text-white leading-tight truncate">
                      {title}
                    </h2>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="shrink-0 w-10 h-10 rounded-full grid place-items-center bg-white/90 text-forest-deep group-hover:bg-white"
                    aria-label="Listen"
                  >
                    <Volume2 size={18} />
                  </motion.div>

                  {/* Active marker */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="active-marker"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/90"
                      />
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Lesson cards */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 p-4 md:p-5 rounded-[1.75rem]"
                  style={{ background: `hsl(${sec.tint} / 0.55)`, border: `1px solid hsl(${sec.hsl} / 0.15)` }}
                >
                  {items.map((l, idx) => {
                    const done = completed.includes(l.id);
                    return (
                      <motion.button
                        key={l.id}
                        initial={{ opacity: 0, y: 16, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.03, type: "spring", stiffness: 220, damping: 18 }}
                        whileHover={{ scale: 1.06, y: -4, rotate: -1 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => navigate(`/lesson/${l.id}`)}
                        className="group relative text-left p-4 rounded-2xl bg-white/85 hover:bg-white transition-colors overflow-hidden"
                        style={{
                          boxShadow: `0 4px 18px -6px hsl(${sec.hsl} / 0.35)`,
                          border: `1.5px solid hsl(${sec.hsl} / 0.25)`,
                        }}
                      >
                        <div
                          className="absolute -right-5 -top-5 w-16 h-16 rounded-full transition-colors"
                          style={{ background: `hsl(${sec.hsl} / 0.18)` }}
                        />
                        <div className="relative">
                          <div className="text-3xl md:text-4xl mb-2">{l.icon}</div>
                          <div
                            className="text-[10px] font-bold tracking-wider uppercase"
                            style={{ color: `hsl(${sec.hsl})` }}
                          >
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
              </div>
            );
          })}
        </div>
      </main>

      {/* Floating Owl that follows the active section */}
      <motion.div
        className="fixed right-4 md:right-8 z-40 pointer-events-none hidden sm:block"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        style={{ top: "auto" }}
      >
        <FollowingOwl activeSection={activeSection} sectionRefs={sectionRefs} />
      </motion.div>
    </div>
  );
};

/** Owl that smoothly slides vertically to the active section's Y position */
const FollowingOwl = ({
  activeSection,
  sectionRefs,
}: {
  activeSection: string;
  sectionRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}) => {
  const [y, setY] = useState<number>(120);
  const { tr } = useLang();
  const sec = SECTIONS.find((s) => s.key === activeSection) ?? SECTIONS[0];

  useEffect(() => {
    const update = () => {
      const el = sectionRefs.current[activeSection];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const target = Math.min(
        Math.max(rect.top + 40, 100),
        window.innerHeight - 160
      );
      setY(target);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [activeSection, sectionRefs]);

  return (
    <motion.div
      animate={{ y }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="pointer-events-auto"
      style={{ position: "fixed", right: 16 }}
    >
      <div
        className="rounded-3xl px-3 py-2 mb-2 text-xs font-bold text-white shadow-lg max-w-[160px] truncate"
        style={{ background: `hsl(${sec.hsl})` }}
      >
        {tr(sec.titleKey)}
      </div>
      <Owl size={96} side="right" />
    </motion.div>
  );
};

export default Index;
