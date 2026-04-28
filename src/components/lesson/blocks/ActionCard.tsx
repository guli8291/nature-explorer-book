import { useState } from "react";
import { SpeakButton } from "@/components/SpeakButton";

export type ActionCardData = {
  title?: string;
  prompt: string;
  placeholder?: string;
  multiline?: boolean;
};

export const ActionCard = ({ data }: { data: ActionCardData }) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="rounded-3xl p-6 md:p-7 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(200 80% 90% / 0.85) 0%, hsl(190 70% 82% / 0.8) 100%)",
        backdropFilter: "blur(20px) saturate(180%)",
        boxShadow:
          "0 12px 40px -12px hsl(210 60% 35% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.7)",
      }}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/40 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">✏️</span>
          <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
            {data.title ?? "Самостоятельная работа"}
          </h3>
        </div>
        <div className="flex items-start gap-2 mb-3">
          <p className="flex-1 text-base md:text-lg text-forest-deep/90 font-semibold leading-relaxed">
            {data.prompt}
          </p>
          <SpeakButton text={data.prompt} size="sm" />
        </div>

        {data.multiline ? (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={data.placeholder ?? "Напиши свой ответ..."}
            rows={3}
            className="w-full rounded-2xl px-4 py-3 bg-white/80 text-forest-deep font-semibold placeholder:text-forest-mid/60 outline-none transition-all duration-300 resize-none"
            style={{
              boxShadow: focused
                ? "0 0 0 3px hsl(190 90% 55% / 0.5), 0 0 24px hsl(190 90% 55% / 0.55), inset 0 1px 0 hsl(0 0% 100% / 0.6)"
                : "inset 0 1px 0 hsl(0 0% 100% / 0.6), 0 2px 8px hsl(210 50% 30% / 0.1)",
            }}
          />
        ) : (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={data.placeholder ?? "Напиши свой ответ..."}
            className="w-full rounded-2xl px-4 py-3 bg-white/80 text-forest-deep font-semibold placeholder:text-forest-mid/60 outline-none transition-all duration-300"
            style={{
              boxShadow: focused
                ? "0 0 0 3px hsl(190 90% 55% / 0.5), 0 0 24px hsl(190 90% 55% / 0.55), inset 0 1px 0 hsl(0 0% 100% / 0.6)"
                : "inset 0 1px 0 hsl(0 0% 100% / 0.6), 0 2px 8px hsl(210 50% 30% / 0.1)",
            }}
          />
        )}
      </div>
    </div>
  );
};
