import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SpeakButton } from "@/components/SpeakButton";

export type CarouselSlide = {
  emoji?: string;
  src?: string;
  alt?: string;
  caption?: string;
  question?: string;
};

export type CarouselBlockData = {
  title?: string;
  groupLabel?: string;
  slides: CarouselSlide[];
};

export const CarouselBlock = ({ data }: { data: CarouselBlockData }) => {
  const [i, setI] = useState(0);
  const slide = data.slides[i];
  const prev = () => setI((p) => (p - 1 + data.slides.length) % data.slides.length);
  const next = () => setI((p) => (p + 1) % data.slides.length);

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
        <div className="flex items-center justify-between gap-2 mb-3">
          <div>
            {data.groupLabel && (
              <div className="text-xs font-bold uppercase tracking-wider text-forest-mid">
                {data.groupLabel}
              </div>
            )}
            <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
              {data.title ?? "Карусель"}
            </h3>
          </div>
          <div className="flex gap-1.5">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white/80 grid place-items-center shadow-sm hover:scale-105 transition-transform"
              aria-label="prev"
            >
              <ChevronLeft className="w-4 h-4 text-forest-deep" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white/80 grid place-items-center shadow-sm hover:scale-105 transition-transform"
              aria-label="next"
            >
              <ChevronRight className="w-4 h-4 text-forest-deep" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
            className="aspect-[4/3] rounded-2xl bg-white/80 grid place-items-center overflow-hidden shadow-md"
          >
            {slide.src ? (
              <img src={slide.src} alt={slide.alt ?? ""} className="w-full h-full object-cover" />
            ) : (
              <span className="text-7xl md:text-8xl">{slide.emoji}</span>
            )}
          </motion.div>
        </AnimatePresence>

        {(slide.caption || slide.question) && (
          <div className="mt-3 flex items-start gap-2">
            <p className="flex-1 text-base text-forest-deep/90 font-semibold leading-relaxed">
              {slide.caption ?? slide.question}
            </p>
            <SpeakButton text={slide.caption ?? slide.question ?? ""} size="sm" />
          </div>
        )}

        <div className="mt-3 flex justify-center gap-1.5">
          {data.slides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-6 bg-forest-deep" : "w-2 bg-forest-deep/30"
              }`}
              aria-label={`slide ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
