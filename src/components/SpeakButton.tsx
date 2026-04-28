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
  const { speak, stop, speakingId, supported } = useSpeech();
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

  return (
    <motion.button
      type="button"
      onClick={handle}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      animate={active ? { scale: [1, 1.15, 1] } : { scale: 1 }}
      transition={active ? { duration: 0.9, repeat: Infinity } : { duration: 0.2 }}
      aria-label={active ? "Stop" : "Listen"}
      className={`inline-flex items-center justify-center rounded-full shrink-0 align-middle shadow-md transition-colors ${
        active ? "bg-sun text-forest-deep" : "bg-white/80 text-forest-deep hover:bg-white"
      } ${s.box} ${className}`}
    >
      {active ? <VolumeX size={s.icon} /> : <Volume2 size={s.icon} />}
      {active && (
        <span className="absolute inline-flex h-full w-full rounded-full bg-sun/40 animate-ping" />
      )}
    </motion.button>
  );
};
