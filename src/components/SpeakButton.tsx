import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useId } from "react";
import { useSpeech } from "@/hooks/useSpeech";
import { useLang } from "@/i18n/LangContext";

type Props = {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { box: "w-7 h-7", icon: 14 },
  md: { box: "w-9 h-9", icon: 18 },
  lg: { box: "w-11 h-11", icon: 22 },
};

export const SpeakButton = ({ text, size = "md", className = "" }: Props) => {
  const { speak, stop, speakingId, speechLevel, supported } = useSpeech();
  const { lang } = useLang();
  const id = useId();
  const active = speakingId === id;
  const s = sizes[size];

  if (!supported) return null;

  const handle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (active) stop();
    else speak(text, lang, id);
  };

  // Sync opacity & scale to pseudo "volume" while speaking
  const opacity = active ? 0.55 + speechLevel * 0.45 : 1;
  const scale = active ? 1 + speechLevel * 0.18 : 1;

  return (
    <motion.button
      type="button"
      onClick={handle}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      animate={{ opacity, scale }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      aria-label={active ? "Stop" : "Listen"}
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 align-middle shadow-md transition-colors ${
        active ? "bg-sun text-forest-deep" : "bg-white/80 text-forest-deep hover:bg-white"
      } ${s.box} ${className}`}
    >
      {active ? <VolumeX size={s.icon} /> : <Volume2 size={s.icon} />}
      {active && (
        <span
          className="absolute inset-0 rounded-full bg-sun/40"
          style={{ opacity: speechLevel * 0.6, transform: `scale(${1 + speechLevel * 0.6})`, transition: "all 120ms ease-out" }}
        />
      )}
    </motion.button>
  );
};
