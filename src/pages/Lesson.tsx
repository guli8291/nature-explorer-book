import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, FlaskConical, GraduationCap, Sparkles } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Owl } from "@/components/Owl";
import { useLang } from "@/i18n/LangContext";
import { lessons } from "@/data/lessons";
import { LessonIntro } from "@/components/lesson/LessonIntro";
import { LessonTheory } from "@/components/lesson/LessonTheory";
import { LessonPractice } from "@/components/lesson/LessonPractice";
import { LessonQuiz } from "@/components/lesson/LessonQuiz";

type Section = "intro" | "theory" | "practice" | "quiz";

const sections: { key: Section; icon: any }[] = [
  { key: "intro", icon: Sparkles },
  { key: "theory", icon: BookOpen },
  { key: "practice", icon: FlaskConical },
  { key: "quiz", icon: GraduationCap },
];

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, tr } = useLang();
  const lessonId = Number(id);
  const lesson = useMemo(() => lessons.find((l) => l.id === lessonId), [lessonId]);
  const [active, setActive] = useState<Section>("intro");

  if (!lesson) {
    navigate("/");
    return null;
  }

  const idx = sections.findIndex((s) => s.key === active);
  const progress = ((idx + 1) / sections.length) * 100;

  const goNext = () => {
    if (idx < sections.length - 1) setActive(sections[idx + 1].key);
  };
  const goPrev = () => {
    if (idx > 0) setActive(sections[idx - 1].key);
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

  // Lesson 1 has full content; others use a beautiful template
  const isLesson1 = lessonId === 1;

  return (
    <div className="min-h-screen pb-12">
      <TopBar progress={progress} />

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
              {isLesson1 ? tr("l1_title") : lesson.title[lang]}
            </div>
          </div>
        </div>

        {/* Section nav */}
        <nav className="glass rounded-2xl p-1.5 flex gap-1 mb-6 overflow-x-auto">
          {sections.map((s) => {
            const Icon = s.icon;
            const isActive = s.key === active;
            return (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className="relative flex-1 min-w-[110px] px-3 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
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
                  {tr(s.key)}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Section content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {active === "intro" && <LessonIntro isLesson1={isLesson1} lessonTitle={lesson.title[lang]} />}
            {active === "theory" && <LessonTheory isLesson1={isLesson1} />}
            {active === "practice" && <LessonPractice isLesson1={isLesson1} />}
            {active === "quiz" && <LessonQuiz isLesson1={isLesson1} onComplete={markComplete} />}
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
