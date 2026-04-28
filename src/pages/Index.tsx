import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { Sparkles, BookOpen, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
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
  hsl: string;
  tint: string;
  bgTint: string; // page background tint when active
  emoji: string;
  accessory: OwlAccessory;
};

const SECTIONS: SectionDef[] = [
  { key: "explorer", titleKey: "sec_explorer", range: [1, 1],   hsl: "35 85% 50%",  tint: "45 90% 92%",  bgTint: "45 90% 95%",  emoji: "🔬", accessory: "magnifier" },
  { key: "living",   titleKey: "sec_living",   range: [2, 12],  hsl: "130 55% 32%", tint: "120 45% 90%", bgTint: "120 45% 94%", emoji: "🌳", accessory: "leaf" },
  { key: "phys1",    titleKey: "sec_physics1", range: [13, 16], hsl: "12 70% 48%",  tint: "15 80% 92%",  bgTint: "15 80% 95%",  emoji: "🔥", accessory: "flame" },
  { key: "space",    titleKey: "sec_space",    range: [17, 22], hsl: "230 60% 30%", tint: "225 55% 92%", bgTint: "225 55% 95%", emoji: "🌍", accessory: "astronaut" },
  { key: "phys2",    titleKey: "sec_physics2", range: [23, 33], hsl: "265 50% 45%", tint: "265 55% 93%", bgTint: "265 55% 96%", emoji: "💧", accessory: "droplet" },
];

const Index = () => {
  const { lang, tr } = useLang();
  const { speak } = useSpeech();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].key);
  const [winkTick, setWinkTick] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const railRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const completed = (() => {
    try { return JSON.parse(localStorage.getItem("completed") || "[]") as number[]; }
    catch { return []; }
  })();
  const progress = (completed.length / lessons.length) * 100;

  // Track which section is currently in view
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
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Owl winks while user scrolls
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (t) return;
      t = setTimeout(() => {
        setWinkTick((w) => w + 1);
        t = null;
      }, 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (t) clearTimeout(t);
    };
  }, []);

  const scrollRail = useCallback((key: string, dir: 1 | -1) => {
    const rail = railRefs.current[key];
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 280;
    rail.scrollBy({ left: step * 2 * dir, behavior: "smooth" });
  }, []);

  const activeSec = SECTIONS.find((s) => s.key === activeSection) ?? SECTIONS[0];

  return (
    <div className="min-h-screen pb-12 relative overflow-x-hidden">
      {/* Animated background tint that follows the active section */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{ backgroundColor: `hsl(${activeSec.bgTint})` }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      <TopBar progress={progress} />

      <main className="mt-8 max-w-[100rem] mx-auto">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden mb-10 mx-4 md:mx-8"
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

        {/* Sections — horizontal rails */}
        <div className="space-y-12">
          {SECTIONS.map((sec) => {
            const items = lessons.filter((l) => l.id >= sec.range[0] && l.id <= sec.range[1]);
            const title = tr(sec.titleKey);
            const isActive = activeSection === sec.key;
            return (
              <section
                key={sec.key}
                data-section={sec.key}
                ref={(el) => (sectionRefs.current[sec.key] = el)}
                className="w-full"
              >
                {/* Big section heading */}
                <motion.button
                  type="button"
                  onClick={() => speak(title, lang, `sec-${sec.key}`)}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  className="group w-full text-left flex items-center gap-4 md:gap-6 px-5 md:px-10 py-5 md:py-6 mb-5 relative"
                  style={{
                    background: `linear-gradient(100deg, hsl(${sec.hsl}) 0%, hsl(${sec.hsl} / 0.9) 55%, hsl(${sec.tint}) 100%)`,
                    boxShadow: isActive
                      ? `0 16px 48px -16px hsl(${sec.hsl} / 0.6)`
                      : `0 8px 28px -14px hsl(${sec.hsl} / 0.45)`,
                  }}
                >
                  <div
                    className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl grid place-items-center text-3xl md:text-4xl"
                    style={{ background: "hsl(0 0% 100% / 0.9)" }}
                  >
                    {sec.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/85">
                      {tr("lesson")} {sec.range[0]}{sec.range[0] !== sec.range[1] ? `–${sec.range[1]}` : ""}
                    </div>
                    <h2 className="font-display text-2xl md:text-4xl font-black text-white leading-tight truncate">
                      {title}
                    </h2>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full grid place-items-center bg-white/95 text-forest-deep"
                    aria-label="Listen"
                  >
                    <Volume2 size={20} />
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      className="absolute left-0 top-0 bottom-0 w-2 bg-white/95"
                    />
                  )}
                </motion.button>

                {/* Horizontal rail */}
                <div className="relative w-full">
                  {/* Left arrow */}
                  <motion.button
                    type="button"
                    onClick={() => scrollRail(sec.key, -1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden md:grid absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass place-items-center text-forest-deep hover:bg-white/80"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={22} />
                  </motion.button>

                  {/* Right arrow */}
                  <motion.button
                    type="button"
                    onClick={() => scrollRail(sec.key, 1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    className="hidden md:grid absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass place-items-center text-forest-deep hover:bg-white/80"
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={22} />
                  </motion.button>

                  {/* Edge fades */}
                  <div
                    className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
                    style={{ background: `linear-gradient(90deg, hsl(${sec.bgTint}) 0%, transparent 100%)` }}
                  />
                  <div
                    className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
                    style={{ background: `linear-gradient(-90deg, hsl(${sec.bgTint}) 0%, transparent 100%)` }}
                  />

                  <div
                    ref={(el) => (railRefs.current[sec.key] = el)}
                    className="no-scrollbar snap-x-mandatory flex flex-row items-stretch gap-4 overflow-x-auto px-6 md:px-20 py-6"
                    style={{ scrollPaddingLeft: "5rem", scrollPaddingRight: "5rem" }}
                  >
                    {items.map((l, idx) => {
                      const done = completed.includes(l.id);
                      return (
                        <motion.button
                          key={l.id}
                          data-card
                          initial={{ opacity: 0, y: 16, scale: 0.92 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: idx * 0.03, type: "spring", stiffness: 220, damping: 18 }}
                          whileHover={{ scale: 1.05, y: -6 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => navigate(`/lesson/${l.id}`)}
                          className="snap-center-child shrink-0 w-[220px] md:w-[240px] flex flex-col items-center text-center p-5 rounded-2xl bg-white/90 hover:bg-white transition-colors relative overflow-hidden"
                          style={{
                            boxShadow: `0 8px 24px -8px hsl(${sec.hsl} / 0.4)`,
                            border: `1.5px solid hsl(${sec.hsl} / 0.3)`,
                          }}
                        >
                          <div
                            className="absolute -right-8 -top-8 w-24 h-24 rounded-full"
                            style={{ background: `hsl(${sec.hsl} / 0.15)` }}
                          />
                          <motion.div
                            className="text-5xl md:text-6xl mb-3 inline-block origin-bottom relative"
                            animate={{
                              scale: [1, 1.06, 1],
                              rotate: [-1.5, 1.5, -1.5],
                              y: [0, -2, 0],
                            }}
                            transition={{
                              duration: 6 + (l.id % 5) * 0.7,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: (l.id % 7) * 0.4,
                            }}
                          >
                            {l.icon}
                          </motion.div>
                          <div
                            className="text-[10px] font-bold tracking-wider uppercase relative"
                            style={{ color: `hsl(${sec.hsl})` }}
                          >
                            {tr("lesson")} {l.id}
                          </div>
                          <div className="font-display font-bold text-forest-deep text-sm md:text-base leading-tight mt-1 relative line-clamp-2">
                            {l.title[lang]}
                          </div>
                          {done && (
                            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-sun grid place-items-center text-[14px] shadow">
                              ⭐
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Corner Owl that winks while scrolling */}
      <motion.div
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 pointer-events-none hidden sm:block"
        initial={{ opacity: 0, scale: 0.6, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSec.key}
            initial={{ opacity: 0, x: 30, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -20, rotate: 10 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <div
              className="rounded-3xl px-3 py-1.5 mb-2 text-xs font-bold text-white shadow-lg max-w-[170px] truncate text-center"
              style={{ background: `hsl(${activeSec.hsl})` }}
            >
              {tr(activeSec.titleKey)}
            </div>
            <Owl size={104} side="right" accessory={activeSec.accessory} winking={winkTick > 0} key={`owl-${winkTick}`} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Index;
