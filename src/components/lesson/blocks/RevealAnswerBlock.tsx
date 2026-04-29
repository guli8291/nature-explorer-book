import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpeakButton } from "@/components/SpeakButton";

export type RevealItem = { emoji?: string; src?: string; alt?: string; label?: string };

export type RevealAnswerBlockData = {
  title?: string;
  question: string;
  items: RevealItem[];
  answer: string;
  buttonLabel?: string;
};

export const RevealAnswerBlock = ({ data }: { data: RevealAnswerBlockData }) => {
  const [shown, setShown] = useState(false);
  return (
    <div
      className="rounded-3xl p-6 md:p-7 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(45 90% 88% / 0.92) 0%, hsl(50 95% 78% / 0.88) 100%)",
        boxShadow:
          "0 12px 40px -12px hsl(45 70% 35% / 0.32), inset 0 1px 0 hsl(0 0% 100% / 0.7)",
      }}
    >
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🌼</span>
          <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
            {data.title ?? "Узнай растения"}
          </h3>
        </div>
        <div className="flex items-start gap-2 mb-3">
          <p className="flex-1 text-base text-forest-deep/90 font-semibold">{data.question}</p>
          <SpeakButton text={data.question} size="sm" />
        </div>

        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {data.items.map((it, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="aspect-square rounded-2xl bg-white/85 grid place-items-center overflow-hidden shadow-md"
            >
              {it.src ? (
                <img src={it.src} alt={it.alt ?? ""} className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl md:text-5xl">{it.emoji}</span>
              )}
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setShown((s) => !s)}
          className="px-5 py-2.5 rounded-2xl gradient-forest text-forest-cream font-bold shadow-md"
        >
          {shown ? "Скрыть ответ" : data.buttonLabel ?? "Проверить ответ"}
        </button>

        <AnimatePresence>
          {shown && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className="rounded-2xl bg-white/80 p-3 flex items-start gap-2">
                <span className="text-xl">✅</span>
                <p className="flex-1 text-base text-forest-deep font-bold">{data.answer}</p>
                <SpeakButton text={data.answer} size="sm" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
