import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Owl } from "@/components/Owl";
import { SpeakButton } from "@/components/SpeakButton";
import { useLang } from "@/i18n/LangContext";

type Item = { id: string; emoji: string; group: "living" | "nonliving" };

const ITEMS: Item[] = [
  { id: "1", emoji: "🌳", group: "living" },
  { id: "2", emoji: "🪨", group: "nonliving" },
  { id: "3", emoji: "🐰", group: "living" },
  { id: "4", emoji: "💧", group: "nonliving" },
  { id: "5", emoji: "🦋", group: "living" },
  { id: "6", emoji: "☀️", group: "nonliving" },
];

export const LessonPractice = ({ lessonId }: { lessonId: number }) => {
  const { tr, trOpt } = useLang();
  const [placed, setPlaced] = useState<Record<string, "living" | "nonliving">>({});
  const [wrongShake, setWrongShake] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<string | null>(null);

  if (lessonId !== 1) {
    const body = trOpt(`l${lessonId}_experiments`) ?? tr("experiments_body");
    return (
      <div className="glass rounded-3xl p-6 md:p-12 min-h-[420px] relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-sun/30 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h3 className="font-display font-black text-3xl md:text-5xl text-forest-deep flex items-start gap-3">
              <span>🧪 {tr("nav_experiments")}</span>
              <SpeakButton text={tr("nav_experiments")} size="lg" />
            </h3>
            <div className="mt-4 flex items-start gap-3 max-w-2xl">
              <p className="text-lg md:text-xl text-forest-mid font-semibold">{body}</p>
              <SpeakButton text={body} size="md" />
            </div>
          </div>
          <Owl message={tr("owlPractice")} size={120} side="right" />
        </div>
      </div>
    );
  }

  const onDrop = (e: React.DragEvent, group: "living" | "nonliving") => {
    e.preventDefault();
    setDragOver(null);
    const id = e.dataTransfer.getData("text/plain");
    const item = ITEMS.find((i) => i.id === id);
    if (!item) return;
    if (item.group === group) {
      setPlaced((p) => ({ ...p, [id]: group }));
    } else {
      setWrongShake(id);
      setTimeout(() => setWrongShake(null), 500);
    }
  };

  const remaining = ITEMS.filter((i) => !placed[i.id]);
  const allDone = remaining.length === 0;

  const Zone = ({ group, label, color, emoji }: { group: "living" | "nonliving"; label: string; color: string; emoji: string }) => (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragOver(group); }}
      onDragLeave={() => setDragOver(null)}
      onDrop={(e) => onDrop(e, group)}
      className={`relative rounded-3xl p-5 min-h-[200px] border-2 border-dashed transition-all ${
        dragOver === group ? "scale-[1.02] border-solid" : ""
      }`}
      style={{ borderColor: color, background: `${color}22` }}
    >
      <div className="flex items-center gap-2 font-display font-bold text-forest-deep text-lg">
        <span className="text-2xl">{emoji}</span> {label}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <AnimatePresence>
          {ITEMS.filter((i) => placed[i.id] === group).map((i) => (
            <motion.div
              key={i.id}
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="text-5xl bg-white/70 rounded-2xl w-16 h-16 grid place-items-center shadow"
            >
              {i.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="font-bold text-forest-mid text-lg flex items-center gap-2">👉 {tr("dragHint")} <SpeakButton text={tr("dragHint")} size="sm" /></p>
        <Owl message={tr("owlPractice")} size={90} side="right" />
      </div>

      {/* Items pool */}
      <div className="glass rounded-3xl p-5 flex flex-wrap gap-3 justify-center min-h-[100px]">
        <AnimatePresence>
          {remaining.map((i) => (
            <motion.div
              key={i.id}
              layout
              draggable
              onDragStart={(e: any) => e.dataTransfer.setData("text/plain", i.id)}
              animate={wrongShake === i.id ? { x: [0, -10, 10, -10, 10, 0] } : {}}
              whileHover={{ scale: 1.15, y: -4 }}
              whileDrag={{ scale: 1.2, rotate: 8 }}
              className="text-5xl cursor-grab active:cursor-grabbing select-none bg-white/80 rounded-2xl w-16 h-16 grid place-items-center shadow-md"
            >
              {i.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-2xl font-display font-bold text-forest-deep"
          >
            🎉 {tr("correct")}
          </motion.div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Zone group="living" label={tr("living")} color="hsl(110 50% 45%)" emoji="🌿" />
        <Zone group="nonliving" label={tr("nonliving")} color="hsl(210 40% 55%)" emoji="🪨" />
      </div>
    </div>
  );
};
