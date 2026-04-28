import { SpeakButton } from "@/components/SpeakButton";

export type SummaryCardData = {
  title?: string;
  /** Use **word** to highlight key terms */
  text: string;
  terms?: string[];
};

const renderHighlighted = (text: string, terms: string[] = []) => {
  // Split by **bold** markers
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-black text-berry">
          {part.slice(2, -2)}
        </span>
      );
    }
    // Highlight extra terms case-sensitively
    let nodes: (string | JSX.Element)[] = [part];
    terms.forEach((term) => {
      nodes = nodes.flatMap((n, k) => {
        if (typeof n !== "string") return [n];
        const segs = n.split(term);
        const out: (string | JSX.Element)[] = [];
        segs.forEach((s, j) => {
          out.push(s);
          if (j < segs.length - 1) {
            out.push(
              <span key={`${i}-${k}-${j}`} className="font-black text-berry">
                {term}
              </span>
            );
          }
        });
        return out;
      });
    });
    return <span key={i}>{nodes}</span>;
  });
};

export const SummaryCard = ({ data }: { data: SummaryCardData }) => {
  return (
    <div
      className="rounded-3xl p-6 md:p-7 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(350 80% 92% / 0.92) 0%, hsl(15 75% 88% / 0.88) 100%)",
        boxShadow:
          "0 12px 40px -12px hsl(350 60% 40% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.7), inset 0 -8px 16px -8px hsl(350 50% 50% / 0.12)",
      }}
    >
      <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/40 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">⭐</span>
          <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
            {data.title ?? "Важно запомнить"}
          </h3>
        </div>
        <div className="flex items-start gap-2">
          <p className="flex-1 text-base md:text-lg text-forest-deep/90 font-semibold leading-relaxed">
            {renderHighlighted(data.text, data.terms)}
          </p>
          <SpeakButton text={data.text.replace(/\*\*/g, "")} size="sm" />
        </div>
      </div>
    </div>
  );
};
