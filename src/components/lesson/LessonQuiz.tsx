import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Owl } from "@/components/Owl";
import { SpeakButton } from "@/components/SpeakButton";
import { useLang } from "@/i18n/LangContext";
import type { TKey } from "@/i18n/translations";

type Q = { q: TKey; options: TKey[]; correctIdx: number };

const QUESTIONS: Q[] = [
  { q: "q1", options: ["q1_a", "q1_b", "q1_c"], correctIdx: 1 },
  { q: "q2", options: ["q2_a", "q2_b", "q2_c"], correctIdx: 1 },
  { q: "q3", options: ["q3_a", "q3_b", "q3_c"], correctIdx: 1 },
];

type Star = { id: number; x: number; y: number; tx: number; ty: number };

export const LessonQuiz = ({ lessonId, onComplete }: { lessonId: number; onComplete: () => void }) => {
  const { tr, trOpt } = useLang();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [done, setDone] = useState(false);

  if (lessonId !== 1) {
    const body = trOpt(`l${lessonId}_review`) ?? tr("comingSoon");
    return (
      <div className="glass rounded-3xl p-6 md:p-12 min-h-[420px] relative overflow-hidden">
        <div className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full bg-forest-light/30 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h3 className="font-display font-black text-3xl md:text-5xl text-forest-deep flex items-start gap-3">
              <span>🎓 {tr("nav_review")}</span>
              <SpeakButton text={tr("nav_review")} size="lg" />
            </h3>
            <div className="mt-4 flex items-start gap-3 max-w-2xl">
              <p className="text-lg md:text-xl text-forest-mid font-semibold whitespace-pre-line">{body}</p>
              <SpeakButton text={body} size="md" />
            </div>
          </div>
          <Owl message={tr("owlQuiz")} size={120} side="right" />
        </div>
      </div>
    );
  }

  const current = QUESTIONS[step];

  const launchStars = (clientX: number, clientY: number) => {
    const newStars: Star[] = Array.from({ length: 14 }, (_, i) => ({
      id: Date.now() + i,
      x: clientX,
      y: clientY,
      tx: (Math.random() - 0.5) * 200,
      ty: -50 - Math.random() * 80,
    }));
    setStars((s) => [...s, ...newStars]);
    setTimeout(() => {
      setStars((s) => s.filter((st) => !newStars.includes(st)));
    }, 1500);
  };

  const pick = (idx: number, e: React.MouseEvent) => {
    if (picked !== null) return;
    setPicked(idx);
    const isCorrect = idx === current.correctIdx;
    if (isCorrect) {
      setScore((s) => s + 1);
      launchStars(e.clientX, e.clientY);
    }
    setTimeout(() => {
      setPicked(null);
      if (step + 1 < QUESTIONS.length) {
        setStep(step + 1);
      } else {
        setDone(true);
        onComplete();
      }
    }, 1200);
  };

  if (done) {
    const perfect = score === QUESTIONS.length;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-8 md:p-14 text-center min-h-[420px] grid place-items-center"
      >
        <div>
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-8xl mb-4"
          >
            {perfect ? "🏆" : "🌟"}
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-forest-deep">
            {tr("yourScore")}
          </h2>
          <div className="mt-3 text-6xl font-display font-black text-forest-mid">
            {score} / {QUESTIONS.length}
          </div>
          <button
            onClick={() => { setStep(0); setScore(0); setDone(false); }}
            className="mt-6 px-6 py-3 rounded-2xl gradient-forest text-forest-cream font-bold shadow-lg"
          >
            🔄 {tr("retry")}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative">
      {/* Flying stars overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute text-3xl animate-star-fly"
            style={{
              left: s.x,
              top: s.y,
              ["--tx" as any]: `${s.tx}px`,
              ["--ty" as any]: `${s.ty}px`,
            }}
          >
            ⭐
          </span>
        ))}
      </div>

      <div className="glass rounded-3xl p-6 md:p-10 min-h-[420px]">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm font-bold tracking-wider uppercase text-forest-light">
            {tr("question")} {step + 1} {tr("of")} {QUESTIONS.length}
          </div>
          <Owl message={tr("owlQuiz")} size={70} side="right" />
        </div>

        <div className="h-2 rounded-full bg-forest-pale/60 overflow-hidden mb-8">
          <motion.div
            className="h-full gradient-forest"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-deep text-balance flex items-start gap-3">
              <span>{tr(current.q)}</span>
              <SpeakButton text={tr(current.q)} size="lg" />
            </h2>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {current.options.map((opt, i) => {
                const isPicked = picked === i;
                const isCorrect = i === current.correctIdx;
                const state =
                  picked === null ? "idle" : isPicked && isCorrect ? "right" : isPicked ? "wrong" : isCorrect ? "right" : "dim";
                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: picked === null ? 1.05 : 1 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={(e) => pick(i, e)}
                    disabled={picked !== null}
                    className={`relative p-5 rounded-2xl font-bold text-lg text-left transition-all ${
                      state === "right"
                        ? "bg-forest-light text-white shadow-lg"
                        : state === "wrong"
                        ? "bg-berry text-white"
                        : state === "dim"
                        ? "bg-white/40 text-forest-mid/60"
                        : "bg-white/80 text-forest-deep hover:bg-white"
                    }`}
                  >
                    {tr(opt)}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
