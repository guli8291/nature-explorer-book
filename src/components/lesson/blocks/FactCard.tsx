import { Lightbulb, Sparkles } from "lucide-react";
import { SpeakButton } from "@/components/SpeakButton";

export type FactCardData = {
  title?: string;
  text: string;
  keywords?: string[];
  icon?: "bulb" | "sparkles";
};

export const FactCard = ({ data }: { data: FactCardData }) => {
  const Icon = data.icon === "sparkles" ? Sparkles : Lightbulb;
  return (
    <div
      className="rounded-3xl p-6 md:p-7 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(48 95% 85% / 0.95) 0%, hsl(40 95% 75% / 0.88) 100%)",
        boxShadow:
          "0 12px 40px -12px hsl(40 80% 40% / 0.35), inset 0 1px 0 hsl(0 0% 100% / 0.7), inset 0 -8px 16px -8px hsl(40 70% 45% / 0.18)",
      }}
    >
      <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/40 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-9 rounded-xl bg-white/80 grid place-items-center shadow-sm">
            <Icon className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
            {data.title ?? "Это интересно"}
          </h3>
        </div>
        <div className="flex items-start gap-2">
          <p className="flex-1 text-base md:text-lg text-forest-deep/90 font-semibold leading-relaxed">
            {data.text}
          </p>
          <SpeakButton text={data.text} size="sm" />
        </div>
        {data.keywords && data.keywords.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {data.keywords.map((k, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/80 text-forest-deep text-sm font-bold shadow-sm"
              >
                #{k}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
