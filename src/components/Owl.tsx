import { motion, AnimatePresence } from "framer-motion";
import { useSpeech } from "@/hooks/useSpeech";

export type OwlAccessory = "none" | "magnifier" | "leaf" | "flame" | "astronaut" | "droplet";

type Props = {
  message?: string;
  size?: number;
  side?: "left" | "right";
  speaking?: boolean;
  accessory?: OwlAccessory;
  winking?: boolean;
};

export const Owl = ({ message, size = 120, side = "left", speaking, accessory = "none", winking = false }: Props) => {
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
          {/* Wink overlay — covers right eye briefly when winking */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: winking ? [0, 1, 1, 0] : 0 }}
            transition={{ duration: 0.6, times: [0, 0.2, 0.7, 1] }}
          >
            <circle cx="122" cy="98" r="22" fill="hsl(60 40% 90%)" />
            <path d="M104 100 Q122 108 140 100" stroke="hsl(var(--forest-deep))" strokeWidth="3.5" strokeLinecap="round" fill="none" />
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

          {/* Accessory layer — swaps per section */}
          <AnimatePresence mode="wait">
            <motion.g
              key={accessory}
              initial={{ opacity: 0, y: -12, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: -10, scale: 0.6, rotate: 15 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
            >
              {accessory === "magnifier" && (
                <motion.g
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "165px 145px" }}
                >
                  <line x1="150" y1="160" x2="172" y2="138" stroke="hsl(35 70% 30%)" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="178" cy="132" r="14" fill="hsl(200 80% 85% / 0.6)" stroke="hsl(35 70% 30%)" strokeWidth="4" />
                  <circle cx="174" cy="128" r="4" fill="white" opacity="0.8" />
                </motion.g>
              )}
              {accessory === "leaf" && (
                <motion.g
                  animate={{ rotate: [-8, 4, -8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "100px 60px" }}
                >
                  {/* small leaf tucked behind ear */}
                  <path
                    d="M70 58 Q55 40 40 48 Q42 68 60 72 Q72 70 70 58 Z"
                    fill="hsl(120 55% 38%)"
                    stroke="hsl(140 60% 22%)"
                    strokeWidth="1.5"
                  />
                  <path d="M44 50 Q55 60 68 65" stroke="hsl(140 60% 22%)" strokeWidth="1.2" fill="none" />
                  {/* tiny berry */}
                  <circle cx="62" cy="56" r="3.5" fill="hsl(350 75% 55%)" />
                </motion.g>
              )}
              {accessory === "flame" && (
                <motion.g
                  animate={{ scale: [1, 1.12, 1], y: [0, -2, 0] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "100px 38px" }}
                >
                  {/* hovering flame above head */}
                  <path
                    d="M100 20 Q88 38 92 50 Q96 58 100 56 Q104 58 108 50 Q112 38 100 20 Z"
                    fill="hsl(20 95% 58%)"
                  />
                  <path
                    d="M100 30 Q94 42 97 50 Q100 54 103 50 Q106 42 100 30 Z"
                    fill="hsl(48 100% 70%)"
                  />
                </motion.g>
              )}
              {accessory === "astronaut" && (
                <g>
                  {/* glass dome helmet */}
                  <ellipse cx="100" cy="100" rx="58" ry="62" fill="hsl(200 80% 90% / 0.28)" stroke="white" strokeWidth="3" />
                  <ellipse cx="82" cy="80" rx="14" ry="8" fill="white" opacity="0.55" />
                  {/* tiny stars orbiting */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "100px 100px" }}
                  >
                    <circle cx="160" cy="100" r="2.5" fill="hsl(45 100% 70%)" />
                    <circle cx="40" cy="100" r="2" fill="hsl(45 100% 70%)" />
                    <circle cx="100" cy="38" r="2.2" fill="white" />
                  </motion.g>
                </g>
              )}
              {accessory === "droplet" && (
                <motion.g
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* umbrella */}
                  <path
                    d="M55 78 Q100 38 145 78 Z"
                    fill="hsl(265 60% 55%)"
                    stroke="hsl(265 60% 30%)"
                    strokeWidth="2"
                  />
                  <path d="M75 78 Q100 60 100 78 M125 78 Q100 60 100 78" stroke="hsl(265 60% 30%)" strokeWidth="1.5" fill="none" />
                  <line x1="100" y1="78" x2="100" y2="118" stroke="hsl(35 70% 30%)" strokeWidth="2.5" />
                  {/* droplet */}
                  <motion.path
                    d="M158 60 Q154 70 158 76 Q162 70 158 60 Z"
                    fill="hsl(200 85% 55%)"
                    animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                </motion.g>
              )}
            </motion.g>
          </AnimatePresence>
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
