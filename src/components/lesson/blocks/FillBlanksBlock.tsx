import { useState } from "react";
import { SpeakButton } from "@/components/SpeakButton";

export type FillBlanksBlockData = {
  title?: string;
  /** Use ___ as a blank marker (3 underscores) */
  template: string;
  /** Optional hints shown under each blank */
  hints?: string[];
};

export const FillBlanksBlock = ({ data }: { data: FillBlanksBlockData }) => {
  const parts = data.template.split("___");
  const blanksCount = parts.length - 1;
  const [values, setValues] = useState<string[]>(Array(blanksCount).fill(""));
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);

  return (
    <div
      className="rounded-3xl p-6 md:p-7 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(190 70% 90% / 0.9) 0%, hsl(200 75% 82% / 0.85) 100%)",
        boxShadow:
          "0 12px 40px -12px hsl(200 60% 30% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.7)",
      }}
    >
      <div className="relative">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
              {data.title ?? "Закончи предложение"}
            </h3>
          </div>
          <SpeakButton text={data.template.replace(/___/g, "...")} size="sm" />
        </div>

        <p className="text-base md:text-lg text-forest-deep font-semibold leading-loose">
          {parts.map((p, i) => (
            <span key={i}>
              {p}
              {i < blanksCount && (
                <input
                  value={values[i]}
                  onChange={(e) => {
                    const v = [...values];
                    v[i] = e.target.value;
                    setValues(v);
                  }}
                  onFocus={() => setFocusedIdx(i)}
                  onBlur={() => setFocusedIdx(null)}
                  placeholder={data.hints?.[i] ?? ""}
                  className="inline-block mx-1 px-3 py-1 rounded-lg bg-white/85 text-forest-deep font-bold outline-none transition-all min-w-[100px]"
                  style={{
                    boxShadow:
                      focusedIdx === i
                        ? "0 0 0 3px hsl(190 90% 55% / 0.5), 0 0 16px hsl(190 90% 55% / 0.4)"
                        : "inset 0 1px 0 hsl(0 0% 100% / 0.6)",
                  }}
                />
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
