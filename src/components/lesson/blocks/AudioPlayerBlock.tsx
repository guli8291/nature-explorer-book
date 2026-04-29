import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { useSpeech } from "@/hooks/useSpeech";
import { useLang } from "@/i18n/LangContext";

export type AudioPlayerBlockData = {
  title?: string;
  /** Optional real audio URL. If absent, falls back to TTS of `text`. */
  src?: string;
  /** Text to be read aloud via TTS when no `src`. */
  text?: string;
  /** Optional displayed transcript / caption */
  caption?: string;
  durationLabel?: string;
};

export const AudioPlayerBlock = ({ data }: { data: AudioPlayerBlockData }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const { speak, stop } = useSpeech();
  const { lang } = useLang();

  useEffect(() => () => stop(), [stop]);

  const toggle = () => {
    if (data.src) {
      const a = audioRef.current;
      if (!a) return;
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        a.play();
        setPlaying(true);
      }
    } else if (data.text) {
      if (playing) {
        stop();
        setPlaying(false);
      } else {
        speak(data.text, lang, "audio-block");
        setPlaying(true);
        // Approximate end of speech
        const ms = Math.max(2500, data.text.length * 70);
        setTimeout(() => setPlaying(false), ms);
      }
    }
  };

  return (
    <div
      className="rounded-3xl p-4 md:p-5 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(220 70% 92% / 0.9) 0%, hsl(240 70% 86% / 0.85) 100%)",
        boxShadow:
          "0 8px 30px -10px hsl(230 50% 35% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.7)",
      }}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="w-12 h-12 rounded-2xl gradient-forest text-forest-cream grid place-items-center shadow-md hover:scale-105 transition-transform"
          aria-label={playing ? "pause" : "play"}
        >
          {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-forest-mid" />
            <div className="font-display font-black text-forest-deep truncate">
              {data.title ?? "Аудио"}
            </div>
            {data.durationLabel && (
              <span className="text-xs font-bold text-forest-mid">{data.durationLabel}</span>
            )}
          </div>
          {data.caption && (
            <p className="text-sm text-forest-deep/80 font-semibold truncate">{data.caption}</p>
          )}
          <div className="mt-1.5 h-1.5 rounded-full bg-white/60 overflow-hidden">
            <div
              className={`h-full gradient-forest transition-all ${playing ? "animate-pulse" : ""}`}
              style={{ width: playing ? "60%" : "0%" }}
            />
          </div>
        </div>
      </div>
      {data.src && (
        <audio
          ref={audioRef}
          src={data.src}
          onEnded={() => setPlaying(false)}
          onPause={() => setPlaying(false)}
        />
      )}
    </div>
  );
};
