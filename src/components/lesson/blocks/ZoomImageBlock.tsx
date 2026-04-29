import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SpeakButton } from "@/components/SpeakButton";

export type ZoomImage = {
  src?: string;
  emoji?: string;
  alt?: string;
  caption?: string;
};

export type ZoomImageBlockData = {
  title?: string;
  instruction?: string;
  images: ZoomImage[];
};

const ZoomItem = ({ img }: { img: ZoomImage }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const point = "touches" in e ? e.touches[0] : (e as React.MouseEvent);
    const x = ((point.clientX - rect.left) / rect.width) * 100;
    const y = ((point.clientY - rect.top) / rect.height) * 100;
    setPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <div className="space-y-2">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setPos(null)}
        onTouchMove={handleMove}
        onTouchEnd={() => setPos(null)}
        className="relative aspect-square rounded-2xl bg-white/80 overflow-hidden shadow-md cursor-zoom-in"
      >
        {img.src ? (
          <img src={img.src} alt={img.alt ?? ""} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center text-7xl">{img.emoji}</div>
        )}
        {pos && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="pointer-events-none absolute w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden"
            style={{
              left: `calc(${pos.x}% - 56px)`,
              top: `calc(${pos.y}% - 56px)`,
              backgroundImage: img.src ? `url(${img.src})` : undefined,
              backgroundSize: "300%",
              backgroundPosition: `${pos.x}% ${pos.y}%`,
              backgroundColor: img.src ? undefined : "white",
              fontSize: img.src ? undefined : "8rem",
            }}
          >
            {!img.src && (
              <div className="w-full h-full grid place-items-center text-[10rem]">{img.emoji}</div>
            )}
          </motion.div>
        )}
      </div>
      {img.caption && (
        <p className="text-sm text-forest-deep/80 font-semibold text-center">{img.caption}</p>
      )}
    </div>
  );
};

export const ZoomImageBlock = ({ data }: { data: ZoomImageBlockData }) => {
  return (
    <div
      className="rounded-3xl p-6 md:p-7 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(45 80% 90% / 0.9) 0%, hsl(35 75% 84% / 0.85) 100%)",
        boxShadow:
          "0 12px 40px -12px hsl(40 60% 30% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.7)",
      }}
    >
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🔍</span>
          <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
            {data.title ?? "Рассмотри детали"}
          </h3>
        </div>
        {data.instruction && (
          <div className="flex items-start gap-2 mb-4">
            <p className="flex-1 text-base text-forest-deep/90 font-semibold">{data.instruction}</p>
            <SpeakButton text={data.instruction} size="sm" />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          {data.images.map((img, i) => (
            <ZoomItem key={i} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};
