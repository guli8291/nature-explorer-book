import { motion } from "framer-motion";
import { Owl } from "@/components/Owl";
import { SpeakButton } from "@/components/SpeakButton";
import { useLang } from "@/i18n/LangContext";

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: i * 0.15, duration: 0.5 },
});

const BG = [
  "from-forest-light/40 to-forest-pale/60",
  "from-sun/40 to-forest-pale/60",
  "from-berry/30 to-sun/30",
];
const EMOJI = ["🌍", "🌱", "🔍"];

export const LessonTheory = ({ lessonId }: { lessonId: number }) => {
  const { tr, trOpt } = useLang();

  const paragraphs = [1, 2, 3]
    .map((i) => trOpt(`l${lessonId}_theory_p${i}`))
    .map((text, i) => ({ text, emoji: EMOJI[i], bg: BG[i] }))
    .filter((c) => !!c.text) as { text: string; emoji: string; bg: string }[];

  if (paragraphs.length === 0) {
    return (
      <div className="glass rounded-3xl p-8 md:p-12 min-h-[420px] grid place-items-center text-center">
        <div>
          <div className="text-6xl mb-4">📖</div>
          <h3 className="font-display text-3xl text-forest-deep">{tr("theory")}</h3>
          <p className="mt-2 text-forest-mid font-semibold">{tr("comingSoon")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Owl message={tr("owlTheory")} size={100} side="right" />
      </div>
      {paragraphs.map((c, i) => (
        <motion.div
          key={i}
          {...fadeUp(i)}
          className={`glass rounded-3xl p-6 md:p-8 flex gap-5 items-center bg-gradient-to-br ${c.bg}`}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
            className="text-5xl md:text-6xl shrink-0"
          >
            {c.emoji}
          </motion.div>
          <p className="flex-1 text-base md:text-lg text-forest-deep font-semibold leading-relaxed">
            {c.text}
          </p>
          <SpeakButton text={c.text} size="md" />
        </motion.div>
      ))}
    </div>
  );
};
