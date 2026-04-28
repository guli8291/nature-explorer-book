// Lesson catalog. Edit titles per language here later in VS Code.
import { Lang } from "@/i18n/translations";

export type LessonMeta = {
  id: number;
  icon: string; // emoji icon
  title: Record<Lang, string>;
};

const ICONS = [
  "🔬", "🌳", "🦋", "🌞", "🌧️", "🍃", "🐦", "🐟", "🌸", "🍄",
  "🌍", "⛰️", "🌊", "❄️", "🔥", "🌱", "🐝", "🦊", "🐻", "🌙",
  "⭐", "🌷", "🍂", "☃️", "🐢", "🦅", "🐛", "🌾", "🪨", "💧",
  "🌬️", "🦔", "🌻",
];

export const lessons: LessonMeta[] = Array.from({ length: 33 }, (_, i) => {
  const n = i + 1;
  return {
    id: n,
    icon: ICONS[i] ?? "📖",
    title: {
      kz: `${n}-сабақ`,
      ru: `Урок ${n}`,
      en: `Lesson ${n}`,
    },
  };
});
