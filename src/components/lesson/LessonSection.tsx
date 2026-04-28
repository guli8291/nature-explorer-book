import { motion } from "framer-motion";
import { useLang } from "@/i18n/LangContext";
import { lessonBlocks, type SectionKey, type Block } from "@/data/lessonBlocks";
import { TaskCard } from "./blocks/TaskCard";
import { SummaryCard } from "./blocks/SummaryCard";
import { ActionCard } from "./blocks/ActionCard";
import { FactCard } from "./blocks/FactCard";

type Props = {
  lessonId: number;
  section: SectionKey;
  /** Optional header rendered above blocks (e.g. existing intro/scientists hero) */
  header?: React.ReactNode;
  /** Shown when the section has no blocks AND no header */
  emptyFallback?: React.ReactNode;
};

const renderBlock = (block: Block, lang: "ru" | "kz" | "en") => {
  switch (block.type) {
    case "task":
      return <TaskCard data={block.data[lang]} />;
    case "summary":
      return <SummaryCard data={block.data[lang]} />;
    case "action":
      return <ActionCard data={block.data[lang]} />;
    case "fact":
      return <FactCard data={block.data[lang]} />;
  }
};

export const LessonSection = ({ lessonId, section, header, emptyFallback }: Props) => {
  const { lang } = useLang();
  const blocks = lessonBlocks[lessonId]?.[section] ?? [];

  if (blocks.length === 0 && !header) {
    return emptyFallback ? <>{emptyFallback}</> : null;
  }

  return (
    <div className="space-y-5">
      {header}
      {blocks.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 auto-rows-fr">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.15 + i * 0.18,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {renderBlock(block, lang)}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
