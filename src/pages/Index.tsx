import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { Sparkles, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
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
  bgTint: string;
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

// Hero is panel 0, sections start at panel 1
const TOTAL_PANELS = SECTIONS.length + 1;

const Index = () => {
  const { lang, tr } = useLang();
  const { speak } = useSpeech();
  const navigate = useNavigate();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [winkTick, setWinkTick] = useState(0);

  // 0..1 progress across the whole horizontal page
  const scrollProgress = useMotionValue(0);
  // Owl X position along the path (in % of viewport width)
  const owlLeft = useTransform(scrollProgress, [0, 1], ["6%", "92%"]);
  // Owl gentle bob along path
  const owlBob = useTransform(scrollProgress, (p) => Math.sin(p * Math.PI * 6) * 8);

  const completed = (() => {
    try { return JSON.parse(localStorage.getItem("completed") || "[]") as number[]; }
    catch { return []; }
  })();
  const progress = (completed.length / lessons.length) * 100;

  // Track horizontal scroll → active panel + progress
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = el.scrollWidth - el.clientWidth;
        const p = max > 0 ? el.scrollLeft / max : 0;
        scrollProgress.set(p);
        const idx = Math.round(el.scrollLeft / el.clientWidth);
        setActiveIdx((prev) => (prev !== idx ? idx : prev));
        setWinkTick((w) => (w === 0 ? 1 : w));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [scrollProgress]);

  // Translate vertical wheel to horizontal scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      // Only intercept when vertical intent dominates
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const goToPanel = useCallback((idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  }, []);

  const activeSec = activeIdx === 0 ? SECTIONS[0] : SECTIONS[activeIdx - 1];

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Animated bg tint following active panel */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ backgroundColor: `hsl(${activeSec.bgTint})` }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* Top bar overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <TopBar progress={progress} />
      </div>

      {/* Horizontal scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar h-full w-full flex flex-row overflow-x-scroll overflow-y-hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Hero panel */}
        <section
          className="shrink-0 h-full flex items-center justify-center px-6 md:px-16"
          style={{ minWidth: "100vw", scrollSnapAlign: "start" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-[2rem] p-8 md:p-14 relative overflow-hidden max-w-4xl w-full"
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
                <div className="mt-5 text-sm text-forest-mid font-bold">
                  {lessons.length} {tr("lessons")} • {completed.length} ✓
                </div>
                <motion.button
                  type="button"
                  onClick={() => goToPanel(1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-forest-deep text-forest-cream font-bold shadow-lg"
                >
                  <ChevronRight size={18} /> {tr("sec_explorer")}
                </motion.button>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="text-[7rem] md:text-[10rem] leading-none self-center"
              >
                🦉
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Section panels */}
        {SECTIONS.map((sec) => {
          const items = lessons.filter((l) => l.id >= sec.range[0] && l.id <= sec.range[1]);
          const title = tr(sec.titleKey);
          return (
            <section
              key={sec.key}
              className="shrink-0 h-full flex flex-row gap-4 md:gap-6 px-4 md:px-10 pt-20 pb-40"
              style={{ minWidth: "100vw", scrollSnapAlign: "start" }}
            >
              {/* Left fixed panel: section title + progress + owl space */}
              <aside className="hidden md:flex flex-col w-64 shrink-0 sticky top-0 self-start pt-4">
                <motion.button
                  type="button"
                  onClick={() => speak(title, lang, `sec-${sec.key}`)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left flex flex-col gap-3 p-5 rounded-3xl"
                  style={{
                    background: `linear-gradient(160deg, hsl(${sec.hsl}) 0%, hsl(${sec.hsl} / 0.85) 60%, hsl(${sec.tint}) 100%)`,
                    boxShadow: `0 16px 48px -16px hsl(${sec.hsl} / 0.6)`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl grid place-items-center text-3xl"
                    style={{ background: "hsl(0 0% 100% / 0.92)" }}
                  >
                    {sec.emoji}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/85">
                    {tr("lesson")} {sec.range[0]}{sec.range[0] !== sec.range[1] ? `–${sec.range[1]}` : ""}
                  </div>
                  <h2 className="font-display text-2xl font-black text-white leading-tight">
                    {title}
                  </h2>
                  <div className="flex items-center gap-2 text-white/90 text-xs font-bold">
                    <Volume2 size={14} /> {items.filter((l) => completed.includes(l.id)).length}/{items.length} ✓
                  </div>
                </motion.button>
              </aside>

              {/* Right scrollable lessons grid */}
              <div className="relative flex-1 min-w-0 flex flex-col">
                {/* Mobile section header */}
                <motion.button
                  type="button"
                  onClick={() => speak(title, lang, `sec-${sec.key}`)}
                  whileTap={{ scale: 0.98 }}
                  className="md:hidden w-full text-left flex items-center gap-3 px-4 py-3 rounded-2xl mb-3"
                  style={{
                    background: `linear-gradient(100deg, hsl(${sec.hsl}) 0%, hsl(${sec.tint}) 100%)`,
                    boxShadow: `0 12px 32px -12px hsl(${sec.hsl} / 0.6)`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl grid place-items-center text-2xl bg-white/95">{sec.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-white/85">
                      {tr("lesson")} {sec.range[0]}{sec.range[0] !== sec.range[1] ? `–${sec.range[1]}` : ""}
                    </div>
                    <h2 className="font-display text-lg font-black text-white truncate">{title}</h2>
                  </div>
                  <Volume2 size={18} className="text-white" />
                </motion.button>

                <div
                  className="no-scrollbar soft-bounce flex-1 overflow-y-auto pr-1"
                  style={{ maxHeight: "100%" }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 pb-6">
                    {items.map((l, idx) => {
                      const done = completed.includes(l.id);
                      return (
                        <motion.button
                          key={l.id}
                          initial={{ opacity: 0, y: 16, scale: 0.92 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: idx * 0.03, type: "spring", stiffness: 220, damping: 18 }}
                          whileHover={{ scale: 1.05, y: -6 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => navigate(`/lesson/${l.id}`)}
                          className="flex flex-col items-center text-center p-3 md:p-4 rounded-2xl bg-white/90 hover:bg-white transition-colors relative overflow-hidden"
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
                            className="text-4xl md:text-5xl mb-1 inline-block relative"
                            animate={{ scale: [1, 1.06, 1], rotate: [-1.5, 1.5, -1.5] }}
                            transition={{
                              duration: 6 + (l.id % 5) * 0.7,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: (l.id % 7) * 0.4,
                            }}
                          >
                            {l.icon}
                          </motion.div>
                          <div className="text-[10px] font-bold tracking-wider uppercase relative" style={{ color: `hsl(${sec.hsl})` }}>
                            {tr("lesson")} {l.id}
                          </div>
                          <div className="font-display font-bold text-forest-deep text-xs md:text-sm leading-tight mt-1 relative line-clamp-2">
                            {l.title[lang]}
                          </div>
                          {done && (
                            <div className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-sun grid place-items-center text-[12px] md:text-[14px] shadow">⭐</div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Scroll-down hint when there are many lessons */}
                {items.length > 6 && (
                  <div
                    className="scroll-hint pointer-events-none absolute left-1/2 bottom-1 text-xs font-bold flex items-center gap-1 px-3 py-1 rounded-full"
                    style={{ background: `hsl(${sec.hsl} / 0.95)`, color: "white" }}
                  >
                    ↓ {items.length}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Side navigation arrows */}
      <motion.button
        type="button"
        onClick={() => goToPanel(Math.max(0, activeIdx - 1))}
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.92 }}
        animate={{ x: [0, -6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full glass grid place-items-center text-forest-deep disabled:opacity-30"
        style={{ opacity: activeIdx === 0 ? 0.3 : 0.85 }}
        disabled={activeIdx === 0}
        aria-label="Previous"
      >
        <ChevronLeft size={32} />
      </motion.button>
      <motion.button
        type="button"
        onClick={() => goToPanel(Math.min(TOTAL_PANELS - 1, activeIdx + 1))}
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.92 }}
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full glass grid place-items-center text-forest-deep"
        style={{ opacity: activeIdx === TOTAL_PANELS - 1 ? 0.3 : 0.85 }}
        disabled={activeIdx === TOTAL_PANELS - 1}
        aria-label="Next"
      >
        <ChevronRight size={32} />
      </motion.button>

      {/* Path Line — bottom fixed */}
      <div className="absolute left-0 right-0 bottom-0 h-40 pointer-events-none z-30">
        <svg
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient id="pathGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="hsl(35 85% 55%)" />
              <stop offset="25%" stopColor="hsl(130 55% 40%)" />
              <stop offset="50%" stopColor="hsl(12 70% 55%)" />
              <stop offset="75%" stopColor="hsl(230 60% 45%)" />
              <stop offset="100%" stopColor="hsl(265 50% 55%)" />
            </linearGradient>
          </defs>
          {/* Soft underlay */}
          <path
            d="M 0 110 Q 125 60 250 100 T 500 90 T 750 105 T 1000 80"
            stroke="hsl(0 0% 100% / 0.5)"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          {/* Main path */}
          <path
            d="M 0 110 Q 125 60 250 100 T 500 90 T 750 105 T 1000 80"
            stroke="url(#pathGrad)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="1 0"
          />
          {/* Tiny leaves along path */}
          {[0.1, 0.3, 0.55, 0.78].map((p, i) => (
            <g key={i} transform={`translate(${p * 1000}, ${95 + Math.sin(p * 6) * 10}) rotate(${i * 30 - 30})`}>
              <path d="M 0 0 Q -8 -10 0 -16 Q 8 -10 0 0 Z" fill="hsl(120 55% 38%)" />
            </g>
          ))}
        </svg>

        {/* Star markers */}
        <div className="absolute inset-0 flex items-end justify-around px-8 md:px-20 pb-10 pointer-events-auto">
          {Array.from({ length: TOTAL_PANELS }).map((_, idx) => {
            const isActive = idx === activeIdx;
            const sec = idx === 0 ? null : SECTIONS[idx - 1];
            const color = sec ? `hsl(${sec.hsl})` : "hsl(45 90% 55%)";
            return (
              <motion.button
                key={idx}
                onClick={() => goToPanel(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={isActive ? { scale: [1, 1.2, 1], rotate: [0, 12, -12, 0] } : { scale: 1 }}
                transition={isActive ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                className="relative grid place-items-center"
                aria-label={`Go to panel ${idx}`}
              >
                <svg width={isActive ? 56 : 42} height={isActive ? 56 : 42} viewBox="0 0 24 24" style={{ filter: `drop-shadow(0 4px 10px ${color})` }}>
                  <path
                    d="M12 2 L14.6 8.6 L21.6 9.2 L16.3 13.8 L17.9 20.6 L12 17 L6.1 20.6 L7.7 13.8 L2.4 9.2 L9.4 8.6 Z"
                    fill={isActive ? color : "hsl(0 0% 100% / 0.95)"}
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <text
                    x="12" y="15" textAnchor="middle"
                    fontSize="8" fontWeight="900"
                    fill={isActive ? "white" : color}
                    fontFamily="Nunito, sans-serif"
                  >
                    {idx === 0 ? "★" : idx}
                  </text>
                </svg>
                {isActive && sec && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-9 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg whitespace-nowrap"
                    style={{ background: color }}
                  >
                    {tr(sec.titleKey)}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Owl walking along the path */}
      <motion.div
        className="absolute bottom-14 z-40 pointer-events-none -translate-x-1/2"
        style={{ left: owlLeft, y: owlBob }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSec.key}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <Owl size={92} accessory={activeSec.accessory} winking={winkTick > 0} key={`owl-${winkTick}`} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Index;
