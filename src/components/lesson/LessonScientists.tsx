import { motion } from "framer-motion";
import { Owl } from "@/components/Owl";
import { SpeakButton } from "@/components/SpeakButton";
import { useLang } from "@/i18n/LangContext";

export const LessonScientists = ({ lessonId }: { lessonId?: number }) => {
  const { tr, trOpt } = useLang();
  const body = (lessonId && trOpt(`l${lessonId}_scientists`)) ?? tr("scientists_body");
  return (
    <div className="glass rounded-3xl p-6 md:p-12 min-h-[420px] relative overflow-hidden">
      <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-forest-light/30 blur-3xl" />
      <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-3xl md:text-5xl text-forest-deep flex items-start gap-3"
          >
            <span>🔬 {tr("nav_scientists")}</span>
            <SpeakButton text={tr("nav_scientists")} size="lg" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex items-start gap-3 max-w-2xl"
          >
            <p className="text-lg md:text-xl text-forest-mid font-semibold">{body}</p>
            <SpeakButton text={body} size="md" />
          </motion.div>
        </div>
        <Owl message={tr("owlTheory")} size={120} side="right" />
      </div>
    </div>
  );
};
