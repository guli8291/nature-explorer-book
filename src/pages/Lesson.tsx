import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Eye, FlaskConical, GraduationCap, Sparkles } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { useLang } from "@/i18n/LangContext";
import { useSpeech } from "@/hooks/useSpeech";
import { lessons } from "@/data/lessons";
import { LessonIntro } from "@/components/lesson/LessonIntro";
import { LessonScientists } from "@/components/lesson/LessonScientists";
import { LessonObservation } from "@/components/lesson/LessonObservation";
import { LessonPractice } from "@/components/lesson/LessonPractice";
import { LessonQuiz } from "@/components/lesson/LessonQuiz";
import type { TKey } from "@/i18n/translations";

type Section = "intro" | "scientists" | "observation" | "experiments" | "review";

const sections: { key: Section; icon: any; tk: TKey }[] = [
  { key: "intro", icon: Sparkles, tk: "nav_intro" },
  { key: "scientists", icon: BookOpen, tk: "nav_scientists" },
  { key: "observation", icon: Eye, tk: "nav_observation" },
  { key: "experiments", icon: FlaskConical, tk: "nav_experiments" },
  { key: "review", icon: GraduationCap, tk: "nav_review" },
];

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, tr } = useLang();
  const { speak } = useSpeech();
  const lessonId = Number(id);
  const lesson = useMemo(() => lessons.find((l) => l.id === lessonId), [lessonId]);
  const [active, setActive] = useState<Section>("intro");

  if (!lesson) {
    navigate("/");
    return null;
  }

  const idx = sections.findIndex((s) => s.key === active);
  const progress = ((idx + 1) / sections.length) * 100;

  const goNext = () => { if (idx < sections.length - 1) setActive(sections[idx + 1].key); };
  const goPrev = () => { if (idx > 0) setActive(sections[idx - 1].key); };

  const handlePick = (s: Section, label: string) => {
    setActive(s);
    speak(label, lang, `nav-${s}`);
  };

  const markComplete = () => {
    try {
      const arr: number[] = JSON.parse(localStorage.getItem("completed") || "[]");
      if (!arr.includes(lessonId)) {
        arr.push(lessonId);
        localStorage.setItem("completed", JSON.stringify(arr));
      }
    } catch {}
  };

  

  return (
    <div className="min-h-screen pb-12">
      <TopBar progress={progress} />

      {/* Sticky inner section nav under TopBar */}
      <div className="sticky top-[64px] z-30 px-4 md:px-8 pt-3 pb-2 backdrop-blur-md bg-forest-cream/70 border-b border-forest-pale/60">
        <div className="max-w-6xl mx-auto">
          <nav className="glass rounded-2xl p-1.5 flex gap-1 overflow-x-auto">
            {sections.map((s) => {
              const Icon = s.icon;
              const isActive = s.key === active;
              const label = tr(s.tk);
              return (
                <button
                  key={s.key}
                  onClick={() => handlePick(s.key, label)}
                  className="relative flex-1 min-w-[130px] px-3 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-section"
                      className="absolute inset-0 rounded-xl gradient-forest"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-2 ${isActive ? "text-forest-cream" : "text-forest-mid"}`}>
                    <Icon className="w-4 h-4" />
                    {label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <main className="px-4 md:px-8 mt-6 max-w-6xl mx-auto">
        {/* Lesson header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl glass font-bold text-forest-deep text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> {tr("toLessons")}
          </motion.button>
          <div className="text-right">
            <div className="text-xs uppercase tracking-wider font-bold text-forest-light">
              {tr("lesson")} {lesson.id}
            </div>
            <div className="font-display font-bold text-forest-deep text-lg md:text-xl">
              {tr(`l${lessonId}_title`) !== `l${lessonId}_title` ? tr(`l${lessonId}_title`) : lesson.title[lang]}
            </div>
          </div>
        </div>

        {/* Section content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {active === "intro" && <LessonIntro lessonId={lessonId} fallbackTitle={lesson.title[lang]} />}
            {active === "scientists" && <LessonScientists />}
            {active === "observation" && <LessonObservation />}
            {active === "experiments" && <LessonPractice lessonId={lessonId} />}
            {active === "review" && <LessonQuiz lessonId={lessonId} onComplete={markComplete} />}
          </motion.div>
        </AnimatePresence>

        {/* Footer nav */}
        <div className="mt-6 flex justify-between gap-3">
          <button
            onClick={goPrev}
            disabled={idx === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl glass font-bold text-forest-deep disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4" /> {tr("back")}
          </button>
          <button
            onClick={goNext}
            disabled={idx === sections.length - 1}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl gradient-forest text-forest-cream font-bold shadow-lg disabled:opacity-30"
          >
            {tr("next")} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Lesson;
