import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SpeakButton } from "@/components/SpeakButton";

export type SortItem = { id: string; label: string; emoji?: string; categoryId: string };
export type SortCategory = { id: string; label: string; emoji?: string };

export type SortGameBlockData = {
  title?: string;
  instruction?: string;
  categories: SortCategory[];
  items: SortItem[];
  checkLabel?: string;
};

export const SortGameBlock = ({ data }: { data: SortGameBlockData }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Record<string, string>>({}); // itemId -> categoryId
  const [checked, setChecked] = useState(false);

  const handlePickItem = (id: string) => {
    if (checked) return;
    setSelectedItem(id === selectedItem ? null : id);
  };

  const handlePickCategory = (catId: string) => {
    if (checked || !selectedItem) return;
    setPlaced((p) => ({ ...p, [selectedItem]: catId }));
    setSelectedItem(null);
  };

  const allPlaced = data.items.every((it) => placed[it.id]);

  const isCorrect = (id: string) => placed[id] === data.items.find((it) => it.id === id)?.categoryId;

  return (
    <div
      className="rounded-3xl p-6 md:p-7 relative overflow-hidden border border-white/60 md:col-span-2"
      style={{
        background:
          "linear-gradient(135deg, hsl(260 55% 90% / 0.9) 0%, hsl(280 60% 84% / 0.85) 100%)",
        boxShadow:
          "0 12px 40px -12px hsl(270 50% 30% / 0.32), inset 0 1px 0 hsl(0 0% 100% / 0.7)",
      }}
    >
      <div className="relative">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <h3 className="font-display font-black text-xl md:text-2xl text-forest-deep">
              {data.title ?? "Игра-классификатор"}
            </h3>
          </div>
          {data.instruction && <SpeakButton text={data.instruction} size="sm" />}
        </div>
        {data.instruction && (
          <p className="mb-4 text-base text-forest-deep/90 font-semibold">{data.instruction}</p>
        )}

        {/* Categories (drop zones) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {data.categories.map((cat) => {
            const itemsHere = data.items.filter((it) => placed[it.id] === cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => handlePickCategory(cat.id)}
                disabled={!selectedItem || checked}
                className={`min-h-[110px] rounded-2xl bg-white/80 p-3 text-left shadow-sm transition-all ${
                  selectedItem ? "ring-2 ring-forest-deep/40 hover:ring-forest-deep cursor-pointer" : "opacity-90"
                }`}
              >
                <div className="font-display font-black text-forest-deep flex items-center gap-2">
                  {cat.emoji && <span>{cat.emoji}</span>}
                  {cat.label}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {itemsHere.map((it) => (
                    <span
                      key={it.id}
                      className={`px-2 py-1 rounded-lg text-xs font-bold ${
                        checked
                          ? isCorrect(it.id)
                            ? "bg-emerald-200 text-emerald-900"
                            : "bg-rose-200 text-rose-900"
                          : "bg-forest-pale/60 text-forest-deep"
                      }`}
                    >
                      {it.emoji} {it.label}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Items pool */}
        <div className="flex flex-wrap gap-2">
          {data.items
            .filter((it) => !placed[it.id])
            .map((it) => (
              <motion.button
                key={it.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePickItem(it.id)}
                className={`px-3 py-2 rounded-xl font-bold text-sm shadow-sm transition-all ${
                  selectedItem === it.id
                    ? "bg-forest-deep text-forest-cream scale-105"
                    : "bg-white/80 text-forest-deep hover:scale-105"
                }`}
              >
                {it.emoji && <span className="mr-1">{it.emoji}</span>}
                {it.label}
              </motion.button>
            ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3">
          <button
            disabled={!allPlaced}
            onClick={() => setChecked(true)}
            className="px-5 py-2.5 rounded-2xl gradient-forest text-forest-cream font-bold shadow-md disabled:opacity-40"
          >
            {data.checkLabel ?? "Проверить себя"}
          </button>
          {checked && (
            <button
              onClick={() => {
                setChecked(false);
                setPlaced({});
              }}
              className="px-4 py-2.5 rounded-2xl bg-white/80 font-bold text-forest-deep"
            >
              ↺
            </button>
          )}
          {checked && (
            <div className="flex items-center gap-1.5 font-bold text-forest-deep">
              <Check className="w-4 h-4 text-emerald-600" />
              {data.items.filter((it) => isCorrect(it.id)).length} / {data.items.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
