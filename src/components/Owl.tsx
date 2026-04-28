import { motion, AnimatePresence } from "framer-motion";
import { useSpeech } from "@/hooks/useSpeech";

export type OwlAccessory = "none" | "magnifier" | "leaf" | "flame" | "astronaut" | "droplet";

type Props = {
  message?: string;
  size?: number;
  side?: "left" | "right";
  speaking?: boolean;
  accessory?: OwlAccessory;
};

export const Owl = ({ message, size = 120, side = "left", speaking, accessory = "none" }: Props) => {
  const { isSpeaking } = useSpeech();
  const talking = speaking ?? isSpeaking;
  return (
    <div className={`flex items-end gap-3 ${side === "right" ? "flex-row-reverse" : ""}`}>
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="shrink-0"
        style={{ width: size, height: size }}
      >
        <motion.svg
          viewBox="0 0 200 200"
          width={size}
          height={size}
          animate={talking ? { y: [0, -4, 0], rotate: [-2, 2, -2] } : { y: [0, -8, 0] }}
          transition={{ duration: talking ? 0.4 : 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Body */}
          <ellipse cx="100" cy="120" rx="62" ry="68" fill="hsl(var(--forest-mid))" />
          <ellipse cx="100" cy="135" rx="42" ry="48" fill="hsl(60 40% 90%)" />
          {/* Ears */}
          <path d="M50 75 L60 50 L78 70 Z" fill="hsl(var(--forest-deep))" />
          <path d="M150 75 L140 50 L122 70 Z" fill="hsl(var(--forest-deep))" />
          {/* Eyes white */}
          <circle cx="78" cy="98" r="22" fill="white" />
          <circle cx="122" cy="98" r="22" fill="white" />
          {/* Pupils */}
          <motion.g
            animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <circle cx="78" cy="100" r="10" fill="hsl(var(--forest-deep))" />
            <circle cx="122" cy="100" r="10" fill="hsl(var(--forest-deep))" />
            <circle cx="81" cy="97" r="3" fill="white" />
            <circle cx="125" cy="97" r="3" fill="white" />
          </motion.g>
          {/* Beak */}
          <motion.path
            d="M92 115 L100 130 L108 115 Z"
            fill="hsl(45 90% 55%)"
            stroke="hsl(35 80% 40%)"
            strokeWidth="1.5"
            style={{ transformOrigin: "100px 115px" }}
            animate={talking ? { scaleY: [1, 1.6, 1], scaleX: [1, 0.85, 1] } : { scaleY: 1, scaleX: 1 }}
            transition={{ duration: 0.25, repeat: talking ? Infinity : 0 }}
          />
          {/* Feet */}
          <path d="M82 180 L78 192 M88 180 L92 192 M85 180 L85 194" stroke="hsl(35 80% 40%)" strokeWidth="3" strokeLinecap="round" />
          <path d="M118 180 L114 192 M124 180 L128 192 M121 180 L121 194" stroke="hsl(35 80% 40%)" strokeWidth="3" strokeLinecap="round" />
          {/* Wing */}
          <motion.ellipse
            cx="55" cy="130" rx="14" ry="28" fill="hsl(var(--forest-deep))"
            style={{ transformOrigin: "55px 110px" }}
            animate={{ rotate: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx="145" cy="130" rx="14" ry="28" fill="hsl(var(--forest-deep))"
            style={{ transformOrigin: "145px 110px" }}
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>

      {message && (
        <motion.div
          initial={{ opacity: 0, x: side === "right" ? 20 : -20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className={`relative glass rounded-3xl px-5 py-3 max-w-xs text-sm md:text-base font-semibold text-forest-deep`}
        >
          {message}
          <span
            className={`absolute bottom-3 ${side === "right" ? "right-[-8px]" : "left-[-8px]"} w-4 h-4 rotate-45 glass`}
            style={{ borderRadius: 4 }}
          />
        </motion.div>
      )}
    </div>
  );
};
