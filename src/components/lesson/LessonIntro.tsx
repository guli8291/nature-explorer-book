import { motion } from "framer-motion";
import { Owl } from "@/components/Owl";
import { useLang } from "@/i18n/LangContext";

type Props = { isLesson1: boolean; lessonTitle: string };

export const LessonIntro = ({ isLesson1, lessonTitle }: Props) => {
  const { tr } = useLang();
  return (
    <div className="glass rounded-3xl p-6 md:p-12 min-h-[420px] relative overflow-hidden">
      <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-sun/30 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full bg-forest-light/30 blur-3xl" />

      <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-forest-deep text-forest-cream text-xs font-bold tracking-wider uppercase"
          >
            ✨ {tr("intro")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display font-black text-4xl md:text-6xl text-forest-deep leading-tight"
          >
            {isLesson1 ? tr("l1_title") : lessonTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-forest-mid font-semibold max-w-xl"
          >
            {isLesson1 ? tr("l1_intro") : tr("comingSoon")}
          </motion.p>
        </div>

        <Owl message={tr("owlGreeting")} size={140} side="right" />
      </div>
    </div>
  );
};
