import { motion } from "framer-motion";
import { SpeakButton } from "@/components/SpeakButton";

export type TaskImage = { emoji?: string; src?: string; alt?: string };

export type TaskCardData = {
  title?: string;
  instruction: string;
  images?: TaskImage[];
};

export const TaskCard = ({ data }: { data: TaskCardData }) => {
  return (
    <div
      className="rounded-3xl p-6 md:p-7 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(150 55% 88% / 0.9) 0%, hsl(165 60% 82% / 0.85) 100%)",
        boxShadow:
          "0 12px 40px -12px hsl(145 50% 25% / 0.35), inset 0 1px 0 hsl(0 0% 100% / 0.7), inset 0 -8px 16px -8px hsl(145 40% 40% / 0.15)",
      }}
    >
      <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-white/40 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🧩</span>
          <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
            {data.title ?? "Задание"}
          </h3>
        </div>
        <div className="flex items-start gap-2">
          <p className="flex-1 text-base md:text-lg text-forest-deep/90 font-semibold leading-relaxed">
            {data.instruction}
          </p>
          <SpeakButton text={data.instruction} size="sm" />
        </div>

        {data.images && data.images.length > 0 && (
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
            {data.images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="aspect-square rounded-2xl bg-white/80 grid place-items-center overflow-hidden shadow-md cursor-pointer"
              >
                {img.src ? (
                  <img src={img.src} alt={img.alt ?? ""} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl md:text-5xl">{img.emoji}</span>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
